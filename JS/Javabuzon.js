// Inicializa EmailJS con tu clave pública
(function() {
    emailjs.init("328XiNWJvR8Of0AfS");
})();

// Llama el formulario
document.getElementById('Buzon').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura los valores del formulario
    emailjs.send("service_jhp7kcg","template_lmomq0h",{
        Sugerencia: document.getElementById('Sugerencia').value,
        });
    const templateParams = {
        to_name: document.getElementById('name').value,
        suggestion: document.getElementById('Sugerencia').value,
    };

    // Envía el correo usando EmailJS
    emailjs.send("service_jhp7kcg","template_lmomq0h",{
        Sugerencia: document.getElementById('Sugerencia').value,
        });
    emailjs.send('service_jhp7kcg', 'template_lmomq0h', templateParams)
        .then(function(response) {
            console.log('¡ÉXITO! ', response.status, response.text);
            alert('Sugerencia enviada con éxito.');
        })
        .catch(function(error) {
            console.error('Error al enviar la sugerencia:', error);
            alert('Error al enviar la sugerencia. Inténtalo más tarde.');
        });
});
