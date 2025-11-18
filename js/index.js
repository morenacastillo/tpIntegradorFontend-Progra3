
let contenedorProductos = document.getElementById("contenedor-productos")

async function obtenerProductos() {
    let url = "http://localhost:3000/products"
    try{
        let respuesta = await fetch("http://localhost:3000/products");
        let respuestaFormato = await respuesta.json();
        let productos = await respuestaFormato.payload;
    
        console.table(productos)

        mostrarProductos(productos);

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
            <p>${prod.precio}</p>
        </div>
        `;
        contenedorProductos.innerHTML = htmlProductos;
    });
}


function init() {
    obtenerProductos();
}

init();