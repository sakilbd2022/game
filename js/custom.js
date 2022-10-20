$(function(){
   
  new WOW().init();
  
    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true 
      })
      new VenoBox({
        selector: ".problem"
    });

    $('.popular_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow:'.populardui',
      nextArrow:'.popularak',
      responsive: [
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1

          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1

          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
     
       
      ]
      
    });


    $('.sell_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      arrows:false,
      responsive: [
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1

          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1

          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      
      ]
    });




    $('.store_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:'.pre',
        nextArrow:'.next',
        responsive: [
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
  
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
  
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      });

     $(".back_to_top").click(function(){
      $("html,body").animate({
        scrollTop:0
      })
     })
      
     $(Window).scroll(function(){
      var scrolling = $(window).scrollTop()
      if (scrolling > 20) {
        $(".back_to_top").fadeIn(500)
      }else{
        $(".back_to_top").fadeOut(500)
      }
      if(scrolling > 20){
        $(".nav_main").addClass("nav_bg")
      }else{
        $(".nav_main").removeClass("nav_bg")
      }
     })














})
// $('.catalog_slider').carousel();



