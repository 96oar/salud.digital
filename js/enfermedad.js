window.onload = () => {
    setEvent();
}

setEvent = function () {
    var formSubmit = document.getElementById("formSubmit");
    var optionsAddresCity = document.getElementsByName("difficulty_breathing");
    var optionsTravel = document.getElementsByName("travel");

    document.getElementById("send").addEventListener("click", () => {
        formSubmit.onsubmit = () => {
            
            if(validate()){
                sumSymptoms();
                setTimeout(() => {
                   return validate();
                }, 900);
            }else{
                document.getElementById("message_alert").style.backgroundColor= "#5e0000";
                return validate();
            }
            
            
            
           
            
        }
    }
    );
    
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
            field_travel_country_div.style.display = "block";
            //document.getElementById("countries_visited").disabled= false;

        } else if (options[i].checked && options[i].value == "no") {
            field_travel_country_div.style.display = "none";
            //document.getElementById("countries_visited").disabled= true;
        }
    }
}

showHideAddresCity = function () {
    var field_addres_city_div = document.getElementById("field_addres_city_div")
    var options = document.getElementsByName("difficulty_breathing")

    for (i in options) {
        if (options[i].checked && options[i].value == "si") {
            field_addres_city_div.style.display = "grid";
            // document.getElementById("address").disabled= false;
            // document.getElementById("city").disabled= false;

        } else if (options[i].checked && options[i].value == "no") {
            field_addres_city_div.style.display = "none";
            // document.getElementById("address").disabled= true;
            // document.getElementById("city").disabled= true;
        }
    }
}



validate = function () {
    let validate = true;
    const name_surname = document.getElementById("name_surname");
    const dni = document.getElementById("dni");
    const phone = document.getElementById("phone");
    const message_alert = document.getElementById("message_alert")
    const message = 'Formato invalido en el campo'
    const regexPhone = /^[0-9]{4}\-[0-9]{4}$/
    message_alert.innerHTML = ''

    if (name_surname.value == "") {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${name_surname.placeholder.toUpperCase()}</p>`;
    }
    if (dni.value == "") {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${dni.placeholder.toUpperCase()}</p>`;
    }
    if (phone.value == "") {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${phone.placeholder.toUpperCase()}</p>`;
    } else if (!regexPhone.test(phone.value)) {
        validate = false;
        message_alert.innerHTML += `<p>${messageRegex} ${phone.placeholder.toUpperCase()}</p>`;
    }


    if (!validateRadioButtons("fever")) {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${" Fiebre"}</p>`;
    }
    if (!validateRadioButtons("headache")) {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${" Dolor de cabeza"}</p>`;
    }
    if (!validateRadioButtons("cough")) {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${" Tos"}</p>`;
    }
    if (!validateRadioButtons("sore_throat")) {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${" Dolor de garganta"}</p>`;
    }
    if (!validateRadioButtons("difficulty_breathing")) {
        validate = false;
        message_alert.innerHTML += `<p>${message} ${" Dificultad para respirar"()}</p>`;
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
    

    return validate

}

    function sumSymptoms() {
        var symptoms = ["fever", "headache","cough","sore_throat","difficulty_breathing"];
        let numberOfSymptoms = 0
 
        for (i in symptoms) {
           var option = document.getElementsByName(symptoms[i])
           for(x in option)
            if (option[x].checked && option[x].value=="si") {
                numberOfSymptoms += 1
            }
        }
        if(numberOfSymptoms == 0 && validate()){
            document.getElementById("message_alert").style.backgroundColor= "#035e00";

        } else if (numberOfSymptoms !=0 && validate()){
            document.getElementById("message_alert").style.backgroundColor= "#5e0000";
        }else if (numberOfSymptoms == 0 && !validate()){
            document.getElementById("message_alert")
        }
        const messageOk = `<p>El formulario fue completado correctamente. ${numberOfSymptoms} síntomas de COVID-19 fueron registrados</p>`
        document.getElementById("message_alert").innerHTML = messageOk
        //alert(document.getElementById("message_alert").innerHTML = messageOk);
    }

    
    
   
    