//definiendo datos
import{productos}from "../helpers/baseDatos.js"
import {pintarProductos} from "../helpers/pintarProductos.js"

//llamando a la fila
let fila = document.getElementById("fila")

//pintar los productos
pintarProductos(productos)

//escuchando clic en la fila contenedora de producto
fila.addEventListener("click",function(evento){

    let datosProductoSelecionado = {}
    let tarjeta=evento.target.parentElement

    datosProductoSelecionado.foto = tarjeta.querySelector("img").src
    datosProductoSelecionado.nombre = tarjeta.querySelector("h3").textContent
    datosProductoSelecionado.precio = tarjeta.querySelector("h5").textContent
    datosProductoSelecionado.descripcion = tarjeta.querySelector("h6").textContent


    //usaremos la memoria del pc para guardar esta info
    localStorage.setItem("producto",JSON.stringify(datosProductoSelecionado))

    window.location.href="./src/views/ampliarInfo.html"
} )