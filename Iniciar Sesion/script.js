/* iniciarSesion.js - Inicio de sesión Too-Easy */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario');
  const inputNombre = document.getElementById('Nombre');
  const inputContrasena = document.getElementById('contraseña');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const contrasena = inputContrasena.value.trim();

    if (!nombre || !contrasena) {
      alert('⚠️ Ingresa tu nombre de usuario y contraseña.');
      return;
    }

    // Leer los usuarios guardados
    const usuarios = JSON.parse(localStorage.getItem('te_users') || '[]');

    // Buscar el usuario
    const usuarioEncontrado = usuarios.find(
      (u) => u.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (!usuarioEncontrado) {
      alert('❌ Usuario no encontrado. Crea una cuenta primero.');
      return;
    }

    if (usuarioEncontrado.contraseña !== contrasena) {
      alert('❌ Contraseña incorrecta. Intenta de nuevo.');
      return;
    }

    // Guardar sesión actual
    localStorage.setItem('usuario_actual', JSON.stringify(usuarioEncontrado));

    alert(`✅ Bienvenido/a, ${usuarioEncontrado.nombre}!`);
    window.location.href = '/Perfil/index.html';
  });
});
