import { experiences, education } from '../data/portfolioData';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/outline';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience & Education</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <BriefcaseIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800">
              {experiences.map((job) => (
                <div key={job.id} className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-900"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-3">{job.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <AcademicCapIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-8 relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800">
              {education.map((school) => (
                <div key={school.id} className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-900"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{school.degree}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{school.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-3">{school.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{school.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}