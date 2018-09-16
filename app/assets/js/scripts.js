/*!
 * json-carousel-demo
 * 
 * 
 * @author 
 * @version 1.0.0
 * Copyright 2018. ISC licensed.
 */
// get json and append it to the carousel

$(function()
{

	// function getJSON()
	// {
	// 	var showData = $('#show-data');

	// 	$.getJSON('/data/ritualRestaurantList.json', function (data) {
	// 		console.log(data);

	// 		var items = data.items.map(function (item) {
	// 		return item.key + ': ' + item.value;
	// 	});

	// 	showData.empty();

	// 	if (items.length) {
	// 		var content = '<li>' + items.join('</li><li>') + '</li>';
	// 		var list = $('<ul />').html(content);
	// 		showData.append(list);
	// 	}
	// 	});

	// 	showData.text('Loading the JSON file.');
	// }

	// getJSON();
});


// owl carousel

$(function()
{
	$('.owl-carousel').owlCarousel(
	{
		navText: '',
		responsive: {
			0: {
				items: 1,
				margin: 16,
				stagePadding: 16
			},
			576: {
				items: 2,
				nav: true,
				margin: 16
			},
			768: {
				items: 3,
				nav: true,
				margin: 16
			},
			1200: {
				items: 3,
				nav: true,
				margin: 32
			}
		}
	});

	// form validation on a simulated submit action

	const $form = $('form');
	const $inputs = $form.find ('.text-field, .tel-field');
	const $email  = $form.find ('.email-field');

	$inputs.blur (function()
	{
		if (!$(this).val())
		{
			$(this).removeClass('is-valid').addClass('is-invalid');
		}

		else
		{
			$(this).removeClass('is-invalid').addClass('is-valid');
		}
	});

	$email.blur (function()
	{
		var emailValue = $email.val();

		if(emailValue.indexOf('@')>-1) {
			$(this).removeClass('is-invalid').addClass('is-valid');
		}

		else
		{
			$(this).removeClass('is-valid').addClass('is-invalid');
		}
	});

	$form.submit (function()
	{
		$inputs.each (function()
		{
			if (!$(this).val())
			{
				$(this).removeClass('is-valid').addClass('is-invalid');
			}

			else
			{
				$(this).removeClass('is-invalid').addClass('is-valid');
			}
		});

		var emailValue = $email.val();

		if(emailValue.indexOf('@')>-1) {
			$email.removeClass('is-invalid').addClass('is-valid');
		}

		else
		{
			$email.removeClass('is-valid').addClass('is-invalid');
		}

		return false; // we don't submit the form in any case
	});

});
