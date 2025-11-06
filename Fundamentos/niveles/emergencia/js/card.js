// ====== Arreglos con el texto de cada card ======
var textosCard1 = [
  "La seguridad financiera es la base para una vida económica tranquila y estable. Significa tener la capacidad de enfrentar gastos inesperados sin poner en riesgo tu bienestar ni endeudarte. Una de las mejores formas de lograrla es crear y mantener un fondo de emergencia.",
  "La seguridad financiera se refiere a la tranquilidad de saber que puedes cubrir tus necesidades básicas y enfrentar imprevistos sin depender de préstamos, tarjetas o de otras personas.",
  "No significa tener mucho dinero, sino administrar bien lo que tienes y planear para el futuro."
];

var textosCard2 = [
  "Una persona con seguridad financiera:",
  "•	Tiene control sobre sus ingresos y gastos.",
  "•	Tiene una cuenta con ahorros para emergencias.",
  "•	Evita deudas innecesarias.",
  "•	Se siente tranquila al tomar decisiones económicas."
];

var textosCard3 = [
  "Un fondo de emergencia es una reserva de dinero separada del resto de tus ahorros, destinada exclusivamente a cubrir gastos imprevistos o urgencias. Por ejemplo:",
  "•	Reparaciones del hogar o del automóvil.",
  "•	Gastos médicos no planeados.",
  "•	Pérdida de empleo.",
  "•	Emergencias familiares.",
  "Este fondo no debe usarse para gustos o compras planeadas, sino solo cuando sea realmente necesario."
];

var textosCard4 = [
  "Según BBVA (2024), el fondo ideal debería cubrir entre 3 y 6 meses de tus gastos fijos mensuales.",
  "Esto significa que, si tus gastos básicos (renta, comida, transporte, servicios) suman $8,000 pesos al mes, tu fondo de emergencia debería ser entre $24,000 y $48,000 pesos.",
  "No es necesario reunirlo de inmediato. Puedes empezar con pequeñas cantidades mensuales y hacerlo crecer poco a poco.",
  "Es importante mantenerlo en un lugar seguro y accesible, pero que no te invite a gastarlo fácilmente.",
  "Evita guardarlo en efectivo en casa, ya que puede perder valor con el tiempo o correr riesgo de robo o pérdida."
];

var textosCard5 = [
  "1.	Define tu meta: Calcula cuántos meses de gastos cubrirás con el fondo (3 a 6 meses es lo ideal).",
  "2.	Empieza con lo que puedas: No importa si solo puedes guardar $100 o $200 al mes; lo importante es comenzar y mantener la constancia.",
  "3.	Crea una cuenta separada: No mezcles tu fondo con el dinero del día a día. Así evitas gastarlo por error.",
  "4.	Automatiza tu ahorro: Programa transferencias automáticas hacia tu fondo. Esto te ayuda a mantener la disciplina.",
  "5.	Revisa y ajusta: Si tus gastos aumentan o disminuyen, ajusta el tamaño de tu fondo.",
  "6.	Solo úsalo en emergencias reales: Evita gastarlo en compras impulsivas. Su propósito es protegerte en situaciones difíciles."
]

var textosCard6 = [
  "El tener un fondo de emergencia representa:",
  "•	Tranquilidad ante cualquier imprevisto.",
  "•	Que puedes evitar endeudarte con préstamos o tarjetas.",
  "•	Metas de ahorro sin interrupciones.",
  "•	Disciplina financiera.",
  "Tener este fondo es como ponerle un cinturón de seguridad a tus finanzas: esperas no usarlo, pero cuando lo necesitas, te salva de un golpe económico fuerte."
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
