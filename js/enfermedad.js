window.onload = () => {
    setEvent();
}
setEvent = function () {
    var formSubmit = document.getElementById("formSubmit");
    var optionsAddresCity = document.getElementsByName("difficulty_breathing");
    var optionsTravel = document.getElementsByName("travel");

    document.getElementById("send").addEventListener("click", () => {
        formSubmit.onsubmit = () => {
            return validate();
        }
    });
    optionsAddresCity[0].addEventListener("click", showHideAddresCity)
    optionsAddresCity[1].addEventListener("click", showHideAddresCity)
    optionsTravel[0].addEventListener("click", showHideTravel)
    optionsTravel[1].addEventListener("click", showHideTravel)

    //No funciona con los dos for, solo con uno
    /*for(a in optionsAddresCity) {
        optionsAddresCity[a].addEventListener("click", showHideAddresCity)
    
    };

    for(x in optionsTravel) {
        optionsTravel[x].addEventListener("click", showHideTravel)
    };*/

}


showHideTravel = function () {
    var field_travel_country_div = document.getElementById("field_travel_country_div")
    var options = document.getElementsByName("travel")

    for (i in options) {
        if (options[i].checked && options[i].value == "si") {
            //field_travel_country_div.style.display = "block";
            document.getElementById("countries_visited").disabled= false;

        } else if (options[i].checked && options[i].value == "no") {
            //field_travel_country_div.style.display = "none";
            document.getElementById("countries_visited").disabled= true;
        }
    }
}

showHideAddresCity = function () {
    var field_addres_city_div = document.getElementById("field_addres_city_div")
    var options = document.getElementsByName("difficulty_breathing")

    for (i in options) {
        if (options[i].checked && options[i].value == "si") {
            //field_addres_city_div.style.display = "grid";
            document.getElementById("address").disabled= false;
            document.getElementById("city").disabled= false;

        } else if (options[i].checked && options[i].value == "no") {
            //field_addres_city_div.style.display = "none";
            document.getElementById("address").disabled= true;
            document.getElementById("city").disabled= true;
        }
    }
}


validate = function () {
    var error = false;
    var message = "";
    var name_surname = document.getElementById("name_surname").value;
    var dni = document.getElementById("dni").value;
    var phone = document.getElementById("phone").value;
    const regexPhone = /^[0-9]{4}\-[0-9]{4}$/
    if (name_surname == "") {
        error = true;
        message += "<p>El campo nombre y apellido no puede estar vacio</p>";
    }
    if (dni == "") {
        error = true;
        message += "<p>El campo dni no puede estar vacio</p>";
    }
    if (phone == "") {
        error = true;
        message += "<p>El campo telefono no puede estar vacio</p>";
    } else if (!regexPhone.test(phone)) {
        error = true;
        message += "<p>Numero telefonico con formato invalido</p>"
    }
    if (!validateRadioButtons("fever")) {
        error = true;
        message += "<p>Numero telefonico con formato invalido</p>"
    }
    if (!validateRadioButtons("headache")) {
        error = true;
        message += "<p>Numero telefonico con formato invalido</p>"
    }
    if (!validateRadioButtons("cough")) {
        error = true;
        message += "<p>Numero telefonico con formato invalido</p>"
    }
    if (!validateRadioButtons("sore_throat")) {
        error = true;
        message += "<p>Numero telefonico con formato invalido</p>"
    }
    if (!validateRadioButtons("difficulty_breathing")) {
        error = true;
        message += "<p>Numero telefonico con formato invalido</p>"
    }


    function validateRadioButtons(nameRadio) {
        var select = false;
        var option = document.getElementsByName(nameRadio)
        for (i in option) {
            if (option[i].checked) {
                select = true;
            }
        }
        return select;
    }



    if (error) {
        document.getElementById("message").innerHTML = message;
        return false
    } else {
        return true
    }

}