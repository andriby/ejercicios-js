let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let password = document.getElementById('password');
let verPassword = document.getElementById('verPassword');

const regexText = /^[A-Za-z]+$/
const regexMail = /^(\w|\.){1,}@\w+\.\w+(\.\w+)?$/
const regexPhone = /^\d{10,11}$/
const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!.*_-])(?=.*\d)[A-Za-z\d!.*_-]{8,}$/;

function validarCampo(value, regex, field, errorMessage) {
    if (!regex.test(value) && value !== '') {
        field.focus();
        return errorMessage
    }
    return ''
}

function validarPassword() {
    errorMensaje = validarCampo(nombre.value, regexText, nombre, 'El nombre solo debe contener letras');
    errorMensaje += validarCampo(apellido.value, regexText, apellido, 'El apellido solo debe contener letras');
    errorMensaje += validarCampo(email.value, regexMail, email, 'Ingrese un correo electrónico válido');
    errorMensaje += validarCampo(telefono.value, regexPhone, telefono, 'Ingrese un número telefónico válido');
    errorMensaje += validarCampo(password.value, regexPassword, password, 'Ingrese una contraña valida')

    if (password.value !== verPassword.value ) {
        errorMensaje += 'Las contraseñas no coinciden.';
    }

    if (errorMensaje !== '') {
        return (errorMensaje);
    }

    if (nombre.value == '' || apellido.value == '' || email.value == '' || telefono.value == '' || password.value == '' || verPassword.value == '') {
        return 'Debe rellenar todos los campos'
    }
}

function validar() {
    let errorMensaje = validarPassword()
    if (errorMensaje) {
        alert(errorMensaje)
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
        })
        errorMensaje = ''
    }
}

function limpiar(){
    nombre.value = ''
    apellido.value = ''
    email.value = ''
    telefono.value = ''
    password.value = ''
    verPassword.value = ''
}