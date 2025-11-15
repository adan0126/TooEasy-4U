// URL del HTML de "Más lecciones" (tú cambias esta)
const urlMasLecciones = "/Cuentas Bancarias/index.html";

// Preguntas del quiz
const preguntas = [
  {
    texto: "Los intereses siempre representan una ganancia para el cliente.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO.",
      B: "VERDADERO."
    },
    correcta: "A"
  },
  {
    texto: "El interés activo es el que cobra el banco cuando presta dinero a un cliente.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "B"
  },
  {
    texto: "¿Cuál de los siguientes tipos de interés hace crecer el dinero más rápido?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Interés simple",
      B: "Interés activo",
      C: "Interés pasivo",
      D: "Interés compuesto"
    },
    correcta: "D"
  },
  {
    texto: "¿Qué son las comisiones bancarias?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Bonos que el banco paga a sus clientes por ahorrar.",
      B: "Descuentos que da el banco por usar sus cajeros.",
      C: "Cobros que hace el banco por ofrecer servicios o mantener cuentas.",
      D: "Ganancias automáticas por tener una tarjeta."
    },
    correcta: "C"
  },
  {
    texto: "Si usas un cajero automático que no es de tu banco, podrías pagar una comisión.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "B"
  },
  {
    texto: "¿Por qué los bancos cobran comisiones?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Para cubrir sus costos de operación y mantenimiento.",
      B: "Para castigar a los clientes que ahorran.",
      C: "Para aumentar sus ganancias sin ofrecer servicios.",
      D: "Por obligación del gobierno."
    },
    correcta: "A"
  },
  {
    texto: "Puedes evitar muchas comisiones eligiendo cuentas sin costo y usando cajeros del mismo banco.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
        A: "VERDADERO",
        B: "FALSO"
    },
    correcta: "A"
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
