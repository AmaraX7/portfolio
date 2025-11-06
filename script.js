const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

// Mostrar solo la sección inicial (hero) al cargar
sections.forEach(sec => {
  if (sec.id !== "hero") sec.style.display = "none";
});

// Evento de navegación
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // evitar scroll automático

    const target = link.getAttribute("href").substring(1); // quita el #

    sections.forEach(sec => {
      if (sec.id === target) sec.style.display = "block";
      else sec.style.display = "none";
    });
  });
});
