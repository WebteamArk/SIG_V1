/**
 * @file
 * Javascript related to the downloadcenter.
 */
(function ($) {

Drupal.behaviors.sigDownload = {
  attach: function (context) {
    $('div.sig-file-auto a').once('sig-download-processed').each(function() {
      var $link = $(this);
      setTimeout( function() {
        $('body').append('<iframe width="0" height="0" frameborder="0" src="' + $link.attr('href') +'"></iframe>');
      }, 1500);
    });
  }
};

})(jQuery);