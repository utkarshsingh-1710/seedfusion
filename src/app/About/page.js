import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us — SeedFusion Agri Grow LLP",
  description:
    "Learn about SeedFusion Agri Grow LLP, a Pune-based agricultural enterprise and authorized distributor of Raghvi Seeds.",
};

export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About SeedFusion Agri Grow</h1>
          <p>
            A new generation agricultural enterprise rooted in quality,
            trust, and a commitment to India&apos;s farming community.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                SeedFusion Agri Grow LLP was established in Pune, Maharashtra
                with one clear purpose — to make high-quality, certified seeds
                accessible to farmers across the region.
              </p>
              <p>
                We are the parent company behind the <strong>Raghvi Seeds</strong> brand.
                Under this brand, we develop, produce, and market seeds directly to
                farmers and dealers — building a supply chain rooted in reliability
                and transparency.
              </p>
              <p>
                We believe that the right seed is the foundation of a
                successful harvest. Every product we supply is quality-checked
                and suited to the climate and soil conditions of Maharashtra
                and neighbouring states.
              </p>
            </div>
            <div style={{ background: "#f1f8e9", borderRadius: "16px", padding: "48px 32px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontSize: "2rem" }}>📍</span>
                <div>
                  <strong style={{ color: "#1b5e20" }}>Location</strong>
                  <p style={{ color: "#555", marginTop: "4px", fontSize: "0.93rem" }}>Pune, Maharashtra, India</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontSize: "2rem" }}>🏢</span>
                <div>
                  <strong style={{ color: "#1b5e20" }}>Legal Entity</strong>
                  <p style={{ color: "#555", marginTop: "4px", fontSize: "0.93rem" }}>Limited Liability Partnership (LLP)</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontSize: "2rem" }}>🌾</span>
                <div>
                  <strong style={{ color: "#1b5e20" }}>Brand</strong>
                  <p style={{ color: "#555", marginTop: "4px", fontSize: "0.93rem" }}>Parent company of the Raghvi Seeds brand</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontSize: "2rem" }}>🌿</span>
                <div>
                  <strong style={{ color: "#1b5e20" }}>Focus Crops</strong>
                  <p style={{ color: "#555", marginTop: "4px", fontSize: "0.93rem" }}>Paddy, Wheat, Rice, Mustard, Cereals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section light">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide every decision we make at SeedFusion Agri Grow.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✅</div>
              <h3>Quality First</h3>
              <p>Every seed we distribute meets certified quality standards for germination, purity, and yield.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trusted Partnerships</h3>
              <p>We build long-term relationships with dealers and farmers based on reliability and transparency.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Farmer-First</h3>
              <p>Farmers are at the heart of everything we do. Their success is our success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>We promote seed varieties that support sustainable farming and responsible agricultural growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Let&apos;s Work Together</h2>
            <p>Interested in partnering with us as a dealer, or looking for quality seeds for your farm?</p>
          </div>
          <div style={{ textAlign: "center", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn">Contact Us</Link>
            <Link href="/products" className="btn-outline" style={{ background: "#2e7d32", color: "white", border: "none" }}>View Products</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
