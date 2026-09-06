import "./Ebook.css";
import { motion } from "framer-motion";
import cover from "./assets/ebook-cover.png";

const CHECKOUT_URL = "https://pay.hotmart.com/P107445154L";

const benefits = [
  "HTML, CSS y JavaScript explicados desde cero",
  "Responsive Design para celulares, tablets y desktop",
  "Formularios, validaciones y experiencia de usuario",
  "Cómo utilizar IA como apoyo sin depender de ella",
  "Proyecto completo de una landing page profesional",
  "Publicación con GitHub y Vercel",
  "Portfolio, clientes, Upwork y Fiverr",
];

const audience = [
  ["01", "Empezás desde cero", "No necesitás conocimientos avanzados para comenzar."],
  ["02", "Querés crear webs reales", "El enfoque está puesto en construir landing pages, no solo leer teoría."],
  ["03", "Querés usar IA mejor", "Aprendés a entender, revisar y modificar el código que te ayuda a generar."],
  ["04", "Querés ofrecer tu trabajo", "El ebook también cubre portfolio, clientes y plataformas freelance."],
];

const faqs = [
  ["¿Necesito saber programación antes de empezar?", "No. El ebook fue planteado para acompañarte desde los fundamentos y avanzar de forma práctica."],
  ["¿El curso enseña solamente a usar IA?", "No. Primero aprendés fundamentos reales de desarrollo web y después usás la IA como una herramienta para acelerar y mejorar tu trabajo."],
  ["¿Cómo recibo el ebook?", "La compra y la entrega digital se procesan mediante Hotmart. Una vez aprobado el pago, accedés al producto desde la plataforma."],
  ["¿Qué tecnologías se trabajan?", "HTML, CSS y JavaScript, además de herramientas prácticas como GitHub, Vercel y servicios para formularios."],
  ["¿Tiene garantía?", "La oferta está configurada con 7 días de garantía a través de Hotmart."],
];

function Ebook() {
  return (
    <div className="ebook-page">
      <nav className="ebook-nav">
        <a className="ebook-brand" href="/">Zenith <span>Labs</span></a>
        <div className="ebook-nav-links">
          <a href="#contenido">Contenido</a>
          <a href="#para-quien">Para quién</a>
          <a href="#faq">FAQ</a>
          <a className="ebook-nav-buy" href={CHECKOUT_URL}>Comprar</a>
        </div>
      </nav>

      <main>
        <section className="ebook-hero">
          <motion.div
            className="ebook-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="ebook-kicker">CURSO + EBOOK PRÁCTICO</span>
            <h1>Creá webs y landing pages <span>dominando la IA</span></h1>
            <p className="ebook-lead">
              Aprendé desarrollo web desde cero con HTML, CSS y JavaScript, construí proyectos reales y utilizá la IA como una herramienta profesional para trabajar más rápido y con criterio.
            </p>

            <div className="ebook-checks">
              <span>✓ Más de 400 páginas</span>
              <span>✓ Ejercicios + soluciones</span>
              <span>✓ Proyecto completo</span>
              <span>✓ Enfoque en conseguir clientes</span>
            </div>

            <div className="ebook-hero-actions">
              <a className="ebook-primary" href={CHECKOUT_URL}>Comprar ahora — US$39</a>
              <a className="ebook-secondary" href="#contenido">Ver qué incluye</a>
            </div>
            <small>Pago único · Checkout seguro de Hotmart · Garantía de 7 días</small>
          </motion.div>

          <motion.div
            className="ebook-cover-wrap"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="ebook-glow" />
            <img src={cover} alt="Portada del curso de programación" className="ebook-cover" />
            <div className="ebook-cover-badge">418<br/><span>páginas</span></div>
          </motion.div>
        </section>

        <section className="ebook-trust-row" aria-label="Beneficios de compra">
          <div><b>Acceso digital</b><span>Disponible después del pago</span></div>
          <div><b>Pago protegido</b><span>Procesado por Hotmart</span></div>
          <div><b>Garantía 7 días</b><span>Configurada en Hotmart</span></div>
          <div><b>Aprendizaje práctico</b><span>Del código al cliente</span></div>
        </section>

        <section id="contenido" className="ebook-section">
          <div className="ebook-section-heading">
            <span>LO QUE VAS A APRENDER</span>
            <h2>De los fundamentos a una landing profesional</h2>
            <p>No es un ebook pensado para copiar y pegar código sin entenderlo. El objetivo es que aprendas a construir, detectar problemas y modificar lo que hacés.</p>
          </div>

          <div className="ebook-content-grid">
            <div className="ebook-benefit-list">
              {benefits.map((item) => <div className="ebook-benefit" key={item}><i>✓</i><span>{item}</span></div>)}
            </div>
            <div className="ebook-code-card">
              <div className="ebook-code-tabs"><span>index.html</span><span>style.css</span><span>script.js</span></div>
              <pre>{`<!DOCTYPE html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport"\n      content="width=device-width" />\n  </head>\n  <body>\n    <section class="hero">\n      <h1>Tu landing profesional</h1>\n      <a href="#contacto">Comenzar</a>\n    </section>\n  </body>\n</html>`}</pre>
            </div>
          </div>
        </section>

        <section id="para-quien" className="ebook-section ebook-audience-section">
          <div className="ebook-section-heading">
            <span>PARA QUIÉN ES</span>
            <h2>Un camino claro para pasar de aprender a construir</h2>
          </div>
          <div className="ebook-audience-grid">
            {audience.map(([number, title, text]) => (
              <motion.article className="ebook-audience-card" whileHover={{ y: -6 }} key={number}>
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="ebook-section ebook-result">
          <div className="ebook-result-card">
            <div>
              <span>RESULTADO FINAL</span>
              <h2>Terminá entendiendo lo que construís.</h2>
              <p>La meta es que puedas crear una landing page profesional, modificarla, detectar errores y utilizar IA para acelerar tu trabajo sin perder el control del código.</p>
            </div>
            <a className="ebook-primary" href={CHECKOUT_URL}>Quiero empezar — US$39</a>
          </div>
        </section>

        <section className="ebook-section ebook-author">
          <div className="ebook-author-box">
            <div className="ebook-author-mark">ZL</div>
            <div>
              <span>QUIÉN ESTÁ DETRÁS</span>
              <h2>Un producto de Zenith Labs</h2>
              <p>La misma experiencia práctica de desarrollo web que ves en los proyectos de Zenith Labs aplicada a un recorrido pensado para que puedas construir tus propias landing pages.</p>
              <a href="/">Ver portfolio de Zenith Labs →</a>
            </div>
          </div>
        </section>

        <section id="faq" className="ebook-section">
          <div className="ebook-section-heading">
            <span>PREGUNTAS FRECUENTES</span>
            <h2>Antes de comprar</h2>
          </div>
          <div className="ebook-faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="ebook-final-cta">
          <span>PRECIO DE LANZAMIENTO</span>
          <h2>Empezá a construir tus propias landing pages.</h2>
          <p>Pago único de <b>US$39</b>. El checkout y la entrega se procesan mediante Hotmart.</p>
          <a className="ebook-primary" href={CHECKOUT_URL}>Comprar ahora — US$39</a>
          <small>Garantía de 7 días · Producto digital</small>
        </section>
      </main>

      <footer className="ebook-footer">
        <a href="/">Zenith Labs</a>
        <span>Curso de Programación para crear Webs y Landing Pages dominando la IA</span>
      </footer>
    </div>
  );
}

export default Ebook;
