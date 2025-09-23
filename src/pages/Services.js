import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { InView } from "react-intersection-observer";

import Renewable from "../img/Renewable Energy Solutions.jpg";
import automation from "../img/Automation and Instrumentation.png";
import system from "../img/Systemenergy.jpg";
import Engineering from "../img/Engineering Consultation1.jpeg";
import Lifecylce from "../img/lifecycle.jpg";
import industriesImg from "../img/Systemenergy.jpg";
import homeImg from "../img/home-automation1.jpg";

// Import home service images
import gateAutomation from "../img/gate automation.jpg";
import audioVideo from "../img/audio-video-banner.jpg";
import shading from "../img/shading-banner.jpg";
import camera from "../img/camera-banner.jpeg";
import accessControl from "../img/access-control-banner.jpeg";
import homeAutomation from "../img/home-automation-banner.jpg";
import lighting from "../img/lighting-control-banner.jpg";
import security from "../img/security-system-banner.jpg";
import wifi from "../img/wifi-networking-banner.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Industries");
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
    });

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const industryServices = [
    { 
      id: 1, 
      name: "Energy Systems", 
      img: system, 
      path: "industries/energy-systems",
      description: "Advanced power generation and distribution solutions",
      icon: "⚡"
    },
    { 
      id: 2, 
      name: "Automation & Instrumentation", 
      img: automation, 
      path: "industries/automation-instrumentation",
      description: "Smart industrial automation and control systems",
      icon: "🤖"
    },
    { 
      id: 3, 
      name: "Maintenance & Lifecycle", 
      img: Lifecylce, 
      path: "industries/maintenance",
      description: "Comprehensive maintenance and asset management",
      icon: "🔧"
    },
    { 
      id: 4, 
      name: "Engineering Consultation", 
      img: Engineering, 
      path: "industries/engineering",
      description: "Expert engineering consulting and design services",
      icon: "📐"
    },
    { 
      id: 5, 
      name: "Renewable Energy Solutions", 
      img: Renewable, 
      path: "industries/renewable",
      description: "Sustainable renewable energy implementations",
      icon: "🌱"
    }
  ];

  const homeServices = [
    { 
      id: 1, 
      name: "Gate Automation", 
      img: gateAutomation, 
      path: "/services/home/gate-automation",
      description: "Smart automated gate systems for enhanced security",
      icon: "🚪"
    },
    { 
      id: 2, 
      name: "Audio Video Installations", 
      img: audioVideo, 
      path: "/services/home/audio-video",
      description: "Premium home theater and audio solutions",
      icon: "🎵"
    },
    { 
      id: 3, 
      name: "Shading Solutions", 
      img: shading, 
      path: "/services/home/shading",
      description: "Automated blinds and shading control systems",
      icon: "🏠"
    },
    { 
      id: 4, 
      name: "Camera Solutions", 
      img: camera, 
      path: "/services/home/camera",
      description: "Advanced security camera and surveillance systems",
      icon: "📹"
    },
    { 
      id: 5, 
      name: "Access Control", 
      img: accessControl, 
      path: "/services/home/access-control",
      description: "Secure access management and entry systems",
      icon: "🔐"
    },
    { 
      id: 6, 
      name: "Home Automations", 
      img: homeAutomation, 
      path: "/services/home/automation",
      description: "Complete smart home automation solutions",
      icon: "🏡"
    },
    { 
      id: 7, 
      name: "Lighting Control", 
      img: lighting, 
      path: "/services/home/lighting",
      description: "Intelligent lighting control and ambiance systems",
      icon: "💡"
    },
    { 
      id: 8, 
      name: "Security System", 
      img: security, 
      path: "/services/home/security",
      description: "Comprehensive home security and alarm systems",
      icon: "🛡️"
    },
    { 
      id: 9, 
      name: "WiFi and Networking Solutions", 
      img: wifi, 
      path: "/services/home/wifi",
      description: "High-performance networking and connectivity solutions",
      icon: "📡"
    }
  ];

  const getServicesToDisplay = () => {
    if (hoveredCategory) {
      return hoveredCategory === "Industries" ? industryServices : homeServices;
    }
    if (selectedCategory) {
      return selectedCategory === "Industries" ? industryServices : homeServices;
    }
    return [];
  };

  const FloatingCard = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`floating-card-3d ${className}`}
      style={{
        '--delay': `${delay}ms`,
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="services-page-enhanced">
      {/* Enhanced Hero Section */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div className="services-hero-container">
            <div className="hero-background-services">
              <div className="floating-particles">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`particle particle-${i + 1}`} />
                ))}
              </div>
              <div className="gradient-mesh">
                <div className="mesh-1"></div>
                <div className="mesh-2"></div>
                <div className="mesh-3"></div>
              </div>
            </div>
            <section
              ref={ref}
              className={`enhanced-services-hero ${inView ? "hero-animate" : ""}`}
            >
              <div className="hero-content-services">
                <div className="hero-badge">Our Expertise</div>
                <h1 className={`services-hero-title ${inView ? "title-animate" : ""}`}>
                  <span className="title-primary">Innovative</span>
                  <span className="title-secondary">Services</span>
                </h1>
                <div className={`hero-subtitle-services ${inView ? "subtitle-animate" : ""}`}>
                  <p>Transforming Industries Through Advanced Energy & Automation Solutions</p>
                </div>
                <div className={`hero-stats ${inView ? "stats-animate" : ""}`}>
                  <div className="stat-item-hero">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Services</div>
                  </div>
                  <div className="stat-item-hero">
                    <div className="stat-number">2</div>
                    <div className="stat-label">Sectors</div>
                  </div>
                  <div className="stat-item-hero">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </InView>

      {/* Enhanced Category Selection */}
      <section className="category-selection-enhanced">
        <div className="container">
          <InView triggerOnce threshold={0.3}>
            {({ inView, ref }) => (
              <div ref={ref} className={`category-header ${inView ? "header-animate" : ""}`}>
                <div className="section-badge-services">Service Categories</div>
                <h2 className="category-title">
                  Choose Your <span className="gradient-text-services">Solution Path</span>
                </h2>
                <p className="category-subtitle">
                  Explore our comprehensive range of industrial and residential solutions
                </p>
              </div>
            )}
          </InView>

          <div className="category-grid">
            {[
              { 
                name: "Industries", 
                img: industriesImg, 
                description: "Enterprise-grade solutions for industrial automation",
                serviceCount: industryServices.length,
                color: "#667eea"
              }, 
              { 
                name: "Home", 
                img: homeImg, 
                description: "Smart home automation for modern living",
                serviceCount: homeServices.length,
                color: "#764ba2"
              }
            ].map((category, index) => (
              <InView key={category.name} triggerOnce threshold={0.3}>
                {({ inView, ref }) => (
                  <FloatingCard 
                    className={`category-card ${inView ? "category-animate" : ""} ${selectedCategory === category.name ? "active" : ""}`}
                    delay={index * 200}
                  >
                    <div
                      ref={ref}
                      className="category-card-inner"
                      style={{
                        '--category-color': category.color
                      }}
                      onMouseEnter={() => setHoveredCategory(category.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <div className="category-image-wrapper">
                        <img src={category.img} alt={category.name} />
                        <div className="category-overlay">
                          <div className="category-icon">
                            {category.name === "Industries" ? "🏭" : "🏠"}
                          </div>
                        </div>
                      </div>
                      <div className="category-content">
                        <div className="category-badge-small">
                          {category.serviceCount} Services
                        </div>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <div className="category-action">
                          <span>Explore Solutions</span>
                          <div className="action-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FloatingCard>
                )}
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="services-overview-enhanced">
        <div className="services-background">
          <div className="services-pattern"></div>
        </div>
        <div className="container">
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div ref={ref} className={`services-header ${inView ? "services-header-animate" : ""}`}>
                <h2 className="services-title">
                  {hoveredCategory || selectedCategory} 
                  <span className="gradient-text-services"> Solutions</span>
                </h2>
                <p className="services-description">
                  Discover our comprehensive range of {(hoveredCategory || selectedCategory).toLowerCase()} services designed to meet your specific needs
                </p>
              </div>
            )}
          </InView>

          <div className="services-grid">
            {getServicesToDisplay().map((service, index) => (
              <InView key={service.id} triggerOnce threshold={0.3}>
                {({ inView, ref }) => (
                  <FloatingCard 
                    className={`service-card-3d ${inView ? "service-animate" : ""}`}
                    delay={index * 100}
                  >
                    <div
                      ref={ref}
                      className="service-card-inner"
                      onClick={() => navigate(service.path)}
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div className="service-image-container">
                        <img src={service.img} alt={service.name} />
                        <div className="service-overlay">
                          <div className="service-icon">{service.icon}</div>
                          <div className="overlay-content-service">
                            <h4>{service.name}</h4>
                            <p>{service.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="service-content">
                        <div className="service-header">
                          <h3>{service.name}</h3>
                          <div className="service-arrow">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <p className="service-desc">{service.description}</p>
                        <div className="service-action">
                          <span>Learn More</span>
                        </div>
                      </div>
                    </div>
                  </FloatingCard>
                )}
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Navigation Section */}
      <section className="services-navigation">
        <div className="container">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`nav-content-services ${inView ? "nav-animate" : ""}`}>
                <div className="nav-icon">🚀</div>
                <h3>Ready to Learn More?</h3>
                <p>Discover why MSR is the trusted choice for automation and energy solutions</p>
                <button
                  onClick={() => navigate("/whychooseus")}
                  className="enhanced-nav-btn"
                >
                  <span className="btn-content">
                    <span className="btn-text">Why Choose Us</span>
                    <div className="btn-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </span>
                  <div className="btn-bg"></div>
                </button>
              </div>
            )}
          </InView>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="services-cta-enhanced">
        <div className="cta-background-services">
          <div className="cta-pattern-services"></div>
          <div className="floating-shapes">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`shape shape-${i + 1}`} />
            ))}
          </div>
        </div>
        <div className="container">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`cta-content-services ${inView ? "cta-animate" : ""}`}>
                <div className="cta-badge-services">Let's Connect</div>
                <h2>Transform Your Vision Into Reality</h2>
                <p>Partner with MSR to unlock the full potential of modern automation and energy solutions. Our expert team is ready to bring your projects to life.</p>
                <div className="cta-actions">
                  <a href="/contact" className="cta-button-primary">
                    <span>Start Your Project</span>
                    <div className="button-shine-effect"></div>
                  </a>
                  <button 
                    onClick={() => navigate("/about")} 
                    className="cta-button-secondary"
                  >
                    <span>Learn About Us</span>
                  </button>
                </div>
              </div>
            )}
          </InView>
        </div>
      </section>

      <style jsx>{`
        .services-page-enhanced {
        margin-top:-40px;
          overflow-x: hidden;
        }

        /* Enhanced Hero Styles */
        .services-hero-container {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          overflow: hidden;
        }

        .hero-background-services {
          position: absolute;
          inset: 0;
        }

        .floating-particles {
          position: absolute;
          inset: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(102, 126, 234, 0.8);
          border-radius: 50%;
          animation: floatParticle 8s linear infinite;
        }

        .particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .particle-2 { top: 80%; left: 20%; animation-delay: -2s; }
        .particle-3 { top: 60%; left: 80%; animation-delay: -4s; }
        .particle-4 { top: 30%; left: 70%; animation-delay: -1s; }
        .particle-5 { top: 90%; left: 60%; animation-delay: -3s; }
        .particle-6 { top: 10%; left: 90%; animation-delay: -5s; }
        .particle-7 { top: 50%; left: 30%; animation-delay: -6s; }
        .particle-8 { top: 70%; left: 50%; animation-delay: -7s; }

        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px) scale(1.5); opacity: 0; }
        }

        .gradient-mesh {
          position: absolute;
          inset: 0;
        }

        .mesh-1, .mesh-2, .mesh-3 {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.4;
        }

        .mesh-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #667eea, transparent 70%);
          top: -20%;
          left: -10%;
          animation: meshFloat 20s ease-in-out infinite;
        }

        .mesh-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #764ba2, transparent 70%);
          bottom: -20%;
          right: -10%;
          animation: meshFloat 25s ease-in-out infinite reverse;
        }

        .mesh-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #48dbfb, transparent 70%);
          top: 50%;
          left: 50%;
          animation: meshFloat 30s ease-in-out infinite;
          animation-delay: -10s;
        }

        @keyframes meshFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }

        .enhanced-services-hero {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
          color: white;
          padding: 2rem 0;
        }

        .hero-content-services {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          backdrop-filter: blur(10px);
        }

        .services-hero-title {
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.2s ease-out;
          line-height: 1.1;
        }

        .services-hero-title.title-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .title-primary {
          display: block;
          color: white;
        }

        .title-secondary {
          background: linear-gradient(135deg, #667eea, #764ba2, #48dbfb);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease-in-out infinite;
        }

        .hero-subtitle-services {
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.4s;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-subtitle-services.subtitle-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.8s;
        }

        .hero-stats.stats-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-item-hero {
          text-align: center;
        }

        .stat-item-hero .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-item-hero .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-top: 0.5rem;
        }

        /* Enhanced Category Selection */
        .category-selection-enhanced {
          padding: 120px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
        }

        .category-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .category-header.header-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge-services {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .gradient-text-services {
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .category-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .floating-card-3d {
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition-delay: var(--delay, 0ms);
        }

        .category-animate {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }

        .category-card {
          cursor: pointer;
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .category-card:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(2deg) scale(1.02);
        }

        .category-card-inner {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
          border: 2px solid transparent;
        }

        .category-card.active .category-card-inner {
          border-color: var(--category-color);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .category-card-inner:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .category-image-wrapper {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .category-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .category-card:hover .category-overlay {
          opacity: 1;
        }

        .category-card:hover .category-image-wrapper img {
          transform: scale(1.1);
        }

        .category-icon {
          font-size: 4rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
          90% { transform: translateY(-2px); }
        }

        .category-content {
          padding: 2rem;
        }

        .category-badge-small {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: rgba(102, 126, 234, 0.1);
          color: var(--category-color);
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .category-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .category-content p {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .category-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--category-color);
          font-weight: 600;
          transition: gap 0.3s ease;
        }

        .category-card:hover .category-action {
          gap: 1rem;
        }

        .action-arrow {
          transition: transform 0.3s ease;
        }

        .category-card:hover .action-arrow {
          transform: translateX(5px);
        }

        /* Enhanced Services Overview */
        .services-overview-enhanced {
          padding: 120px 0;
          position: relative;
          background: #f8fafc;
          overflow: hidden;
        }

        .services-background {
          position: absolute;
          inset: 0;
        }

        .services-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
        }

        .services-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .services-header-animate {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .services-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .services-description {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card-3d {
          transform: translateY(50px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition-delay: var(--delay, 0ms);
        }

        .service-animate {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }

        .service-card-inner {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
        }

        .service-card-inner:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(3deg) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .service-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .service-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
          text-align: center;
          padding: 2rem;
        }

        .service-card-inner:hover .service-overlay {
          opacity: 1;
        }

        .service-card-inner:hover .service-image-container img {
          transform: scale(1.1);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .overlay-content-service h4 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .overlay-content-service p {
          font-size: 1rem;
          opacity: 0.9;
          line-height: 1.5;
        }

        .service-content {
          padding: 2rem;
        }

        .service-header {
          display: flex;
          justify-content: between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .service-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          flex: 1;
        }

        .service-arrow {
          width: 24px;
          height: 24px;
          border: 2px solid #e2e8f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #64748b;
        }

        .service-card-inner:hover .service-arrow {
          border-color: #667eea;
          background: #667eea;
          color: white;
          transform: scale(1.1);
        }

        .service-desc {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-action {
          font-weight: 600;
          color: #667eea;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .service-card-inner:hover .service-action {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced Navigation Section */
        .services-navigation {
          padding: 100px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .services-navigation::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
        }

        .nav-content-services {
          text-align: center;
          color: white;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .nav-animate {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .nav-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: rocketFloat 3s ease-in-out infinite;
        }

        @keyframes rocketFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .nav-content-services h3 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .nav-content-services p {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .enhanced-nav-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }

        .enhanced-nav-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          z-index: 2;
        }

        .btn-bg {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .enhanced-nav-btn:hover .btn-bg {
          opacity: 1;
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .enhanced-nav-btn:hover .btn-icon {
          transform: translateX(5px);
        }

        /* Enhanced CTA Section */
        .services-cta-enhanced {
          padding: 120px 0;
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          overflow: hidden;
        }

        .cta-background-services {
          position: absolute;
          inset: 0;
        }

        .cta-pattern-services {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(45deg, rgba(102, 126, 234, 0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(118, 75, 162, 0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(102, 126, 234, 0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(118, 75, 162, 0.05) 75%);
          background-size: 60px 60px;
          background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
          opacity: 0.3;
        }

        .floating-shapes {
          position: absolute;
          inset: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(102, 126, 234, 0.1);
          animation: floatShape 10s ease-in-out infinite;
        }

        .shape-1 { width: 80px; height: 80px; top: 20%; left: 10%; animation-delay: 0s; }
        .shape-2 { width: 120px; height: 120px; top: 60%; right: 15%; animation-delay: -2s; }
        .shape-3 { width: 60px; height: 60px; bottom: 30%; left: 20%; animation-delay: -4s; }
        .shape-4 { width: 100px; height: 100px; top: 40%; right: 40%; animation-delay: -1s; }
        .shape-5 { width: 40px; height: 40px; bottom: 20%; right: 10%; animation-delay: -3s; }

        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.3; }
        }

        .cta-content-services {
          text-align: center;
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .cta-animate {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .cta-badge-services {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          backdrop-filter: blur(10px);
        }

        .cta-content-services h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-content-services p {
          font-size: 1.25rem;
          line-height: 1.7;
          opacity: 0.9;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .cta-button-primary {
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          text-decoration: none;
          padding: 1.5rem 3rem;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          transition: all 0.4s ease;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .cta-button-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #764ba2, #667eea);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button-primary span {
          position: relative;
          z-index: 2;
        }

        .cta-button-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.4);
          text-decoration: none;
          color: white;
        }

        .cta-button-primary:hover::before {
          opacity: 1;
        }

        .button-shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .cta-button-primary:hover .button-shine-effect {
          left: 100%;
        }

        .cta-button-secondary {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 1.5rem 3rem;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .cta-button-secondary:hover {
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .cta-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .services-hero-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
          }

          .category-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }

          .services-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }
        }

        @media (max-width: 480px) {
          .services-hero-container,
          .category-selection-enhanced,
          .services-overview-enhanced,
          .services-cta-enhanced {
            padding: 80px 0;
          }

          .category-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .services-grid {
            gap: 1.5rem;
          }

          .category-card-inner,
          .service-card-inner {
            margin: 0 1rem;
          }
        }

        /* Additional 3D and Animation Effects */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Loading and entrance animations */
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Enhanced typography */
        .services-page-enhanced * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .services-hero-title,
        .category-title,
        .services-title {
          letter-spacing: -0.025em;
        }

        .section-badge-services,
        .hero-badge,
        .cta-badge-services {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced hover effects */
        .category-card:hover .category-badge-small {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }

        .service-card-inner:hover .service-icon {
          transform: scale(1.2) rotateY(360deg);
          transition: transform 0.8s ease;
        }

        /* Performance optimizations */
        .floating-card-3d {
          will-change: transform, opacity;
        }

        .service-card-3d {
          will-change: transform, opacity;
        }

        .particle {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}

export default Services;