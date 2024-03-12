//Modal
export function mostrarDetallesAnimal(nombre, edad, imagen, comentarios) {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = ""; // Para limpiar el contenido anterior del modal

  const animalImg = document.createElement("img");
  animalImg.src = imagen;
  animalImg.alt = nombre;
  animalImg.classList.add("img-fluid");
  modalBody.appendChild(animalImg);

  const nombreElement = document.createElement("h5");
  nombreElement.textContent = `Nombre: ${nombre}`;
  nombreElement.classList.add("text-white");
  modalBody.appendChild(nombreElement);

  const edadElement = document.createElement("p");
  edadElement.textContent = `Edad: ${edad}`;
  edadElement.classList.add("text-white");
  modalBody.appendChild(edadElement);

  const comentariosElement = document.createElement("p");
  comentariosElement.textContent = `Comentarios: ${comentarios}`;
  comentariosElement.classList.add("text-white");
  modalBody.appendChild(comentariosElement);

  // Ajustar estilos del modal
  const modalContent = document.querySelector(".modal-content");
  modalContent.classList.add("bg-secondary", "text-center");

  // Mostrar el modal
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
}

