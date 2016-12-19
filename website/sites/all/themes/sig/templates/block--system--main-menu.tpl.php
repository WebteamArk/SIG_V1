<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <div class="hamburger icon"><span></span></div>

  <div class="block-content">
    <?php print $content; ?>
    
    <div class="lang-column-wrapper">
  	  <span data-title="<?php print t('Language'); ?>" class="nolink"><?php print t('Language'); ?></span>
      <?php 
        $block = module_invoke('locale', 'block_view', 'language');
        print $block['content'];
      ?>
	  </div>
    
  </div>

</div>
