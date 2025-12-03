# Documentación Técnica del Proyecto Web: Valen-Dynamics

## 1. Visión General del Proyecto
**Objetivo:** Desarrollar una "Landing Page" (página de aterrizaje) de alto impacto visual para **Valen-Dynamics**, una empresa de ingeniería aeroespacial. 
**Estilo:** "Futurismo Industrial". Se busca transmitir tecnología, sigilo (*stealth*) y solidez institucional.

### Stack Tecnológico
* **HTML5:** Estructura semántica.
* **CSS3:** Estilizado personalizado, animaciones y diseño responsivo.
* **Bootstrap 5:** Framework para componentes complejos (Carrusel y grillas).
* **JavaScript:** Interactividad básica (Control de scroll).

---

## 2. Estructura y Lógica (HTML)

El desarrollo se organiza en bloques lógicos para optimizar la Experiencia de Usuario (UX):

### A. Hero Section (Header)
* **Archivo:** `valendynamics.html`
* **Lógica:** La primera impresión es crucial. Se utiliza un elemento `<video>` en `autoplay`, `muted` y `loop` para crear una atmósfera inmersiva inmediata.
* **Detalle:** El título se superpone usando `z-index` para asegurar legibilidad sobre el video.

### B. Navegación (Sticky Navbar)
* **Lógica:** El usuario debe mantener el contexto mientras explora.
* **Implementación:** Uso de la etiqueta `<nav>` con `position: sticky; top: 0`. Esto "pega" el menú al techo del navegador al hacer scroll.

### C. Seccionado Semántico
El contenido se divide mediante etiquetas `<section>` con IDs únicos (`#sobre`, `#historia`, `#aviones`) para permitir la navegación interna fluida.
1.  **Historia:** Narrativa del "lore" de la empresa (Fundación 1958, fundadores Cuello, Takahashi, Nakamura).
2.  **Catálogo:** Lista de productos clave (F-22, NGAD, Pampero).
3.  **Innovación:** Descripción de tecnologías futuras (IA, camuflaje óptico).

### D. Componente Interactivo (Noticias)
* **Implementación:** Se integró **Bootstrap 5 Carousel**.
* **Justificación:** Provee una solución robusta y táctil (funciona en móviles) para mostrar múltiples noticias ("Acuerdo con Japón", "Pruebas NGAD") sin saturar el espacio vertical.

---

## 3. Diseño y Estilizado (CSS)

El archivo `valendynamics.css` define la identidad visual:

### A. Paleta de Colores
* **Fondo (`#121212`):** Un gris muy oscuro ("Dark Mode") que reduce la fatiga visual y evoca el fuselaje de aviones *stealth*.
* **Acento (`#0b85ff`):** Azul eléctrico utilizado en botones y subtítulos para denotar tecnología y energía.

### B. Tipografías
* **Títulos:** `Orbitron` (Google Fonts). Fuente geométrica de estilo ciencia ficción.
* **Cuerpo:** `Roboto`. Garantiza legibilidad en bloques de texto densos.

### C. Animaciones
* **@keyframes fadeIn:** Se aplica a las secciones para que aparezcan suavemente (cambio de opacidad y traslación vertical) al cargar la página.
* **Hover Effects:** Transiciones de 0.3s en enlaces y botones para dar feedback visual.

### D. Responsividad
* **Media Queries:** Se incluye `@media (max-width: 768px)` para ajustar el tamaño de los títulos y la disposición del menú en dispositivos móviles.

---

## 4. Funcionalidad (JavaScript)

Se implementó un script ligero para la navegabilidad:

* **Botón "Volver Arriba" (`#btnTop`):**
    * **Evento:** `window.onscroll`.
    * **Lógica:** Detecta si el usuario ha bajado más de 100px. Si es así, cambia el `display` del botón a `block`, permitiendo un retorno rápido al menú principal.

