var titulos = [
  "La regla 50/30/20",
  "¿Qué son necesidades (50%)?",
  "¿Qué son deseos (30%)?",
  "Ahorro y deudas (20%)",
  "Ajustes y personalización",
  "Ejemplo práctico"
];

var textosCard1 = [
  "Distribuye tu ingreso neto: 50% necesidades, 30% deseos, 20% ahorro/deudas.",
  "Objetivo: equilibrio y constancia en el ahorro."
];
var textosCard2 = [
  "Incluye: renta, comida básica, transporte, salud, servicios, educación obligatoria.",
  "Priorízalas siempre antes que deseos."
];
var textosCard3 = [
  "Incluye: ocio, apps, streaming, restaurantes, compras opcionales.",
  "Se pueden ajustar si suben las necesidades."
];
var textosCard4 = [
  "Reserva al menos 20% para: fondo de emergencia, metas, inversión básica o pago de deudas.",
  "Págate primero: separa el 20% al inicio del mes."
];
var textosCard5 = [
  "Si la renta es alta: 60/20/20 o 70/20/10.",
  "Adáptala a tu realidad manteniendo un % de ahorro sostenido."
];
var textosCard6 = [
  "Ingreso $12,000 → $6,000 / $3,600 / $2,400.",
  "Si gastas de más en deseos, recorta al próximo mes para volver al % objetivo."
];

// Motor igual al anterior…
function mostrarTextoCard(t, id){var c=document.getElementById(id);c.innerHTML="";t.forEach(x=>{var p=document.createElement("p");p.textContent=x;c.appendChild(p);});}
var cards=document.querySelectorAll(".card");var iA=0;
document.querySelectorAll(".card .card-front .card-title").forEach((el,i)=>el.textContent=titulos[i]||`Tarjeta ${i+1}`);
for(var i=1;i<cards.length;i++)cards[i].style.display="none";
["1","2","3","4","5","6"].forEach(n=>mostrarTextoCard(eval("textosCard"+n),"texto-card"+n));
cards.forEach(c=>c.addEventListener("click",()=>c.querySelector(".card-inner").classList.toggle("flipped")));
document.getElementById("nextCard").addEventListener("click",()=>cambiar(1));
document.getElementById("prevCard").addEventListener("click",()=>cambiar(-1));
function cambiar(d){cards[iA].style.display="none";iA=(iA+d+cards.length)%cards.length;cards[iA].style.display="block";}
