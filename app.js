let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    

    amigos.push(nombre);
    console.log("Lista de amigos actualizada:", amigos);

    actualizarListaAmigos();

    input.value = "";
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const elemento = document.createElement("li"); 
        elemento.textContent = amigo; 
        lista.appendChild(elemento); 
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear.");
        return;
    }

    const resultados = [...amigos];
    resultados.sort(() => Math.random() - 0.5); 

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        const elemento = document.createElement("li");
        elemento.textContent = `${amigo} le regala a ${resultados[index]}`;
        resultadoLista.appendChild(elemento);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
