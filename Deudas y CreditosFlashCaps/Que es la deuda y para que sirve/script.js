// ====== Arreglos con el texto de cada card ======

// --- Card 1: ¿Qué es una deuda? ---
var textosCard1 = [
  "¿Qué es una deuda?",
  "Una deuda es un compromiso financiero que se adquiere al recibir dinero, bienes o servicios con la obligación de devolver su valor en el futuro.",
  "Las deudas pueden provenir de préstamos, tarjetas de crédito, hipotecas o compras a plazos.",
  "Las deudas son útiles cuando se utilizan para alcanzar metas financieras importantes, como estudiar, comprar una vivienda o invertir en un negocio.",
  "Sin embargo, si no se administran bien, pueden convertirse en un problema para la salud económica personal."
];

// --- Card 2: ¿Para qué sirve la deuda? ---
var textosCard2 = [
  "¿Para qué sirve la deuda?",
  "• Permite acceder a bienes o servicios sin pagar el total de inmediato.",
  "• Facilita invertir en educación, vivienda o negocio.",
  "• Ayuda a construir un historial crediticio si se paga puntualmente."
];

// --- Card 3: Tipos de deuda ---
var textosCard3 = [
  "Tipos de deuda:",
  "• Buena deuda: Se usa para generar valor o mejorar la situación financiera (por ejemplo, un crédito educativo o hipotecario).",
  "• Mala deuda: Se usa para gastos innecesarios o de consumo excesivo que no generan beneficios futuros."
];

// --- Card 4: Consecuencias y recomendaciones ---
var textosCard4 = [
  "Consecuencias del endeudamiento excesivo:",
  "• Afecta la capacidad de pago mensual.",
  "• Reduce el ahorro disponible.",
  "• Daña el historial crediticio.",
  "",
  "Recomendaciones:",
  "• No adquieras más deuda de la que puedes pagar.",
  "• Prioriza las deudas con intereses altos.",
  "• Paga a tiempo para evitar cargos adicionales."
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
