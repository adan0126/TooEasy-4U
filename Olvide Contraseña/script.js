/* olvidoContrasena.js - Recuperación de acceso Too-Easy */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario');
  const inputNombre = document.getElementById('Nombre');
  const inputSeguridad = document.getElementById('seguridad');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const seguridadIngresada = inputSeguridad.value.trim();

    if (!nombre || !seguridadIngresada) {
      alert('⚠️ Ingresa tu nombre de usuario y tu palabra de seguridad.');
      return;
    }

    // Leer usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem('te_users') || '[]');

    if (usuarios.length === 0) {
      alert('❌ No hay usuarios registrados en este dispositivo.');
      return;
    }

    // Buscar usuario
    const usuarioEncontrado = usuarios.find(
      (u) => u.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (!usuarioEncontrado) {
      alert('❌ Usuario no encontrado. Verifica el nombre ingresado.');
      return;
    }

    // Verificar palabra de seguridad
    if (usuarioEncontrado.seguridad.toLowerCase() === seguridadIngresada.toLowerCase()) {
      // Guardar sesión actual (como en iniciarSesion.js)
      localStorage.setItem('usuario_actual', JSON.stringify(usuarioEncontrado));

      alert(`✅ Verificación exitosa. Bienvenido/a, ${usuarioEncontrado.nombre}!`);
      // Redirigir al perfil directamente
      window.location.href = '/Perfil/index.html';
    } else {
      alert('❌ Palabra de seguridad incorrecta. Intenta de nuevo.');
    }
  });
});
