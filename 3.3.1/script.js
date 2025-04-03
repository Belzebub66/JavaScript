/*Objeto es un tipo de dato que nos permite guardar más de un valor dentro de una variable y acceder a 
loa valores a través de llaves

[let|const] <nombreVariable>{
<nombrellaveN>:<valor>,
}
donde valor puede ser cualquier tipo de dato
*/

let mascota ={ 
    nombre: "Juan",
    tipo : "caballo",
    color : "rojo",
    edad : 5,
    esterilizado: false,
    humano : {
        nombre : "Josh",
        edad : 40
    }
}

console.log(mascota.nombre);
console.log(mascota["tipo"]);
console.log(mascota.humano.nombre);

//Modificar datos, se modifican con el operador de asignación 

console.log("La edad de " + mascota.nombre + " es: " + mascota.edad);
mascota.edad --;
console.log("La nueva edad de " + mascota.nombre + " es: " + mascota.edad);


//añadir propíedades

mascota.colorOjos = "Amarillos";
console.log(mascota.colorOjos);

/* Nosotros podemos crear una estructura definida de un objeto gracias a constructor, una función constructor es una función especial
que nos permite definir la estructura de un objeto y asociar valores a este
cuando mandamos a llamar un constructor debemos de utilizar la palabra reservada new
esto indica a JS que debe de reservar memoria

les podemos dar atributos o metodos
atributos: valores que nos permite definir una entidad(caracteristicas), eg. masa, ojos, pelaje
metodos: acciones que realiza una entidad correr, saltar, etc. EStas acciones las representamos con funciones

*/
let metro = 0;
function humano(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log("hola, mi nombre es: " + this.nombre)
    }
}

//añadir mas mascotas
// n de la estructura   parametros
function mascotas(nombre, tipo, edad, color, esterilizado, humano){ //los parametros no tienen que estar en orden necesariamente
    this.nombre = nombre; //esto lo que dice es que la estructura mascota va a tener una propiedad llamada nombre
    // nombre       valor
    this.tipo = tipo;
    this.edad = edad;
    this.esterilizado = esterilizado;
    this.color = color;
    this.humano = humano;
}

//para funciones que nos crean un objeto literal cambia la forma de llamarlos
let humanoNueva = new humano("Juan", 44); //Estoy creando un nuevo objeto
console.log(humanoNueva.edad);
console.log(humanoNueva.nombre);

humanoNueva.saludar();
let humanoNuevo = new humano("Juana", 31);
humanoNuevo.saludar();


let mascotaNueva = new mascotas("perro", "churrumino", 3, "red", true, humanoNueva);
console.log(mascotaNueva.nombre + " tiene " + mascotaNueva.edad + " años y su humano se llama " + mascotaNueva.humano.nombre);

console.table(mascotaNueva);

let ninio1 = new humano("Pachenko", 2);
ninio1.saludar();
// Bucle -> For o While
/*
    for(let i = 0; i < n; i++){

    }

    for... in
    Nos permite iterar sobre las llaves de un objeto literal.
    for([let | const] <nombreDeVariableInterna> in <objeto>){

    }

    for... of
    Este bucle nos permite iterar sobre los valores de un iterable.
    Los objetos NO son iterables.
     0           4
    [1, 2, 3, 4, 5]

     0        9
    "Hola mundo"
*/

console.log("for in");
for(let k in humanoNuevo){
    console.log(k);
    // console.log(humanoNuevo.k) Esta notación no nos serviría porque tratarías de acceder a la propiedad k la cuál no existe.
    console.log(humanoNuevo[k]);
}

for(let i in "Hola mundo"){
    console.log(i);
}

for(let i in [10, 9, 8, 10, 14]){
    console.log(i);
}

console.log("for of");


for(let c of "Hola mundo"){
    console.log(c);
}

for(let v of [10, 9, 8, 10, 14]){
    console.log(v);
}

//en oopcional debemos de agregar un metodo para agregar y eliminar b(no se hace de forma diecta)