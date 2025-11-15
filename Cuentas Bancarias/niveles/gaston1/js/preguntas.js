// URL del HTML de "Más lecciones" (tú cambias esta)
const urlMasLecciones = "/Cuentas Bancarias/index.html";

// Preguntas del quiz
const preguntas = [
  {
    texto: "Una cuenta de ahorro solo sirve para guardar dinero y no genera ningún tipo de rendimiento.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO.",
      B: "VERDADERO."
    },
    correcta: "A"
  },
  {
    texto: "Para abrir una cuenta de ahorro es necesario presentar una identificación oficial y un comprobante de domicilio.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "B"
  },
  {
    texto: "¿Cuál de las siguientes opciones describe mejor una cuenta de ahorro?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Una cuenta para pagar con cheques y recibir depósitos de nómina.",
      B: "Una cuenta que permite ahorrar dinero, obtener intereses y retirar cuando sea necesario.",
      C: "Una cuenta exclusiva para préstamos bancarios.",
      D: "Una cuenta sin acceso a tu dinero hasta los 5 años de crearla."
    },
    correcta: "B"
  },
  {
    texto: "¿Qué documento es importante leer antes de firmar al abrir tu primera cuenta bancaria?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "El comprobante de domicilio.",
      B: "El estado de cuenta mensual.",
      C: "Tu historial crediticio.",
      D: "El contrato o documento de adhesión del banco."
    },
    correcta: "D"
  },
  {
    texto: "Todas las cuentas de ahorro permiten hacer retiros ilimitados sin costo.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "A"
  },
  {
    texto: "¿Qué significa comisión por inactividad?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "El cobro por usar demasiado la cuenta.",
      B: "El interés que te paga el banco por ahorrar.",
      C: "El cobro por no tener movimientos durante cierto tiempo.",
      D: "Un beneficio que otorgan por no usar la cuenta."
    },
    correcta: "C"
  },
  {
    texto: "Laura abrió su primera cuenta de ahorro y el banco le cobra una comisión mensual de $15 por mantenimiento.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
        A: "Le descuentan $15 cada mes por tener activa su cuenta.",
        B: "Le pagan $15 mensuales como premio por ahorrar.",
        C: "Debe pagar $15 si retira dinero.",
        D: "Es un error del sistema."
    },
    correcta: "A"
  },
  {
    texto: "El dinero depositado en una cuenta de ahorro está protegido si el banco está regulado por autoridades financieras.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
        A: "FALSO",
        B: "VERDADERO"
    },
    correcta: "B"
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
