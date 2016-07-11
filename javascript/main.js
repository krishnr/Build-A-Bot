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

$(document)
		.on('focus.textarea', '.autoExpand', function(){
			var savedValue = this.value;
			this.value = '';
			this.baseScrollHeight = this.scrollHeight;
			this.value = savedValue;
		})
		.on('input.textarea', '.autoExpand', function(){
			var minRows = this.getAttribute('data-min-rows')|0,
				 rows;
			this.rows = minRows;
        console.log(this.scrollHeight , this.baseScrollHeight);
			rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
			this.rows = minRows + rows;
		});