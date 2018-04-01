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
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
});
