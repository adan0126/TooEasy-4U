document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRecuperar");
  const emailInput = document.getElementById("email");
  const btn = document.getElementById("btnEnviar");
  const msg = document.getElementById("msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.textContent = "";
    btn.disabled = true;

    const { domain, clientId, connection } = window.AUTH0 || {};
    const email = emailInput.value.trim();

    if (!domain || !clientId || !connection) {
      msg.textContent = "Configuración Auth0 faltante.";
      msg.style.color = "crimson";
      btn.disabled = false;
      return;
    }

    try {
      const res = await fetch(`https://${domain}/dbconnections/change_password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          email,
          connection
        })
      });

      // La API responde texto; no es JSON
      await res.text();

      msg.textContent = "📩 Si el correo existe, se enviará un enlace para restablecer tu contraseña.";
      msg.style.color = "green";
      emailInput.value = "";
    } catch (err) {
      console.error(err);
      msg.textContent = "❌ No se pudo enviar el correo. Intenta más tarde.";
      msg.style.color = "crimson";
    } finally {
      btn.disabled = false;
    }
  });
});
