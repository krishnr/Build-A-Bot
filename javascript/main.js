$(document).ready(function () {
  //Bot Type Options
  $('.product-sales').hide();
  $('.lead-gen').hide();
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

$(document).ready(function () {
  $('textarea[data-limit-rows=true]').on('keypress', function (event) {
    var textarea = $(this),
        numberOfLines = (textarea.val().match(/\n/g) || []).length + 1,
        maxRows = parseInt(textarea.attr('rows'));

    if (event.which === 13 && numberOfLines === maxRows ) {
      return false;
    }
  });
});

jsonObject = {generate_leads: [], sell_products: []}

$('.business-name-input').each(function(e){
    addToJsonArray(this);
  });

$('.get-started-text').each(function(e){
    addToJsonArray(this);
  });

$('.call-to-action-title').each(function(e){
    addToJsonArray(this);
  });

$('.call-to-action-subtitle').each(function(e){
    addToJsonArray(this);
  });

$('.call-to-action-button').each(function(e){
    addToJsonArray(this);
  });

$('.carousel-title').each(function(e){
    addToJsonArray(this);
  });

$('.carousel-subtitle').each(function(e){
    addToJsonArray(this);
  });

$('.carousel-button').each(function(e){
    addToJsonArray(this);
  });

$('.purchase-button').each(function(e){
    addToJsonArray(this);
  });

$('.purchase-prompt').each(function(e){
    addToJsonArray(this);
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
  $.uploadPreview({
    input_field: "#image-upload-5",
    preview_box: "#image-preview-5",
    label_field: "#image-label-5"
  });
  $.uploadPreview({
    input_field: "#image-upload-6",
    preview_box: "#image-preview-6",
    label_field: "#image-label-6"
  });
  $.uploadPreview({
    input_field: "#image-upload-7",
    preview_box: "#image-preview-7",
    label_field: "#image-label-7"
  });
  $.uploadPreview({
    input_field: "#image-upload-8",
    preview_box: "#image-preview-8",
    label_field: "#image-label-8"
  });
  $.uploadPreview({
    input_field: "#image-upload-9",
    preview_box: "#image-preview-9",
    label_field: "#image-label-9"
  });
  $.uploadPreview({
    input_field: "#image-upload-10",
    preview_box: "#image-preview-10",
    label_field: "#image-label-10"
  });
  $.uploadPreview({
    input_field: "#image-upload-11",
    preview_box: "#image-preview-11",
    label_field: "#image-label-11"
  });
});

function addToJsonArray(a) {
  var value = $(a).val();
  if (!value) {
    value = $(a).attr("placeholder");
  }
  var titleId = $(a).attr("id");
  $(a).on('change', function(e){
    value = e.target.value;
    titleId = e.target.id;
    if (titleId.indexOf("generate-leads") >= 0) {
      obj = {}
      obj[titleId] = value;
      jsonObject.generate_leads.push(obj)
    }
    else {
      obj = {}
      obj[titleId] = value;
      jsonObject.sell_products.push(obj)
    }
    console.log(jsonObject);
      });
  if (titleId.indexOf("generate-leads") >= 0) {
    obj = {}
    obj[titleId] = value;
    jsonObject.generate_leads.push(obj)
  }
  else {
    obj = {}
    obj[titleId] = value;
    jsonObject.sell_products.push(obj)
  }
  console.log(jsonObject);
}

$('#generate-json-button').on('click', function(){
  document.getElementById('json-data').innerHTML = JSON.stringify(jsonObject, undefined, 4);
})