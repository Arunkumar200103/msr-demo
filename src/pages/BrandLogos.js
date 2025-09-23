import React from "react";
import "animate.css";
import "./BrandLogos.css"; // Import the CSS file for custom styles

const brands = [
  { name: "Rockwell Automation", domain: "rockwellautomation.com" },
  { name: "Siemens", domain: "siemens.com" },
  { name: "Schneider Electric", domain: "schneider-electric.com" },
  { name: "ABB", domain: "global.abb" },
  { name: "SUPCON", domain: "supcon.com" },
  { name: "Cords", domain: "cordscable.com" },
  { name: "Fuji Electric", domain: "fujielectric.com" },
  { name: "Stahl", domain: "stahl.com" },
  { name: "Polycab", domain: "polycab.com" },
  { name: "Rittal", domain: "rittal.com" },
  { name: "Modutec", domain: "modutec.com" },
  { name: "Comet", domain: "comet.com" },
  { name: "Pepperl+Fuchs", domain: "pepperl-fuchs.com" },
  { name: "Endress+Hauser", domain: "endress.com" },
  { name: "Phoenix Contact", domain: "phoenixcontact.com" },
  { name: "nVent", domain: "nvent.com" },
  { name: "Hoffman", domain: "hoffman.com" },
  { name: "Baliga", domain: "baliga.com" },
  { name: "Lapp", domain: "lapp.com" }
];

const BrandLogos = () => {
  const duplicatedBrands = [...brands, ...brands]; // Duplicate logos for seamless effect

  return (

  
       


        <div className="brand-carousel">
          <div className="logos">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img
                  src={`https://logo.clearbit.com/${brand.domain}`}
                  alt={`${brand.name} Logo`}
                  className="img-fluid brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      
  );
};

export default BrandLogos;
