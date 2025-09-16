// E02 — Positivo / Negativo / Cero (versión navegador)
// 1) Entrada: prompt() devuelve TEXTO
const nStr = prompt("Ingresa un número:");

// 2) Conversión a número (decimales permitidos)
const n = parseFloat(nStr);

// 3) Validación: si no es número ⇒ error
if (Number.isNaN(n)) {
  console.log("Error: debes ingresar un número válido.");
} else if (n > 0) {
  console.log("Positivo");
} else if (n < 0) {
  console.log("Negativo");
} else {
  console.log("Cero");
}