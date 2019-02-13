(function($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });

  // About section scroll
  $(".overlay-detail a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {
      window.location.hash = hash;
    });
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // Testimonials Slider
  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    mode: 'fade'
  });

  
  $("#wPro1,#wPro2,#wPro3,#wPro4,#wPro5,#wPro6, #wPro7, #wPro8, #wPro9, #wPro10,#wPro11,#wPro12").hover(function(){
    $(this).find('img').toggle();
  });

  var lastScrollTop = 0;
$(window).scroll(function(event){
  if($( window ).width() < 768) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        $('.top-nav-collapse').attr('style','margin-top: 27px !important;');
    } else {
       // upscroll code
       $('.top-nav-collapse').attr('style','margin-top: 0px !important;');
    }
    lastScrollTop = st;
  } 
});

})(jQuery);
