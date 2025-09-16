// E05 — Saludo personalizado (versión base, sin trim)

// Entrada
const nombre = prompt("¿Cómo te llamas?");

// Validación básica
// - prompt() devuelve null si presionan Cancelar
// - string vacío "" si dan Enter sin escribir
if (nombre === null) {
  console.log("Operación cancelada.");
} else if (nombre === "") {
  console.log("Error: debes ingresar un nombre.");
} else {
  // Proceso + Salida
  console.log("Hola, " + nombre + "!");
}gi