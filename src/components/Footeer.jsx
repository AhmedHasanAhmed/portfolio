import { navLinks } from '../data/portfolioData';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Alex Morgan
            </span>
          </div>
        </div>
        <p className="text-gray-400 mb-6">
          Â© {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </p>
        <div className="flex justify-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-400 hover:text-white transition-colors font-medium hover:scale-105 transform"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}