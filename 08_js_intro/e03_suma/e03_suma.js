// E03 — Suma de dos números (versión navegador)
// 1) Entrada: prompt() devuelve TEXTO; pedimos dos valores
const aStr = prompt("Ingresa el primer número:");
const bStr = prompt("Ingresa el segundo número:");

// 2) Conversión: de texto a número decimal
const a = parseFloat(aStr);
const b = parseFloat(bStr);

// 3) Validación: si alguna conversión falla, avisamos
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Error: debes ingresar números válidos en ambos campos.");
} else {
  // 4) Proceso: suma aritmética
  const suma = a + b;

  // 5) Salida: mostramos el resultado en la consola
  console.log("La suma es:", suma);
}