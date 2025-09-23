import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // We'll need to create this CSS file
import adVideo from "../img/ad.mp4"
import "animate.css";
import BrandLogos from "./BrandLogos"; // Ensure this component exists
import { useNavigate } from "react-router-dom";




const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);
   const navigate = useNavigate();

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Setup Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate');
            if (id && !visibleSections.has(id)) {
              setVisibleSections(prev => new Set([...prev, id]));
              animateElement(entry.target, id);
            }
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px' 
      }
    );

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => observerRef.current?.observe(element));

    // // Generate brands
    // generateBrands();

    // Setup 3D effects
    setup3DEffects();

    // Cleanup
    return () => observerRef.current?.disconnect();
  }, [visibleSections]);

  const animateElement = (element, id) => {
    if (id === 'hero') {
      element.classList.add('animate-scale');
    } else if (id.includes('about-content') || id.includes('service-') || id.includes('why-')) {
      element.classList.add('animate-up');
    } else if (id.includes('about-visual')) {
      element.classList.add('animate-right');
    } else if (id.includes('about-title') || id.includes('services-title') || id.includes('why-title') || id.includes('brands-title')) {
      element.classList.add('animate-up');
    } else if (id.includes('brands-cta') || id === 'cta') {
      element.classList.add('animate-scale');
    } else {
      element.classList.add('animate-up');
    }

    // Staggered animations
    if (id.startsWith('service-')) {
      const index = parseInt(id.split('-')[1]);
      element.style.animationDelay = `${index * 200}ms`;
    }

    if (id.startsWith('why-')) {
      const index = parseInt(id.split('-')[1]);
      element.style.animationDelay = `${(index + 1) * 200}ms`;
    }
  };

  const setup3DEffects = () => {
    setTimeout(() => {
      const cards = document.querySelectorAll('.hero-card, .home-service-card, .why-card, .brand-card, .visual-card');
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transition = 'transform 0.1s ease-out';
        });

        card.addEventListener('mouseleave', () => {
          card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
          card.style.transform = '';
        });

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / centerY * -10;
          const rotateY = (x - centerX) / centerX * 10;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
      });
    }, 100);
  };



 
   

  const handleCTAClick = () => {
   navigate("/about")
  
  };

  const handleCOTClick = () => {
    navigate("/contact")
  }

  return (
    <div id="app">
    <section className={`hero-section ${fadeOut ? "fade-out" : ""}`}>
  <div className="hero-background">
    <video
      className="hero-video"
      src={adVideo}
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="gradient-overlay"></div>
    <div className="floating-orb orb-1"></div>
    <div className="floating-orb orb-2"></div>
  </div>

  <div className="hero-content" data-animate="hero">
    <div className="hero-card">
      <div className="holographic-effect"></div>
      <div className="hero-text">
        <h1 className="hero-title">MSR Automation</h1>
        <p className="hero-subtitle">
          Empowering Efficiency Through Advanced Energy Solutions
        </p>
        <button className="hero-btn" onClick={() => navigate("/services")}>
          <i className="fas fa-play"></i>
          <span>Explore Our Services</span>
          <i className="fas fa-arrow-right arrow-icon"></i>
          <div className="btn-overlay"></div>
        </button>
      </div>
    </div>
    <div className="hero-shadow"></div>
  </div>

  <div className="scroll-indicator">
    <i className="fas fa-chevron-down"></i>
  </div>
</section>


      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header" data-animate="about-title">
            <div className="section-badge">
              <div className="badge-line"></div>
              <span>Who We Are</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">
              Empowering Efficiency
              <span className="gradient-text">Through Automation</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-content" data-animate="about-content">
              <div className="content-wrapper">
                <p className="about-text">
                  MSR Automation and Energy Solutions is a leading provider of advanced solutions in the fields of energy, 
                  instrumentation, and control systems. With expertise spanning over a decade, we specialize in oil and 
                  other automatic industry, ensuring seamless integration and superior performance.
                </p>
                <p className="about-text">
                  Headquartered in Gobichettipalayam, Erode, our team combines cutting-edge technology with in-depth 
                  industry knowledge to offer turnkey solutions, from design and installation to commissioning and maintenance.
                </p>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">12+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>

                <button className="cta-btn" onClick={handleCTAClick}>
                  <span>Learn More About Us</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="about-visual" data-animate="about-visual">
              <div className="visual-card">
                <div className="card-gradient"></div>
                <div className="card-content">
                  <i className="fas fa-bolt card-icon"></i>
                  <h3>Advanced Automation</h3>
                  <p>Cutting-edge technology for industrial excellence</p>
                </div>
              </div>
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-background">
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
        </div>
        
        <div className="container">
          <div className="section-header" data-animate="services-title">
            <div className="section-badge light">
              <div className="badge-line"></div>
              <span>What We Do</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title light">
              Our Premium
              <span className="gradient-text">Services</span>
            </h2>
          </div>

          <div className="services-grid">
            {[
              {
                icon: 'fas fa-gas-pump',
                title: 'Oil & Gas Networks',
                desc: 'Integrated gas and fuel network solutions tailored for industrial and commercial needs.',
                iconClass: 'fuel'
              },
              {
                icon: 'fas fa-bolt',
                title: 'Electrical & Digitalization',
                desc: 'Advanced automation and electrical solutions for optimized industrial performance.',
                iconClass: 'electrical'
              },
              {
                icon: 'fas fa-tools',
                title: 'Equipment Supply & Support',
                desc: 'Reliable equipment supply with dedicated support and consultation services.',
                iconClass: 'equipment'
              },
              {
                icon: 'fas fa-cogs',
                title: 'Automation & Control',
                desc: 'Innovative control systems that enhance operational efficiency and reliability.',
                iconClass: 'automation'
              },
              {
  icon: 'fas fa-solar-panel',
  title: 'Renewable Energy Solutions',
  desc: 'Sustainable solar and wind power systems designed to reduce costs and environmental impact.',
  iconClass: 'renewable'
},
{
  icon: 'fas fa-industry',
  title: 'Industrial Infrastructure',
  desc: 'Comprehensive infrastructure development for factories, plants, and large-scale industrial projects.',
  iconClass: 'infrastructure'
}
            ].map((service, index) => (
              <div key={index} className="home-service-card" data-animate={`service-${index}`}>
                <div className="service-overlay"></div>
                <div className={`service-icon ${service.iconClass}`}>
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <div className="service-border"></div>
                <div className="service-shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="brands-section">
        <div className="brands-pattern"></div>
        <div className="container">
          <div className="section-header" data-animate="brands-title">
            <div className="section-badge">
              <div className="badge-line"></div>
              <span>Trusted Partners</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">
              Associated
              <span className="gradient-text">Brands</span>
            </h2>
            <p className="section-desc">We partner with industry-leading brands to deliver exceptional automation and energy solutions</p>
          </div>

                   {/* Associated Brands Section */}
      <BrandLogos />

             
          <div className="brands-cta" data-animate="brands-cta">
            <p>Interested in partnering with us or learning more about our brand relationships?</p>
            <button className="cta-btn" onClick={handleCOTClick}>
              <span>Contact Our Team</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="container">
          <div className="section-header" data-animate="why-title">
            <h2 className="section-title">
              Why Choose
              <span className="gradient-text">MSR?</span>
            </h2>
          </div>

          <div className="why-grid">
            {[
              {
                icon: 'fas fa-cogs',
                title: 'Expertise That Leads',
                desc: 'Twelve years of experienced technicians actively contributing to MSR projects.',
                iconClass: 'expertise'
              },
              {
                icon: 'fas fa-lightbulb',
                title: 'Innovative Solutions',
                desc: 'Cutting-edge technologies tailored for unique operational needs.',
                iconClass: 'innovation'
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Safety Assured',
                desc: 'Global safety and environmental standards ensure zero compromises.',
                iconClass: 'safety'
              }
            ].map((item, index) => (
              <div key={index} className="why-card" data-animate={`why-${index}`}>
                <div className="why-overlay"></div>
                <div className={`why-icon ${item.iconClass}`}>
                  <i className={item.icon}></i>
                </div>
                <div className="why-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="why-shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-orb"></div>
        </div>
        
        <div className="container">
          <div className="cta-content" data-animate="cta">
            <h2 className="cta-title">
              Ready to Transform
              <span className="gradient-text">Your Operations?</span>
            </h2>
            <p className="cta-desc">
              Let's discuss how MSR Automation can elevate your industrial efficiency with our cutting-edge solutions.
            </p>
            
            <button className="cta-main-btn" onClick={handleCOTClick}>
              <span>Get Started Today</span>
              <i className="fas fa-arrow-right"></i>
              <div className="btn-glow"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;