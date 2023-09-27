import React from "react";
import "./BackgroundSection.css"; // Create a CSS file for styling this component
import backgroundImage from "./images/78786.jpg"; // Replace with the actual image file and path
import taxiImage from "./images/pngwing.com.png";


function BackgroundSection() {
  return (
    <section className="background-section">
      <div className="container">
        {/* Your content for this section goes here */}
        <h1 className="hcolor">RIDE<span className="tcolor">RE</span></h1>
        <h3 className="pcolor">WAY TO RIDE SPACE TO PARK</h3>
      </div>
      <img src={taxiImage} alt="Logo" className="background-image" />
    </section>
  );
}

export default BackgroundSection;
