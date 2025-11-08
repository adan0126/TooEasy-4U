// URL del HTML de "Más lecciones" (puedes cambiar esta ruta según tu proyecto)
const urlMasLecciones = "/Deudas y Creditos/index.html";

// Preguntas del quiz
const preguntas = [
  {
    texto: "¿Qué es el historial crediticio?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Un documento de tus ingresos mensuales.",
      B: "Un registro de cómo pagas tus deudas y créditos.",
      C: "Un resumen de tus gastos diarios."
    },
    correcta: "B"
  },
  {
    texto: "Un buen historial crediticio te permite acceder a mejores condiciones en préstamos. Verdadero o falso:",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Verdadero",
      B: "Falso"
    },
    correcta: "A"
  },
  {
    texto: "¿Qué hábito ayuda a mantener un historial positivo?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Pagar solo el mínimo.",
      B: "Pagar siempre a tiempo.",
      C: "No revisar tus estados de cuenta."
    },
    correcta: "B"
  },
  {
    texto: "¿Qué porcentaje del ingreso mensual se recomienda no exceder en deudas?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "30%",
      B: "60%",
      C: "90%"
    },
    correcta: "A"
  },
  {
    texto: "¿Qué ocurre si no pagas tus deudas puntualmente?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Mejora tu score crediticio.",
      B: "No afecta tu historial.",
      C: "Se daña tu historial y puede impedir futuros préstamos."
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
