// Tenemos un li de productos

const productos = [ //se cambian las rutas 
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./public/img/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./public/img/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./public/img/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./public/img/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./public/img/zapato-rojo.jpg" }
]

const li = document.querySelector('#lista-de-productos') //se le agregó el identificador # y se utiliza querySelector
const inputFiltro = document.querySelector('input'); //se le quitó el punto para que sea selector, se e quitó el signo $

//Se define la función displayProductos
function displayProductos(listaProductos) {

  //Se movió este bloque a esta función
  //Limpia los elementos hijos de 'li' (lista de productos)
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  //Ciclo que va insertando las imagenes y títulos en el html a través de un div
  for (let i = 0; i < listaProductos.length; i++) {
    //Crea un elemento div en el html
    let d = document.createElement("div") //se reemplaza var por let
    //Añade la clase producto al elemento div
    d.classList.add("producto")

    //Crea un elemento párrafo para el titulo del producto
    let ti = document.createElement("p") //se reemplaza var por let
    //Añade la clase título al elemento p
    ti.classList.add("titulo")
    //Añade como párrafo cada nombre del arreglo productos
    ti.textContent = listaProductos[i].nombre

    //Crea un elemento imagen en el html
    let imagen = document.createElement("img"); //se reemplaza var por let
    //Añade la ruta de cada imagen guardada en el arreglo de productos a src
    imagen.setAttribute('src', listaProductos[i].img);

    //Añade los párrafos y las imágenes en el elemento div
    d.appendChild(ti)
    d.appendChild(imagen)

    //Añade cada elemento div a una lista li
    li.appendChild(d)
  }
}

//Muestra todos los productos inicialmente
displayProductos(productos);

//Selecciona el botón del html y lo asigna a la variable botonDeFiltro
const botonDeFiltro = document.querySelector("button");


//Se crea una función para cuando se de click en el botón
botonDeFiltro.onclick = function () {  

  // Obtiene el valor del input pedido al usuario
  const texto = inputFiltro.value.toLowerCase(); //añadimos el método para convertirlo a minusculas
  console.log(texto);

  // Llama a la función filtrado para obtener los productos ingresados en el texto
  const productosFiltrados = filtrado(productos, texto);

  // Muestra los productos filtrados
  displayProductos(productosFiltrados);
  /* 
    for (let i = 0; i < productosFiltrados.length; i++) {
      var d = document.createElement("div")
      d.classList.add("producto")
  
      var ti = document.createElement("p")
      ti.classList.add("titulo")
      ti.textContent = productosFiltrados[i].nombre
  
      var imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);
  
      d.appendChild(ti)
      d.appendChild(imagen)
  
      li.appendChild(d)
    } */
};

// Se define la función 'filtrado' que toma el array de productos y el texto
const filtrado = (productos, texto) => { // se le quitan los corchetes de productos
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};