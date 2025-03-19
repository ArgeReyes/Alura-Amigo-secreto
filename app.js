function agregarNombre() {
    const nombre = nombreInput.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    nombres.push(nombre);
    nombreInput.value = "";
    actualizarListaVisual(nombre);
}

function actualizarListaVisual(nombre) {
    const li = document.createElement('li');
    li.textContent = nombre;
    listaNombres.appendChild(li);
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}

// Asignar eventos
adicionarBtn.addEventListener('click', agregarNombre);
sortearBtn.addEventListener('click', sortearAmigo);