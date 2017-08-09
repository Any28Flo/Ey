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


 var enviaFormularioRecompensa  = document.getElementById("formulario_recompensas");

 enviaFormularioRecompensa.addEventListener("submit",function(event){
   event.preventDefault();
   var categoriaRecompensa = document.getElementById("categoriaRecompensa").value;
   var recompensa = document.getElementById("recompensa").value;
   var descripcionRecompensa = document.getElementById("descripcionRecompensa").value;
   var valorPuntos = document.getElementById("valorPuntos").value;
   recompensasDb.recompensas.push(
     {
       "categoriaRecompensa": categoriaRecompensa,
       "recompensa":recompensa,
       "descripcionRecompensa": descripcionRecompensa,
       "valorPuntos":valorPuntos
     }
   );
   enviaDatos(recompensasDb);
 })

var enviaDatos = function (recompensasDb){
  database.ref("/").set(recompensasDb)
}

var database = firebase.database();


database.ref('/recompensas').on('value',function(snapshot){
	var recompensasDb = snapshot.val();
  recompensasDb.recompensas = recompensas;

});
