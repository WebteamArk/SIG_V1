<?php 

/**
 * @file sig_press.pages.inc
 * @author Jacek Szmit
 */

/**
 * Fetch XML file
 */
function _sig_press_fetch_xml_file() {
  $path = drupal_realpath('public://');
  $file = file_get_contents(SIG_PRESS_XML_FETCH_URL);
  file_put_contents($path . '/' . SIG_PRESS_XML_FILENAME, $file);
}

/**
 * Process xml file with articles and return an array of items
 * 
 * 
 * @param string $filepath
 *  file path
 * @return array
 */
function _sig_press_process_xml() {
  module_load_include('php', 'sig_press', '/lib/XML2Array');

  $filepath = drupal_realpath('public://') . '/' . SIG_PRESS_XML_FILENAME;
  if (!file_exists($filepath)) {
    _sig_press_fetch_xml_file();
  }
  $xml = file_get_contents($filepath);
  $array = XML2Array::createArray($xml);

  $build = array();

  foreach ($array['rss']['channel']['rss:items']['rss:ApiPressParent'] as $apiPressParent) {
    foreach ($apiPressParent['rss:PressItems']['ApiPressItem'] as $pressItem) {
      $buildItem = array(
          'lang' => $pressItem['rss:Taal'],
          'date' => $pressItem['rss:Datum'],
          'title' => $pressItem['rss:Titel'],
          'body' => $pressItem['rss:Beschrijving'],
          'image' => $pressItem['rss:Foto'],
          'attachments' => array(),
      );

      foreach ($pressItem['rss:BladItems']['ApiBladItem'] as $attachment) {
        $attachmentItem = array(
            'title' => $attachment['rss:Titel'],
            'body' => isset($attachment['rss:Beschrijving']) ? $attachment['rss:Beschrijving'] : '',
            'webtitle' => isset($attachment['rss:WebsiteTitel']) ? $attachment['rss:WebsiteTitel'] : '',
            'url' => isset($attachment['rss:URL']) ? $attachment['rss:URL'] : '',
            'files' => array(),
        );
        if (isset($attachment['rss:gallery'])) {
          foreach ($attachment['rss:gallery']['ApiGalleryitem'] as $file) {
            $fileItem = array(
                'url' => $file['rss:gallery'][0],
                'is_image' => $file['rss:gallery'][1],
            );
            $attachmentItem['files'][] = $fileItem;
          }
        }
        $buildItem['attachments'][] = $attachmentItem;
      }
      $build[$pressItem['rss:Taal']][] = $buildItem;
    }
  }

  return $build;
}

/**
 * Get language that matches XML lang code
 */
function _sig_press_get_lang() {
  global $language;
  
  switch ($language->language) {
    case 'en':
      return 'ENG';
    case 'fr':
      return 'FR';
    case 'nl':
      return 'NL';
    case 'pl':
      return 'PL';
    default:
      return LANGUAGE_NONE;
  }
}