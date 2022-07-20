
const iva = 1.21;
let final = 0;
function valorFinal(precio,cuotas) {
   
    if (cuotas===2) {
        final = precio *iva;
        alert("El precio final sumando el IVA y un 10% de recargo es de: " + final * 1.10 ); 
    }

    else if (cuotas===3) {
        final = precio *iva;
        alert("El precio final sumando el IVA y un 20% de recargo es de: " + final * 1.20 ); 
    }

    else if (cuotas===4) {
        final = precio *iva;
        alert("El precio final sumando el IVA y un 30% de recargo es de: " + final * 1.30 ); 
    }else{
        alert("El precio final en 1 cuota sumando el IVA es de: " + precio * iva)
    }
}

let pedirPrecio = parseInt(prompt("Ingrese el precio del producto"));
let pedirCuotas = parseInt(prompt("Ingrese la cantidad de cuotas. Máximo 4 cuotas.")) 

valorFinal(pedirPrecio,pedirCuotas);