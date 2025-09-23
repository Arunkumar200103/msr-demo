import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import engineering from "../img/Engineering Consultation.jpeg";
import engineering1 from "../img/engineering1.png";
import engineering2 from "../img/engineering2.jpg";

const EngineeringConsultation = () => {
  const [titleStyle, setTitleStyle] = useState({
    position: "absolute",
    top: "50%",
    left: "-100%",
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
    <div className="engineering-wrapper">
      <style>{`
        .engineering-wrapper {
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
            height: 50vh;
          }
          .container {
            flex-direction: column;
            text-align: center;
            padding: 1rem 0; /* Reduced spacing */
            gap: 10px; /* Less gap between containers */
          }

            .banner h1 {
    font-size: 1.5rem !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    text-align: center;
    padding: 0 1rem;
    white-space: normal !important;
  }
          .box {
            width: 100%;
            padding: 0.5rem;
          }
          .box-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
          }
          .content p {
            text-align: justify;
          }
        }
      `}</style>

      {/* Banner */}
      <section className="banner">
        <img src={engineering} alt="Engineering Consultation" className="banner-image" />
        <h1 style={titleStyle}>Engineering Consultation</h1>
      </section>

      {/* First Row */}
      <section className="container">
        <div className="box">
          <img src={engineering1} alt="Consultation Left" className="box-image" />
        </div>
        <div className="box fade-in-right">
          <p className="content">
            Our expert team provides comprehensive project feasibility studies and solution designs tailored to meet your business needs. We ensure compliance with international safety and environmental standards, ensuring that every project is completed with the highest standards of quality.
            <br /><br />
            In addition, we offer hands-on technical training programs to equip your workforce with the necessary skills to succeed in today's rapidly evolving engineering landscape.
          </p>
        </div>
      </section>

      {/* Second Row */}
      <section className="container">
        <div className="box fade-in-left">
          <p className="content">
            Whether you are in need of a strategic engineering consultation or ongoing technical support, our experienced consultants will provide you with tailored solutions to drive your projects forward. We work closely with your team to ensure successful project execution.
          </p>
          <Link to="/Contact">
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
        <div className="box">
          <img src={engineering2} alt="Consultation Right" className="box-image" />
        </div>
      </section>
    </div>
  );
};

export default EngineeringConsultation;
