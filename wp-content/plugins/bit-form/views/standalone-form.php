<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= isset($title) ? $title : ''; ?></title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .standalone-form-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .standalone-form-wrapper {
      width: 40%;
      /* Additional styling for the container, if needed */
    }

    @media (max-width: 575.98px) {
      .standalone-form-wrapper {
        width: 100%;
      }
    }

    ._frm-bg-b<?= $formID; ?> {
      width: 100%;
    }
  </style>
  <?php
  $baseCSSPath = "/form-styles/bitform-{$formID}.css";
  $customCSSPath = "/form-styles/bitform-custom-{$formID}.css";
  $standaloneCSSPath = "/form-styles/bitform-standalone-{$formID}.css";
  ?>
  <link rel="stylesheet" href="<?= BITFORMS_UPLOAD_BASE_URL . $baseCSSPath ?>" />
  
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

<body>
  <div class="standalone-form-container">
    <div class="standalone-form-wrapper">
      <?= $formHTML ?>
    </div>
  </div>

  <script>
    <?= $bfGlobals ?>;
  </script>
  <script src="<?= BITFORMS_UPLOAD_BASE_URL ?>/form-scripts/preview-<?= $formID ?>.js"></script>
  </div>
</body>

</html>