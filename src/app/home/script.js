function selectRecibo(nombre, imagen) {
    // Resaltar el recibo seleccionado
    const items = document.querySelectorAll('.recibo-item');
    items.forEach(item => {
      item.classList.remove('selected');
      item.classList.remove('highlight');
    });
    const selectedItem = Array.from(items).find(item => item.textContent === nombre);
    selectedItem.classList.add('selected', 'highlight');
  
    // Mostrar los detalles del recibo
    const reciboDetails = document.getElementById('reciboDetails');
    const reciboImage = document.getElementById('reciboImage');
    reciboImage.src = imagen;
    reciboDetails.style.display = 'block';
    reciboDetails.classList.add('fade-in'); // Añadir animación de entrada
  }
  
  // Función para manejar la búsqueda
  function onSearch(event) {
    if (event) event.preventDefault(); // Prevenir el envío del formulario
    alert("Búsqueda ejecutada"); // Aquí puedes agregar la lógica de búsqueda
  }
  
  // Función para imprimir (simulación)
  function onPrint() {
    alert("Función de imprimir activada"); // Aquí puedes agregar la lógica de impresión
  }
  // Recibos de ejemplo
// Recibos de ejemplo (actualiza las rutas de las imágenes según sea necesario)
const recibosPorAno = {
  "ENE-DIC(2024)": [
    { nombre: 'Recibo Enero', imagen: 'ruta/a/imagen-enero-2024.jpg' },
    { nombre: 'Recibo Febrero', imagen: 'ruta/a/imagen-febrero-2024.jpg' },
    { nombre: 'Recibo Marzo', imagen: 'ruta/a/imagen-marzo-2024.jpg' },
    { nombre: 'Recibo Abril', imagen: 'ruta/a/imagen-abril-2024.jpg' },
    { nombre: 'Recibo Mayo', imagen: 'ruta/a/imagen-mayo-2024.jpg' },
    { nombre: 'Recibo Junio', imagen: 'ruta/a/imagen-junio-2024.jpg' },
    { nombre: 'Recibo Julio', imagen: 'ruta/a/imagen-julio-2024.jpg' },
    { nombre: 'Recibo Agosto', imagen: 'ruta/a/imagen-agosto-2024.jpg' },
    { nombre: 'Recibo Septiembre', imagen: 'ruta/a/imagen-septiembre-2024.jpg' },
    { nombre: 'Recibo Octubre', imagen: 'ruta/a/imagen-octubre-2024.jpg' },
    { nombre: 'Recibo Noviembre', imagen: 'ruta/a/imagen-noviembre-2024.jpg' },
    { nombre: 'Recibo Diciembre', imagen: 'ruta/a/imagen-diciembre-2024.jpg' }
  ],
  "ENE-DIC(2023)": [
    { nombre: 'Recibo Enero', imagen: 'ruta/a/imagen-enero-2023.jpg' },
    { nombre: 'Recibo Febrero', imagen: 'ruta/a/imagen-febrero-2023.jpg' },
    { nombre: 'Recibo Marzo', imagen: 'ruta/a/imagen-marzo-2023.jpg' },
    { nombre: 'Recibo Abril', imagen: 'ruta/a/imagen-abril-2023.jpg' },
    { nombre: 'Recibo Mayo', imagen: 'ruta/a/imagen-mayo-2023.jpg' },
    { nombre: 'Recibo Junio', imagen: 'ruta/a/imagen-junio-2023.jpg' },
    { nombre: 'Recibo Julio', imagen: 'ruta/a/imagen-julio-2023.jpg' },
    { nombre: 'Recibo Agosto', imagen: 'ruta/a/imagen-agosto-2023.jpg' },
    { nombre: 'Recibo Septiembre', imagen: 'ruta/a/imagen-septiembre-2023.jpg' },
    { nombre: 'Recibo Octubre', imagen: 'ruta/a/imagen-octubre-2023.jpg' },
    { nombre: 'Recibo Noviembre', imagen: 'ruta/a/imagen-noviembre-2023.jpg' },
    { nombre: 'Recibo Diciembre', imagen: 'ruta/a/imagen-diciembre-2023.jpg' }
  ],
  "ENE-DIC(2022)": [
    { nombre: 'Recibo Enero', imagen: 'assets/recibo-enero.png' },
    { nombre: 'Recibo Febrero', imagen: 'ruta/a/imagen-febrero-2022.jpg' },
    { nombre: 'Recibo Marzo', imagen: 'ruta/a/imagen-marzo-2022.jpg' },
    { nombre: 'Recibo Abril', imagen: 'ruta/a/imagen-abril-2022.jpg' },
    { nombre: 'Recibo Mayo', imagen: 'ruta/a/imagen-mayo-2022.jpg' },
    { nombre: 'Recibo Junio', imagen: 'ruta/a/imagen-junio-2022.jpg' },
    { nombre: 'Recibo Julio', imagen: 'ruta/a/imagen-julio-2022.jpg' },
    { nombre: 'Recibo Agosto', imagen: 'ruta/a/imagen-agosto-2022.jpg' },
    { nombre: 'Recibo Septiembre', imagen: 'ruta/a/imagen-septiembre-2022.jpg' },
    { nombre: 'Recibo Octubre', imagen: 'ruta/a/imagen-octubre-2022.jpg' },
    { nombre: 'Recibo Noviembre', imagen: 'ruta/a/imagen-noviembre-2022.jpg' },
    { nombre: 'Recibo Diciembre', imagen: 'ruta/a/imagen-diciembre-2022.jpg' }
  ],
};

