	$.ajaxSetup({async:false});

	//Get All Data
	function get_all_class(){
	  var jsonData;
	  $.ajax({
	    type: "POST",
	    url: baseUrl+login,
	    data : JSON.stringify({"username" : "admin", "password" : "Admin123$"}),      
	    dataType: "json",
	    headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json" },
	    success: function(result){
	      console.log(result);
	      $.ajax({
	        type: "GET",
	        url: baseUrl+getallClass,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : result.token},
	        success: function(result){
	          // console.log(result);
	          jsonData=result;
	        }
	      });
	    }
	  }); 
	  return jsonData; 
	};	

	// Create Data
	function add_class(){
	  var unindexed_array = $('#Myform').serializeArray();
	  var indexed_array = {};

	  $.map(unindexed_array, function (n, i){
	    indexed_array[n['name']] = n['value'];
	  });
	  // console.log(indexed_array);


	  $.ajax({
	    type: "POST",
	    url: baseUrl+login,
	    data : JSON.stringify({"username" : "admin", "password" : "Admin123$"}),      
	    dataType: "json",
	    headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json" },
	    success: function(result){
	      console.log(result);
	      $.ajax({
	        type: "POST",
	        url: baseUrl+addClass,
	        data : JSON.stringify(indexed_array),      
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : result.token},
	        success: function(result){
	          console.log(result);
	        }

	      });
	    }
	  });	  
	  $("#myTable tbody").html("");
	  buildHtmlTable(get_all_class(), "#myTable");

	};

	//Update Data
	function update_class(id){
	  var unindexed_array = $('#myForm2').serializeArray();
	  var indexed_array = {};

	  $.map(unindexed_array, function (n, i){
	    indexed_array[n['name']] = n['value'];
	  });
	  console.log(indexed_array);

	  $.ajax({
	    type: "POST",
	    url: baseUrl+login,
	    data : JSON.stringify({"username" : "admin", "password" : "Admin123$"}),      
	    dataType: "json",
	    headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json" },
	    success: function(result){
	      console.log(result);
	      $.ajax({
	        type: "PUT",
	        url: baseUrl+updateClass+id,
	        data : JSON.stringify(indexed_array),      
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : result.token},
	        success: function(result){
	          console.log(result);	          
	        }
	      });
	    }
	  }); 	  
	  $("#myTable tbody").html("");
	  buildHtmlTable(get_all_class(), "#myTable");	
	};	
		//Delete Data
		function delete_class(id){
		  $.ajax({
		    type: "POST",
		    url: baseUrl+login,
		    data : JSON.stringify({"username" : "admin", "password" : "Admin123$"}),      
		    dataType: "json",
		    headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json" },
		    success: function(result){
		      console.log(result);
		      $.ajax({
		        type: "DELETE",
		        url: baseUrl+deleteClass+id,
		        dataType: "json",
		        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
		        "User-ID" : "1", "Authorization" : result.token},
		        success: function(result){
		          console.log(result);
		        }
		      });
		    }
		  });	    
		   $("#myTable tbody").html("");
		   buildHtmlTable(get_all_class(), "#myTable");	   
		};

		//Get Detail
		function detail_class(id){
		  $.ajax({
		    type: "POST",
		    url: baseUrl+login,
		    data : JSON.stringify({"username" : "admin", "password" : "Admin123$"}),      
		    dataType: "json",
		    headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json" },
		    success: function(result){
		      console.log(result);
		      $.ajax({
		        type: "GET",
		        url: baseUrl+getClass+id,
		        dataType: "json",
		        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
		        "User-ID" : "1", "Authorization" : result.token},
		        success: function(result){
		          console.log(result);	        
		          $("#name").val(result.name);
		          $("#capacity").val(result.capacity);
		          $("#update").attr("onclick","update_class("+id+");");	          
		        }
		      });
		    }
		  });

		};	