import React from "react";

const JobCard = ({ title, company, location, experience, type, jobType }) => (
  <div className="border rounded-lg shadow-lg bg-white">
    {/* Title and Badge */}
    <div className="flex align-top justify-end">
      <span className="bg-yellow-400 text-xs text-gray-800 px-3 py-1 rounded-full flex justify-end align-super">
        {type}
      </span>
    </div>
    <div className=" p-4 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-blue-700 text-lg">{title}</h3>
      </div>
      {/* Company Details */}
      <p className="text-sm font-semibold text-gray-700 mb-1">{company}</p>
      {/* Job Type (Full Time, Permanent) */}
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Job Type:</span> {jobType}
      </p>
      {/* Experience */}
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Experience:</span> {experience}
      </p>
      {/* Location */}
      <p className="text-sm text-gray-600 mb-4">
        <span className="font-medium">Location:</span> {location}
      </p>
      {/* Apply Button */}
      <button className="mt-auto bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300">
        Apply
      </button>
    </div>
  </div>
);

export default JobCard;
