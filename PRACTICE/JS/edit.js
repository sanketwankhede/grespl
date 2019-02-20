var hasContentEditableSupport = function(){ 
	 return(document.getElementById("edit_profile_link").contentEditable != null) 
	};
if(hasContentEditableSupport()){ 
	$("#edit_profile_link").show(); 
	console.log('here');
	var status = $("#status"); 
	$("span[contenteditable]").blur(function(){ 
		var field = $(this).attr("id"); 
		var value = $(this).text();
    
    	var resourceURL = $(this).closest("ul").attr("data-url");
		$.ajax({ 
				url: resourceURL, 
				dataType: "json", 
				method: "PUT", 
				data: field + "=" + value, 
			success: function(data){ 
				status.html("The record was saved."); 
			}, 
			error: function(data){ 
				status.html("The record failed to save."); 
			} 
		}); 
	});
}
function submitData(){

	var name = document.getElementById('name').value
		document.getElementById('edit_profile_link').innerHTML = name;
	var city = document.getElementById('city').value
		document.getElementById('edit_profile_link').innerHTML = city;
	var state = document.getElementById('state').value
		document.getElementById('edit_profile_link').innerHTML = state;
	var postalcode = document.getElementById('postalcode').value
		document.getElementById('edit_profile_link').innerHTML = postalcode;
	var email = document.getElementById('email').value
		document.getElementById('edit_profile_link').innerHTML = email;
	


}
