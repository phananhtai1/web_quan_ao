$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".fa-search").click(function () {
    $('.input-search').fadeToggle();
  });

  $(window).resize(function () {
    if($(document).width() > 1024){
      $('.navbar-collapse').removeClass('show');
    }

    if($(document).width() > 1200){
      $('.dropdown-toggle').attr('aria-expanded', 'false').removeClass('show');
      $('.dropdown-menu').attr('data-bs-popper', '').removeClass('show');
    }
  })

  $(window).scroll(function () {
    if($(this).scrollTop() > 100){
      $('.back-top').fadeIn();
    }else{
      $('.back-top').fadeOut();
    }
  })

  $(".back-top").click(function () {
    $('html,body').animate({
      scrollTop: 0
    },800);
    return false;
  })

});
