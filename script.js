// Ya no necesitamos ocultar ni mostrar secciones
// Solo podemos dejar esto vacío o eliminar completamente este script

// Si quieres que al hacer clic en el menú haga scroll suave:
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});
