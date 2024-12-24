import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo2.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    // Check if on a different route
    if (window.location.pathname !== '/') {
      // Navigate to the home page
      navigate('/');
      // Wait briefly for the page to render before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll directly if already on the home page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const openContactForm = () => {
    navigate('/contact-us');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between text-lg">
          <Link to="/">
            <img
              src={logo}
              alt="IconicMe Logo"
              className="h-24 w-26 object-contain"
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-purple-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollToSection('products')}
              className="text-gray-600 hover:text-purple-600"
            >
              Products
            </button>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-purple-600">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-600 hover:text-purple-600">
              Terms
            </Link>
            <button onClick={openContactForm} className="text-gray-600 hover:text-purple-600">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleScrollToSection('products')}
                className="text-gray-600 hover:text-purple-600 text-left py-2"
              >
                Products
              </button>
              <Link
                to="/privacy-policy"
                className="text-gray-600 hover:text-purple-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-600 hover:text-purple-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <button
                onClick={openContactForm}
                className="text-gray-600 hover:text-purple-600 text-left py-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
