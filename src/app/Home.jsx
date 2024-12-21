import React, { useState, useEffect } from "react";
import JobCarousel from "../components/JobCarousel";
import EmployerCarousel from "../components/EmployerCard";
import HeroSection from "../components/HeroSection";
import logo1 from "../assets/Images/1.png"
import logo2 from "../assets/Images/2.png";
import logo3 from "../assets/Images/3.png";
import logo4 from "../assets/Images/4.png";
import logo5 from "../assets/Images/5.png";
import logo6 from "../assets/Images/6.png";
import logo7 from "../assets/Images/7.png";
import logo8 from "../assets/Images/1.png";
import logo9 from "../assets/Images/2.png";
import logo10 from "../assets/Images/3.png";
import logo11 from "../assets/Images/4.png";
import logo12 from "../assets/Images/5.png";

const Home = () => {
  const jobs = [
    {
      title: "Site Reliability Engineer",
      company: "TechWorks Solutions",
      location: "Pune, India",
      experience: "8-10 Years",
      type: "In Office job",
      jobType: "Full Time - Permanent",
    },
    {
      title: "Frontend Developer",
      company: "PixelPerfect Labs",
      location: "Bangalore, India",
      experience: "2-4 Years",
      type: "Remote job",
      jobType: "Contract - Part Time",
    },
    {
      title: "Software Engineer - Java",
      company: "CodeWeave Inc.",
      location: "Hyderabad, India",
      experience: "1-3 Years",
      type: "In Office job",
      jobType: "Full Time - Permanent",
    },
    {
      title: "Data Analyst",
      company: "Insight Analytics",
      location: "Chennai, India",
      experience: "3-5 Years",
      type: "In Office job",
      jobType: "Full Time - Permanent",
    },
    {
      title: "Mobile App Developer",
      company: "SwiftApps Studio",
      location: "Noida, India",
      experience: "4-6 Years",
      type: "Hybrid job",
      jobType: "Full Time - Contract",
    },
    {
      title: "Blockchain Developer",
      company: "DecentraTech",
      location: "Gurgaon, India",
      experience: "2-5 Years",
      type: "Remote job",
      jobType: "Full Time - Permanent",
    },
    {
      title: "AI Research Scientist",
      company: "Neural Dynamics",
      location: "Mumbai, India",
      experience: "5-7 Years",
      type: "In Office job",
      jobType: "Full Time - Permanent",
    },
    {
      title: "Quality Assurance Specialist",
      company: "Testify Solutions",
      location: "Delhi, India",
      experience: "3-6 Years",
      type: "In Office job",
      jobType: "Full Time - Permanent",
    },
    {
      title: "IT Project Manager",
      company: "ProManage IT",
      location: "Kolkata, India",
      experience: "6-8 Years",
      type: "Hybrid job",
      jobType: "Full Time - Permanent",
    },
    {
      title: "DevOps Engineer",
      company: "CloudOps Solutions",
      location: "Bangalore, India",
      experience: "7-10 Years",
      type: "Remote job",
      jobType: "Full Time - Permanent",
    },
  ];
  

  const employers = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12
    // Add more logos
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const jobsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + jobsPerPage >= jobs.length ? 0 : prevIndex + jobsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - jobsPerPage < 0
        ? jobs.length - jobsPerPage
        : prevIndex - jobsPerPage
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  const visibleJobs = jobs.slice(currentIndex, currentIndex + jobsPerPage);

  return (
    <div className="p-4">
      <HeroSection />
      <JobCarousel jobs={jobs} />
      <div className="text-center my-4">
        <h2 className="text-xl font-bold text-blue-700">Featured Employers</h2>
      </div>
      <EmployerCarousel employers={employers} />;
    </div>
  );
};

export default Home;
