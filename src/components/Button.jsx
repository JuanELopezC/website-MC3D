// Button.jsx
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button({ label, text, audio, to, onAction }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    // Call onAction if provided (for toggling form/queue)
    if (onAction) onAction();

    // Show info text if provided
    if (text) alert(text);

    // Navigate if 'to' prop is provided
    if (to) navigate(to);

    // Handle audio
    if (audio) {
      if (!audioRef.current) {
        audioRef.current = new Audio(audio);
        audioRef.current.loop = true;
      }

      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play().catch((err) => console.error(err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button className={isPlaying ? "playing" : ""} onClick={handleClick}>
      {label} {isPlaying ? "🔊" : ""}
    </button>
  );
}

export default Button;
