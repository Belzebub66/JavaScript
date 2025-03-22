//Estructura de control if (si...entonces)
/*
La estructura de control if (si...entonces) es una estructura de control que permite evaluar una condición y ejecutar un bloque de código si la condición se cumple.

sintaxis:
if(condición){
    bloque de código
}

En caso de que la condición no se cumpla, entonces el codigo a ejecutar no se ejecuta

El código dentro de unas llaves {} se conoce como bloque de código


if(condición){
    bloque de código
}else{
    bloque de código
}

En caso de que la condición no se cumpla, entonces se ejecutará el bloque de código que se encuentra dentro de las llaves del else


if(condición1){
    bloque de código si condición1 es verdadera
}else if(condición2){
    bloque de código si condición2 es verdadera pero condición1 no lo es
}else{
    bloque de código si ninguna de las condiciones anteriores se cumple
}
*/
let edad = 19;
let traeDNI = true;
let peliculaDeseada = "Home Coming";

//TRuco: cuando comparamos booleanos no es necesario utilizar el operador de igualdad
if(edad >= 18 && traeDNI){
    console.log("Puede ingresar a ver la pelicula");
    if(peliculaDeseada === "Home Coming"){
        console.log("La pelicula que desea ver esta disponible y es su favorita");
    }else if(peliculaDeseada === "Iron!"){
        console.log("La pelicula que desea ver esta disponible y le agrada");
    }else if(peliculaDeseada === "End Game"){
        console.log("La pelicula que desea ver esta disponible y le da igual");
    }else{
        console.log("La pelicula que desea ver no esta disponible y el usuario no desea ver otra");
    }
}

