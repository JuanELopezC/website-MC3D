import React, { useState } from "react";
import "./MemberCard.css";

const MemberCard = ({ name, picture, role, bio }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`member-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">

        {/* FRONT FACE */}
        <div className="card-face card-front">
          <img src={`/images/${picture}`} alt={name} />
          <div className="front-info">
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="card-face card-back">
          <h3>{name}</h3>
          <p className="role">{role}</p>
          <p className="bio">{bio}</p>
        </div>

      </div>
    </div>
  );
};

export default MemberCard;
