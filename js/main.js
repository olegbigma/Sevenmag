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

  $('.single-slider-posts').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
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