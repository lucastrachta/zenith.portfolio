import "./App.css";
import { motion } from "framer-motion";

import dentista from "./assets/dentista3.jpg";
import gym from "./assets/gym.jpg";
import barberia1 from "./assets/barberia1.jpg";
import ecommerce from "./assets/ecommerce.jpg";
import login2 from "./assets/login2.jpg";
import whatsapp4 from "./assets/whatsapp4.jpg";

function App() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <h2>Zenith Labs</h2>

 <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

        <a
          href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20improve%20my%20website"
          className="btn"
        >
          Get More Clients
        </a>
      </nav>

      <div className="container">
        {/* HERO */}
        <section   id="home" className="hero">
          <motion.div
            className="hero-box"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Websites That Bring You Clients</h1>
            <p>
              We build high-converting websites designed to turn visitors into
              real customers.
            </p>

            <motion.a
              href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20get%20more%20clients"
              className="btn"
              whileHover={{ scale: 1.05 }}
            >
              Get Your Website
            </motion.a>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section  id="services" className="section">
          <h2>What We Do</h2>

          <div className="grid">
            <motion.div className="card apple" whileHover={{ scale: 1.03 }}>
              <img src={barberia1} />
              <h3>Client-Getting Landing Pages</h3>
              <p>Designed to turn visitors into paying customers.</p>
            </motion.div>

            <motion.div className="card apple" whileHover={{ scale: 1.03 }}>
              <img src={ecommerce} />
              <h3>Business Websites</h3>
              <p>Professional websites that build trust and authority.</p>
            </motion.div>

            <motion.div className="card apple" whileHover={{ scale: 1.03 }}>
              <img src={login2} />
              <h3>Custom Systems</h3>
              <p>Advanced web apps with login and admin panels.</p>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section">
          <h2>Why Choose Us</h2>

          <div className="grid">
            <div className="card apple">
              <h3>Fast Delivery</h3>
              <p>Get your website ready in just a few days.</p>
            </div>

            <div className="card apple">
              <h3>Conversion Focused</h3>
              <p>Every page is designed to generate leads.</p>
            </div>

            <div className="card apple">
              <h3>Modern Design</h3>
              <p>Clean, responsive and mobile-first.</p>
            </div>
          </div>
        </section>

<h2 className="h2-popular">Most Requested</h2>

<motion.div
  className="card premium"
  whileHover={{ scale: 1.03 }}
>

  <img src={dentista} alt="Dental Website" />

  {/* BADGE */}
  <span className="badge">Most Popular</span>

  {/* TITLE */}
  <h3>Dental Clinic Website</h3>

  {/* RESULT */}
  <p className="card-result">
    Get more patient bookings with a modern, high-converting website.
  </p>

  {/* FEATURES */}
  <ul className="card-features">
    <li>✔ Mobile optimized</li>
    <li>✔ Fast loading</li>
    <li>✔ Designed to convert</li>
  </ul>

  {/* URGENCY */}
  <span className="card-urgency">
    Currently accepting 2 new clients
  </span>

  {/* CTA */}
  <div className="card-buttons">

    <a
      href="https://dental-clinic-jet-zeta.vercel.app"
      target="_blank"
      className="btn btn-secondary"
    >
      View Live
    </a>

    <a
      href="https://wa.me/5493705013558?text=Hi%2C%20I%20want%20a%20website%20like%20this"
      target="_blank"
      className="btn btn-primary"
    >
      Start My Website 🚀
    </a>

  </div>

</motion.div>


