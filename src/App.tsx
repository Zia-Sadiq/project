import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import AreasUnderService from './components/AreasUnderService';
import FeatureSections from './components/FeatureSections';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <AreasUnderService />
      <FeatureSections />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;