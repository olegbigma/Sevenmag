$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    dotsClass:'slick-dots',
    mobileFirst:true,
    responsive: [{
        breakpoint: 1199 ,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
               }
      }]
  });

  $('.left-multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    dotsClass:'slick-dots',
    swipeToSlide:true,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
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
  });

  // calendar
  function calendar(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      calendar = '<tr>',
      month=["January","February","March","April","May","June","July","August","September","October","November","Deсember"];
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }else{
      calendar += '<td>' + i;
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td> ';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
  }
  }
  calendar("calendar", new Date().getFullYear(), new Date().getMonth());
  // переключатель минус месяц
  document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
  }
  // переключатель плюс месяц
  document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
  }