// components/VerticalSlider.js
"use client";
import { useState, useEffect } from 'react';

const Page = () => {
  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images to display
  const images = [
    'https://picsum.photos/1204/700?random=1',
    'https://picsum.photos/1204/700?random=3',
    'https://picsum.photos/1204/700?random=2',
  ];

  // Function to change the image index every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Page;
