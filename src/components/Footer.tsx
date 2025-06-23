import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logos from '../images/logos.png';
import log from '../images/log.png';

const Footer = () => {
  // Function to scroll to sections (kept for Quick Links functionality)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t-4 border-[#697669] mt-8">
      {/* Top Section: Engaging Security header */}
      <div className="bg-[#556355] py-4 md:py-4">
        <div className="container mx-auto px-2 flex flex-row justify-between items-center text-center">
          {/* Left: Logos and main text */}
          <div className="flex items-center space-x-4 mb-0">
            {/* Image on left (logos.png) */}
            <img 
              src={logos} 
              alt="Engaging Security Logo" 
              className="h-10 md:h-12 w-auto" 
            />
          </div>
          {/* Right: Circular logo (log.png) */}
          <div>
            <img 
              src={log} 
              alt="Circular Security Logo" 
              className="h-28 md:h-36 w-auto rounded-full" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Footer Links and Info */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-2 py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* About Us Column */}
            <div>
              <h4 className="text-base font-semibold mb-3">About Us</h4>
              <p className="text-gray-400 leading-relaxed text-xs">
                Security is Paramount For Business Success And Personal Events. Engaging Security Specializes In Providing Comprehensive Security Solutions Across The UK, From Large Cities To Remote Locations. We Offer Flexible Short-Term Contracts With Rapid Response Times, Enabling You To Focus On Your Core Operations While We Safeguard Your Assets And People.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-base font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h4 className="text-base font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-gray-400 text-xs">
                <p>Address: ENGAGING SECURITY LTD 3rd Floor, 88-90 Paul Street, London, England EC2A 4NE</p>
                <p>Phone: 020 8087 1952</p>
                <p>Email: Contactus@Engagingsecurity.Com</p>
                <p>Developed By: Zia Sadiq, (Contact: +923130857627)</p>
              </div>
            </div>
          </div>
          {/* Footer Bottom Line: Copyright and Social Icons */}
          <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-2 md:mb-0 text-center w-full">
              © 2023 Engaging Security Ltd. All rights reserved.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
