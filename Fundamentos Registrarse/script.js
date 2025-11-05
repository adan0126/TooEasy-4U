/* cuentasBancarias.js - Registro de usuario desde sección Cuentas Bancarias */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputUsuario = document.getElementById('usuario');
  const inputContrasena = document.getElementById('contrasena');
  const inputPalabra = document.getElementById('palabra');
  const checkTerminos = document.getElementById('terminos');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = inputUsuario.value.trim();
    const contrasena = inputContrasena.value.trim();
    const palabra = inputPalabra.value.trim();

    // Validaciones básicas
    if (!usuario || !contrasena || !palabra) {
      alert('⚠️ Completa todos los campos antes de continuar.');
      return;
    }

    if (!checkTerminos.checked) {
      alert('⚠️ Debes aceptar los términos y condiciones.');
      return;
    }

    // Leer usuarios existentes
    const usuarios = JSON.parse(localStorage.getItem('te_users') || '[]');

    // Verificar si ya existe el usuario
    if (usuarios.some((u) => u.nombre.toLowerCase() === usuario.toLowerCase())) {
      alert('❌ Ese nombre de usuario ya está registrado.');
      return;
    }

    // Crear nuevo usuario
    const nuevoUsuario = {
      nombre: usuario,
      contraseña: contrasena,
      seguridad: palabra,
      fechaRegistro: new Date().toISOString(),
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('te_users', JSON.stringify(usuarios));

    alert('✅ Cuenta creada con éxito. Ahora puedes iniciar sesión.');
    window.location.href = '/Iniciar Sesion/index.html';
  });
});
