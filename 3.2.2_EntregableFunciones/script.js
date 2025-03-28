let librosLeidos=[];
let titulo ="";
let pregunta1 = null;

let pregunta = prompt("¿Cuántos libros has leído?");

function agregarLibro(titulo){
    for(i=0; i<pregunta; i++){
        pregunta1 = prompt("Anota un libro que hayas leido");
        if(pregunta1 != ""){
            librosLeidos.push(pregunta1);
            console.log("Libro " + pregunta1 + " agregado correctamente")
        }else{
            console.log("Lo sentimos, ese titulo no es valido")
        } 
    }
}
agregarLibro();

function mostrarLibrosLeidos(){
    if(librosLeidos.length == 0){
        console.log("No has leído libros aún :(")
    }else{
        console.log("-------------------")
        console.log("Los libros que has leído son:" + librosLeidos)
        console.log("Has leído un total de: " + librosLeidos.length + " Libro(s)")
    }
}
mostrarLibrosLeidos();