import React from 'react';
import "./Resources.css";
import ImageCard from '../ImageCard';

const ResourcesLinks = [
  { picture: "coursera.png", text: "coursera certificates",link:"https://www.coursera.org/programs/maryville-college-students-learning-program-aotau/browse?query=fusion%20360&sortBy=BEST_MATCH&source=search" },
  {picture:"fusion.png", text:"fusion360", link:"https://www.autodesk.com/products/fusion-360/overview"}
];

const PrintLinks = [
  { picture: "makerworld.png", text: "MakerWorld", link: "https://makerworld.com/en" },
  { picture: "thingiverse.png", text: "Thingiverse", link: "https://www.thingiverse.com/?page=2" },
  {picture: "tinkercad.jpg",text: "TinkerCad", link:"https://www.tinkercad.com/"}
];

const Resources = () => {
  return (
    <div className="page-content">
      <h1>WONDERING HOW TO LEARN?</h1>
      <p>Click on any image below to learn more about the different resources about 3D printing.</p>

      <section className="grid-courses">
        
        {ResourcesLinks.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="print-link"
            >
              <ImageCard picture={p.picture} text={p.text} />
            </a>
          ))}
      </section>

      <section className="grid-prints">
        <h2>WHERE CAN WE FIND PRINTS?</h2>
        <p>Check out these links where you can download amazing 3D print files or create your own models.</p>

        {/* FLEX CONTAINER FOR PRINT LINKS */}
        <div className="prints-container">
          {PrintLinks.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="print-link"
            >
              <ImageCard picture={p.picture} text={p.text} />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
