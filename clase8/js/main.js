var muertes = 10; //Numerico
//var muertes = "Hola"; //String
var jugador = {
  name: 'Juan',
  deaths: 0,
  guns: ["Pistolin!", "Postolon!"],
  last: 'Perez'
}; //Objeto

var guns = []; //arreglo

function loadItems(){
  jugador.deaths = jugador.deaths + 1;
  document.getElementById("count").innerHTML = jugador.deaths;
}
function restar(){
  jugador.deaths = jugador.deaths - 1;
  document.getElementById("count").innerHTML = jugador.deaths;
}

function changeName(){
  jugador.name = $('#name').val();
  printPlayerData();
}

function printPlayerData(){
  alert(jugador.name + " " + jugador.last + "\n"
   + "muertes:" + jugador.deaths +"\n"+"Armas:"+ jugador.guns);
}

function addGun() {
  jugador.guns.push($('#gun').val());
}

