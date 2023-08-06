// Función para obtener los datos de la API
function obtenerDatos() {
    const apiUrl = 'https://api.bluelytics.com.ar/v2/latest';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Mostrar los valores en la página
        document.getElementById('dolarOficialCompra').innerText ='$'+data.oficial.value_buy.toFixed(2);
        document.getElementById('dolarOficialPromedio').innerText ='$'+data.oficial.value_avg.toFixed(2);
        document.getElementById('dolarOficialVenta').innerText ='$'+data.oficial.value_sell.toFixed(2);
  
        document.getElementById('dolarBlueCompra').innerText ='$'+ data.blue.value_buy.toFixed(2);
        document.getElementById('dolarBluePromedio').innerText ='$'+ data.blue.value_avg.toFixed(2);
        document.getElementById('dolarBlueVenta').innerText ='$'+ data.blue.value_sell.toFixed(2);
  
        document.getElementById('euroOficialCompra').innerText ='€'+data.oficial_euro.value_buy.toFixed(2);
        document.getElementById('euroOficialPromedio').innerText ='€'+data.oficial_euro.value_avg.toFixed(2);
        document.getElementById('euroOficialVenta').innerText ='€'+data.oficial_euro.value_sell.toFixed(2);
  
        document.getElementById('euroBlueCompra').innerText ='€'+data.blue_euro.value_buy.toFixed(2);
        document.getElementById('euroBluePromedio').innerText ='€'+data.blue_euro.value_avg.toFixed(2);
        document.getElementById('euroBlueVenta').innerText ='€'+data.blue_euro.value_sell.toFixed(2);
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }
  
  // Llamar a la función para obtener los datos cuando la página cargue
  window.onload = obtenerDatos;