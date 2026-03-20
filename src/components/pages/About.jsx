import React from 'react';
import "./About.css";
import ImageCard from "../ImageCard.jsx";

const About = () => {
  return (
    <div className="about-page">

      {/* WHAT IS MC3D */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">WHAT IS MC3D?</h2>
          <p>
            MC3D was created by students passionate about engineering, creativity,
            and hands-on building. What started with a small group of makers grew 
            into one of the most active clubs on campus.
          </p>
        </div>
      </section>

      {/* ADVISOR */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Advisor</h2>
          <div className="image-row">
            <ImageCard picture="Dr. Smith.jpg" text="Advisor" />
          </div>
          <p>
            Dr. Smith is an experienced educator with a background in engineering,
            mathematics, and 3D fabrication. His support helps guide our members
            through innovative projects and challenges.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Where Are We Located?</h2>
          <p>Sutton Sience Building — Second Floor — Room 208</p>
          <div className="image-row">
            <ImageCard picture="outsidesutton.jpg" text="Sutton Photo" />
            <ImageCard picture="halls.jpg" text="Room Photo" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
