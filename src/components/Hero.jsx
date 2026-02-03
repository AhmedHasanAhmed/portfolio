import { useState, useEffect } from 'react';
import { ChevronDownIcon } from "@heroicons/react/outline";
export default function Hero({ scrollToSection }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Ahmed Hasan</span>
          </h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Senior Software Engineer specializing in React & Node.js
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
            I build exceptional digital experiences with clean code and modern technologies. Passionate about creating scalable applications that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="relative bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-2xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
              <div className="text-center p-4">
                <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto flex items-center justify-center animate-float">
                  <span className="text-4xl md:text-5xl font-bold text-white">AM</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">Professional Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flex justify-center">
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-3 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
          aria-label="Scroll down to about section"
        >
          <ChevronDownIcon className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}