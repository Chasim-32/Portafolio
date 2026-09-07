


// ==============================
// MODO CLARO / OSCURO
// ==============================

const themeButton = document.getElementById("themeButton");

// Revisar si ya existe un tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
}

// Cambiar tema
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙";
    }

});

