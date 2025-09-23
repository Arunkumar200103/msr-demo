import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import securitySystemBanner from "../img/security-system-banner.jpg";
import securitySystem1 from "../img/security-system1.jpg";
import securitySystem2 from "../img/security-system2.jpeg";

const SecuritySystem = () => {
  const [titleStyle, setTitleStyle] = useState({
    position: "absolute",
    top: "50%",
    left: "-100%", // Start off-screen
    transform: "translate(-50%, -50%)",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "white",
    WebkitTextStroke: "1px black",
    transition: "left 2s ease-in-out",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setTitleStyle((prev) => ({ ...prev, left: "50%" }));
    }, 100);
  }, []);

  return (
    <div className="security-wrapper">
      <style>{`
        .security-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          position: relative;
          background-color: white;
          margin-top: -2rem;
        }

        .banner {
          width: 100vw;
          height: 100vh;
          position: relative;
          margin-top: -1.8rem;
          animation: fadeIn 1.8s ease-in-out; /* Apply fade-in animation */
        }

        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        }
          .banner h1 {
          text-shadow: 
    -2px -2px 0 black, /* Top-left shadow (Black) */
    2px 2px 0 white;  /* Bottom-right shadow (White) */
        }
          /* Animation: Fade-in Effect */
      @keyframes fadeIn {
      from {
      opacity: 0;
      transform: scale(1.05); /* Slight zoom-out effect */
      }
      to {
      opacity: 1;
      transform: scale(1);
      }
    }

        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background-color: white;
          margin: 0rem;
          gap: 10px;
        }

        .box {
          flex: 1;
          padding: 1rem;
        }

        .box-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .content p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
          text-align: justify;
        }

        .contact-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  color: white;
  background: linear-gradient(45deg, #00c896, #4b33a8);
  background-size: 200% 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: background-position 0.4s ease-in-out, transform 0.3s ease-in-out;
}

/* Background animation effect */
.contact-button:hover {
  background-position: -100% 0;
}

/* Adding arrow effect */
.contact-button::after {
  content: " →";
  position: absolute;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  transform: translateX(-10px);
}

/* Show arrow when hovered */
.contact-button:hover::after {
  opacity: 1;
  transform: translateX(5px);
}


        .fade-in-right {
          opacity: 0;
          transform: translateX(100%);
          animation: slideInRight 3s ease-in-out forwards;
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-100%);
          animation: slideInLeft 3s ease-in-out forwards;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @media (max-width: 768px) {
          .banner {
            height: 50vh;
          }

            .banner h1 {
    font-size: 1.5rem !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    text-align: center;
    padding: 0 1rem;
    white-space: normal !important;
  }

          .container {
            flex-direction: column;
            text-align: center;
            padding: 1rem 0; /* Reduced spacing */
            gap: 10px; /* Less gap between containers */
          }

          .box {
            width: 100%;
            padding: 0.5rem;
          }

          .box-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          .content p {
            text-align: justify;
          }
        }
      `}</style>

      <section className="banner">
        <img src={securitySystemBanner} alt="Security System" className="banner-image" />
        <h1 style={titleStyle}>Security System</h1>
      </section>

      <section className="container">
        <div className="box">
          <img src={securitySystem1} alt="Security System Left" className="box-image" />
        </div>
        <div className="box fade-in-right">
          <p className="content">
            Enhance the safety and security of your property with our reliable and advanced security systems. 
            Our solutions include high-definition surveillance cameras, motion detection sensors, and real-time alerts to keep you informed at all times.
            <br /><br />
            With remote access and smart integration, you can monitor your home or business from anywhere. Automated alarms and intrusion detection provide an added layer of protection.
            <br /><br />
            Our systems are customizable to suit your specific security needs. Enjoy peace of mind knowing your space is always protected.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="box fade-in-left">
          <p className="content">
            Our security systems are designed to offer seamless integration with smart home automation, providing enhanced protection and convenience.
            You can control your security settings remotely using your smartphone or tablet.
            <br /><br />
            Enjoy peace of mind knowing your home or business is secure and always under your control.
          </p>
          <Link to="/Contact">
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
        <div className="box">
          <img src={securitySystem2} alt="Security System Right" className="box-image" />
        </div>
      </section>
    </div>
  );
};

export default SecuritySystem;
