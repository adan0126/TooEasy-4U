/* nuevaContrasena.js - Restablecer contraseña Too-Easy */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario');
  const inputs = form.querySelectorAll('input');
  const inputNueva = inputs[0];
  const inputConfirmar = inputs[1];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nueva = inputNueva.value.trim();
    const confirmar = inputConfirmar.value.trim();

    if (!nueva || !confirmar) {
      alert('⚠️ Completa ambos campos.');
      return;
    }

    if (nueva !== confirmar) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    // Leer usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem('te_users') || '[]');
    const usuarioVerificado = JSON.parse(localStorage.getItem('usuario_verificado'));

    if (!usuarioVerificado) {
      alert('⚠️ No hay un usuario verificado. Regresa a la pantalla anterior.');
      return;
    }

    // Actualizar la contraseña del usuario correspondiente
    const usuarioIndex = usuarios.findIndex(
      (u) => u.nombre === usuarioVerificado.nombre
    );

    if (usuarioIndex === -1) {
      alert('❌ No se encontró el usuario.');
      return;
    }

    usuarios[usuarioIndex].contraseña = nueva;

    // Guardar cambios
    localStorage.setItem('te_users', JSON.stringify(usuarios));
    localStorage.removeItem('usuario_verificado');

    alert('✅ Contraseña actualizada correctamente.');
    window.location.href = '/Iniciar Sesion/index.html';
  });
});
