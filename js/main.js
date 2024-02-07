const contenedor = document.querySelector(".row");
const modal = new bootstrap.Modal('#modalCarrito', {}); 
const modalListProducts = document.querySelector ('#modalListProducts')
const btnModalCarrito = document.querySelector('#btnModalCarrito');
const cartCount = document.querySelector('#cartCount')
const cartSum = document.querySelector('#cartSum')
const btnClose = document.querySelector('#btnClose');
const btnSave = document.querySelector('#btnSave');

//crear un array con todos los productos

const productos = [{id: 1, nombre: 'God of War Ragnarok', consola: 'PS5', precio: 70, img: "./img/GoWR-PS5.jpg"},
    {id: 2, nombre: 'Spiderman 2', consola: 'PS5', precio: 70, img: "./img/Sm2-PS5.jpg"},    
    {id: 3, nombre: 'God of War Ragnarok', consola: 'PS4', precio: 50, img: "./img/GoWR-PS4.jpg"},
    {id: 4, nombre: 'Forza Horizon 5', consola: 'Xbox Series X', precio: 70, img: "./img/FH5-XboxSeriesX.jpg"},
    {id: 5, nombre: 'Forza Horizon 3', consola: 'Xbox One', precio: 20, img: "./img/FH3-XboxOne.jpg"},
    {id: 6, nombre: 'Grand Theft Auto 5', consola: 'PC', precio: 40, img: "./img/GTA5-PC.jpg"},
    {id: 7, nombre: 'Baldurs Gate 3', consola: 'PC', precio: 35, img: "./img/BG3-PC.jpg"},
    {id: 8, nombre: 'Pokemon Shield', consola: 'Nintendo Switch', precio: 50, img: "./img/PS-NintendoSwitch.jpg"},
    {id: 9, nombre: 'Call of Duty Modern Warfare 3', consola: 'PS5', precio: 65, img: "./img/CoDMW-PS5.jpg"},
    {id: 10, nombre: 'The Elder Scroll V: Skyrim', consola: 'PS4', precio: 15, img: "./img/ES5S-PS4.jpg"},
    {id: 11, nombre: 'The Elder Scroll V: Skyrim', consola: 'Xbox One', precio: 15, img: "./img/ES5S-XboxOne.jpg"},
    {id: 12, nombre: 'Madden NFL 24', consola: 'Xbox Series X', precio: 70, img: "./img/NFL24-XboxSeriesX.jpg"},
    {id: 13, nombre: 'Mario Kart 8 Deluxe', consola: 'Nintendo Switch', precio: 60, img: "./img/MK8D-NintendoSwitch.jpg"}
];

// JS Carrito
const getCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
var carrito = new Carrito(getCarrito);
cartCount.innerText = carrito.getCount();

btnModalCarrito.addEventListener('click', function (){
    const list = carrito.getProduct()
    cartSum.innerText = carrito.getSum()
    renderCarrito(list)
    modal.show();
})
btnClose.addEventListener('click', ()=> {
    modal.hide();
})
btnSave.addEventListener('click', () => {
    carrito.deleteCarrito()
    modalListProducts.innerHTML = ''
    cartSum.innerText = carrito.getSum()
    cartCount.innerText = carrito.getCount();
    localStorage.removeItem('carrito')
})

const renderProductos = (list) => {
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        contenedor.innerHTML += 
                                 `<div class="col">   
                                    <div class="card h-100">
                                        <img src="${producto.img}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${producto.nombre} <br> ${producto.consola}</h5>
                                            <p class="card-text">$${producto.precio}</p>
                                        </div>
                                        <button type="button" id="${producto.id}"  class="btn btn-primary btnAdd">Agregar al carrito
                                        </button>
                                    </div>
                                </div>`;
    });
    const btns = document.querySelectorAll(".btnAdd");
    btns.forEach(btn => {
        btn.addEventListener('click', agregarCarrito);
    });
}
const renderCarrito = (list) => {
    modalListProducts.innerHTML = ''
    list.forEach( product => {
        modalListProducts.innerHTML += // html
            `<tr>
            <td> ${product.nombre} </td>
            <td> ${product.unidades}</td>
            <td>$${product.precio}</td>
            <td>$${product.precio * product.unidades}</td>

        </tr>`
    })
}

const agregarCarrito = (e) =>{
    const id = e.target.id;
    const producto = productos.find( item => item.id == id ); 
    carrito.addToCart(producto)
    cartCount.innerText = carrito.getCount();
}

renderProductos(productos)