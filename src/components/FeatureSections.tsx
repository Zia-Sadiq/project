import React from 'react';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img1 from '../images/1.jpg'; // Assuming you have an image for the last feature

const FeatureSections = () => {
  const features = [
    {
      title: "Short-Term SIA Security Solutions",
      description: "Flexible security arrangements for temporary needs, special events, or short-term projects. Our SIA-licensed security personnel provide immediate deployment with full compliance to industry standards and regulations.",
      image: img2,
      reverse: false // Text on left, image on right
    },
    {
      title: "Unwavering Commitment To Safety",
      description: "Safety is at the core of everything we do. Our commitment extends beyond basic security to encompass comprehensive risk management, emergency preparedness, and proactive threat assessment to ensure complete protection.",
      image: img3,
      reverse: true // Image on left, text on right
    },
    {
      title: "Uncompromising Security Standards",
      description: "We maintain the highest standards in the security industry through continuous training, strict protocols, and advanced technology integration. Our standards ensure consistent, reliable, and professional security services.",
      image: img4,
      reverse: false // Text on left, image on right
    },
    {
      title: "Uninterrupted Communication",
      description: "Seamless communication channels ensure real-time updates, instant incident reporting, and continuous coordination between our security teams and clients. Stay connected with 24/7 communication support.",
      image: img1,
      reverse: true // Image on left, text on right
    }
  ];

  return (
    // The main section no longer has a single background; each inner div handles its own background.
    <section>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`py-8 md:py-12 ${feature.reverse ? 'bg-gray-100' : 'bg-[#556355]'} w-full`}
        >
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${feature.reverse ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Text Content */}
              <div className={`${feature.reverse ? 'lg:col-start-2' : ''}`}> 
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${feature.reverse ? 'text-gray-800' : 'text-white'}`}>{feature.title}</h3>
                <p className={`leading-relaxed text-base ${feature.reverse ? 'text-gray-700' : 'text-gray-300'}`}>{feature.description}</p>
              </div>
              {/* Image Content */}
              <div className={`${feature.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md mx-auto">
                  <img src={feature.image} alt={feature.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureSections;