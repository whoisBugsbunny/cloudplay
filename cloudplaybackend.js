  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCS0CYWsDyXSRuQ4Hh7036lF2fd46Y19ts",
      authDomain: "cloudplay-68eb9.firebaseapp.com",
      databaseURL: "https://cloudplay-68eb9.firebaseio.com",
      projectId: "cloudplay-68eb9",
      storageBucket: "cloudplay-68eb9.appspot.com",
      messagingSenderId: "1040568703398",
      appId: "1:1040568703398:web:aa38d3b7653fc4e8ee1767",
      measurementId: "G-WGPE0YLTYE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          // User is signed in.
          window.open("home.html", "_self");
      } else {
          // No user is signed in.
      }
  });

  function login() {
      var userEmail = document.getElementById("email").value;
      var userPass = document.getElementById("password").value;
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(user => {
          // Sign in success
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          window.alert(errorMessage);
      });
  }

  function signup() {
      // var userName = document.getElementById("name").value;
      var userEmail = document.getElementById("email").value;
      var userPass = document.getElementById("password").value;
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          window.alert("error occur : " + errorMessage);
      });
  }