//crear una funcion que le permita al usuario ingrtesar su nombre y que le de lña bienvenida.

function bienvenida(){
    let nombre = prompt(`ingrese su nombre`)
    if(nombre == ``){
        alert(`nombre incorrecto vuelva a intentarlo`)
        bienvenida()
    }
    else{alert(`Bienvenido ` + nombre + ' a Gameflix')
    }
    
}

bienvenida()

//crear por prompt unas opciones que permita que el usuario elija productos
let carrito =``
let menu = ``

/* Esta funcion me genera el prompt para elegir productos y a su vez me permite agregarlos a un "carrito"
tener en cuenta que esto lo voy a poder mejorar con objetos constructtores y arrays*/
function menuComprar(){
    menu = parseInt(prompt(`ingrese el numero de la opción que desea\n 1. Juegos de pc\n 2. Juegos de PS4 o Xbox One\n 3. Juegos de ps5 o Xbox Series X\n 4. Juegos de Nintendo Switch\n 5. Salir`))
    if(menu == 1){
        alert(`su producto vale $10.000`)
        carrito += `- 1 Juego de PC por el monto de $10.000\n`
    }
    else if(menu == 2){
        alert(`su producto vale $20.000`)
        carrito += '- 1 juego de PS4 o Xbox One por el monto de $20.000\n'
    }
    else if(menu == 3){
        alert(`su producto vale $50.000`)
        carrito += '- 1 juego de PS5 o Xbox Series X por el monto de $50.000\n'
    }
    else if(menu == 4){
        alert(`su producto vale $35.000`)
        carrito += '- 1 juego de Nintendo Switch por el monto de $20.000\n'
    }
    else if((menu > 5)){
        alert(`El valor ingresado no corresponde con las opciones. Vuelva a intentarlo`)
    }
}

//bucle para que el usuario se mantenga en el menu hasta que decida salir
    while(menu != 5){
    menuComprar()
    }


if(menu == 5){
    alert(`Muchas Gracias por su visita! Este es el detalle de sus productos!\n` + carrito)
}