import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for route change detection
import "./ScrollAnimation.css"; // Import the CSS file for animations

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    // ✅ Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs whenever the route (URL path) changes

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-animation ${isVisible ? "animate" : ""}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
