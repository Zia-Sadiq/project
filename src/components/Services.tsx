import React from 'react';
import { Shield, Camera, Lock, Eye, Globe, Flame } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Concierge Security",
      description: "Professional front desk security services with trained personnel providing access control, visitor management, and 24/7 reception services for commercial buildings and residential complexes."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Event Security",
      description: "Comprehensive security solutions for events of all sizes. Our team ensures crowd control, VIP protection, venue security, and emergency response planning for concerts, conferences, and private events."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Corporate Security",
      description: "Tailored security solutions for businesses including executive protection, asset security, workplace violence prevention, and comprehensive risk assessment and management services."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "General Security",
      description: "Complete security coverage with mobile patrols, static guards, alarm response, and perimeter security. Our general security services adapt to your specific needs and requirements."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Site Security",
      description: "Dedicated on-site security personnel providing 24/7 protection for construction sites, industrial facilities, and commercial properties with regular patrols and incident reporting."
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Fire Watch Security",
      description: "Specialized fire watch services for buildings with compromised fire safety systems. Our certified personnel provide continuous monitoring and immediate emergency response capabilities."
    }
  ];

  return (
    <section id="services" className="py-6 md:py-8 bg-[#556355] w-full">
      <div className="container max-w-screen-xl mx-auto px-2">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Services</h2>
          <p className="text-base text-gray-200 max-w-2xl mx-auto">
            We Keep You Safe, So You Can Focus On What Matters
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#697669] text-white p-3 rounded-lg hover:bg-[#556355] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center"
            >
              <div className="mb-2 text-gray-300 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;