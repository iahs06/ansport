// Contador de visitas
let visitas = localStorage.getItem('visitas') || 0; // Obtener visitas del localStorage o iniciar en 0
visitas++; // Incrementar el contador
localStorage.setItem('visitas', visitas); // Guardar el nuevo valor en el localStorage
document.getElementById('contador-visitas').textContent = visitas; // Mostrar en el elemento HTML
