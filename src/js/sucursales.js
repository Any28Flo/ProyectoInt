class sucursales{
    name = "";
    img = "";
    map = ``;
    direccion = "";
    telefono = "";
    horario = "";

    constructor(name, img, map, direccion, telefono, horario){
        this.name = name;
        this.img = img;
        this.map = map;
        this.direccion = direccion;
        this.telefono = telefono;
        this.horario = horario;
    }//constructor

    printInfo(div){
        div.innerHTML += `<div class="col-md-12 text-white bg-dark">
                <div class="row g-0 align-items-center">
                    <div class="col-md-4">
                        <img src="${this.img}" class="img-fluid rounded-start" id="img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <iframe src="${this.map}"  width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            <p class="card-text">${this.direccion}</p>
                            <p class="card-text">${this.telefono}</p>
                            <p class="card-text">${this.horario}</p>
                        </div>
                    </div>  
            </div>
        </div>
        <br>`;
    }//printInfo
}//end class sucursales
let divP0 = document.getElementById("div1");
let divP1 = document.getElementById("div2");
let divP2 = document.getElementById("div3");
let divP3 = document.getElementById("div4");
let divP4 = document.getElementById("div5");
let divP5 = document.getElementById("div6");
let divP6 = document.getElementById("div7");
let divP7 = document.getElementById("div8");

let sucursal2 = new sucursales("Sucursal 2", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal1 = new sucursales("Sucursal 1", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal3 = new sucursales("Sucursal 3", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal4 = new sucursales("Sucursal 4", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal5 = new sucursales("Sucursal 5", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal6 = new sucursales("Sucursal 6", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal7 = new sucursales("Sucursal 7", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal8 = new sucursales("Sucursal 8", "./../src/img/tienda1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.865897690109!2d-74.0682458854909!3d4.62409837999898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle%20de%20la%20Ciudad%20de%20Bogota%2C%20Bogota%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1578551809872!5m2!1ses-419!2sco", "Calle de la Ciudad de Bogota, Bogota, Colombia", "Tel: (1) 775-8200", "Lunes a Viernes: 8:00 am - 6:00 pm");

sucursal1.printInfo(divP0);
sucursal2.printInfo(divP1);
sucursal3.printInfo(divP2);
sucursal4.printInfo(divP3);
sucursal5.printInfo(divP4);
sucursal6.printInfo(divP5);
sucursal7.printInfo(divP6);
sucursal8.printInfo(divP7);

