let nota = prompt("Ingrese su nota");
console.log("su nota es", nota, "por lo tanto: ");

if (nota >100){
    console.log("No es una nota válida");
}else if (nota >= 90) {
  console.log("Ha aprobado con nota excelente");
} else if (nota >= 75) {
  console.log("Ha aprobado con calificaión de bien");
} else if (nota >= 60) {
  console.log("Ha aprobado con nota de suficiente");
} else {
  console.log("Ha reprobado, lo sentimos");
}