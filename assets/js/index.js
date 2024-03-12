// Importar las clases de animales desde el archivo animalClasses.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animalClasses.js";

// Importar la función para obtener los datos de animales desde el control.js
import { getAnimales } from "./control.js";

// Importar la función para mostrar detalles de animal en un modal desde modal.js
import { mostrarDetallesAnimal } from "./modal.js";

// Seleccionar los elementos del formulario y la vista previa
const animal = document.querySelector("#animal");
const edad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");
const btnAgregar = document.querySelector("#btnRegistrar");

// Objeto para almacenar los datos del formulario
let formulario = {};

// Variable para almacenar los datos de los animales
let datosAnimales = "";

// Variable para almacenar la instancia del animal seleccionado
let instanciaAnimal = "";

// Función para limpiar el contenido del elemento de vista previa
const limpiarTagPreview = () => {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }
};

// Función asíncrona autoejecutable para cargar los datos de los animales y configurar eventos
(async () => {
  // Obtener los datos de los animales al cargar la página
  datosAnimales = await getAnimales();

  // Función para instanciar el formulario con los datos seleccionados
  const instanciarFormulario = (e) => {
    formulario = { ...formulario, [e.target.id]: e.target.value };
  };

  // Evento de cambio en la selección de animal
  animal.addEventListener("change", (e) => {
    instanciarFormulario(e);
 // Limpiar la vista previa
 limpiarTagPreview();

    // Según el animal seleccionado, instanciar el objeto correspondiente y mostrar la imagen en la vista previa
    switch (formulario.animal) {
      case "Leon":
        instanciaAnimal = new Leon(
          formulario.animal,
          formulario.edad,
          "http://localhost:5500/assets/imgs/" + datosAnimales.animales[0].imagen,
          formulario.comentarios,
          "http://localhost:5500/assets/sounds/" + datosAnimales.animales[0].sonido
        );
        break;
      case "Lobo":
        instanciaAnimal = new Lobo(
          formulario.animal,
          formulario.edad,
          "http://localhost:5500/assets/imgs/" + datosAnimales.animales[1].imagen,
          formulario.comentarios,
          "http://localhost:5500/assets/sounds/" + datosAnimales.animales[1].sonido
        );
        break;
      case "Oso":
        instanciaAnimal = new Oso(
          formulario.animal,
          formulario.edad,
          "http://localhost:5500/assets/imgs/" + datosAnimales.animales[2].imagen,
          formulario.comentarios,
          "http://localhost:5500/assets/sounds/" + datosAnimales.animales[2].sonido
        );
        break;
      case "Serpiente":
        instanciaAnimal = new Serpiente(
          formulario.animal,
          formulario.edad,
          "http://localhost:5500/assets/imgs/" + datosAnimales.animales[3].imagen,
          formulario.comentarios,
          "http://localhost:5500/assets/sounds/" + datosAnimales.animales[3].sonido
        );
        break;
      case "Aguila":
        instanciaAnimal = new Aguila(
          formulario.animal,
          formulario.edad,
          "http://localhost:5500/assets/imgs/" + datosAnimales.animales[4].imagen,
          formulario.comentarios,
          "http://localhost:5500/assets/sounds/" + datosAnimales.animales[4].sonido
        );
        break;
      default:
        console.error("Animal no reconocido");
        break;
    }

     // Agregar la imagen del animal seleccionado a la vista previa
    let tagImg = document.createElement("img");
    tagImg.setAttribute("src", instanciaAnimal.getImg());
    tagImg.setAttribute("alt", formulario.animal);
    tagImg.style.maxWidth = "50%";
    preview.appendChild(tagImg);
});

  // Evento de clic en el botón "Agregar"
  btnAgregar.addEventListener("click", () => {
    const animalSeleccionado = animal.value;
    const edadAnimal = edad.value;
    const comentariosAnimal = comentarios.value;

    // Validar si algún campo está vacío
    if (animalSeleccionado === "" || edadAnimal === "" || comentariosAnimal === "") {
      alert("Debe rellenar todos los campos");
      return;
    }

    // Buscar los datos del animal seleccionado
    const datosAnimalSeleccionado = datosAnimales.animales.find(
      (animal) => animal.name === animalSeleccionado
    );

    if (datosAnimalSeleccionado) {
      // Crear una tarjeta con la imagen y el botón de reproducción de sonido
      const card = document.createElement("div");
      card.classList.add("card", "m-2", "bg-light");
      card.setAttribute("id", "animalCard");
      card.style.width = "200px";
      card.style.height = "200px";
      card.innerHTML = ` 
        <img src="assets/imgs/${datosAnimalSeleccionado.imagen}" alt="${animalSeleccionado}">
        <button class="btn btn-secondary play-sound" data-audio="http://127.0.0.1:5500/assets/sounds/${datosAnimalSeleccionado.sonido}"><i class="fa-solid fa-volume-high"></i></button>
      `;

      // Agregar un evento de clic a la tarjeta para mostrar detalles adicionales del animal
      card.addEventListener("click", () => {
        const nombreAnimal = animalSeleccionado;
        const edadAnimal = edad.value;
        const imagenAnimal = `http://127.0.0.1:5500/assets/imgs/${datosAnimalSeleccionado.imagen}`;
        const comentariosAnimal = comentarios.value;
        mostrarDetallesAnimal(nombreAnimal, edadAnimal, imagenAnimal, comentariosAnimal);
      });

      // Agregar la tarjeta al contenedor de animales
      document.getElementById("Animales").appendChild(card);
    } else {
      console.error(`No se encontró el animal ${animalSeleccionado} en los datos.`);
    }
  });

  // Evento de clic en el documento para reproducir el sonido
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("play-sound")) {
      const audioUrl = event.target.getAttribute("data-audio");
      const audio = new Audio(audioUrl);
      audio.play();
    }
  });
})();
