$(document).ready(function() {
  function fullPage() {
    $('#fullpage').fullpage({
      menu: '#menu',
      anchors: ['offer', 'about', 'advantages', 'reviews', 'contacts'],
      scrollOverflow: true,
      navigation: true,
    });
  }

 var initialCheckWidth = $(window).width();
  if (initialCheckWidth > 960) {
    fullPage();
  }
  $(window).resize(function() {
    newCheckWidth = $(window).width();
    if( initialCheckWidth > 959 && newCheckWidth <= 959 ) {
      $.fn.fullpage.destroy('all');
    } else if( initialCheckWidth >= 959 && newCheckWidth > 959 ) {
      fullPage();
    }
    initialCheckWidth = newCheckWidth;
  });

    $('#clientSlider').slick({
      infinite: true,
      mobileFirst: true,
      arrows: false,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('#reviewSlider').slick({
      infinite: true,
      initialSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 2000,
    });
    $('#jsSliderPrev').on('click', function() {
      $('#reviewSlider').slick('slickNext');
    });
    $('#jsSliderNext').on('click', function() {
      $('#reviewSlider').slick('slickPrev');
    });

      var $status = $('#result');
      var $slickElement = $('#reviewSlider');

      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
      });

    $('#advantageSlider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 959,
          settings: 'unslick'
        }
      ]
    });



    $('.menu-btn').on('click', function(e) {
      $('.burger').toggleClass('active');
      $('.m-menu').toggleClass('m-menu-show');
    });

    var $window = $(window),
    lastScrollTop = 0;

    function onScroll (e) {
        var top = $window.scrollTop();
        if (lastScrollTop > top) {
            $('.page-header__wrapper').addClass('active');
        } else if (lastScrollTop < top) {
            $('.page-header__wrapper').removeClass('active');
        }
        lastScrollTop = top;
    }
    $window.on('scroll', onScroll);

    var $window = $(window),
    lastScrollTop = 0;

    var darkLogo = $('.logo__img--dark');
            logo = $('.logo__img');
         menuBtn = $('.burger');


    $(window).on('scroll', function(){
    if($(window).scrollTop() >= $('.offer__bottom').offset().top){
      darkLogo.toggleClass('active');
      logo.toggleClass('active');
      menuBtn.css('background-color', '#000');
    } 
  });
});
