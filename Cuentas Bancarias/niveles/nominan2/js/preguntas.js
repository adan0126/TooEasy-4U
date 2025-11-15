// URL del HTML de "Más lecciones" (tú cambias esta)
const urlMasLecciones = "/Cuentas Bancarias/index.html";

// Preguntas del quiz
const preguntas = [
  {
    texto: "La cuenta de nómina sirve principalmente para recibir el pago del salario de un trabajador.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO.",
      B: "VERDADERO."
    },
    correcta: "B"
  },
  {
    texto: "Todas las cuentas de nómina cobran comisiones por manejo y apertura.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "A"
  },
  {
    texto: "¿Cuál de las siguientes es una característica principal de una cuenta de nómina?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "Se usa para ahorrar a largo plazo.",
      B: "Requiere un monto mínimo alto para abrirse.",
      C: "Se utiliza para recibir el sueldo y hacer pagos con tarjeta de débito.",
      D: "Solo se puede usar para retirar efectivo."
    },
    correcta: "C"
  },
  {
    texto: "¿Qué sucede si una cuenta de nómina deja de recibir depósitos del salario durante varios meses?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "El banco la convierte en una cuenta de ahorro y puede empezar a cobrar comisiones.",
      B: "Se cierra automáticamente sin aviso.",
      C: "El dinero se transfiere al dueño del banco",
      D: "No hay ningún cambio."
    },
    correcta: "A"
  },
  {
    texto: "La empresa para la que trabajas puede obligarte a tener tu nómina en el banco que ella elija.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "FALSO",
      B: "VERDADERO"
    },
    correcta: "A"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es una ventaja de tener una cuenta de nómina?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
      A: "No puedes usarla para compras.",
      B: "Cobra comisiones cada que te depositan.",
      C: "No te permite acceder a servicios financieros.",
      D: "Evita cargar dinero en efectivo y facilita recibir tu salario."
    },
    correcta: "D"
  },
  {
    texto: "Las cuentas de nómina suelen incluir una tarjeta de débito que permite retirar efectivo o hacer pagos.",
    imagen: "/img/Imagen1.1.png",
    opciones: {
        A: "VERDADERO",
        B: "FALSO"
    },
    correcta: "A"
  },
  {
    texto: "Pedro recibe su sueldo en una cuenta de nómina y quiere cambiarlo a otro banco porque le ofrecen más beneficios. ¿Qué debe hacer?",
    imagen: "/img/Imagen1.1.png",
    opciones: {
        A: "Pedir permiso a su jefe.",
        B: "Solicitar el cambio directamente en el nuevo banco.",
        C: "Cerrar la cuenta actual sin aviso.",
        D: "Esperar a que termine el año fiscal."
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
