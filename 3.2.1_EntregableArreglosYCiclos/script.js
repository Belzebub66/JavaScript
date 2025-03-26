//Declara un arreglo llamado frutas con varios tipos de frutas.
//Crea un objeto para almacenar la cantidad de cada tipo de fruta.
let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];
//Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
let i=0;
while (i < frutasConTipo.length) {
    i++;
}
console.log("Hay un total de " + i + " frutas en el arreglo.");
//Imprime en la consola la cantidad de cada tipo de fruta.
let critricos = 0;
let pomaceas = 0;
let tropicales = 0;
let bayas = 0;
let drupas = 0;

i=0;
while (i < frutasConTipo.length) {
    if (frutasConTipo[i].tipo == "Cítrico") {
        critricos++;
    } else if (frutasConTipo[i].tipo == "Pomácea") {
        pomaceas++;
    } else if (frutasConTipo[i].tipo == "Tropical") {
        tropicales++;
    } else if (frutasConTipo[i].tipo == "Baya") {
        bayas++;
    } else if (frutasConTipo[i].tipo == "Drupa") {
        drupas++;
    }
    i++;
}
console.log("Hay " + critricos + " frutas cítricas en el arreglo.");
console.log("Hay " + pomaceas + " frutas pomáceas en el arreglo.");
console.log("Hay " + tropicales + " frutas tropicales en el arreglo.");
console.log("Hay " + bayas + " frutas bayas en el arreglo.");
console.log("Hay " + drupas + " frutas drupas en el arreglo.");

//Opcional: intenta implementar la solución con el otro ciclo también (for/while).

for (i=0; i < frutasConTipo.length; i++) {
    if (frutasConTipo[i].tipo == "Cítrico") {
        critricos++;
    } else if (frutasConTipo[i].tipo == "Pomácea") {
        pomaceas++;
    } else if (frutasConTipo[i].tipo == "Tropical") {
        tropicales++;
    } else if (frutasConTipo[i].tipo == "Baya") {
        bayas++;
    } else if (frutasConTipo[i].tipo == "Drupa") {
        drupas++;
    }
}
