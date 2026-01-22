import React, { useState } from "react";
import Button from "../Button.jsx";
import ImageCard from "../ImageCard";
import SubmitPrintForm from "./SubmitPrintForm";
import PrintQueue from "./PrintQueue";
import "./Prints.css";

const examplePrints = [
  { picture: "roger.jpg" },
  { picture: "dinos.jpg" },
  { picture: "trophy.jpg" },
];

const firstsection = [
  { picture: "helment.jpg" },
  { picture: "greyhelment.jpg" },
  { picture: "chancehelmet.jpg" },
];

const events = [
  { picture: "homecoming.jpg" },
  { picture: "dinos.jpg" },
  { picture: "rocks.jpg" },
];

const studentprojects = [
  {picture:"firstevent.jpg"},
  { picture: "trophy.jpg" },
  { picture: "roger.jpg" }

];

const Prints = () => {
  const [showForm, setShowForm] = useState(false);
  const [showQueue, setShowQueue] = useState(false);

  return (
    <div className="prints-page">
      <div className="prints-header">
        <h1 className="prints">Prints</h1>
        <p className="prints-subtitle">
          Explore our 3D printed creations and submit your own project!
        </p>
      </div>

      <div className="prints-feature-cards">
        {examplePrints.map((p, i) => (
          <ImageCard key={i} picture={p.picture} height="200px" />
        ))}
      </div>

      <div className="prints-feature-cards">
        <h2 className="prints-title">Check out some of our helmet prints</h2>
        {firstsection.map((p, i) => (
          <ImageCard key={i} picture={p.picture} height="200px" />
        ))}
      </div>

      <div className="prints-feature-cards">
        <h3 className="prints-title">Check some of our prints used at events</h3>
        {events.map((p, i) => (
          <ImageCard key={i} picture={p.picture} height="200px" />
        ))}
      </div>
      <div className="prints-feature-cards">
        <h4 className="prints-title">Check some of our student projects</h4>
        {studentprojects.map((p, i) => (
          <ImageCard key={i} picture={p.picture} height="200px" />
        ))}
      </div>

      <div className="prints-buttons">
        <Button
          label={showForm ? "Close Submission Form" : "Submit Your Print"}
          onAction={() => setShowForm(!showForm)}
        />

        <Button
          label={showQueue ? "Hide Print Queue" : "Show Print Queue"}
          onAction={() => setShowQueue(!showQueue)}
        />
      </div>

      {/* FORM */}
      {showForm && (
        <div className="form-container open">
          <SubmitPrintForm onClose={() => setShowForm(false)} />
        </div>
      )}


      {/* QUEUE */}
      {showQueue && <PrintQueue onClose={() => setShowQueue(false)} />}
    </div>
  );
};

export default Prints;
