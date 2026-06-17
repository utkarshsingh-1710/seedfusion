"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const mailtoLink = `mailto:utkarsh@seedfusionagrigrow.com?subject=Enquiry from ${data.get("name")} (${data.get("type")})&body=${encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nType: ${data.get("type")}\n\nMessage:\n${data.get("message")}`,
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We&apos;re happy to answer any questions about our seeds, pricing,
            or dealer partnerships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info column */}
            <div className="contact-info">
              <h3>Get in Touch</h3>

              <p>
                <strong>📍 Location</strong>
                <br />
                Pune, Maharashtra, India
              </p>

              <p>
                <strong>📧 Email</strong>
                <br />
                <a href="mailto:utkarsh@seedfusionagrigrow.com">
                  utkarsh@seedfusionagrigrow.com
                </a>
              </p>

              <p>
                <strong>📞 Phone</strong>
                <br />
                <a href="tel:+917076182140">+91 70761 82140</a>
              </p>

              <p>
                <strong>🏢 Company</strong>
                <br />
                SeedFusion Agri Grow LLP
                <br />
                (Parent company of the Raghvi Seeds brand)
              </p>

              <a
                href="https://wa.me/917076182140?text=Hello%2C%20I%20am%20interested%20in%20your%20seeds."
                className="whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Form column */}
            <div>
              {submitted ? (
                <div
                  style={{
                    padding: "40px",
                    background: "#f1f8e9",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                    ✅
                  </div>
                  <h3 style={{ color: "#1b5e20", marginBottom: "8px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#555" }}>
                    Your enquiry has been opened in your email client.
                    <br />
                    We will get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                  />
                  <input type="tel" name="phone" placeholder="Phone Number" />
                  <select name="type" required defaultValue="">
                    <option value="" disabled>
                      Type of Enquiry *
                    </option>
                    <option value="Farmer – Seed Purchase">
                      Farmer – Seed Purchase
                    </option>
                    <option value="Dealer – Distribution Partnership">
                      Dealer – Distribution Partnership
                    </option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Your message or enquiry..."
                    required
                  />
                  <button type="submit">Send Enquiry →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
