// javascript login
function login() {
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		if (email == "admin" && password == "admin") {
			alert("Login success");
			document.location.href="admin.html"
		}
		else if(email == "" && password == ""){
			alert("Please, fill the form first!");
		}
		else
		{
			alert("The email and password you entered did not match our records. Please double-check and try again. ");
		}
	}
// javascript registrasi
function registrasi() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	if (first_name == ""|| last_name == ""||email == ""|| password == "") 
	{
		alert("Please, fill the form first!")
	}
	else
	{
		alert("Registration success");
		sessionStorage.setItem("first_name", first_name);
		sessionStorage.setItem("last_name", last_name);			sessionStorage.setItem("email", email);
		sessionStorage.setItem("password", password);
		window.open('sukses_registrasi.html')
	}
}

// javascript login
document.getElementById('sukses-email').innerHTML = sessionStorage.getItem("email");
document.getElementById('sukses-password').innerHTML = sessionStorage.getItem("password");


