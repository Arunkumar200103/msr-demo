import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import aboutImage from '../img/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { InView } from "react-intersection-observer";
import SuccessStories from './SuccessStories';
import PartnersSection from './PartnersSection';

const About = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true
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

  const FloatingCard = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`floating-card ${className}`}
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
    <div className="about-page-enhanced">
      {/* Enhanced Hero Section with 3D Effects */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div className="hero-container">
            <div className="hero-background">
              <div className="floating-elements">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`floating-element element-${i + 1}`} />
                ))}
              </div>
            </div>
            <section
              ref={ref}
              className={`enhanced-hero ${inView ? "hero-animate" : ""}`}
            >
              <div className="hero-content">
                <h1 className={`hero-title ${inView ? "title-animate" : ""}`}>
                  <span className="title-main">About</span>
                  <span className="title-accent">MSR</span>
                </h1>
                <div className={`hero-subtitle ${inView ? "subtitle-animate" : ""}`}>
                  <p>Pioneering Innovation in Energy & Automation Excellence</p>
                </div>
                <div className={`hero-line ${inView ? "line-animate" : ""}`}></div>
              </div>
            </section>
          </div>
        )}
      </InView>

      {/* Enhanced Company Introduction */}
      <section className="about-intro-enhanced">
        <div className="container">
          <div className="intro-grid">
            <InView triggerOnce threshold={0.3}>
              {({ inView, ref }) => (
                <FloatingCard 
                  className={`intro-content ${inView ? "content-animate" : ""}`}
                  delay={200}
                >
                  <div ref={ref}>
                    <div className="section-badge">Who We Are</div>
                    <h2 className="intro-title">
                      Redefining Energy & 
                      <span className="gradient-text"> Automation Excellence</span>
                    </h2>
                    <div className="intro-text">
                      <p>
                        At <strong>MSR Automation and Energy Solutions</strong>, we are at the forefront of 
                        revolutionary energy systems and intelligent automation technology. Our expertise 
                        spans across advanced industrial automation, renewable energy integration, and 
                        smart infrastructure solutions.
                      </p>
                      <div className="highlight-stats">
                        <div className="stat-item">
                          <div className="stat-number">10+</div>
                          <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">500+</div>
                          <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">98%</div>
                          <div className="stat-label">Client Satisfaction</div>
                        </div>
                      </div>
                      <p>
                        Headquartered in <strong>Gobichettipalayam</strong>, we combine global expertise 
                        with local understanding to deliver transformative solutions that drive efficiency, 
                        sustainability, and innovation across industries.
                      </p>
                    </div>
                  </div>
                </FloatingCard>
              )}
            </InView>

            <InView triggerOnce threshold={0.3}>
              {({ inView, ref }) => (
                <FloatingCard 
                  className={`intro-image ${inView ? "image-animate" : ""}`}
                  delay={400}
                >
                  <div ref={ref} className="image-container">
                    <div className="image-frame">
                      <img src={aboutImage} alt="MSR Automation Excellence" />
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <h4>Innovation Meets Excellence</h4>
                          <p>Transforming industries through cutting-edge technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              )}
            </InView>
          </div>
        </div>
      </section>

      {/* Enhanced Vision, Mission, Values with 3D Cards */}
      <section className="mission-section-enhanced">
        <div className="mission-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="container">
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div ref={ref} className={`mission-header ${inView ? "header-animate" : ""}`}>
                <div className="section-badge">Our Foundation</div>
                <h2 className="mission-title">
                  Driving the Future Through
                  <span className="gradient-text"> Vision, Mission & Values</span>
                </h2>
              </div>
            )}
          </InView>

          <div className="mission-grid">
            <InView triggerOnce threshold={0.3}>
              {({ inView, ref }) => (
                <FloatingCard 
                  className={`mission-card vision-card ${inView ? "card-animate" : ""}`}
                  delay={100}
                >
                  <div ref={ref}>
                    <div className="card-icon">🌍</div>
                    <h3>Vision</h3>
                    <div className="card-content">
                      <div className="vision-points">
                        <div className="point">
                          <div className="point-icon">⚡</div>
                          <p>Lead global transformation in smart automation and clean energy</p>
                        </div>
                        <div className="point">
                          <div className="point-icon">🔬</div>
                          <p>Pioneer breakthrough technologies for sustainable industrial growth</p>
                        </div>
                        <div className="point">
                          <div className="point-icon">🌱</div>
                          <p>Champion environmental stewardship through innovative solutions</p>
                        </div>
                        <div className="point">
                          <div className="point-icon">🚀</div>
                          <p>Inspire industry evolution toward efficiency and sustainability</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              )}
            </InView>

            <InView triggerOnce threshold={0.3}>
              {({ inView, ref }) => (
                <FloatingCard 
                  className={`mission-card mission-main ${inView ? "card-animate" : ""}`}
                  delay={200}
                >
                  <div ref={ref}>
                    <div className="card-icon">🚀</div>
                    <h3>Mission</h3>
                    <div className="card-content">
                      <div className="mission-points">
                        <div className="point">
                          <div className="point-icon">⚙️</div>
                          <p>Engineer bespoke solutions that maximize operational performance</p>
                        </div>
                        <div className="point">
                          <div className="point-icon">🔧</div>
                          <p>Integrate advanced technologies into scalable, future-proof systems</p>
                        </div>
                        <div className="point">
                          <div className="point-icon">♻️</div>
                          <p>Accelerate carbon reduction through intelligent energy management</p>
                        </div>
                        <div className="point">
                          <div className="point-icon">🤝</div>
                          <p>Deliver exceptional partnership experiences with world-class support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              )}
            </InView>

            <InView triggerOnce threshold={0.3}>
              {({ inView, ref }) => (
                <FloatingCard 
                  className={`mission-card values-card ${inView ? "card-animate" : ""}`}
                  delay={300}
                >
                  <div ref={ref}>
                    <div className="card-icon">💎</div>
                    <h3>Core Values</h3>
                    <div className="card-content">
                      <div className="values-grid">
                        <div className="value-item">
                          <strong>Innovation</strong>
                          <p>Pushing technological boundaries to exceed expectations</p>
                        </div>
                        <div className="value-item">
                          <strong>Integrity</strong>
                          <p>Unwavering commitment to transparency and ethical excellence</p>
                        </div>
                        <div className="value-item">
                          <strong>Safety</strong>
                          <p>Prioritizing people, assets, and environmental protection</p>
                        </div>
                        <div className="value-item">
                          <strong>Sustainability</strong>
                          <p>Building solutions for a resilient, eco-conscious future</p>
                        </div>
                        <div className="value-item">
                          <strong>Excellence</strong>
                          <p>Delivering superior quality in every interaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              )}
            </InView>
          </div>
        </div>
      </section>
      <PartnersSection />


      

      {/* Success Stories Section */}
      <section className="success-stories-enhanced">
        <div className="container">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`stories-wrapper ${inView ? "stories-animate" : ""}`}>
                <SuccessStories />
              </div>
            )}
          </InView>
        </div>
      </section>

      {/* Enhanced Navigation Section */}
      <section className="navigation-section">
        <div className="container">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`nav-content ${inView ? "nav-animate" : ""}`}>
                <h3>Ready to Explore Our Solutions?</h3>
                <p>Discover how we're transforming industries with innovative technology</p>
                <button
                  onClick={() => navigate("/services")}
                  className="enhanced-nav-button"
                >
                  <span className="button-content">
                    <span className="button-text">Explore Services</span>
                    <div className="button-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </span>
                  <div className="button-bg"></div>
                </button>
              </div>
            )}
          </InView>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-enhanced">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`cta-content ${inView ? "cta-animate" : ""}`}>
                <div className="cta-badge">Let's Collaborate</div>
                <h2>Partner with Industry Leaders</h2>
                <p>Join forces with MSR to create intelligent, sustainable, and innovative solutions for tomorrow's challenges</p>
                <a href="/contact" className="cta-button">
                  <span>Start Your Journey</span>
                  <div className="button-shine"></div>
                </a>
              </div>
            )}
          </InView>
        </div>
      </section>

      <style jsx>{`



        .about-page-enhanced {
          overflow-x: hidden;
          margin-top:-40px;
        }

        /* Hero Section Styles */
        .hero-container {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
        }

        .floating-elements {
          position: absolute;
          inset: 0;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          animation: float 6s ease-in-out infinite;
        }

        .element-1 { width: 100px; height: 100px; top: 20%; left: 10%; animation-delay: 0s; }
        .element-2 { width: 60px; height: 60px; top: 60%; left: 80%; animation-delay: -2s; }
        .element-3 { width: 80px; height: 80px; top: 80%; left: 20%; animation-delay: -4s; }
        .element-4 { width: 40px; height: 40px; top: 30%; left: 70%; animation-delay: -1s; }
        .element-5 { width: 120px; height: 120px; top: 10%; left: 60%; animation-delay: -3s; }
        .element-6 { width: 50px; height: 50px; top: 70%; left: 50%; animation-delay: -5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .enhanced-hero {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
          color: white;
          padding: 2rem 0;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out;
        }

        .hero-title.title-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .title-main {
          display: block;
          letter-spacing: -0.02em;
        }

        .title-accent {
          background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.3s;
          margin-bottom: 2rem;
        }

        .hero-subtitle.subtitle-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-line {
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, white, transparent);
          margin: 0 auto;
          transition: width 1s ease-out 0.6s;
        }

        .hero-line.line-animate {
          width: 200px;
        }

        /* Floating Cards */
        .floating-card {
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.8s ease-out;
          transition-delay: var(--delay, 0ms);
        }

        .floating-card:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        /* Enhanced About Intro */
        .about-intro-enhanced {
          padding: 120px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .intro-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .intro-text {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #64748b;
        }

        .highlight-stats {
          display: flex;
          gap: 2rem;
          margin: 2rem 0;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #667eea;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
          margin-top: 0.5rem;
        }

        .image-container {
          position: relative;
        }

        .image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .image-frame img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-frame:hover .image-overlay {
          opacity: 1;
        }

        .image-frame:hover img {
          transform: scale(1.1);
        }

        .overlay-content {
          text-align: center;
          color: white;
        }

        .overlay-content h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        /* Enhanced Mission Section */
        .mission-section-enhanced {
          padding: 120px 0;
          position: relative;
          background: #0f172a;
          color: white;
          overflow: hidden;
        }

        .mission-background {
          position: absolute;
          inset: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #ff6b6b, #feca57);
          top: 10%;
          left: -10%;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #48dbfb, #ff9ff3);
          top: 60%;
          right: -5%;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          bottom: 20%;
          left: 50%;
        }

        .mission-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .mission-header.header-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .mission-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mission-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.5s ease;
          transform: translateY(50px);
          opacity: 0;
        }

        .mission-card.card-animate {
          transform: translateY(0);
          opacity: 1;
        }

        .mission-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .mission-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .point {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          text-align: left;
        }

        .point-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .values-grid {
          display: grid;
          gap: 1rem;
        }

        .value-item {
          text-align: left;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border-left: 3px solid #667eea;
        }

        .value-item strong {
          display: block;
          margin-bottom: 0.5rem;
          color: #667eea;
        }

        .value-item p {
          font-size: 0.875rem;
          opacity: 0.9;
        }

        /* Success Stories Enhanced */
        .success-stories-enhanced {
          padding: 80px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .stories-wrapper {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .stories-wrapper.stories-animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced Navigation */
        .navigation-section {
          padding: 80px 0;
          background: white;
          text-align: center;
        }

        .nav-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .nav-content.nav-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-content h3 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .nav-content p {
          font-size: 1.125rem;
          color: #64748b;
          margin-bottom: 2rem;
        }

        .enhanced-nav-button {
          position: relative;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .enhanced-nav-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
        }

        .button-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .button-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #764ba2, #667eea);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .enhanced-nav-button:hover .button-bg {
          opacity: 1;
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .enhanced-nav-button:hover .button-icon {
          transform: translateX(5px);
        }

        /* Enhanced CTA */
        .cta-enhanced {
          padding: 120px 0;
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          text-align: center;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          inset: 0;
        }

        .cta-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .cta-content.cta-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cta-content h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-content p {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 2.5rem;
        }

        .cta-button {
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          text-decoration: none;
          padding: 1.25rem 2.5rem;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #764ba2, #667eea);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button span {
          position: relative;
          z-index: 2;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
          text-decoration: none;
          color: white;
        }

        .cta-button:hover::before {
          opacity: 1;
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover .button-shine {
          left: 100%;
        }

        /* Animation Classes */
        .content-animate {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .image-animate {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .mission-grid {
            grid-template-columns: 1fr;
          }

          .highlight-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .floating-card {
            margin: 0 1rem;
          }

          .hero-title {
            font-size: clamp(2rem, 8vw, 4rem);
          }

          .mission-title {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
          }

          .intro-title {
            font-size: clamp(1.5rem, 6vw, 2rem);
          }
        }

        @media (max-width: 480px) {
          .about-intro-enhanced,
          .mission-section-enhanced,
          .cta-enhanced {
            padding: 60px 0;
          }

          .mission-card,
          .floating-card {
            margin: 0 0.5rem;
          }
        }

        /* Additional 3D Effects */
        .floating-card {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .mission-card {
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .mission-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mission-card:hover::before {
          opacity: 1;
        }

        /* Parallax effect for mouse movement */
        .floating-card {
          transition: transform 0.1s ease-out;
        }

        .floating-card:hover {
          transform: translateY(-10px) 
                     rotateX(calc(var(--mouse-y) * 0.1deg)) 
                     rotateY(calc(var(--mouse-x) * 0.1deg));
        }

        /* Glow effects */
        .enhanced-nav-button {
          position: relative;
        }

        .enhanced-nav-button::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50px;
          opacity: 0;
          z-index: -1;
          filter: blur(10px);
          transition: opacity 0.3s ease;
        }

        .enhanced-nav-button:hover::after {
          opacity: 0.7;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50px;
          opacity: 0;
          z-index: -1;
          filter: blur(15px);
          transition: opacity 0.3s ease;
        }

        .cta-button:hover::after {
          opacity: 0.8;
        }

        /* Loading animations */
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

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Additional interactive elements */
        .intro-content:hover .section-badge {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }

        .mission-card:hover .card-icon {
          transform: scale(1.2) rotateY(360deg);
          transition: transform 0.6s ease;
        }

        /* Professional typography enhancements */
        .about-page-enhanced * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .hero-title,
        .intro-title,
        .mission-title {
          letter-spacing: -0.025em;
        }

        .section-badge {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>
    </div>
  );
};

export default About;