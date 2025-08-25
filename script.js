// Función para desbloquear cursos cuyo prerequisito está aprobado
function actualizarCursos() {
  document.querySelectorAll('.curso.bloqueado').forEach(curso => {
    const requisito = curso.dataset.prerequisito;
    const cursoPrevio = document.getElementById(requisito);

    if (cursoPrevio && cursoPrevio.classList.contains('aprobado')) {
      curso.classList.remove('bloqueado');
      curso.classList.add('pendiente');
    }
  });
}

// Click en un curso
document.querySelectorAll('.curso').forEach(curso => {
  curso.addEventListener('click', () => {
    if (curso.classList.contains('pendiente')) {
      curso.classList.remove('pendiente');
      curso.classList.add('aprobado');
      actualizarCursos();
    }
  });
});

// Inicializar
actualizarCursos();
