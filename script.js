const abrirBtn = document.getElementById('abrirModalBtn');
const cerrarBtn = document.getElementById('cerrarModalBtn');
const overlay = document.getElementById('modalOverlay');

function abrirModal() {
  overlay.classList.add('visible');
  overlay.setAttribute('aria-hidden', 'false');
}

function cerrarModal() {
  overlay.classList.remove('visible');
  overlay.setAttribute('aria-hidden', 'true');
}

abrirBtn.addEventListener('click', abrirModal);
cerrarBtn.addEventListener('click', cerrarModal);

// Cerrar si se hace clic fuera del modal
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    cerrarModal();
  }
});

// Cerrar con Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && overlay.classList.contains('visible')) {
    cerrarModal();
  }
});

