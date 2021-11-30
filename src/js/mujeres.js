function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.img + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title" id="title-card">' + item.name + '</h5>\n' +
        //'<h6 class="card-title">' + 'Descripción: ' + item.description + '</h6>\n' +
        '<p class="card-precio">' + 'Precio: $' + item.precio + '</p>' +
        //'<p>' + 'Color: ' + item.color + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" id="clickButon" data-bs-toggle="modal" data-bs-target="#ventanaModal"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;


} // Objeto para Item

addItem({
    'tipo': 'playera',
    'name': 'Gran Navidad',
    //'description': 'Anfg',
    'img': './../src/img/Mujeres/MPlayera100.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '360',
    'genero': 'M'
}); // item #1

addItem({
    'tipo': 'playera',
    'name': 'Estilo Never',
    //'description': 'Animación 2',
    'img': './../src/img/Mujeres/MPlayera109.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '340',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'name': 'Lobo',
    //'description': 'Animación 3',
    'img': './../src/img/Mujeres/MPlayera102.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'name': 'Lobo Anillado',
    //'description': 'Animación 4',
    'img': './../src/img/Mujeres/MPlayera103.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #4

addItem({
    'tipo': 'playera',
    'name': 'Mishi Negro',
    //'description': 'Animación 5',
    'img': './../src/img/Mujeres/MPlayera104.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '420',
    'genero': 'M'
}); // item #5

addItem({
    'tipo': 'playera',
    'name': 'Cráneos Blancos',
    //'description': 'Animación 6',
    'img': './../src/img/Mujeres/MPlayera105.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '290',
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'playera',
    'name': 'Vestido Inverso',
    //'description': 'Animación 7',
    'img': './../src/img/Mujeres/MPlayera106.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '480',
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'playera',
    'name': 'Bastardo Rosa',
    //'description': 'Animación 8',
    'img': './../src/img/Mujeres/MPlayera107.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '360',
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'playera',
    'name': 'Defensor',
    //'description': 'Animación 9',
    'img': './../src/img/Mujeres/MPlayera108.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '370',
    'genero': 'M'
}); // item #9

addItem({
    'tipo': 'playera',
    'name': 'Navidad Roja',
    //'description': 'Animación 10',
    'img': './../src/img/Mujeres/MPlayera112.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '360',
    'genero': 'M'
}); // item #10

addItem({
    'tipo': 'playera',
    'name': 'Bosque negro',
    //'description': 'Animación 11',
    'img': './../src/img/Mujeres/MPlayera110.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #11

addItem({
    'tipo': 'playera',
    'name': 'Bastardo Rosa/Manga corta',
    //'description': 'Animación 12',
    'img': './../src/img/Mujeres/MPlayera111.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '360',
    'genero': 'M'
}); // item #12
/*
const clickButton = document.querySelectorAll('#clickButon');
let tbody = document.querySelector('.carrito');

let carrito = [];

clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest('.card')
    const itemTittle = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.card-precio').textContent;
    const itemImage = item.querySelector('.card-img-top').src;

    const newItem = {
        title: itemTittle,
        precio: itemPrecio,
        image: itemImage,
        cantidad: 1
    }

    addItemCarrito(newItem);
}

function addItemCarrito(newItem) {

    console.log(newItem)
    carrito.push(newItem);
    renderCarrito()
}

function renderCarrito() {
    console.log(carrito);
   tbody.innerHTML = "hola"
    //     carrito.map(item =>{
    //         const tr = document.createElement('tr');
    //         tr.classList.add('itemCarrito')

    //         const Content = ` <th scope="col"><img src=${item.image} alt=""></th>
    //         <td class=" fw-bold pt-5">${item.title}</td>
    //         <td>
    //             <div class="cantidad-producto ">
    //                 <p class="cantidad fw-bold">${item.cantidad}</p>
    //                 <p class="incremento fw-bold">+</p>
    //             </div>
    //         </td>
    //         <td><i class="fas fa-trash-alt icon"></i></td>
    //     </tr>
    //     <tr>
    //         <td></td>
    //         <td></td>
    //         <td colspan="2">Total ${item.precio}</td>
    //     </tr>
    //     <tr>
    //         <td></td>
    //         <td></td>
    //         <td colspan="1"><button class="btn btn-dark">Pagar</button></td>`
    //         tr.innerHTML = Content
    //         tbody.appendChild(tr)
    //     })

}

// let agregar_carrito = document.getElementById('agregar-carrito');

// agregar_carrito.addEventListener('click', function(e){
//     e.preventDefault();


//     if( select.options[select.selectedIndex].text == 'Selecciona el color'){
//         document.querySelector('.alert').textContent = 'Ingrese el color deseado'
//     }else{
//     let select = document.getElementById('select')
//     let selected = select.options[select.selectedIndex].text;
//     console.log(selected);
//     document.querySelector('.alert').remove('.alert');


    if( select.options[select.selectedIndex].text == 'Selecciona el color'){
        document.querySelector('.alert').textContent = 'Ingrese el color deseado'
    }else{
    let select = document.getElementById('select')
    let selected = select.options[select.selectedIndex].text;
    console.log(selected);

    document.querySelector('.alert').remove('.alert');


    let tallaCh = document.getElementById('inlineRadio1');
    let tallaM = document.getElementById('inlineRadio2');
    let tallaGd = document.getElementById('inlineRadio3');
    let tallaEg = document.getElementById('inlineRadio4');
//     let tallaCh = document.getElementById('inlineRadio1');
//     let tallaM = document.getElementById('inlineRadio2');
//     let tallaGd = document.getElementById('inlineRadio3');
//     let tallaEg = document.getElementById('inlineRadio4');

//     let talla = '';
//     if(tallaCh.checked){
//         console.log(talla = tallaCh.value);
//     }else if(tallaM.checked){
//         console.log(talla = tallaM.value);


//     }else if(tallaGd.checked){
//         console.log(talla = tallaGd.value);

//     }else{
//         console.log(talla = tallaEg.value);
//     }}


// });

// function addCarrito(e){
//     let button = e.target
//     const item = button.closest('.card')
//     console.log(item);
// }


*/