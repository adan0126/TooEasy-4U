const urlMasLecciones = "../../index.html";

// ====== Arreglos con el texto de cada card ======
var textosCard1 = [
    "Desventajas",
    "Comisión por mantenimiento, inactividad, saldos bajos, tasa de interés, CAT.",];

var textosCard2 = [
  "Términos clave",
  "Intereses variables, comisiones, límites de retiro, liquidez inmediata, seguridad.",];

var textosCard3 = [
"Tipos de cuenta",
"Con chequera, sin chequera, programada o de metas."];

var textosCard4 = [
  "Consideraciones importantes",
   "Comisiones, límites de operación, condiciones de interés, liquidez.",
  ];

var textosCard5 = [
  "Requisitos comunes",
    "Identificación oficial, comprobante de domicilio, CURP/RFC, edad mínima, depósito inicial.",
  ];

var textosCard6 = [
  "Pasos para abrir una cuenta de ahorro",
    "Elegir institución, revisar requisitos, leer el contrato, firmar y depositar.",
];

var textosCard7 = [
  "Características: Ofrece liquidez",
   "Puedes usar el dinero cuando lo necesites, aunque puede haber restricciones.",
];

var textosCard8 = [
  "Características: Genera intereses",
 "Sí, el banco te paga un porcentaje por mantener tu dinero allí.",
];
var textosCard9 = [
  "Funciones de una cuenta de ahorro",
  "Permite retirar fondos cuando lo necesites, aunque puede haber límites o condiciones.",
];
var textosCard10 = [
  "¿Para que sirve una cuenta de ahorro?",
    "Sirve para resguardar tu dinero, evitar pérdidas y gastos innecesarios.",
];

var textosCard11 = [
  "¿Qué es una cuenta de ahorro?", 
  "Una cuenta de ahorro es un producto financiero que permite depositar y custodiar tu dinero de forma segura, generando rentabilidad mediante intereses.",
];

var preguntasN1 = [
    //preguntas para cuentas de ahorro
  {
    texto: "Una cuenta de ahorro solo sirve para guardar dinero y no genera ningún tipo de rendimiento.",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    texto: "Para abrir una cuenta de ahorro es necesario presentar una identificación oficial y un comprobante de domicilio.",
    imagen: "../../img/castorSaludando.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    texto: "¿Cuál de las siguientes opciones describe mejor una cuenta de ahorro?",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: [
      "Una cuenta para pagar con cheques y recibir depósitos de nómina.",
      "Una cuenta que permite ahorrar dinero, obtener intereses y retirar cuando sea necesario.",
      "Una cuenta exclusiva para préstamos bancarios.",
      "Una cuenta sin acceso a tu dinero hasta los 5 años."
    ],
    correcta: 1
  },
  {
    texto: "¿Qué documento es importante leer antes de firmar al abrir tu primera cuenta bancaria?",
    imagen: "../../img/castorSaludando.jpg",
    opciones: [
      "El comprobante de domicilio.",
      "El contrato o documento de adhesión del banco.",
      "Tu historial crediticio.",
      "El estado de cuenta mensual."
    ],
    correcta: 1
  },
  {
    texto: "Todas las cuentas de ahorro permiten hacer retiros ilimitados sin costo.",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    texto: "Según CONDUSEF, ¿qué significa comisión por inactividad?",
    imagen: "../../img/castorSaludando.jpg",
    opciones: [
      "El cobro por usar demasiado la cuenta.",
      "El cobro por no tener movimientos durante cierto tiempo.",
      "El interés que te paga el banco por ahorrar.",
      "Un beneficio que otorgan por no usar la cuenta."
    ],
    correcta: 1
  },
  {
    texto: "Laura abrió su primera cuenta de ahorro y el banco le cobra una comisión mensual de $15 por mantenimiento. Esto significa que:",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: [
      "Le descuentan $15 cada mes por tener activa su cuenta.",
      "Le pagan $15 mensuales como premio por ahorrar.",
      "Solo debe pagar si retira dinero.",
      "Es un error del sistema."
    ],
    correcta: 0
  },
  {
    texto: "El dinero depositado en una cuenta de ahorro está protegido si el banco está regulado por autoridades financieras.",
    imagen: "../../img/castorSaludando.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  }

];

