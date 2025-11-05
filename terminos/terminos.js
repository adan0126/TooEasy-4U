// terminos.js — Modal de Términos y Condiciones (versión simplificada y estable)

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("terminos");
  const label = document.querySelector('label[for="terminos"]');

  // Si no existen los elementos, no sigue
  if (!checkbox || !label) {
    console.warn("No se encontró el checkbox o el label de 'Términos y condiciones'.");
    return;
  }

  // Contenido del modal
  const contenidoHTML = `
    <h2 style="margin-top:0;">Términos y Condiciones</h2>
    <p>
      Bienvenido a <strong>TOO EASY</strong>. Antes de continuar, por favor lee los siguientes puntos:
    </p>
    <ul style="text-align:left; margin-left:20px;">
      <li>Esta plataforma es un proyecto educativo y no ofrece asesoramiento financiero profesional.</li>
      <li>El contenido tiene fines de aprendizaje y práctica.</li>
      <li>Tus datos se almacenan solo de forma local durante la sesión.</li>
      <li>Podemos actualizar estos términos sin previo aviso.</li>
      <li>Al continuar, aceptas completamente estos términos.</li>
    </ul>
    <p style="font-size:0.9em; margin-top:10px;">© 2025 Proyecto TOO EASY — “Juega hoy, triunfa mañana”.</p>
  `;

  // Función para crear el modal
  function abrirModal() {
    const overlay = document.createElement("div");
    overlay.id = "modalTerminos";
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    `;

    const modal = document.createElement("div");
    modal.style.cssText = `
      background: #fff;
      color: #333;
      border-radius: 15px;
      padding: 25px 30px;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 0 15px rgba(0,0,0,0.4);
      position: relative;
      font-family: 'Poppins', sans-serif;
      text-align: center;
    `;

    // Botón cerrar (x)
    const cerrar = document.createElement("span");
    cerrar.textContent = "×";
    cerrar.style.cssText = `
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 24px;
      cursor: pointer;
      color: #888;
    `;
    cerrar.addEventListener("click", () => overlay.remove());

    // Botón aceptar
    const btnAceptar = document.createElement("button");
    btnAceptar.textContent = "Aceptar";
    btnAceptar.style.cssText = `
      background: #ff7b00;
      border: none;
      color: white;
      font-weight: bold;
      border-radius: 8px;
      padding: 10px 20px;
      margin-top: 20px;
      cursor: pointer;
    `;
    btnAceptar.addEventListener("click", () => {
      checkbox.checked = true;
      overlay.remove();
      alert("✅ Has aceptado los términos y condiciones.");
    });

    modal.innerHTML = contenidoHTML;
    modal.appendChild(btnAceptar);
    modal.appendChild(cerrar);
    overlay.appendChild(modal);

    // Cerrar si se hace clic fuera del modal
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);
  }

  // Evento al hacer clic en el texto del label
  label.style.cursor = "pointer";
  label.addEventListener("click", (e) => {
    e.preventDefault(); // evita marcar el checkbox directamente
    abrirModal();
  });
});
