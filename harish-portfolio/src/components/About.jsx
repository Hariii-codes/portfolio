import React from 'react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MongoDB', 'Express'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Adobe Suite'] },
    { category: 'Other', items: ['Embedded Systems', 'AI/ML', 'Media Production'] },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div data-aos="fade-right">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate technologist and creative storyteller who believes in the power of 
                technology to create meaningful impact. With a strong foundation in software development 
                and a keen eye for design, I craft digital experiences that matter.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans across various domains - from building innovative web applications 
                to exploring embedded systems and AI. Through Sam's Media, I've also ventured into 
                the world of digital storytelling and content creation.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me organizing tech events, mentoring fellow developers, 
                or exploring the latest trends in technology and media production.
              </p>

              <div className="pt-4">
                <p className="text-accent font-semibold italic">
                  "Innovation happens when technology meets creativity and purpose."
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="glass rounded-lg p-6 hover-lift">
                  <h3 className="text-accent font-semibold mb-4 text-lg">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div data-aos="fade-up" className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Completed' },
              { number: '5+', label: 'Technologies' },
              { number: '100+', label: 'Problems Solved' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;