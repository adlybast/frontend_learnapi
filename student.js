	$.ajaxSetup({async:false});

	//Get All Data
	function get_all_student(){
	  var jsonData;
	      $.ajax({
	        type: "GET",
	        url: baseUrl+getallStudent,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          //console.log(result);
	          jsonData=result;
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
	        url: baseUrl+addStudent,
	        data : JSON.stringify(indexed_array),      
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          console.log(result);
	        	}
	      }); 
	   	   window.top.location.reload(false);
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
	        type: "PUT",
	        url: baseUrl+updateStudent+id,
	        data : JSON.stringify(indexed_array),      
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          console.log(result);	          
	        }
	      });
	   	   window.top.location.reload(false);
	};

	//Delete Data
	function delete_student(id){
	      $.ajax({
	        type: "DELETE",
	        url: baseUrl+deleteStudent+id,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          console.log(result);
	        }
	      });
	   $("#myTable tbody").html("");
	   buildHtmlTable(get_all_student(), "#myTable");
	};

	//Get Detail
	function detail_student(id){
	      $.ajax({
	        type: "GET",
	        url: baseUrl+getStudent+id,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          console.log(result);	        
	          $("#name").val(result.name);
	          $("#email").val(result.email);
	          $("#class_id").val(result.class_id);
	          $("#update").attr("onclick","update_student("+id+");");	          
	        }
	      });
	};

	//Get Available Student
	function available_student(){
		var jsonData;
	      $.ajax({
	        type: "GET",
	        url: baseUrl+getStudentAvailable,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          console.log(result);
	          jsonData=result;	          
	        }
	      });
	    return jsonData;
	};

	//Assign Student
	function assign_student(id){
	      $.ajax({
	        type: "GET",
	        url: baseUrl+getStudent+id,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          console.log(result);	        
	          $("#name").val(result.name);
	          $("#email").val(result.email);
	          $("#class_id").val(result.class_id);
	          $("#update").attr("onclick","update_student("+id+");");	          
	        }
	      });
	};

	function kick_student(id){		
	      $.ajax({
	        type: "DELETE",
	        url: baseUrl+kickStudent+id,
	        dataType: "json",
	        headers: {"Client-Service" : "frontend-client", "Auth-Key" : "simplerestapi", "Content-Type" : "application/json",
	        "User-ID" : "1", "Authorization" : localStorage.getItem('token')},
	        success: function(result){
	          console.log(result);	        	          	          
	        }
	      });
	   	   window.top.location.reload(false);	      
	};
