var teams = [[],[]];
var teamSize = 6;
var numTeams = 2;
var pokemonToEdit = 0;
var teamToEdit = 0;
var tmpPokemon = {};

function initTeams() {
  for (var i = 0; i < teamSize; i++ ) {
    //console.log(i);
    $('.team1').append(renderEmptyPokemon(i, 0));
    $('.team2').append(renderEmptyPokemon(i, 1));
    teams[0].push({});
    teams[1].push({});
  };
}

function getPokemon(){
  $('#text').hide();
  $('.pkn-image').hide();
  $('.spiner').show();
  //alert(document.getElementById('inputSearch').value);
  $.get('http://pokeapi.co/api/v2/pokemon/' + $('#inputSearch').val(),
    function(result){
      tmpPokemon = result;
      $('#pkm').attr('src', result.sprites.front_default);

      $('.pkn-image').show();
      $('#text').show();
      $('.spiner').hide();
    }
  ).fail(function(err){
    $('#name').html("Tu pishi madre no jala");
    $('#text').show();
    $('.spiner').hide();
  });
}

function getNewPokemon() {
  return `
    <div class="result">
      <div class="text" id="text">
        <span id="name"></span>
      </div>

      <div class="spiner">
      </div>

      <div class="pkn-image">
        <img src="" id="pkm">
      </div>
    </div>
    `;
}
function renderPokemons() {
  for (var j = 0; j < numTeams; j++) {
    $(`.team${j+1}`).html('');
    for (var i = 0; i < teams[j].length; i++) {
      if (teams[j][i].name) {
        $(`.team${j+1}`).append(renderPokemon(teams[j][i], i, j));
      } else {
        $(`.team${j+1}`).append(renderEmptyPokemon(i, j));
      }
    }
  }
}
function openModal(pokemonIndex, teamIndex) {
  console.log("voy a editar el pokemon" + pokemonIndex + "equipo" + teamIndex);
  pokemonToEdit = pokemonIndex;
  teamToEdit = teamIndex;
  $('.modal').modal();
  $('.modal-body').append(getNewPokemon());
}

function elegirPokemon() {
  $('.modal').modal('toggle');
  teams[teamToEdit][pokemonToEdit] = tmpPokemon;
  console.log(teams);
  renderPokemons();
}
function renderPokemon(pokemon, pokemonIndex, teamIndex) {
  return `
    <div class="empty-pokemon" onclick="openModal(${pokemonIndex}, ${teamIndex})">
     <img class="pokemon-image" src="${pokemon.sprites.front_default}">
    </div>
  `
  ;
}
function renderEmptyPokemon(pokemonIndex, teamIndex) {
  return `<div class="empty-pokemon" onclick="openModal(${pokemonIndex}, ${teamIndex})"></div>`;
}