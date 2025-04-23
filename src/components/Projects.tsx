import React from 'react';

interface Project {
  name: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
  playStoreLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Send IT Back',
      technologies: ['React-JS', 'Redux-toolkit', 'Jest framework', 'Tailwind CSS', 'HTML-5', 'AG-Grid'],
      description: 'The Send IT Back web application is developed to make returning used Cisco equipment fast and easy for customers. It lets users request secure pickup of equipment they no longer need, minimizing the hassle and costs associated with storage and tracking.',
      responsibilities: [
        'Implemented Okta Single Sign-On (SSO)',
        'Developed interactive dashboard with React and Chart.js',
        'Setup code folder structure',
        'Designed UI and functionality for respective modules',
        'REST API integration',
        'Developed CRUD functionality',
        'Resolved bugs UI and functionality',
        'Helped/guided team members for Reactjs related flow'
      ]
    },
    {
      name: 'Cisco Green IT Solutions',
      technologies: ['HTML-5', 'CSS-3', 'AG-Grid', 'React.js', 'Redux', 'Redux-toolkit', 'Axios', 'Jest framework'],
      description: 'A cutting-edge Web Application designed to streamline Power Supply Data Management. This platform serves as a centralized hub for suppliers to efficiently track and update product information.',
      responsibilities: [
        'Implemented Okta Single Sign-On (SSO)',
        'Designed intuitive UI/UX for supplier and admin modules',
        'Developed core functionalities including Ag-grid and Excel data upload',
        'Implemented CRUD operations within admin portal',
        'Troubleshot and resolved bugs in supplier and admin modules'
      ]
    },
    {
      name: 'Send IT Back (SITB) Hybrid App',
      technologies: ['Ionic Framework', 'Angular', 'Cordova', 'Capacitor', 'HTML5', 'CSS'],
      description: 'A mobile app that enables users to easily return used Cisco equipment for recycling and processing. The app streamlines the process of requesting pickups.',
      responsibilities: [
        'Involved in concept creation to development',
        'Implemented Okta Single Sign-On (SSO)',
        'Developed using Angular and TypeScript',
        'UI development and service integration',
        'Version control management with Git',
        'Requirements gathering and analysis',
        'Code review participation'
      ]
    },
    {
      name: 'Knit Fit',
      technologies: ['Ionic Framework', 'Angular', 'Cordova', 'Capacitor', 'HTML5', 'CSS'],
      description: 'An innovative app offering custom pattern generator tailored to exact measurements, ensuring handknits are always perfect.',
      responsibilities: [
        'Full project involvement from concept to deployment',
        'Development using Ionic framework 4 and Angular',
        'Native functionality integration with Apache Cordova',
        'PDF generation for custom and non-custom patterns',
        'Version control and collaboration',
        'Requirements analysis and stakeholder collaboration'
      ],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.noeticdata.knitfit&hl=en'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{project.name}</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Description:</h4>
                <p className="text-gray-700">{project.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>

              {project.playStoreLink && (
                <div className="mt-4">
                  <a
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View on Google Play Store →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 