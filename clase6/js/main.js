function getPokemon(){
  $('#text').hide();
  $('.pkn-image').hide();
  $('.spiner').show();
  //alert(document.getElementById('inputSearch').value);
  $.get('http://pokeapi.co/api/v2/pokemon/' + $('#inputSearch').val(),
    function(result){

      $('#name').html(result.name);
      $('#peso').html(result.weight);
      $('#pkm').attr('src',result.sprites.front_default);

      $('.pkn-image').show();
      $('#text').show();
      $('.spiner').hide();
    }
  ).fail(function(){
    $('#name').html("Tu pishi madre no jala");
    $('#text').show();
    $('.spiner').hide();
  });
}