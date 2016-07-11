$(document).ready(function () {
  $('.product-sales').hide();
  $('.lead-gen').hide();
  $('.objective-dropdown').change(function () {
    $('.lead-gen').fadeOut('fast');
    $('.product-sales').fadeOut('fast');
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

$(document).ready(function() {
  $.uploadPreview({
    input_field: "#image-upload-1",
    preview_box: "#image-preview-1",
    label_field: "#image-label-1"
  });
  $.uploadPreview({
    input_field: "#image-upload-2",
    preview_box: "#image-preview-2",
    label_field: "#image-label-2"
  });
  $.uploadPreview({
    input_field: "#image-upload-3",
    preview_box: "#image-preview-3",
    label_field: "#image-label-3"
  });
  $.uploadPreview({
    input_field: "#image-upload-3",
    preview_box: "#image-preview-3",
    label_field: "#image-label-3"
  });
  $.uploadPreview({
    input_field: "#image-upload-4",
    preview_box: "#image-preview-4",
    label_field: "#image-label-4"
  });
});