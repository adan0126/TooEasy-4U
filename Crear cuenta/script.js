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

