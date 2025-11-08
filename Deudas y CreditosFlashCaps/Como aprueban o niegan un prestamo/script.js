// ====== Arreglos con el texto de cada card ======

// --- Card 1: Introducción ---
var textosCard1 = [
  "Criterios de las instituciones financieras",
  "Antes de aprobar un préstamo o una línea de crédito, las instituciones financieras analizan una serie de factores que les permiten determinar si una persona o empresa tiene la capacidad y la responsabilidad necesarias para cumplir con los pagos.",
  "Este proceso se conoce como evaluación crediticia, y su objetivo principal es reducir el riesgo de impago."
];

// --- Card 2: Historial crediticio ---
var textosCard2 = [
  "Historial crediticio",
  "Es el registro del comportamiento de pago del solicitante. Incluye información sobre créditos anteriores, pagos puntuales o atrasados, y el nivel de endeudamiento actual.",
  "Un buen historial demuestra responsabilidad y aumenta las posibilidades de aprobación. Por el contrario, atrasos o incumplimientos pueden limitar el acceso a nuevos créditos o incrementar las tasas de interés."
];

// --- Card 3: Capacidad de pago ---
var textosCard3 = [
  "Capacidad de pago",
  "Se refiere a la proporción de los ingresos que una persona puede destinar al pago de deudas sin comprometer sus necesidades básicas.",
  "Los bancos revisan el salario, ingresos adicionales y gastos mensuales para determinar si el solicitante podrá asumir el compromiso financiero sin riesgo de sobreendeudamiento."
];

// --- Card 4: Estabilidad laboral ---
var textosCard4 = [
  "Estabilidad laboral",
  "La antigüedad y el tipo de empleo son indicadores de seguridad económica.",
  "Las instituciones financieras prefieren otorgar créditos a personas con trabajos formales, ingresos constantes y antigüedad laboral comprobable, ya que esto reduce la probabilidad de incumplimiento."
];

// --- Card 5: Relación con el banco ---
var textosCard5 = [
  "Relación con el banco",
  "Los clientes que mantienen una buena relación con su institución financiera (por ejemplo, mediante cuentas de ahorro, inversiones o créditos previos bien manejados) suelen tener mayores facilidades para obtener nuevos préstamos.",
  "La confianza construida a lo largo del tiempo juega un papel importante en las decisiones de aprobación."
];

// --- Card 6: Garantías o avales ---
var textosCard6 = [
  "Garantías o avales",
  "En algunos casos, se solicitan bienes o personas que respalden el crédito.",
  "Las garantías (como una propiedad o un vehículo) o los avales (personas que se comprometen a pagar si el titular no lo hace) representan una seguridad adicional para el banco en caso de incumplimiento."
];

// --- Card 7: Recomendaciones para obtener un préstamo ---
var textosCard7 = [
  "Recomendaciones para obtener un préstamo",
  "• Mantén un historial crediticio positivo y revisa tu reporte con regularidad.",
  "• No acumules deudas innecesarias ni excedas tu capacidad de pago.",
  "• Presenta comprobantes de ingresos actualizados y verificables.",
  "• Solicita únicamente la cantidad que realmente necesitas y que podrás pagar.",
  "• Conserva estabilidad en tu empleo y evita cambios laborales frecuentes antes de solicitar un crédito.",
  "• Ahorra y demuestra capacidad de planificación financiera, ya que los bancos valoran a los clientes con hábitos responsables."
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
mostrarTextoCard(textosCard5, "texto-card5");
mostrarTextoCard(textosCard6, "texto-card6");
mostrarTextoCard(textosCard7, "texto-card7");

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
