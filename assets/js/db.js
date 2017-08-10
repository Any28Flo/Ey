// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9c-FFxeo0MEDb8U230jBWVcMFo9rUGXQ",
    authDomain: "eydatabase.firebaseapp.com",
    databaseURL: "https://eydatabase.firebaseio.com",
    projectId: "eydatabase",
    storageBucket: "eydatabase.appspot.com",
    messagingSenderId: "584479342890"
};
// Initialize your Firebase app
firebase.initializeApp(config);


var usuariosDb = {
  usuarios:[],
  recompensas: []


}


var recompensas = firebase.database().ref("recompensas");
var usuarios     = firebase.database().ref("usuarios");

var insertaUsuario = function(e){
  e.preventDefault();
  alert("hola mundo");

  var nombre = $("#nombre").val();
  var apellido = $("#apellidos").val();
  var email = $("#email").val();
  var constrasena = $("#contrasena").val();
  var direccion = $("#direccion").val();
  // var x = document.getElementById("estado").selectedIndex;
  // var estado = document.getElementsByTagName("option")[x].value;
  usuarios.set({
    "nombre": nombre,
    "apellido":apellido,
    "email":email,
    "constrasena": constrasena,
    "direccion": direccion
    // "estado": estado
  });
  setTimeout(function(){location.href="../views/principal.html" }, 1000);

};


var enviaRecompensa = function (e) {
  e.preventDefault();
  var categoriaRecompensa = $("#categoriaRecompensa").val();
  var recompensa = $("#recompensa").val();
  var descripcionRecompensa = $("#descripcionRecompensa").val();
  var valorPuntos =$("#valorPuntos").val();
  var reembolsable = $("#reembolsable").val();

  recompensas.push({
    "categoriaRecompensa": categoriaRecompensa,
    "recompensa": recompensa,
    " descripcionRecompensa":  descripcionRecompensa,
    "valorPuntos" :valorPuntos,
    "reembolsable" : reembolsable
  });
};

$(window).load(function () {
  $("#formulario_recompensas").submit(enviaRecompensa);
  $("#registroNuevoUsuario").submit(insertaUsuario);

});
