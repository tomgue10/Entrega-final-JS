class Carrito{
    constructor (list = []){
        this.carrito = list;
    }

    addToCart({nombre, precio, img, id}){
        const index = this.carrito.findIndex( producto => producto.id == id);
        if(index == -1){
            this.carrito.push({id, nombre, precio, unidades: 1})
        }
        else{
            this.carrito[index].unidades += 1;
        }
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }

    getCount(){
        return this.carrito.reduce( (cant, producto)=>{return cant + producto.unidades}, 0)
    }

    getSum(){
    return this.carrito.reduce( (acum, producto)=>{return acum + (producto.unidades * producto.precio)}, 0)

    }

    getProduct(){
        return this.carrito
    }
    deleteCarrito(){
        this.carrito = []
    }
}