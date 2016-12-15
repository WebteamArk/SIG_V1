<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">

  <header class="header" id="header" role="banner">
    <div class="header-inner">
        <?php if ($logo): ?>
        <div id="logo-outer">
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
      </div>
      <?php endif; ?>
      <?php print render($page['header']); ?>
    </div>
  </header>

  <div id="main">

    <div id="content" class="column" role="main">

      <div class="top-image">
        <?php print render($page['highlighted']); ?>
        <?php if ($title): ?>
          <!-- <h1 class="page__title title" id="page-title"><?php print $title; ?></h1> -->
        <?php endif; ?>
    </div>

      <a id="main-content"></a>
      <?php // print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>

    </div>
  </div>

<div class="fbdm"></div>

</div>

  <?php print render($page['footer']); ?>


<?php print render($page['bottom']); ?>
