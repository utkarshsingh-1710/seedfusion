import Footer from "./Footer/page";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>SeedFusion Agri Grow LLP</h1>

          <p className="subtitle">
            Building trusted agricultural partnerships for a sustainable future.
          </p>

          <a href="/About" className="btn">
            Learn More
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>About Us</h2>

          <p>
            SeedFusion Agri Grow LLP is an emerging agricultural enterprise
            focused on creating value through quality, reliability, and
            long-term partnerships within the agricultural ecosystem.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <h2>Our Focus</h2>

          <div className="cards">
            <div className="card">
              <h3>Seed Solutions</h3>
              <p>Supporting future agricultural growth.</p>
            </div>

            <div className="card">
              <h3>Dealer Partnerships</h3>
              <p>Building strong distribution relationships.</p>
            </div>

            <div className="card">
              <h3>Farmer Support</h3>
              <p>Focused on long-term agricultural success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Coming Soon</h2>

          <p>
            Our agricultural product portfolio is currently under development.
            More information will be announced soon.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
