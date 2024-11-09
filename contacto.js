function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validación básica de campos vacíos
    if (name === "" || email === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    // Validación de formato de correo electrónico (expresión regular básica)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Si todo está bien, el formulario es válido
    return true;
}