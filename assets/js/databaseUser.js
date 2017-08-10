var config = {
    apiKey: "AIzaSyB9c-FFxeo0MEDb8U230jBWVcMFo9rUGXQ",
    authDomain: "eydatabase.firebaseapp.com",
    databaseURL: "https://eydatabase.firebaseio.com",
    projectId: "eydatabase",
    storageBucket: "eydatabase.appspot.com",
    messagingSenderId: "584479342890"
};
//Initialize firebase app
firebase.initializeApp(config);

var usuariosDb = {
  usuarios:[]


}
var registroUsuario = document.getElementById("registroNuevoUsuario");
 registroNuevoUsuario.addEventListener("submit",function(event){
   event.preventDefault();
   var nombre = document.getElementById('nombre').value;
   var apellido = document.getElementById("apellidos").value;
   var email = document.getElementById("email").value;
   // var constrasena = document.getElementById("constrasena").value;
   var direccion = document.getElementById("direccion").value;
   var x = document.getElementById("estado").selectedIndex;
   var estado = document.getElementsByTagName("option")[x].value;
 //   usuariosDb.usuarios.push(
 //   {
 //     "nombre": nombre,
 //     "apellido":apellido,
 //     "email":email,
 //     // "constrasena": constrasena,
 //     "direccion": direccion,
 //     "estado": estado
 //   }
 // );
 // enviaDatos(usuariosDb);
 setTimeout(function(){location.href="../views/principal.html" }, 1000);

 })
 var enviaDatos = function (usuarios){
   database.ref("/usuarios").set(usuariosDb)
 }

 var database = firebase.database();

database.ref('/usuarios').on('value',function(snapshot){
	 var usuarios = snapshot.val();
   usuariosDb.usuarios = usuarios;
});
