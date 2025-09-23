import React, { useEffect } from 'react';
import "./SuccessStories.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
//import { InView } from "react-intersection-observer";
import { FaIndustry, FaSolarPanel, FaShieldAlt } from "react-icons/fa"; // Import colorful icons

const SuccessStories = () => {
useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing function
      once: true, // Animation happens only once
    });
  }, []);
  
  const stories = [
    {
      title: "Revolutionizing a Petrochemical Plant",
      description:
        "Delivered a fully automated NG pipeline system integrated with SCADA, resulting in a 30% operational efficiency boost.",
      icon: <FaIndustry className="icon industry" />, // Colorful icon
    },
    {
      title: "Sustainable Energy for a Manufacturing Giant",
      description:
        "Designed and implemented a hybrid LPG-Solar solution, reducing energy costs by 40% and carbon emissions by 25%.",
      icon: <FaSolarPanel className="icon solar" />, // Colorful icon
    },
    {
      title: "Safety-First Approach for a Multinational Client",
      description:
        "Conducted a comprehensive safety audit and system upgrade, ensuring compliance with international standards and zero downtime.",
      icon: <FaShieldAlt className="icon safety" />, // Colorful icon
    },
  ];

  return (
    <div className="success-container" data-aos="fade-up" data-aos-delay="300">
      <h2>Success Stories</h2>
      <div className="story-cards">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            {story.icon} {/* Display colorful icon */}
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
