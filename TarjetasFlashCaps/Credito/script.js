// ====== Arreglos con el texto de cada card ======

// --- Card 1: ¿Qué es una tarjeta de crédito? ---
var textosCard1 = [
  "Una tarjeta de crédito es un medio de pago que permite al usuario utilizar dinero prestado por el banco o institución financiera para realizar compras o pagar servicios.",
  "A diferencia de la tarjeta de débito, el dinero no se descuenta directamente de tu cuenta, sino que el banco te otorga un crédito que deberás pagar posteriormente, ya sea de forma total o en mensualidades.",
  "El uso responsable de una tarjeta de crédito puede ayudarte a construir un historial crediticio positivo, lo cual será útil para acceder a préstamos, hipotecas u otros productos financieros en el futuro."
];

// --- Card 2: ¿Cómo funciona una tarjeta de crédito? ---
var textosCard2 = [
  "Cada tarjeta tiene un límite de crédito, que es la cantidad máxima que el banco autoriza gastar.",
  "Durante el mes, puedes hacer compras hasta ese límite y, al finalizar el periodo, recibirás un estado de cuenta con:",
  "• Fecha de corte: día en que se resumen todas las compras realizadas.",
  "• Fecha de pago: día límite para pagar sin generar intereses.",
  "• Pago mínimo: cantidad mínima que puedes pagar para evitar atrasos, aunque pagar solo eso genera intereses.",
  "• Pago total: monto que debes cubrir si quieres evitar cualquier interés.",
  "Si pagas el total antes de la fecha límite, no se generan intereses. Si pagas una parte, el banco cobrará intereses sobre el saldo pendiente."
];

// --- Card 3: Diferencias entre tarjeta de débito y crédito ---
var textosCard3 = [
  "Diferencias principales entre tarjeta de débito y tarjeta de crédito:",
  "• Origen del dinero: En la tarjeta de débito el dinero proviene de tu cuenta bancaria; en la de crédito proviene del préstamo otorgado por el banco.",
  "• Pago de compras: La tarjeta de débito descuenta el dinero de forma inmediata; la de crédito permite pagar al final del periodo.",
  "• Posibilidad de deuda: La tarjeta de débito no genera deudas; la de crédito puede generar intereses si no se paga completo.",
  "• Construcción de historial crediticio: La tarjeta de débito no aplica; la de crédito sí ayuda a construir historial.",
  "• Riesgo financiero: Bajo en débito; medio o alto en crédito si no se administra bien."
];

// --- Card 4: Ventajas de la tarjeta de crédito ---
var textosCard4 = [
  "Ventajas de la tarjeta de crédito:",
  "• Permite comprar a plazos productos o servicios sin tener el dinero completo en ese momento.",
  "• Ayuda a crear historial crediticio si se usa de manera responsable.",
  "• Ofrece beneficios como programas de recompensas, puntos, millas o promociones.",
  "• Brinda protección ante fraudes o compras no reconocidas, ya que el dinero no se descuenta directamente de tu cuenta."
];

// --- Card 5: Riesgos y buenas prácticas ---
var textosCard5 = [
  "Riesgos y buenas prácticas:",
  "Aunque las tarjetas de crédito ofrecen flexibilidad, un mal uso puede causar endeudamiento excesivo.",
  "Para mantener una buena salud financiera:",
  "• Usa la tarjeta solo para gastos planeados.",
  "• Paga siempre el total del estado de cuenta para evitar intereses.",
  "• No acumules varias deudas al mismo tiempo.",
  "• Revisa tu historial crediticio con regularidad.",
  "• Evita retirar dinero en efectivo con la tarjeta de crédito, ya que genera intereses altos desde el primer día."
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
