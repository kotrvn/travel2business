$(document).ready(function() {
  // Fullpage
  function fullPage() {
    $('#fullpage').fullpage({
      menu: '#menu',
      anchors: ['offer', 'about', 'advantages', 'reviews', 'contacts'],
      scrollOverflow: true,
      navigation: true,
    });
  }
  // Активация Fullpage на больших экранах
  var initialCheckWidth = $(window).width();
    if (initialCheckWidth > 768) {
      fullPage();
    }
    $(window).resize(function() {
      newCheckWidth = $(window).width();
      if( initialCheckWidth > 767 && newCheckWidth <= 767 ) {
        $.fn.fullpage.destroy('all');
      } else if( initialCheckWidth >= 767 && newCheckWidth > 767 ) {
        fullPage();
      }
      initialCheckWidth = newCheckWidth;
  });

    // Слайдер с лого клиентов
    $('#clientSlider').slick({
      centerMode: true,
      centerPadding: '10px',
      infinite: true,
      mobileFirst: true,
      arrows: false,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2
          }
        }
      ]
    });

    // Слайдер с отзывами
    $('#reviewSlider').slick({
      initialSlide: 1,
      mobileFirst: true,
      infinite: true,
      dots: true,
      initialSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false
          }
        }
      ]
    });

    // Кнопки слайдера с отзывами

    $('#jsSliderPrev').on('click', function() {
      $('#reviewSlider').slick('slickNext');
    });
    $('#jsSliderNext').on('click', function() {
      $('#reviewSlider').slick('slickPrev');
    });
    // Номер слайда с отзывом
      var $status = $('#result');
      var $slickElement = $('#reviewSlider');

      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
      });

  // слайдер с преимуществами

    $('#advantageSlider').slick({
      mobileFirst: true,
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick'
        }
      ]
    });

  // Меню на телефоне
    $('.menu-btn').on('click', function(e) {
      $('.burger').toggleClass('active');
      $('.m-menu').toggleClass('m-menu-show');
    });


  // Фиксированный хэдэр

    $(window).scroll(function(){
      if ($(this).scrollTop() > 450) {
        $('.page-header').addClass('sticked');
        $("[data-logo='red']").removeClass('active');
        $("[data-logo='blue']").addClass('active');
        $('.burger').addClass('burger--dark');
      } else {
        $('.page-header').removeClass('sticked'); 
        $("[data-logo='blue']").removeClass('active');
        $("[data-logo='red']").addClass('active');
        $('.burger').removeClass('burger--dark');
      }
  });
  function menuLogo() {
     if($('.burger + .active')) {
      $("[data-logo='blue']").removeClass('active');
      $("[data-logo='red']").addClass('active');
      } else {
        $("[data-logo='red']").removeClass('active');
        $("[data-logo='blue']").addClass('active');
      }
  };

  menuLogo();
  
  
  var header = $(".page-header"); // Меню
  var scrollPrev = 0 // Предыдущее значение скролла
  
  $(window).scroll(function() {
    var scrolled = $(window).scrollTop(); // Высота скролла в px
    var firstScrollUp = false; // Параметр начала сколла вверх
    var firstScrollDown = false; // Параметр начала сколла вниз
    
    // Если скроллим
    if ( scrolled > 0 ) {
      // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
      if ( scrolled > scrollPrev ) {
        firstScrollUp = false; // Обнуляем параметр начала скролла вверх
        // Если меню видно
        if ( scrolled < header.height() + header.offset().top ) {
          // Если только начали скроллить вниз
          if ( firstScrollDown === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollDown = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
        // Если меню НЕ видно
        } else {
          // Позиционируем меню фиксированно вне экрана
          header.css({
            "position": "fixed",
            "top": "-" + header.height() + "px"
          });
        }
        
      // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
      } else {
        firstScrollDown = false; // Обнуляем параметр начала скролла вниз
        // Если меню не видно
        if ( scrolled > header.offset().top ) {
          // Если только начали скроллить вверх
          if ( firstScrollUp === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollUp = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
        } else {
          // Убираем все стили
          header.removeAttr("style");
        }
      }
      // Присваеваем текущее значение скролла предыдущему
      scrollPrev = scrolled;
    } 
  });
});

