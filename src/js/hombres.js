function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.img + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title">' + item.name + '</h5>\n' +
        //'<h6 class="card-title">' + 'Descripción: ' + item.description + '</h6>\n' +
        '<p>' + 'Precio: $' + item.precio + '</p>' +
        //'<p>' + 'Color: ' + item.color + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" data-bs-toggle="modal" data-bs-target="#ventanaModal"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
} // Objeto para Item
/*
let productoJSON= localStorage.getItem('product');
//let myJSON= [{}];
let myJSON= JSON.parse(productoJSON);
console.log(myJSON)
for(i=0;i<myJSON.length;i++){
    console.log(myJSON[i])
    addItem(myJSON[i]);
}
//let myJSONString=JSON.stringify(productoJSON);

*/

addItem({
    'tipo': 'playera',
    'name': 'Estilo gris',
    //'description': 'Anfg',
    'img': './../src/img/Hombres/Playera1.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #1

addItem({
    'tipo': 'playera',
    'name': 'Cráneo',
    //'description': 'Animación 2',
    'img': './../src/img/Hombres/Playera2.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '290',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'name': 'Navidad',
    //'description': 'Animación 3',
    'img': './../src/img/Hombres/Playera3.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '390',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'name': 'Iluminación',
    //'description': 'Animación 4',
    'img': './../src/img/Hombres/Playera4.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '410',
    'genero': 'M'
}); // item #4

addItem({
    'tipo': 'playera',
    'name': 'Vista rosa',
    //'description': 'Animación 5',
    'img': './../src/img/Hombres/Playera5.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '250',
    'genero': 'M'
}); // item #5

addItem({
    'tipo': 'playera',
    'name': 'Gran Elfo',
    //'description': 'Animación 6',
    'img': './../src/img/Hombres/Playera6.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '380',
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'playera',
    'name': 'Clásico Never Dies',
    //'description': 'Animación 7',
    'img': './../src/img/Hombres/Playera7.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '230',
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'playera',
    'name': 'Rosas Dark',
    //'description': 'Animación 8',
    'img': './../src/img/Hombres/Playera8.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '250',
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'playera',
    'name': 'Día de Muertos',
    //'description': 'Animación 9',
    'img': './../src/img/Hombres/Playera9.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '360',
    'genero': 'M'
}); // item #9

addItem({
    'tipo': 'playera',
    'name': 'Alien',
    //'description': 'Animación 10',
    'img': './../src/img/Hombres/Playera10.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '370',
    'genero': 'M'
}); // item #10

addItem({
    'tipo': 'playera',
    'name': 'Buda',
    //'description': 'Animación 11',
    'img': './../src/img/Hombres/Playera11.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #11

addItem({
    'tipo': 'playera',
    'name': 'Tentáculos',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera12.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '380',
    'genero': 'M'
}); // item #12
/*
addItem({
    'tipo': 'playera',
    'name': 'MODELO 12',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera13.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '350',
    'genero': 'M'
}); // item #12
*/
addItem({
    'tipo': 'playera',
    'name': 'Inspiración',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera14.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '220',
    'genero': 'M'
}); // item #12

addItem({
    'tipo': 'playera',
    'name': 'Doble Serpiente',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera15.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #12*/