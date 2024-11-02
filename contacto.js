function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validación básica
    if (name === "" || email === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    // Otras validaciones pueden ir aquí (formato de email, etc.)

    return true; // El formulario es válido
}