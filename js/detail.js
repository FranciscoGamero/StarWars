$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("pid")); //
  var starWarsId = urlParams.get("pid");

  if (starWarsId == null) {
    alert("No se ha recibido el ID de pokemon");
  }
});
