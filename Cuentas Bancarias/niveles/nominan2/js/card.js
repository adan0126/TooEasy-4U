// ====== Arreglos con el texto de cada card ======
var textosCard1 = [
  "Una cuenta de nómina es una cuenta bancaria que se utiliza para recibir el pago del salario o sueldo que realiza un empleador a sus trabajadores. En lugar de entregar efectivo, las empresas depositan el dinero directamente en la cuenta de nómina de cada empleado.",
  "Este tipo de cuenta permite acceder al dinero de forma rápida y segura, ya sea retirándolo en cajeros automáticos, realizando pagos con tarjeta de débito o haciendo transferencias electrónicas."
];

var textosCard2 = [
  "1.	Depósito automático del salario: El dinero que te paga tu empresa se deposita directamente en la cuenta, sin necesidad de acudir al banco.",
  "2.	Tarjeta de débito asociada: Permite retirar efectivo, pagar en tiendas o hacer compras en línea con el saldo disponible. (No es necesario tramitar una tarjeta de débito, generalmente viene incluida)",
  "3.	Sin monto mínimo de apertura: Generalmente no se requiere depositar una cantidad inicial para abrirla.",
  "4.	Libre de comisiones (en la mayoría de los casos): No cobran por manejo de cuenta o por recibir depósitos de nómina. Sin embargo, si dejas de recibir tu salario ahí, podría convertirse en una cuenta tradicional y comenzar a generar comisiones.",
  "5.	Acceso a otros servicios financieros: Al tener una cuenta de nómina, puedes obtener beneficios adicionales, como préstamos personales, tarjetas de crédito o acceso más fácil a créditos hipotecarios, ya que el banco tiene información constante sobre tus ingresos."
];

var textosCard3 = [
  "•	Seguridad: Evitas cargar dinero en efectivo y reduces el riesgo de robo o pérdida.",
  "•	Rapidez: Recibes tu salario de manera automática cada quincena o mes.",
  "•	Comodidad: Puedes hacer compras, pagar servicios o transferencias sin acudir al banco.",
  "•	Historial financiero: Te ayuda a generar un registro bancario que puede servirte para solicitar créditos en el futuro.",
  "•	Acceso digital: Casi todos los bancos permiten consultar tu saldo y movimientos desde aplicaciones móviles."
];

var textosCard4 = [
  "Según la CONDUSEF, todo trabajador tiene el derecho de cambiar su cuenta de nómina al banco de su preferencia.",
  "Este proceso se conoce como portabilidad de nómina y el trámite es gratuito. Para hacerlo, solo se debe:",
  "1.	Acudir al banco elegido.",
  "2.	Presentar identificación oficial y comprobante de domicilio.",
  "3.	Solicitar la transferencia automática del salario a la nueva cuenta.",
  "El empleador no puede obligarte a tener la nómina en un banco específico."
];

var textosCard5 = [
// Sin contenido, se mostrara una tabla comparativa
]

var textosCard6 = [
  "•	Retira o transfiere tu dinero solo cuando lo necesites.",
  "•	No compartas tu NIP ni contraseña con nadie.",
  "•	Activa las notificaciones móviles para saber cuándo te depositan o si se realiza un movimiento sospechoso.",
  "•	Si cambias de empleo, pregunta si puedes mantener la misma cuenta o abrir una nueva.",
  "•	Si tu cuenta deja de recibir depósitos de nómina, verifica que no empiece a generar comisiones por inactividad o saldo bajo.",
  "(En la siguiente lección aprenderas lo que es una comisión)"
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
