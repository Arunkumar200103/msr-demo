import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import system from "../img/SystemEnergy1.jpg";
import energySystem1 from "../img/EnergySystem1.jpeg";
import energySystem2 from "../img/EnergySystem2.jpeg";

const EnergySystems = () => {
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
    <div className="energy-wrapper">
      <style>{`
        .energy-wrapper {
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
        .banner h1 {
          text-shadow: 
    -2px -2px 0 black, /* Top-left shadow (Black) */
    2px 2px 0 white;  /* Bottom-right shadow (White) */
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


        /* Animations */
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

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .banner {
            height: 50vh; /* Reduced height */
          }
          
            .banner h1 {
    font-size: 1.5rem !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    text-align: center;
    padding: 0 1rem;
    white-space: normal !important;
  }
          .banner-title {
            font-size: 1rem;
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
            width: 300px;
            height: 300px; /* Fixed height for consistency */
            object-fit: cover; /* Ensures images remain consistent */
            border-radius: 8px;
          }

          .content p {
            text-align: justify;
          }

          .fade-in-right {
            animation: slideInRightMobile 2s ease-in-out forwards;
          }

          .fade-in-left {
            animation: slideInLeftMobile 2s ease-in-out forwards;
          }

          @keyframes slideInRightMobile {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideInLeftMobile {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        }
      `}</style>

      {/* Banner */}
      <section className="banner">
        <img src={system} alt="Energy Systems" className="banner-image" />
        <h1 style={titleStyle}>Energy Systems</h1>
      </section>

      {/* First Row */}
      <section className="container">
        <div className="box">
          <img src={energySystem1} alt="Energy System Left" className="box-image" />
        </div>
        <div className="box fade-in-right">
          <p className="content">
            Turnkey solutions for the oil and gas sector provide end-to-end services for processing and handling various fuel types, including Propane Gas (PG), Synthetic Natural Gas (SNG), Natural Gas (NG), Liquefied Natural Gas (LNG), and Compressed Natural Gas (CNG).<br /><br />
            Our services include advanced storage, distribution, and pipeline systems designed to ensure the smooth and secure handling of energy resources.
          </p>
        </div>
      </section>

      {/* Second Row */}
      <section className="container">
        <div className="box fade-in-left">
          <p className="content">
            We also offer comprehensive design, engineering, installation, and maintenance services tailored to meet the specific requirements of each client. From building new systems to optimizing existing ones, we ensure that our solutions are reliable, efficient, and sustainable.
          </p>
          <Link to="/Contact">
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
        <div className="box">
          <img src={energySystem2} alt="Energy System Right" className="box-image" />
        </div>
      </section>
    </div>
  );
};

export default EnergySystems;