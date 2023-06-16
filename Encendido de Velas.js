// Función para enviar la solicitud al webhook y obtener el horario de encendido de velas
function obtenerHorarioEncendidoVelas() {
  // Obtener la ciudad ingresada por el usuario
  var ciudad = document.getElementById('ciudad').value;

  // Crear la solicitud HTTP
  var xhr = new XMLHttpRequest();
  var url = 'URL_DEL_WEBHOOK'; // Reemplaza con la URL de tu webhook en el repositorio de GitHub

  // Configurar la solicitud
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Definir el callback para cuando la respuesta sea recibida
  xhr.onload = function() {
    if (xhr.status === 200) {
      var respuesta = JSON.parse(xhr.responseText);
      
      // Obtener el horario de encendido de velas de la respuesta
      var horarioEncendido = respuesta.horario;

      // Mostrar el resultado en la página
      document.getElementById('resultado').innerHTML = 'El horario de encendido de velas de Shabat en ' + ciudad + ' es a las ' + horarioEncendido;
    } else {
      document.getElementById('resultado').innerHTML = 'No se pudo obtener el horario de encendido de velas para ' + ciudad;
    }
  };

  // Crear el objeto JSON con los datos de la solicitud
  var data = JSON.stringify({ ciudad: ciudad });

  // Enviar la solicitud
  xhr.send(data);
}

// Asignar la función al botón de consultar
document.getElementById('consultarBtn').addEventListener('click', obtenerHorarioEncendidoVelas);
