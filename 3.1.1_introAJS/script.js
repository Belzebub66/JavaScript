console.log("Hello world!");

//String nos permite trabajar con cadenas de texto, se puede usar comillas simples o dobles, o backticks '' "" ``
//Variables es un espacio en memoria que se puede reutilizar, se puede declarar con var, let o const
/*Receta mágica para declarar variables
    Especificador de variable + nombre = valor
*/

/*Especificadores de variables
    var, let, const
    estas son palabras reservadas que nos permiten declarar variables
*/

let nombre = "Juan"; //Declaración de variable llamada nombre con el valor de "Juan"
console.log(nombre); //Imprime el valor de la variable nombre

nombre = "Pedro"; //Reasignación de la variable nombre
console.log(nombre);

//constante, no podemos reasignar su valor
const gravedad = 9.8; //Declaración de una constante llamada gravedad con el valor de 9.8
console.log(gravedad); //Imprime el valor de la constante gravedad
const pi = 3.1416; //Declaración de una constante llamada pi con el valor de 3.1416
console.log(pi); //Imprime el valor de la constante pi

//number nos permite trabajar con números, enteros o decimales
let edad = 25; //Declaración de una variable llamada edad con el valor de 25
let estatura = 1.75; //Declaración de una variable llamada estatura con el valor de 1.75
let gradosCentigrados = -20.2; //Declaración de una variable llamada gradosCentigrados con el valor de -20.2
console.log(edad); //Imprime el valor de la variable edad
console.log(estatura); //Imprime el valor de la variable estatura
console.log(gradosCentigrados); //Imprime el valor de la variable gradosCentigrados

//Contatenacion de variables
console.log(nombre + " tiene " + edad + " años "); //Imprime el valor de la variable nombre, la palabra tiene, el valor de la variable edad y la palabra años
//convierte cualquier tipo de datos a string y lo concatena 
//podemos identificar a las cadenas porque tienen comillas simples o dobles


//Ahora tenemos el tipo de dato boolean, que nos permite representar que algo es verdadero o falso
let mayorEdad = true; //Declaración de una variable llamada mayorEdad con el valor de true
let esunaPersona = false; //Declaración de una variable llamada esunaPersona con el valor de false

//true y false son palabras reservadas, que son palabras que no peuden usarse como nombres de variables, funciones, clases, etc.


//Uso de alert

//alert(edad);
/*
EJERCICIO 1: Leer los datos de una mascota e imprimir el mensaje que incluya todos los datos leidos, imprimir al menos una vez cada tipo de dato y en el mensaje impreso va a ser a traves de un mensaje final que recopile todos los datos, se sube a Discord

let nombreMascota = prompt("Escribe el nombre de tu mascota"); //siempre convierte el valor a string
let edadMascota = prompt("Escribe la edad de tu mascota");
let estadoMascota = prompt("¿Tu mascota está estirilizada?");

let mensajeMascotaFinal = "El nombre de tu mascota es " + nombreMascota + " y tiene " + edadMascota + " años de edad, además de que " + estadoMascota + " está esterilizada";
alert(mensajeMascotaFinal);
*/

/*EJERCICIO 2: Crear un cuestionario de 10 preguntas, mostrar cada pregunta una por una y al final mostrar la respectiva pregunta con la respuesta introducida por el susario. Que al menos dos preguntas de opción múltiple y al menos dos preguntas sean de valores numéricos, agregar cada respuesta correcta a una variable*/

let pregunta1 = prompt("¿Qué banda es considerada la pionera del heavy metal? \n A) Black Sabbath \n B) Metallica \n C) Iron Maiden"); //Respuesta correcta A
let pregunta2 = prompt("¿Cuál es el nombre del primer álbum de la banda Nirvana? \n A) Nevermind \n B) Bleach \n C) In Utero"); //Respuesta correcta B
let pregunta3 = prompt("¿En qué año se lanzó Master of Puppets de Metallica?"); //Respuesta correcta 1986
let pregunta4 = prompt("¿Cuál es el nombre del vocalista orginal de AC/DC?"); //Respuesta correcta Bon Scott
let pregunta5 = prompt("¿Qué banda adqirió su nombre de un instrumento de tortura medieval? \n A) Iron Maiden \n B) Slayer \n C) Megadeth"); //Respuesta correcta A
let pregunta6 = prompt("¿de cuantos integrantes se compone la banda Slipknot?"); //Respuesta correcta 9
let pregunta7 = prompt("¿Qué subgenero del metal es conocido por implementar electrónica en su música? \n A) Metalcore \n B) Deathcore \n C) Industrial Metal"); //Respuesta correcta C
let pregunnta8 = prompt("¿En cuantos grupos ha estado el guitarrista Slash?"); //Respuesta correcta 3
let pregunta9 = prompt("¿Que subgenero del metal se caracteriza por la ausencia de vocales? \n A) Death Metal \n B) Black Metal \n C) Instrumental Metal"); //Respuesta correcta C
let pregunta10 = prompt("¿quien es considerado el padre del rap metal?"); //Respuesta correcta Rage Against The Machine


/*Operadores */