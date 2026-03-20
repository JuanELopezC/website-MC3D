import "./imagecard.css";

function ImageCard({ picture, text }) {
  return (
    <div className="img_card_3d">
      <div className="img_inner">
        <img
          className="img_photo"
          src={`/images/${picture}`}
          alt={text}
        />
        <div className="img_label">{text}</div>
      </div>
    </div>
  );
}

export default ImageCard;
