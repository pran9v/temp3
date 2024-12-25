import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../assets/flogo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
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
    <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50" style={{background:'rgb(48 48 48 / 37%)'}}>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="IconicMe Logo"
            className="h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <button
            onClick={() => handleScrollToSection('home')}
            className="text-white font-semibold hover:text-yellow-400"
          >
            Home
          </button>
          <Link
            to="/privacy-policy"
            className="text-white font-semibold hover:text-yellow-400"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="text-white font-semibold hover:text-yellow-400"
          >
            Terms
          </Link>
          <button
            onClick={openContactForm}
            className="text-white font-semibold hover:text-yellow-400"
          >
            Contact Us
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => handleScrollToSection('products')}
            className="text-white hover:text-yellow-400"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-yellow-400"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-md md:hidden">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <button
                onClick={() => handleScrollToSection('home')}
                className="text-left text-white-800 font-semibold hover:text-yellow-500"
              >
                Home
              </button>
              <Link
                to="/privacy-policy"
                className="text-white-800 font-semibold hover:text-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-white-800 font-semibold hover:text-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <button
                onClick={openContactForm}
                className="text-left text-white-800 font-semibold hover:text-yellow-500"
              >
                Contact Us
              </button>
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleScrollToSection('products')}
                  className="text-white-800 hover:text-yellow-500"
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
