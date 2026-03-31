import React from "react";
import "./Members.css";
import MemberCard from "../MemberCard";


const officers = [
  { name: "Juan", picture: "juanL_pfp.jpg", role: "President", major: "Computer Science"},
  { name: "Bradley", picture: "bradley (2).jpg", role: "Co-Vice-President", major: "Art", bio: "Chill art guy." },
  {name:"Charlotte Dickson", picture:"trophy.jpg", role:"Co-Vice-President", major: "Math B.S. & Computer Science"},
  {name:"Josh Hester", picture:"joshH_pfp.png", role:"Secretary/Treasurer", major: "Business Analytics"},
  {name:"Moises Garcia", picture:"moisesG_pfp.jpg", role:"Web Master", major: "Design"},
  { name: "Kelvin", picture: "Keelvin.jpg", role: "Software Technician", major: "Computer Science", bio: "Loves gacha games" },
  {name:"R0G3r", picture:"roger_pfp.jpg", role:"Commander", major: "Engineering, minor in Philosophy"}
];


const members = [

  { name: "Kylind", picture: "popeKylind_pfp.png", role: "Pope & Member", major: "Math B.S. & Computer Science"},
  { name: "Moe", picture: "Moe.jpg", role: "Associate & Member", major: "Math B.S. & Computer Science",},
  {name:"Paul", picture:"paulK_pfp.jpg", role:"Member", major: "Computer Science", bio:"walking crash out guy."},
  {name:"Ricardo Nunez", picture:"rickyN_pfp.jpg", role:"Member", major: "Architecture & Engineering"},
  {name:"Jaklyn Rutter", picture:"jaklynR_pfp.png", role:"Member", major: "Biochemistry B.S."},
  {name:"Morgan Gray", picture:"morganG_pfp.png", role:"Member", major: "Literature"},
  {name:"Ravens Loft", picture:"trophy.jpg", role:"Member", major: "Neuroscience"}
];

const Members = () => {
  const renderSection = (title, list, description, extraClass = "") => (
  <section className="members-section">
    <div className="container">
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}

      <div className={`members-grid ${extraClass}`}>
        {list.map((person, i) => (
          <MemberCard
            key={i}
            name={person.name}
            picture={person.picture}
            role={person.role}
            major={person.major}
            
          />
        ))}
      </div>
    </div>
  </section>
);


  return (
    <div className="members-page">

      <section className="members-section">
        <div className="container">
          <h1 className="members-title">Our Club Members</h1>
          <p className="members-intro">
            Our club is more than just extruders and filament; it is a community of creators. Whether they're leveling beds or leading workshops, get to know our members by clicking their profiles below.
          </p>
        </div>
      </section>

      {renderSection("Officers", officers, "Leading the club and organizing activities.", "officers-row")}
      {renderSection("Members", members, "Passionate students exploring 3D printing and design.")}
    </div>
  );
};

export default Members;
