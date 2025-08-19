document.querySelectorAll('.curso.bloqueado').forEach(curso => {
  const requisito = curso.dataset.prerequisito;
  const cursoPrevio = document.getElementById(requisito);

  if (cursoPrevio && cursoPrevio.classList.contains('aprobado')) {
    curso.classList.remove('bloqueado');
    curso.classList.add('pendiente');
  }
});

function conectarCursos(origenId, destinoId) {
  const origen = document.getElementById(origenId);
  const destino = document.getElementById(destinoId);
  const svg = document.querySelector('.lineas');

  if (origen && destino && svg) {
    const rect1 = origen.getBoundingClientRect();
    const rect2 = destino.getBoundingClientRect();

    const x1 = rect1.left + rect1.width / 2 + window.scrollX;
    const y1 = rect1.bottom + window.scrollY;
    const x2 = rect2.left + rect2.width / 2 + window.scrollX;
    const y2 = rect2.top + window.scrollY;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#6B8E74");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  }
}

window.onload = () => {
  conectarCursos("mate1", "algebra");
  conectarCursos("quimica1", "quimica2");
};
