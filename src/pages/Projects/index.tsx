import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'

interface Project {
  name: string
  technologies: string[]
  description: string
  responsibilities: string[]
  playStoreLink?: string
}

const Projects = () => {
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
    // {
    //   name: 'Cisco Green IT Solutions',
    //   technologies: ['HTML-5', 'CSS-3', 'AG-Grid', 'React.js', 'Redux', 'Redux-toolkit', 'Axios', 'Jest framework'],
    //   description: 'A cutting-edge Web Application designed to streamline Power Supply Data Management. This platform serves as a centralized hub for suppliers to efficiently track and update product information.',
    //   responsibilities: [
    //     'Implemented Okta Single Sign-On (SSO)',
    //     'Designed intuitive UI/UX for supplier and admin modules',
    //     'Developed core functionalities including Ag-grid and Excel data upload',
    //     'Implemented CRUD operations within admin portal',
    //     'Troubleshot and resolved bugs in supplier and admin modules'
    //   ]
    // },
    {
      name: 'Cisco Green IT Solutions',
      technologies: [
        'Angular 14', 'TypeScript', 'RxJS', 'SCSS', 'AG-Grid', 'NgRx', 'Angular Material', 
        'HttpClient', 'Jest (with Angular setup)'
      ],
      description: 'A modern Angular 14 Web Application designed to streamline Power Supply Data Management. This platform acts as a centralized hub for suppliers to efficiently manage, track, and update product and inventory data with real-time responsiveness.',
      responsibilities: [
        'Integrated Okta Single Sign-On (SSO) using angular-oauth2-oidc library',
        'Crafted responsive and accessible UI using Angular Material and SCSS',
        'Developed reusable components and used AG-Grid for dynamic data presentation',
        'Implemented reactive forms and services for Excel data upload and validations',
        'Built CRUD functionality using Angular HttpClient and handled API interactions with proper error handling',
        'Adopted NgRx for state management in supplier and admin modules',
        'Wrote unit tests using Jest and Angular Testing Library to ensure component stability',
        'Proactively debugged and resolved issues across modules to ensure smooth user experience'
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
      ],
       playStoreLink: 'https://apps.apple.com/us/app/send-it-back/id1140287915'
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
  ]

  return (
    <>
      <Helmet>
        <title>Projects - Dattatray Shendkar</title>
        <meta name="description" content="Explore my featured projects and technical work." />
      </Helmet>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">{project.name}</h2>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Key Responsibilities</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
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
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        View on Google/App  Play Store →
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Projects 