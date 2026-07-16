import { Link } from "react-router-dom";

import "./Footer.css";

import Pattern from "../../assets/footer/frame67-pattern.svg";
import Watermark from "../../assets/footer/teamd-watermark.svg";
import Whatsapp from "../../assets/footer/whatsapp.svg";
import Linkedin from "../../assets/footer/linkedin.svg";
import Copyright from "../../assets/footer/copyright.svg";

export default function Footer() {
  return (
    <footer className="teamd-footer">
      <img src={Pattern} alt="" className="footer-pattern" />
      <img src={Watermark} alt="" className="footer-watermark" />

      <div className="footer-inner">
        <h2 className="footer-heading">Let&apos;s talk business.</h2>

        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="footer-cta"
        >
          <span className="footer-cta-text">Request a call</span>

          <span className="footer-cta-circle">
            <svg
              className="footer-cta-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M8 5l8 7-8 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>

        <div className="footer-contact-row">
          <div className="footer-company">
            <p>Teamd Global Business Solutions Private Limited</p>

            <div className="footer-locations">
              <span>Bangalore</span>
              <span className="footer-divider"></span>
              <span>Coimbatore</span>
            </div>
          </div>

          <a href="mailto:info@teamd.co.in">info@teamd.co.in</a>

          <a href="tel:+919043611492">9043611492</a>

          <div className="footer-socials">
            <a
              href="https://wa.me/919043611492"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Whatsapp} alt="WhatsApp" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <img
        src={Copyright}
        alt="© 2025 Teamd Global Business Solutions Private Limited | Sitemap"
        className="footer-copyright"
      />
    </footer>
  );
}