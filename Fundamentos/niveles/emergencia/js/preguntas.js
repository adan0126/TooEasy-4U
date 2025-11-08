// URL del HTML de "Más lecciones" (tú cambias esta)
const urlMasLecciones = "/Fundamentos/index.html";

// Preguntas del quiz
const preguntas = [
  {
    texto: "La seguridad financiera significa tener mucho dinero ahorrado para poder gastar sin preocuparte.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO.",
      B: "VERDADERO."
    },
    correcta: "A"
  },
  {
    texto: "El fondo de emergencia sirve para cubrir gastos imprevistos, como una reparación o una emergencia médica.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "B"
  },
  {
    texto: "Según BBVA, ¿cuántos meses de gastos fijos debería cubrir idealmente un fondo de emergencia?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "3 a 6 meses.",
      B: "1 a 2 meses.",
      C: "2 a 4 meses.",
      D: "6 a 12 meses."
    },
    correcta: "A"
  },
  {
    texto: "El fondo de emergencia debe guardarse junto con el dinero del día a día, para poder usarlo fácilmente cuando se necesite.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "A"
  },
  {
    texto: "María gasta $8,000 pesos al mes en necesidades básicas. Si quiere tener un fondo que cubra tres meses, ¿cuánto dinero debería reunir?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "$16,000",
      B: "$20,000",
      C: "$50,000",
      D: "$24,000"
    },
    correcta: "D"
  },
  {
    texto: "¿Cuál de las siguientes opciones es la más segura para guardar un fondo de emergencia?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "En efectivo debajo del colchón.",
      B: "En una cuenta de nómina donde recibes tu salario.",
      C: "En una cuenta de ahorro o instrumento de bajo riesgo.",
      D: "En una tarjeta de crédito."
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
      <div style="font-weight:bold;">¡Correcto!</div>
      <button class="boton-siguiente">Siguiente</button>
    `;
  } else {
    resultado.innerHTML = `
      <div>
        Incorrecto<br>
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
