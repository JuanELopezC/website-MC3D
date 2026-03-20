import React, { useState } from "react";
import Button from "../Button.jsx";
import PrintCard from "../PrintCard";
import SubmitPrintForm from "./SubmitPrintForm";
import PrintQueue from "./PrintQueue";
import "./Prints.css";
import { i } from "framer-motion/client";

const helmetSection = [
  { 
    title: "Star Wars Helments", 
    author: "Chance Loveday", 
    description: "Star Warssssssssssssssssssssssssss", 
    images: ["helment.jpg", "greyhelment.jpg", "twopeople.jpg"], 
    facts: ["72 Hours", "PLA+"] 
  },
  {
    title : "Roger",
    author: "Chance Loveday",
    description: "Robot friend company",
    images: ["roger.jpg" ],
    facts: ["Guardian of the dorm", "amazing style", "summer project"]
  }
];

const studentProjects = [
  { 
    title: "3D Print Workshop", 
    author: "MC3D", 
    description: "a workshop held to introduce the basics of 3d printing and get students started on a new journey", 
    images: ["bradley.jpg", "firstworkshop.jpg", "kelvin.jpg"], 
    facts: ["10 participants", "2 hours"] 
  },
  {
    title: "Fidget Toys",
    author: "MC3D",
    description: "In partnership with the career center we have found and designed some 3D printer fidget toys found around campus",
    images: ["dinos.jpg", "keys.jpg"],
    
  }
];

const communityProjects = [
]

const studyProjects =[

]

const partnershipProjects = [

]

const Prints = () => {
  const [showForm, setShowForm] = useState(false);
  const [showQueue, setShowQueue] = useState(false);

  return (
    <div className="prints-page">
      <div className="prints-header">
        <h1 className="prints">Prints  & Student Projects</h1>
        <p className="prints-subtitle">This page is dedicated for everyone who would love to
          highlight and share their projects with everyone, feel free to complete the submission form 
          if you would like to have your projects highlighted.
        </p>
      </div>
    
    {/*Helment projects*/}

      <h2 className="prints-title">Helmet Projects</h2>
      <div className="prints-feature-cards">
        {helmetSection.map((p, i) => <PrintCard key={i} {...p} />)}
      </div>


    {/*student projects*/}

      <h2 className="prints-title">Student Projects</h2>
      <div className="prints-feature-cards">
        {studentProjects.map((p, i) => <PrintCard key={i} {...p} />)}
      </div>

    {/*community projects*/}


      <h2 className="prints-title">Commmunity Projects</h2>
      <div className = " prints-feature-cards">
        {communityProjects.map((p,i) => <PrintCard key = {i} {...p}/>)}
      </div>

    {/*Senior studies*/}

    <h2 className="prints-title">Senior Studies</h2>
    <div className="prints-feature-cards">
      {studyProjects.map((p,i) => <printCard key={i} {...p}/>)}
    </div>
    {/*partnerships*/}

    <h2 className="prints-title">Partnerships</h2>
    <div className="prints-feature-cards">
      {partnershipProjects.map((p,i)=><printCard key={i} {...p}/>)}
    </div>
      <div className="prints-buttons">
        <Button label={showForm ? "Close Form" : "Submit Print Request"} onAction={() => setShowForm(!showForm)} />
        <Button label={showQueue ? "Hide Queue" : "Show Queue"} onAction={() => setShowQueue(!showQueue)} />
        <Button label={"Submit Project Form"} onAction={()=> window.open("https://docs.google.com/forms/d/137FMcnk13F5_qqg3nbYxjeXacfkVdrvo4yRY7GdF1wQ/edit" ,"-blank")}/>
      </div>

      <div className={`form-container ${showForm ? "open" : ""}`}>
        {showForm && <SubmitPrintForm onClose={() => setShowForm(false)} />}
      </div>

      <div className={`queue-container ${showQueue ? "open" : ""}`}>
        {showQueue && <PrintQueue onClose={() => setShowQueue(false)} />}
      </div>
    </div>
  );
};

export default Prints;