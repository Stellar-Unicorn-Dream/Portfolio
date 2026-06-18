import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ABOUT_ME } from '../constants';

export const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="#contact"
        className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-x-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center h-full">
        <span>Let's</span>
        <span className="relative mx-1 overflow-hidden" style={{ width: '37px' }}> { }
          <span
            className="inline-block transition-transform duration-300 ease-in-out"
            style={{
              transform: isHovered ? 'translateY(-100%)' : 'translateY(0)'
            }}
          >
            Work
          </span>
          <span
            className="absolute top-0 left-0 inline-block transition-transform duration-300 ease-in-out"
            style={{
              transform: isHovered ? 'translateY(0)' : 'translateY(100%)'
            }}
          >
            Rock
          </span>
        </span>
        <span>Together</span>
        <span
          className="ml-1 transition-all duration-300 ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(-10px)',
            width: isHovered ? '20px' : '0px'
          }}
        >
          🤘🏻
        </span>
      </div>
    </Link>
  );
};

const Portfolio = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['projects', 'skills', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const projects = [
    {
      id: 1,
      title: 'DIOvision',
      description: 'Cloud-based video surveillance platform — end-to-end UI/UX design for web and mobile, user research, and brand identity.',
      href: '/project1',
      img: process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_22056eb79c8f4ef0ba12122310803868~mv2.png',
      tags: ['UI/UX', 'Web', 'Mobile', 'Research']
    },
    {
      id: 2,
      title: 'Dimed',
      description: 'Brand identity and logo design for a transportation company — from concept sketches through final deliverables and real-world mockups.',
      href: '/project2',
      img: process.env.PUBLIC_URL + '/Project 2 _ Portfolio_files/VANSTREET1.png',
      tags: ['Branding', 'Logo', 'Identity']
    },
    {
      id: 3,
      title: 'Logo Case',
      description: 'A concise brand identity journey — geometric mark construction, grid-based refinement, and multi-context validation.',
      href: '/project3',
      img: process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_22056eb79c8f4ef0ba12122310803868~mv2.png',
      tags: ['Logo', 'Identity', 'Design System']
    },
  ];

  const skills = [
    { name: 'UX Research', level: 90 },
    { name: 'User Experience (UX)', level: 95 },
    { name: 'User Interface', level: 92 },
    { name: 'Prototyping', level: 88 },
    { name: 'User Personas', level: 85 },
    { name: 'User Stories', level: 87 },
    { name: 'Mobile Web Design', level: 90 },
    { name: 'Web Design', level: 93 },
    { name: 'Content Management', level: 82 },
    { name: 'Content Development', level: 80 },
    { name: 'Video Production', level: 78 },
    { name: 'Image Editing', level: 85 },
  ];

  const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe Illustrator', icon: '✏️' },
    { name: 'Adobe Photoshop', icon: '🖼️' },
    { name: 'Adobe Premiere Pro', icon: '🎬' },
    { name: 'After Effects', icon: '✨' },
    { name: 'DaVinci Resolve', icon: '🎥' },
    { name: 'Sketch', icon: '📐' },
    { name: 'Sharp3D', icon: '🧊' },
  ];

  const contactLinks = [
    { label: 'GitHub', href: 'https://github.com/Stellar-Unicorn-Dream', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/iryna-kupriienko', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { label: 'iryna.kuprienko@gmail.com', href: 'mailto:iryna.kuprienko@gmail.com', icon: 'M40.1133 29.6367C39.5508 30.0352 38.7188 30.3164 37.5703 30.3164L9.82031 30.3164C8.67188 30.3164 7.82812 30.0352 7.26562 29.6367L18.7734 18.1406L21.0352 20.1445C21.8906 20.8945 22.7695 21.2695 23.6953 21.2695C24.6094 21.2695 25.5 20.8945 26.3555 20.1445L28.6172 18.1406ZM17.3203 16.875L6.08203 28.1016C5.78906 27.5273 5.61328 26.7891 5.61328 25.793L5.61328 9.09375C5.61328 8.05078 5.8125 7.25391 6.03516 6.89062ZM40.793 13.9102C41.1277 13.9102 41.4572 13.886 41.7773 13.8311L41.7773 25.793C41.7773 26.7891 41.6016 27.5273 41.3086 28.1016L30.0586 16.875L35.8075 11.7888C37.0727 13.0962 38.8444 13.9102 40.793 13.9102ZM33.832 6.96094C33.832 8.148 34.1353 9.2683 34.6687 10.2483L25.1953 18.6328C24.6914 19.0898 24.1992 19.2891 23.6953 19.2891C23.1797 19.2891 22.6992 19.0898 22.1953 18.6328L7.19531 5.36719C7.98047 4.82812 8.90625 4.58203 10.1719 4.58203L34.2643 4.58203C33.9821 5.32299 33.832 6.12572 33.832 6.96094Z' },
    { label: 'Behance', href: 'https://www.behance.net/irkakup3a4b', icon: 'M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z' },
    { label: 'Telegram', href: 'https://telegram.me/Elimaria', icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
    { label: '+48 510 680 286', href: 'tel:+48510680286', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative text-center mb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }} />

        <div className="max-w-4xl mx-auto px-4">
          <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">UI/UX Designer & Multimedia Content Creator</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
            Iryna Kupriienko
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            I design digital products that are beautiful, functional, and human-centered.
            From concept to launch — I bring ideas to life.
          </p>
          <AnimatedButton />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-24 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto">A selection of work that showcases my approach to design and problem-solving.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-500 mb-4 leading-relaxed">{project.description}</p>
                <Link to={project.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  View Project
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mb-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0 flex items-center justify-center shadow-lg">
              <span className="text-white text-5xl">👩‍🎨</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              {ABOUT_ME.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-24 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-gray-500 max-w-xl mx-auto">The capabilities and technologies I bring to every project.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </span>
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200">
                  <span className="text-2xl mb-2 block">{tool.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 hover:text-blue-600 transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={link.icon} />
                </svg>
                <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
