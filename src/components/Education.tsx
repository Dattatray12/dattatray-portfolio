import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Fergusson College',
      location: 'Pune, India'
    },
    {
      degree: 'Bachelors of Science (Mathematics)',
      institution: 'Fergusson College',
      location: 'Pune, India'
    }
  ];

  const achievements = [
    'Got Committed contributor at Equations Work (2015-16)',
    'Got Most innovative project-Noise application at Equations Work (2015-16)'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
                  <p className="text-lg mt-2">{edu.institution}</p>
                  <p className="text-gray-600 mt-1">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 