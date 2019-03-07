$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    dotsClass:'slick-dots',
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
               }
      }]
  });

  $('.left-multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    dotsClass:'slick-dots',
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
               }
      }]
  });