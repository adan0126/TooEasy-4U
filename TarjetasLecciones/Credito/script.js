// URL del HTML de "Más lecciones" (tú cambias esta)
const urlMasLecciones = "/Tarjetas/index.html";

// Preguntas del quiz (TARJETA DE CRÉDITO)
const preguntas = [
  {
    texto: "¿Qué es una tarjeta de crédito?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Una tarjeta que permite gastar solo el dinero disponible en tu cuenta.",
      B: "Una tarjeta que permite usar dinero prestado por el banco para hacer compras y pagarlo después.",
      C: "Una tarjeta exclusiva para retirar efectivo."
    },
    correcta: "B"
  },
  {
    texto: "¿Qué ocurre si pagas el total de tu tarjeta de crédito antes de la fecha límite?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Se te cobran intereses.",
      B: "No se generan intereses.",
      C: "El banco te cobra una comisión extra."
    },
    correcta: "B"
  },
  {
    texto: "Las compras con tarjeta de crédito se descuentan inmediatamente del saldo de tu cuenta bancaria. Verdadero o falso:",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Verdadero",
      B: "Falso"
    },
    correcta: "B"
  },
  {
    texto: "¿Cuál de las siguientes opciones describe mejor la diferencia entre una tarjeta de crédito y una de débito?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "La tarjeta de crédito usa dinero prestado y la de débito usa dinero propio.",
      B: "Ambas funcionan igual, pero la de crédito tiene más comisiones.",
      C: "La de crédito sirve solo para compras en línea."
    },
    correcta: "A"
  },
  {
    texto: "¿Qué práctica ayuda a mantener una buena salud financiera con una tarjeta de crédito?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Pagar únicamente el mínimo cada mes.",
      B: "Retirar efectivo con frecuencia.",
      C: "Pagar el total del estado de cuenta antes de la fecha límite."
    },
    correcta: "C"
  }
];

let preguntaActual = 0;
let aciertos = 0;
let seleccionUsuario = null;

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
  const botones = document.querySelectorAll(".opcion");
  botones.forEach(b => b.classList.remove("seleccionada"));
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
    const textoCorrecta = pregunta.opciones[correcta];
    mostrarResultado(false, correcta, textoCorrecta);
  }
}

function mostrarResultado(esCorrecto, keyCorrecta = null, textoCorrecta = "") {
  resultado.className = "resultado " + (esCorrecto ? "correcto" : "incorrecto");

  if (esCorrecto) {
    resultado.innerHTML = `
      <div style="font-weight:bold;">✅ ¡Correcto!</div>
      <button class="boton-siguiente">Siguiente</button>
    `;
  } else {
    resultado.innerHTML = `
      <div>
        ❌ Incorrecto<br>
        La respuesta correcta era <strong>${keyCorrecta}) ${textoCorrecta}</strong>
      </div>
      <button class="boton-siguiente">Siguiente</button>
    `;
  }

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

// Inicializar
cargarPregunta();
