$(function()
{

	// function getJSON()
	// {
	// 	var showData = $('#show-data');

	// 	$.getJSON('https://storage.cloud.google.com/ritualtest/ritualRestaurantList.json', function (data) {
	// 		console.log(data);

	// 		var items = data.items.map(function (item) {
	// 		return item.key + ': ' + item.value;
	// 	});

	// 	showData.empty();

	// 	if (items.length) {
	// 	var content = '<li>' + items.join('</li><li>') + '</li>';
	// 	var list = $('<ul />').html(content);
	// 	showData.append(list);
	// 	}
	// 	});

	// 	showData.text('Loading the JSON file.');
	// }

	// getJSON();



	// var promise = $.getJSON('https://storage.cloud.google.com/ritualtest/ritualRestaurantList.json?callback=?');
	// var container = $('#show-data');

	// promise.done(function(data) {
	// 	console.log(data);
	// 	container.html(data.text);
	// });

	// promise.fail(function() {
	// 	container.html('<p>Oh no, something went wrong!</p>');
	// });



	// function getJSON()
	// {
	// 	var container = $('#show-data');

	// 	$.ajax({
	// 		url: 'https://storage.cloud.google.com/ritualtest/ritualRestaurantList.json',
	// 		dataType: 'jsonp',
	// 		success: function(data) {
	// 			console.log(data);
	// 			container.html(data.text);
	// 		},
	// 		error: function() {
	// 			container.html('<p>Oh no, something went wrong!</p>');
	// 		}
	// 	});
	// }

	// getJSON();

	var remote = require('remote-json');

	remote('http://echo.jsontest.com/key/value/name/Bob').get(function (err, res, body) {
			console.log(res.statusCode); // 200
			console.log(body); // {"name": "Bob", "key": "value"}
	});

});
