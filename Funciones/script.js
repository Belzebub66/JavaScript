//Una función puede regresar un valor, el termino regresar significa calcular una salida
/*
    funcion<nombre>(<parametros>){
        //codigo
        return <valor>;
    }
    una funcion puede regresar cualquier tipo de dato

    Nota: podemos tener una función sin un return, si la funcion no tiene return regresa undefined
*/
sumar = function(a,b){
   console.log(a + b);
   return a + b; //un retorno es el valor que devuelve la función y eso significa que la función va a obtener una salida
}
//Primera forma de llamar a la función
console.log(sumar(1,2)); // 3

//Segunda forma de llamar a la función
let resultadoSuma = sumar(2,2);
console.log(resultadoSuma); // 4

//Sumar 1 al resultado de la suma
console.log(sumar(resultadoSuma,1)); // 5


function sumarValoresArreglo(arreglo){
    if(arreglo.lenght>1){
        return arreglo[0]+arreglo[1]+arreglo[2];
    }else if (arreglo.length==1){
        return arreglo[0];
    }else{
        return 0;
    }
    console.log("fin de la función") // ya no se ejecuta porque se ejecutó un return
}

let pares1 = [1,2,3];
console.log(sumarValoresArreglo(pares1)); // 6

let pares2 = [2,4];
console.log(sumarValoresArreglo(pares2)); 

let pares3 = [];
console.log(sumarValoresArreglo(pares3));

//si la cantidad de elementos del arreglo cambia, la función no funcionará correctamente
//una solucion es que la funcion revise la cantidad de elementos del arreglo con length 
//cuando java lea y ejecute un return ya no ejecutará el resto del código por lo que la funcion terminará

/*
Console log imprime lo que esta dentro de los parentesis
y return devuelve el valor 
*/

function calculadora (a,b){
    function sumar(a,b){
        return a+b;
    }
    function restar(a,b){
        return a-b;
    }
    function multiplicar(a,b){
        return a*b;
    }
    return sumar(a,b) + restar(a,b) + multiplicar(a,b);
}

console.log(calculadora(9,2));


//Alcances, local y global

let nombreGato = "Maxwell"; //Es variable de alcance global, signinfica que la podre utilizar en cualquier bloque de codigo
console.log("El gatito esta en la calle: " + nombreGato);

function casa1(){
    let nombrePerro = "Rufus"; //rufus solo puede existir dentro de la casa
    console.log("El perro esta dentro de la casa y no puede salir" + nombrePerro)
    console.log("el gato global esta aqui en la casa: " + nombreGato);
}
casa1();
//como recomendación las variablers globales deben de estar al inicio del codigo para evitar que se usen antes de declararse

//se pueden utilizar variables superiores en cajas in teriores, pero no se pueden utilizar internos en bloques externos

//modificar la variable de un bloque de codigo padre desde uno hijo, el cambio puede existir

function crearGato(nuevoGato){
    let nombreGato = nuevoGato;
    console.log("dentro de la funcion" +  nombreGato);
}

crearGato("asdasd");
console.log("fuera de la funcion" + nombreGato);