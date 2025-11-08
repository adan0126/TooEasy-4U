var titulos = [
  "¿Qué es presupuesto inteligente?",
  "Registro de ingresos y gastos",
  "Categorías y límites",
  "Analiza patrones y fugas",
  "Ajustes y metas",
  "Ejemplo de mejora mensual"
];

var textosCard1 = [
  "No es solo dividir: es planear, registrar, controlar y ajustar cada mes.",
  "Ciclo PDCA: Planear → Hacer → Verificar → Actuar."
];
var textosCard2 = [
  "Registra todo: fijos y variables. Usa app, hoja de cálculo o libreta.",
  "La precisión del registro define la calidad de tus decisiones."
];
var textosCard3 = [
  "Asigna límites por categoría (necesidades, deseos, ahorro/deudas).",
  "Define % objetivo y revisa desviaciones."
];
var textosCard4 = [
  "Detecta fugas: comidas fuera, apps duplicadas, comisiones.",
  "Indicadores útiles: % de ahorro, % de deudas, gasto variable."
];
var textosCard5 = [
  "Ajusta mes a mes; crea metas SMART (monto, fecha, propósito).",
  "Automatiza transferencias de ahorro el día de pago."
];
var textosCard6 = [
  "Mes 1: ahorras 10%. Tras analizar fugas, bajas deseos 5% y subes ahorro a 15%.",
  "En 6 meses, tu fondo de emergencia ya cubre 2–3 meses de gastos."
];

// Motor igual
function mostrarTextoCard(t, id){var c=document.getElementById(id);c.innerHTML="";t.forEach(x=>{var p=document.createElement("p");p.textContent=x;c.appendChild(p);});}
var cards=document.querySelectorAll(".card");var iA=0;
document.querySelectorAll(".card .card-front .card-title").forEach((el,i)=>el.textContent=titulos[i]||`Tarjeta ${i+1}`);
for(var i=1;i<cards.length;i++)cards[i].style.display="none";
["1","2","3","4","5","6"].forEach(n=>mostrarTextoCard(eval("textosCard"+n),"texto-card"+n));
cards.forEach(c=>c.addEventListener("click",()=>c.querySelector(".card-inner").classList.toggle("flipped")));
document.getElementById("nextCard").addEventListener("click",()=>cambiar(1));
document.getElementById("prevCard").addEventListener("click",()=>cambiar(-1));
function cambiar(d){cards[iA].style.display="none";iA=(iA+d+cards.length)%cards.length;cards[iA].style.display="block";}

