/**
 * @file
 * Javascript related to the download case PDF.
 */
(function ($) {

Drupal.behaviors.sigCasesDownload = {
  attach: function (context) {
    $('div.field-name-field-case-pdf .file a').once('sig-case-download-processed').each(function() {
      var $link = $(this);
      setTimeout( function() {
        $('body').append('<iframe width="0" height="0" frameborder="0" src="' + $link.attr('href') +'"></iframe>');
      }, 1500);
    });
  }
};

})(jQuery);