import React, { useState, useEffect } from "react";

const EmployerCarousel = ({ employers }) => {
  const logosPerPage = 5; // Number of logos visible at a time
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return; // Prevent action during animation
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % employers.length // Loop back to the start
    );
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent action during animation
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? employers.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false); // Reset animation flag after transition
    }, 500); // Match the animation duration (in milliseconds)

    return () => clearTimeout(timer); // Clean up the timer
  }, [currentIndex]);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically advance to the next logo
    }, 10000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [isAnimating]);

  // Calculate visible logos
  const visibleLogos = [
    ...employers.slice(currentIndex, currentIndex + logosPerPage),
    ...employers.slice(0, Math.max(0, currentIndex + logosPerPage - employers.length)),
  ];

  return (
    <div className="text-center mb-4">
      <div className="flex items-center justify-center relative overflow-hidden w-full">

        {/* Employer Logos */}
        <div
          className={`flex w-[80%] transition-transform duration-500 ease-in-out gap-10`}
          style={{
            transform: `translateX(-${(currentIndex % employers.length) * 25}%)`,
            width: `${employers.length * 25}%`, // Ensure all logos fit in the carousel
          }}
        >
          {employers.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[18%] flex items-center justify-center p-4" // Each logo occupies 25% width
            >
              <img
                src={logo}
                className="w-40 h-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployerCarousel;
