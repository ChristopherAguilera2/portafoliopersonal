$(document).ready(function(){
  $("#informacion").click(function(){
      $("#datos").toggle();
  });
  });

//mostrar y esconder partes de la pagina con botones
$(document).ready(function(){
  $(".ventana").click(function(){
    $(".formulario.collapse").collapse('toggle');//mostrar y esconder formulario
  });

  $(".mostrar2").click(function(){
    $(".form-group.collapse").collapse('toggle');//mostrar y  esconder texto para comentar
  });

//$(".mostrar1").click(function(){
  //  $(".form-group.collapse").collapse('hide');//esconder texto para comentar al enviar comentario
  //});
});


//Pagina saludando al hacer click en mi nombre
$(document).ready(function(){
  $(".nombre").click(function(){
    alert("Hola, mucho gusto")
  });
});


//navegador movil al bajar por la pagina
$(document).ready(function(){
  $('body').scrollspy({target: ".mainnavbar", offset: 50});   
  });

  
//ventana emergente confirmando comentario enviado
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});

//evento para el formulario el cual evita que se active y confrime si todos los cambos estan completos para mostar modal
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('miFormulario');
  const botonMostrarModal = document.querySelector('.mostrar1');
  botonMostrarModal.addEventListener('click', () => {
      if (formulario.checkValidity()) {
          $('#miModal').modal('show');
          $(".form-group.collapse").collapse('hide');
      } else {
          alert('Por favor, complete todos los campos obligatorios.');
          formulario.reportValidity(); 
      }
  });
});



$(document).ready(function() {
  var originalContent = $('.clases').html(); // Guardar el contenido original de la sección de proyectos

  $('.curso li').on('click', function() {
      var proyectoId = $(this).attr('id');
      var projectDetails = {
          'proyecto1': {
              image: 'assets/img/jquery.png',
              description: 'Descripción del proyecto HTML con jQuery',
              url: 'https://christopheraguilera2.github.io/jquery/'
          },
          'proyecto2': {
              image: 'assets/img/LISTADETAREASPENDIENTES.png',
              description: 'Descripción del proyecto Agregar o eliminar en la LISTA DE TAREAS PENDIENTES',
              url: 'https://christopheraguilera2.github.io/LISTADETAREASPENDIENTES/'
          },
          'proyecto3': {
              image: 'assets/img/Bancaenlinea.png',
              description: 'Descripción del proyecto Banca en línea con JS',
              url: 'https://christopheraguilera2.github.io/Bancaenlinea/'
          },
          'proyecto4': {
              image: 'assets/img/SkyVacaciones.png',
              description: 'Descripción del proyecto Sky Vacaciones',
              url: 'https://christopheraguilera2.github.io/SkyVacaciones/'
          },
          'proyecto5': {
              image: 'assets/img/VuelosVacaciones.png',
              description: 'Descripción del proyecto Vuelos Vacaciones',
              url: 'https://christopheraguilera2.github.io/VuelosVacaciones/'
          }
      };

      var details = projectDetails[proyectoId];
      $('#proyecto-image').attr('src', details.image);
      $('#proyecto-description').text(details.description);
      $('#ir-pagina').attr('href', details.url);

      $('.curso').hide();
      $('#proyecto-details').show();
  });

  $('#volver').on('click', function() {
      $('#proyecto-details').hide();
      $('.curso').show();
  });
});

function adjustCarouselHeight() {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  let maxHeight = 0;

  // Encuentra la altura máxima de los items del carrusel
  items.forEach(item => {
    item.style.height = 'auto'; // Resetea la altura de cada item
    const itemHeight = item.offsetHeight;
    if (itemHeight > maxHeight) {
      maxHeight = itemHeight;
    }
  });

  // Ajusta la altura del contenedor del carrusel
  carousel.style.height = `${maxHeight}px`;
}

// Ajusta la altura al cargar la página
window.addEventListener('load', adjustCarouselHeight);

// Utiliza ResizeObserver para ajustar la altura al cambiar el contenido
const observer = new ResizeObserver(() => {
  adjustCarouselHeight();
});

document.querySelectorAll('.carousel-item').forEach(item => {
  observer.observe(item);
});

function loadContent() {
  // Una vez que el contenido esté cargado, ajusta la altura
  adjustCarouselHeight();
}

// Llama a esta función para cargar el contenido y ajustar la altura
loadContent();