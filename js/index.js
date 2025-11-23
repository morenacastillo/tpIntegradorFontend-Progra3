
let contenedorProductos = document.getElementById("contenedor-productos")

async function obtenerProductos() {
    let url = "http://localhost:3000/products"
    try{
        let respuesta = await fetch("http://localhost:3000/products");
        let data = await respuesta.json();

        if(respuesta.ok){
            let productos = await data.payload;
            mostrarProductos(productos);

        } else {
            alert("Error obteniendo productos")
        }

    } catch (error) {
        
    }
}

function mostrarProductos(productos){
    let htmlProductos = "";
    productos.forEach(prod => {
        htmlProductos += `
        <div class="card-producto">
            <img src="${prod.imagen}" alt="${prod.titulo}">
            <h3>${prod.titulo}</h3>
            <p>$${prod.precio}</p>
            <p>${prod.tipo}</p>

        </div>
        `;
        contenedorProductos.innerHTML = htmlProductos;
    });
}


function init() {
    obtenerProductos();
}

init();