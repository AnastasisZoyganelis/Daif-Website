import React, { useState, useEffect } from 'react';
import './Wins.css';
const Wins = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically advance to the next image at a specified interval
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change the interval time as needed (in milliseconds)

    return () => {
      clearInterval(intervalId); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <div className="slideshow">
      
      
      <img
        className="slide-image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      
    </div>
  );
};

export default Wins;
