import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

const JobCarousel = ({ jobs }) => {
  const jobsPerPage = 4; // Number of jobs visible at a time
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return; // Prevent action during animation
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % jobs.length // Loop back to the start
    );
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent action during animation
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobs.length - 1 : prevIndex - 1
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
      handleNext(); // Automatically advance to the next job
    }, 5000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [isAnimating]);

  // Calculate visible jobs
  const visibleJobs = [
    ...jobs.slice(currentIndex, currentIndex + jobsPerPage),
    ...jobs.slice(0, Math.max(0, currentIndex + jobsPerPage - jobs.length)),
  ];

  return (
    <div className="text-center mb-4">
      <h1 className="text-2xl font-bold text-blue-700">Featured Jobs</h1>
      <div className="flex items-center justify-center relative overflow-hidden w-full">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="px-4 py-2 rounded font-bold text-3xl text-blue-600 absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          {"<"} 
        </button>

        {/* Job Cards */}
        <div
          className={`flex w-[80%] transition-transform duration-500 ease-in-out gap-10`}
          style={{
            transform: `translateX(-${(currentIndex % jobs.length) * 25}%)`,
            width: `${jobs.length * 25}%`, // Ensure all jobs fit in the carousel
          }}
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[18%]" // Each job occupies 25% width
            >
              <JobCard {...job} />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded text-blue-600 font-bold text-3xl absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default JobCarousel;
