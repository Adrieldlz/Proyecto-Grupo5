// Validación de login de usuario
function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('loginError');

  if (email === 'usuario@email.com' && password === 'usuario') {
    window.location.href = 'citas.html';
  } else {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Correo electrónico o contraseña incorrectos';
  }
  return false;
}

// Validación de login de administrador
function validateAdminLogin(event) {
  event.preventDefault();
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;
  const errorMessage = document.getElementById('adminLoginError');

  if (email === 'admin@email.com' && password === 'admin') {
    window.location.href = 'admin.html';
  } else {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Usuario o contraseña incorrectos';
  }
  return false;
}

// Validación de registro de usuario
function validateRegister(event) {
  const dni = document.getElementById('dni').value;
  const telefono = document.getElementById('telefono').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  let valid = true;
  let errorMsg = '';

  if (!/^\d{8}$/.test(dni)) {
    errorMsg += 'El DNI debe tener 8 dígitos.\n';
    valid = false;
  }
  if (!/^\d{9}$/.test(telefono)) {
    errorMsg += 'El teléfono debe tener 9 dígitos.\n';
    valid = false;
  }
  if (password !== confirmPassword) {
    errorMsg += 'Las contraseñas no coinciden.';
    valid = false;
  }

  if (!valid) {
    alert(errorMsg);
    event.preventDefault();
  } else {
    alert('Cuenta creada exitosamente. Serás redirigido al login.');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 2000);
  }
  return valid;
}



// Función para redirigir después de reservar cita
function confirmReservation() {
  window.location.href = 'confirmacion.html';
}




