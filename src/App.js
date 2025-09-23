import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import ScrollAnimation from './components/ScrollAnimation';
import SuccessStories from './pages/SuccessStories';
import GateAutomation from './Layout/GateAutomation';
import AudioVideoInstallation from './Layout/AudioVideoInstallation';
import ShadingSolutions from './Layout/ShadingSolutions';
import CameraSolutions from './Layout/CameraSolutions';
import AccessControl from './Layout/AccessControl';
import HomeAutomation from './Layout/HomeAutomation';
import LightingControl from './Layout/LightingControl';
import SecuritySystem from './Layout/SecuritySystem';
import WiFiAndNetworkingSolutions from './Layout/WiFiAndNetworkingSolutions';
import AutomationInstrumentation from './Industries/AutomationInstrumentation';
import EnergySystems from './Industries/EnergySystems';
import EngineeringConsultation from './Industries/EngineeringConsultation';
import MaintenanceLifecycle from './Industries/MaintenanceLifecycle';
import RenewableEnergy from './Industries/RenewableEnergy';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('loading-active');

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading-active');
      document.body.classList.add('white-background');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          <Header />
          <br />
          <main>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<ScrollAnimation><Home /></ScrollAnimation>} />
              <Route path="/about" element={<ScrollAnimation><About /></ScrollAnimation>} />
              <Route path="/services" element={<ScrollAnimation><Services /></ScrollAnimation>} />
              <Route path="/service" element={<Navigate to="/services" replace />} />
              <Route path="/whychooseus" element={<ScrollAnimation><WhyChooseUs /></ScrollAnimation>} />
              <Route path="/contact" element={<ScrollAnimation><Contact /></ScrollAnimation>} />
              <Route path="/successstories" element={<ScrollAnimation><SuccessStories /></ScrollAnimation>} />

              {/* Industries */}
              <Route path="/services/industries/energy-systems" element={<ScrollAnimation><EnergySystems /></ScrollAnimation>} />
              <Route path="/services/industries/automation-instrumentation" element={<ScrollAnimation><AutomationInstrumentation /></ScrollAnimation>} />
              <Route path="/services/industries/maintenance" element={<ScrollAnimation><MaintenanceLifecycle /></ScrollAnimation>} />
              <Route path="/services/industries/engineering" element={<ScrollAnimation><EngineeringConsultation /></ScrollAnimation>} />
              <Route path="/services/industries/renewable" element={<ScrollAnimation><RenewableEnergy /></ScrollAnimation>} />

              {/* Home Services */}
              <Route path="/services/home/gate-automation" element={<ScrollAnimation><GateAutomation /></ScrollAnimation>} />
              <Route path="/services/home/audio-video" element={<ScrollAnimation><AudioVideoInstallation /></ScrollAnimation>} />
              <Route path="/services/home/shading" element={<ScrollAnimation><ShadingSolutions /></ScrollAnimation>} />
              <Route path="/services/home/camera" element={<ScrollAnimation><CameraSolutions /></ScrollAnimation>} />
              <Route path="/services/home/access-control" element={<ScrollAnimation><AccessControl /></ScrollAnimation>} />
              <Route path="/services/home/automation" element={<ScrollAnimation><HomeAutomation /></ScrollAnimation>} />
              <Route path="/services/home/lighting" element={<ScrollAnimation><LightingControl /></ScrollAnimation>} />
              <Route path="/services/home/security" element={<ScrollAnimation><SecuritySystem /></ScrollAnimation>} />
              <Route path="/services/home/wifi" element={<ScrollAnimation><WiFiAndNetworkingSolutions /></ScrollAnimation>} />

              {/* Fallback */}
              <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Page not found</h2>} />
            </Routes>
          </main>

          <ScrollToTop />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
