// PASO 1: Cree un array para almacenar los nombres
let listaAmigos = [];

// PASO 2: Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validación del nombre
    if (!nombreAmigo) {
        alert('Por favor ingresa un nombre válido');
        return;
    }
    
    // Agregar al array
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Poner el foco de vuelta en el input
    inputAmigo.focus();
}

// PASO 3: Función para actualizar la lista visual
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    const resultadoElement = document.getElementById('resultado');
    
    // Limpiar lista anterior
    listaAmigosElement.innerHTML = '';
    resultadoElement.innerHTML = '';
    
    // Mostrar mensaje si no hay amigos
    if (listaAmigos.length === 0) {
        listaAmigosElement.innerHTML = '<li class="empty-message">No hay amigos agregados aún</li>';
        return;
    }
    
    // Agregar cada amigo a la lista
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        // Agregar botón para eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '×';
        botonEliminar.className = 'delete-button';
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        listaAmigosElement.appendChild(li);
    });
}

// Función auxiliar para eliminar amigos
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarListaAmigos();
}

// PASO 4: Función para sortear amigo secreto
function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');
    
    // Validar que haya amigos para sortear
    if (listaAmigos.length < 2) {
        resultadoElement.innerHTML = '<li>Necesitas al menos 2 amigos para realizar el sorteo</li>';
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    resultadoElement.innerHTML = `
        <li>¡El amigo secreto es:</li>
        <li class="winner">${amigoSecreto}</li>
    `;
    
    // Opcional: reiniciar el sorteo
    /* listaAmigos = [];
     actualizarListaAmigos();*/
}

// PASO 5: Agregar evento para Enter en el input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});