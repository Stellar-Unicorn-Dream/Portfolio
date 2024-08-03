import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Project1 from './pages/project1';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NAME = "Iryna Kupriienko";
const ABOUT_ME = `I'm a passionate UI/UX designer with a keen eye for detail and a love for creating user-centered designs. 
With years of experience in the field, I strive to create digital products that are not only visually 
appealing but also highly functional and intuitive.

When I'm not designing, you can find me exploring new coffee shops, reading design books, or hiking in 
the great outdoors.`;
  return (
    
    <div className="font-sans text-gray-900 bg-gray-100 min-h-screen">
    <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{NAME}</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Skills &amp; Tools</a>
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
              <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="block py-2 text-gray-600 hover:text-gray-900">Skills &amp; Tools</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          )}
        </div>
      </header>
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </div>
    </Router></main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 {NAME}. All rights reserved.</p>
        </div>
      </footer>
    
    </div>
  );
}

export default App;