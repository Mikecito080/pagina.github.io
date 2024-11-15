  // Respuestas correctas
  const respuestasCorrectas = {
    pregunta1: 'opcion a',       // Correcto: "opcion 1" 
    pregunta2: 'opcion e', // Correcto: "opcion 2"
    pregunta3: 'opcion j'     // Correcto: "opcion 3"
};

function validarFormulario(event) {
    // Obtenemos las preguntas
    const preguntas = ['pregunta1', 'pregunta2', 'pregunta3'];
    let todasRespondidas = true;
    let respuestasUsuario = {};

    // Verificamos que cada pregunta tenga una respuesta seleccionada
    preguntas.forEach(pregunta => {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (!seleccionada) {
            todasRespondidas = false;
            alert(`Por favor, responde la pregunta: ${pregunta}`);
        } else {
            respuestasUsuario[pregunta] = seleccionada.value;
        }
    });

    // Si alguna pregunta no está respondida, prevenimos el envío
    if (!todasRespondidas) {
        event.preventDefault();
        return false;
    }

    // Mostrar resultados
    mostrarResultados(respuestasUsuario);

    // Prevenir el envío del formulario para que no se recargue la página
    event.preventDefault();
    return false;
}

function mostrarResultados(respuestasUsuario) {
    // Mostrar el div de resultados
    document.getElementById('resultado').classList.remove('hidden');

    // Para cada pregunta, verificamos si la respuesta es correcta
    Object.keys(respuestasCorrectas).forEach(pregunta => {
        const respuestaUsuario = respuestasUsuario[pregunta];
        const respuestaCorrecta = respuestasCorrectas[pregunta];
        const respuestaElemento = document.getElementById(`respuesta${pregunta.charAt(pregunta.length - 1)}`);
        
        // Verificar si la respuesta es correcta o incorrecta
        if (respuestaUsuario === respuestaCorrecta) {
            respuestaElemento.innerHTML = `Pregunta ${pregunta.charAt(pregunta.length - 1)}: <span class="correcta">Correcto</span>`;
        } else {
            respuestaElemento.innerHTML = `Pregunta ${pregunta.charAt(pregunta.length - 1)}: <span class="incorrecta">Incorrecto</span>`;
        }
    });
}