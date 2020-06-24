$(document).ready(() => {
  $(".hospitals").select2({
    width: "resolve",
    placeholder: "Seleccione un Hospital...",
  });

  $(".hospitals").change(() => {
    let hospital = $(".hospitals").val();

    let location = "";
    let direction = "";

    switch (hospital) {
      case "buenPastor":
        direction = "Av. Gral. Enrique Mosconi 1716";
        location = "Lomas del Mirador, Provincia de Buenos Aires";
        break;
      case "moron":
        direction = "Dr. Rodolfo Monte 848";
        location = "Moron, Provincia de Buenos Aires";
        break;
      case "belgrano":
        direction = "Av. de los Constituyentes 3120";
        location = "San Andres, Provincia de Buenos Aires";
        break;

      default:
        break;
    }
    if (direction != "" && location != "") {
      alertify
        .alert(
            `<p><strong>Direccion:</strong> ${direction}</p>
            <p><strong>Localidad:</strong> ${location}</p>`
        )
        .set({
          title: "Informacion sobre el hospital",
          transition: "fade",
          movable: false,
        });
    }
  });
});
