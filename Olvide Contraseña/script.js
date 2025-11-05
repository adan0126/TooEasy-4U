/* olvidoContrasena.js - Verificación de palabra de seguridad Too-Easy */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario');
  const inputRespuesta = document.getElementById('Nombre');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const respuestaIngresada = inputRespuesta.value.trim();
    if (!respuestaIngresada) {
      alert('⚠️ Ingresa tu palabra clave para continuar.');
      return;
    }

    // Leer usuarios del localStorage (por ahora)
    const usuarios = JSON.parse(localStorage.getItem('te_users') || '[]');

    if (usuarios.length === 0) {
      alert('❌ No hay usuarios registrados en este dispositivo.');
      return;
    }

    // Buscar usuario con esa palabra de seguridad
    const usuarioEncontrado = usuarios.find(
      (u) => u.seguridad?.toLowerCase() === respuestaIngresada.toLowerCase()
    );

    if (usuarioEncontrado) {
      alert(`✅ Verificación exitosa. Bienvenido/a, ${usuarioEncontrado.nombre}!`);
      // Redirigir a la pantalla de inicio (o cambio de contraseña)
      window.location.href = '/Pantalla sesion iniciada/index.html';
    } else {
      alert('❌ Palabra clave incorrecta. Intenta de nuevo.');
    }
  });
});
