let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    console.log("Lista de amigos actualizada:", amigos);

    // Limpiar el campo de entrada
    input.value = "";
}

