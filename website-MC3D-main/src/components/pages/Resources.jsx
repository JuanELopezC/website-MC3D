import React from 'react';
import "./Resources.css";
import ImageCard from '../ImageCard';
import PrintCard from '../PrintCard'
import { p } from 'framer-motion/client';

// Learning resources
const ResourcesLinks = [
  { picture: "coursera.png", text: "Coursera Certificates", link: "https://www.coursera.org/programs/maryville-college-students-learning-program-aotau/browse?query=fusion%20360&sortBy=BEST_MATCH&source=search" },
  { picture: "fusion.png", text: "Fusion360", link: "https://www.autodesk.com/products/fusion-360/overview" }
];

// 3D print sources
const PrintLinks = [
  { picture: "makerworld.png", text: "MakerWorld", link: "https://makerworld.com/en" },
  { picture: "thingiverse.png", text: "Thingiverse", link: "https://www.thingiverse.com/?page=2" },
  { picture: "tinkercad.jpg", text: "TinkerCad", link: "https://www.tinkercad.com/" }
];

// Safety manuals
const SafetyLinks = [
  { picture: "bambuprinter.jpg", text: "3D Printer Safety Manual", link: "/3dsafetymanual.pdf" },
  {picture: "lasercut.jpg", text:"Laser Cut Safety Manual", link: "/lasercutmanual.pdf"},
  {picture:"logofixed.png", text:"MakerSpace rules and safety protocols", link:"/spacemanual.pdf"}
];
// printers links

const printersinfo = [
  {picture:"bambulogo.png", text: "Bambu website", link : "https://bambulab.com/en-us"},
  {picture:"braxtonfall.jpg" , text:"Youtube Channel to learn", link:"https://www.youtube.com/"}
]
const testprintimage = [
  {picture:"braxtonfall.jpg", title: "hi", author:"braxton", description:"meme of the club"}

]
const Resources = () => {
  return (
    <div className="page-content">
      <h1>WONDERING HOW TO LEARN?</h1>
      <p>Click on any image below to learn more about the different resources about 3D printing.</p>

      {/* Courses Section */}
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

      {/* Prints Section */}
      <section className="grid-prints">
        <h2>WHERE CAN WE FIND PRINTS?</h2>
        <p>Check out these links where you can download amazing 3D print files or create your own models.</p>

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

      {/* Safety Manuals Section */}
      <section className="grind-prints">
        <h2>SAFETY MANUALS</h2>
        <p>Read these guides and manuals to learn about 3D printer safety and procedures.</p>

        <div className="prints-container">
          {SafetyLinks.map((p, i) => (
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

      {/* printers information */}
      <section className="grid-prints">
        <h2>PRINTERS INFORMATION</h2>
        <p>Read these guides and manuals to learn about 3D printer safety and procedures.</p>

        <div className="prints-container">
          {printersinfo.map((p, i) => (
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
