const PromptSync = require("prompt-sync")();


var arrOriginal = [];
var arrEjemplo = [];
var dificultad;
var multipIntentos;
var intenCorrec = 0;


for(var i=0; i<20; i++) {
    arrOriginal[i] = PromptSync("Ingresa una letra (da ENTER para terminar el proceso): ");
    arrEjemplo[i] = "-";
    if (arrOriginal[i]==0){
        break;
    }

}

arrEjemplo.pop();

console.log("");
console.log("DIFICULTAD DEL JUEGO3");
console.log("Escribe 1 para la dificultad Fácil");
console.log("Escribe 2 para la dificultad Medio");
console.log("Escribe 3 para la dificultad Difícil");
console.log("Escribe 4 para la dificultad Extremo")
dificultad = PromptSync();
switch (dificultad) {
    case "1":
        multipIntentos = 3;
        break;
    case "2":
        multipIntentos = 2;
        break;
    case "3":
        multipIntentos = 1.5;
        break;
    case "4":
        multipIntentos = 1;
        break;
}

console.log("");
var intentosDf = (arrOriginal.length-1)*multipIntentos
var intento;

console.log(arrEjemplo);

for (i=0; i<intentosDf; i++) {
    intento = PromptSync("Ingresa la letra que vas a adivinar: ");

    for(var j=0; j<arrOriginal.length; j++){
        if (intento == arrOriginal[j]) {
            arrEjemplo[j]=intento;
            console.log("¡Adivinaste!")
            intenCorrec++;
            break;
        }
    }

    console.log(arrEjemplo)

    if (arrEjemplo[j]==intento) {
        console.log("¡Adivinaste!");
    } else {
        console.log("No adivinaste");
    }

    

    if ((intenCorrec+1)==arrOriginal.length) {
        break;
    } else {
        console.log("Tienes "+(intentosDf-(i+1))+" intento(s)");
    }
    console.log("")
}

arrEjemplo.push('');

const equals = (arrOriginal, arrEjemplo) => JSON.stringify(arrOriginal) === JSON.stringify(arrEjemplo);

console.log("")
if (equals(arrOriginal, arrEjemplo)){
    console.log("¡Felicidades, encontraste la palabra!")
} else {
    console.log("Perdiste. Inténtalo de nuevo")
}
