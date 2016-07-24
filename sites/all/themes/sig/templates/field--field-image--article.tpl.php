<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div class="image-overlay-outer">
  <div class="field-items"<?php print $content_attributes; ?>>
    <?php foreach ($items as $delta => $item): ?>
      <div class="field-item <?php print $delta % 2 ? 'odd' : 'even'; ?>"<?php print $item_attributes[$delta]; ?>><?php print render($item); ?></div>
    <?php endforeach; ?>
  </div>
  <div class="image-overlay"></div>
  </div>
</div>
