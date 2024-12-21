import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-700 text-white flex justify-between items-center px-6 py-3 rounded-lg">
        <h1 className="text-3xl font-semibold">EMPLOYERS</h1>
        <p className="text-lg font-bold  bg-gradient-text bg-clip-text text-transparent animate-text-animation">
          WELCOME OFFER - FREE JOB Postings and Much More.
        </p>
        <div className="flex gap-3 flex-row  text-sm">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold">
            Register for FREE
          </button>
          <button className="px-4 py-2 rounded text-black font-semibold bg-white">
            Post A Job
          </button>
          <a href="#" className="underline hover:opacity-75 font-semibold">
            Sales Enquiry
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-2 flex flex-col justify-between items-center gap-4 h-fit">
        <div className="flex flex-col h-max">
          <h2 className="text-2xl font-bold text-blue-900">
            BRINGING YOU THE PERFECT JOB!
          </h2>
          <p className="text-lg text-[#051a78] font-bold flex align-middle justify-center">
            11,000+ JOBS to Apply
          </p>
        </div>
        {/* Left Section: Search */}
        <div className="flex flex-row gap-16 h-max px-4">
          <div className="bg-[#7ad5d5] px-2 py-6 rounded-xl flex-1 flex flex-col items-center gap-2">
            <div className="flex flex-row w-full gap-1">
              <input
                type="text"
                placeholder="Search Jobs Now"
                className="p-1 border border-gray-300 rounded text-sm w-[90%]"
              />
              <button className="bg-yellow-400  py-1 rounded text-black font-semibold w-[10%]">
                Search
              </button>
            </div>
            <div className="gap-1 flex flex-row align-middle justify-end w-full">
              <button className="bg-white px-4 py-1 rounded border border-gray-300 font-semibold">
                View Jobs
              </button>
              <button className="bg-yellow-400 px-4 py-1 rounded text-black font-semibold">
                Register For FREE
              </button>
            </div>
          </div>

          {/* Right Section: Headline & Quick Search */}
          <div className="flex-1 align-top justify-start">
            <div className=" bg-[#7ad5d5] px-2 py-4 rounded-xl flex flex-col">
              <h2 className="text-xl font-bold text-blue-900 flex justify-center align-top">
                Quick Job Search 🔍
              </h2>
              <div className="text-sm text-white mt-2 flex flex-wrap gap-2 font-semibold pr-14">
                <span>#Fresher</span>
                <span>#Work From Home</span>
                <span>#WFH</span>
                <span>#IT</span>
                <span>#HR</span>
                <span>#Back Office</span>
                <span>#BPO Jobs</span>
                <span>#Finance</span>
                <span>#Accounts</span>
                <span>#Medical</span>
                <span>#Pharma</span>
                <span>#Manager</span>
                <span>#Developer</span>
                <span>#Marketing</span>
                <span>#Engineering</span>
                <span>#Non Government Jobs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
