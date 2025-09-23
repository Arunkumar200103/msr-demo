import React from 'react';
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function WhyChooseUs() {
  const navigate = useNavigate();

  const reasons = [
    {
      id: 1,
      title: "Industry-Leading Expertise",
      description: "Over 12 years of proven excellence in oil and gas sector (LPG, NG, LNG) and automation, delivering unparalleled industry knowledge to every project.",
      icon: "🏭",
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
      stats: { number: "12+", label: "Years Experience" }
    },
    {
      id: 2,
      title: "Innovative & Customized Solutions",
      description: "Cutting-edge technologies tailored to meet unique operational needs, ensuring optimal performance and future-ready systems.",
      icon: "🔬",
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
      stats: { number: "100%", label: "Custom Solutions" }
    },
    {
      id: 3,
      title: "Safety & Compliance Assured",
      description: "Every project adheres to global safety and environmental standards, ensuring zero compromises on quality and regulatory compliance.",
      icon: "🛡️",
      color: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
      stats: { number: "100%", label: "Safety Record" }
    },
    {
      id: 4,
      title: "Commitment to Excellence",
      description: "World-class service delivery with precision, timeliness, and customer satisfaction at the core of every project phase.",
      icon: "🏆",
      color: "#43e97b",
      gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
      stats: { number: "98%", label: "Client Satisfaction" }
    },
    {
      id: 5,
      title: "Sustainability-Driven",
      description: "Helping businesses achieve energy goals while reducing environmental impact through cleaner, greener, and more efficient systems.",
      icon: "🌱",
      color: "#fa709a",
      gradient: "linear-gradient(135deg, #fa709a, #fee140)",
      stats: { number: "40%", label: "Carbon Reduction" }
    },
    {
      id: 6,
      title: "Strong Partnerships & Collaboration",
      description: "Valuing collaboration and working alongside clients and partners to deliver optimal solutions with lasting impact and shared success.",
      icon: "🤝",
      color: "#a8edea",
      gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
      stats: { number: "500+", label: "Happy Partners" }
    }
  ];

  const ReasonCard = ({ reason }) => (
    <div
      className="reason-card-3d"
      style={{
        '--card-color': reason.color,
        '--card-gradient': reason.gradient
      }}
    >
      <div className="card-3d-bg">
        <div className="card-gradient-overlay"></div>
        <div className="card-mesh-pattern"></div>
        <div className="card-light-reflection"></div>
      </div>

      <div className="card-3d-content">
        <div className="card-header-3d">
          <div className="card-number-3d">{String(reason.id).padStart(2, '0')}</div>
          <div className="card-icon-3d">
            <div className="icon-sphere">
              <span>{reason.icon}</span>
              <div className="icon-glow"></div>
            </div>
          </div>
        </div>

        <div className="card-body-3d">
          <h3 className="card-title-3d">{reason.title}</h3>
          <p className="card-description-3d">{reason.description}</p>

          <div className="card-stats-3d">
            <div className="stat-display-3d">
              <div className="stat-number-3d">{reason.stats.number}</div>
              <div className="stat-label-3d">{reason.stats.label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`hero-3d-container ${inView ? "hero-animate" : ""}`}
    >
      <div className="hero-content-3d">
        {/* <div className={`hero-badge-3d ${inView ? "badge-animate" : ""}`}>
          <span>Excellence Redefined</span>
        </div> */}

        <h1 className={`hero-title-3d ${inView ? "title-animate" : ""}`}>
          <span className="title-line-1">Why Choose</span>
          <span className="title-line-2 title-accent">MSR Solutions?</span>
        </h1>

        <p className={`hero-subtitle-3d ${inView ? "subtitle-animate" : ""}`}>
          Discover the compelling reasons...
        </p>

        <div className={`hero-line-3d ${inView ? "line-animate" : ""}`} />

        <div className="hero-metrics-3d">
          <div
            className={`metric-3d ${inView ? "floating-card" : ""}`}
            style={{ "--delay": "200ms" }}
          >
            <div className="metric-number-3d">6</div>
            <div className="metric-label-3d">Key Advantages</div>
          </div>
          <div className="metric-separator-3d"></div>
          <div
            className={`metric-3d ${inView ? "floating-card" : ""}`}
            style={{ "--delay": "400ms" }}
          >
            <div className="metric-number-3d">∞</div>
            <div className="metric-label-3d">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

  return (
    <div className="why-choose-us-3d">
      <HeroSection />

      <section className="reasons-section-3d">
        <div className="section-bg-3d">
          <div className="grid-pattern-3d"></div>
          <div className="floating-elements-3d">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`floating-element floating-element-${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="container-3d">
          <div className="section-header-3d">
            <div className="section-badge-3d">Our Advantages</div>
            <h2 className="section-title-3d">
              What Sets Us <span className="gradient-text-3d">Apart</span>
            </h2>
            <p className="section-subtitle-3d">
              Six compelling reasons why industry leaders trust MSR for their most critical energy and automation projects
            </p>
          </div>

          <div className="reasons-grid-3d">
            {reasons.map((reason) => (
              <ReasonCard key={reason.id} reason={reason} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section-3d">
        <div className="cta-bg-3d">
          <div className="aurora-effect">
            <div className="aurora-layer aurora-layer-1"></div>
            <div className="aurora-layer aurora-layer-2"></div>
            <div className="aurora-layer aurora-layer-3"></div>
          </div>
        </div>

        <div className="container-3d">
          <div className="cta-content-3d">
            <div className="cta-badge-3d">Join Our Success Story</div>
            <h2 className="cta-title-3d">Transform Your Vision Into Reality</h2>
            <p className="cta-subtitle-3d">
              Partner with MSR Automation and Energy Solutions to unlock the full potential of modern energy systems.
            </p>

            <div className="cta-buttons-3d">
              <button
                onClick={() => navigate("/contact")}
                className="cta-primary-3d"
              >
                <span>Start Your Project</span>
              </button>
              <button
                onClick={() => navigate("/services")}
                className="cta-secondary-3d"
              >
                <span>View Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  


      <style jsx>{`
        .why-choose-us-3d {
        margin-top:-40px;
          position: relative;
          overflow-x: hidden;
        }

        .hero-3d-container {
  position: relative;
  overflow: hidden;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

/* Floating Spheres */
.sphere-3d {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  animation: float 6s ease-in-out infinite;
}
.sphere-1 { width: 100px; height: 100px; top: 20%; left: 10%; }
.sphere-2 { width: 60px; height: 60px; top: 60%; left: 80%; animation-delay: -2s; }
.sphere-3 { width: 80px; height: 80px; top: 80%; left: 20%; animation-delay: -4s; }
/* ...repeat styling like your earlier floating elements... */

/* Wave Animation */
.wave-distortion {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
}
.wave-path-1,
.wave-path-2 {
  fill: rgba(255, 255, 255, 0.1);
  animation: waveShift 8s ease-in-out infinite alternate;
}
@keyframes waveShift {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50px); }
}

/* Hero Content */
.hero-content-3d {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}
.hero-badge-3d {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 999px;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}
.hero-badge-3d.badge-animate {
  opacity: 1;
  transform: translateY(0);
}
.hero-title-3d {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}
.hero-title-3d.title-animate {
  opacity: 1;
  transform: translateY(0);
}
.title-accent {
  background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease-in-out infinite;
}
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.hero-subtitle-3d {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out 0.3s;
}
.hero-subtitle-3d.subtitle-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Animated Line */
.hero-line-3d {
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, white, transparent);
  margin: 0 auto 2rem auto;
  transition: width 1s ease-out 0.6s;
}
.hero-line-3d.line-animate {
  width: 200px;
}

/* Metrics */
.hero-metrics-3d {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.metric-3d {
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.8s ease-out;
}
.floating-card {
  opacity: 1 !important;
  transform: translateY(0);
}
.metric-number-3d {
  font-size: 2rem;
  font-weight: bold;
}
.metric-label-3d {
  font-size: 0.9rem;
  opacity: 0.8;
}
.metric-separator-3d {
  width: 2px;
  height: 40px;
  background: rgba(255,255,255,0.4);
}


        /* 3D Reasons Section */
        .reasons-section-3d {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          overflow: hidden;
        }

        .section-bg-3d {
          position: absolute;
          inset: 0;
        }

        .grid-pattern-3d {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(102, 126, 234, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(60px, 60px); }
        }

        .floating-elements-3d {
          position: absolute;
          inset: 0;
        }

        .floating-element {
          position: absolute;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
          border-radius: 50%;
          animation: elementFloat 12s ease-in-out infinite;
        }

        .floating-element-1 { width: 80px; height: 80px; top: 10%; left: 5%; animation-delay: 0s; }
        .floating-element-2 { width: 60px; height: 60px; top: 30%; right: 10%; animation-delay: -2s; }
        .floating-element-3 { width: 100px; height: 100px; bottom: 20%; left: 15%; animation-delay: -4s; }
        .floating-element-4 { width: 40px; height: 40px; top: 60%; right: 20%; animation-delay: -1s; }
        .floating-element-5 { width: 70px; height: 70px; bottom: 40%; right: 5%; animation-delay: -3s; }

        @keyframes elementFloat {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-40px) translateX(20px) rotate(180deg);
            opacity: 0.7;
          }
        }

        .container-3d {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .section-header-3d {
          text-align: center;
          margin-bottom: 5rem;
          transform: perspective(800px) rotateX(20deg);
          animation: headerReveal 2s ease-out forwards;
        }

        @keyframes headerReveal {
          to {
            transform: perspective(800px) rotateX(0deg);
          }
        }

        .section-badge-3d {
          display: inline-block;
          padding: 0.7rem 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 30px;
          font-weight: 600;
          margin-bottom: 1.5rem;
          transform: perspective(400px) rotateX(15deg);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .section-title-3d {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }

        .gradient-text-3d {
          background: linear-gradient(135deg, #667eea, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle-3d {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* 3D Floating Cards */
        .reasons-grid-3d {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .floating-card-3d {
          transform: translateY(100px) rotateX(20deg);
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition-delay: var(--delay, 0ms);
        }

        .floating-card-3d.animate-in {
          transform: translateY(0) rotateX(0deg);
          opacity: 1;
        }

        /* 3D Reason Cards */
        .reason-card-3d {
          position: relative;
          height: 450px;
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .reason-card-3d:hover {
          transform: translateY(-20px) rotateX(5deg) rotateY(5deg);
        }

        .card-3d-bg {
          position: absolute;
          inset: 0;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.1),
            0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.6s ease;
        }

        .reason-card-3d.hovered .card-3d-bg {
          box-shadow: 
            0 30px 80px rgba(0, 0, 0, 0.15),
            0 15px 40px rgba(0, 0, 0, 0.1),
            0 0 0 2px var(--card-color);
        }

        .card-gradient-overlay {
          position: absolute;
          inset: 0;
          background: var(--card-gradient);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .reason-card-3d.hovered .card-gradient-overlay {
          opacity: 0.05;
        }

        .card-mesh-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 2px 2px, var(--card-color) 1px, transparent 0);
          background-size: 20px 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .reason-card-3d.hovered .card-mesh-pattern {
          opacity: 0.1;
        }

        .card-light-reflection {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.3) 50%, transparent 60%);
          transform: rotate(-45deg) translateX(-100%);
          transition: transform 0.6s ease;
        }

        .reason-card-3d.hovered .card-light-reflection {
          transform: rotate(-45deg) translateX(100%);
        }

        .card-3d-content {
          position: relative;
          z-index: 2;
          padding: 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-header-3d {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .card-number-3d {
          padding: 0.5rem 1rem;
          background: rgba(102, 126, 234, 0.1);
          color: var(--card-color);
          border-radius: 20px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          transform: perspective(300px) rotateY(10deg);
          transition: all 0.3s ease;
        }

        .reason-card-3d.hovered .card-number-3d {
          transform: perspective(300px) rotateY(0deg) translateZ(10px);
          background: var(--card-color);
          color: white;
        }

        .card-icon-3d {
          position: relative;
        }

        .icon-sphere {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          background: var(--card-gradient);
          border-radius: 20px;
          font-size: 2rem;
          color: white;
          transform: perspective(400px) rotateY(-10deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .reason-card-3d.hovered .icon-sphere {
          transform: perspective(400px) rotateY(0deg) rotateX(-10deg) translateZ(15px);
          border-radius: 50%;
        }

        .icon-glow {
          position: absolute;
          inset: -10px;
          background: var(--card-gradient);
          border-radius: inherit;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .reason-card-3d.hovered .icon-glow {
          opacity: 0.4;
        }

        .card-body-3d {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title-3d {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
          transform: perspective(500px) rotateX(5deg);
          transition: all 0.3s ease;
        }

        .reason-card-3d.hovered .card-title-3d {
          transform: perspective(500px) rotateX(0deg) translateZ(5px);
          color: var(--card-color);
        }

        .card-description-3d {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex: 1;
        }

        .card-stats-3d {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-display-3d {
          text-align: left;
        }

        .stat-number-3d {
          font-size: 2rem;
          font-weight: 700;
          background: var(--card-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform: perspective(300px) rotateY(5deg);
          transition: all 0.3s ease;
        }

        .reason-card-3d.hovered .stat-number-3d {
          transform: perspective(300px) rotateY(0deg) scale(1.1);
        }

        .stat-label-3d {
          font-size: 0.875rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .stat-visual-3d {
          width: 60px;
          height: 60px;
        }

        .stat-circle-3d {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .stat-bg-circle {
          fill: none;
          stroke: rgba(102, 126, 234, 0.1);
          stroke-width: 8;
        }

        .stat-progress-circle {
          fill: none;
          stroke: var(--card-color);
          stroke-width: 8;
          stroke-linecap: round;
          animation: progressDraw 2s ease-out forwards;
        }

        @keyframes progressDraw {
          from {
            stroke-dasharray: 0 300;
          }
        }

        .card-interactive-3d {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 24px;
          overflow: hidden;
        }

        .ripple-effect {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-color) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .reason-card-3d.hovered .ripple-effect {
          opacity: 0.1;
        }

        .hover-particles {
          position: absolute;
          inset: 0;
        }

        .hover-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--card-color);
          border-radius: 50%;
          opacity: 0;
          animation: particleBurst 1.5s ease-out infinite;
        }

        .hover-particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .hover-particle-2 { top: 40%; right: 15%; animation-delay: 0.2s; }
        .hover-particle-3 { bottom: 30%; left: 20%; animation-delay: 0.4s; }
        .hover-particle-4 { bottom: 50%; right: 25%; animation-delay: 0.6s; }
        .hover-particle-5 { top: 60%; left: 50%; animation-delay: 0.8s; }
        .hover-particle-6 { bottom: 60%; right: 50%; animation-delay: 1s; }

        @keyframes particleBurst {
          0% { opacity: 0; transform: scale(0) translateY(0); }
          20% { opacity: 1; transform: scale(1) translateY(-10px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-30px); }
        }

        .reason-card-3d.hovered .hover-particle {
          animation-play-state: running;
        }

        .reason-card-3d:not(.hovered) .hover-particle {
          animation-play-state: paused;
        }

        /* 3D CTA Section */
        .cta-section-3d {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
          overflow: hidden;
        }

        .cta-bg-3d {
          position: absolute;
          inset: 0;
        }

        .aurora-effect {
          position: absolute;
          inset: 0;
          opacity: 0.6;
        }

        .aurora-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.3), transparent);
          animation: auroraMove 8s ease-in-out infinite;
        }

        .aurora-layer-1 {
          animation-delay: 0s;
          background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.2), transparent);
        }

        .aurora-layer-2 {
          animation-delay: -2s;
          background: linear-gradient(-45deg, transparent, rgba(240, 147, 251, 0.2), transparent);
        }

        .aurora-layer-3 {
          animation-delay: -4s;
          background: linear-gradient(90deg, transparent, rgba(67, 233, 123, 0.2), transparent);
        }

        @keyframes auroraMove {
          0%, 100% { transform: translateX(-100%) translateY(-50%) rotate(0deg); }
          50% { transform: translateX(100%) translateY(50%) rotate(180deg); }
        }

        .cta-content-3d {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          transform: perspective(800px) rotateX(15deg);
          animation: ctaReveal 2s ease-out forwards;
        }

        @keyframes ctaReveal {
          to {
            transform: perspective(800px) rotateX(0deg);
          }
        }

        .cta-badge-3d {
          display: inline-block;
          padding: 0.7rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          font-weight: 600;
          margin-bottom: 2rem;
          backdrop-filter: blur(15px);
          transform: perspective(400px) rotateY(5deg);
          transition: all 0.3s ease;
        }

        .cta-badge-3d:hover {
          transform: perspective(400px) rotateY(0deg) translateZ(10px);
        }

        .cta-title-3d {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff, #f093fb, #43e97b);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }

        .cta-subtitle-3d {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .cta-buttons-3d {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary-3d,
        .cta-secondary-3d {
          position: relative;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transform: perspective(500px) rotateY(5deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .cta-primary-3d {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .cta-secondary-3d {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(15px);
        }

        .cta-primary-3d:hover,
        .cta-secondary-3d:hover {
          transform: perspective(500px) rotateY(0deg) translateZ(15px) scale(1.05);
        }

        .button-3d-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .cta-primary-3d:hover .button-3d-effect {
          transform: translateX(100%);
        }

        .button-glow-3d {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #667eea, #f093fb);
          border-radius: 52px;
          opacity: 0;
          filter: blur(10px);
          transition: opacity 0.3s ease;
        }

        .cta-secondary-3d:hover .button-glow-3d {
          opacity: 0.5;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content-3d {
            padding: 1rem;
          }

          .hero-metrics-3d {
            flex-direction: column;
            gap: 2rem;
          }

          .metric-separator-3d {
            width: 60px;
            height: 2px;
          }

          .reasons-grid-3d {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .reason-card-3d {
            height: auto;
            min-height: 400px;
          }

          .cta-buttons-3d {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary-3d,
          .cta-secondary-3d {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .floating-card-3d,
          .reason-card-3d {
            transform: none !important;
          }

          .hero-content-3d {
            transform: none !important;
          }

          .section-header-3d {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default WhyChooseUs;