const form1 = document.getElementById('form_nc');
const nameLength = 25;
const emailLength = 16;
const phoneLength = 10;
const pass0Length = 16;
// constants for each field

let onlyN = new Boolean(false);
let phoneCont = 0;
let onlyLetters = new Boolean(false);
let nameCont = 0;
//traemos el form 

    
 // function tel 

form1.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target.value);
   //window.location.href="./../pages/login.html"
    //hay que prevenir el evento por default 
    if(e.target.name=='nuevac'){
    let fieldName = document.getElementById("name").value;
    let fieldEmail = document.getElementById("email").value;
    let fieldPhone = document.getElementById("phone").value;
    let fieldPass0 = document.getElementById("pass0").value;
    let fieldPass1 = document.getElementById("pass1").value;
    phoneCont = 0;
    onlyN = false;
    nameCont = 0;
    onlyLetters = false;

    for (let i = 0; i <= fieldPhone.length; i++){
        if ((fieldPhone.charAt(i) >= '0') && (fieldPhone.charAt(i) <= '9')){
            phoneCont += 1;
        }
    }
    if (fieldPhone.length === phoneCont){
        onlyN = true;
    } else{
        onlyN = false;
    } // ===================== esto solo acepta números

    for (let i = 0; i <= fieldName.length; i++){
        if (((fieldName.charAt(i) >= 'A') && (fieldName.charAt(i) <= 'Z')) || ((fieldName.charAt(i) >= 'a') && (fieldName.charAt(i) <= 'z')) || (fieldName.charAt(i) === ' ')){
                nameCont += 1;                            
        }
    }
    if (fieldName.length === nameCont){
        onlyLetters = true;
    } else{
        onlyLetters = false;
    } // ===================== esto solo acepta letras

    if((fieldName.length >= 10) && (onlyLetters == true)){
        console.log(`Nombre válido: ${fieldName}`);

    } else{
        console.log(`Nombre invalido: ${fieldName}`);

    } // ====================== validación nombre

    if((fieldEmail.length > 8) && (fieldEmail.indexOf('@') >= 0) && ((fieldEmail.indexOf(".com") >= 0) || (fieldEmail.indexOf(".edu") >= 0))){
        console.log(`Correo válido: ${fieldEmail}`);

    } else{
        console.log(`Correo invalido: ${fieldEmail}`); 

    } // ====================== validación email

    if((fieldPhone.length == 10) && (onlyN == true)){
        console.log(`Teléfono válido: ${fieldPhone}`);
    //    //agrega la clase invalida
        //alert("Error, introduce tu número a 10 dígitos"); 
    //     //agrega la clase invalida
    //     fieldPhone.classList.add("is-invalid");

    } else{
        console.log(`Teléfono invalido: ${fieldPhone}`);
    //  //remover la clase
    fieldPhone.classList.add("is-invalid");
    //  //agregar la clase is-valid
    fieldPhone.classList.remove("is-valid");
    } // ====================== validación teéfono

    if(fieldPass0.length >= 10){
        console.log(`Contraseña válida: ${fieldPass0}`);

    } else{
        console.log(`Contraseña invalida: ${fieldPass0}`);

    } // ====================== validación contraseña

    if(fieldPass1.length >= 10){
        console.log(`Contraseña válida: ${fieldPass1}`);

    } else{
        console.log(`Contraseña invalida: ${fieldPass1}`);

    } // ====================== validación contraseña
if (fieldPass1.length >= 10 
    && fieldPass0.length >= 10 
    &&fieldPhone.length == 10
    && onlyN == true
    &&fieldEmail.length > 8
    && fieldEmail.indexOf('@') >= 0
    && ((fieldEmail.indexOf(".com") >= 0) || (fieldEmail.indexOf(".edu") >= 0))
    &&(fieldName.length >= 10) 
    && (onlyLetters == true)
    &&fieldName.length === nameCont)
{
    window.location.href="./../pages/login.html"
}
    // console.log(fieldName);
    // console.log(fieldEmail);
    // console.log(fieldEmail.indexOf('@'));
    // console.log(fieldPhone);
    // console.log(fieldPhone.length);
    // console.log(fieldPass0);

    console.log(fieldName.length);
    console.log(fieldName.charAt(6));
    console.log(nameCont);
    console.log(onlyLetters);


    console.log('\n');}
    else if(e.target.name=='login'){
        window.location.href="./../pages/login.html"
    }
    
};
    const form1 = document.getElementById('form_nc');
    form1.addEventListener('submit', validacionDeFormulario);
  console.log(usuarios); 
  console.log(storeList);

});