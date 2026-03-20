import React, { useState } from "react";
import "./PrintCard.css";

const PrintCard = ({ title, author, description, images = [], facts = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const getImagePath = (imgName) => {
    if (!imgName) return "placeholder.jpg";
    if (imgName.startsWith("/") || imgName.startsWith("http")) return imgName;
    return `/images/${imgName}`;
  };

  const openCard = () => {
    if (!isExpanded) setIsExpanded(true);
  };

  const closeCard = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <div
      className={`print-card ${isExpanded ? "expanded" : ""}`}
      onClick={openCard}
    >
      <img
        src={getImagePath(images[currentImgIndex])}
        alt={title}
        className="main-print-image"
      />

      <div className="print-basic-info">
        <h3>{title}</h3>
        <p className="author">By {author}</p>
      </div>

      <div className="print-details">
        <hr />

        <p>{description}</p>

        {images.length > 1 && (
          <div className="gallery-strip">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={getImagePath(img)}
                className={`thumb ${
                  currentImgIndex === idx ? "active-thumb" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(idx);
                }}
              />
            ))}
          </div>
        )}

        <div className="facts-section">
          <h4>Quick Facts</h4>
          <ul>
            {facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>

        <button className="close-btn" onClick={closeCard}>
          Close Details
        </button>
      </div>
    </div>
  );
};

export default PrintCard;