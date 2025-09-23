import React, { useEffect, useState } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { InView } from "react-intersection-observer";
import { FaHome, FaPhone, FaEnvelope, FaGlobe, FaMobileAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("https://api.codingboss.in/quiz/msr-contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
     {/* Hero Section */}
      <section className="contact-hero text-center text-white">
  <InView triggerOnce>
    {({ inView, ref }) => (
      <div
        ref={ref}
        className="contact-hero-wrapper"
        style={{ backgroundColor: "white", padding: "30px 0" }} // White Background
      >
        <div
          className={`contact-hero-bg ${inView ? "bg-animate animate__animated animate__fadeInLeft" : ""}`}
        >
          <div className="container">
            <h1 data-aos="fade-down">Contact Us</h1>
            <p data-aos="fade-up">We’d love to hear from you. Let’s connect today!</p>
          </div>
        </div>
      </div>
    )}
  </InView>
</section>

      {/* Contact Details */}
      <section className="contact-details py-5">
        <div className="container">
          <div className="row">
            {/* Info */}
            <div className="col-md-6 contact-info-column" data-aos="fade-up">
              <div className="contact-card">
                <FaHome className="icon" />
                <div className="text-content">
                  <h3>Visit Us</h3>
                  <p>
                    MSR Automation & Energy Solutions <br />
                    # 69, Nanjappa street, <br />
                    GobichettiPalayam, Erode dist., <br />
                    Tamil Nadu, India – 638452
                  </p>
                </div>
              </div>
              <div className="contact-card">
                <FaPhone className="icon" />
                <div className="text-content">
                  <h3>Call Us</h3>
                  <p>
                    <FaPhone style={{ marginRight: "8px" }} /> 04285 225440
                  </p>
                  <p>
                    <FaMobileAlt style={{ marginRight: "8px" }} /> ‪+91 99430 25440‬
                  </p>
                </div>
              </div>
              <div className="contact-card">
                <FaEnvelope className="icon" />
                <div className="text-content">
                  <h3>Email Us</h3>
                  <p>info@msrautomation.com</p>
                </div>
              </div>
              <div className="contact-card">
                <FaGlobe className="icon" />
                <div className="text-content">
                  <h3>Website</h3>
                  <p>
                    <a
                      href="http://www.msrautomation.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.msrautomation.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-md-6 mb-4" data-aos="fade-up">
              <div className="contact-form-card card">
                <div className="card-body">
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="contact-button" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    {success === true && (
                      <p className="text-success mt-2">✅ Message sent successfully!</p>
                    )}
                    {success === false && (
                      <p className="text-danger mt-2">❌ Something went wrong. Try again.</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="contact-map-wrapper">
        <div className="contact-map-bg" style={{ backgroundColor: "white", padding: "40px 0" }}>
          <section className="contact-map" data-aos="fade-up">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.851350349245!2d106.629663574978!3d10.823098960839295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292925e2b2a5%3A0xdfd5e0e0b4dfc0cd!2sGobichettipalayam!5e0!3m2!1sen!2sin!4v1673878596478!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Contact;