// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({
//     'background-color': '#0000FF'
//   });
// });

// $(function (){
//   $('.box1').hide();
// })

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
    'background-color': '#0000FF',
    'width' : '200px',
    'height': '100px'
    });
  });
  $('.box1').slideUp();
});