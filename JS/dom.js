
let titulo = document.getElementById("titulo");
cambiarTitulo();
cambiarColor();


function cambiarTitulo(){

        let tituloNuevo = prompt("Ingrese el nuevo titulo del proyecto");
        titulo.innerText = tituloNuevo;
}

function cambiarColor(){
    colorNuevo = prompt("Elija el color del titulo: \n1-Rojo \n2-Azul \n3-Blanco");

    switch (colorNuevo) {
        case "1":
            titulo.style.color = "red";
            break;
        case "2":
            titulo.style.color = "blue";
            break;
        case "3":
            titulo.style.color = "white";
    }
}