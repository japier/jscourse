var muertes = 10; //Numerico
//var muertes = "Hola"; //String
var jugador = {
  name: 'Juan',
  muertes: 0,
  apellido: 'Perez'
}; //Objeto

function loadItems(){
  muertes = muertes + 1;
  document.getElementById("count").innerHTML = muertes;
}
function restar(){
  muertes = muertes - 1;
  document.getElementById("count").innerHTML = muertes;
}

function a(x){
  alert(x);
}
