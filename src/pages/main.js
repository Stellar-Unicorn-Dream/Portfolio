import React, { useState } from 'react';

// Constants
const NAME = "Iryna Kupriienko";
const ABOUT_ME = `I'm a passionate UI/UX designer with a keen eye for detail and a love for creating user-centered designs. 
With years of experience in the field, I strive to create digital products that are not only visually 
appealing but also highly functional and intuitive.

When I'm not designing, you can find me exploring new coffee shops, reading design books, or hiking in 
the great outdoors.`;

const Portfolio = () => {

  const projects = [
    { id: 1, title: 'Project 1', description: 'A brief description of Project 1', href: '/project1' },
    { id: 2, title: 'Project 2', description: 'A brief description of Project 2', href: '/project1' },
    { id: 3, title: 'Project 3', description: 'A brief description of Project 3', href: '/project1' },
  ];

  const skills = ['UI Design', 'UX Research', 'Prototyping', 'User Testing', 'UI Design', 
                  'UX Research', 'Prototyping', 'User Testing', 'UI Design', 'UX Research', 
                  'Prototyping', 'User Testing', 'UI Design', 'UX Research', 'Prototyping', 
                  'User Testing'];
  const tools = ['Adobe Creative Suite', 'Sketch', 'Figma', 'Adobe Creative Suite', 'Sketch', 'Figma', 'Adobe Creative Suite', 'Sketch', 'Figma', 'Adobe Creative Suite', 'Sketch', 'Figma'];

  return (
   <>
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
                  <a href={project.href} className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">About Me</h2>
          {ABOUT_ME.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-600 mb-4">{paragraph}</p>
          ))}
        </section>

        <section id="skills" className="mb-16">
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

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
          <div className="flex space-x-6">
            <a href="https://github.com/Stellar-Unicorn-Dream" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
              <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/iryna-kupriienko" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
              <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:iryna.kuprienko@gmail.com" target="_blank" rel="noopener noreferrer" className="flex gap-[3px] items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
            <svg className="w-[36px] h-[24px]" fill="currentColor" viewBox="0 0 47.7422 34.8867" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect height="34.8867" opacity="0" width="47.7422" x="0" y="0"/>
                <path d="M40.1133 29.6367C39.5508 30.0352 38.7188 30.3164 37.5703 30.3164L9.82031 30.3164C8.67188 30.3164 7.82812 30.0352 7.26562 29.6367L18.7734 18.1406L21.0352 20.1445C21.8906 20.8945 22.7695 21.2695 23.6953 21.2695C24.6094 21.2695 25.5 20.8945 26.3555 20.1445L28.6172 18.1406ZM17.3203 16.875L6.08203 28.1016C5.78906 27.5273 5.61328 26.7891 5.61328 25.793L5.61328 9.09375C5.61328 8.05078 5.8125 7.25391 6.03516 6.89062ZM40.793 13.9102C41.1277 13.9102 41.4572 13.886 41.7773 13.8311L41.7773 25.793C41.7773 26.7891 41.6016 27.5273 41.3086 28.1016L30.0586 16.875L35.8075 11.7888C37.0727 13.0962 38.8444 13.9102 40.793 13.9102ZM33.832 6.96094C33.832 8.148 34.1353 9.2683 34.6687 10.2483L25.1953 18.6328C24.6914 19.0898 24.1992 19.2891 23.6953 19.2891C23.1797 19.2891 22.6992 19.0898 22.1953 18.6328L7.19531 5.36719C7.98047 4.82812 8.90625 4.58203 10.1719 4.58203L34.2643 4.58203C33.9821 5.32299 33.832 6.12572 33.832 6.96094Z"/>
                <path d="M40.793 12.0586C43.582 12.0586 45.8906 9.75 45.8906 6.96094C45.8906 4.17188 43.582 1.86328 40.793 1.86328C37.9922 1.86328 35.6953 4.16016 35.6953 6.96094C35.6953 9.76172 37.9922 12.0586 40.793 12.0586ZM40.793 10.0195C39.1055 10.0195 37.7344 8.63672 37.7344 6.96094C37.7344 5.28516 39.1055 3.90234 40.793 3.90234C42.457 3.90234 43.8516 5.29688 43.8516 6.96094C43.8516 8.625 42.457 10.0195 40.793 10.0195Z"/>
              </g>
            </svg>
            Send e-Mail
          </a>
          </div>
        </section>

        </>
  );
};

export default Portfolio;