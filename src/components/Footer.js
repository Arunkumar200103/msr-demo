import React from 'react';
import './Footer.css';
import { FaFilePdf } from "react-icons/fa";

function Footer() {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/MSR AUTOMATION & ENRGY SOLUTIONS.pdf'; // Ensure the PDF is in the public folder
    link.download = 'MSR AUTOMATION & ENRGY SOLUTIONS.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Icons on Left */}
        <div className="footer-social">
          <a href="https://www.facebook.com/people/Msr-Automation/pfbid0sBaGwM8fPC1Yg5c54UbHKvNWjkSkBi4ptPdKzbTMj15JEw3ecXbZasUc9Y313Z9Al/" target="_blank" aria-label="Facebook" className="footer-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/msr-automation-energy-solutions/" target="_blank" aria-label="LinkedIn" className="footer-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/msr_energy_and_automation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} MSR Automation & Energy Solutions. All Rights Reserved.</p>
        </div>
      </div>

      {/* Download Button */}
      <div className="footer-download">
        <button className="btn1 btn-primary" onClick={handleDownloadPDF}>
          <FaFilePdf className="pdf-icon" /> Download
        </button>
      </div>
    </footer>
  );
}

export default Footer;
