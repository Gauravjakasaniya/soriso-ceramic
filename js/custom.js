/*

Template: Interium - Interior Design HTML5 Template
Author: potenzaglobalsolutions
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Preloader
:: Menu
:: Sticky
:: Header Dynamic Height
:: Tooltip
:: Popover
:: Counter
:: Owl carousel
:: Slick slider
:: Select2
:: Wow animation
:: Range Slider
:: Countdown
:: Swiper slider
:: Progressbar
:: Back to top
:: Search bar
:: Magnific Popup
:: Gsap
:: Lenis Smooth Scroll
:: BgmoveCenter
:: BgmoveLeft
:: Cursor
:: Blog
:: Shuffle
:: Services Fancy
:: Team Fancy
:: Portfolio Fancy
:: Pricing Fancy
:: Jarallax BG
:: Initialize Viewer
:: Animated circle text
:: Item Quantity


======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

  /*************************
    Predefined Variables
  *************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $countdownTimer = $('.countdown'),
    $counter = $('.counter'),
    $progressBar = $('.skill-bar');
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*************************
    Preloader
  *************************/
  POTENZA.preloader = function () {
    $("#load").fadeOut();
    $('#pre-loader').delay(0).fadeOut('slow');
  };


  /*************************
    Menu
  *************************/
  POTENZA.dropdownmenu = function () {
    if ($('.navbar').exists()) {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
      });
    }
  };

  POTENZA.menuaddclass = function () {
    $('.top-menu').on('click',function () {
        $('.nav-menu').toggleClass('open-menu');
    });
  };

  POTENZA.menuToggle = function () {
    $('.header-overlay-menu .navbar-nav .nav-link').on('click',function () {
        $(this).next('.dropdown-menu').slideToggle();
    });
  };


  /*************************
    Sticky
  *************************/

  POTENZA.isSticky = function () {
    var $window       = $(window);
    var lastScrollTop = 0;
    var $header       = $('.header');
    var headerHeight  = $header.outerHeight();

    $window.scroll(function() {
      var windowTop  = $window.scrollTop();

      if ( windowTop >= headerHeight ) {
        $header.addClass( 'is-sticky' );
      }

      else {
        $header.removeClass( 'is-sticky' );
        $header.removeClass( 'sticky-show' );
      }
    
      if ( $header.hasClass( 'is-sticky' ) ) {
        if ( windowTop < lastScrollTop ) {
          $header.addClass( 'sticky-show' );
        } else {
          $header.removeClass( 'sticky-show' );
        }
      }
      $('#lastscrolltop').text('LastscrollTop: ' + lastScrollTop);
    
      lastScrollTop = windowTop;
    
      $('#windowtop').text('scrollTop: ' + windowTop);
    });
  };


  /*************************
    Header Dynamic Height
  *************************/

  POTENZA.pgsHeaderHeight = function() {
    var headerHeight = $('.header').outerHeight();

    $('body').each(function() {
      this.style.setProperty('--header-height', headerHeight + 'px');
    });
  }


  /*************************
    Tooltip
  *************************/
  POTENZA.Tooltip = function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }


  /*************************
    Popover
  *************************/

  POTENZA.Popover = function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }


  /*************************
    Counter
  *************************/

  POTENZA.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find('.timer').countTo();
        });
      });
    }
  };


  /*************************
    Owl carousel
  *************************/

  POTENZA.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
        $items = ($this.data('items')) ? $this.data('items') : 1,
        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
        $space = ($this.attr('data-space')) ? $this.data('space') : 30,
        $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;

        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data('xx-items') ? $this.data('xx-items') : 1
            },
            480: {
              items: $this.data('xs-items') ? $this.data('xs-items') : 1
            },
            768: {
              items: $this.data('sm-items') ? $this.data('sm-items') : 2
            },
            980: {
              items: $this.data('md-items') ? $this.data('md-items') : 3
            },
            1200: {
              items: $items
            }
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
          autoplay: $autoplay,
          autoplayHoverPause: true
        });
      });
    }
  }


  /*************************
    Slick slider
  *************************/

  POTENZA.slickslider = function () {
    if ($('.slider-for').exists()) {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
    }
  };


  /*************************
    Select2
  *************************/

  POTENZA.select2 = function () {
    if ($('.basic-select').exists()) {
      var select = jQuery(".basic-select");
      if (select.length > 0) {
        $('.basic-select').select2({dropdownCssClass : 'bigdrop'});
      }
    }
  };


  /*************************
    Wow animation
  *************************/
  POTENZA.wow = function () {
    if($('.wow').length){
      var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       100,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
        }
      );
      wow.init();

      document.querySelectorAll('.wow').forEach(function(el) {
        el.addEventListener('animationend', function() {
          // Ensure that the 'animated' class remains
          el.classList.add('wow-animated');
        });
      });
    }
  };


  /*************************
    Range Slider
  *************************/

  POTENZA.rangesliders = function () {
    if ($('.property-price-slider').exists()) {
      var rangeslider = jQuery(".rangeslider-wrapper");
      $("#property-price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 1000,
        to: 8000,
        prefix: "$",
        hide_min_max: true,
        hide_from_to: false
      });
    }
  };


  /*************************
    Countdown
  *************************/

  POTENZA.countdownTimer = function () {
    if ($countdownTimer.exists()) {
      $countdownTimer.downCount({
        date: '06/31/2025 12:00:00', // Month/Date/Year HH:MM:SS
        offset: -4
      });
    }
  }


  /*************************
    Swiper Slider
  *************************/

  POTENZA.historySwiperSlider = function() {
    new Swiper('.swiper-container', {
      loop: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: "auto",
      paginationClickable: true,
      spaceBetween: 30,

      breakpoints: {    
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        767: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: "auto",
        }
      }
    });
  }


  /*************************
    Progressbar
  *************************/

  POTENZA.progressBar = function () {
    if ($progressBar.exists()) {
      $progressBar.each(function (i, elem) {
        var $elem = $(this),
        percent = $elem.attr('data-percent') || "100",
        delay = $elem.attr('data-delay') || "100",
        type = $elem.attr('data-type') || "%";

        if (!$elem.hasClass('progress-animated')) {
          $elem.css({
            'width': '0%'
          });
        }
        var progressBarRun = function () {
          $elem.animate({
            'width': percent + '%'
          }, 'easeInOutCirc').addClass('progress-animated');

          $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
        };
        $(elem).appear(function () {
          setTimeout(function () {
            progressBarRun();
          }, delay);
        });
      });
    }
  };


  /*************************
    Back To Top
  *************************/

  POTENZA.BackToTop = function () {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';    

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);

      progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress); 
    var offset = 50;
    var duration = 550;

    jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      }
      else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });   

    jQuery('.progress-wrap').on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    })
  };


  /*************************
    Search bar
  *************************/

  POTENZA.searchbar = function () {
    if ($("#search").exists()) {
      $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
      });
      $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
          $(this).removeClass('open');
        }
      });
      //Do not include! This prevents the form from submitting for DEMO purposes only!
      $('form').submit(function(event) {
        event.preventDefault();
        return false;
      })
    }
  }


  /*************************
    Magnific Popup
  *************************/

  POTENZA.mediaPopups = function () {
    if ($(".popup-single").exists() || $(".popup-gallery").exists() || $('.modal-onload').exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
      if ($(".popup-single").exists()) {
        $('.popup-single').magnificPopup({
          type: 'image'
        });
      }
      if ($(".popup-gallery").exists()) {
        $('.popup-gallery').magnificPopup({
          delegate: 'a.popup-img',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
        });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      }
      var $modal = $('.modal-onload');
      if ($modal.length > 0) {
        $('.popup-modal').magnificPopup({
          type: 'inline'
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        var elementTarget = $modal.attr('data-target');
        setTimeout(function () {
          $.magnificPopup.open({
            items: {
              src: elementTarget
            },
            type: "inline",
            mainClass: "mfp-no-margins mfp-fade",
            closeBtnInside: !0,
            fixedContentPos: !0,
            removalDelay: 500
          }, 0)
        }, 1500);
      }
    }
  }


  /*************************
    Gsap
  *************************/

  POTENZA.serviceFancyImg = function () {
    gsap.set('.service-wrapper img.gsap-img-animation', { yPercent: -50, xPercent: -50 });
    let activeImage;
    gsap.utils.toArray(".service-item").forEach((el) => {
      let image = el.querySelector('.gsap-img-animation'),
      setX, setY,
      align = e => {
        setX(e.clientX);
        setY(e.clientY);
      },
      startFollow = () => document.addEventListener("mousemove", align),
      stopFollow = () => document.removeEventListener("mousemove", align),
      fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
      
      el.addEventListener('mouseenter', (e) => {
        fade.play();
        startFollow();
        if (activeImage) { // if there's an actively-animating one, we should match its position here
          gsap.set(image, {x: gsap.getProperty(activeImage, "x"), y: gsap.getProperty(activeImage, "y")});
        }
        activeImage = image;
        setX = gsap.quickTo(image, "x", {duration: 0.5, ease: "power3"}),
        setY = gsap.quickTo(image, "y", {duration: 0.5, ease: "power3"})
        align(e);
      });
      
      el.addEventListener('mouseleave', () => fade.reverse());
     
    });
  }

  /*************************
    bgmoveLeft
  *************************/
  POTENZA.bgmoveLeft = function () {
    const pgs_elm = gsap.utils.toArray('.pgs-bg-move-effect-left');
    if (pgs_elm.length == 0) return
    ScrollTrigger.matchMedia({
      "(min-width: 575px)": function() {
        pgs_elm.forEach((box, i) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "+=700px",
              scrub: 1
            },
            defaults: {
                ease: "none"
            }
          });
          tl.fromTo(box,{
            clipPath: 'inset(0% 0% 0% 13%)'
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 3
          })
        })
      }
    })
  }

  /*************************
    BgmoveCenter
  *************************/
  POTENZA.bgmoveCenter = function () {
    const pgs_elm = gsap.utils.toArray('.pgs-bg-move-effect-center');
    if (pgs_elm.length == 0) return
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function() {
        pgs_elm.forEach((box, i) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "+=700px",
              scrub: 1
            },
            defaults: {
              ease: "none"
            }
          });
          tl.fromTo(box, {
            clipPath: 'inset(0% 13% 0% 13%)'
          }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 3
          })
        })
      }
    })
  }

  /*************************
    bgmoveRight
  *************************/
  POTENZA.bgmoveRight = function () {
    const pgs_elm = gsap.utils.toArray('.pgs-bg-move-effect-right');
      if (pgs_elm.length == 0) return
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {
          pgs_elm.forEach((box, i) => {
            let tl = gsap.timeline({
              scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "+=700px",
              scrub: 1
            },
            defaults: {
              ease: "none"
            }
          });
          tl.fromTo(box, {
            clipPath: 'inset(0% 13% 0% 0%)'
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 3
          })
        })
      }
    })
  }

  POTENZA.databg = function () {
    jQuery('[data-bg-img]').each(function() {
      jQuery(this).css('background-image', 'url(' + jQuery(this).data("bg-img") + ')');
    });
  }
   
  /*************************
    Lenis Smooth Scroll
  *************************/
  POTENZA.lenisSmoothScroll = function () {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.1,
    });

    // Get all elements with the '.lenis-scroll-disable' class
    const offcanvases = document.querySelectorAll('.lenis-scroll-disable');

    // Check if there are any '.lenis-scroll-disable' elements before attaching event listeners
    offcanvases.forEach((offcanvas) => {
      offcanvas.addEventListener('wheel', (event) => {
        event.stopImmediatePropagation();
      });

      offcanvas.addEventListener('touchstart', (event) => {
        event.stopImmediatePropagation();
      });

      offcanvas.addEventListener('touchmove', (event) => {
        event.stopImmediatePropagation();
      });
    });

    // Handle preventing smooth scroll on select2 dropdowns
    document.addEventListener('wheel', (event) => {
      // Check if the event target is within a select2 dropdown
      if (event.target.closest('.select2-container') || event.target.closest('.select2-dropdown')) {
        // Prevent Lenis smooth scroll when inside a select2 dropdown
        event.stopImmediatePropagation();
      }
    });

    document.addEventListener('touchstart', (event) => {
      // Check if the event target is within a select2 dropdown
      if (event.target.closest('.select2-container') || event.target.closest('.select2-dropdown')) {
        // Prevent Lenis smooth scroll when inside a select2 dropdown
        event.stopImmediatePropagation();
      }
    });

    // Create the requestAnimationFrame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  POTENZA.lenisSmoothScroll2 = function () {
    function updateScrollbar() {
      const body = document.body;
      const html = document.documentElement;

      if (html.scrollHeight > html.clientHeight) {
        document.documentElement.style.setProperty('--scrollbar-width', '4px');
      } else {
        document.documentElement.style.setProperty('--scrollbar-width', '0px');
      }
    }

    window.addEventListener('resize', updateScrollbar);
    window.addEventListener('load', updateScrollbar);

    updateScrollbar();
  }

  /*************************
    Cursor
  *************************/
  POTENZA.mouseCursor = function () {
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1

    // Update mouse coordinates when the user moves the mouse
    const updateCoordinates = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', updateCoordinates);

    // Function to calculate the angle of movement
    function getAngle(diffX, diffY) {
      return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    // Function to calculate the squeeze effect based on the distance moved
    function getSqueeze(diffX, diffY) {
      const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    }

    // Update the cursor's position, angle, and squeeze effect
    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);
      
      pos.x += diffX * speed;
      pos.y += diffY * speed;
      
      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);
      
      const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
      const rotate = 'rotate(' + angle +'deg)';
      const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
      
      cursor.style.transform = translate;
      cursorCircle.style.transform = scale;
    };

    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    // Add event listeners to elements with data-cursor-type and data-cursor-class
    const cursorModifiers = document.querySelectorAll('[data-cursor-type]');
    const cursorLinks = document.querySelectorAll('a:not(.cursor-style)');

    // Handle mouse enter and leave for elements with data-cursor-type
    cursorModifiers.forEach(curosrModifier => {
      curosrModifier.addEventListener('mouseenter', function() {
        // Adding data-cursor-type functionality
        const className = this.getAttribute('data-cursor-type');
        cursor.classList.add(className);
        
        // Adding data-cursor-class functionality
        const cursorClass = this.getAttribute('data-cursor-class');
        if (cursorClass !== null) {
          cursor.classList.add(cursorClass);
        }
        
        // Handling custom text for cursor
        const cursorText = this.getAttribute('data-custom-text');
        if (cursorText !== null) {
          cursor.setAttribute('data-cursor-text', cursorText);
        } else {
          cursor.setAttribute('data-cursor-text', 'Drag');
        }
      });

      curosrModifier.addEventListener('mouseleave', function() {
        // Removing data-cursor-type functionality
        const className = this.getAttribute('data-cursor-type');
        cursor.classList.remove(className);
        
        // Removing data-cursor-class functionality
        const cursorClass = this.getAttribute('data-cursor-class');
        if (cursorClass !== null) {
          cursor.classList.remove(cursorClass);
        }

        cursor.removeAttribute('data-cursor-text');
      });
    });

    // Handle hover effects for links and apply the "cursor-link" class
    cursorLinks.forEach(cursorLink => {
      cursorLink.addEventListener('mouseenter', function() {
        cursor.classList.add('cursor-link');
      });

      cursorLink.addEventListener('mouseleave', function() {
        cursor.classList.remove('cursor-link');
      });
    });
  }

  /*************************
    Blog
  *************************/
  POTENZA.blogbox = function () {
    $(".blog-post.blog-style-2").on( 'mouseenter', function() {
        $(".blog-post.blog-style-2").removeClass('active');
        $(this).addClass('active');
      }
    );
  }

  /*************************
    Shuffle
  *************************/
  POTENZA.shuffle = function () {
    if ($('.my-shuffle-container').exists()) {
      var Shuffle = window.Shuffle;
      var element = document.querySelector('.my-shuffle-container');
      var sizer = element.querySelector('.my-sizer-element');
      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.grid-item',
        sizer: sizer, // could also be a selector: '.my-sizer-element'
        speed: 700,
        columnThreshold: 0
      });
      jQuery(document).ready(function(){
        jQuery(".btn-filter").on( 'click', function(){
          var data_group = jQuery(this).attr('data-group');
          if( data_group != 'all' ){
            shuffleInstance.filter([data_group]);
          }
          else {
            shuffleInstance.filter();
          }
        });
        $(".filters-group .btn-filter").on( 'click', function(){
          $(".filters-group .btn-filter").removeClass("active");
          $(this).addClass("active");
        });
      });
    }
  }

  /*************************
    Services Fancy
  *************************/

  POTENZA.servicesFancy = function () {
    $(".image-tabs .service-items").each(function() {
      var blockHover = $(this);
      blockHover.children('.service-item').on('mouseenter', function() {
        blockHover.find('.service-item').removeClass('item-active');
        $(this).addClass('item-active');
        var id = $(this).data('tab');
        $(this).parents(".service-tabs").find(".service-content-box").removeClass('service-content-active');
        $('#'+id).addClass("service-content-active");
      });
    });
  };

 /*************************
    Panorama Tabs
  *************************/
  POTENZA.panoramaTabs = function () {
    $(".panorama-tabs .service-items").each(function() {
      var blockHover = $(this);
      blockHover.children('.service-item').on('mouseenter', function() {
        blockHover.find('.service-item').removeClass('item-active');
        $(this).addClass('item-active');
        var id = $(this).data('tab');
        $(this).parents(".service-tabs").find(".service-content-box").removeClass('service-content-active');
        $('#'+id).addClass("service-content-active");
      });
    });
  };

  /*************************
    Team Fancy
  *************************/

  POTENZA.teamFancy = function () {
    $(".teams-boxs .team-items").each(function() {
      var blockHover = $(this);
      $(blockHover.find('.team-item')).on('mouseenter', function() {
        blockHover.find('.team-item').removeClass('item-active');
        $(this).addClass('item-active');
        var id = $(this).data('tab');
        $(this).parents(".teams-boxs").find(".team-image-box").removeClass('team-img-active');
        $('#'+id).addClass("team-img-active");
      });
    });
  };

  /*************************
    Pricing Fancy
  *************************/

  POTENZA.pricingPackage = function() {
    $('.pricing-boxs .pricing-box').on( 'click', function() {
      $('.pricing-boxs .pricing-box.active').removeClass('active');
      $(this).addClass('active');
    });
  };


  /*************************
    Jarallax BG
  *************************/

  POTENZA.jarallaxBG = function () {
    if ($('.jarallax').exists()) {
      jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.85
      });
    }
  };


  /*************************
    Initialize Viewer
  *************************/

  POTENZA.initializePanoramas = function () {
    const panoramas = document.querySelectorAll('.panorama');

    panoramas.forEach(function(panorama, index) {
      const panoramaImage = panorama.getAttribute('data-panorama');
      pannellum.viewer(panorama, {
        "type": "equirectangular",
        "autoLoad": true,
        "panorama": panoramaImage,
      });
    });
  }


  /*************************
    Animated circle text
  *************************/

  POTENZA.animatedcircletext = function () {
    const textElement = document.querySelector(".circle-text");
    if (textElement) {
      const text = textElement.textContent.trim();

      textElement.innerHTML = text
      .split("")
      .map((char, i) => {
        return `<span style="transform:rotate(${i * 12.3}deg)">${char}</span>`;
      })
      .join("");
    }
  };


  /*************************
    Item Quantity
  *************************/
  
  POTENZA.itemQty = function () {
    $(".quantity-control").on("click", function () {
      var $input = $(this).parent().find('input');
      var count  = parseInt($input.val(), 10);

      if ($(this).hasClass('minus')) {
        count = count - 1 < 1 ? 1 : count - 1; // Decrease with a minimum of 1
      } else {
        count += 1; // Increase
      }

      $input.val(count);
      $input.change();
      return false;
    });
  }


  /****************************************************
    POTENZA Window load and functions
  ****************************************************/
  //Window load functions
  $window.on("load", function () {
    POTENZA.preloader(),
    POTENZA.shuffle(),
    POTENZA.progressBar();
  });

  $window.on('load resize', function() {
    POTENZA.pgsHeaderHeight();
  });

  //Document ready functions
  $document.ready(function () {
    POTENZA.counters(),
    POTENZA.slickslider(),
    POTENZA.dropdownmenu(),
    POTENZA.menuaddclass(),
    POTENZA.servicesFancy(),
    POTENZA.panoramaTabs(),
    POTENZA.serviceFancyImg(),
    POTENZA.teamFancy(),
    POTENZA.menuToggle(),
    POTENZA.isSticky(),
    POTENZA.select2(),
    POTENZA.wow(),
    POTENZA.countdownTimer(),
    POTENZA.rangesliders(),
    POTENZA.Tooltip(),
    POTENZA.Popover(),
    POTENZA.historySwiperSlider(),
    POTENZA.searchbar(),
    POTENZA.mediaPopups(),
    POTENZA.carousel(),
    POTENZA.pricingPackage(),
    POTENZA.blogbox(),
    POTENZA.bgmoveLeft(),
    POTENZA.bgmoveRight(),
    POTENZA.bgmoveCenter(),
    POTENZA.itemQty(),
    POTENZA.databg(),
    POTENZA.BackToTop(),
    POTENZA.jarallaxBG(),
    POTENZA.lenisSmoothScroll(),
    POTENZA.lenisSmoothScroll2(),
    POTENZA.initializePanoramas(),
    POTENZA.animatedcircletext(),
    POTENZA.mouseCursor();
  });
})(jQuery);