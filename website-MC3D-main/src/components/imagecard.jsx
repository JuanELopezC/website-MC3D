import "./imagecard.css";

function ImageCard({ picture, text }) {
  const isExternal = picture && picture.startsWith("http");

  const imageSrc = isExternal ? picture : `/images/${picture}`;

  return (
    <div className="img_card_3d">
      <div className="img_inner">
        <img
          className="img_photo"
          src={imageSrc}
          alt={text}
        />
        <div className="img_label">{text}</div>
      </div>
    </div>
  );
}

export default ImageCard;