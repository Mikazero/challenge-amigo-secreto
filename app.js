// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos 
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = '';

    // Mostrar la lista actualizada en la consola
    console.log('Lista de amigos:', amigos);
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo de amigos
    for (let amigo of amigos) {
        // Crear un nuevo elemento <li>
        const li = document.createElement('li');
        li.textContent = amigo;

        // Agregar el elemento <li> a la lista
        lista.appendChild(li);
    }
}

// Modificar la función agregarAmigo para actualizar la lista en la página
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = '';

    // Mostrar la lista actualizada en la página
    mostrarListaAmigos();

    // Mostrar la lista actualizada en la consola
    console.log('Lista de amigos:', amigos);
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para realizar el sorteo.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
