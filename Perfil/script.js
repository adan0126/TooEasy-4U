/* perfil.js - Perfil Too-Easy */

const editarFotoBtn = document.getElementById("editarFoto");
const inputFoto = document.getElementById("inputFoto");
const imagenPerfil = document.getElementById("imagenPerfil");
const nombreUsuarioInput = document.getElementById("nombreUsuario");
const cerrarSesionBtn = document.getElementById("cerrarSesion");

// --- Cargar datos del usuario actual ---
window.addEventListener("DOMContentLoaded", () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuario_actual"));

  if (!usuarioActual) {
    alert("⚠️ No hay sesión activa. Inicia sesión primero.");
    window.location.href = "/Iniciar Sesion/index.html";
    return;
  }

  nombreUsuarioInput.value = usuarioActual.nombre;
  imagenPerfil.src = usuarioActual.foto || "./img/perfil.jpg";
});

// --- Cambiar foto de perfil ---
editarFotoBtn.addEventListener("click", () => inputFoto.click());

inputFoto.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const nuevaFoto = event.target.result;
    imagenPerfil.src = nuevaFoto;

    // Actualizar foto en usuario actual y en lista
    const usuarioActual = JSON.parse(localStorage.getItem("usuario_actual"));
    usuarioActual.foto = nuevaFoto;
    localStorage.setItem("usuario_actual", JSON.stringify(usuarioActual));

    const usuarios = JSON.parse(localStorage.getItem("te_users") || "[]");
    const index = usuarios.findIndex(u => u.nombre === usuarioActual.nombre);
    if (index !== -1) {
      usuarios[index].foto = nuevaFoto;
      localStorage.setItem("te_users", JSON.stringify(usuarios));
    }
  };
  reader.readAsDataURL(file);
});

// --- Cerrar sesión ---
cerrarSesionBtn.addEventListener("click", () => {
  localStorage.removeItem("usuario_actual");
  alert("👋 Sesión cerrada con éxito.");
  window.location.href = "/Pantalla de inicio/index.html";
});
