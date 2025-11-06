/* crear.js - Registro Too-Easy */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('Nombre').value.trim();
    const contrasena = document.getElementById('contraseña').value.trim();
    const seguridad = document.getElementById('seguridad').value.trim();
    const terminos = document.getElementById('terminos').checked;

    if (!nombre || !contrasena || !seguridad) {
      alert('⚠️ Por favor, completa todos los campos.');
      return;
    }

    if (!terminos) {
      alert('⚠️ Debes aceptar los términos y condiciones.');
      return;
    }

    // Obtener usuarios existentes
    const usuarios = JSON.parse(localStorage.getItem('te_users') || '[]');

    // Verificar que no exista el usuario
    if (usuarios.some(u => u.nombre.toLowerCase() === nombre.toLowerCase())) {
      alert('⚠️ Este nombre de usuario ya está registrado.');
      return;
    }

    // Agregar nuevo usuario
    const nuevoUsuario = {
      nombre,
      contraseña: contrasena,
      seguridad,
      foto: './img/perfil.jpg'
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('te_users', JSON.stringify(usuarios));

    alert('✅ Cuenta creada con éxito. Ahora puedes iniciar sesión.');
    window.location.href = '/Iniciar Sesion/index.html';
  });
});

// ...tus validaciones previas
const email = document.getElementById('email').value.trim();
const password = document.getElementById('contraseña').value.trim();

try {
  const { domain, clientId, connection } = window.AUTH0;
  const r = await fetch(`https://${domain}/dbconnections/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      email,
      password,
      connection
    })
  });

  // Puede devolver 200/OK o 400 si ya existe; maneja ambos casos
  const data = await r.json().catch(() => ({}));
  if (!r.ok && data?.name !== "BadRequestError" && !String(data?.message).includes("already exists")) {
    alert("No se pudo registrar en Auth0. Intenta más tarde.");
    return;
  }
} catch (e) {
  console.error(e);
  alert("No se pudo registrar en Auth0. Intenta más tarde.");
  return;
}

// continúa con tu guardado en localStorage como ya lo haces…
