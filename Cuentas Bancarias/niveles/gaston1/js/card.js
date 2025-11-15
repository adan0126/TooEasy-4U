// ====== Arreglos con el texto de cada card ======
var textosCard1 = [
  "Una cuenta de ahorro es un producto financiero ofrecido por bancos e instituciones autorizadas que te permite depositar y custodiar tu dinero de forma segura, con la posibilidad de obtener una rentabilidad mediante intereses por mantener esos fondos ahí. "
];

var textosCard2 = [
  "Entre sus funciones:",
  "•	Sirve para resguardar tu dinero, evitando que lo tengas en efectivo, lo pierdas o lo gastes de más.",
  "•	Permite retirar (total o parcialmente) los fondos cuando lo necesites, aunque puede haber límites o condiciones.",
  "•	Genera intereses, es decir, el banco te paga un porcentaje por dejar tu dinero con ellos (aunque la tasa puede ser variable o baja).",
  "Una ventaja es que puedes usar ese dinero cuando lo necesites (conocido como liquidez), aunque algunas cuentas de ahorro pueden tener restricciones en el número de retiros u operaciones permitidas."
];

var textosCard3 = [
  "1. Elegir la institución financiera (banco, caja de ahorro, cooperativa). Fíjate en los costos, reputación y servicios que ofrece.",
  "2. Revisa los requisitos, algunas de las cosas que normalemnte te pediran son: Identificación oficial vigente, comprobante de domicilio, CURP/RFC u otro dato personal, edad minima (a veces hay cuentas para menores o jovenes), depositar una cantidad minima (según la institución)",
  "3. LEER y COMPRENDER el contrato (documento de adhesión): Es vital revisar las comisiones, intereses, limites de retiro, clausulas de mantenimiento, y demás obligaciones. Las instituciones financieras deben de mostrar con claridad esos cargas, y si no t queda claro algo debes preguntar",
  "4. Firmar el contrato y abrir la cuenta: Una vez aceptes los términos, firmas el contrato y se habilita la cuenta. A veces puedes hacerlo de forma digital, especialmente en bancos modernos.",
  "5. Depositar dinero e iniciar su uso: Realiza un depósito inicial (si lo requieren) y activa tu cuenta. A partir de ahí puedes hacer depósitos, retiros y operaciones permitidas según las reglas de la cuenta.",
  "Este fondo no debe usarse para gustos o compras planeadas, sino solo cuando sea realmente necesario."
];

var textosCard4 = [
  "Algunas variantes que puedes encontrar son:",
  "•	Cuenta de ahorro con chequera (menos común): permite emitir cheques como forma de pago.",
  "•	Cuenta de ahorro sin chequera: versión más simple, sin cheques, ideal si solo quieres ahorrar y no realizar pagos por cheque.",
  "•	Cuenta de ahorro programada o de metas: permite definir un monto mensual que se aparta automáticamente para ahorrar para un propósito.",
  "Recuerda leer siempre ek contrato y asegurarte de entenderlo, No esta prohibido preguntar"
];

var textosCard5 = [
  "Para elegir bien, es fundamental que conozcas los cargos y términos que pueden aplicarse:",
  "•	Comisión: Cualquier cargo que haga el banco aparte del interés, como mantenimiento, inactividad, emisión de estados de cuenta.",
  "•	Comisión por inactividad: Algunos bancos cobran si tu cuenta no tiene movimientos durante cierto periodo (por ejemplo, $10 mensuales si no hay actividad)",
  "•	Comisión por saldos bajos: Penalizaciones si no mantienes un saldo mínimo promedio establecido.",
  "•	Tasa de interés: Es el porcentaje extra que recibes por guardar tu dinero en el banco. Por ejemplo: si ahorras, el banco te da un poco más de dinero como recompensa por dejar tu dinero ahí. Algunas cuentas pueden cambiar este porcentaje con el tiempo.",
  "•	CAT (Costo Anual Total): Indicador obligatorio que muestra el costo real del producto (en este caso tu cuenta bancaria), incluyendo tasas y comisiones. El CAT te ayudará a comparar opciones y ver cuál es más barata."
]

var textosCard6 = [
  "Algunas consideraciones importantes que deberias tener:",
  "•	Algunas cuentas tienen límites de operación (por ejemplo, cierta cantidad de retiros gratuitos por mes).",
  "•	Verifica si la cuenta tiene comisiones de mantenimiento, inactividad u otros cargos.",
  "•	Revisa las condiciones de interés (cómo se calculan, cuándo se aplica, si hay tasa mínima)",
  "•	Analiza la liquidez: qué tan fácil es retirar el dinero, si incurre en penalizaciones o esperas. ",
  "Leer el contrato puede ser de gran ayuda para conocer como se aplican todos los puntos anteriores"
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
