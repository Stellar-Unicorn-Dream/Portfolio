import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Main from './pages/main';
import Project1 from './pages/project1';
import { NAME, NAVIGATION_ITEMS } from './constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="font-sans text-gray-900 bg-gray-100 min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-semibold">{NAME}</Link>
              <nav className="hidden md:flex space-x-8">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href.startsWith('http') ? item.href : `/#${item.href}`}
                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-gray-900">
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
            {isMenuOpen && (
              <nav className="mt-4 md:hidden">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href.startsWith('http') ? item.href : `/#${item.href}`}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 {NAME}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;