const contenedor = document.querySelector(".row");
const modal = new bootstrap.Modal('#modalCarrito', {}); 
const modalListProducts = document.querySelector ('#modalListProducts')
const btnModalCarrito = document.querySelector('#btnModalCarrito');
const cartCount = document.querySelector('#cartCount')
const cartSum = document.querySelector('#cartSum')
const btnClose = document.querySelector('#btnClose');
const btnSave = document.querySelector('#btnSave');

//crear un array con todos los productos

let product_list = []

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
        setTimeout( () => {

        
        Swal.fire({
            title: "Compra finalizada",
            text: "Su compra fue hecha con exito",
            icon: "success"
        });
    

    }, 0)
    modal.hide()
    carrito.deleteCarrito()
    cartCount.innerText = carrito.getCount();
    localStorage.removeItem('carrito')
    
})

//funcion para reenderizar prductos
const renderProductos = (list) => {
    contenedor.innerHTML = '';
    list.forEach(producto => {
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

//funcion que renderiza el carrito
const renderCarrito = (list) => {
    modalListProducts.innerHTML = ''
    list.forEach( product => {
        modalListProducts.innerHTML += // html
            `<tr>
            <td> <img class= "imgCarrito"src="${product.img}" alt=""> </td>
            <td> ${product.nombre} </td>
            <td> ${product.unidades}</td>
            <td>$${product.precio}</td>
            <td>$${product.precio * product.unidades}</td>

        </tr>`
    })
    
}

//funcion que hace un target a los botones para agregar al carrito
const agregarCarrito = (e) =>{
    const id = e.target.id;
    const producto = product_list.find( item => item.id == id ); 
    carrito.addToCart(producto)
    cartCount.innerText = carrito.getCount();

     Toastify({
        close: true,
        text: "Producto agregado al Carrito",
        gravity: 'bottom',
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #ff6600, #fe8e43",
          },
    }).showToast();
}

//obtener los productos a través de un fetch y los reenderizo

const getProducts = async () => {
    try{
        const endpoint = 'js/productos.json'
        const response = await fetch(endpoint)
        const json = await response.json()
        const { productos } = json
        renderProductos(productos) 
        product_list = productos
    }
    catch{
        alert('error')
    }

    
}
getProducts()