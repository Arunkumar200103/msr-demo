import React, { useState, useEffect } from 'react';
import { Building, Code, Users, ArrowRight, Sparkles, Monitor, BookOpen } from 'lucide-react';
import T360Logo from '../img/T360Logo.png';
import CodingbossLogo from '../img/Codingboss.png';

const PartnersSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  // const [isVisible, setIsVisible] = useState(true); // Changed to true for immediate visibility

  // useEffect(() => {
  //   // Small delay to trigger animations after component mounts
  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 100);
    
  //   return () => clearTimeout(timer);
  // }, []);

  const partners = [
    {
      id: 1,
      name: "Thiran360AI",
      type: "Software & Consulting",
      website: "https://www.thiran360ai.com/",
      description: "Cutting-edge AI solutions and expert consulting services for digital transformation",
      features: ["AI Development", "Digital Consulting", "Enterprise Solutions", "Innovation Strategy"],
      color: "blue-purple",
      icon: <Monitor style={{ width: '32px', height: '32px' }} />,
      logo: T360Logo,
      logoAlt: "Thiran360AI Logo",
      tagline: "Transforming Business with AI Intelligence"
    },
    {
      id: 2,
      name: "CodingBoss",
      type: "Learning Platform",
      website:"https://codingboss.in/",
      description: "Comprehensive coding education platform for aspiring developers and professionals",
      features: ["Interactive Courses", "Hands-on Projects", "Certification Programs", "Career Guidance"],
      color: "green-teal",
      icon: <BookOpen style={{ width: '32px', height: '32px' }} />,
      logo: CodingbossLogo,
      logoAlt: "CodingBoss Logo",
      tagline: "Master Coding, Lead Innovation"
    }
  ];

  const styles = {
    section: {
      position: 'relative',
      paddingTop: '80px',
      paddingBottom: '80px',
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #000000 100%)',
      overflow: 'hidden',
      minHeight: '100vh',
      // Ensure section is always visible
      // opacity: 1,
      // visibility: 'visible'
    },
    backgroundOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.2) 0%, transparent 50%, rgba(6, 78, 59, 0.2) 100%)',
      pointerEvents: 'none'
    },
    particlesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    },
    particle: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      backgroundColor: '#60a5fa',
      borderRadius: '50%',
      // opacity: 0.2,
      animation: 'pulse 2s infinite'
    },
    container: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px',
      transition: 'all 0.8s ease',
      // opacity: 1, // Always visible initially
      // transform: 'translateY(0)'
    },
    headerBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    },
    badgeText: {
      color: '#fbbf24',
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1.6px',
      margin: '0 8px'
    },
    mainTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    gradientText: {
      background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #34d399 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '20px',
      color: '#d1d5db',
      maxWidth: '768px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    partnersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px',
      marginBottom: '64px'
    },
    partnerCard: {
      position: 'relative',
      background: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(12px)',
      borderRadius: '16px',
      border: '1px solid rgba(75, 85, 99, 0.5)',
      overflow: 'hidden',
      transition: 'all 0.7s ease',
      cursor: 'pointer',
      // // Ensure cards are always visible
      // opacity: 1,
      // transform: 'translateY(0)'
    },
    partnerCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)'
    },
    cardGradientOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // opacity: 0,
      // transition: 'opacity 0.3s ease'
    },
    cardContent: {
      position: 'relative',
      padding: '32px'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    logo: {
      width: '64px',
      height: '64px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      overflow: 'hidden'
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '8px'
    },
    logoBlue: {
      background: 'white'
    },
    logoGreen: {
      background: 'white'
    },
    partnerInfo: {
      display: 'flex',
      flexDirection: 'column'
    },
    partnerName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      transition: 'color 0.3s ease',
      marginBottom: '4px'
    },
    partnerType: {
      color: '#9ca3af',
      fontWeight: '500'
    },
    iconContainer: {
      color: '#9ca3af',
      transition: 'color 0.3s ease'
    },
    tagline: {
      fontSize: '18px',
      fontWeight: '500',
      marginBottom: '16px'
    },
    taglineBlue: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    taglineGreen: {
      background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    description: {
      color: '#d1d5db',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
      marginBottom: '24px'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    featureDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%'
    },
    featureDotBlue: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
    },
    featureDotGreen: {
      background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)'
    },
    featureText: {
      fontSize: '14px',
      color: '#d1d5db'
    },
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    learnMoreButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 24px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    buttonBlue: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
    },
    buttonGreen: {
      background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)'
    },
    usersIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // opacity: 0.2
    },
    usersIconBlue: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
    },
    usersIconGreen: {
      background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      textAlign: 'center',
      transition: 'all 0.8s ease',
      // Remove conditional visibility
      // opacity: 1,
      // transform: 'translateY(0)'
    },
    statItem: {
      transition: 'transform 0.3s ease'
    },
    statIcon: {
      width: '64px',
      height: '64px',
      margin: '0 auto 16px auto',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease'
    },
    statIconBlue: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
    },
    statIconGreen: {
      background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)'
    },
    statIconPurple: {
      background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)'
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '8px'
    },
    statLabel: {
      color: '#d1d5db'
    },
    cta: {
      textAlign: 'center',
      marginTop: '64px',
      transition: 'all 0.8s ease',
      // // Remove conditional visibility
      // opacity: 1,
      // transform: 'translateY(0)'
    },
    ctaText: {
      color: '#d1d5db',
      marginBottom: '24px',
      fontSize: '18px'
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '16px 32px',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
    }
  };

  // Add CSS animations
  const cssAnimations = `
    // @keyframes pulse {
    //   0%, 100% { opacity: 0.2; }
    //   50% { opacity: 0.5; }
    // }
    
    @media (max-width: 768px) {
      .main-title { font-size: 36px !important; }
      .partners-grid { grid-template-columns: 1fr !important; }
      .features-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <>
      <style>{cssAnimations}</style>
      <section style={styles.section}>
        {/* Background Elements */}
        <div style={styles.backgroundOverlay}></div>
        
        {/* Floating particles */}
        <div style={styles.particlesContainer}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.particle,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerBadge}>
              <Sparkles style={{ width: '24px', height: '24px', color: '#fbbf24' }} />
              <span style={styles.badgeText}>Trusted Partners</span>
              <Sparkles style={{ width: '24px', height: '24px', color: '#fbbf24' }} />
            </div>
            <h2 style={styles.mainTitle} className="main-title">
              Powering Innovation
              <span style={styles.gradientText}> Together</span>
            </h2>
            <p style={styles.subtitle}>
              Collaborating with industry leaders to deliver exceptional automation solutions and drive technological advancement
            </p>
          </div>

          {/* Partners Grid */}
          <div style={styles.partnersGrid} className="partners-grid">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                style={{
                  ...styles.partnerCard,
                  ...(activeCard === partner.id ? styles.partnerCardHover : {})
                }}
                onMouseEnter={() => setActiveCard(partner.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Gradient overlay */}
                <div 
                  style={{
                    ...styles.cardGradientOverlay,
                    background: partner.color === 'blue-purple' 
                      ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' 
                      : 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
                    // opacity: activeCard === partner.id ? 0.1 : 0
                  }}
                ></div>
                
                {/* Card content */}
                <div style={styles.cardContent}>
                  {/* Header */}
                  <div style={styles.cardHeader}>
                    <div style={styles.logoContainer}>
                      <div style={{
                        ...styles.logo,
                        ...(partner.color === 'blue-purple' ? styles.logoBlue : styles.logoGreen)
                      }}>
                        <img 
                          src={partner.logo} 
                          alt={partner.logoAlt}
                          style={styles.logoImage}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span style={{ display: 'none' }}>
                          {partner.name.split('').slice(0, 3).join('')}
                        </span>
                      </div>
                      <div style={styles.partnerInfo}>
                        <h3 style={{
                          ...styles.partnerName,
                          color: activeCard === partner.id ? '#60a5fa' : 'white'
                        }}>
                          {partner.name}
                        </h3>
                        <p style={styles.partnerType}>{partner.type}</p>
                      </div>
                    </div>
                    <div style={{
                      ...styles.iconContainer,
                      color: activeCard === partner.id ? 'white' : '#9ca3af'
                    }}>
                      {partner.icon}
                    </div>
                  </div>

                  {/* Tagline */}
                  <div style={{
                    ...styles.tagline,
                    ...(partner.color === 'blue-purple' ? styles.taglineBlue : styles.taglineGreen)
                  }}>
                    {partner.tagline}
                  </div>

                  {/* Description */}
                  <p style={styles.description}>
                    {partner.description}
                  </p>

                  {/* Features */}
                  <div style={styles.featuresGrid} className="features-grid">
                    {partner.features.map((feature, idx) => (
                      <div key={idx} style={styles.feature}>
                        <div style={{
                          ...styles.featureDot,
                          ...(partner.color === 'blue-purple' ? styles.featureDotBlue : styles.featureDotGreen)
                        }}></div>
                        <span style={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action button */}
                  <div style={styles.cardFooter}>
                    <button
                      style={{
                        ...styles.learnMoreButton,
                        ...(partner.color === 'blue-purple' ? styles.buttonBlue : styles.buttonGreen),
                        transform: activeCard === partner.id ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: activeCard === partner.id ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)'
                      }}
                      onClick={() => window.open(partner.website, "_blank")}
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        style={{
                          width: '16px',
                          height: '16px',
                          transform: activeCard === partner.id ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </button>
                    
                    <div style={{
                      ...styles.usersIcon,
                      ...(partner.color === 'blue-purple' ? styles.usersIconBlue : styles.usersIconGreen)
                    }}>
                      <Users style={{ width: '24px', height: '24px', color: 'white' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Stats */}
          <div style={styles.statsGrid}>
            <div 
              style={styles.statItem}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                ...styles.statIcon,
                ...styles.statIconBlue
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Building style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h4 style={styles.statNumber}>500+</h4>
              <p style={styles.statLabel}>Projects Delivered</p>
            </div>
            
            <div 
              style={styles.statItem}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                ...styles.statIcon,
                ...styles.statIconGreen
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Code style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h4 style={styles.statNumber}>50K+</h4>
              <p style={styles.statLabel}>Lines of Code</p>
            </div>
            
            <div 
              style={styles.statItem}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                ...styles.statIcon,
                ...styles.statIconPurple
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Users style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h4 style={styles.statNumber}>10K+</h4>
              <p style={styles.statLabel}>Students Trained</p>
            </div>
          </div>

          {/* Call to action */}
          <div style={styles.cta}>
            <p style={styles.ctaText}>Ready to join forces and create something amazing?</p>
            <button 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
              }}
              onClick={() => window.open("https://www.thiran360ai.com/", "_blank")}
            >
              <span>Start Your Journey</span>
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;