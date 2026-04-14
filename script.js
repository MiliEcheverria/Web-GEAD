function toggleProyecto(elemento) {
  const extra = elemento.previousElementSibling;

  if (extra.style.display === "none" || extra.style.display === "") {
    extra.style.display = "block";
    elemento.textContent = "Leer menos";
  } else {
    extra.style.display = "none";
    elemento.textContent = "Leer más";
  }
}

function toggleAnio(id, boton) {
  const contenido = document.getElementById(id);

  if (contenido.style.display === "none" || contenido.style.display === "") {
    contenido.style.display = "block";
    boton.textContent = "−";
  } else {
    contenido.style.display = "none";
    boton.textContent = "+";
  }
}