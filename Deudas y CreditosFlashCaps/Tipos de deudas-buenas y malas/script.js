// ====== Arreglos con el texto de cada card ======

// --- Card 1: Deudas buenas ---
var textosCard1 = [
  " Deudas buenas",
  "Las deudas buenas son aquellas que te ayudan a mejorar tu situación financiera, aumentar tu patrimonio o generar ingresos a futuro.",
  "En otras palabras, son compromisos financieros que aportan un beneficio real y te acercan a tus metas.",
  "Ejemplos comunes:",
  "• Crédito educativo: te permite invertir en tu formación profesional y aumentar tus oportunidades laborales.",
  "• Crédito hipotecario: te ayuda a adquirir un bien que con el tiempo puede aumentar su valor.",
  "• Crédito para negocio: sirve para invertir en un proyecto que puede generar ganancias a largo plazo.",
  " En resumen: una deuda buena debe generar valor, no solo gastos."
];

// --- Card 2: Deudas malas ---
var textosCard2 = [
  " Deudas malas",
  "Son aquellas que se adquieren para cubrir gustos momentáneos o gastos que no generan ningún beneficio económico o personal duradero.",
  "Generalmente se relacionan con el consumo impulsivo y con el uso excesivo de las tarjetas de crédito.",
  "Ejemplos frecuentes:",
  "• Comprar ropa o tecnología solo por moda.",
  "• Viajes o fiestas pagados con crédito sin plan de pago.",
  "• Endeudarse por caprichos o compras no planificadas.",
  "Estas deudas suelen tener intereses altos y pueden llevarte a un círculo de endeudamiento si no se controlan."
];

// --- Card 3: Cómo identificar una deuda buena ---
var textosCard3 = [
  "Cómo identificar una deuda buena:",
  "Tiene una tasa de interés razonable y acorde a tu capacidad de pago.",
  "Aumenta tu patrimonio, conocimientos o calidad de vida.",
  "Tiene un propósito planificado y medido (no se toma por impulso).",
  "Su pago no afecta tus necesidades básicas ni tu estabilidad financiera.",
  "",
  "Si la deuda te deja algo valioso o te acerca a tus metas, probablemente sea buena."
];

// --- Card 4: Cómo evitar las deudas malas ---
var textosCard4 = [
  "Cómo evitar las deudas malas:",
  "• Evita las compras impulsivas: antes de comprar, pregúntate si realmente lo necesitas.",
  "• No gastes más de lo que ganas: mantén tus deudas por debajo del 30% de tus ingresos.",
  "• Compara opciones de crédito: revisa tasas de interés, plazos y comisiones.",
  "• Crea un presupuesto mensual: así sabrás cuánto puedes destinar al pago de deudas.",
  "• Ahorra antes de endeudarte: si puedes cubrir una parte en efectivo, el crédito será menor y más fácil de pagar.",
  "",
  "Recuerda: las deudas no son malas por sí mismas; el problema es cómo y para qué se usan."
];

// ====== Función que muestra el contenido de los arreglos ======
function mostrarTextoCard(textos, idContenedor) {
  var contenedor = document.getElementById(idContenedor);
  contenedor.innerHTML = ""; // Limpiar contenido previo

  textos.forEach((texto) => {
    var p = document.createElement("p");
    p.textContent = texto;
    contenedor.appendChild(p);
  });
}

// ====== Control de las cards ======
var cards = document.querySelectorAll(".card");
var indiceActual = 0;

// Mostrar solo la primera card
cards.forEach((card, i) => {
  if (i !== 0) card.style.display = "none";
});

// Mostrar textos iniciales
mostrarTextoCard(textosCard1, "texto-card1");
mostrarTextoCard(textosCard2, "texto-card2");
mostrarTextoCard(textosCard3, "texto-card3");
mostrarTextoCard(textosCard4, "texto-card4");

// Evento: al hacer clic, girar la card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.querySelector(".card-inner").classList.toggle("flipped");
  });
});

// Botones de navegación
document.getElementById("nextCard").addEventListener("click", () => cambiarCard(1));
document.getElementById("prevCard").addEventListener("click", () => cambiarCard(-1));

// ====== Función para cambiar entre cards ======
function cambiarCard(direccion) {
  cards[indiceActual].style.display = "none";
  indiceActual = (indiceActual + direccion + cards.length) % cards.length;
  cards[indiceActual].style.display = "block";
}
