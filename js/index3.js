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
    $(document).on('click', '.btn-ver-personaje', function () {
      var personajeId = $(this).data('id');
      $.ajax({
          url: `https://swapi.dev/api/people/${personajeId}`,
          method: "GET",
          success: function (data) {
           // var habilidades = data.abilities;
              $('#personaje-name').text(data.name.toUpperCase());
              $('#altura-personaje').text(`${data.height / 100} m`);
              $('#peso-personaje').text(`${data.mass / 1} kg`);
              $('#genero-personaje').text(data.gender.toUpperCase());
              $('#personajeModal').modal('show');
          }
        })
  });
});
