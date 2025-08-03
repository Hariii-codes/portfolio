import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Nidhisakhi',
      description: 'A comprehensive loan eligibility and financial awareness platform that empowers users to make informed financial decisions. Features include eligibility calculators, educational resources, and personalized recommendations.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      features: [
        'Loan eligibility assessment',
        'Financial literacy resources',
        'Personalized recommendations',
        'User-friendly interface'
      ],
      githubUrl: 'https://github.com/harish/nidhisakhi',
      liveUrl: 'https://nidhisakhi.vercel.app',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'WasteWorks',
      description: 'An innovative platform transforming e-waste and plastic waste into sustainable urban infrastructure solutions. Connecting waste generators with recycling facilities for a circular economy.',
      techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Material-UI'],
      features: [
        'Waste tracking system',
        'Recycling facility network',
        'Impact analytics dashboard',
        'Sustainable infrastructure mapping'
      ],
      githubUrl: 'https://github.com/harish/wasteworks',
      liveUrl: 'https://wasteworks.vercel.app',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that combine technology with social impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="glass rounded-xl overflow-hidden hover-lift group"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-accent font-semibold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-accent font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/harish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors hover-lift"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;