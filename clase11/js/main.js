var teams = [[],[]];
var teamSize = 6;
var tmpPokemon = {};

function initTeams() {
  for (var i = 0; i < teamSize; i++ ) {
    //console.log(i);
    $('.team1').append(getEmptyPokemon());
    $('.team2').append(getEmptyPokemon());
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
  $('.team1').html('');
  $('.team1').append(renderPokemon(teams[0][0]));
}
function openModal() {
  $('.modal').modal();
  $('.modal-body').append(getNewPokemon());
}

function elegirPokemon() {
  $('.modal').modal('toggle');
  teams[0][0] = tmpPokemon;
  console.log(teams);
  renderPokemons();
}
function renderPokemon(pokemon) {
  return '<div class="pokemon" onclick="openModal()">' + pokemon.name + '</div>';
}
function getEmptyPokemon() {
  return '<div class="empty-pokemon" onclick="openModal()"></div>';
}