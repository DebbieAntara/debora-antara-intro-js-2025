// E01 — Doble de un número (versión navegador)
// 1) Pedimos un número al usuario (prompt devuelve TEXTO)
const nStr = prompt("Ingresa un número:");

// 2) Convertimos ese texto a número decimal
const n = parseFloat(nStr);

// 3) Validamos: si la conversión falló, n será NaN (Not a Number)
if (Number.isNaN(n)) {
  console.log("Error: debes ingresar un número válido.");
} else {
  // 4) Proceso: calculo del doble
  const doble = n * 2;

  // 5) Salida: mostramos el resultado en la consola del navegador
  console.log("El doble es:", doble);
}