/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.sigMainMenu = {
  attach: function(context, settings) {
    $('#block-system-main-menu .responsive-menus-simple .npx-menu-toggle > span', context).once('sig-main-menu', function () {
      $(this).click(function () {
        $('#block-system-main-menu .responsive-menus-simple ul', context).toggleClass('npx-expanded');
        $('#block-system-main-menu', context).toggleClass('npx-expanded');
        $('body', context).toggleClass('npx-expanded');
      });
    });

  }
};


})(jQuery, Drupal, this, this.document);
