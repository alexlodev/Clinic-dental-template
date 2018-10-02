var ref = firebase.database().ref("usario");


function agregarUsuario(usuario) {
  ref.push(usuario)
}
