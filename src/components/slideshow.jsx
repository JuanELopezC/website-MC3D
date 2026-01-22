import { useEffect, useState, useRef } from 'react';
import './Slideshow.css';

export default function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const slideInterval = useRef(null);

  useEffect(() => {
    if (!images.length) return;
    const img = new Image();
    img.src = images[0];
    img.onload = () => setLoaded(true);
  }, [images]);

  useEffect(() => {
    if (!loaded) return;

    slideInterval.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(slideInterval.current);
  }, [loaded, images.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 6000);
  };

  if (!loaded) {
    return (
      <div className="photodumb">
        <img src={images[0]} alt="loading" className="slide active" />
      </div>
    );
  }

  return (
    <section className="photodumb">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        />
      ))}

      {/* Typewriter text (always same, runs once) */}
      <div className="overlay-text typewriter-animation">
        Maryville College 3D Printing Club
      </div>

      <div className="arrow left-arrow" onClick={prevSlide}>&#10094;</div>
      <div className="arrow right-arrow" onClick={nextSlide}>&#10095;</div>
    </section>
  );
}
