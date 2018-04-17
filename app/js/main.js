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
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            draggable: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            draggable: false,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            draggable: false,
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
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
            autoplaySpeed: 5000,
            draggable: false,
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

        if ( $('.m-menu').hasClass('m-menu-show') ) { 
        $("body").css("overflow","hidden"); 
        } else { 
        $("body").css("overflow","auto"); 
        } 

        if ($(window).scrollTop() < 480) { 
        $('.logo__img').toggleClass('active'); 
        $('.logo__img--dark').toggleClass('active'); 
      } 
    });

  // Фиксированный хэдэр

    $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
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
    
  // Аякс форма)
  $(document).ready(function() {

  //E-mail Ajax Send
  $("#form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
    
  });
  //при нажатию на любую кнопку, имеющую класс .btn
  $(".form__button").click(function() {
    //открыть модальное окно с id="myModal"
    $("#popup").addClass('active');
      $("#popup__close").click(function() {
        $("#popup").removeClass('active');
      });
    });
  });
  // маска для телефона
  $("#phone").mask("+7(999) 999-99-99");

  $('.m-menu__link').on('click', function() {
     $('.burger').removeClass('active');
     $('.m-menu').removeClass('m-menu-show');
  });


  if ($(window).width() < 768) {
    $('section').removeAttr('id', 'section0');
    $('section').removeAttr('id', 'section1');
    $('section').removeAttr('id', 'section2');
    $('section').removeAttr('id', 'section3');
    $('section').removeAttr('id', 'section4');
  }
  else {
    return;
  }

  if ($(window).width() < 768) {
    $('section:first-child').attr('id', 'offer');
    $('section:nth-child(2)').attr('id', 'about');
    $('section:nth-child(3)').attr('id', 'advantages');
    $('section:nth-child(4)').attr('id', 'reviews');
    $('section:last-child').attr('id', 'contacts');
    }
    else {
      return;
  }; 
});

