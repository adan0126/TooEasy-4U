// ====== Arreglos con el texto de cada card ======
var textosCard1 = [
    "Un ingreso es todo el dinero que entra a tu bolsillo o cuenta bancaria, proveniente de cualquier fuente. En otras palabras, representa el aumento en tus recursos económicos.",
    "Según BBVA (2024), los ingresos pueden tener distintas procedencias: salario, propinas, rentas, comisiones, pensiones, premios o incluso regalos en efectivo."
];

var textosCard2 = [
    "Existen dos tipos principales de ingresos:",
    "     • Ingresos fijos: Son los que recibes de manera regular y predecible, como un sueldo mensual, una pensión o una renta fija. Te permiten planificar mejor tus finanzas porque sabes cuándo y cuánto recibirás.",
    "     • Ingresos variables: Son los que no se repiten cada mes o cuyo monto cambia constantemente. Por ejemplo, una comisión por ventas, una propina o la ganancia por vender algo de segunda mano."
];

var textosCard3 = [
    "Un egreso (también llamado gasto) es el dinero que sale de tu presupuesto para pagar bienes o servicios. Cada vez que compras algo o cubres una obligación, estás haciendo un egreso.",
    "BBVA explica que los egresos reducen tu patrimonio, ya que representan las salidas de recursos."
];

var textosCard4 = [
    "Se clasifican principalmente en dos tipos:",
    "     • Gastos fijos: Son los que se repiten con la misma cantidad o frecuencia. Por ejemplo, el pago de la renta, la luz, el transporte o la colegiatura. Estos gastos son previsibles y deben cubrirse cada mes.",
    "     • Gastos variables: Son los que cambian según tus decisiones o circunstancias. Por ejemplo, salir a comer fuera, comprar ropa o pagar un servicio extra. Aunque parecen pequeños, si no se controlan, pueden afectar tus finanzas.",
    "También hay gastos imprevistos, que surgen sin planearlos, como una reparación o una emergencia médica. Por eso, es importante reservar parte de los ingresos para poder afrontarlos sin endeudarse."
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
