import React from 'react';

const Footer = () => {
  return (
    <div className="bg-teal-100 text-center p-6">
      {/* Jobs Sections */}
      <div className="grid md:grid-cols-2 gap-4 border-b border-gray-300 pb-4">
        {/* Jobs in India */}
        <div>
          <h3 className="font-bold text-lg">JOBS IN INDIA</h3>
          <div className="mt-2 text-gray-700 flex flex-wrap gap-2 justify-center">
            <span>#Mumbai</span>
            <span>#Delhi</span>
            <span>#Ajmer</span>
            <span>#Pune</span>
            <span>#Hyderabad</span>
            <span>#Agra</span>
            <span>#Chennai</span>
            <span>#Kolkata</span>
            <span>#Indore</span>
            <span>#Gurugram</span>
            <span>#Jaipur</span>
            <span>#Ahmedabad</span>
          </div>
        </div>

        {/* International Jobs */}
        <div>
          <h3 className="font-bold text-lg">INTERNATIONAL JOBS</h3>
          <div className="mt-2 text-gray-700 flex flex-wrap gap-2 justify-center">
            <span>#Africa</span>
            <span>#USA</span>
            <span>#UK</span>
            <span>#Australia</span>
            <span>#Canada</span>
            <span>#Singapore</span>
            <span>#Dubai</span>
            <span>#Saudi Arabia</span>
            <span>#New Zealand</span>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-around items-center py-6 border-b border-gray-300">
        <div>
          <h4 className="font-bold text-blue-900">Jobs Posted</h4>
          <p className="text-2xl text-blue-900 font-bold">32,395</p>
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Jobs Filled</h4>
          <p className="text-2xl text-blue-900 font-bold">15,153</p>
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Employers</h4>
          <p className="text-2xl text-blue-900 font-bold">20,524</p>
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Active Users</h4>
          <p className="text-2xl text-blue-900 font-bold">1,297,136</p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="text-sm text-gray-600 mt-4 border-b border-gray-300 pb-4">
        <p>
          <strong>Disclaimer:</strong> All Trademarks and Logos are the property of their respective owners, depicted
          here purely for representation purposes. Jobringer.com has taken all reasonable steps to ensure that
          information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com
          shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant
          only for job search assistance and to maximize the chances for the jobseekers to get their dream job.
          All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We
          do not guarantee any job to any jobseeker.
        </p>
      </div>

      {/* Footer Links */}
      <div className="mt-6 flex flex-wrap justify-around text-sm">
        <a href="#" className="hover:underline">Terms and Conditions</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Refund / Cancellation Policy</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Blogs</a>
      </div>

      {/* Social Media and Recognition */}
      <div className="mt-6 flex flex-wrap justify-around items-center">
        <p className="text-sm text-gray-600">Recognized By <strong className="text-orange-600">#startupindia</strong></p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-75"><i className="fab fa-whatsapp text-green-500 text-2xl"></i></a>
          <a href="#" className="hover:opacity-75"><i className="fab fa-twitter text-blue-500 text-2xl"></i></a>
          <a href="#" className="hover:opacity-75"><i className="fab fa-facebook text-blue-800 text-2xl"></i></a>
          <a href="#" className="hover:opacity-75"><i className="fab fa-linkedin text-blue-600 text-2xl"></i></a>
          <a href="#" className="hover:opacity-75"><i className="fab fa-youtube text-red-600 text-2xl"></i></a>
          <a href="#" className="hover:opacity-75"><i className="fab fa-instagram text-pink-500 text-2xl"></i></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-xs text-gray-600">
        © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
      </div>
    </div>
  );
};

export default Footer;
