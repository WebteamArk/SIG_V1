<?php 

/**
 * @file sig_press.pages.inc
 * @author Jacek Szmit
 */

/**
 * Pressroom page CALLBACK
 */
function _sig_press_page() {
  module_load_include('inc', 'sig_press', 'sig_press');
  
  $filepath = 'http://devel.local/Drupal7Dev/sites/default/files/sig.rss';
  
  $array = _sig_press_process_xml($filepath);
  
  $lang = _sig_press_get_lang();
  
  //TODO remove this line
  //$lang = 'ENG';
  
  $html = '';
  
  if(isset($array[$lang])) {
    foreach($array[$lang] as $item) {
      $html .= _sig_press_prepare_item_full($item);
      //break;
    }
    //dpm($array[$lang]);
  }

  $page = array(
    '#markup' => $html,
  );
  
  //dpm($array);
  return $page;
}

