
// ====== Arreglos con el texto de cada card ======

// --- Card 1: ¿Qué es una tarjeta de débito? ---
var textosCard1 = [
  "Una tarjeta de débito es un medio de pago vinculado directamente a una cuenta bancaria.",
  "Permite realizar compras en comercios físicos y en línea, así como retirar efectivo en cajeros automáticos.",
  "El importe de cada operación se descuenta de forma inmediata del saldo disponible en la cuenta asociada.",
  "Si no hay suficiente saldo, la operación no se puede realizar. (Fuente: BBVA)"
];

// --- Card 2: Características principales ---
var textosCard2 = [
  "Características principales:",
  "• Acceso directo a tu dinero: Solo puedes gastar lo que tienes disponible en tu cuenta.",
  "• Seguridad: Requiere el uso de un PIN para autorizar transacciones, protegiendo tus fondos.",
  "• Control de gastos: Facilita el seguimiento de tus compras y retiros, ayudando a mantener un presupuesto equilibrado.",
  "• Uso nacional e internacional: Puedes utilizarla en cualquier lugar que acepte tarjetas de débito, tanto en tu país como en el extranjero."
];

// --- Card 3: Ventajas de la tarjeta de débito ---
var textosCard3 = [
  "Ventajas de la tarjeta de débito:",
  "• Sin deudas: Al no permitir gastar más de lo disponible, evita la acumulación de deudas.",
  "• Comodidad: Elimina la necesidad de llevar efectivo, ofreciendo una forma rápida y segura de pagar.",
  "• Accesibilidad: Disponible para la mayoría de las personas, incluso sin historial crediticio.",
  "• Control financiero: Ayuda a mantener un control estricto sobre los gastos, favoreciendo una mejor salud financiera."
];

// --- Card 4: ¿Cómo usar una tarjeta de débito? ---
var textosCard4 = [
  "¿Cómo usar una tarjeta de débito?",
  "1. Compras en comercios: Al pagar, selecciona la opción 'pago con tarjeta' y sigue las instrucciones en el terminal punto de venta (TPV).",
  "2. Compras en línea: Introduce los datos de tu tarjeta en el sitio web del comercio, asegurándote de que sea un sitio seguro.",
  "3. Retiros en cajeros automáticos: Introduce tu tarjeta, ingresa tu PIN y selecciona la opción de retiro de efectivo."
];

// --- Card 5: Recomendaciones de uso ---
var textosCard5 = [
  "Recomendaciones de uso:",
  "• Mantén tu tarjeta segura: No compartas tu PIN ni los datos de tu tarjeta con nadie.",
  "• Revisa tus estados de cuenta: Monitorea regularmente tus transacciones para detectar cualquier actividad sospechosa.",
  "• Evita compartir tu información bancaria: No envíes datos de tu tarjeta por correo electrónico o mensajes no seguros.",
  "• Utiliza cajeros automáticos seguros: Prefiere aquellos ubicados en lugares bien iluminados y con vigilancia."
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
