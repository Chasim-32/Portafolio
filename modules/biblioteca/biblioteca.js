// Procesa la solicitud de préstamo
function procesarSolicitud(solicitud) {

    const nombreUsuario = solicitud[0];

    solicitud.unshift("Carné de socio");
    solicitud.push(nombreUsuario);
    return solicitud;
}


const boton = document.getElementById("procesarBtn");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {

    const nombreUsuario =
        document.getElementById("nombreUsuario").value.trim();

    const librosTexto =
        document.getElementById("libros").value.trim();
    if (nombreUsuario === "" || librosTexto === "") {

        resultado.innerHTML = `
            <div class="alert alert-warning">
                Debes ingresar el nombre del usuario y al menos un libro.
            </div>
        `;

        return;
    }


    const libros = librosTexto
        .split("\n")
        .map(libro => libro.trim())
        .filter(libro => libro !== "");


    // Crear el array de solicitud
    const solicitud = [
        nombreUsuario,
        ...libros
    ];

    const solicitudModificada =
        procesarSolicitud(solicitud);



    resultado.innerHTML = `
        <div class="alert alert-success">

            <h5>Solicitud procesada correctamente</h5>

            <p class="mb-0">
                <strong>Array resultante:</strong>
            </p>

            <code>
                ${JSON.stringify(solicitudModificada)}
            </code>

        </div>
    `;

});