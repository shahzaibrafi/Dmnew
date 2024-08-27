<?php

/**
 *POST CREATEION WITH Metabox
 *
 */

namespace BitCode\BitForm\Core\Integration\MetaBox;

// use BitCode\BitFormPro\Core\Util\WpFileHandler;
use BitCode\BitForm\Core\Form\FormManager;
use BitCode\BitForm\Core\Integration\IntegrationHandler;
use BitCode\BitForm\Core\Util\SmartTags;
use BitCode\BitForm\Core\Util\WpFileHandler;

/**
 * Provide functionality for POST CREATEION WITH MetaBox
 */
class MetaBoxHandler
{
  private $_formID;

  private $_wpdb;

  private const UPLOAD_FIELD = ['file-up', 'advanced-file-up'];

  public function __construct($integrationID, $fromID)
  {
    $this->_formID = $fromID;

    global $wpdb;
    $this->_wpdb = $wpdb;
  }

  /**
   * Helps to register ajax function's with wp
   *
   * @return null
   */
  private function smartTagMappingValue($fieldMap)
  {
    $specialTagFieldValue = [];
    $data = SmartTags::getPostUserData(true);
    $specialTagFields = SmartTags::smartTagFieldKeys();

    foreach ($fieldMap as $value) {
      if (isset($value->formField)) {
        $triggerValue = $value->formField;
        if (in_array($triggerValue, $specialTagFields)) {
          $specialTagFieldValue[$value->formField] = SmartTags::getSmartTagValue($triggerValue, $data);
        }
      }
    }
    return $specialTagFieldValue;
  }

  private function postFieldMapping($fieldData, $post_map, $formFields, $fieldValues, $postID, $entryID)
  {
    $uploadFeatureImg = new WpFileHandler($this->_formID);
    foreach ($post_map as $fieldPair) {
      foreach ($formFields as $field) {
        if (!empty($fieldPair->postField) && !empty($fieldPair->formField)) {
          if ('_thumbnail_id' !== $fieldPair->postField) {
            if ('custom' === $fieldPair->formField && isset($fieldPair->customValue)) {
              $fieldData[$fieldPair->postField] = $fieldPair->customValue;
            } else {
              $fieldData[$fieldPair->postField] = $fieldValues[$fieldPair->formField];
            }
          } elseif ($fieldPair->formField === $field['key'] && in_array($field['type'], SELF::UPLOAD_FIELD) && '_thumbnail_id' === $fieldPair->postField) {
            if (!empty($fieldValues[$field['key']])) {
              $uploadFeatureImg->uploadFeatureImg($fieldValues[$field['key']], $entryID, $postID);
            }
          }
        }
      }
    }
    return $fieldData;
  }

  private function getMetaboxFields($postType)
  {
    $metaboxFields = [];
    $filterTypes = [
      'file_input',
      'group',
      'tab',
      'osm',
      'heading',
      'key_value',
      'map',
      'custom_html',
      'background',
      'fieldset_text',
    ];

    if (function_exists('rwmb_meta')) {
      foreach (rwmb_get_object_fields($postType) as $index => $field) {
        if (!in_array($field['type'], $filterTypes)) {
          $metaboxFields[$index]['name'] = $field['name'];
          $metaboxFields[$index]['key'] = $field['id'];
          $metaboxFields[$index]['required'] = $field['required'];
          $metaboxFields[$index]['type'] = $field['type'];
          $metaboxFields[$index]['multiple'] = $field['multiple'];
        }
      }
    }

    return $metaboxFields;
  }

  private function metaboxFieldMapping($metaboxMapField, $fieldValues, $metaboxFields, $entryID, $postId, $action)
  {
    $metaboxFieldData = [];
    $stringTypes = ['text', 'checkbox', 'switch', 'textarea', 'password', 'wysiwyg', 'number', 'radio', 'color', 'oembed', 'email', 'url', 'date', 'true_false', 'date_time_picker', 'time_picker', 'message', 'tel', 'datetime-local', 'time', 'datetime'];
    $selectedTypes = ['select', 'checkbox_list', 'select_advanced', 'user', 'post'];
    foreach ($metaboxMapField as $key => $fieldPair) {
      foreach ($metaboxFields as $metabox) {
        if (property_exists($fieldPair, 'metaboxField')) {
          if ($metabox['key'] === $fieldPair->metaboxField && in_array($metabox['type'], $stringTypes)) {
            $metaboxFieldData[$key]['name'] = $metabox['key'];
            if ('custom' === $fieldPair->formField && isset($fieldPair->customValue)) {
              $metaboxFieldData[$key]['value'] = $fieldPair->customValue;
            } elseif ('custom' !== $fieldPair->formField && !empty($fieldValues[$fieldPair->formField])) {
              $metaboxFieldData[$key]['value'] = $fieldValues[$fieldPair->formField];
            }
          } elseif ($metabox['key'] === $fieldPair->metaboxField && in_array($metabox['type'], $selectedTypes) && !empty($fieldValues[$fieldPair->formField])) {
            $fieldData = $fieldValues[$fieldPair->formField];
            $values = !is_array($fieldData) ? explode(',', $fieldData) : $fieldData;

            $getMetaValues = get_post_meta($postId, $metabox['key'], false);
            if (true === $metabox['multiple'] && is_array($values)) {
              if ('update' === $action && count($getMetaValues) > 0) {
                foreach ($getMetaValues as $value) {
                  delete_post_meta($postId, $metabox['key']);
                }
              }
              foreach ($values as $value) {
                add_post_meta($postId, $metabox['key'], $value);
              }
            } else {
              $metaboxFieldData[$key]['name'] = $metabox['key'];
              $metaboxFieldData[$key]['value'] = $fieldValues[$fieldPair->formField];
            }
          }
        }
      }
    }
    return $metaboxFieldData;
  }

