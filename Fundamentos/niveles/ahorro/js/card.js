// ====== Arreglos con el texto de cada card ======
var textosCard1 = [
  "El ahorro es uno de los hábitos más importantes dentro de la educación financiera. Aprender a ahorrar no solo implica guardar dinero, sino saber planificar el uso de tus ingresos para que puedas alcanzar metas y tener tranquilidad ante imprevistos."
];

var textosCard2 = [
  "Según BBVA (2024), el ahorro es la parte de tus ingresos que decides no gastar en el presente y que reservas para un uso futuro. Es una forma de priorizar tu bienestar de mañana sobre el placer o consumo inmediato de hoy.Ahorrar no significa dejar de disfrutar, sino gastar de manera consciente y con propósito, evitando compras impulsivas o innecesarias.",
  "En otras palabras: ahorrar es pagarle al “yo del futuro”."
];

var textosCard3 = [
  "El ahorro es clave para mantener una salud financiera estable. Tener un fondo de dinero reservado te permite:",
  "•	Hacer frente a imprevistos (una reparación, una emergencia médica, pérdida de empleo).",
  "•	Cumplir metas personales (comprar un celular, estudiar, viajar o invertir).",
  "•	Evitar deudas, ya que reduces la necesidad de pedir prestado cuando surge un gasto inesperado.",
  "•	Mejorar tu tranquilidad financiera, al saber que tienes un respaldo para el futuro.",
  "Ahorrar también fomenta la disciplina financiera: te obliga a planificar tus gastos y distinguir entre necesidades y deseos."
];

var textosCard4 = [
  "El ahorro puede clasificarse de distintas formas según su propósito:",
  "•	Ahorro a corto plazo: Se usa para metas próximas, como comprar un artículo o hacer un viaje.",
  "•	Ahorro a mediano plazo: Se destina a objetivos de uno a cinco años, por ejemplo, un enganche para un auto o una computadora nueva.",
  "•	Ahorro a largo plazo: Tiene metas más lejanas, como la jubilación o la compra de una vivienda.",
  "También se puede distinguir entre ahorro formal (en instituciones financieras, con seguridad y generación de intereses) y ahorro informal (guardar dinero en casa o en tandas, sin protección ni rendimiento)."
];

var textosCard5 = [
  "1.	Define un objetivo de ahorro: Decide para qué estás ahorrando: puede ser algo pequeño (unas vacaciones) o algo a largo plazo (comprar un auto o tu retiro). Tener un propósito te motiva a mantener el hábito.",
  "2.	Registra tus ingresos y gastos: Llevar un control de lo que entra y sale de tu dinero te permite ver en qué podrías reducir tus gastos y cuánto puedes destinar al ahorro.",
  "3.	Aplica la regla 50/30/20:",
  "Esta regla sugiere distribuir tu ingreso de la siguiente forma: 50 % para necesidades básicas (renta, alimentación, transporte). 30 % para deseos o gastos personales (salidas, entretenimiento). 20 % para el ahorro o inversiones. No siempre será posible aplicar el 20 %, pero la idea es crear el hábito y ajustarlo según tus posibilidades.",
  "4.	Automatiza tu ahorro: Puedes programar en tu cuenta bancaria una transferencia automática hacia una cuenta de ahorro al recibir tu ingreso. Así, ahorras “sin pensarlo”.",
  "5.	Evita gastar tus ahorros en cosas innecesarias: Considera el ahorro como un gasto fijo más, no como dinero “sobrante”. De esta forma, lo conviertes en parte de tu rutina financiera."
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
