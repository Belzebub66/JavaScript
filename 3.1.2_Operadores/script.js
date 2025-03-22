// Objetivo: Mostrar el uso de los operadores en JavaScript

//Operador de asignación = nos permite asignar un valor a una variable
let x = 5;
let y = 10;

x=9;
//Operador de concatenación + nos permite concatenar cadenas de texto
//Una expresión puede ser: una variable, un valor, una operación matemática, etc.
//Operadores matemáticos
console.log(x + " + " + y + " = " + (x + y)); //Operador de suma
console.log(x + " - " + y + " = " + (x - y)); //Operador de resta
console.log(x + " * " + y + " = " + (x * y)); //Operador de multiplicación
console.log(x + " / " + y + " = " + (x / y)); //Operador de división

//Operación modulo, nos permite obtener el residuo de una división
console.log(5 + " % " + 1 + " = " + (5 % 1)); //Operador de módulo
console.log(5 + " % " + 2 + " = " + (5 % 2)); //Operador de módulo
console.log(5 + " % " + 3 + " = " + (5 % 3)); //Operador de módulo
console.log(5 + " % " + 4 + " = " + (5 % 4)); //Operador de módulo
console.log(5 + " % " + 5 + " = " + (5 % 5)); //Operador de módulo

//Operadores combinados
let var1 = 10;
console.log(var1); //10
var1 += 5; // var1 = var1 + 5
console.log(var1); //15 este operador suma y asigna al mismo tiempo
var1 -= 7; // var1 = var1 - 5
console.log(var1); //8 este operador resta y asigna al mismo tiempo
var1 *= 2; // var1 = var1 * 2
console.log(var1); //16 seria lo mismo a escribir var1 = var1 * 2

//Operador incremento
let var2 = 0;
console.log(var2); //0
var2++; // var2 = var2 + 1
console.log(var2); //1
var2++; // var2 = var2 + 1
console.log(var2); //2

//Operador decremento
let var3 = 5;
console.log(var3); //5
var3--; // var3 = var3 - 1
console.log(var3); //4
var3--; // var3 = var3 - 1
console.log(var3); //3


//Operadores de comparación
console.log("5 == '5' - >" + (5=='5')); //true
console.log("5" == 5)
console.log("5 === '5' - >" + (5=== '5')); //false. El operador === compara el valor y el tipo de dato

console.log("18 != 17 - >" + (18 != 17)); //true
console.log("18 != '18' - >" + (18 != '18')); //false. 
console.log("18 !== '18' - >" + (18 !== '18')); //true


let varmaj = 24;
let varmin = 12;
console.log("varmaj > varmin - >" + (varmaj > varmin)); //true
console.log("varmaj < varmin - >" + (varmaj < varmin)); //false

let varequal = 24;
console.log("varequal == varmaj - >" + (varequal == varmaj)); //true
console.log("varequal === varmaj - >" + (varequal === varmaj)); //true


//Operadores lógicos
/* 
Operador AND (&&) - Solo devuelve true si ambos operandos son verdaderos
true && true -> true
true && false -> false
false && true -> false
false && false -> false

Operador OR (||) - Devuelve true si al menos uno de los operandos es verdadero
true || true -> true
true || false -> true
false || true -> true
false || false -> false

Operador NOT (!) - Devuelve true si el operando es falso
!true -> false
!false -> true

Operador XOR (^) - Devuelve true si uno de los operandos es verdadero y el otro falso
true ^ true -> false
true ^ false -> true
false ^ true -> true
false ^ false -> false
*/

let edad = 18;
let traeDNI = true;
console.log("edad >= 18 && traeDNI - >", (edad >= 18 && traeDNI)); //true
traeDNI = false;
console.log("edad >= 18 && traeDNI - >", (edad >= 18 && traeDNI)); //false

let especie = "perro";
console.log("Especie mascota", especie);
console.log("especie == 'perro' || especie == 'gato' - >", (especie == 'perro' || especie == 'gato')); //true

especie = "gato";
console.log("Especie mascota", especie);
console.log("especie == 'perro' || especie == 'gato' - >", (especie == 'perro' || especie == 'gato')); //true

especie = "conejo";
console.log("Especie mascota", especie);
console.log("especie == 'perro' || especie == 'gato' - >", (especie == 'perro' || especie == 'gato')); //true


console.log("!true - >", !true); //false
console.log("!false - >", !false); //true

edad = 19;
console.log("!edad >= 18 ->", (!(edad >= 18))); //true