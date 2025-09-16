// E04 — Par o Impar (versión navegador)

// Entrada (prompt devuelve TEXTO)
const nStr = prompt("Ingresa un número entero:");

// Conversión a número
const n = parseFloat(nStr);

// Validación: que sea número y ENTERO
// - Number.isNaN(n): verifica conversión fallida
// - n % 1 === 0: truco aritmético para "es entero" (sin usar funciones avanzadas)
if (Number.isNaN(n)) {
  console.log("Error: debes ingresar un número válido.");
} else if (n % 1 !== 0) {
  console.log("Error: ingresa un número ENTERO (sin decimales).");
} else {
  // Proceso: par si el resto de dividir por 2 es 0
  if (n % 2 === 0) {
    console.log("Par");
  } else {
    console.log("Impar");
  }
}