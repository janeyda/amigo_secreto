// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos=[];



function agregarAmigo(){

let input = document.getElementById("amigo");
let nombre = input.value.trim();
 if (nombre) {
        listaAmigos.push(nombre);
        input.value = ""; // Limpiar el campo
        actualizarListaAmigos();
    } else {
        alert("Ingrese un nombre válido.");
    }
    
console.log(listaAmigos)
}


function sortearAmigo(){


    if (listaAmigos.length === 0) {
        alert("La lista está vacía.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];
    alert(`El amigo secreto  es: ${amigoSeleccionado}`);
    listaAmigos = [];
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });

    
}


