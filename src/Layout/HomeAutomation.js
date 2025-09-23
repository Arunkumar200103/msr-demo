import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeAutomationBanner from "../img/home-automation-banner.jpg";
import homeAutomation1 from "../img/home-automation1.jpg";
import homeAutomation2 from "../img/home-automation2.jpg";

const HomeAutomation = () => {
  const [titleStyle, setTitleStyle] = useState({
    position: "absolute",
    top: "50%",
    left: "-100%", // Start off-screen
    transform: "translateY(-50%)",
    fontSize: "2.5rem",
    fontWeight: "bold",
    WebkitTextStroke: "1px black",
    color: "white",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
    whiteSpace: "nowrap",
    transition: "left 3s ease-in-out",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setTitleStyle((prev) => ({ ...prev, left: "50%" }));
    }, 100);
  }, []);

  return (
    <div className="home-wrapper">
      <style>{`
        .home-wrapper {
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

          .contact-button {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="banner">
        <img src={homeAutomationBanner} alt="Home Automation" className="banner-image" />
        <h1 style={{ ...titleStyle, animation: "slideInLeft 3s ease-in-out forwards" }}>Home Automation</h1>
      </section>

      {/* First Row */}
      <section className="container">
        <div className="box">
          <img src={homeAutomation1} alt="Left" className="box-image" />
        </div>
        <div className="box fade-in-right">
          <p className="content">
            Home automation enhances your living space by integrating smart devices for seamless control. 
            It allows you to manage lighting, security, climate, and appliances remotely. 
            <br /><br />With automation, you can create schedules and customize settings for convenience. Voice commands and mobile apps make controlling your home effortless. 
            This technology improves security, saves energy, and simplifies daily tasks.
          </p>
        </div>
      </section>

      {/* Second Row */}
      <section className="container">
        <div className="box fade-in-left">
          <p className="content">
            We provide comprehensive home automation systems for a smarter living experience. 
            Our solutions include lighting control, security monitoring, climate control, and entertainment systems. 
            <br /><br />Enjoy seamless integration of all your home devices for enhanced convenience. With remote access, you can manage everything from anywhere. 
            Experience comfort, security, and efficiency with our advanced automation technology.
          </p>
          <Link to="/Contact">
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
        <div className="box">
          <img src={homeAutomation2} alt="Right" className="box-image" />
        </div>
      </section>
    </div>
  );
};

export default HomeAutomation;
