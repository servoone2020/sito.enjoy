import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-logo">
                <Link to="/">
                  <span className="logo-text">EnjoyCube</span>
                </Link>
              </div>
              <p>
                Soluzioni innovative per la gestione, diagnostica e manutenzione dei dispositivi.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Link Rapidi</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Funzionalità</Link></li>
                <li><Link to="/products">Prodotti</Link></li>
                <li><Link to="/about">Chi Siamo</Link></li>
                <li><Link to="/contact">Contatti</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Servizi</h3>
              <ul>
                <li><a href="/products">Cubi Hardware</a></li>
                <li><a href="/features#diagnostics">Diagnostica Dispositivi</a></li>
                <li><a href="/features#updates">Sistema di Auto-Aggiornamento</a></li>
                <li><a href="/features#assistance">Pannello Assistenza</a></li>
                <li><a href="/features#logging">Logging Centralizzato</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contattaci</h3>
              <address>
                <p><i className="fa-solid fa-location-dot"></i> Corso Vittorio Emanuele II, 52 - 70122 Bari</p>
                <p><i className="fa-solid fa-phone"></i> +39 02 213 5117</p>
                <p><i className="fa-solid fa-envelope"></i> info@enjoycube.it</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} EnjoyCube. Tutti i diritti riservati.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Termini di Servizio</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;