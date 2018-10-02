var config = {
  apiKey: "AIzaSyBe_MZaAi3E_xQojYwK_5T1OW5vMrZbiqc",
  authDomain: "clinica-dental-43ca7.firebaseapp.com",
  databaseURL: "https://clinica-dental-43ca7.firebaseio.com",
  projectId: "clinica-dental-43ca7",
  storageBucket: "clinica-dental-43ca7.appspot.com",
  messagingSenderId: "104946521698"
};
firebase.initializeApp(config);
var database = firebase.database();
//registro email//
function registroEmail() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function(datosUsuario) {
      console.log(datosUsuario);
    usuario = {
      nombre: datosUsuario.user.displayName,
      email: datosUsuario.user.email,
      uid: datosUsuario.user.uid
    }
    agregarUsuario(usuario);
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
    /*location.href = "perfil.html"*/
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


//GoogleInn//

function googleinn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider).then(function(datosUsuario) {
      console.log(datosUsuario);
    usuario = {
      nombre: datosUsuario.user.displayName,
      email: datosUsuario.user.email,
      uid: datosUsuario.user.uid
    }
    agregarUsuario(usuario);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(error);
});
}


/**************DATABASE********************/

var ref = firebase.database().ref("usuario");
var usuario = {};

function agregarUsuario(usuario) {
  ref.push(usuario)
}

/**datoscompletos**/
var ref = firebase.database().ref("datoscompletos");

function datosCompletos() {
  var datos = {
    name: document.getElementById('name').value,
    pass: document.getElementById('pass').value,
    num: document.getElementById('num').value,
    email: document.getElementById('email').value
  }
  ref.push(datos).then(function(){
    console.log("Subida exitosa");
}).catch(function(){
    console.log("err");
})
}
