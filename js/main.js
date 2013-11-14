$(document).ready(function(){
	/*var userId = localStorage.getItem("email");
	if (userId==null || userId==0) {
		jQT.goTo("#page2"); 
	}*/
	
	$('#btn').click(function(){
		$('#loading').show();
		var form = $("#loginForm");    
		//disable the button so we can't resubmit while we wait
		//$("#btn",form).attr("disabled","disabled");
		//$("#loginForm #btn").hide();
		var e = $("#email").val();
		var p = $("#password").val();
		//console.log("click");
		if(e != "" && p != "") {
			//var str = form.serialize();
			//alert(str);
			$.ajax({ 
				 type: 'POST', 
				 url: 'http://pixelmarketing.biz/clientservertest/UserLogin.php', 
				 crossDomain: true,
				 data:  {email: e, password :p},
				 dataType: 'json', 
				 async: false,
				
				 success: function (response){ 
					$('#loading').hide();
					//alert ("response"); 
					if (response.success) { 
						alert("you're logged in");
						//window.localStorage["email"] = e;
						//window.localStorage["password"] = p;        
						$("#loginPage").hide();
						$("#page2").show();
					} 
					else {
				
						alert("Your login failed");
						//window.location("main.html");
					}

			 },
						 error: function(error){
							 //alert(response.success);
							alert('Could not connect to the database' + error);
							//window.location = "main.html";
						}
			}); 
	}
	else {
		//if the email and password is empty
		alert("You must enter email and password");
	
	}
	return false;
	});
});