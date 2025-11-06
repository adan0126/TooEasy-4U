// Títulos de cada tarjeta (frente)
var titulos = [
  "¿Qué significa organizar tu sueldo?",
  "Categorías: necesidades, deseos y ahorro",
  "Métodos para dividir el ingreso",
  "Flujo mensual paso a paso",
  "Errores comunes",
  "Ejemplo práctico"
];

// Textos (reverso) — 6 tarjetas
var textosCard1 = [
  "Organizar el sueldo es separar tu ingreso en categorías desde que lo recibes.",
  "Así aseguras cubrir necesidades, disfrutar deseos con control y avanzar en ahorro.",
  "Puedes hacerlo con sobres/cuentas, apps o una simple hoja de cálculo."
];
var textosCard2 = [
  "• Necesidades: renta, comida básica, transporte, salud, servicios.",
  "• Deseos: ocio, apps, ropa opcional, gustos.",
  "• Ahorro/Deudas: fondo de emergencia, metas, pagos a crédito."
];
var textosCard3 = [
  "• 50/30/20 (clásico): 50% necesidades, 30% deseos, 20% ahorro/deudas.",
  "• Alternativas si la renta es alta: 60/20/20 o 70/20/10.",
  "La clave es mantener un % de ahorro constante."
];
var textosCard4 = [
  "1) Calcula tu ingreso neto mensual.",
  "2) Asigna montos por categoría (págate primero el ahorro).",
  "3) Registra gastos y corrige desvíos semanalmente.",
  "4) Revisa a fin de mes y ajusta límites."
];
var textosCard5 = [
  "• No registrar gastos.",
  "• Mezclar dinero de ahorro con gastos diarios.",
  "• Subestimar gastos variables (comida fuera, apps).",
  "• Pagar primero deseos y dejar el ahorro al final."
];
var textosCard6 = [
  "Ingreso $10,000 → $5,000 necesidades / $3,000 deseos / $2,000 ahorro.",
  "Si un mes sube la luz, reduce temporalmente deseos para no tocar el ahorro."
];

// ====== Motor de tarjetas (NO tocar) ======
function mostrarTextoCard(textos, idContenedor) {
  var cont = document.getElementById(idContenedor);
  cont.innerHTML = "";
  textos.forEach(t => { var p = document.createElement("p"); p.textContent = t; cont.appendChild(p); });
}

var cards = document.querySelectorAll(".card");
var indiceActual = 0;

// Pinta títulos
document.querySelectorAll(".card .card-front .card-title").forEach((el, i) => el.textContent = titulos[i] || `Tarjeta ${i+1}`);

// Oculta todas menos la primera
for (var i = 1; i < cards.length; i++) cards[i].style.display = "none";

// Muestra textos
mostrarTextoCard(textosCard1, "texto-card1");
mostrarTextoCard(textosCard2, "texto-card2");
mostrarTextoCard(textosCard3, "texto-card3");
mostrarTextoCard(textosCard4, "texto-card4");
mostrarTextoCard(textosCard5, "texto-card5");
mostrarTextoCard(textosCard6, "texto-card6");

// Flip al hacer clic
cards.forEach(card => {
  card.addEventListener("click", () => card.querySelector(".card-inner").classList.toggle("flipped"));
});

// Navegación
document.getElementById("nextCard").addEventListener("click", () => cambiarCard(1));
document.getElementById("prevCard").addEventListener("click", () => cambiarCard(-1));
function cambiarCard(dir){
  cards[indiceActual].style.display = "none";
  indiceActual = (indiceActual + dir + cards.length) % cards.length;
  cards[indiceActual].style.display = "block";
}
