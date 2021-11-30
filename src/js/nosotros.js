class person{
    
    name = "";
    img = "";
    work = "";
    email = "";
    resume = "";
    linkedin = "";
    github = "";


    constructor (name, img, work, email, resume, linkedin, github){
        
        this.name = name.toUpperCase();
        this.img = `${img}`;
        this.work = `${work}`;
        this.email = email.toLowerCase();
        this.resume = `"${resume}"`;
        this.linkedin = `${linkedin}`;
        this.github = `${github}`;
        
        
    }//constructor

    printInfo(div){
        div.innerHTML +=    `<div class="card-section border rounded p-3" style="height: 570px">
            <div class="card-header-first rounded pb-5">
                <h4 class="card-header-title text-white pt-1">${this.work}</h4>
            </div>
            <div>
                <center>
                    <img class="circular--portrait" src="${this.img}"
                        class="img-fluid rounded-start" alt="perfil">
                </center>
            </div>
            <div class="card-body text-center">
                <h4 class="card-text text-white">${this.name}</h4>
                <p class="card-text text-white-50">${this.resume}</p>
            </div>
            <div>
                <a href="${this.github}" target="_blank"><i class="bi bi-github iconos card-section"></i></a>
                <a href="${this.linkedin}" target="_blank"><i class="bi bi-linkedin iconos card-section"></i></a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=${this.email}&amp;tf=1" target="_blank"><i class="bi bi-envelope-fill iconos card-section"></i></a>
            </div>
        </div>
    </div>` 
    }//printInfo
}//class persons

let divP0 = document.getElementById("container-1");
let divP1 = document.getElementById("container-2");
let divP2 = document.getElementById("container-3");
let divP3 = document.getElementById("container-4");
let divP4 = document.getElementById("container-5");
let divP5 = document.getElementById("container-6");
let divP6 = document.getElementById("container-7");
// Se declaran los divs donde se coloca cada Card

/*Resumen de Rafa, era mucho texto y lo definí en dos variables*/
let resumeRafa1 = "Desarrollador de software con experiencia en equipos de trabajo con metodología ágiles, encargados del desarrollo de aplicaciones web escalables,";
let resumeRafa2 = "robustas y seguras implementado las tecnologías con Java-EE, Maven y Spring Boot del lado del back-end y HTML5, CSS, JavaScript y Bootstrap en el apartdado front-end.";


let ariel = new person ("J. Ariel Gonzalez", "./../src/img/Devs/ariel2.jpg", "Java FullStack Developer", "arielgonzalezdelacruz@gmail.com", "Enamorado de la programación", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
let mau = new person ("Mauricio Suárez Quintero", "./../src/img/Devs/mau2.jpg", "Java FullStack Developer", "mauricio_sq@comunidad.unam.mx", "Soy Desarrollador Java Full Stack y Matemático.", "https://www.linkedin.com/in/mauriciosuarezq", "https://github.com/MauricioSQ");
let Ahmad = new person ("Ahmad Dowidar", "./../src/img/Devs/ahmad2.jpg", "Java FullStack Developer", "a7mad.dowidar@gmail.com","If you try to fail, and succeed, which have you done?", "https://www.linkedin.com/in/ahmad-dowidar/", "https://github.com/theDowidar");
let david = new person ("David Daniel Hernández", "./../src/img/Devs/david2.jpg", "Java FullStack Developer", "david.danielhdz@gmail.com", "Me gusta la tecnología y la automatización.", "https://www.linkedin.com/in/dhdavid", "https://github.com/david-danie");
let rafa = new person ("Rafael Osnaya de Lucio", "./../src/img/Devs/rafa2.jpg" ,"Java FullStack Developer", "osnayadeluciorafael@hotmail.com", resumeRafa1 + resumeRafa2, "https://www.linkedin.com/in/rafael-osnaya-de-lucio-17b01720b/", "https://github.com/RafaOsnaya");
let yaqui = new person ("Yaki Zeltzin Romero Trejo", "./../src/img/Devs/yaki2.jpg" ,"Java FullStack Developer", "zeltzin.rom96@gmail.com", "Disfruto mucho crear productos a través del código", "https://www.linkedin.com/in/yaki-zeltzin-romero-trejo-7a7471182/", "https://github.com/Yaki-Zeltzin");
let arely = new person ("Areli Garcia Reyes", "./../src/img/Devs/areli2.jpg" ,"Java FullStack Developer", "areli.reyes.97@gmail.com", "Soy una mujer llena de sueños, ganas y pasiones.  Ambientalista y amante de la tecnología.", "https://www.linkedin.com/in/areli-garcia-842735203/", "https://github.com/Areli123G");
// Se crean los nuevos objetos persona

mau.printInfo(divP0);
ariel.printInfo(divP1);
Ahmad.printInfo(divP2);
david.printInfo(divP3);
rafa.printInfo(divP4);
yaqui.printInfo(divP5);
arely.printInfo(divP6);
// Se imprime la info