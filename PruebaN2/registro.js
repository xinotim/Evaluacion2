function validateForm() {
    let isValid = true;

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Limpiar mensajes de error previos
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validación del nombre
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'El nombre debe tener al menos 3 caracteres.';
        isValid = false;
    }

    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Por favor, ingresa un correo electrónico válido.';
        isValid = false;
    }

    // Validación del número de teléfono
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById('phoneError').textContent = 'El número de teléfono debe tener 10 dígitos.';
        isValid = false;
    }

    // Validación de la contraseña
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    }

    return isValid;
}

