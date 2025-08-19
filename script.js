document.querySelectorAll('.curso.bloqueado').forEach(curso => {
  let requisito = curso.dataset.prerequisito;
  let cursoPrevio = document.getElementById(requisito);

  if (cursoPrevio && cursoPrevio.classList.contains('aprobado')) {
    curso.classList.remove('bloqueado');
    curso.classList.add('pendiente');
  }
});
