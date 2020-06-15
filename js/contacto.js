window.onload = () => {
    setEvents();
    setTags();
}

//#region

setEvents = function () {
    document.getElementById('send').addEventListener('click', () => {
        document.getElementById('form').onsubmit = () => { return validateForm(); }
    })

    document.getElementById('consult').addEventListener('keyup', () => {
        setLengthConsult(document.getElementById("consult").value.length)
    })
}

validateForm = function () {
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const telephone = document.getElementById("telephone");
    const regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    const regexTelephone = /^[0-9]{4}\-[0-9]{4}$/
    const message = 'Formato invalido en el campo'
    const message_alert = document.getElementById("message_alert");
    let error = true;

    message_alert.innerHTML = ''

    if (name.value == "") {
        message_alert.innerHTML += `<p>${message} ${name.placeholder.toUpperCase()}</p>`
        error = false
    }

    if (surname.value == "") {
        message_alert.innerHTML += `<p>${message} ${surname.placeholder.toUpperCase()}</p>`
        error = false
    }

    if (!regexEmail.test(email.value)) {
        message_alert.innerHTML += `<p>${message} ${email.placeholder.toUpperCase()}</p>`
        error = false
    }

    if (!regexTelephone.test(telephone.value.toString())) {
        message_alert.innerHTML += `<p>${message} ${telephone.placeholder.toUpperCase()}</p>`
        error = false
    }

    return error

}

setTags = function () {
    setLengthConsult();
}

setLengthConsult = function (characters_used) {
    const consult = document.getElementById("consult")
    const max_length = document.getElementById("max_length")


    if (isNaN(characters_used) || characters_used == null) {
        characters_used = parseInt(consult.getAttribute('maxlength')) - parseInt(0)
    }else{
        characters_used = parseInt(consult.getAttribute('maxlength')) - parseInt(characters_used)
    }
    max_length.innerText = `${characters_used}/${consult.getAttribute('maxlength')}`
}

//#endregion
