let contador = 0;

console.log("Ejecución de un ciclo while");
while(contador < 10){
    console.log(contador);
    contador++;
}

console.log("Ejecución de un ciclo do while");
do{
    console.log("soy un ciclo do while");
}while(contador < 10); // Error: contador is not defined

console.log("Ejecución de un ciclo for");
for(let i=0; i<=20; i +=2){
    console.log(i);
}

//Sera posible inicializar más de una variable y modificar más de una variable en la acumulación
for(let i=0, j=10; i<=10; i++, j--){
    console.log(i + " " + j);
}

//Arreglos
let alumnos = ["Juan", "Pedro", "Pablo", "María", "Ana"];

console.log(typeof alumnos); // object
//typeof nos permite saber el tipo de dato de una variable

//formas de declarar un arreglo
let arreglo = new Array(10); // arreglo de 10 elementos
let arreglo2 = ['a', 'b', 'c', 'd', 'e'];

//formas de imprimir el arreglo
console.log(alumnos); //accedemos a todos los elementos del arreglo
console.log(alumnos[0]); //accedemos al primer elemento del arreglo
/*
    En javascript el indice empieza a contar desde cero, como si fuera una coordenada
    alumnos = ["Juan", "Pedro", "Pablo", "María", "Ana"]
    alumnos[0] = "Juan"
*/

//para acceder a más de un valor del arreglo


//
console.log(alumnos[1]);
alumnos[1] = "Pedro Pablo";
console.log(alumnos[1]);

//en js un arreglo puede tener diferentes tipos de datos y no esta restringido a que todo los datos de este sean del mismo tipo
let arregloCaotico = [1, "hola", true, [1, 2, 3], {nombre: "Juan", edad: 20}];
console.log(arregloCaotico);

//metodos de los arreglos
//hay 6 acciones que se pueden realizar con los arreglos
//1. push
//2. pop
//3. shift
//4. unshift
//5. splice
//6. slice

//tambien existen
//7. sort
//8. map


let frutas = []
frutas.push("Manzana"); //agrega un elemento al final del arreglo
console.log(frutas);
frutas.push("Pera");
console.log(frutas);

frutas.unshift("Uva"); //agrega un elemento al inicio del arreglo
console.log(frutas);

frutas.push("cebolla"); 
frutas.unshift("papa");
console.log(frutas);

frutas.pop(); //elimina el último elemento del arreglo
frutas.shift(); //elimina el primer elemento del arreglo
console.log(frutas);

// usar  mdn web docs para buscar la documentación de los metodos de los arreglos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

//como quitar un valor que no esta al inicio ni al final
frutas.splice(1, 1); //primer parametro es el indice del elemento que se quiere eliminar y el segundo parametro es la cantidad de elementos que se quieren eliminar
console.log(frutas);
frutas.splice(1, 0, "Pera"); //primer parametro es el indice del elemento que se quiere eliminar, el segundo parametro es la cantidad de elementos que se quieren eliminar y el tercer parametro es el elemento que se quiere agregar
console.log(frutas);

//como acceder a mas de un elemento del arreglo
console.log(frutas.slice(1, 3)); //primer parametro es el indice del elemento que se quiere obtener y el segundo parametro es el indice del elemento que se quiere obtener + 1

let numerosAleatorios = [1, 5, 3, 7, 2, 8, 4, 6];
// como le hariamos para recorrer un arreglo y que en pantalla se nos muestre si es impar o par?
numerosAleatorios.lenght //nos da la longitud del arreglo
let pares = [];
let impares = [];
//para cada valor del arreglo nos debe de indicar si es par o impar
for(let i=0; i<numerosAleatorios.length; i++){
    if(numerosAleatorios[i] % 2 == 0){
        console.log(numerosAleatorios[i] + " es par");
        pares.push(numerosAleatorios[i]);
    }else{
        console.log(numerosAleatorios[i] + " es impar");
        impares.push(numerosAleatorios[i]);
    }
}

//1.- el modulo nos permitira saber si un numero es par o impar
//2.- se usa < porque el arreglo empieza a contar desde 0
//3.- modulo se usa para saber si un numero es par o impar y se usa en if para saber si es par o impar


console.log("pares");
console.log(pares);
console.log("impares");
console.log(impares);


//OBJETOS
/*
En JS un objeto se dice que es un objeto literal
Estructura clave:valor

*/

let verdura = {
    nombre: "Papa",
    precio: 20,
    tipo: "Tuberculo"
}

let verdura1 = {
    nombre: "Lechuga",
    precio: 10,
    tipo: "Hojas"
}   

let verdurasObjetos = [verdura, verdura1];
console.log(verdurasObjetos[0].precio);

//la idea es que creemos varias verduras, crear una variable por ejemplo critricos y que lleve un conteo de cuantos citrios lleva el arreglo

//calcular la cantidad de cuantas frutas hay 
//console log hay n citiros, n pomaceas, n etc, etc 