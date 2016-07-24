<<?php print $layout_wrapper; print $layout_attributes; ?> class="ds-3col-equal <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <<?php print $left_wrapper ?> class="group-left<?php print $left_classes; ?>">
  <div class="image-overlay-outer">
    <?php print $left; ?>
    <div class="image-overlay"></div>
  </div>
  </<?php print $left_wrapper ?>>

  <<?php print $middle_wrapper ?> class="group-middle<?php print $middle_classes; ?>">
  <div class="image-overlay-outer">
    <?php print $middle; ?>
    <div class="image-overlay"></div>
  </div>
  </<?php print $middle_wrapper ?>>

  <<?php print $right_wrapper ?> class="group-right<?php print $right_classes; ?>">
  <div class="image-overlay-outer">
    <?php print $right; ?>
    <div class="image-overlay"></div>
  </div>
  </<?php print $right_wrapper ?>>

</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
