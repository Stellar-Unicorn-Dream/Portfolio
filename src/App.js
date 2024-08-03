import React, { useState } from 'react';

// Constants
const NAME = "Your Name";
const ABOUT_ME = `I'm a passionate UI/UX designer with a keen eye for detail and a love for creating user-centered designs. 
With years of experience in the field, I strive to create digital products that are not only visually 
appealing but also highly functional and intuitive.

When I'm not designing, you can find me exploring new coffee shops, reading design books, or hiking in 
the great outdoors.`;

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { id: 1, title: 'Project 1', description: 'A brief description of Project 1' },
    { id: 2, title: 'Project 2', description: 'A brief description of Project 2' },
    { id: 3, title: 'Project 3', description: 'A brief description of Project 3' },
  ];

  const skills = ['UI Design', 'UX Research', 'Prototyping', 'User Testing'];
  const tools = ['Adobe Creative Suite', 'Sketch', 'Figma'];

  return (
    <div className="font-sans text-gray-900 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{NAME}</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Skills | Tools</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contact</a>
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-gray-900">
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          {isMenuOpen && (
            <nav className="mt-4 md:hidden">
              <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="block py-2 text-gray-600 hover:text-gray-900">Skills | Tools</a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">UI/UX Designer & Developer</h2>
          <p className="text-xl text-gray-600 mb-8">Crafting beautiful and intuitive digital experiences</p>
          <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Get in Touch</a>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`/api/placeholder/400/300`} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Skills | Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">About Me</h2>
          {ABOUT_ME.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-600 mb-4">{paragraph}</p>
          ))}
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">📁 GitHub</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">💼 LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">✉️ Email</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 {NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;