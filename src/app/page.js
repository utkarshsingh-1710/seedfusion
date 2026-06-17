import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-badge">Raghvi Seeds — Our Brand</div>
          <h1>SeedFusion Agri Grow LLP</h1>
          <p className="hero-brand">
            Parent company of the Raghvi Seeds brand — Pune, Maharashtra
          </p>
          <p className="subtitle">
            Bringing you certified Paddy, Wheat, Rice, Mustard &amp; Cereal
            seeds under the Raghvi Seeds brand. Trusted by farmers and dealers
            across Maharashtra.
          </p>
          <div className="hero-buttons">
            <Link href="/products" className="btn">
              View Our Seeds
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        <div className="stat-item">
          <h3>5+</h3>
          <p>Crop Varieties</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Quality Assured</p>
        </div>
        <div className="stat-item">
          <h3>Pune</h3>
          <p>Maharashtra Based</p>
        </div>
        <div className="stat-item">
          <h3>2025</h3>
          <p>Established</p>
        </div>
      </div>

      {/* About snippet */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Who We Are</h2>
            <p>
              SeedFusion Agri Grow LLP is a newly registered agricultural
              enterprise based in Pune, Maharashtra. We are the parent company
              behind the
              <strong> Raghvi Seeds</strong> brand, developing and supplying
              certified seeds to farmers and dealers across the region under our
              own brand name.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/About" className="btn">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section light">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>
              Three pillars that drive everything we do at SeedFusion Agri Grow.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-icon">🌾</div>
              <h3>Quality Seed Supply</h3>
              <p>
                We source and distribute certified, high-yield seeds for Paddy,
                Wheat, Rice, Mustard, and Cereals under the trusted Raghvi Seeds
                brand.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Dealer Partnerships</h3>
              <p>
                We work with local agri-dealers and distributors to ensure our
                seeds reach farmers efficiently across Maharashtra.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🌱</div>
              <h3>Farmer Support</h3>
              <p>
                Beyond supply, we are committed to helping farmers choose the
                right seed varieties for their soil and climate conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Seed Portfolio</h2>
            <p>Field crops that form the backbone of Indian agriculture.</p>
          </div>
          <div className="product-grid">
            {[
              {
                icon: "🌾",
                name: "Paddy",
                desc: "High-yield paddy varieties suited for kharif season.",
              },
              {
                icon: "🌿",
                name: "Mustard",
                desc: "Oil-rich mustard seeds for rabi season cultivation.",
              },
              {
                icon: "🌻",
                name: "Wheat",
                desc: "Disease-resistant wheat varieties for maximum yield.",
              },
              {
                icon: "🍚",
                name: "Rice",
                desc: "Premium rice varieties for diverse growing conditions.",
              },
              {
                icon: "🌽",
                name: "Cereals",
                desc: "High-quality cereal seeds including maize and sorghum.",
              },
            ].map((p) => (
              <div className="product-card" key={p.name}>
                <div className="product-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/products" className="btn">
              See Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Raghvi Seeds brand section */}
      <section className="brand-section">
        <div className="container">
          <h2>The Raghvi Seeds Brand</h2>
          <p>
            Raghvi Seeds is the proprietary brand of SeedFusion Agri Grow LLP —
            built on quality, trust, and a commitment to Indian agriculture.
            Every product you buy under the Raghvi Seeds name comes directly
            from us.
          </p>
          <div className="brand-logos">
            <Image
              src="/Raghvi_seeds_logo.png"
              alt="Raghvi Seeds"
              width={1254}
              height={1254}
              style={{ height: "100px", width: "auto", objectFit: "contain" }}
            />
            <Image
              src="/SeedFusion_logo.png"
              alt="SeedFusion Agri Grow"
              width={1536}
              height={1024}
              style={{ height: "80px", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Whether you are a farmer looking for quality seeds or a dealer
              interested in distribution, we would love to connect.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn">
              Contact Us
            </Link>
            <a
              href="https://wa.me/917076182140"
              className="whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
