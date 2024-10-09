$(document).ready(function () {
    getPersonajeListV2();

    function capitalize(text) {
        const primeraLetra = text.charAt(0);
        const resto = text.slice(1);
        return primeraLetra.toUpperCase() + resto.toLowerCase();
      }

    function getPersonajeListV2() {
    $('#listaPersonaje');
        $.ajax({
            url: "https://swapi.dev/api/people",
            method: "GET",
        }).done(function (respuesta) {            
            var listadoPersonajes = respuesta.results;
            listadoPersonajes.forEach(function (personaje) {
                var personajeId = personaje.url.split("/")[5];
                var template = `
                    <div class="card m-2 fondo text-light" style="width: 18rem;" id="${personajeId}">
                        <div class="card-body">
                            <button type="button" class="btn-ver-personaje btn btn-dark text-warning" data-id="${personajeId}" data-bs-toggle="modal" data-bs-target="#personajeModal${personajeId}">
                                Ver Personaje
                            </button>
                            <h3 class="mt-4">${capitalize(personaje.name)}</h3>
                            <h4>#${personajeId}</h4>
                        </div>
                    </div>`;
                $('#listaPersonaje').append(template);
            });
        });
    }
    /*
    $(document).on('click', '.btn-ver-pokemon', function () {
      var pokemonId = $(this).data('id');
      $.ajax({
          url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
          method: "GET",
          success: function (data) {
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
                method: "GET",
                success: function (data) {
                    var descripcionEs = data.flavor_text_entries.find(entry => entry.language.name === 'es');
                    $('#descripcion-pokemon').text(descripcionEs ? descripcionEs.flavor_text : 'Descripción no disponible');
                }
            });
           // var habilidades = data.abilities;
            var habilidadesVisibles = data.abilities
            .filter(ability => !ability.is_hidden)
            .map(ability => capitalize(ability.ability.name))
            var habilidadesOcultas = data.abilities
            .filter(ability => ability.is_hidden) 
            .map(ability => capitalize(ability.ability.name))
              $('#pokemon-name').text(data.name.toUpperCase());
              $('#pokemon-image').attr('src',data.sprites.other['official-artwork'].front_default);
               $('#habilidad-pokemon').text(habilidadesVisibles.join(', '));
              $('#pokemon-habilidad-oculta').text(habilidadesOcultas.join(`, `));
              $('#altura-pokemon').text(`${data.height / 10} m`);
              $('#peso-pokemon').text(`${data.weight / 10} kg`);
              $('#tipo-pokemon-1').attr('src', data.types[0] ? data.types[0].type?.['generation-viii']?.['sword-shield'].name_icon() : '')
              if(data.types[1]){
                $('#tipo-pokemon-2').attr('src', data.types[1] ? data.types[1].type.sprites?.['generation-viii']?.['sword-shield'].name_icon() : '')
                $('#tipo-pokemon-2').show(); 
              } else{
                $('#tipo-pokemon-2').hide();
              }; 
              $('#pokemonModal').modal('show');
          }
        })
  });
  */
});
