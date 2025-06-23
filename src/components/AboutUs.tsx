import React from 'react';
import { Users, Award, ArrowRight } from 'lucide-react';
import aboutImg from '../images/about.jpg';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-8 md:py-12 bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="bg-white bg-opacity-70 rounded-2xl p-4 md:p-6 shadow-xl">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* Left Column: About Us Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                About Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                Engaging Security is the foremost name in security services,
                dedicated to protecting what matters most to our clients. With over
                two decades of experience in the industry, we have built a
                reputation for excellence and reliability.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                Our comprehensive approach to security combines cutting-edge
                technology with highly trained personnel to deliver unmatched
                protection for residential, commercial, and industrial properties.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                We understand that security is not just about surveillance - it's
                about peace of mind. That's why we offer 24/7 monitoring, rapid
                response times, and customized security solutions tailored to your
                specific needs.
              </p>
              <button className="bg-[#556355] text-white px-6 py-3 rounded-lg hover:bg-[#1F2B15] transition-colors duration-300 flex items-center space-x-2 text-base font-semibold">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Right Column: Statistics */}
            <div className="space-y-4 mt-6 md:mt-0">
              {/* Experience Card */}
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-[#556355] p-3 rounded-full flex items-center justify-center">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#556355]">25+</h3>
                    <p className="text-gray-700 text-base">Years of Experience</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Over two decades of excellence in security services, ensuring
                  peace of mind for our clients.
                </p>
              </div>

              {/* Satisfaction Rate Card */}
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-[#556355] p-3 rounded-full flex items-center justify-center">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#556355]">99%</h3>
                    <p className="text-gray-700 text-base">Satisfaction Rate</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Trusted by thousands of satisfied customers who rely on our
                  top-tier security solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;