import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'ReactJS',
    'Redux',
    'Redux Toolkit',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Jest',
    'Tailwind CSS',
    'HTML5',
    'Bootstrap 4',
    'Ionic Framework',
    'Cordova',
    'Capacitor',
    'VueJS 3',
    'CSS3',
    'JSON'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 