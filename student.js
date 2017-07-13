	$.ajaxSetup({async:false});

	//Get All Data

	function get_all_student(){
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
	        url: baseUrl+getallStudent,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : result.token},
	        success: function(result){
	          //console.log(result);
	          jsonData=result;
	        }
	      });
	    }
	  }); 
	  return jsonData; 
	};
	
	// Create Data
	function add_student(){
	  var unindexed_array = $('#Myform').serializeArray();
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
	        type: "POST",
	        url: baseUrl+addStudent,
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
	  buildHtmlTable(get_all_student(), "#myTable");

	};
	
	//Update Data
	function update_student(id){
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
	        url: baseUrl+updateStudent+id,
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
	  buildHtmlTable(get_all_student(), "#myTable");	
	};

	//Delete Data
	function delete_student(id){
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
	        url: baseUrl+deleteStudent+id,
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
	   buildHtmlTable(get_all_student(), "#myTable");	   
	};

	//Get Detail
	function detail_student(id){
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
	        url: baseUrl+getStudent+id,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : result.token},
	        success: function(result){
	          console.log(result);	        
	          $("#name").val(result.name);
	          $("#email").val(result.email);
	          $("#class_id").val(result.class_id);
	          $("#update").attr("onclick","update_student("+id+");");	          
	        }
	      });
	    }
	  });

	};