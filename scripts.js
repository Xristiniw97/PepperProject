(function($){

    var isNotMobile = window.matchMedia("only screen and (min-width: 768px)");
    
    var $item = $('.carousel .carousel-item'); 
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    
 if (isNotMobile.matches) {
     
    $item.height($wHeight); 
    $item.addClass('full-screen');
    
    $('.carousel img').each(function() {
      var $src = $(this).attr('src');
      var $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
      });
      $(this).remove();
    });
    
    $(window).on('resize', function (){
      $wHeight = $(window).height();
      $item.height($wHeight);
    });
    
}else{
      $('.carousel img').each(function() {
          $(this).addClass('img-fluid');

    }); 

}

   // Configure Slider
    $('#carouselExampleIndicators').carousel({
      interval: 6000,
      pause: 'hover'
    });

    $('.roomTypes-owl').owlCarousel({
      loop:false,
      margin:25,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          400:{
            items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1430:{
            items:4
          }
          
      }
    });

    $('.bar-owl').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      dots:false,
      autoplay:5000,
      autoplaySpeed:2000,
      autoplayTimeout:4000,
      responsive:{
          0:{
              items:1
          },
          400:{
            items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3,
              autoplay: false
          }
      }
    });

    
    $('.destination-owl').owlCarousel({
      loop:false,
      margin:25,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          400:{
            items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1200:{
            items:4
          },
          1500:{
            items:5
          }
      }
    });

})(jQuery);