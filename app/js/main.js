$(document).ready(function() {
  function fullPage() {
    $('#fullpage').fullpage({
      menu: '#menu',
      anchors: ['offer', 'about', 'advantages', 'reviews', 'contacts'],
      scrollOverflow: true,
      navigation: true,
    });
  }

  fullPage();

 var initialCheckWidth = $(window).width();
  if (initialCheckWidth > 959) {
    fullPage();
  }
  $(window).resize(function() {
    newCheckWidth = $(window).width();
    if( initialCheckWidth > 960 && newCheckWidth <= 960 ) {
      $.fn.fullpage.destroy('all');
    } else if( initialCheckWidth <= 960 && newCheckWidth > 960 ) {
      fullPage();
    }
    initialCheckWidth = newCheckWidth;
  });

    $('#clientSlider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000
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

    $('advantageSlider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      responsive: [
        {
          breakpoint: 568,
          settings: 'unslick'
        }
      ]
    });



    $('.menu-btn').on('click', function(e) {
      $('.burger').toggleClass('active');
      $('.m-menu').toggleClass('m-menu-show');
    });
});
