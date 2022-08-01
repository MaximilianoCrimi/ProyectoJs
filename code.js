class Productos{

    
    constructor(categoria, subCategoria, marca, presentacion, precio, stock){
        this.categoria = categoria;
        this.subCategoria = subCategoria; 
        this.marca = marca;
        this.presentacion = presentacion;
        this.precio = precio;
        this.stock = stock;
    }
     
mostrarDescripcion(){
    
    return this.categoria + " "+ this.subCategoria + " " + this.marca +" Presentación: "+ this.presentacion + " $" + this.precio + " Stock: " + this.stock;
}
}



let catalogo = new Array();

catalogo.push(new Productos("BEBIDAS", "GASEOSA", "COCA-COLA", "12 x 2,25 LT", 2500, true));
catalogo.push(new Productos("BEBIDAS", "GASEOSA", "COCA-COLA", "12 x 1,50 LT", 1800, true));
catalogo.push(new Productos("BEBIDAS", "CERVEZA", "QUILMES", "12 x 1 LT", 2400, false));
catalogo.push(new Productos("BEBIDAS", "CERVEZA", "AMSTEL", "12 x 1 LT", 2000, true));
catalogo.push(new Productos("BEBIDAS", "AGUA", "GLACIAR", "12 x 2LT", 1500, false));
catalogo.push(new Productos("FIAMBRES", "QUESOS", "SANCOR", "BARRA x 5 KG", 5300, true));
catalogo.push(new Productos("FIAMBRES", "JAMONES", "PALADINI", "PIEZA x 4 KG", 6200, true));
catalogo.push(new Productos("FIAMBRES", "SALAMES", "CALCHAQUI", "PIEZA x 3 KG", 4800, true));
catalogo.push(new Productos("FIAMBRES", "QUESOS", "SERENISIMA", "PIEZA x 5 KG", 5500, false));

let catalogoBebidas = catalogo.filter((el) => el.categoria.includes("BEBIDAS"))
let catalogoFiambres = catalogo.filter((el) => el.categoria.includes("FIAMBRES"))
let pregunta = prompt("¿QUE DESEA VER? \n 1-BEBIDAS \n 2-FIAMBRES");

if (pregunta =="1") {
  
   for(let i = 0; i <= catalogoBebidas.length; i++){
    alert(catalogoBebidas[i].mostrarDescripcion())
   }
}if (pregunta =="2"){
    for(let i = 0; i<= catalogoFiambres.length; i++){
        alert(catalogoFiambres[i].mostrarDescripcion())
    }
}



