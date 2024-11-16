function validarCredenciales(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores de los campos de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí defines las credenciales válidas
    const usuarioCorrecto = "usuario"; // Cambia este valor por el nombre de usuario correcto
    const contrasenaCorrecta = "1234"; // Cambia este valor por la contraseña correcta

    // Verificar si las credenciales coinciden
    if (username === usuarioCorrecto && password === contrasenaCorrecta) {
        // Redirigir a otra página si las credenciales son correctas
        window.location.href = "Evaluaciones.html"; 
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert("Nombre de usuario o contraseña incorrectos");
    }
}
