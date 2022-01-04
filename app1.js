const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});




function login() {

	firebase.auth() .onAuthStateChanged(function(user){
	if (user){
		//user is signed in.
		
		document.getElementById("user_div").style.display = "initial";
		document.getElementById("main-div").style.display = "none";


		var user = firebase.auth().currentUser;

		if (user != null){
			var email_id = user.email;
			document.getElementById("user_para").innerHTML = "Welcome User : " +email_id
		}

	}
	else{
		//No user is signed in.

		document.getElementById("user_div").style.display = "none";
		document.getElementById("login_div").style.display = "initial";
	}
});

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	var userName = document.getElementById("user_field").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		//handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		window.alert("Error : " + errorMessage);
		//...
});

}
