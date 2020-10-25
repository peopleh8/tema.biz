$(function () {
  $(window).on('load', function() {
    $('.courses__tab').fadeOut(0).each(function() {
      if ($(this).hasClass('active')) {
        $(this).fadeIn(0);
      }
    });
  });

  $('.courses__tab-btn').on('click', function(e) {
    e.preventDefault();
    $('.courses__tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.courses__tab').fadeOut(0);
    var hash = $(this).attr('href');
    var target = $(hash);
    target.addClass('active');
    if (target.hasClass('active')) {
      target.fadeIn(400);
    }
  });

  $('.courses__modal-close-btn').on('click', function(e) {
    e.preventDefault();
    $('.courses__modal').magnificPopup('close');
  });

  $('.courses__tab-item-btn').magnificPopup({
    type:'inline',
    midClick: true,
    callbacks: {
      open: function() {
        $('.courses__modal-for-slider').slick({
          arrows: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 900,
          pauseOnFocus: true,
          pauseOnHover: false,
          asNavFor: '.courses__modal-photo-slider'
        });

        $('.courses__modal-photo-slider').slick({
          arrows: false,
          slidesToScroll: 1,
          slidesToShow: 6,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 900,
          pauseOnFocus: true,
          pauseOnHover: false,
          asNavFor: '.courses__modal-for-slider',
          responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      }
    }
  });
});