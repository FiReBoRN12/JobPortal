import React from 'react';

const Header = () => (
  <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">jobRinger</div>
    <nav className="flex gap-4">
      <a href="#" className="hover:underline">Jobs</a>
      <a href="#" className="hover:underline">Active Employers</a>
      <a href="#" className="hover:underline">Job Blogs</a>
      <a href="#" className="hover:underline">Pricing</a>
    </nav>
    <div>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded">Employer Login</button>
    </div>
  </header>
);

export default Header;
