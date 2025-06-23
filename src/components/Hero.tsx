import React from 'react';
import logo from '../images/log.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center w-full"
      style={{
        backgroundImage: `linear-gradient(to bottom, #a8bfa8 0%, #697669 50%, #556355 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container max-w-screen-xl mx-auto px-4 py-8 text-center text-white relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto">
          {/* Logo Image */}
          <div className="mb-4 flex justify-center">
            <img src={logo} alt="Logo" className="h-60 w-60 object-contain mx-auto" />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome To<br />
            <span className="text-white">Engaging Security</span>
          </h1>

          {/* Phone Number */}
          <div className="mb-4">
            <p className="text-lg md:text-xl font-semibold text-white">020 8087 1952</p>
          </div>

          {/* Call Us Button */}
          <button
            onClick={scrollToContact}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full max-w-xs mx-auto"
          >
            CALL US →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;