import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react'; // Shield is removed as we are using an image

// IMPORTANT: Make sure logo.jpg is in your public/images/ folder.
// This path references the file from the root of your public directory.
const logoPath = '/src/images/logos.png';
const LogoPlaceholder = "https://placehold.co/100x32/1E3A2B/FFFFFF?text=LOGO"; // Fallback placeholder

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => { // Removed ': string' for plain JS
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="bg-[#a8bfa8] text-white s relative z-50 ">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section (Left side as per image) */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoPath} 
              alt="Engaging Security Logo" 
              className="h-10 w-60"
              onError={(e) => { e.target.onerror = null; e.target.src = LogoPlaceholder; }} 
            />
            {/* <div className="text-sm">
              <p className="font-bold text-base">Engaging Security</p>
              <p className="text-gray-300 text-sm italic">Relax! You Are Secure</p>
            </div> */}
          </div>

          {/* Navigation Menu (Right side as per image) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('home')} className="text-black hover:text-gray-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-black hover:text-gray-300 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="text-black hover:text-gray-300 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('faqs')} className="text-black hover:text-gray-300 transition-colors">
              FAQs
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-black hover:text-gray-300 transition-colors">
              Contact Us
            </button>
            {/* <Search className="h-5 w-5 text-black hover:text-gray-300 cursor-pointer" /> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-navbar-bg pb-4 px-4 shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-white hover:text-gray-300 transition-colors py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-white hover:text-gray-300 transition-colors py-2">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-white hover:text-gray-300 transition-colors py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('faqs')} className="text-left text-white hover:text-gray-300 transition-colors py-2">
                FAQs
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-white hover:text-gray-300 transition-colors py-2">
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
