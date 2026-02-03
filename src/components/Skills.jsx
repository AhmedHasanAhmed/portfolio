import { skills } from '../data/portfolioData';
import { iconRegistry } from './CustomIcons';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">My Skills</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          I'm constantly learning and expanding my technical toolkit. Here are some of my core competencies:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skill) => {
            const IconComponent = iconRegistry[skill.icon];
            return (
              <div key={skill.name} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                    {IconComponent && <IconComponent className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'GitHub', 'Jira', 'Figma', 'VS Code', 'Postman', 'Linux', 'MongoDB', 'PostgreSQL', 'Redis', 'Webpack', 'Jest', 'Cypress'].map((tool) => (
              <span 
                key={tool}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}