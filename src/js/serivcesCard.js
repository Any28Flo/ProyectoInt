/* Clase TEXTO - IMAGEN */
class services {
    image = "";
    title = "";
    content = "";

    constructor(image,title,content){
        this.image = `${image}`;
        this.title = `${title}`;
        this.content = `${content}`
    }//constructor

    printInfo(div) {
        div.innerHTML = `
        <div class="card mb-3 border-2 border-secondary" style="max-width: 100vw; max-height: 100vh">
          <div class="row g-0"> <!--Eliminé g-0 -->
            <div class="col-md-6 col-sm-12">
             <img src="${this.image}" class="img-fluid rounded-start img1" alt="...">
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card-body">
                <h5 class="card-title p-3" align='center'>${this.title}</h5>
                <p class="card-text" align='justify'>${this.content}</p>
              </div>
            </div>
          </div>
        </div>
        `
    }//printInfo
}//class services

/* misma clase pero orden invertido IMAGEN - TEXTO */
class servicesInvert{
  image = "";
  title = "";
  content = "";

  constructor(image,title,content){
      this.image = `${image}`;
      this.title = `${title}`;
      this.content = `${content}`
  }//constructor

  printInfo(div) {
      div.innerHTML = `
      <div class="card mb-6 border-2 border-secondary" style="max-width: 100vw; max-height: 80vh">
        <div class="row g-0">
          <div class="col-md-6 col-sm-12">
            <div class="card-body">
              <h5 class="card-title p-3" align='center'>${this.title}</h5>
              <p class="card-text" align='justify'>${this.content}</p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <img src="${this.image}" class="img-fluid rounded-end img2" alt="...">
          </div>
        </div>
      </div>
      `
  }//printInfo
}//class servicesInvert

//Hacemos referencia al la clase
let services01 = document.getElementById("container-01");
//Se crea el objeto
let mayoreo = new services("./../src/img/servicios/Mayoreo1.jpg","MAYOREO", "Descuentos por la compra en cantidades mayoristas además, disfruta de ventajas como pago a crédito, agrupación y normalización de los productos, almacenaje y conservación con altos estándares, transporte y asesoramiento directo al detallista dentro de los puntos de venta.");
//Llamamos el objeto y aplicamos su función printInfo con la info recivida del Index por Id
mayoreo.printInfo(services01);

let services02 = document.getElementById("container-02");
let maquiladora = new servicesInvert("./../src/img/servicios/Maquiladora10.jpg","MAQUILADORA","Nuestras maquiladoras importan libre de impuestos materiales, equipos de producción y componentes de ensamblaje. Contamos con grandes puntos de producción.");
maquiladora.printInfo(services02);

let services03 = document.getElementById("container-03");
let disenografico = new services("./../src/img/servicios/Diseno1.png","DISEÑO GRÁFICO","Consulta con nuestros especialistas los últimos detalles de tus ideas para transmitir mejor tu propuesta de valor. Nosotros te ayudamos a retocar los detalles de tu diseño asociando valores o emociones tu marca destacar por ser única y atractiva.");
disenografico.printInfo(services03);

// Eliminar fondo beish
  