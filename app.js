let amigos = []; // Lista inicial de amigos

function agregarAmigo() {
    // Obtener el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    console.log("Lista de amigos actualizada:", amigos);

    // Actualizar la lista visualmente
    actualizarListaAmigos();

    // Limpiar el input
    input.value = "";
}

function actualizarListaAmigos() {
    // Seleccionar el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada amigo a la lista
    amigos.forEach(amigo => {
        const elemento = document.createElement("li"); // Crear un elemento <li>
        elemento.textContent = amigo; // Asignar el nombre al elemento
        lista.appendChild(elemento); // Agregar el elemento a la lista
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear.");
        return;
    }

    // Crear un resultado aleatorio para cada amigo
    const resultados = [...amigos];
    resultados.sort(() => Math.random() - 0.5); // Barajar los amigos aleatoriamente

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar los resultados previos

    amigos.forEach((amigo, index) => {
        const elemento = document.createElement("li");
        elemento.textContent = `${amigo} le regala a ${resultados[index]}`;
        resultadoLista.appendChild(elemento);
    });
}
