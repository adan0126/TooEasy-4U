// ====== Arreglos con el texto de cada card ======

// --- Card 1: Introducción general ---
var textosCard1 = [
  "Las tarjetas de crédito Oro y Platino representan niveles más altos dentro de las categorías de crédito.",
  "Están diseñadas para personas con mayor capacidad económica, buen historial crediticio y necesidades financieras más amplias.",
  "Estas tarjetas ofrecen límites de crédito elevados y beneficios exclusivos, pero también suelen implicar comisiones más altas."
];

// --- Card 2: Tarjeta Oro (características y ventajas) ---
var textosCard2 = [
  "1. Tarjeta Oro",
  "Las tarjetas Oro son una evolución de las tarjetas clásicas. Están pensadas para usuarios con ingresos medios-altos que buscan beneficios adicionales sin llegar a los niveles más exclusivos.",
  "Características principales:",
  "• Límite de crédito alto.",
  "• Programas de recompensas y puntos por compras.",
  "• Promociones especiales en viajes, restaurantes o entretenimiento.",
  "• Seguros incluidos, como protección de compras y asistencia en viajes.",
  "• Comisión anual más elevada que las tarjetas básicas o clásicas.",
  "Ventajas:",
  "• Mayor flexibilidad para gastos grandes.",
  "• Acceso a beneficios y descuentos exclusivos.",
  "• Mejora del historial crediticio con un buen manejo."
];

// --- Card 3: Tarjeta Oro (recomendaciones) ---
var textosCard3 = [
  "Recomendaciones para el uso de una Tarjeta Oro:",
  "• Úsala con disciplina, ya que los límites altos pueden llevar a gastar más de lo necesario.",
  "• Aprovecha las recompensas y beneficios, pero paga el total mensual para evitar intereses.",
  "• Evalúa si los beneficios realmente compensan la comisión anual.",
  "• Mantén un registro de tus gastos para no exceder tu presupuesto."
];

// --- Card 4: Tarjeta Platino (características y ventajas) ---
var textosCard4 = [
  "2. Tarjeta Platino",
  "Las tarjetas Platino son productos premium que ofrecen servicios exclusivos y atención preferente.",
  "Están dirigidas a personas con ingresos altos y excelente comportamiento crediticio.",
  "Características principales:",
  "• Límite de crédito muy elevado.",
  "• Programas de recompensas premium y acceso a salas VIP en aeropuertos.",
  "• Seguros de viaje, asistencia médica internacional y protección contra fraudes.",
  "• Servicios personalizados (por ejemplo, concierge o atención preferente).",
  "• Comisión anual considerablemente mayor que otros niveles.",
  "Ventajas:",
  "• Amplio respaldo financiero y beneficios internacionales.",
  "• Ideal para quienes viajan con frecuencia o realizan compras de alto valor.",
  "• Refuerza la reputación crediticia ante las instituciones financieras."
];

// --- Card 5: Diferencias entre Oro y Platino ---
var textosCard5 = [
  "Diferencias entre Tarjeta Oro y Tarjeta Platino:",
  "• Límite de crédito: Alto (Oro) / Muy alto (Platino).",
  "• Ingreso requerido: Medio-alto (Oro) / Alto (Platino).",
  "• Beneficios: Recompensas y seguros básicos (Oro) / Servicios premium y atención personalizada (Platino).",
  "• Comisión anual: Moderada (Oro) / Alta (Platino).",
  "• Usuario ideal: Personas con finanzas estables (Oro) / Personas con alto poder adquisitivo y uso frecuente (Platino).",
  "Recomendaciones generales:",
  "• Asegúrate de que los beneficios compensen el costo anual.",
  "• Mantén un uso responsable del crédito para no comprometer tus finanzas personales.",
  "• No solicites una tarjeta de nivel superior solo por estatus; úsala solo si se adapta a tus necesidades financieras."
];

// ====== Función que muestra el contenido de los arreglos ======
function mostrarTextoCard(textos, idContenedor) {
  var contenedor = document.getElementById(idContenedor);
  contenedor.innerHTML = ""; // Limpiar contenido previo

  for (var i = 0; i < textos.length; i++) {
    var p = document.createElement("p");
    p.textContent = textos[i];
    contenedor.appendChild(p);
  }
}

// ====== Control de las cards ======
var cards = document.querySelectorAll(".card");
var indiceActual = 0;

// Mostrar solo la primera card
for (var i = 1; i < cards.length; i++) {
  cards[i].style.display = "none";
}

// Mostrar textos iniciales
mostrarTextoCard(textosCard1, "texto-card1");
mostrarTextoCard(textosCard2, "texto-card2");
mostrarTextoCard(textosCard3, "texto-card3");
mostrarTextoCard(textosCard4, "texto-card4");
mostrarTextoCard(textosCard5, "texto-card5");

// Evento: al hacer clic, girar la card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const inner = card.querySelector(".card-inner");
    inner.classList.toggle("flipped");
  });
});

// Botones de navegación
document.getElementById("nextCard").addEventListener("click", () => {
  cambiarCard(1);
});

document.getElementById("prevCard").addEventListener("click", () => {
  cambiarCard(-1);
});

// ====== Función para cambiar entre cards ======
function cambiarCard(direccion) {
  cards[indiceActual].style.display = "none";
  indiceActual = (indiceActual + direccion + cards.length) % cards.length;
  cards[indiceActual].style.display = "block";
}
