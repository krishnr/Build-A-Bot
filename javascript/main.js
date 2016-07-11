$(document).ready(function () {
  //Bot Type Options
  $('.product-sales').hide();
  $('.lead-gen').show();
  $('.objective-dropdown').change(function () {
    $('.lead-gen').fadeOut('fast');
    $('.product-sales').fadeOut('fast');
    $('.'+$(this).val()).fadeIn('slow');
  })

  //Message Template Options
  $('.generic-template').show();
  $('.plain-text').hide();
  $('.message-template-dropdown').change(function () {
    $('.generic-template').fadeOut('fast');
    $('.plain-text').fadeOut('fast');
    $('.'+$(this).val()).fadeIn('slow');
  })
});

$('.business-name-input').keyup(function() {
    $('.business-name-header').text(this.value);
});