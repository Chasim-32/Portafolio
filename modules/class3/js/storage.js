// ========================================
// SISTEMA DE ACCESO CON STORAGE
// ========================================

// Mostrar pantalla correcta al cargar
window.addEventListener("load", function () {
    verificarSesion();
});


// ========================================
// CREAR CUENTA
// ========================================

function crearCuenta() {
    const nombre = document.getElementById("registerName").value.trim();

    if (nombre === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }

    // Guardamos el usuario de forma permanente
    localStorage.setItem("usuario", nombre);

    alert("Cuenta creada correctamente.");

    iniciarSesion();
}


// ========================================
// INICIAR SESIÓN
// ========================================

function iniciarSesion() {
    const nombre = localStorage.getItem("usuario");

    if (!nombre) {
        alert("Primero debes crear una cuenta.");
        return;
    }

    localStorage.setItem("sesionActiva", "true");

    mostrarPortafolio(nombre);
}


// ========================================
// ENTRAR COMO INVITADO
// ========================================

function entrarComoInvitado() {

    // La sesión solamente dura mientras esté abierta la pestaña
    sessionStorage.setItem("usuarioTemporal", "Invitado");
    sessionStorage.setItem("sesionActiva", "true");

    mostrarPortafolio("Invitado");
}


// ========================================
// VERIFICAR SI EXISTE UNA SESIÓN
// ========================================

function verificarSesion() {

    const usuarioLocal = localStorage.getItem("usuario");
    const sesionLocal = localStorage.getItem("sesionActiva");

    const usuarioTemporal = sessionStorage.getItem("usuarioTemporal");
    const sesionTemporal = sessionStorage.getItem("sesionActiva");

    if (sesionLocal === "true" && usuarioLocal) {
        mostrarPortafolio(usuarioLocal);
    } 
    else if (sesionTemporal === "true" && usuarioTemporal) {
        mostrarPortafolio(usuarioTemporal);
    } 
    else {
        mostrarLogin();
    }
}


// ========================================
// MOSTRAR LOGIN
// ========================================

function mostrarLogin() {

    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("portfolioContent").style.display = "none";
}


// ========================================
// MOSTRAR PORTAFOLIO
// ========================================

function mostrarPortafolio(nombre) {

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("portfolioContent").style.display = "block";

    const bienvenida = document.getElementById("welcomeUser");

    if (bienvenida) {
        bienvenida.textContent = `Bienvenido, ${nombre} 👋`;
    }
}


// ========================================
// CERRAR SESIÓN
// ========================================

function cerrarSesion() {

    localStorage.removeItem("sesionActiva");
    sessionStorage.removeItem("sesionActiva");
    sessionStorage.removeItem("usuarioTemporal");

    mostrarLogin();
}