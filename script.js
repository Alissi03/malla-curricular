// Desbloquear cursos cuando su prerequisito está aprobado
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

// Al hacer click en un curso
document.querySelectorAll('.curso').forEach(curso => {
  curso.addEventListener('click', () => {
    if (curso.classList.contains('pendiente')) {
      curso.classList.remove('pendiente');
      curso.classList.add('aprobado');
      actualizarCursos();
    }
  });
});

// Inicializar desbloqueo
actualizarCursos();
