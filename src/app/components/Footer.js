import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo height={64} variant="light" />
          <p>
            Parent company of the Raghvi Seeds brand.<br />
            Building trusted agricultural partnerships for a sustainable future.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/About">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Pune, Maharashtra, India</p>
          <p>
            <a href="mailto:utkarsh@seedfusionagrigrow.com">
              utkarsh@seedfusionagrigrow.com
            </a>
          </p>
          <p>
            <a href="tel:+917076182140">+91 70761 82140</a>
          </p>
          <a
            href="https://wa.me/917076182140"
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SeedFusion Agri Grow LLP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
