/**
 * @file
 * A JavaScript file for the theme.
 * @author Jacek Szmit
 */

(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.sigMainMenu = {
  attach: function(context, settings) {
    $('#block-system-main-menu', context).once('sig-main-menu', function () {
      $(this).hover(function () {
        var $header = $('#header', context);
        if(!$header.hasClass('npx-expanded')) {
          if($(window).width() > 1229) {
            $('#header', context).addClass('npx-expanded');
            Drupal.behaviors.sigMainMenu.menuOn();
          }
        }
      },
      function () {
        if($(window).width() > 1229) {
          Drupal.behaviors.sigMainMenu.menuOff();
          $('#header', context).removeClass('npx-expanded');
        }
      });
    });
    $('#header #block-system-main-menu .hamburger span', context).once('sig-main-menu', function () {
      $(this).click(function () {
        var $header = $('#header', context);
        if($header.hasClass('npx-expanded')) {
          Drupal.behaviors.sigMainMenu.menuOff();
        }
        else {
          Drupal.behaviors.sigMainMenu.menuOn();
        }
        $header.toggleClass('npx-expanded');
      });
    });
    $('#header', context).once('sig-main-menu', function () {
      if($(window).width() > 1229 && $(this).hasClass('npx-expanded')) {
        var height = $('#block-system-main-menu').height() + 10;
        $(this).css('height', height);
      }
      else {
        if($(window).width() < 760) {
          $(this).css('height', 60);
        }
        else {
          $(this).css('height', 64);
        }
      }
    });
  },
  menuOn: function() {
    var $header = $('#header');
    var height = $('#block-system-main-menu').height() + 10;
    //$header.css('height', height);
    var viewport = getViewport();
    if(viewport.width > 1229) {
      $header.attr('style', 'height: ' + height + 'px !important;');
    } else {
      $header.css('height', height);
    }
  },
  menuOff: function() {
    var $header = $('#header');
    $header.removeAttr('style');
  },
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
        var right = '-30%';
        $bg = $(this).find('div.image-overlay');
        if(direction == 'up') {
          right = 0;
        }
        $bg.animate({right: right}, duration);
      }, 
      { offset: '50%', triggerOnce: false});
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
            $(this).text(Drupal.behaviors.sigCounterAnimation.humanizeNumber(Math.ceil(now)));
          }
        });
      }, { offset: '100%', triggerOnce: true});
    });
  },
  humanizeNumber: function(n) {
    n = n.toString()
    while (true) {
      var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
      if (n == n2) break
      n = n2
    }
    return n
  },

};

Drupal.behaviors.sigSvgMap = {
  attach: function(context, settings) {
    var width = "320";
    if ($(window).width() >=500) {
      width = "500";
    }
    $('#austria', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#austria-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#austria-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#belgium', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#belgium-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#belgium-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#bulgaria', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#bulgaria-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#bulgaria-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#france', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#france-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#france-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#germany', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#germany-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#germany-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#hungary', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#hungary-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#hungary-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#netherlands', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#netherlands-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#netherlands-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#poland', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#poland-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#poland-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#romania', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#romania-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#romania-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#switserland', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#switzerland-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#switzerland-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#turkey', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#turkey-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#turkey-dialog').dialog('close');
            });
          },
        });
      });
    });
    $('#england', context).once('sig-svg-map').each(function () {
      $(this).click(function() {
        $('#uk-dialog').dialog({
          minWidth: width,
          modal: true,
          dialogClass: 'svg-map',
          draggable: false,
          resizable: false,
          open: function() {
            $('.ui-widget-overlay').bind('click',function() {
              $('#uk-dialog').dialog('close');
            });
          },
        });
      });
    });
    
    $('#netherlands-dialog .tabs-nav a', context).once('sig-svg-map').each(function () {
      $(this).click(function (e) {
        e.preventDefault();
        $('#netherlands-dialog .tabs-nav a', context).removeClass('active');
        $(this).addClass('active');
        var tabClass = $(this).attr('data-map-tabs');
        $('#netherlands-dialog .map-tab', context).removeClass('map-tab-active');
        $('#netherlands-dialog .map-tab.' + tabClass, context).addClass('map-tab-active');
        //return false;
      });
    });
  }
};

Drupal.behaviors.sigExternalLinks = {
  attach: function(context, settings) {
    $('a', context).once('sig-external-links').each(function () {
      if (Drupal.behaviors.sigExternalLinks.linkIsExternal(this)) {
        $(this).attr('target', '_blank');
      }
    });
  },
  linkIsExternal: function(link_element) {
    return (link_element.host !== window.location.host);
  },
};

Drupal.behaviors.sigFooterToBottom = {
  attach: function(context, settings) {
    $('#footer', context).once('sig-footer-to-bottom', function () {
      var height = $(this).height();
      $(this).css('height', height);
      $('#page', context).css('margin-bottom', -height);
      var viewport = getViewport();
      var addHeight = 50;
      if(viewport.height >= 768) {
        addHeight = 90;
      }
      if(viewport.height >= 1280) {
        addHeight = 100;
      }
      $('#page', context).find('.fbdm').each( function () {
        $(this).css('height', height + addHeight);
      });
    });
  },
};

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

function getViewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
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

$(window).resize(function () {
  var viewport = getViewport();
  var $header = $('#header');
  if(viewport.width > 1229 && $header.hasClass('npx-expanded')) {
    $header.removeClass('npx-expanded');
    $header.removeAttr('style');
  }
  
  var $footer = $('#footer');
  var height = $footer.height();
  
  $footer.css('height', height);
  $('#page').css('margin-bottom', -height);
  var viewport = getViewport();
  var addHeight = 50;
  if(viewport.height >= 768) {
    addHeight = 90;
  }
  if(viewport.height >= 1280) {
    addHeight = 100;
  }
  $('#page').find('.fbdm').each( function () {
    $(this).css('height', height + addHeight);
  });
});

})(jQuery, Drupal, this, this.document);
