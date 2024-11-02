



const menu = document.querySelector(".nav-main ul.nav-menu");
const menuBtn = document.querySelector(".menu-btn");

let timeout; // Para almacenar el temporizador

// Función para mostrar el menú
function showMenu() {
    menu.classList.add("show");
    resetTimeout(); // Reinicia el temporizador cuando el menú se muestra
}

// Función para ocultar el menú
function hideMenu() {
    menu.classList.remove("show");
}

// Función para reiniciar el temporizador
function resetTimeout() {
    clearTimeout(timeout); // Limpia cualquier temporizador anterior
    timeout = setTimeout(hideMenu, 2000); // Oculta el menú después de 2 segundos
}

// Event listeners
menuBtn.addEventListener("click", showMenu);
menu.addEventListener("mouseenter", () => clearTimeout(timeout)); // Detiene el temporizador si el ratón está sobre el menú
menu.addEventListener("mouseleave", resetTimeout); // Reinicia el temporizador al salir

