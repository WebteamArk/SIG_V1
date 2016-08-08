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

Drupal.behaviors.sigFooterMenu = {
  attach: function(context, settings) {
    $('#block-menu-menu-footer-menu li.column span.nolink', context).once('sig-footer-menu', function () {
      $(this).click(function () {
        $(this).toggleClass('npx-expanded');
      });
    });
  }
};

Drupal.behaviors.sigSlogans = {
  attach: function(context, settings) {
    $('.paragraphs-item-slogan-block .slogan-box', context).once('sig-slogans', function() {
      $(this).waypoint(function(event, direction) {
        var duration = 600;
        $text = $(this).find('div.text');
        if(direction == 'down') {
          $text.fadeIn(duration);
        }
        else {
          $text.fadeOut(duration);
        }
      }, 
      { offset: '50%', });
    });
  }
};

Drupal.behaviors.sigImagesOverlay = {
  attach: function(context, settings) {
    $('div.image-overlay-outer', context).once('sig-images', function() {
      $(this).waypoint(function(event, direction) {
        var duration = 400;
        var right = 0;
        $bg = $(this).find('div.image-overlay');
        if(direction == 'up') {
          right = '-30%';
        }
        $bg.animate({right: right}, duration);
      }, 
      { offset: '40%', triggerOnce: false});
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

Drupal.behaviors.sigSvgMap = {
  attach: function(context, settings) {
    $('#poland', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        alert( "This is poland!" );
      });
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

// Calculate element visibility in viewport
function percentageSeen ($element) {
  var viewportHeight = $(window).height(),
      scrollTop = $(window).scrollTop(),
      elementOffsetTop = $element.offset().top,
      elementHeight = $element.height();

  if (elementOffsetTop > (scrollTop + viewportHeight)) {
    return 0;
  } else if ((elementOffsetTop + elementHeight) < scrollTop) {
    return 100;
  } else {
    var distance = (scrollTop + viewportHeight) - elementOffsetTop;
    var percentage = distance / ((viewportHeight + elementHeight) / 100);
    percentage = Math.round(percentage);
    return percentage;
  }
}

$(window).scroll(function () {
  var maxWidth = "50";
  if ($(window).width() <=768) {
    maxWidth = "100";
  }
  $('.paragraphs-item-slogan-block .slogan-box div.color-bg').each( function() {
    $bg = $(this);
    var percentage = percentageSeen($bg) * 1.7;
    if (percentage > maxWidth) {
      percentage = maxWidth;
    }
    $bg.css('width', percentage + '%');
  });
});

})(jQuery, Drupal, this, this.document);
