//crear una funcion que le permita al usuario ingrtesar su nombre y que le de lña bienvenida.

function bienvenida(){
    let nombre = prompt(`ingrese su nombre`)
    if((nombre == ``) || (nombre.length < 3) || (nombre ==undefined)){
        alert(`Nombre incorrecto vuelva a intentarlo`)
        bienvenida()
    }
    else{alert(`Bienvenido ` + nombre + ' a Gameflix')
    }
    
}

bienvenida()

//crear un array con todos los productos

const productos = [{id: 1, nombre: 'God of War Ragnarok', consola: 'PS5', precio: 70},
    {id: 2, nombre: 'Spiderman 2', consola: 'PS5', precio: 70},    
    {id: 3, nombre: 'God of War Ragnarok', consola: 'PS4', precio: 50},
    {id: 4, nombre: 'Forza Horizon 2', consola: 'Xbox Series X', precio: 70},
    {id: 5, nombre: 'Forza Horizon 2', consola: 'Xbox One', precio: 50},
    {id: 6, nombre: 'Grand Theft Auto 5', consola: 'PC', precio: 40},
    {id: 7, nombre: 'Baldurs Gate 3', consola: 'PC', precio: 35},
    {id: 8, nombre: 'Pokemon Shield', consola: 'Nintendo Switch', precio: 80},
    {id: 9, nombre: 'Call of Duty Modern Warfare 3', consola: 'PS5', precio: 70},
    {id: 10, nombre: 'The Elder Scroll V: Skyrim', consola: 'PS4', precio: 50},
    {id: 11, nombre: 'The Elder Scroll V: Skyrim', consola: 'Xbox One', precio: 50},
    {id: 12, nombre: 'Madden NFL 24', consola: 'Xbox Series X', precio: 70},
    {id: 13, nombre: 'Mario Kart 8 Deluxe', consola: 'Nintendo Switch', precio: 60}
];

//crear carrito

const carrito = [];

//crear por prompt unas opciones que permita que el usuario elija productos
let menu = ``

//funcion usada para poder agregar productos al carrito (se usa dentro de la funcion del menu)

function comprar (filtro, consola){
    let seleccionProducto = prompt ('Ingrese el id del juego que desea comprar o  salir para volver\n' + filtro)
    const pasarMinuscula = seleccionProducto.toLowerCase()
    function productoPorID(id){
        const producto = consola.find((item)=> item.id == id)
        if(producto){
            carrito.push(producto)
            alert ('se agrego ' + producto.nombre + ' al carrito')
        }
        else if(pasarMinuscula == 'salir'){}
        else{alert('¡Se produjo un error! Vuelva a intentarlo')}
    }
    productoPorID(seleccionProducto)
} 

// Esta funcion me genera el prompt para filtrar los productos por marca

function menuComprar(){
    menu = parseInt(prompt(`ingrese el numero de la opción que desea\n 1. Juegos de pc\n 2. Juegos de PS4\n 3. Xbox One\n 4. Juegos de ps5\n 5. Xbox Series X\n 6. Juegos de Nintendo Switch\n 7. Salir`))
    if (menu == 1){
        const filtroPC = productos.filter((item) => item.consola == 'PC')
        let productosPC = ''
       filtroPC.forEach (juego => {
            productosPC += `- id: ${juego.id} ${juego.nombre} $${juego.precio}\n`
        });
        comprar(productosPC, filtroPC)
    }
    else if (menu == 2){
        const filtroPS4 = productos.filter((item) => item.consola == 'PS4')
        let productosPS4 = ''
       filtroPS4.forEach (juego => {
            productosPS4 += `- id: ${juego.id} ${juego.nombre} $${juego.precio}\n`
        });
        comprar(productosPS4, filtroPS4)
    }
    else if (menu == 3){
        const filtroXboxOne = productos.filter((item) => item.consola == 'Xbox One')
        let productosXboxOne = ''
       filtroXboxOne.forEach (juego => {
            productosXboxOne += `- id:${juego.id} ${juego.nombre} $${juego.precio}\n`
        });
        comprar(productosXboxOne, filtroXboxOne)
    }
    else if (menu == 4){
        const filtroPS5 = productos.filter((item) => item.consola == 'PS5')
        let productosPS5 = ''
       filtroPS5.forEach (juego => {
            productosPS5 += `- id:${juego.id} ${juego.nombre} $${juego.precio}\n`
        });
        comprar(productosPS5, filtroPS5)
    }
    else if (menu == 5){
        const filtroXbosSeriesX = productos.filter((item) => item.consola == 'Xbox Series X')
        let productosXboxSeriesX = ''
       filtroXbosSeriesX.forEach (juego => {
            productosXboxSeriesX += `- id:${juego.id} ${juego.nombre} $${juego.precio}\n`
        });
        comprar(productosXboxSeriesX, filtroXbosSeriesX)
    }
    else if (menu == 6){
        const filtroNintendoSwitch = productos.filter((item) => item.consola == 'Nintendo Switch')
        let productosNintendoSwitch = ''
       filtroNintendoSwitch.forEach (juego => {
            productosNintendoSwitch += `- id: ${juego.id} ${juego.nombre} $${juego.precio}\n`
        });
        comprar(productosNintendoSwitch, filtroNintendoSwitch)
    }
}

//funcion para finalizar la compra
function precioFinal(){
    let total = 0
    carrito.forEach((element) => {total += element.precio});
    if(total != 0){
        alert('¡Muchas gracias por su compra!\n El total es de $' + total)
    }
    else{alert('¡Muchas Gracias por su visita!')}
}

//bucle para que el usuario se mantenga en el menu hasta que decida salir
while(menu != 7){
    menuComprar()
    }

if(menu == 7){
    precioFinal()
}


