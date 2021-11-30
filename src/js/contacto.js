const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

let correct = document.getElementById('correct');
let alert = document.getElementById('alert')

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,36}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,14}$/,// 7 a 14 numeros.
    motivo: /^[a-zA-ZÀ-ÿ\s0-9]{4,50}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-ZÀ-ÿ\s0-9]{5,70}$/, // Letras y espacios, pueden llevar acentos.

}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
    republica: false,
    motivo: false,
    mensaje: false,
    campo: false
}

const validarFormulario = function (e) {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {

                document.querySelector('.nombre').classList.add('is-valid');
                document.querySelector('.nombre').classList.remove('is-invalid');
                campos.nombre = true;
            } else {

                document.querySelector('.nombre').classList.add('is-invalid');
                document.querySelector('.nombre').classList.remove('is-valid');
                campos.nombre = false;
            }
            break;
        case "correo":
            if (expresiones.correo.test(e.target.value)) {

                document.querySelector('.correo').classList.add('is-valid');
                document.querySelector('.correo').classList.remove('is-invalid');
                campos.correo = true;
            } else {

                document.querySelector('.correo').classList.add('is-invalid');
                document.querySelector('.correo').classList.remove('is-valid');
                campos.correo = false;
            }
            break;
        case "telefono":
            if (expresiones.telefono.test(e.target.value)) {

                document.querySelector('.telefono').classList.add('is-valid');
                document.querySelector('.telefono').classList.remove('is-invalid');
                campos.telefono = true;
            }else {

                document.querySelector('.telefono').classList.add('is-invalid');
                document.querySelector('.telefono').classList.remove('is-valid');
                campos.telefono = false;
            }
            break;
        case "motivo":
            if (expresiones.motivo.test(e.target.value)) {

                document.querySelector('.motivo').classList.add('is-valid');
                document.querySelector('.motivo').classList.remove('is-invalid');
                campos.motivo = true;
            } else {

                document.querySelector('.motivo').classList.add('is-invalid');
                document.querySelector('.motivo').classList.remove('is-valid');
                campos.motivo = false;
            }
            break;
        case "republica":
            if (e.target.value) {

                document.querySelector('.motivo').classList.add('is-valid');
                document.querySelector('.motivo').classList.remove('is-invalid');
                campos.republica = true;
            } else {

                document.querySelector('.motivo').classList.add('is-invalid');
                document.querySelector('.motivo').classList.remove('is-valid');
                campos.republica = false;
            }
            break;
        case "mensaje":
            if (expresiones.mensaje.test(e.target.value)) {

                document.querySelector('.mensaje').classList.add('is-valid');
                document.querySelector('.mensaje').classList.remove('is-invalid');
                campos.mensaje = true;
            } else {

                document.querySelector('.mensaje').classList.add('is-invalid');
                document.querySelector('.mensaje').classList.remove('is-valid');
                campos.mensaje = false;
            }
            break;
    }

}

inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})//inputs


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    alert.innerHTML =""
    const terminos = document.querySelector('.terminos');
    if (campos.nombre && campos.correo && campos.telefono && campos.motivo && campos.mensaje && terminos.checked) {
        formulario.reset();
        
        correct.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        
        <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          Tu mensaje ha sido enviado.
        </div>
      </div>`
      document.querySelector('.alert').remove('.alert')

      document.querySelector('.nombre').classList.remove('is-valid');
      document.querySelector('.correo').classList.remove('is-valid');
      document.querySelector('.telefono').classList.remove('is-valid');
      document.querySelector('.motivo').classList.remove('is-valid');
      document.querySelector('.mensaje').classList.remove('is-valid');

    } else {
        correct.innerHTML = ""
        alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        
        <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
            Debes llenar todos los campos.
        </div>
      </div>`
        console.log('llena estos cambios')
    }
})//listennerFormulario

     






