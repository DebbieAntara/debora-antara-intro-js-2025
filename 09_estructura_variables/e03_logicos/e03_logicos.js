// Clase 9 — Ejercicio 3: Lógicos (AND, OR, NOT)
// Solo lo visto en clase: prompt(), booleanos, &&, ||, !, console.log
// Acepta exactamente "true" o "false" (en minúsculas).

// 1) Entrada (strings)
const c1Str = prompt('Ingresa "true" o "false" para condicion1:');
const c2Str = prompt('Ingresa "true" o "false" para condicion2:');

// 2) Validación básica: solo "true" o "false"
const esBooleano = (t) => t === "true" || t === "false";

if (!esBooleano(c1Str)) {
  console.log('Error: valor inválido para condicion1. Escribe "true" o "false".');
} else if (!esBooleano(c2Str)) {
  console.log('Error: valor inválido para condicion2. Escribe "true" o "false".');
} else {
  // 3) Conversión string -> booleano
  const condicion1 = (c1Str === "true");
  const condicion2 = (c2Str === "true");

  // 4) Operaciones lógicas
  const andRes = condicion1 && condicion2;
  const orRes  = condicion1 || condicion2;
  const notC1  = !condicion1;
  const notC2  = !condicion2;

  // 5) Salida
  console.log("condicion1:", condicion1);
  console.log("condicion2:", condicion2);
  console.log("AND (&&):", andRes);
  console.log("OR  (||):", orRes);
  console.log("NOT condicion1 (!):", notC1);
  console.log("NOT condicion2 (!):", notC2);
}
