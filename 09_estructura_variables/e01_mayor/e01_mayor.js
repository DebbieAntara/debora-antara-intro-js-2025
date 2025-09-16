// Clase 9 — E1: Mayor de dos números (versión navegador)
// Conceptos usados: variables (vinculaciones), parseo a número, comparaciones estrictas, consola.
// - prompt() devuelve TEXTO (string)
// - parseFloat convierte a número (coerción explícita controlada)
// - Number.isNaN valida que el texto sea un número real

let numero1Str = prompt("Ingresa el primer número:");
let numero2Str = prompt("Ingresa el segundo número:");

let numero1 = parseFloat(numero1Str);
let numero2 = parseFloat(numero2Str);

if (Number.isNaN(numero1)) {
  console.log("Error: dato inválido en el primer número.");
} else if (Number.isNaN(numero2)) {
  console.log("Error: dato inválido en el segundo número.");
} else if (numero1 > numero2) {
  console.log("El mayor es:", numero1);
} else if (numero2 > numero1) {
  console.log("El mayor es:", numero2);
} else {
  console.log("Son iguales.");
}const prompt = require("prompt-sync")({ sigint: true });
