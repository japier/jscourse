function getPokemon(){
  //alert(document.getElementById('inputSearch').value);
  $.get('http://pokeapi.co/api/v2/pokemon/'+ $('#inputSearch').val(),
    function(result){
      $('.text').html(result.name);
      $('#pkm').attr('src',result.sprites.front_default);
      $('.pkn-image').show();
    }
  );
}