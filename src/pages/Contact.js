import React, { useEffect, useState } from "react";
import { FaHome, FaPhone, FaEnvelope, FaGlobe, FaMobileAlt, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(null);

   try {
    // Call your backend API
    const response = await fetch("https://api.codingboss.in/quiz/msr-contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Optionally read response JSON
    const data = await response.json();
    console.log("API Response:", data);

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" }); // clear form
  } catch (err) {
    console.error(err);
    setSuccess(false);
  } finally {
    setLoading(false);
  }
};

  const contactInfo = [
    {
      icon: FaHome,
      title: "Visit Us",
      content: "MSR Automation & Energy Solutions\n# 69, Nanjappa street,\nGobichettiPalayam, Erode dist.,\nTamil Nadu, India – 638452",
      gradient: "blue-purple"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      content: "04285 225440\n+91 99430 25440",
      gradient: "green-blue"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "info@msrautomation.com",
      gradient: "orange-red"
    },
    {
      icon: FaGlobe,
      title: "Website",
      content: "www.msrautomation.com",
      gradient: "purple-pink"
    }
  ];

  return (
    <div className="contact-page-3d">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="hero-overlay"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`
          }}
        ></div>
        <div className="hero-content">
          <div className="hero-title-wrapper">
            <h1 className="hero-title">Contact Us</h1>
            <div className="hero-underline"></div>
          </div>
          <p className="hero-subtitle">
            We'd love to hear from you. Let's connect and create something amazing together!
          </p>
        </div>
      </section>

      <div className="main-content">
        <div className="content-grid">
          
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-cards">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="contact-card"
                    style={{
                      transform: `perspective(1000px) rotateY(${mousePosition.x * 1}deg) rotateX(${-mousePosition.y * 1}deg)`,
                    }}
                  >
                    <div className="card-content">
                      <div className={`card-icon ${info.gradient}`}>
                        <IconComponent />
                        <div className="icon-glow"></div>
                      </div>
                      <div className="card-text">
                        <h3 className="card-title">{info.title}</h3>
                        <p className="card-description">{info.content}</p>
                      </div>
                    </div>
                    <div className="card-hover-glow"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-section">
            <div
              className="form-card"
              style={{
                transform: `perspective(1000px) rotateY(${-mousePosition.x * 1}deg) rotateX(${mousePosition.y * 1}deg)`,
              }}
            >
              <div className="form-header">
                <h2 className="form-title">Send Message</h2>
                <div className="form-underline"></div>
              </div>

              <div className="form-content">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your Name"
                  />
                  <div className="input-glow"></div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your Email"
                  />
                  <div className="input-glow"></div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input form-textarea"
                    placeholder="Your Message"
                  ></textarea>
                  <div className="input-glow"></div>
                </div>

                <button
  type="submit"
  onClick={handleSubmit}
  disabled={loading}
  className="submit-btn"
>

                  <div className="btn-content">
                    {loading ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                  <div className="btn-glow"></div>
                </button>

                {/* Success/Error Messages */}
                {success === true && (
                  <div className="message success-message">
                    <div className="message-indicator"></div>
                    <span>✅ Message sent successfully!</span>
                  </div>
                )}
                {success === false && (
                  <div className="message error-message">
                    <div className="message-indicator"></div>
                    <span>❌ Something went wrong. Try again.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <section className="map-section">
        <div className="map-header">
          <h2 className="map-title">
            <FaMapMarkerAlt className="map-icon" />
            <span>Find Us</span>
          </h2>
          <div className="map-underline"></div>
        </div>
        
        <div
          className="map-container"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
          }}
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.851350349245!2d106.629663574978!3d10.823098960839295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292925e2b2a5%3A0xdfd5e0e0b4dfc0cd!2sGobichettipalayam!5e0!3m2!1sen!2sin!4v1673878596478!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="map-iframe"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="map-overlay"></div>
        </div>
      </section>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        /* Main Container */
        .contact-page-3d {
        margin-top: -40px;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          position: relative;
          overflow: hidden;
        }

        /* Background Elements */
        .bg-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-orb {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.2;
          animation: pulse 4s ease-in-out infinite;
        }

        .bg-orb-1 {
          top: -160px;
          right: -160px;
          background: #a855f7;
        }

        .bg-orb-2 {
          bottom: -160px;
          left: -160px;
          background: #3b82f6;
          animation-delay: 1s;
        }

        .bg-orb-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #ec4899;
          opacity: 0.1;
          animation-delay: 2s;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 80px 0;
          min-height:50vh;
          text-align: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%);
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .hero-title-wrapper {
          display: inline-block;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 24px;
          transition: transform 0.3s ease;
        }

        .hero-title:hover {
          transform: scale(1.05);
        }

        .hero-underline {
          height: 4px;
          width: 128px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          margin: 0 auto;
          border-radius: 2px;
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          margin-top: 32px;
          color: #d1d5db;
          max-width: 512px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px 80px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Contact Info Section */
        .contact-info-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 32px;
          text-align: center;
        }

        @media (min-width: 1024px) {
          .section-title {
            text-align: left;
          }
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.5s ease;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .contact-card:hover {
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05) translateY(-8px) !important;
        }

        .card-content {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .card-icon {
          position: relative;
          padding: 16px;
          border-radius: 12px;
          font-size: 1.5rem;
          color: white;
          transition: transform 0.3s ease;
        }

        .contact-card:hover .card-icon {
          transform: scale(1.1);
        }

        .card-icon.blue-purple {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        .card-icon.green-blue {
          background: linear-gradient(135deg, #10b981, #3b82f6);
        }

        .card-icon.orange-red {
          background: linear-gradient(135deg, #f59e0b, #ef4444);
        }

        .card-icon.purple-pink {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
        }

        .icon-glow {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          filter: blur(12px);
          transition: all 0.3s ease;
        }

        .contact-card:hover .icon-glow {
          filter: blur(16px);
        }

        .card-text {
          flex: 1;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .contact-card:hover .card-title {
          color: #93c5fd;
        }

        .card-description {
          color: #d1d5db;
          line-height: 1.6;
          white-space: pre-line;
          transition: color 0.3s ease;
        }

        .contact-card:hover .card-description {
          color: white;
        }

        .card-hover-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(147, 51, 234, 0));
          border-radius: 16px;
          transition: all 0.5s ease;
          pointer-events: none;
        }

        .contact-card:hover .card-hover-glow {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
        }

        /* Form Section */
        .form-section {
          position: relative;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 80px;
          transition: all 0.5s ease;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .form-card:hover {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .form-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .form-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }

        .form-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          margin: 0 auto;
          border-radius: 2px;
        }

        .form-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .form-input:focus {
          border-color: #60a5fa;
          background: rgba(255, 255, 255, 0.1);
        }

        .form-input:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .form-textarea {
          resize: none;
          min-height: 120px;
        }

        .input-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0), rgba(147, 51, 234, 0));
          border-radius: 12px;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .form-group:focus-within .input-glow {
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
        }

        /* Submit Button */
        .submit-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 12px;
          padding: 16px 32px;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          transform: scale(1.05) translateY(-4px);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .btn-icon {
          transform: translateX(4px) translateY(-4px);
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid white;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0), rgba(147, 51, 234, 0));
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .submit-btn:hover .btn-glow {
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
        }

        /* Messages */
        .message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid;
        }

        .success-message {
          color: #34d399;
          background: rgba(52, 211, 153, 0.1);
          border-color: rgba(52, 211, 153, 0.2);
        }

        .error-message {
          color: #f87171;
          background: rgba(248, 113, 113, 0.1);
          border-color: rgba(248, 113, 113, 0.2);
        }

        .message-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .success-message .message-indicator {
          background: #34d399;
        }

        .error-message .message-indicator {
          background: #f87171;
        }

        /* Map Section */
        .map-section {
          position: relative;
          padding: 80px 0;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
        }

        .map-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .map-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }

        .map-icon {
          color: #f87171;
        }

        .map-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #f87171, #fb923c);
          margin: 0 auto;
          border-radius: 2px;
        }

        .map-container {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .map-iframe {
          border-radius: 16px;
          width: 100%;
          height: 400px;
        }

        .map-overlay {
          position: absolute;
          inset: 8px;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, transparent 50%, rgba(147, 51, 234, 0) 100%);
          border-radius: 16px;
          pointer-events: none;
          transition: all 0.5s ease;
        }

        .map-container:hover .map-overlay {
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%);
        }

        /* Particles */
        .particles-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: float ease-in-out infinite;
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.8; 
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 0;
          }
          
          .main-content {
            padding: 0 16px 40px;
          }
          
          .content-grid {
            gap: 32px;
          }
          
          .form-card {
            padding: 24px;
            margin-top: 80px
          }
          
          .map-section {
            padding: 40px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;