export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="prose prose-lg dark:prose-dark max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm a passionate full stack Developer with over 3 years of experience building web applications that users love. My journey in technology started when I built my first website at age 19, and I've been hooked ever since.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I specialize in creating responsive, user-friendly interfaces with React and building robust backends with Node.js. I believe in writing clean, maintainable code and constantly improving my skills to stay at the forefront of web development.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new recipes in the kitchen. I'm also an avid contributor to open-source projects and enjoy mentoring junior developers.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What I Bring to the Table</h3>
            <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 mt-1">
                  ✓
                </span>
                <span>Deep expertise in modern JavaScript frameworks and best practices</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 mt-1">
                  ✓
                </span>
                <span>Strong focus on performance optimization and accessibility</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 mt-1">
                  ✓
                </span>
                <span>Experience leading development teams and mentoring junior engineers</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 mt-1">
                  ✓
                </span>
                <span>Passion for clean architecture and writing testable, maintainable code</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}