  public function fileUploadMapping($metaboxMapField, $fieldValues, $metaboxFields, $entryID, $postId)
  {
    $fileUploadHandle = new WpFileHandler($this->_formID);

    foreach ($metaboxMapField as $key => $fieldPair) {
      foreach ($metaboxFields as $metabox) {
        if (property_exists($fieldPair, 'metaboxFileUpload')) {
          if ($metabox['key'] === $fieldPair->metaboxFileUpload && !empty($fieldValues[$fieldPair->formField])) {
            if (false === $metabox['multiple']) {
              $attachMentId = $fileUploadHandle->singleFileMoveWpMedia($entryID, $fieldValues[$fieldPair->formField], $postId);

              if (!empty($attachMentId)) {
                add_post_meta($postId, $metabox['key'], $attachMentId);
              }
            } elseif (true === $metabox['multiple']) {
              $attachMentId = $fileUploadHandle->multiFileMoveWpMedia($entryID, $fieldValues[$fieldPair->formField], $postId);
              //$exists = metadata_exists('post', $postId, $metabox['key']);
              if (!empty($attachMentId) && is_array($attachMentId)) {
                foreach ($attachMentId as $attachemnt) {
                  add_post_meta($postId, $metabox['key'], $attachemnt);
                }
              }
            }
          }
        }
      }
    }
  }

  public function execute(IntegrationHandler $integrationHandler, $integrationData, $fieldValues, $entryID, $logID)
  {
    $integrationDetails = is_string($integrationData->integration_details) ? json_decode($integrationData->integration_details) : $integrationData->integration_details;
    $taxonomy = new WpFileHandler($integrationData->form_id);
    $formManger = new FormManager($integrationData->form_id);
    $formFields = $formManger->getFields();

    $fieldData = [];

    $fieldData['comment_status'] = isset($integrationDetails->comment_status) ? $integrationDetails->comment_status : '';
    $fieldData['post_status'] = isset($integrationDetails->post_status) ? $integrationDetails->post_status : '';
    $fieldData['post_type'] = isset($integrationDetails->post_type) ? $integrationDetails->post_type : '';
    if (isset($integrationDetails->post_author) && 'logged_in_user' !== $integrationDetails->post_author) {
      $fieldData['post_author'] = $integrationDetails->post_author;
    } else {
      $fieldData['post_author'] = get_current_user_id();
    }

    $exist_id = $fieldData['post_type'] . '_' . $entryID;
    $sql = "SELECT * FROM `{$this->_wpdb->prefix}bitforms_form_entrymeta` WHERE `meta_key`='$exist_id' ";
    $existPostId = $this->_wpdb->get_results($sql);
    $postId = '';
    $metaboxFields = $this->getMetaboxFields($fieldData['post_type']);

    $taxanomyData = $taxonomy->taxonomyData($formFields, $fieldValues);

    if ([] === $existPostId) {
      $postId = wp_insert_post(['post_title' => '(no title)', 'post_content' => '']);

      $smartTagValue = $this->smartTagMappingValue($integrationDetails->post_map);
      $updatedValues = $fieldValues + $smartTagValue;
      $updateData = $this->postFieldMapping($fieldData, $integrationDetails->post_map, $formFields, $updatedValues, $postId, $entryID);

      $updateData['ID'] = $postId;
      unset($updateData['_thumbnail_id']);

      wp_update_post($updateData, true);
      if (!empty($taxanomyData)) {
        foreach ($taxanomyData as $taxanomy) {
          wp_set_post_terms($postId, $taxanomy['value'], $taxanomy['term'], false);
        }
      }

      $this->_wpdb->insert(
        "{$this->_wpdb->prefix}bitforms_form_entrymeta",
        [
          'meta_key'               => $fieldData['post_type'] . '_' . $entryID,
          'meta_value'             => $postId,
          'bitforms_form_entry_id' => $entryID,
        ]
      );

      $smartTagValue = $this->smartTagMappingValue($integrationDetails->metabox_map);
      $updatedMbValues = $fieldValues + $smartTagValue;
      $metaboxFieldMapping = $this->metaboxFieldMapping($integrationDetails->metabox_map, $updatedMbValues, $metaboxFields, $entryID, $postId, 'create');
      $this->fileUploadMapping($integrationDetails->metabox_file_map, $fieldValues, $metaboxFields, $entryID, $postId, 'create');
      foreach ($metaboxFieldMapping as $data) {
        if (isset($data['name'], $data['value'])) {
          add_post_meta($postId, $data['name'], $data['value']);
        }
      }
    } else {
      if (!empty($taxanomyData)) {
        foreach ($taxanomyData as $taxanomy) {
          wp_set_post_terms($existPostId[0]->meta_value, $taxanomy['value'], $taxanomy['term'], false);
        }
      }
      $metaboxFieldMapping = $this->metaboxFieldMapping($integrationDetails->metabox_map, $fieldValues, $metaboxFields, $entryID, $existPostId[0]->meta_value, 'update');

      foreach ($metaboxFieldMapping as $data) {
        if (isset($data['name'], $data['value'])) {
          update_post_meta($existPostId[0]->meta_value, $data['name'], $data['value']);
        }
      }
      $updateData = $this->postFieldMapping($fieldData, $integrationDetails->post_map, $formFields, $fieldValues, $existPostId[0]->meta_value, $entryID);
      $updateData['ID'] = $existPostId[0]->meta_value;
      wp_update_post($updateData, true);
    }
  }
}