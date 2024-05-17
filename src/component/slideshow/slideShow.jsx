import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const image =
    "https://rewardmobile.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg";
  const image1 =
    "https://i.pinimg.com/originals/40/0f/55/400f551ca89332d13067efd3f2fb515c.jpg";
  const image2 =
    "https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png";
  const images = [image1, image2, image]; // Same image URL repeated three times

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" relative mt-3 mb-2">
      <div className="w-full h-64 relative sm:h-80">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={` object-fill w-full h-full absolute transition-opacity duration-1000 sm:object-cover ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-25 p-2 rounded-full text-white focus:outline-none"
        onClick={goToPreviousImage}
      >
        <ArrowLeft strokeWidth={1.25} color="black" />
        {/* &lt; */}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-25 p-2 rounded-full text-white focus:outline-none"
        onClick={goToNextImage}
      >
        <ArrowRight strokeWidth={1.25} color="black" /> {/* &gt; */}
      </button>
    </div>
  );
};

export default ImageSlider;