// Función para actualizar la lista de recibos
function updateReciboList() {
  const selectedYear = document.getElementById("yearSelect").value;
  const reciboListElement = document.getElementById("reciboList");
  reciboListElement.innerHTML = ""; // Limpiar la lista actual

  const recibos = recibosPorAno[selectedYear];
  if (recibos) {
    recibos.forEach((recibo, index) => {
      const listItem = document.createElement("li");
      listItem.className = "recibo-item";
      listItem.innerText = recibo.nombre;
      listItem.onclick = () => showReciboDetails(recibo);
      reciboListElement.appendChild(listItem);
    });
  }
}

// Función para mostrar detalles del recibo seleccionado
function showReciboDetails(recibo) {
  const reciboDetails = document.getElementById("reciboDetails");
  const reciboImage = document.getElementById("reciboImage");

  reciboImage.src = recibo.imagen;
  reciboDetails.style.display = "block"; // Mostrar los detalles del recibo
}

// Inicializar la lista de recibos al cargar la página
window.onload = function () {
  updateReciboList(); // Llamar a la función para cargar la lista de recibos
};

// Función para mostrar detalles del recibo seleccionado
function showReciboDetails(recibo) {
  const reciboDetails = document.getElementById("reciboDetails");
  const reciboImage = document.getElementById("reciboImage");
  const reciboItems = document.querySelectorAll(".recibo-item");

  // Limpiar selección previa
  reciboItems.forEach(item => item.classList.remove("selected"));

  // Marcar el recibo seleccionado
  const selectedItem = [...reciboItems].find(item => item.innerText === recibo.nombre);
  if (selectedItem) {
    selectedItem.classList.add("selected");
  }

  // Mostrar detalles del recibo
  reciboImage.src = recibo.imagen;
  reciboDetails.style.display = "block"; // Mostrar los detalles del recibo
}

function showReciboDetails(recibo) {
  const reciboDetails = document.getElementById("reciboDetails");
  const reciboImage = document.getElementById("reciboImage");
  reciboImage.src = recibo.imagen; // Establecer la imagen del recibo
  reciboDetails.style.display = "block"; // Mostrar los detalles del recibo
}