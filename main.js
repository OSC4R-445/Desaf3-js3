//Los datos de las cards
var data =
[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  },
  {
    "albumId": 1,
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "url": "https://via.placeholder.com/600/66b7d2",
    "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
  },
  {
    "albumId": 1,
    "id": 13,
    "title": "repudiandae iusto deleniti rerum",
    "url": "https://via.placeholder.com/600/197d29",
    "thumbnailUrl": "https://via.placeholder.com/150/197d29"
  },
  {
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://via.placeholder.com/600/61a65",
    "thumbnailUrl": "https://via.placeholder.com/150/61a65"
  },
  {
    "albumId": 1,
    "id": 15,
    "title": "harum dicta similique quis dolore earum ex qui",
    "url": "https://via.placeholder.com/600/f9cee5",
    "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
  },
  {
    "albumId": 1,
    "id": 16,
    "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    "url": "https://via.placeholder.com/600/fdf73e",
    "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
  },
  {
    "albumId": 1,
    "id": 17,
    "title": "natus doloribus necessitatibus ipsa",
    "url": "https://via.placeholder.com/600/9c184f",
    "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
  },
  {
    "albumId": 1,
    "id": 18,
    "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    "url": "https://via.placeholder.com/600/1fe46f",
    "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
  },
  {
    "albumId": 1,
    "id": 19,
    "title": "perferendis nesciunt eveniet et optio a",
    "url": "https://via.placeholder.com/600/56acb2",
    "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
  },
  {
    "albumId": 1,
    "id": 20,
    "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    "url": "https://via.placeholder.com/600/8985dc",
    "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
  }
]

//MODULOS
function crearCards(e) {
    // Usar template literals para una mejor estructura y legibilidad
    let cardHTML = `
      <div class="card col col-3" id="${e.id}" style="width: 18rem; cursor: pointer;">
        <img src="${e.thumbnailUrl}" class="card-img-top" alt="${e.title}">
        <div class='card-body'>
          <h5 class='card-title'>${e.id} - ${e.title}</h5>
        </div>
      </div>`;
    $("#cardsAqui").append(cardHTML);
}
//FIN MODULOS

// --- FUNCIÓN PARA ACTUALIZAR VISIBILIDAD DEL BOTÓN ---
function actualizarVisibilidadBoton() {
    // Seleccionar el botón basado en su contenedor y clases
    // Asume que es el único botón con esas clases dentro de #seleccionadoAqui
    const botonComprar = $("#seleccionadoAqui button.btn.btn-warning");
    const hayItems = $("#adquiridos li").length > 0; // Verificar si hay elementos <li>

    // Establecer el estilo display directamente
    if (hayItems) {
        botonComprar.css("display", "block"); // Mostrar si hay items
    } else {
        botonComprar.css("display", "none"); // Ocultar si no hay items
    }
}
// --- FIN FUNCIÓN ---

// EJECUCION DE JQUERY CUANDO TODO HA CARGADO
$(function() {
  // Crear las cards
  data.forEach(e => {
    crearCards(e);
  });

  // --- LLAMADA INICIAL PARA ESTABLECER ESTADO DEL BOTÓN ---
  actualizarVisibilidadBoton(); // Ocultará el botón si la lista está vacía al inicio

  // --- Manejador para AÑADIR al hacer click en una CARD ---
  $("#cardsAqui").on("click", ".card", function() {
      const clickedCard = $(this);
      const clickedId = clickedCard.attr('id');

      clickedCard.addClass("bg-success");

      const listSelector = `#adquiridos li[data-id='${clickedId}']`;

      if ($(listSelector).length === 0) {
          const clickedItemData = data.find(item => item.id == clickedId);
          if (clickedItemData) {
              const itemTitle = clickedItemData.title;
              // Añadimos data-id al <li> para poder identificarlo fácilmente después
              const listItemHTML = `<li data-id="${clickedId}">${clickedId} - ${itemTitle}</li>`;
              $("#adquiridos").append(listItemHTML);
              // --- ACTUALIZAR BOTÓN DESPUÉS DE AÑADIR ---
              actualizarVisibilidadBoton();
          } else {
              console.warn("No se encontraron datos para el ID:", clickedId);
          }
      }
      // Opcional: Deseleccionar otras cards si solo se permite una selección
      // clickedCard.siblings().removeClass("bg-success");
  });
  // --- FIN Manejador para AÑADIR ---


  // --- Manejador para QUITAR al hacer DOBLE CLICK en un LI ---
  $("#adquiridos").on("dblclick", "li", function() {
      const clickedListItem = $(this);
      const itemText = clickedListItem.text();
      const itemId = clickedListItem.data('id');

      if (confirm(`¿Estás seguro de que deseas quitar "${itemText}" de la lista?`)) {
          // Si confirma (devuelve true), eliminar el elemento <li> de la lista
          clickedListItem.remove();

          // --- Quitar bg-success de la card correspondiente ---
          // Ahora esta parte está activa:
          if (itemId) { // Asegurarse de que tenemos un ID válido
              // Seleccionamos la card usando el ID y le quitamos la clase
              $("#" + itemId).removeClass("bg-success");
          }
          // --- ACTUALIZAR BOTÓN DESPUÉS DE QUITAR ---
          actualizarVisibilidadBoton();
      }
      // Si el usuario presiona "Cancelar" (confirm devuelve false), no se hace nada.
  });
  // --- FIN Manejador para QUITAR ---

});
