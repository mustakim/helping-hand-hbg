//Owl Carousel
$('#customer-testi-mob').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$('#customer-testi-pc').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1500: {
      items: 3,
    },
  },
});
$('#customer-testii-mob').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$('#customer-testii-pc').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});

$('#owl-fade').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: 'fadeOut',
  items: 1,
});

$('#single-owl').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  items: 1,
});
