<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= isset($title) ? $title : 'Conversational Form'; ?></title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body.bit-conversational-form {
      height: 100vh;
      overflow: hidden;
    }

    @media (max-width: 575.98px) {
      .standalone-form-wrapper {
        width: 100%;
      }
    }

  </style>
  <?php
  $baseCSSPath = "/form-styles/bitform-{$formID}.css";
  $baseConversationalCSSPath = "/form-styles/bitform-conversational-{$formID}.css";
  $customCSSPath = "/form-styles/bitform-custom-{$formID}.css";
  $standaloneCSSPath = "/form-styles/bitform-standalone-{$formID}.css";
  ?>
  <link rel="stylesheet" href="<?= BITFORMS_UPLOAD_BASE_URL . $baseCSSPath ?>" />
  <link rel="stylesheet" href="<?= BITFORMS_UPLOAD_BASE_URL . $baseConversationalCSSPath ?>" />
  
  <?php if (file_exists(BITFORMS_CONTENT_DIR . $customCSSPath)) : ?>
    <link rel="stylesheet" href="<?= BITFORMS_UPLOAD_BASE_URL . $customCSSPath ?>" />
  <?php endif; ?>

  <?php if (file_exists(BITFORMS_CONTENT_DIR . $standaloneCSSPath)) : ?>
    <link rel="stylesheet" href="<?= BITFORMS_UPLOAD_BASE_URL . $standaloneCSSPath ?>" />
  <?php endif; ?>

  <?php if (isset($font) && '' !== $font) : ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="<?= $font ?>" />
  <?php endif; ?>

</head>
<body class="bit-conversational-form">
  <?=$formHTML?>
  <script>
    <?= $bfGlobals ?>;
  </script>
  <script src="<?= BITFORMS_UPLOAD_BASE_URL ?>/form-scripts/bitform-conversational-<?= $formID ?>.js"></script>
</body>
</html>