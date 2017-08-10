  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyB9c-FFxeo0MEDb8U230jBWVcMFo9rUGXQ",
      authDomain: "eydatabase.firebaseapp.com",
      databaseURL: "https://eydatabase.firebaseio.com",
      projectId: "eydatabase",
      storageBucket: "eydatabase.appspot.com",
      messagingSenderId: "584479342890"
  };
  firebase.initializeApp(config);

  var loggearConFacebook = function () {

  	var provider = new firebase.auth.FacebookAuthProvider();
  	getDataUser(provider)
  }
  var loggearConGoogle = function () {
  	var provider = new firebase.auth.GoogleAuthProvider();
  	getDataUser(provider)

  }

  var getDataUser = function (provider) {
  	firebase.auth().signInWithPopup(provider).then(function (result) {
  		// This gives you a Facebook Access Token. You can use it to access the Facebook API.
  		var token = result.credential.accessToken;
  		// The signed-in user info.
  		var user = result.user;
  		console.log(user.displayName)


  	}).catch(function (error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// The email of the user's account used.
  		var email = error.email;
  		// The firebase.auth.AuthCredential type that was used.
  		var credential = error.credential;
  		// ...
  		console.log("error", errorMessage)
  	});
  }
  document.getElementById("logF").addEventListener("click", loggearConFacebook)
  document.getElementById("logG").addEventListener("click", loggearConGoogle)
