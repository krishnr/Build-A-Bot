$(document).ready(function () {
  $('.product-sales').hide();
  $('.lead-gen').show();
  $('.objective-dropdown').change(function () {
    $('.lead-gen').fadeOut('fast');
    $('.product-sales').fadeOut('fast');
    $('.'+$(this).val()).fadeIn('slow');
  })
});

$('.business-name-input').keyup(function() {
    $('.business-name-header').text(this.value);
});