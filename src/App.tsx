import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Preloader from './components/Preloader';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          {/* Navigation */}
          <nav className="bg-gray-900 fixed w-full z-50 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <Link to="/" className="text-2xl font-bold text-red-500">Satya</Link>
                
                {/* Mobile menu button */}
                <button
                  className="md:hidden text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-8">
                  <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors">Home</Link>
                  <Link to="/projects" className="text-gray-300 hover:text-red-500 transition-colors">Projects</Link>
                  <Link to="/skills" className="text-gray-300 hover:text-red-500 transition-colors">Skills</Link>
                  <Link to="/achievements" className="text-gray-300 hover:text-red-500 transition-colors">Achievements</Link>
                  <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</Link>
                </div>
              </div>

              {/* Mobile menu */}
              {isMenuOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                      to="/"
                      className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      to="/projects"
                      className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Projects
                    </Link>
                    <Link
                      to="/skills"
                      className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Skills
                    </Link>
                    <Link
                      to="/achievements"
                      className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Achievements
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Main Content */}
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>© 2024 Satya. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;