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

addItem({
    'tipo': 'accesorio',
    'name': 'Gorro Jabalí',
    //'description': 'Anfg',
    'img': './../src/img/Accesorios/Accesorios1.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '120',
    'genero': 'M'
}); // item #1

addItem({
    'tipo': 'accesorio',
    'name': 'Lentes Neves Dies',
    //'description': 'Animación 2',
    'img': './../src/img/Accesorios/Accesorios.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'accesorio',
    'name': 'Gorra Azul NDS',
    //'description': 'Animación 3',
    'img': './../src/img/Accesorios/Accesorios3.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'accesorio',
    'name': 'Bebé Never Dies',
    //'description': 'Animación 4',
    'img': './../src/img/Accesorios/Accesorios4.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '160',
    'genero': 'M'
}); // item #4

addItem({
    'tipo': 'accesorio',
    'name': 'Gorra Negra NDS',
    //'description': 'Animación 5',
    'img': './../src/img/Accesorios/Accesorios5.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '180',
    'genero': 'M'
}); // item #5

addItem({
    'tipo': 'accesorio',
    'name': 'Gorra Beso Azul',
    //'description': 'Animación 6',
    'img': './../src/img/Accesorios/Accesorios6.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '140',
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'accesorio',
    'name': 'Stickers Never Dies',
    //'description': 'Animación 7',
    'img': './../src/img/Accesorios/Accesorios7.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '20',
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'accesorio',
    'name': 'Mochila Negra',
    //'description': 'Animación 8',
    'img': './../src/img/Accesorios/Accesorios8.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '280',
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'accesorio',
    'name': 'Anillo Diablo',
    //'description': 'Animación 9',
    'img': './../src/img/Accesorios/Accesorios9.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '120',
    'genero': 'M'
}); // item #9

addItem({
    'tipo': 'accesorio',
    'name': 'Gorros Rojo y Negro Jabalí',
    //'description': 'Animación 10',
    'img': './../src/img/Accesorios/Accesorios10.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '200',
    'genero': 'M'
}); // item #10

addItem({
    'tipo': 'accesorio',
    'name': 'Botónes Never Dies',
    //'description': 'Animación 11',
    'img': './../src/img/Accesorios/Accesorios11.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '10',
    'genero': 'M'
}); // item #11

addItem({
    'tipo': 'accesorio',
    'name': 'Almohada',
    //'description': 'Animación 12',
    'img': './../src/img/Accesorios/Accesorios12.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '280',
    'genero': 'M'
}); // item #12