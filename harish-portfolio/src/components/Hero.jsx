import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Tech Explorer', 'Media Storyteller', 'Impact Creator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-highlight/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Harish</span>
            <br />
            <span className="text-white">Chawan</span>
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            <span className="gradient-text font-semibold">
              {roles[currentRole]}
            </span>
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and social impact. 
            Building the future through code, creativity, and meaningful connections.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div data-aos="fade-up" data-aos-delay="800" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce-slow">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;