// Variables globales para controlar el estado del juego
let indexTeoria = 0;
let preguntasSeleccionadas = [];
let indexPregunta = 0;
let puntaje = 0;
let respuestasCorrectas = 0;
let opcionSeleccionada = null;
let bloqueado = false;

// Al cargar la página, se inicia la lección mostrando la teoría
function iniciarLeccionN1() {
  document.getElementById("teoria").style.display = "block";
  document.getElementById("preguntas").style.display = "none";
  document.getElementById("contenedor-barra").style.display = "none";
  document.getElementById("imagenPregunta").style.display = "none";
  mostrarTeoriaN1();
}


// ====== Función que muestra el contenido de los arreglos ======
function mostrarTextoCard(textos, idContenedor) {
  document.getElementById("modulo-cuentas").style.display = "none";
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
  cards[indiceActual].style.display = "block";
}

// Inicia la sección de preguntas ocultando la teoría
function iniciarPreguntas() {
  document.getElementById("modulo-cuentas").style.display = "flex";
  document.getElementById("cont").style.display = "none";
  document.getElementById("imagenPregunta").style.display = "block";
  document.getElementById("preguntas").style.display = "block";
  document.getElementById("contenedor-barra").style.display = "block";

  preguntasSeleccionadas = seleccionarAleatorias(preguntasN1, 8); // Selecciona 8 preguntas aleatorias
  indexPregunta = 0;
  puntaje = 0;
  respuestasCorrectas = 0;
  opcionSeleccionada = null;

  actualizarPuntaje();
  actualizarBarraProgreso();
  mostrarPregunta();
}

// Actualiza el puntaje en pantalla
function actualizarPuntaje() {
  document.getElementById("puntaje").textContent = `Puntaje: ${puntaje}`;
}

// Selecciona preguntas aleatorias sin repetir
function seleccionarAleatorias(lista, cantidad) {
  const copia = [...lista];
  const seleccionadas = [];

  while (seleccionadas.length < cantidad && copia.length > 0) {
    const index = Math.floor(Math.random() * copia.length);
    seleccionadas.push(copia.splice(index, 1)[0]);
  }
  return seleccionadas;
}

// Muestra la pregunta actual y sus opciones
function mostrarPregunta() {
  bloqueado = false;
  opcionSeleccionada = null;

  const pregunta = preguntasSeleccionadas[indexPregunta]; // ← esta línea debe ir primero

  // Mostrar imagen de la pregunta
  document.getElementById("imagenPregunta").src = pregunta.imagen;

  // Mostrar texto de la pregunta
  document.getElementById("pregunta").textContent = pregunta.texto;

  // Preparar botones y contenedores
  document.getElementById("btn-verificar").style.display = "inline-block";
  document.getElementById("btn-verificar").disabled = true;
  document.getElementById("btn-verificar").style.display = "none";
  document.getElementById("btn-siguiente").style.display = "none";
  document.getElementById("resultado").style.display = "none"; // ocultar retroalimentación previa

  // Mostrar opciones
    const listaOpciones = document.getElementById("lista-opciones");
    listaOpciones.innerHTML = "";

    pregunta.opciones.forEach((opcion, i) => {
    const li = document.createElement("li");
    li.tabIndex = 0;

    // Incisos tipo A), B), C), D)...
    const letra = String.fromCharCode(65 + i); // 65 = "A"
    li.textContent = `${letra}) ${opcion}`;

    li.dataset.index = i;
    li.className = "opcion";
    li.addEventListener("click", () => elegirOpcion(i, li));
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        elegirOpcion(i, li);
      }
    });
    listaOpciones.appendChild(li);
  });
}

// Marca la opción seleccionada visualmente
function elegirOpcion(i, liElem) {
  if (bloqueado) return;

  [...document.getElementById("lista-opciones").children].forEach((li) =>
    li.classList.remove("selected")
  );
  liElem.classList.add("selected");

  opcionSeleccionada = i;
  document.getElementById("btn-verificar").disabled = false;
  document.getElementById("btn-verificar").style.display = "inline-block";
}

