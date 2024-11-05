// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8" id='En'>
      {/* Newsletter Section */}
      <div className="text-center mb-10">
        <h3 className="text-gray-600 font-semibold uppercase">Our Newsletter</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let&apos;s Stay in Touch</h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Input your email"
            className="p-3 border border-gray-300 rounded-l-md"
          />
          <button className="bg-green-500 text-white px-6 rounded-r-md">
            Send
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* AgriCargas */}
        <div>
          <h4 className="font-semibold text-green-600">AgriCargas</h4>
          <p className="text-gray-600 mb-4">
            Use our built-in analytics dashboard to pull valuable insights and monitor the value of your crypto portfolio over time.
          </p>
          <p className="text-gray-600">+244 943434233 | +244 9342312344</p>
          <p className="text-gray-600">agricargas@co.ao</p>
        </div>

        {/* Informations */}
        <div>
          <h4 className="font-semibold text-green-600">Informations</h4>
          <ul className="text-gray-600 space-y-2">
            <li>Contacts</li>
            <li>Regulation</li>
            <li>Safety Tips</li>
            <li>Terms and conditions</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-green-600">Quick Links</h4>
          <ul className="text-gray-600 space-y-2">
            <li ><a href='#About' >About Us</a></li>
            <li>How it works</li>
          </ul>
        </div>

        {/* Create an Account */}
        <div>
          <h4 className="font-semibold text-green-600">Create an Account</h4>
          <p className="text-gray-600 mb-4">
            Use our built-in analytics dashboard to pull valuable insights and monitor.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Create an account
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500">
        <p>&copy;2022 | AgriCargas. All rights reserved</p>
        <div className="space-x-4">
          <span>Privacy Policy</span>
          <span>Site Map</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
