import React from "react";
import "./Members.css";
import MemberCard from "../MemberCard";

const advisors = [
  { name: "Dr. Smith", picture: "jesse-smith.png", role: "Advisor", bio: "Guides our club projects." },
];

const associates = [
  { name: "Moe", picture: "Moe.jpg", role: "Associate", bio: "Machine learning and data scientist passion" },
  { name: "Braxton", picture: "braxton.png", role: "Associate", bio: "Future engineer" },
  { name: "Kelvin", picture: "Keelvin.jpg", role: "Associate", bio: "MR. Einstein" },
];

const officers = [
  { name: "Chance", picture: "chance.jpg", role: "President", bio: "Next CS professor." },
  { name: "Bradley", picture: "bradley (2).jpg", role: "Vice-President", bio: "Chill art guy." },
  { name: "Juan", picture: "juan.jpg", role: "Social Media Manager", bio: "Best social media guy." },
  { name: "Braxton", picture: "braxtonthink.jpg", role: "treasure 💰", bio: "Face of The Club." },
  { name: "Jorge", picture: "jorge.jpg", role: "Software technician", bio: "Can fix everything." },
];

const members = [

  { name: "Kylind", picture: "glorious_pope_kylind.png", role: "Member", bio: "self proclaimed pope." },
  {name:"Paul", picture:"paul.jpg", role:"member", bio:"Find me always running."}
];

const Members = () => {
  const renderSection = (title, list, description) => (
    <section className="members-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {description && <p className="section-description">{description}</p>}

        <div className="members-grid">
          {list.map((person, i) => (
            <MemberCard
              key={i}
              name={person.name}
              picture={person.picture}
              role={person.role}
              bio={person.bio}
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
            Our 3D Printing Club is home to a variety of members, from enthusiastic
            students to experienced advisors. Click on any member to learn more about them!
          </p>
        </div>
      </section>

      {renderSection("Advisors", advisors, "Our guiding mentors helping us achieve the best results.")}
      {renderSection("Associates", associates, "Key contributors to club projects and events.")}
      {renderSection("Officers", officers, "Leading the club and organizing activities.")}
      {renderSection("Members", members, "Passionate students exploring 3D printing and design.")}
    </div>
  );
};

export default Members;
