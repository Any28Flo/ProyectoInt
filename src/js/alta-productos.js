const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const select = document.querySelectorAll('.form-select');



const expresiones = {
    id: /^\d{2,14}$/,// 7 a 14 numeros.
    tipo: /^[a-zA-ZÀ-ÿ\s]{4,15}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
    precio: /^\d{2,14}$/,// 2 a 14 numeros.
    descripcion: /^[a-zA-ZÀ-ÿ\s0-9]{5,70}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
    id: false,
    tipo: false,
    talla: false,
    genero: false,
    nombre: false,
    color: false,
    precio: false,
    categoria: false,
    imagen: false,
    descripcion: false,
    campo: false
}

const validarFormulario = function (e) {
    switch (e.target.name) {
        case "id":
            if (expresiones.id.test(e.target.value)) {

                document.querySelector('.id').classList.add('is-valid');
                document.querySelector('.id').classList.remove('is-invalid');
                campos.id = true;
            } else {

                document.querySelector('.id').classList.add('is-invalid');
                document.querySelector('.id').classList.remove('is-valid');
                campos.id = false;
            }
            break;
        case "tipo":
            if (expresiones.tipo.test(e.target.value)) {

                document.querySelector('.tipo').classList.add('is-valid');
                document.querySelector('.tipo').classList.remove('is-invalid');
                campos.tipo = true;
            } else {

                document.querySelector('.tipo').classList.add('is-invalid');
                document.querySelector('.tipo').classList.remove('is-valid');
                campos.tipo = false;
            }
            break;
        case "talla":
            if ((e.target.value != 0)) {
                console.log('bien')
                document.querySelector('.talla').classList.add('is-valid');
                document.querySelector('.talla').classList.remove('is-invalid');
                campos.talla = true;
            } else {
                console.log('mal')
                document.querySelector('.talla').classList.add('is-invalid');
                document.querySelector('.talla').classList.remove('is-valid');
                campos.talla = false;
            }
            break;
        case "genero":
            if ((e.target.value != 0)) {

                document.querySelector('.genero').classList.add('is-valid');
                document.querySelector('.genero').classList.remove('is-invalid');
                campos.genero = true;
            } else {

                document.querySelector('.genero').classList.add('is-invalid');
                document.querySelector('.genero').classList.remove('is-valid');
                campos.genero = false;
            }
            break;
        case "categoria":
            if ((e.target.value != 0)) {

                document.querySelector('.categoria').classList.add('is-valid');
                document.querySelector('.categoria').classList.remove('is-invalid');
                campos.categoria = true;
            } else {

                document.querySelector('.categoria').classList.add('is-invalid');
                document.querySelector('.categoria').classList.remove('is-valid');
                campos.categoria = false;
            }
            break;
        case "color":
            if ((e.target.value != 0)) {

                document.querySelector('.color').classList.add('is-valid');
                document.querySelector('.color').classList.remove('is-invalid');
                campos.color = true;
            } else {

                document.querySelector('.color').classList.add('is-invalid');
                document.querySelector('.color').classList.remove('is-valid');
                campos.color = false;
            }
            break;
        case "precio":
            if (expresiones.precio.test(e.target.value)) {

                document.querySelector('.precio').classList.add('is-valid');
                document.querySelector('.precio').classList.remove('is-invalid');
                campos.precio = true;
            } else {

                document.querySelector('.precio').classList.add('is-invalid');
                document.querySelector('.precio').classList.remove('is-valid');
                campos.precio = false;
            }
            break;
        case "imagen":
            if ((e.target.value != 0)) {

                document.querySelector('.imagen').classList.add('is-valid');
                document.querySelector('.imagen').classList.remove('is-invalid');
                campos.imagen = true;
            } else {

                document.querySelector('.imagen').classList.add('is-invalid');
                document.querySelector('.imagen').classList.remove('is-valid');
                campos.imagen = false;
            }
            break;
        case "descripcion":
            if (expresiones.descripcion.test(e.target.value)) {

                document.querySelector('.descripcion').classList.add('is-valid');
                document.querySelector('.descripcion').classList.remove('is-invalid');
                campos.descripcion = true;
            } else {

                document.querySelector('.descripcion').classList.add('is-invalid');
                document.querySelector('.descripcion').classList.remove('is-valid');
                campos.descripcion = false;
            }
            break;
    }

}

inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})//inputs

select.forEach(function(input){
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', function (e) {
    e.preventDefault();


    if (campos.id && campos.tipo && campos.categoria && campos.talla && campos.genero && campos.precio  && campos.descripcion && campos.color && campos.imagen) {
        formulario.reset();
        document.querySelector('.color').classList.remove('is-valid');
        document.querySelector('.categoria').classList.remove('is-valid');
        document.querySelector('.genero').classList.remove('is-valid');
        document.querySelector('.talla').classList.remove('is-valid');
        document.querySelector('.tipo').classList.remove('is-valid');
        document.querySelector('.id').classList.remove('is-valid');
        document.querySelector('.precio').classList.remove('is-valid');
        document.querySelector('.imagen').classList.remove('is-valid');
        document.querySelector('.descripcion').classList.remove('is-valid');
        let correct = document.querySelector('.correct');
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
          Guardado.
        </div>
      </div>`

        console.log('tu formulario ha sido enviado');
    } else {
        document.querySelector('.color').classList.add('is-invalid');
        document.querySelector('.categoria').classList.add('is-invalid');
        document.querySelector('.genero').classList.add('is-invalid');
        document.querySelector('.talla').classList.add('is-invalid');
        document.querySelector('.tipo').classList.add('is-invalid');
        document.querySelector('.id').classList.add('is-invalid');
        document.querySelector('.precio').classList.add('is-invalid');
        document.querySelector('.imagen').classList.add('is-invalid');
        document.querySelector('.descripcion').classList.add('is-invalid');

        let alert = document.querySelector('.alert')
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
    }
})//listennerFormulario