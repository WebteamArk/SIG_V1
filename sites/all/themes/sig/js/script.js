/**
 * @file
 * A JavaScript file for the theme.
 * @author Jacek Szmit
 */

(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.sigMainMenu = {
  attach: function(context, settings) {
    $('#block-system-main-menu .responsive-menus-simple .npx-menu-toggle > span', context).once('sig-main-menu', function () {
      $(this).click(function () {
        $('#block-system-main-menu .responsive-menus-simple ul', context).toggleClass('npx-expanded');
        $('#block-system-main-menu', context).toggleClass('npx-expanded');
        $('#header', context).toggleClass('npx-expanded');
        $('body', context).toggleClass('npx-expanded');
      });
    });
    $('#block-system-main-menu .responsive-menus > span.toggler', context).once('sig-main-menu', function () {
      $(this).click(function () {
        //$('#block-system-main-menu .responsive-menus-simple ul', context).toggleClass('npx-expanded');
        //$('#block-system-main-menu', context).toggleClass('npx-expanded');
        $('#header', context).toggleClass('npx-expanded');
        //$('body', context).toggleClass('npx-expanded');
      });
    });
  }
};

Drupal.behaviors.sigSlogans = {
  attach: function(context, settings) {
    $('.paragraphs-item-slogan-block .slogan-box', context).once('sig-slogans', function() {
      $(this).waypoint(function() {
        var duration = 600;
        var width = "50%";
        if ($(window).width() <=768) {
          width = "100%";
        }
        $bg = $(this).find('div.color-bg');
        $text = $(this).find('div.text');
        $text.fadeIn(duration);
        $bg.animate({width: width}, duration + (duration/2));
      }, 
      { offset: '50%', });
    });
  }
};

Drupal.behaviors.sigImagesOverlay = {
  attach: function(context, settings) {
    $('div.image-overlay-outer', context).once('sig-images', function() {
      $(this).waypoint(function() {
        var duration = 400;
        $bg = $(this).find('div.image-overlay');
        $bg.animate({right: 0}, duration);
      }, 
      { offset: '50%', triggerOnce: true});
    });
  }
};

Drupal.behaviors.sigPermalink = {
  attach: function(context, settings) {
    $('a.sig_link', context).once('sig-permalink', function () {
      $(this).click( function(e) {
        e.preventDefault();
        var width = "320";
        if ($(window).width() >=500) {
          width = "500";
        }
        $('#sig-dialog').dialog({
          minWidth: width,
          modal: true,
        });
        $('#sig-dialog input').click( function() {
          $(this).select();
        });
      });
    });
  }
};

Drupal.behaviors.sigCounterAnimation = {
  attach: function(context, settings) {
    $('.paragraphs-item-block-b-x3', context).once('sig-counter-animation').each(function () {
      var duration = 4000;
      $(this).find('.sig-count-animate').waypoint(function() {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: duration,
          easing: 'swing',
          step: function (now) {
            $(this).text(humanizeNumber(Math.ceil(now)));
          }
        });
      }, { offset: '100%', triggerOnce: true});
    });
  }
};

// Add thousands separator
function humanizeNumber(n) {
  n = n.toString()
  while (true) {
    var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
    if (n == n2) break
    n = n2
  }
  return n
}

})(jQuery, Drupal, this, this.document);
