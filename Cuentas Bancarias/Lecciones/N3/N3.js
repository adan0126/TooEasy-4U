const urlMasLecciones = "../../index.html";

// ============================
// Nivel 3: Intereses y comisiones
// ============================
var textosCard1 = [ 
  "¿Qué son los intereses?",
"Son el costo del dinero. Si el banco te presta, tú pagas intereses. Si ahorras, el banco te paga intereses por tu dinero.",

    ];

var textosCard2 = [
  "Interés activo y pasivo",
 "El activo es el que el banco cobra cuando presta dinero; el pasivo es el que te paga cuando tú ahorras o inviertes.",
    
  ];

var textosCard3 = [
  "Interés simple y compuesto",
  "El simple se calcula sobre el capital original; el compuesto sobre el capital más los intereses acumulados, haciendo crecer el dinero más rápido.",
    
];

var textosCard4 = [
  "¿Qué son las comisiones?",
  "Son cobros que hace el banco por ofrecer servicios o mantener una cuenta activa.",
    
];

var textosCard5 = [
  "Tipos de comisiones comunes",
   "Por manejo de cuenta, inactividad, retiro en cajero ajeno, saldo mínimo o pago tardío.",
    
];

var textosCard6 = [
  "¿Por qué los bancos cobran comisiones?",
  "Cubren costos de operación, mantenimiento y seguridad, además de incentivar el uso responsable de los servicios.",
    
];

var textosCard7 = ["Cómo evitar pagar comisiones innecesarias",
   "Usa cajeros del mismo banco, elige cuentas sin comisiones y mantén actividad regular.",
    
];

var textosCard8 = ["Importancia de conocer intereses y comisiones",
    "Te permite comparar opciones y tomar mejores decisiones financieras evitando pagar de más.",
    
];


var preguntasN3 = [
  {
    pregunta: "Los intereses siempre representan una ganancia para el cliente.",
    opciones: ["Verdadero", "Falso"],
    correcta: 2,
    imagen: "../../img/castorLeyendo.jpg"
  },
  {
    pregunta: "El interés activo es el que cobra el banco cuando presta dinero a un cliente.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    imagen: "../../img/castorLeyendo.jpg"
  },
  {
    pregunta: "¿Cuál de los siguientes tipos de interés hace crecer el dinero más rápido?",
    opciones: ["Interés simple", "Interés compuesto", "Interés activo", "Interés pasivo"],
    correcta: 2,
    imagen: "../../img/castorLeyendo.jpg"
  },
  {
    pregunta: "¿Qué son las comisiones bancarias?",
    opciones: [
      "Bonos que el banco paga a sus clientes por ahorrar.",
      "Cobros que hace el banco por ofrecer servicios o mantener cuentas.",
      "Descuentos que da el banco por usar sus cajeros.",
      "Ganancias automáticas por tener una tarjeta."
    ],
    correcta: 2,
    imagen: "../../img/castorLeyendo.jpg"
  },
  {
    pregunta: "Si usas un cajero automático que no es de tu banco, podrías pagar una comisión.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    imagen: "../../img/castorLeyendo.jpg"
  },
  {
    pregunta: "¿Cuál de las siguientes opciones describe una comisión por inactividad?",
    opciones: [
      "Cobro por tener saldo alto.",
      "Cobro por no realizar movimientos durante un tiempo.",
      "Cobro por recibir depósitos de nómina.",
      "Cobro por abrir la cuenta."
    ],
    correcta: 2,
    imagen: "../../img/castorLeyendo.jpg"
  },
  {
    pregunta: "¿Por qué los bancos cobran comisiones?",
    opciones: [
      "Para castigar a los clientes que ahorran.",
      "Para cubrir sus costos de operación y mantenimiento.",
      "Para aumentar sus ganancias sin ofrecer servicios.",
      "Por obligación del gobierno."
    ],
    correcta: 2,
    imagen: "../../img/castorLeyendo.jpg"
  },
  {
    pregunta: "Puedes evitar muchas comisiones eligiendo cuentas sin costo y usando cajeros del mismo banco.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    imagen: "../../img/castorLeyendo.jpg"
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
function iniciarLeccionN3() {
  document.getElementById("teoria").style.display = "block";
  document.getElementById("preguntas").style.display = "none";
  document.getElementById("contenedor-barra").style.display = "none";
  document.getElementById("imagenPregunta").style.display = "none";
  mostrarTeoriaN3();
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

  preguntasSeleccionadas = seleccionarAleatorias(preguntasN3, 8); // Selecciona 8 preguntas aleatorias
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
  document.getElementById("pregunta").textContent = pregunta.pregunta;

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

window.onload = iniciarLeccionN3;// Inicia la lección al cargar la página