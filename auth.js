function auth_login()
{	
	var unindexed_array = $('#login_form').serializeArray();
	var indexed_array = {};

	$.map(unindexed_array, function (n, i){
	indexed_array[n['name']] = n['value'];
	});
	console.log(indexed_array);

	$.ajax({
		type: "POST",
		url: baseUrl+login,
		data: JSON.stringify(indexed_array),
		dataType: "json",
		headers:{"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json"},
		success: function(data){
			$(location).attr('href', 'student.html'),
			console.log(data)
   			localStorage.setItem('token', data.token);
		}
	});
};