// Verifica si la respuesta es correcta y muestra retroalimentación
function verificar() {
  if (bloqueado || opcionSeleccionada === null) return;

  const pregunta = preguntasSeleccionadas[indexPregunta];
  const listaOpciones = document.getElementById("lista-opciones");
  const liElems = [...listaOpciones.children];
  bloqueado = true;

  // Marca visualmente la respuesta correcta e incorrecta
  liElems.forEach((li, i) => {
    li.classList.remove("selected", "correct", "wrong");
    li.style.pointerEvents = "none";

    if (i === pregunta.correcta) {
      li.classList.add("correct"); // borde verde
    }

    if (i === opcionSeleccionada && i !== pregunta.correcta) {
      li.classList.add("wrong"); // borde rojo
    }
  });

  // Si fue correcta, suma puntaje y muestra mensaje
  if (opcionSeleccionada === pregunta.correcta) {
    respuestasCorrectas++;
    puntaje += 10;
    mostrarRetroalimentacion("¡Correcto!", true);
  } else {
    mostrarRetroalimentacion(
      "Incorrecto. La respuesta correcta era: " + pregunta.opciones[pregunta.correcta],
      false
    );
  }

  actualizarPuntaje();
  actualizarBarraProgreso();

  // Si ya respondió 8 bien, termina el nivel
  if (respuestasCorrectas >= 8) {
    setTimeout(() => mostrarMensajeFinal(true), 900);
    return;
  }

  // Muestra botón para verificar la  pregunta
  document.getElementById("btn-verificar").style.display = "none";
}

function mostrarResultado(esCorrecto, textoCorrecta = "") {
  const resultado = document.getElementById("resultado");
  resultado.className = "resultado " + (esCorrecto ? "correcto" : "incorrecto");

  resultado.innerHTML = esCorrecto
    ? `<div style="font-weight:bold;">✅ ¡Correcto!</div>
       <button class="boton-siguiente">Siguiente</button>`
    : `<div>❌ Incorrecto<br>La respuesta correcta era: <strong>${textoCorrecta}</strong></div>
       <button class="boton-siguiente">Siguiente</button>`;

  resultado.style.display = "flex";
  resultado.querySelector("button").addEventListener("click", avanzarPregunta);
}

// Muestra mensaje de retroalimentación debajo de la pregunta
function mostrarRetroalimentacion(mensaje, esCorrecto) {
  const pregunta = preguntasSeleccionadas[indexPregunta];
  const textoCorrecta = pregunta.opciones[pregunta.correcta];
  mostrarResultado(esCorrecto, textoCorrecta);
}

function avanzarPregunta() {
  document.getElementById("resultado").style.display = "none";
  if (respuestasCorrectas >= 8) {
    mostrarMensajeFinal(true);
    return;
  }
  if (indexPregunta < preguntasSeleccionadas.length - 1) {
    indexPregunta++;
    mostrarPregunta();
  } else {
    mostrarMensajeFinal(false);
  }
}

// Actualiza la barra de progreso según el avance
function actualizarBarraProgreso() {
  const progreso = ((indexPregunta + 1) / preguntasSeleccionadas.length) * 100;
  const barra = document.getElementById("barra-progreso");
  barra.style.width = `${progreso}%`;
  barra.textContent = "";
}

// Muestra mensaje final según si se logró el objetivo o no
function mostrarMensajeFinal(ganoPor8Correctas) {
  document.getElementById("preguntas").style.display = "none";
  document.getElementById("contenedor-barra").style.display = "none";

  const mensaje = `Obtuviste ${respuestasCorrectas} respuestas correctas de 8.`;
  const mensajeElem = document.getElementById("mensaje-final");

  mensajeElem.textContent = mensaje;
  document.getElementById("final-nivel").style.display = "block";
}

function reintentarNivel() {
  document.getElementById("final-nivel").style.display = "none";
  iniciarPreguntas();
}

// Redirección a la sección de más lecciones
function irMasLecciones() {
  window.location.href = urlMasLecciones;
}

window.onload = iniciarLeccionN1;// Inicia la lección al cargar la página