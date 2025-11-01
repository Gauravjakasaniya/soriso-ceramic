(function(jQuery) {

"use strict";

/*------------------------------------
  PGS  Predefined Variables
--------------------------------------*/
var jQuerywindow = jQuery(window),
    jQuerydocument = jQuery(document),
    jQuerybody = jQuery('body');

//Check if function exists
jQuery.fn.exists = function () {
  return this.length > 0;
};


/*------------------------------------
  PGS Title Animation
--------------------------------------*/
function pgsTitleAnimation() {
  if (jQuery(".pgs-title-effect").length) {
    Splitting();
    var themeht_animation_text = function(container, item) {
      jQuery(window).scroll(function() {
        var windowBottom = jQuery(this).scrollTop() + jQuery(this).innerHeight();
        jQuery(container).each(function(index, value) {
          var objectBottom = jQuery(this).offset().top + jQuery(this).outerHeight() * 0.1;

          if (objectBottom < windowBottom) {
            var seat = jQuery(this).find(item);
            for (var i = 0; i < seat.length; i++) {
              (function(index) {
                setTimeout(function() {
                  seat.eq(index).addClass('pgs-text-animated');
                }, 200 * index);
              })(i);
            }
          }
        });
      }).scroll();
    };

    jQuery(function() {
      themeht_animation_text(".section-title", ".splitting");
    });
  }
};


/*------------------------------------
 PGS Window load and functions
--------------------------------------*/
jQuery(document).ready(function() {
   
    pgsTitleAnimation();
});

jQuery(window).on('load resize', function() {
});

})(jQuery);
