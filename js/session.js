function User(email, name, id){
    this.email=email;
    this.name=name;
    this.id=id;
}

$( document ).ready(function() {

	var ttlSession = 60000*90; //90 minutes time of the session

	var loginTime = localStorage.getItem("loginTime");
	if( loginTime != null && (window.location.href).contains("login.html") ){
		if((new Date().getTime()) - loginTime < ttlSession){
			window.location.href = "index.html";
		}
	}

    $( "#login-button" ).click(function() {
    	login(
    		$("#email").val(), 
    		$("#password").val()
    	);
	});
});

function getStringParameter(key, value){
	return "\""+ key +"\":\"" + value + "\"";
}

function login(email, password){
  	$.ajax({
  		url: "http://shr.mybluemix.net/api/users?apikey=icinetic&conditions={"
  			+ getStringParameter("email", email) +"," 
  			+ getStringParameter("password", password) +
  		"}",
  		dataType: 'json',
  		cache: false,
  		type: "GET",
  		success: function( data, textStatus, jqxhr ) {
  			if(data.length == 1){	
   	 			localStorage.setItem("name", data[0].name);
   	 			localStorage.setItem("id", data[0]._id);
   	 			localStorage.setItem("rol", data[0].rol);
   	 			localStorage.setItem("loginTime", new Date().getTime());
   	 			window.location.href = "index.html";
  			}else{
  				alert("Usuario o contraseña incorrectos");
  			}
  		}
	});
}

function logout(){
	localStorage.clear();
	window.location.href = "login.html";
}



