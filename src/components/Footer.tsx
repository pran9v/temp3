import React from 'react';
import { Camera } from 'lucide-react';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col-2 items-center">
              <img
                src={logo}
                alt="IconicMe Logo"
                className="h-24 w-26 object-contain"
              />
              <span className="flex items-center gap-2 mt-4 text-2xl">Kiddo Jacket</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScrollToSection('products')}
                  className="text-gray-400 hover:text-white"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="text-gray-400 hover:text-white"
                >
                  Features
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link> </li>
              <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KiddoJacket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
