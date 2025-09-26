import React, { useEffect, useState } from "react";
import "./App.css";

const secciones = [
  { id: "sobre", nombre: "Sobre Nosotros" },
  { id: "historia", nombre: "Historia" },
  { id: "aviones", nombre: "Aviones" },
  { id: "innovacion", nombre: "Innovación" },
  { id: "alianzas", nombre: "Alianzas" },
  { id: "noticias", nombre: "Noticias" },
  { id: "contacto", nombre: "Contacto" },
];

function App() {
  const [showBtn, setShowBtn] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Mostrar/ocultar botón arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, mensaje } = formData;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    }

    alert("¡Mensaje enviado correctamente!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="App">
      <header>
        <video src="/valen35.mp4" autoPlay muted loop playsInline />
        <h1>Valen-Dynamics</h1>
        <h2>Dominamos el aire, defendemos tu futuro.</h2>
      </header>

      <nav>
        {secciones.map((sec) => (
          <a key={sec.id} href={`#${sec.id}`}>
            {sec.nombre}
          </a>
        ))}
      </nav>

      {/* SOBRE */}
      <section id="sobre">
        <h2>Sobre Nosotros</h2>
        <p>
          Valen-Dynamics es una empresa privada de ingeniería y desarrollo
          aeroespacial fundada en los años 40. Con sede en Argentina y
          presencia global, hemos sido responsables del diseño, innovación y
          despliegue de algunas de las aeronaves más avanzadas del mundo.
        </p>
        <p>
          Nos especializamos en la integración de sistemas de defensa,
          aviónica avanzada y tecnologías de combate aéreo de última
          generación. Nuestro enfoque se basa en combinar tradición
          aeronáutica con innovación constante para anticiparnos a los
          desafíos del siglo XXI.
        </p>
      </section>

      {/* HISTORIA */}
      <section id="historia">
        <h2>Nuestra Historia</h2>
        <p>
          Desde nuestra fundación, hemos participado en numerosos proyectos
          internacionales de defensa, liderando programas secretos y
          colaborando con aliados estratégicos.
        </p>
        <p>
          El ingeniero en jefe y fundador, <strong>Fabrizio Valentino Cuello</strong>, es
          reconocido como una figura clave en el diseño de estos modelos.
        </p>
      </section>

      {/* AVIONES */}
      <section id="aviones">
        <h2>Aviones Legendarios</h2>
        <ul>
          <li>
            <strong>F-22 Raptor</strong> – Superioridad aérea sigilosa, velocidad
            Mach 2.2, diseñado por Valen-Dynamics junto con Lockheed Martin.
          </li>
          <li>
            <strong>F-35 Lightning II</strong> – Polivalente, furtivo y
            conectado.
          </li>
          <li>
            <strong>NGAD</strong> – Proyecto secreto de sexta generación con IA
            a bordo.
          </li>
        </ul>
      </section>

      {/* INNOVACIÓN */}
      <section id="innovacion">
        <h2>Innovación Tecnológica</h2>
        <p>
          Estamos a la vanguardia en stealth, materiales compuestos,
          inteligencia artificial aplicada al combate, propulsión hipersónica
          y guerra electrónica.
        </p>
      </section>

      {/* ALIANZAS */}
      <section id="alianzas">
        <h2>Alianzas Estratégicas</h2>
        <ul>
          <li>
            <strong>Lockheed Martin</strong> – Desarrollo conjunto de aviones de
            quinta y sexta generación.
          </li>
          <li>
            <strong>NASA</strong> – Investigación en propulsión limpia.
          </li>
          <li>
            <strong>FAdeA</strong> – Producción local de componentes
            estructurales.
          </li>
        </ul>
      </section>

      {/* NOTICIAS */}
      <section id="noticias">
        <h2>Noticias Recientes</h2>
        <p>
          <strong>Julio 2025:</strong> Valen-Dynamics comienza pruebas de vuelo
          con el nuevo caza NGAD-F1 sobre el Atlántico Sur.
        </p>

        {/* Bootstrap Carousel */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/MIG41.jpeg" className="d-block w-100" alt="Camuflaje óptico" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Camuflaje óptico</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/japansext.jpg" className="d-block w-100" alt="Acuerdo con Japón" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Acuerdo con Japón</h5>
      </div>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleInputChange}
            required
          />

          <input type="submit" value="Enviar" className="contacto-btn" />
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        © 2025 Valen-Dynamics. Fundador: Fabrizio Valentino Cuello.
      </footer>

      {/* BOTÓN ARRIBA */}
      {showBtn && (
        <button
          id="btnTop"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          title="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;

