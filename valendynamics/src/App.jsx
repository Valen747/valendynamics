import React, { useEffect, useState } from "react";

const secciones = [
  { id: "sobre", nombre: "Sobre Nosotros" },
  { id: "historia", nombre: "Historia" },
  { id: "aviones", nombre: "Aviones" },
  { id: "innovacion", nombre: "Innovación" },
  { id: "alianzas", nombre: "Alianzas" },
  { id: "noticias", nombre: "Noticias" },
  { id: "contacto", nombre: "Contacto" },
];

export default function App() {
  const [showBtn, setShowBtn] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  useEffect(() => {
    const onScroll = () => setShowBtn(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nombre || !email || !mensaje) return alert("Por favor, completa todos los campos.");
    if (!emailRegex.test(email)) return alert("Por favor, ingresa un email válido.");
    alert("¡Mensaje enviado correctamente!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="header-wrap">
        <video className="header-video" src="/valen35.mp4" autoPlay muted loop playsInline />
        <div className="header-overlay" />
        <h1 className="header-title">Valen-Dynamics</h1>
        <h2 className="header-subtitle">Dominamos el aire, defendemos tu futuro.</h2>
      </header>

      {/* NAV */}
      <nav className="navbar">
        <div className="container mx-auto px-4 py-3 text-center">
          {secciones.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`} className="nav-link">
              {sec.nombre}
            </a>
          ))}
        </div>
      </nav>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <h2>Sobre Nosotros</h2>
        <p className="muted mt-4">
          Valen-Dynamics es una empresa privada de ingeniería y desarrollo aeroespacial fundada en los años 40...
        </p>
        <p className="muted mt-3">
          Nos especializamos en la integración de sistemas de defensa...
        </p>
      </section>

      {/* HISTORIA */}
      <section id="historia" className="section">
        <h2>Nuestra Historia</h2>
        <p className="muted mt-4">
          Desde nuestra fundación, hemos participado en numerosos proyectos internacionales...
        </p>
        <p className="muted mt-3">
          El ingeniero en jefe y fundador, <strong>Fabrizio Valentino Cuello</strong>...
        </p>
      </section>

      {/* AVIONES */}
      <section id="aviones" className="section">
        <h2>Aviones Legendarios</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside text-neutral-300">
          <li><strong>F-22 Raptor</strong> – Superioridad aérea sigilosa, Mach 2.2.</li>
          <li><strong>F-35 Lightning II</strong> – Polivalente, furtivo y conectado.</li>
          <li><strong>NGAD</strong> – Sexta generación con IA a bordo.</li>
        </ul>
      </section>

      {/* INNOVACIÓN */}
      <section id="innovacion" className="section">
        <h2>Innovación Tecnológica</h2>
        <p className="muted mt-4">
          Vanguardia en stealth, materiales compuestos, IA aplicada al combate...
        </p>
      </section>

      {/* ALIANZAS */}
      <section id="alianzas" className="section">
        <h2>Alianzas Estratégicas</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside text-neutral-300">
          <li><strong>Lockheed Martin</strong> – Aviones de 5ª y 6ª gen.</li>
          <li><strong>NASA</strong> – Investigación en propulsión limpia.</li>
          <li><strong>FAdeA</strong> – Producción local de componentes.</li>
        </ul>
      </section>

      {/* NOTICIAS + Carrusel Bootstrap */}
      <section id="noticias" className="section">
        <h2>Noticias Recientes</h2>
        <p className="muted mt-4">
          <strong>Julio 2025:</strong> Valen-Dynamics comienza pruebas de vuelo...
        </p>

        <div id="carouselExampleCaptions" className="carousel slide carousel-shell" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/MIG41.jpeg" className="d-block w-100" alt="Camuflaje óptico" />
              <div className="carousel-caption d-none d-md-block animate-fadeInUp">
                <h5>Camuflaje óptico</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/japansext.jpg" className="d-block w-100" alt="Acuerdo con Japón" />
              <div className="carousel-caption d-none d-md-block animate-fadeInUp">
                <h5>Acuerdo con Japón</h5>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section section-narrow">
        <h2>Contacto</h2>
        <form onSubmit={onSubmit} className="mt-4">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input id="nombre" type="text" className="form-input" value={formData.nombre} onChange={onChange} required />

          <label htmlFor="email" className="form-label">Email:</label>
          <input id="email" type="email" className="form-input" value={formData.email} onChange={onChange} required />

          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea id="mensaje" rows="5" className="form-textarea" value={formData.mensaje} onChange={onChange} required />

          <button type="submit" className="btn-primary mt-3">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Valen-Dynamics. Fundador: Fabrizio Valentino Cuello.
      </footer>

      {/* BOTÓN ARRIBA */}
      {showBtn && (
        <button
          className="btn-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
}
