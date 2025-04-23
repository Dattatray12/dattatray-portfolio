import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Dattatray Shendkar</title>
        <meta name="description" content="Learn more about my professional journey and expertise." />
      </Helmet>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Professional Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I am a Senior Software Engineer with over 9 years of experience in software development, 
                specializing in building dynamic and scalable web and mobile applications. My expertise 
                lies in frontend development with React, Angular, and various modern web technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Throughout my career, I have demonstrated strong capabilities in system design, 
                analysis, implementation, and maintenance of e-Learning applications. I am passionate 
                about creating efficient, user-friendly solutions and staying current with emerging 
                technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Core Competencies</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Frontend Development with React, Redux, Angular, and TypeScript</li>
                <li>Mobile App Development using Ionic Framework, Cordova, and Capacitor</li>
                <li>UI/UX Design and Implementation</li>
                <li>REST API Integration and Development</li>
                <li>Test-Driven Development with Jest</li>
                <li>Version Control with Git and SVN</li>
                <li>Agile Development Methodologies</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Professional Objective</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Looking for a position of Web/UI/Front End Developer in an organization where I can 
                learn new aspects of this field and use my knowledge and experience for the benefit 
                of the organization. I am particularly interested in roles that challenge me to grow 
                while contributing to meaningful projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Personal Strengths</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Quick learner with strong learning agility</li>
                <li>Effective team player and proactive leader</li>
                <li>Adaptable and flexible in dynamic environments</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communication and collaboration abilities</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default About 