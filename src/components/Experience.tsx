import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Zensar Technologies',
      position: 'Senior Software Engineer',
      duration: 'Jul 2021 - Current',
      location: 'Pune'
    },
    {
      company: 'Purnartha Investment Advisers Pvt.Ltd',
      position: 'Ionic Developer',
      duration: 'May 2021 - Jul 2021',
      location: 'Pune'
    },
    {
      company: 'Plural Technology Pvt.Ltd',
      position: 'Mobile Application Developer',
      duration: 'Mar 2018 - Mar 2021',
      location: 'Pune'
    },
    {
      company: 'CNCTIMES Pvt.Ltd',
      position: 'Mobile Application Developer',
      duration: 'Aug 2017 - Feb 2018',
      location: 'Pune'
    },
    {
      company: 'Krios Info Solutions Pvt.Ltd',
      position: 'Software Developer',
      duration: 'Mar 2017 - Jul 2017',
      location: 'Pune'
    },
    {
      company: 'Equations Work',
      position: 'Android Developer',
      duration: 'Dec 2014 - Feb 2017',
      location: 'Pune'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600">{exp.company}</h3>
              <p className="text-lg font-medium mt-2">{exp.position}</p>
              <div className="flex justify-between mt-2 text-gray-600">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 