import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Products — SeedFusion Agri Grow LLP",
  description:
    "Browse the Raghvi Seeds product portfolio by SeedFusion Agri Grow LLP — certified Paddy, Wheat, Rice, Mustard, and Cereal seeds.",
};

const products = [
  {
    icon: "🌾",
    name: "Paddy",
    season: "Kharif (June – November)",
    description:
      "High-yield paddy varieties suited for the kharif season. Adapted for Maharashtra's soil and rainfall conditions, offering strong germination and disease resistance.",
    highlights: ["High germination rate", "Flood-tolerant varieties", "Short & long grain options"],
  },
  {
    icon: "🌿",
    name: "Mustard",
    season: "Rabi (October – March)",
    description:
      "Oil-rich mustard seeds bred for maximum seed yield and oil content. Ideal for both irrigated and rain-fed conditions in rabi season.",
    highlights: ["High oil content", "Early maturity", "Aphid-resistant varieties"],
  },
  {
    icon: "🌻",
    name: "Wheat",
    season: "Rabi (November – April)",
    description:
      "Disease-resistant wheat varieties delivering consistent yields. Suitable for diverse agro-climatic zones across Maharashtra and central India.",
    highlights: ["Rust-resistant", "High protein content", "Wide adaptability"],
  },
  {
    icon: "🍚",
    name: "Rice",
    season: "Kharif (June – November)",
    description:
      "Premium rice varieties offering superior grain quality and yield potential. Available in basmati and non-basmati types for varied market needs.",
    highlights: ["Excellent grain quality", "Aromatic varieties available", "Drought-tolerant options"],
  },
  {
    icon: "🌽",
    name: "Cereals",
    season: "Kharif & Rabi",
    description:
      "A range of high-quality cereal seeds including maize and sorghum. Suited for both food grain and fodder production across multiple seasons.",
    highlights: ["Dual-purpose varieties", "High biomass yield", "Adapted to diverse soils"],
  },
];

export default function Products() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1>Our Seed Portfolio</h1>
          <p>
            Certified, high-quality seeds marketed under our Raghvi Seeds brand —
            Paddy, Wheat, Rice, Mustard, and Cereals, each sold by variety name.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What We Supply</h2>
            <p>
              All Raghvi Seeds products are quality-checked and suited to the growing
              conditions of Maharashtra and neighbouring regions. Each product is sold
              by variety name — e.g., <em>Raghvi Seeds Mustard (variety name)</em>.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {products.map((p, i) => (
              <div
                key={p.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "24px",
                  background: i % 2 === 0 ? "#fff" : "#f8fdf8",
                  border: "1px solid #e8f5e9",
                  borderRadius: "14px",
                  padding: "32px",
                  alignItems: "start",
                }}
              >
                <div style={{ fontSize: "3.5rem", textAlign: "center", paddingTop: "4px" }}>{p.icon}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "14px", flexWrap: "wrap", marginBottom: "8px" }}>
                    <h2 style={{ color: "#1b5e20", fontSize: "1.4rem" }}>{p.name}</h2>
                    <span style={{
                      background: "#e8f5e9",
                      color: "#2e7d32",
                      fontSize: "0.78rem",
                      fontWeight: "600",
                      padding: "3px 10px",
                      borderRadius: "12px",
                    }}>{p.season}</span>
                  </div>
                  <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px", fontSize: "0.95rem" }}>{p.description}</p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {p.highlights.map((h) => (
                      <span key={h} style={{
                        background: "#f1f8e9",
                        border: "1px solid #c8e6c9",
                        color: "#388e3c",
                        fontSize: "0.8rem",
                        padding: "4px 12px",
                        borderRadius: "20px",
                      }}>✓ {h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section light">
        <div className="container">
          <div className="section-header">
            <h2>Enquire About Seeds</h2>
            <p>
              Contact us to get pricing, availability, and variety-specific details
              for any of the seeds above.
            </p>
          </div>
          <div style={{ textAlign: "center", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn">Send an Enquiry</Link>
            <a
              href="https://wa.me/917076182140?text=Hello%2C%20I%20am%20interested%20in%20your%20seed%20products."
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
