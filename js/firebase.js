var config = {
  apiKey: "AIzaSyBe_MZaAi3E_xQojYwK_5T1OW5vMrZbiqc",
  authDomain: "clinica-dental-43ca7.firebaseapp.com",
  databaseURL: "https://clinica-dental-43ca7.firebaseio.com",
  projectId: "clinica-dental-43ca7",
  storageBucket: "clinica-dental-43ca7.appspot.com",
  messagingSenderId: "104946521698"
};
firebase.initializeApp(config);


//registro email//
function registroEmail() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function() {
      verificar();
    })

    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
};


//login email//
function ingresoEmail() {
    var emailLogin = document.getElementById('emailLogin').value;
    var passLogin = document.getElementById('passLogin').value;
    firebase.auth().signInWithEmailAndPassword(emailLogin, passLogin).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

    });
}

//observador//
function watch() {
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in.
    console.log("esta activo");
    aparece(user);
    console.log(user.emailVerified);
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
      // ...
  } else {
      // User is signed out.
      console.log("no existe");
      // ...
    }
});
}
watch();
function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log("saliendo");
  })
  .catch(function(error) {
    console.log(error);
  })
}
//aparece//
function aparece(user) {
  var user = user;
  var content = document.getElementById('perfil');
  if (user.emailVerified) {
    perfil.innerHTML = `
    <h2>hello word</h2>
    `;
  }
}
//emailVerified//
function verificar() {
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("enviando correo de verificacion");
}).catch(function(error) {
  // An error happened.
  console.log(error);
});

}
