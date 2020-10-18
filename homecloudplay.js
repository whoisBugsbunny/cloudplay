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
          var user = firebase.auth().currentUser;

          if (user != null) {

              // var id_name = user.displayName;
              var email_id = user.email;
              var email_verified = user.emailVerified;
              var email_verified_val = "";

              if (email_verified) {
                  email_verified_val = "account is varified";
                  document.getElementById("verification").style.display = "none";
              } else {
                  email_verified_val = "account is not varified";
              }
              // document.getElementById("user_name").innerHTML = "hi there : " + id_name;
              document.getElementById("user_email").innerHTML = email_id;

          }
      } else {
          // No user is signed in.
          window.open("index.html", "_self");
      }
  });


  function verification() {
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
          // Email sent.
          window.alert("verification email is sent");
      }).catch(function(error) {
          // An error happened.
          window.alert("error : " + error.message);
      });
  }

  function logout() {
      firebase.auth().signOut();
  }