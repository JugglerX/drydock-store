$(document).ready(function() {

  console.log('accordion.js');

  $('.feature').click(function(e) {
    e.preventDefault();

    // $('.feature').removeClass('open');
    // $('.feature-body').removeClass('show');

    var wrapper = $(this);

    if (wrapper.hasClass('open')) {
      wrapper.removeClass('open');
      wrapper.children('.feature-body').removeClass('show');
    } else {
      wrapper.addClass('open');
      wrapper.children('.feature-body').addClass('show');
      wrapper.siblings('.feature').removeClass('open');
      wrapper.siblings('.feature').children('.feature-body').removeClass('show');
    }
  });

});

