/**
 * @file
 * Block block 1 animation
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.sigBlock1Animation = {
  attach: function(context, settings) {
    $('#block-block-1', context).once('sig-block1-anim', function() {
      $(window).scroll();
    })
  }
};
//Function only needs to be called on scroll
$(window).scroll(function() {
  //Only needs to be called when the svg is available
  if ($('#city').length) {
      //Variables
    $element = $('svg');
    $airplane = $('#vliegtuig')
    $ambulance = $('#ambulance')
    $railway = $('#railway')
    $tram = $('#tram')
    $bus = $('#bus')
    $clouds = $('.st0')
    $win = $(window);

    //Different scroll effects for smaller screens
    if ($(window).width() <=800) {
      $devider = 1;
    }
    else{
      $devider = 2.5;
    }
    //Variables for the width of the element, distance to top,...
    var viewportHeight = $(window).height(),
      scrollTop = $win.scrollTop(),
      elementOffsetTop = $element.offset().top,
      elementHeight = $element.height();
      elementWidth = $element.width()/$devider;
    //Calculation for when the elemnt is in the vieuwport
    var distance = (scrollTop + viewportHeight) - elementOffsetTop -elementWidth;
    
    // Scroll effect for the plane
        if ($airplane) {
          //Variable for the movement change
        var translate = distance - elementHeight +'px,'+-distance/6+ 'px';
          $airplane.css({
            //Different transforms for all browser support
              '-webkit-transform': 'translate(' + translate + ')',
              '-moz-transform': 'translate(' + translate + ')',
              '-ms-transform': 'translate(' + translate + ')',
              '-o-transform': 'translate(' + translate + ')',
              'transform': 'translate(' + translate + ')'
          });
        }
    // Scroll effect for the bus
        if ($bus) {
        var translate = distance/3 - 200 +'px, -0px';
          $bus.css({
              '-webkit-transform': 'translate(' + translate + ')',
              '-moz-transform': 'translate(' + translate + ')',
              '-ms-transform': 'translate(' + translate + ')',
              '-o-transform': 'translate(' + translate + ')',
              'transform': 'translate(' + translate + ')'
          });
        }
        // Scroll effect for the tram
        if ($tram) {
        var translate = distance/25 + 75 +'px, -0px';
          $tram.css({
              '-webkit-transform': 'translate(' + translate + ')',
              '-moz-transform': 'translate(' + translate + ')',
              '-ms-transform': 'translate(' + translate + ')',
              '-o-transform': 'translate(' + translate + ')',
              'transform': 'translate(' + translate + ')'
          });
        }
        // Scroll effect for the ambulance
        if ($ambulance) {
        var translate = distance/10 - 100 +'px, -0px';
          $ambulance.css({
              '-webkit-transform': 'translate(' + translate + ')',
              '-moz-transform': 'translate(' + translate + ')',
              '-ms-transform': 'translate(' + translate + ')',
              '-o-transform': 'translate(' + translate + ')',
              'transform': 'translate(' + translate + ')'
          });
        }
    // Scroll effect for the clouds
        if ($clouds) {
          var translate = (distance/10)*-1 +'px, -0px';
          $clouds.css({
              '-webkit-transform': 'translate(' + translate + ')',
              '-moz-transform': 'translate(' + translate + ')',
              '-ms-transform': 'translate(' + translate + ')',
              '-o-transform': 'translate(' + translate + ')',
              'transform': 'translate(' + translate + ')'
          });
        }
        // Scroll effect for the railway
        if ($railway) {
          var translate = (distance/10)*-1 +150 +'px, -0px';
          $railway.css({
              '-webkit-transform': 'translate(' + translate + ')',
              '-moz-transform': 'translate(' + translate + ')',
              '-ms-transform': 'translate(' + translate + ')',
              '-o-transform': 'translate(' + translate + ')',
              'transform': 'translate(' + translate + ')'
          });
        }         
  }   
});
//*****************************
// Scroll END
//*****************************


})(jQuery, Drupal, this, this.document);
