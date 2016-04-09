$(document).ready(function() {
	$.ajax({
		url: 'https://glowing-heat-2266.firebaseio.com/',
		type: 'get',
		dataType: 'json',
		error: function(data){
		},
		success: function(data){
			var cerveza = data.id;       
		}
	});

})

