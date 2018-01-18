// Scripts.js
$(document).ready(function() {

  console.log('hamburger.js');

  // Hamburger Icon Trigger
  $('#hamburger').on('click', function (e) {
    console.log($(this));
    console.log($(this).hasClass('open'));
    if ($(this).hasClass('open')) {
      $('body').removeClass('menu-mobile-is-active');
      $(this).removeClass('open');
      $(this).removeClass('is-active');
      $('#menu-mobile').removeClass('open');
    } else {
      $('body').addClass('menu-mobile-is-active');
      $(this).addClass('open');
      $(this).addClass('is-active');
      $('#menu-mobile').addClass('open');
    }
  });

  $('#menu-mobile').on('click', function(e) {
    console.log(e.target == this);
    if (e.target == this) {
      console.log($(this));
      $(this).removeClass('open');
      $('#hamburger').removeClass('open');
      $('#hamburger').removeClass('is-active');
      $('body').removeClass('menu-mobile-is-active');
    }
  })

});