{/* <motion.div className="card premium" whileHover={{ y: -5 }}>

  <div className="card-image">
    <img src={gym} alt="Gym Website" />
    <span className="badge">High Converting</span>
  </div>

  <div className="card-content">

    <h3>Gym Landing Page</h3>

    <p className="card-desc">
      Get more members and increase signups with a high-converting fitness landing page.
    </p>

    <span className="card-proof">
      ✔ Mobile optimized · ✔ Fast loading · ✔ Conversion focused
    </span>

    <span className="card-urgency">
      Currently accepting 2 new clients
    </span>

    <div className="card-buttons">

      <a
        href="https://fitness-landing-weld.vercel.app"
        target="_blank"
        className="btn btn-secondary"
      >
        View Live
      </a>

      <a
        href="https://wa.me/5493705013558?text=Hi%2C%20I%20want%20a%20gym%20website%20like%20this"
        target="_blank"
        className="btn btn-primary"
      >
        Get More Members 💪
      </a>

    </div>

  </div>

</motion.div> */}

        {/* PROJECTS */}
        <section id="projects"  className="section">
          <h2>Selected Work</h2>

          <div className="grid">
            {/* DENTIST */}
            <motion.div className="card apple" whileHover={{ scale: 1.03 }}>
              <img src={dentista} />
              <h3>Dentist Website</h3>
              <p> Get more patient bookings with a modern, high-converting website.</p>

              <div className="card-buttons">
                <a
                  href="https://dental-clinic-jet-zeta.vercel.app"
                  target="_blank"
                  className="btn-2 btn btn-secondary"
                >
                  View Live
                </a>

                <a
                  href="https://wa.me/5493705013558?text=Hi%2C%20I%20like%20this%20dentist%20website.%20Can%20you%20build%20something%20similar%3F"
                  target="_blank"
                  className="btn btn-primary"
                >
                 Start My Project 🚀
                </a>
              </div>
            </motion.div>

            {/* GYM */}
            <motion.div className="card apple" whileHover={{ scale: 1.03 }}>
              <img src={gym} />
              <h3>Gym Website</h3>
              <p> Attract new members and increase signups with a powerful landing page.</p>

              <div className="card-buttons">
                <a
                  href="https://fitness-landing-weld.vercel.app"
                  target="_blank"
                  className="btn-2 btn btn-secondary"
                >
                  View Live
                </a>

                <a
                  href="https://wa.me/5493705013558?text=Hi%2C%20I%20like%20this%20gym%20website.%20Can%20you%20build%20something%20similar%3F"
                  target="_blank"
                  className="btn btn-primary"
                >
                    Start My Project 🚀
                </a>
              </div>
            </motion.div>
          </div>
        </section>


{/* AQUI LOS PRECIOS(CARTEL DE PRECIOS) PRIMEROS QUE PUSIMOS CON IA PERO LA IA DESPUES NOS DIO OTROS 
CARTELES DE PRECIOS MAS LINDOS Y USAMOS ESOS QUE ESTAN MAS ABAJO NO EN COMENTARIOS NO COMENTADOS 

 <section className="section">
  <h2>Pricing</h2>

  <div className="grid">

    {/* BASIC 
    <div className="card apple">
      <h3>Starter</h3>
      <h2>$300</h2>
      <p>Perfect for small businesses</p>

      <ul>
        <li>✔ 1 Landing Page</li>
        <li>✔ Mobile Responsive</li>
        <li>✔ Fast Delivery</li>
      </ul>

      <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20the%20Starter%20plan" className="btn-2 btn">
        Get Started
      </a>
    </div>

    {/* PRO (EL QUE QUERÉS VENDER)
    <div className="card apple highlight">
      <h3>Pro</h3>
      <h2>$600</h2>
      <p>Most popular</p>

      <ul>
        <li>✔ High-Converting Design</li>
        <li>✔ SEO Optimized</li>
        <li>✔ WhatsApp Integration</li>
        <li>✔ Fast Delivery</li>
      </ul>

      <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20the%20Pro%20plan" className="btn">
        Get More Clients
      </a>
    </div>

    {/* PREMIUM 
    <div className="card apple">
      <h3>Premium</h3>
      <h2>$1000+</h2>
      <p>For serious businesses</p>

      <ul>
        <li>✔ Custom Design</li>
        <li>✔ Advanced Features</li>
        <li>✔ Full Support</li>
        <li>✔ Priority Delivery</li>
      </ul>

      <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20the%20Premium%20plan" className="btn-2 btn">
        Contact Us
      </a>
    </div>

  </div>
</section> */}



 {/* ABAJO EL JSX DE LAS TARJETAS DE PRECIOS PRICE  CARDS */}

