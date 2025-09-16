// Clase 9 — E2: En rango (versión navegador)
// Conceptos: const para constantes, prompt() (string), parseFloat, validación, comparadores, console.log

// Constantes de rango (ajusta si tu consigna usa otros valores)
const RANGO_MIN = 1;
const RANGO_MAX = 10;

// Entrada
const nStr = prompt(`Ingresa un número entre ${RANGO_MIN} y ${RANGO_MAX}:`);

// Conversión
const n = parseFloat(nStr);

// Validación
if (Number.isNaN(n)) {
  console.log("Error: número inválido.");
} else if (n >= RANGO_MIN && n <= RANGO_MAX) {
  console.log("En rango");
} else {
  console.log("Fuera de rango");
}