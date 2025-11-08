// ====== Arreglos con el texto de cada card ======

// --- Card 1: ¿Qué son los tipos de tarjeta de crédito? ---
var textosCard1 = [
  "Las tarjetas de crédito se clasifican en distintos tipos según los beneficios que ofrecen, el nivel de ingresos del cliente y los servicios adicionales que incluyen.",
  "El tipo de tarjeta que una persona puede obtener depende de su capacidad de pago, su historial crediticio y la relación con el banco o institución financiera."
];

// --- Card 2: Tarjeta de crédito básica ---
var textosCard2 = [
  "1. Tarjeta de crédito básica",
  "Las tarjetas básicas son las más comunes y accesibles. Están pensadas para personas que comienzan a usar crédito por primera vez o que desean mantener un control sencillo de sus gastos.",
  "Características principales:",
  "• No exigen un ingreso muy alto para solicitarla.",
  "• Ofrecen un límite de crédito bajo o moderado.",
  "• No suelen tener programas de recompensas ni beneficios premium.",
  "• Cobran comisiones e intereses más simples y transparentes.",
  "• Son ideales para construir un historial crediticio responsable.",
  "Ventajas:",
  "• Fácil aprobación.",
  "• Ideal para usuarios nuevos.",
  "• Permite aprender a manejar el crédito sin riesgo de endeudamiento excesivo."
];

// --- Card 3: Tarjeta de crédito clásica ---
var textosCard3 = [
  "2. Tarjeta de crédito clásica",
  "Las tarjetas clásicas representan un nivel intermedio. Ofrecen más beneficios que las básicas y están dirigidas a personas con ingresos estables y cierto historial financiero.",
  "Características:",
  "• Límite de crédito mayor.",
  "• Pueden incluir programas de puntos, cashback o seguros básicos.",
  "• Requieren comprobar ingresos y buen comportamiento crediticio.",
  "• Cobran una comisión anual moderada.",
  "Ventajas:",
  "• Acceso a promociones y descuentos.",
  "• Posibilidad de mejorar el puntaje crediticio.",
  "• Más flexibilidad para compras y pagos a plazos."
];

// --- Card 4: Tarjetas departamentales ---
var textosCard4 = [
  "3. Tarjetas departamentales",
  "Las tarjetas departamentales son emitidas por tiendas o comercios específicos (por ejemplo, Liverpool, Sears, Coppel, etc.).",
  "Permiten comprar dentro de esa tienda y, en algunos casos, en comercios afiliados.",
  "Características:",
  "• No siempre están respaldadas por un banco.",
  "• Solo pueden usarse en las tiendas de la marca o sus asociadas.",
  "• Suelen ofrecer descuentos, meses sin intereses o promociones exclusivas.",
  "• Los intereses pueden ser más altos si no se paga a tiempo.",
  "Ventajas:",
  "• Facilitan el acceso al crédito sin necesidad de una cuenta bancaria.",
  "• Promociones frecuentes para clientes habituales.",
  "• Son una buena forma de iniciar el historial crediticio."
];

// --- Card 5: Recomendaciones generales ---
var textosCard5 = [
  "Recomendaciones generales:",
  "• Compara las opciones antes de solicitar una tarjeta. Analiza tasas, comisiones y beneficios.",
  "• Usa la tarjeta adecuada para tu situación. Si estás iniciando, comienza con una básica.",
  "• Evita tener muchas tarjetas a la vez. Demasiadas líneas de crédito pueden afectar tu historial.",
  "• Paga puntualmente. Retrasos o saldos altos afectan tu score crediticio."
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