<section className="section pricing">

  <h2 className="heading-lg">Simple Pricing</h2>

  <p className="subheading">
    High-converting websites designed to grow your business
  </p>

  <div className="pricing-grid">

    {/* BASIC */}
    <div className="pricing-card">
      <h3>Starter</h3>
      <p className="price">$199</p>

      <ul>
        <li>✔ 1 Landing Page</li>
        <li>✔ Mobile Responsive</li>
        <li>✔ Fast Delivery</li>
      </ul>

      <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20the%20Starter%20plan" className="btn">
        Get Started
      </a>
    </div>

    {/* MOST POPULAR */}
    <div className="pricing-card featured">
      <span className="badge">Most Popular</span>

      <h3>Professional</h3>
      <p className="price">$399</p>

      <ul>
        <li>✔ High-Converting Design</li>
        <li>✔ WhatsApp Integration</li>
        <li>✔ SEO Basics</li>
        <li>✔ Fast Delivery</li>
      </ul>

      <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20the%20Professional%20plan" className="btn btn-primary">
        Start My Project 🚀
      </a>
    </div>

    {/* PREMIUM */}
    <div className="pricing-card">
      <h3>Premium</h3>
      <p className="price">$699</p>

      <ul>
        <li>✔ Full Website</li>
        <li>✔ Custom Design</li>
        <li>✔ Admin Panel</li>
        <li>✔ Priority Support</li>
      </ul>

      <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20the%20Premium%20plan" className="btn">
        Get Premium
      </a>
    </div>

  </div>

</section>


{/* FIN JSX TARJETA DE PRECIOS PRICE CARDS  */}

        {/* CTA */}
        <section className="cta">
          <h2>Ready to Get More Clients?</h2>

          <a
            href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20start%20a%20project"
            className="btn"
          >
            Start Your Project
          </a>
        </section>

        {/* WHATSAPP FLOAT */}
        <div className="whatsapp-container">
          <a
            href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20start%20a%20project"
            className="whatsapp-btn"
          >
            <img src={whatsapp4} alt="WhatsApp" />
          </a>
        </div>
      </div>


<section className="contact-section" id="contact">

    <div className="contact-title">
        <h2>Let's Build Your Website</h2>

        <p>
            Tell us about your project and we'll get back to you within 24 hours.
        </p>
    </div>

    <div className="contact-container">

        {/* FORMULARIO */}

        <div className="contact-card">

            <form className="contact-form">

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                />

                <input
                    type="tel"
                    placeholder="WhatsApp"
                />

                <textarea
                    placeholder="Tell us about your project..."
                    rows="7"
                    required
                ></textarea>

                <button type="submit" className="btn">
                    Get a Free Quote
                </button>

            </form>

        </div>

        {/* CARD DERECHA */}

        <div className="info-card">

            <h3>What Happens Next?</h3>

            <div className="step">
                <span>📩</span>
                <p>We review your request.</p>
            </div>

            <div className="step">
                <span>💬</span>
                <p>We contact you within 24 hours.</p>
            </div>

            <div className="step">
                <span>💡</span>
                <p>We discuss your goals.</p>
            </div>

            <div className="step">
                <span>📄</span>
                <p>We send you a custom quote.</p>
            </div>

            <div className="step">
                <span>🚀</span>
                <p>We start building your website.</p>
            </div>

            <hr />

            <ul>

                <li>✅ Free consultation</li>

                <li>✅ No obligation</li>

                <li>⚡ Fast response</li>

            </ul>

        </div>

    </div>

</section>


<footer className="footer">
  <div className="footer-content">
    <div className="footer-brand">
      <h3>Zenith Labs</h3>
      <p>
        We create modern, high-converting websites that help businesses
        attract more clients and grow online.
      </p>
    </div>

    <div className="footer-contact">
      <h4>Get in Touch</h4>

      <a
        href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20start%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

      <p>Available Monday – Friday</p>
      <p>Response within 24 hours</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Zenith Labs. All Rights Reserved.</p>
  </div>
</footer>


    </>
  );
}

export default App;