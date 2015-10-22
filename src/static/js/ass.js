

function func() {
        var b = document.getElementById("abc");
       var a= b.options[b.selectedIndex].value;
	   $('input.ok').attr('id', a);
}

$('#labela').on('click', function(e){
	
	var query = $('#querya').val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Type<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output1').html(tbody);
		} catch(err) {
			$('#output1').html('Something went wrong!');
		}
		

		
	});
	
});

$('#labelb').on('click', function(e){
	
	var query = $('#queryb').val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Type<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output1').html(tbody);
		} catch(err) {
			$('#output1').html('Something went wrong!');
		}
		

		
	});
	
});

$('#labelc').on('click', function(e){
	
	var query = $('#queryc').val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Type<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output1').html(tbody);
		} catch(err) {
			$('#output1').html('Something went wrong!');
		}
		

		
	});
	
});

$('#labeld').on('click', function(e){
	
	var query = $('#queryd').val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Type<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output1').html(tbody);
		} catch(err) {
			$('#output1').html('Something went wrong!');
		}
		

		
	});
	
});

$('#labele').on('click', function(e){
	
	var query = $('#querye').val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Type<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output1').html(tbody);
		} catch(err) {
			$('#output1').html('Something went wrong!');
		}
		

		
	});
	
});

$('#labelf').on('click', function(e){
	
	var query = $('#queryf').val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Type<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output1').html(tbody);
		} catch(err) {
			$('#output1').html('Something went wrong!');
		}
		

		
	});
	
});

$('#labelg').on('click', function(e){
	
	var query = $('#queryg').val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Type<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output1').html(tbody);
		} catch(err) {
			$('#output1').html('Something went wrong!');
		}
		

		
	});
	
});


var button = document.getElementById('inp');
button.addEventListener('click', function() {
    $('#' + this.id).on('click', function(e){
	
	var query = $('#query'+ this.id).val();
	var endpoint = 'http://localhost:5820/CarLabel/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var tbody = $('<tbody></tbody>');
			tbody.append('<tr><td><strong>Label<strong></td><td><strong>Fuel usage per 100km</strong></td><td><strong>CO2 emission g/km</strong></td></tr>');
			$.each(json.results.bindings, function(index,value){
				var tr = $('<tr></tr>');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var td = $('<td></td>');
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						td.append(a);
						tr.append(td);
					// Else we're just showing the value.
					} else {
						tr.append('<td>'+v_value+'</td>');
					}
					
				});
				tbody.append(tr);
			
			});
			$('#output2').html(tbody);
		} catch(err) {
			$('#output2').html('Something went wrong!');
		}
		

		
	});
	
});
});

