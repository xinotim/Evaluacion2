function validateLoginForm() {
    let isValid = true;

    // Obtener los valores de los campos
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Limpiar mensajes de error previos
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Por favor, ingresa un correo electrónico válido.';
        isValid = false;
    }

    // Validación de la contraseña
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    }

    return isValid;
}
