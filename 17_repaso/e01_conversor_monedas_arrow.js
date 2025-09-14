// e01_conversor_monedas_arrow.js — Clase 17 E1
// Conversor: USD -> moneda local (ej. soles) usando una tasa ingresada
const prompt = require("prompt-sync")({ sigint: true });

// Arrow function: convierte y redondea a 2 decimales
const aMoneda = (usd, tasa) => usd * tasa;

const usdStr = prompt("Monto en USD: ");
const tasaStr = prompt("Tasa de cambio (ej. 3.80 para PEN): ");

const usd = Number(usdStr);
const tasa = Number(tasaStr);

if (!Number.isFinite(usd) || usd < 0) {
  console.log("Error: el monto en USD debe ser un número >= 0.");
} else if (!Number.isFinite(tasa) || tasa <= 0) {
  console.log("Error: la tasa debe ser un número > 0.");
} else {
  const resultado = aMoneda(usd, tasa);

  // Formato bonito en soles (PEN). Cambia 'PEN' y 'es-PE' si tu profe pide otra moneda/locale.
  const fmtPEN = new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" });
  const fmtUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  console.log(`USD: ${fmtUSD.format(usd)}  ->  PEN: ${fmtPEN.format(resultado)}`);
}
