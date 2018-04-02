$(document).ready(function() {
    $('#fullpage').fullpage({
      menu: '#menu',
      responsiveWidth: 768,
      anchors: ['offer', 'about', 'advantages', 'reviews', 'contacts'],
      scrollOverflow: true,
      navigation: true
    });

    $('#clientSlider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 200
    });

    $('#reviewSlider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 200,
      nextArrow: '<button type="button" class="review__toggle-btn--next"></button>',
      prevArrow: '<button type="button" class="review__toggle-btn--prev"></button>'
    });
});
