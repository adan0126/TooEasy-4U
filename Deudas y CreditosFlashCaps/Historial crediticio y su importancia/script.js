// ====== Arreglos con el texto de cada card ======

// --- Card 1: ¿Qué es el historial crediticio? ---
var textosCard1 = [
  "¿Qué es el historial crediticio?",
  "Es el registro de cómo una persona ha manejado sus créditos y deudas a lo largo del tiempo.",
  "Incluye información sobre préstamos, tarjetas, pagos puntuales o atrasos, y se utiliza para determinar la confianza financiera de una persona."
];

// --- Card 2: Importancia del historial crediticio ---
var textosCard2 = [
  "Importancia del historial crediticio:",
  "• Permite acceder a créditos, préstamos o hipotecas con mejores condiciones.",
  "• Refleja el comportamiento financiero del usuario.",
  "• Facilita la aprobación de rentas, servicios o empleos relacionados con finanzas."
];

// --- Card 3: Consejos para construir un buen historial crediticio ---
var textosCard3 = [
  "Consejos para construir un buen historial crediticio:",
  "• Usa el crédito de manera responsable.",
  "• Paga siempre a tiempo.",
  "• No pidas más créditos de los necesarios.",
  "• Revisa tu historial periódicamente.",
  "• Mantén tus deudas bajo control (no excedas el 30% de tu ingreso mensual)."
];

// --- Card 4: Errores comunes ---
var textosCard4 = [
  "Errores comunes:",
  "• No pagar a tiempo.",
  "• Usar todo el límite de crédito disponible.",
  "• Ignorar los estados de cuenta."
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

