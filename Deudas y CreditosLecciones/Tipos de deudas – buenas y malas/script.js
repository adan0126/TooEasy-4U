// URL del HTML de "Más lecciones" (ajusta según tu estructura)
const urlMasLecciones = "/Deudas y Creditos/index.html";

// Preguntas del quiz
const preguntas = [
  {
    texto: "¿Cuál es un ejemplo de deuda buena?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Comprar ropa con tarjeta sin necesitarla.",
      B: "Un crédito para estudiar una carrera.",
      C: "Usar crédito para pagar otra deuda más cara."
    },
    correcta: "B"
  },
  {
    texto: "Las deudas malas se adquieren por impulso o sin planificación. Verdadero o falso:",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Verdadero",
      B: "Falso"
    },
    correcta: "A"
  },
  {
    texto: "Una deuda buena debe:",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Generar valor o mejorar tu situación financiera.",
      B: "Aumentar tus gastos sin beneficio.",
      C: "Tener intereses muy altos."
    },
    correcta: "A"
  },
  {
    texto: "¿Qué práctica te ayuda a evitar las deudas malas?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Comprar sin comparar precios.",
      B: "Gastar más de lo que ganas.",
      C: "Planificar antes de usar crédito."
    },
    correcta: "C"
  },
  {
    texto: "Una deuda mala normalmente se usa para:",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Invertir en tu educación.",
      B: "Gastos innecesarios o impulsivos.",
      C: "Adquirir bienes que aumentan de valor."
    },
    correcta: "B"
  }
];

let preguntaActual = 0;
let aciertos = 0;
let seleccionUsuario = null;

// Elementos del DOM
const textoPregunta = document.getElementById("textoPregunta");
const opcionesContainer = document.getElementById("opcionesContainer");
const imagenPregunta = document.getElementById("imagenPregunta");
const resultado = document.getElementById("resultado");
const barraProgreso = document.querySelector(".progreso");
const botonComprobar = document.getElementById("botonComprobar");

function cargarPregunta() {
  resultado.style.display = "none";
  resultado.innerHTML = "";
  botonComprobar.style.display = "none";
  seleccionUsuario = null;

  const pregunta = preguntas[preguntaActual];
  textoPregunta.textContent = pregunta.texto;
  imagenPregunta.src = pregunta.imagen;
  opcionesContainer.innerHTML = "";

  for (let key in pregunta.opciones) {
    const btn = document.createElement("div");
    btn.classList.add("opcion");
    btn.setAttribute("data-key", key);
    btn.innerHTML = `<strong>${key})</strong> ${pregunta.opciones[key]}`;
    btn.addEventListener("click", () => seleccionarOpcion(btn, key));
    opcionesContainer.appendChild(btn);
  }

  actualizarProgreso();
}

function seleccionarOpcion(boton, key) {
  document.querySelectorAll(".opcion").forEach(b => b.classList.remove("seleccionada"));
  boton.classList.add("seleccionada");
  seleccionUsuario = key;
  botonComprobar.style.display = "block";
}

botonComprobar.addEventListener("click", () => {
  if (!seleccionUsuario) return;
  verificarRespuesta(seleccionUsuario);
  botonComprobar.style.display = "none";
});

function verificarRespuesta(seleccion) {
  const pregunta = preguntas[preguntaActual];
  const correcta = pregunta.correcta;
  const botones = Array.from(document.querySelectorAll(".opcion"));
  botones.forEach(b => b.style.pointerEvents = "none");

  const botonCorrecto = botones.find(b => b.getAttribute("data-key") === correcta);
  if (botonCorrecto) botonCorrecto.classList.add("correcta");

  if (seleccion === correcta) {
    aciertos++;
    mostrarResultado(true);
  } else {
    mostrarResultado(false, correcta, pregunta.opciones[correcta]);
  }
}

function mostrarResultado(esCorrecto, keyCorrecta = null, textoCorrecta = "") {
  resultado.className = "resultado " + (esCorrecto ? "correcto" : "incorrecto");
  resultado.innerHTML = esCorrecto
    ? `<div style="font-weight:bold;">✅ ¡Correcto!</div><button class="boton-siguiente">Siguiente</button>`
    : `<div>❌ Incorrecto<br>La respuesta correcta era <strong>${keyCorrecta}) ${textoCorrecta}</strong></div><button class="boton-siguiente">Siguiente</button>`;

  resultado.style.display = "flex";
  resultado.querySelector("button").addEventListener("click", siguientePregunta);
}

function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    cargarPregunta();
  } else {
    mostrarFinal();
  }
}

function mostrarFinal() {
  const total = preguntas.length;
  opcionesContainer.innerHTML = "";
  imagenPregunta.src = "/img/Imagen1.1.png";
  textoPregunta.textContent = "Resultados finales";

  resultado.className = "resultado correcto";
  resultado.style.display = "flex";
  resultado.innerHTML = `
    <div style="font-size:18px;font-weight:bold;">
      Obtuviste ${aciertos} de ${total} respuestas correctas
    </div>
    <div style="display:flex; gap:10px;">
      <button class="boton-siguiente" onclick="reiniciar()">Reintentar</button>
      <button class="boton-siguiente" onclick="irMasLecciones()">Más lecciones</button>
    </div>
  `;
  barraProgreso.style.width = "100%";
}

function reiniciar() {
  preguntaActual = 0;
  aciertos = 0;
  cargarPregunta();
}

function irMasLecciones() {
  window.location.href = urlMasLecciones;
}

function actualizarProgreso() {
  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
  barraProgreso.style.width = `${progreso}%`;
}

// Inicializar quiz
cargarPregunta();
