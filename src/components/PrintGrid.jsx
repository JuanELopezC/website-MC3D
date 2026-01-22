import React from "react";
import "./PrintGrid.css";

function PrintGrid({ images }) {
  return (
    <div className="print-grid">
      {images.map((img, idx) => (
        <div className="grid-card" key={idx}>
          <img src={`/images/${img.file}`} alt={img.title} />
          <div className="grid-label">{img.title}</div>
        </div>
      ))}
    </div>
  );
}

export default PrintGrid;
