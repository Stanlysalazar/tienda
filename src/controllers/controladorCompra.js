//llamo a la memoria para acceder a los datos guardados
let infoProducto = JSON.parse( localStorage.getItem("producto"))
console.log(infoProducto)

let foto= document.getElementById("foto")
foto.src=infoProducto.foto

let nombre = document.getElementById("titulo")
nombre.textContent= infoProducto.nombre


let precios = document.getElementById("precio")
precios.textContent= infoProducto.precio

let descripcion = document.getElementById("descripcion")
descripcion.textContent = infoProducto.descripcion

let infocarrito = JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora = document.getElementById("pildora")

if(infocarrito!=null){
    carrito=infocarrito
    pildora.textContent = carrito.length
    
}else{
    carrito =[]
}


let botonAgregarProducto = document.getElementById("btnagregarcarrito")


botonAgregarProducto.addEventListener("click",function(){

     let cantidad =document.getElementById("cantidad").value
     let precio = infoProducto.precio.split(" Pesos")[0]
     console.log(precio)
     console.log(cantidad)

    let subtotal = document.getElementById("SudTotal")
    
      subtotal = cantidad * precio
    console.log(subtotal)

    subtotal.textContent = 

    carrito.push(infoProducto)
    localStorage.setItem("carrito", JSON.stringify(carrito))


})




