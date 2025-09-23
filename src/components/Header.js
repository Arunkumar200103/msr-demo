import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Logo from '../img/MSRLogo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const navRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.background = "white";
    document.documentElement.style.background = "white"; // Ensures full white background
  }, [location.pathname]);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
    setHomeOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate('/services');
    setServicesOpen(!servicesOpen);
  };

  const toggleIndustries = (e) => {
    e.preventDefault();
    setIndustriesOpen(!industriesOpen);
  };

  const toggleHome = (e) => {
    e.preventDefault();
    setHomeOpen(!homeOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navRef.current && !navRef.current.contains(event.target) &&
        servicesRef.current && !servicesRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header>
      <nav ref={navRef} className="navbar navbar-expand-lg navbar-White bg-White">
        <div className="d-flex justify-content-between w-100 d-lg-none align-items-center mobile-header">
          <Link className="navbar-brand small-screen-brand" to="/">
            <img src={Logo} alt="MSR Logo" className="logo-small-screen" />
          </Link>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
          </div>
        </div>

        <Link className="navbar-brand d-none d-lg-block" to="/">
          <img src={Logo} alt="MSR Logo" className="logo-large-screen" />
        </Link>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li 
              className="nav-item dropdown" 
              ref={servicesRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                className={`nav-link dropdown-toggle ${servicesOpen ? 'show' : ''}`}
                href="#"
                onClick={handleServicesClick}
                role="button"
                aria-expanded={servicesOpen}
              >
                Services
              </a>
              <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                <li 
                  className="dropdown-submenu"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <a
                    className={`dropdown-item dropdown-toggle ${industriesOpen ? 'show' : ''}`}
                    href="#"
                    onClick={toggleIndustries}
                    aria-expanded={industriesOpen}
                  >
                    Industries
                  </a>
                  <ul className={`dropdown-menu ${industriesOpen ? 'show' : ''}`}>
                    <li><Link className="dropdown-item" to="/services/industries/energy-systems" onClick={closeMenu}>Energy Systems</Link></li>
                    <li><Link className="dropdown-item" to="/services/industries/automation-instrumentation" onClick={closeMenu}>Automation & Instrumentation</Link></li>
                    <li><Link className="dropdown-item" to="/services/industries/maintenance" onClick={closeMenu}>Maintenance & Lifecycle</Link></li>
                    <li><Link className="dropdown-item" to="/services/industries/engineering" onClick={closeMenu}>Engineering Consultation</Link></li>
                    <li><Link className="dropdown-item" to="/services/industries/renewable" onClick={closeMenu}>Renewable Energy Solutions</Link></li>
                  </ul>
                </li>
                <li 
                  className="dropdown-submenu"
                  onMouseEnter={() => setHomeOpen(true)}
                  onMouseLeave={() => setHomeOpen(false)}
                >
                  <a
                    className={`dropdown-item dropdown-toggle ${homeOpen ? 'show' : ''}`}
                    href="#"
                    onClick={toggleHome}
                    aria-expanded={homeOpen}
                  >
                    Home
                  </a>
                  <ul className={`dropdown-menu ${homeOpen ? 'show' : ''}`}>
                    <li><Link className="dropdown-item" to="/services/home/gate-automation" onClick={closeMenu}>Gate Automation</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/audio-video" onClick={closeMenu}>Audio Video Installations</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/shading" onClick={closeMenu}>Shading Solutions</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/camera" onClick={closeMenu}>Camera Solutions</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/access-control" onClick={closeMenu}>Access Control</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/automation" onClick={closeMenu}>Home Automations</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/lighting" onClick={closeMenu}>Lighting Control</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/security" onClick={closeMenu}>Security System</Link></li>
                    <li><Link className="dropdown-item" to="/services/home/wifi" onClick={closeMenu}>WiFi and Networking Solutions</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/whychooseus" onClick={closeMenu}>WhyChooseUs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
