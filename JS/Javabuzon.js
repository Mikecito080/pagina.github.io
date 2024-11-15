// script.js

// Inicializa EmailJS con tu clave pública
(function() {
    emailjs.init("328XiNWJvR8Of0AfS");
})();
//llama el formulario
document.getElementById('Buzon').addEventListener('submit', function(event) {
    event.preventDefault();
// se llaman las secciones del formulario
    const templateParams = {
        name: document.getElementById('name').value,
        country: document.getElementById('pais').value,
        email: document.getElementById('email').value,
        suggestion: document.getElementById('Sugerencia').value,
    };
//cuando se envia correctamente , el servicio de EMAILJS y el segundo es la plantilla de EMAILJS
    emailjs.send('service_jhp7kcg', 'template_lmomq0h', templateParams)
    .then(function(response) {
        console.log('¡ÉXITO! ', response.status, response.text);
        alert('Sugerencia enviada con éxito.');
    })
    .catch(function(error) {
        console.error('Error más detallado:', error);
        alert('Error al enviar la sugerencia.');
    });

});
