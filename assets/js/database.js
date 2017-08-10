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

var recompensasDb = {
  recompensas:[]


}
var x = document.getElementById("myFile");
 x.disabled = false;

var enviaFormularioRecompensa  = document.getElementById("formulario_recompensas");

 enviaFormularioRecompensa.addEventListener("submit",function(event){
   event.preventDefault();
   var categoriaRecompensa = document.getElementById("categoriaRecompensa").value;
   var recompensa = document.getElementById("recompensa").value;
   var descripcionRecompensa = document.getElementById("descripcionRecompensa").value;
   var valorPuntos = document.getElementById("valorPuntos").value;
   var reembolsable = document.getElementById("reembolsable").value;

   var archivo = document.getElementById("myFile").value;
   console.log(archivo);
   recompensasDb.recompensas.push(
     {
       "categoriaRecompensa": categoriaRecompensa,
       "recompensa":recompensa,
       "descripcionRecompensa": descripcionRecompensa,
       "valorPuntos":valorPuntos,
       "reembolsable":reembolsable,
       "archivo": archivo
     }
   );
   enviaDatos(recompensasDb);
 })

var enviaDatos = function (recompensas){
  database.ref("/recompensas").set(recompensasDb)
}

var database = firebase.database();


database.ref('/recompensas').on('value',function(snapshot){
	var recompensasDb = snapshot.val();
  recompensasDb.recompensas = recompensas;

});
