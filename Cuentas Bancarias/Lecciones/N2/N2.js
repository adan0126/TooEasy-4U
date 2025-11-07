const urlMasLecciones = "../../index.html";

// ============================
// Nivel 2: Cuenta de nómina
// ============================

// Teoría (flashcards)
var textosCard1 = [
    "¿Qué es una cuenta de nómina?",
     "Es una cuenta bancaria que se utiliza para recibir el pago del salario de los trabajadores. Permite acceder al dinero fácilmente mediante cajeros, transferencias o pagos con tarjeta."
  ];

var textosCard2 = [
  "Diferencia con cuenta de ahorro",
  "La cuenta de nómina es para recibir tu salario; la de ahorro es para guardar dinero a largo plazo y puede generar intereses."];

var textosCard3 = [
"Recomendaciones de uso",
     "No compartas tu NIP, activa notificaciones y revisa si tu cuenta empieza a generar comisiones al dejar de recibir tu sueldo."
  ];

var textosCard4 = [
  "Derechos del usuario",
   "Puedes cambiar tu cuenta de nómina a otro banco gratuitamente. Se llama portabilidad de nómina."
  
  ];

var textosCard5 = [
  "Beneficios adicionales",
   "Puedes acceder más fácilmente a préstamos, tarjetas de crédito o créditos hipotecarios, ya que el banco conoce tus ingresos."

  ];

var textosCard6 = [
  "Libre de comisiones",
   "Generalmente no cobran comisiones si la usas para recibir tu sueldo. Si dejas de hacerlo, podría convertirse en cuenta tradicional y generar cobros."
];

var textosCard7 = [
"Tarjeta de débito asociada",
    "Te permite retirar efectivo, pagar en tiendas o hacer compras en línea con tu saldo disponible."
];

var textosCard8 = [
 "Depósito automático del salario",
  "Tu empresa deposita directamente tu sueldo sin que tengas que ir al banco.",
];

// Preguntas (mismo formato y estructura)
var preguntasN2 = [
  {
    pregunta: "La cuenta de nómina sirve principalmente para recibir el pago del salario de un trabajador.",
    imagen: "../../img/castorMoneda.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    pregunta: "Todas las cuentas de nómina cobran comisiones por manejo y apertura.",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál de las siguientes es una característica principal de una cuenta de nómina?",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: [
      "Se usa para ahorrar a largo plazo.",
      "Se utiliza para recibir el sueldo y hacer pagos con tarjeta de débito.",
      "Requiere un monto mínimo alto para abrirse.",
      "Solo se puede usar para retirar efectivo."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué sucede si una cuenta de nómina deja de recibir depósitos del salario durante varios meses?",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: [
      "El banco la convierte en una cuenta de ahorro y puede empezar a cobrar comisiones.",
      "Se cierra automáticamente sin aviso.",
      "El dinero se transfiere al patrón.",
      "No hay ningún cambio."
    ],
    correcta: 1
  },
  {
    pregunta: "La empresa para la que trabajas puede obligarte a tener tu nómina en el banco que ella elija.",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál de las siguientes afirmaciones es una ventaja de tener una cuenta de nómina?",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: [
      "No puedes usarla para compras.",
      "Evita cargar dinero en efectivo y facilita recibir tu salario.",
      "Cobra comisiones cada que te depositan.",
      "No te permite acceder a servicios financieros."
    ],
    correcta: 2
  },
  {
    pregunta: "Pedro recibe su sueldo en una cuenta de nómina BBVA y quiere cambiarlo a otro banco porque le ofrecen más beneficios. ¿Qué debe hacer?",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: [
      "Pedir permiso a su jefe.",
      "Solicitar el cambio directamente en el nuevo banco.",
      "Cerrar la cuenta actual sin aviso.",
      "Esperar a que termine el año fiscal."
    ],
    correcta: 2
  },
  {
    pregunta: "Las cuentas de nómina suelen incluir una tarjeta de débito que permite retirar efectivo o hacer pagos.",
    imagen: "../../img/castorLeyendo.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
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
function iniciarLeccionN2() {
  document.getElementById("teoria").style.display = "block";
  document.getElementById("preguntas").style.display = "none";
  document.getElementById("contenedor-barra").style.display = "none";
  document.getElementById("imagenPregunta").style.display = "none";
  mostrarTeoriaN2();
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

  preguntasSeleccionadas = seleccionarAleatorias(preguntasN2, 8); // Selecciona 8 preguntas aleatorias
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

function reintentarNive2() {
  document.getElementById("final-nivel").style.display = "none";
  iniciarPreguntas();
}

// Redirección a la sección de más lecciones
function irMasLecciones() {
  window.location.href = urlMasLecciones;
}

window.onload = iniciarLeccionN2;// Inicia la lección al cargar la página