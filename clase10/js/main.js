var teams = [];
var teamSize = 6;

function initTeams() {
  for (var i = 0; i < teamSize; i++ ) {
    //console.log(i);
    $('.team1').append(getEmptyPokemon());
    $('.team2').append(getEmptyPokemon());
  };
}
function openModal() {
  $('.modal').modal();
}
function getEmptyPokemon() {
  return '<div class="empty-pokemon" onclick="openModal()"></div>';
}