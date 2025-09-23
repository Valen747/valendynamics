window.addEventListener("scroll", () => {
  const btn = document.getElementById("btnTop");
  if (window.scrollY > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});


document.getElementById("btnTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const secciones = [
  { id: "sobre", nombre: "Sobre Nosotros" },
  { id: "historia", nombre: "Historia" },
  { id: "aviones", nombre: "Aviones" },
  { id: "innovacion", nombre: "Innovación" },
  { id: "alianzas", nombre: "Alianzas" },
  { id: "noticias", nombre: "Noticias" },
  { id: "contacto", nombre: "Contacto" }
];

const nav = document.querySelector("nav");
secciones.forEach(sec => {
  const link = document.createElement("a");
  link.href = `#${sec.id}`;
  link.textContent = sec.nombre;
  nav.appendChild(link);
});
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un email válido.");
    return;
  }

  alert("¡Mensaje enviado correctamente!");
  form.reset(); 
});
