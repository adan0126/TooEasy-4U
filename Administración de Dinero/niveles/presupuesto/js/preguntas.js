const urlMasLecciones = "../../index.html";
const preguntas = [
  { texto:"El presupuesto inteligente se caracteriza por…", imagen:"/img/Imagen1.1.png",
    opciones:{A:"Dividir una vez y ya.", B:"Planear, controlar y ajustar cada mes.", C:"No registrar gastos."}, correcta:"B"},
  { texto:"Registrar ingresos y gastos sirve para…", imagen:"/img/Imagen1.1.png",
    opciones:{A:"Tomar decisiones informadas.", B:"Gastar más en deseos.", C:"Eliminar metas."}, correcta:"A"},
  { texto:"V/F: Detectar fugas (apps, comidas fuera) ayuda a mejorar el ahorro.", imagen:"/img/Imagen1.1.png",
    opciones:{A:"VERDADERO.", B:"FALSO."}, correcta:"A"},
  { texto:"Un buen hábito es…", imagen:"/img/Imagen1.1.png",
    opciones:{A:"Automatizar el ahorro al día de pago.", B:"Pagar deseos primero.", C:"Nunca revisar el presupuesto."}, correcta:"A"}
];

let preguntaActual=0, aciertos=0, seleccionUsuario=null;
const textoPregunta=document.getElementById("textoPregunta");
const opcionesContainer=document.getElementById("opcionesContainer");
const imagenPregunta=document.getElementById("imagenPregunta");
const resultado=document.getElementById("resultado");
const barraProgreso=document.querySelector(".progreso");
const botonComprobar=document.getElementById("botonComprobar");
function cargarPregunta(){resultado.style.display="none";resultado.innerHTML="";botonComprobar.style.display="none";seleccionUsuario=null;
  const p=preguntas[preguntaActual];textoPregunta.textContent=p.texto;imagenPregunta.src=p.imagen;opcionesContainer.innerHTML="";
  for(let k in p.opciones){const btn=document.createElement("div");btn.classList.add("opcion");btn.dataset.key=k;btn.innerHTML=`<strong>${k})</strong> ${p.opciones[k]}`;
    btn.addEventListener("click",()=>seleccionarOpcion(btn,k));opcionesContainer.appendChild(btn);} actualizarProgreso();}
function seleccionarOpcion(b,k){document.querySelectorAll(".opcion").forEach(x=>x.classList.remove("seleccionada"));b.classList.add("seleccionada");seleccionUsuario=k;botonComprobar.style.display="block";}
botonComprobar.addEventListener("click",()=>{ if(!seleccionUsuario) return; verificarRespuesta(seleccionUsuario); botonComprobar.style.display="none";});
function verificarRespuesta(s){const p=preguntas[preguntaActual];const ok=p.correcta;const botones=[...document.querySelectorAll(".opcion")];
  botones.forEach(b=>b.style.pointerEvents="none"); const right=botones.find(b=>b.dataset.key===ok); if(right) right.classList.add("correcta");
  if(s===ok){aciertos++;mostrarResultado(true);}else{mostrarResultado(false, ok, p.opciones[ok]);}}
function mostrarResultado(es, key=null, txt=""){resultado.className="resultado "+(es?"correcto":"incorrecto");
  resultado.innerHTML= es? `<div><b>¡Correcto!</b></div><button class="boton-siguiente">Siguiente</button>`
  : `<div>Incorrecto<br>La respuesta correcta era <b>${key}) ${txt}</b></div><button class="boton-siguiente">Siguiente</button>`;
  resultado.style.display="flex"; resultado.querySelector("button").addEventListener("click",siguientePregunta);}
function siguientePregunta(){preguntaActual++; if(preguntaActual<preguntas.length){cargarPregunta();}else{mostrarFinal();}}
function mostrarFinal(){const total=preguntas.length; opcionesContainer.innerHTML=""; imagenPregunta.src="/img/Imagen1.1.png"; textoPregunta.textContent="Resultados finales";
  resultado.className="resultado correcto"; resultado.style.display="flex";
  resultado.innerHTML=`<div style="font-size:18px;font-weight:bold;">Obtuviste ${aciertos} de ${total} correctas</div>
    <div style="display:flex; gap:10px;"><button class="boton-siguiente" onclick="reiniciar()">Reintentar</button>
    <button class="boton-siguiente" onclick="irMasLecciones()">Más lecciones</button></div>`; barraProgreso.style.width="100%";}
function reiniciar(){preguntaActual=0;aciertos=0;cargarPregunta();}
function irMasLecciones(){window.location.href=urlMasLecciones;}
function actualizarProgreso(){const progreso=((preguntaActual+1)/preguntas.length)*100; barraProgreso.style.width=`${progreso}%`;}
cargarPregunta();