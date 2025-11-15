// ====== Arreglos con el texto de cada card ======
var textosCard1 = [
  "Los intereses son el costo del dinero. Representan una cantidad adicional que se paga o se recibe dependiendo del tipo de operación que se realice con el banco.",
  "Cuando el banco te presta dinero (como en un crédito o préstamo), tú pagas intereses al banco. Cuando tú depositas o ahorras dinero en el banco, el banco te paga intereses a ti por permitirle usar tu dinero.",
  "En otras palabras, los intereses son el “precio” por usar dinero ajeno o el “premio” por ahorrar."
];

var textosCard2 = [
  "1.	Interés activo: Es el que el banco cobra cuando presta dinero a un cliente. Por ejemplo, cuando solicitas un préstamo personal o usas una tarjeta de crédito.",
  "2.	Interés pasivo: Es el que el banco paga a los clientes por mantener su dinero depositado en cuentas de ahorro o inversiones.",
  "3.	Interés simple: Se calcula solo sobre el monto original (capital).",
  "4.	Interés compuesto: Se calcula sobre el capital más los intereses generados anteriormente, haciendo que el dinero crezca más rápido."
];

var textosCard3 = [
  "Las comisiones son cobros que realiza el banco por ofrecer determinados servicios o mantener activa una cuenta. Son una forma en que las instituciones financieras cubren sus costos operativos y administrativos.",
  "Cada banco puede establecer diferentes comisiones según el tipo de producto y las condiciones de uso, por eso es importante leer el contrato y comparar opciones antes de abrir una cuenta."
];

var textosCard4 = [
  "1.	Comisión por manejo de cuenta: Cobro por mantener la cuenta activa, aunque no se use.",
  "2.	Comisión por inactividad: Se aplica cuando no hay movimientos durante un periodo determinado.",
  "3.	Comisión por retiro en cajeros de otro banco: Se cobra al usar cajeros automáticos que no pertenecen a tu institución.",
  "4.	Comisión por saldo mínimo: Se cobra si el saldo de la cuenta baja de una cantidad establecida.",
  "5.	Comisión por transferencia o pago tardío: En tarjetas de crédito o préstamos, se cobra si no se paga a tiempo."
];

var textosCard5 = [
    "Entender cómo funcionan los intereses y las comisiones te ayuda a tomar mejores decisiones financieras.",
    "Saber cuánto cobra o paga un banco te permite comparar opciones, elegir la más conveniente y evitar pagar de más por servicios que podrías obtener sin costo en otra institución."
]

var textosCard6 = [
  "•	Elige cuentas sin comisiones o con beneficios por mantener cierta actividad.",
  "•	Realiza tus operaciones en cajeros o canales digitales del mismo banco, de lo contrario podrías pagar una comisión.",
  "•	Evita dejar la cuenta inactiva por largos periodos.",
  "•	Revisa tu estado de cuenta para identificar cobros no autorizados.",
  "•	Si tu cuenta ya no recibe depósitos de nómina, pregunta si se convertirá en una cuenta tradicional con comisiones."
]

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
mostrarTextoCard(textosCard6, "texto-card6");

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
