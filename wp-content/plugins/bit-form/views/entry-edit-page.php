<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo isset($title) ? $title : ''; ?></title>
  <style>
  html,
  body {
    min-height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: #f1f1f1; */
  }

  ._frm-bg-b<?php echo $formID;

  ?> {
    width: 600px;
    margin-block: 100px;
  }
  </style>
  <?php
  $formUpdateVersion = get_option('bit-form_form_update_version');
  ?>
  <link rel="stylesheet"
    href="<?php echo BITFORMS_UPLOAD_BASE_URL?>/form-styles/bitform-<?php echo $formID?>.css?ver=<?php echo $formUpdateVersion?>" />
  <?php
  $customCssSubPath = "/form-styles/bitform-custom-{$formID}.css";
  ?>
  <?php if(file_exists(BITFORMS_CONTENT_DIR . $customCssSubPath)) : ?>
  <link rel="stylesheet"
    href="<?php echo BITFORMS_UPLOAD_BASE_URL . $customCssSubPath ?>?ver=<?php echo $formUpdateVersion?>" />
  <?php endif; ?>

  <?php if (isset($font) && '' !== $font): ?>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="<?php echo $font?>" />
  <?php endif; ?>

</head>

<body>
  <?php echo $formHTML?>

  <script>
  <?php echo $bfGlobals?>;
  </script>
  <script src="<?php echo BITFORMS_UPLOAD_BASE_URL?>/form-scripts/preview-<?php echo $formID?>.js"></script>

</body>

</html>