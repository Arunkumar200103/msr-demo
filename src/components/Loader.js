import React, { useEffect } from "react";
import "./Loader.css";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    // Ensure white background before, during, and after loading
    document.documentElement.style.background = "white";
    document.body.style.background = "white";
    document.body.classList.add("loading-active");

    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("loading-active");
    }, 3000); // Loading duration

    return () => {
      clearTimeout(timeout);
      document.documentElement.style.background = "white";
      document.body.style.background = "white";
    };
  }, [setLoading]);

  return (
    <div className="loader-container" style={{ backgroundColor: "white" }}>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="static-text">MSR</div>
    </div>
  );
};

export default Loader;
