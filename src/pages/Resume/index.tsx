//import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'
//import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Resume = () => {
  const skills = [
    'ReactJS', 'Redux', 'Redux Toolkit', 'Angular', 'TypeScript', 'JavaScript',
    'Jest framework', 'Tailwind CSS', 'HTML5', 'Bootstrap 3/4', 'Ionic Framework',
    'Cordova', 'Capacitor', 'VueJS 3', 'CSS3', 'JSON'
  ]

  const experiences = [
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
  ]

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
  ]

  const achievements = [
    'Got Committed contributor at Equations Work (2015-16)',
    'Got Most innovative project-Noise application at Equations Work (2015-16)'
  ]

  return (
    <>
      <Helmet>
        <title>Resume - Dattatray Shendkar</title>
        <meta name="description" content="Download my resume and learn more about my professional experience." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        {/* Download Resume Button */}
        <div className="flex justify-end mb-8">
          <a
            href="/Dattatray_Shendkar_Frontend.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FaDownload className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Dattatray Shendkar</h1>
          <h2 className="text-2xl mb-6 text-gray-600 dark:text-gray-300">Senior Software Engineer</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <FaEnvelope className="mr-2 dark:text-gray-300" />
              <a href="mailto:dshendkar12@gmail.com" className="hover:text-blue-600 dark:text-gray-300">
                dshendkar12@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 dark:text-gray-300" />
              <a href="tel:+917709401021" className="hover:text-blue-600 dark:text-gray-300">
                +91 7709401021
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 dark:text-gray-300" />
              <span className="dark:text-gray-300">Pune (IND)</span>
            </div>
          </div>
        </div>

        {/* Career Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Career Summary</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
              <li>9+ years of experience in software development</li>
              <li>Proficient in building dynamic, scalable client-side applications using React and TypeScript</li>
              <li>Experience in REST API integration</li>
              <li>Familiar with code review and processes</li>
              <li>Rich experience in system design, analysis, implementation, development, and maintenance</li>
              <li>Experience of Agile methodology</li>
              <li>Knowledge of JIRA, SVN, GIT and different IDE</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Technical Skills</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Professional Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.company}</h3>
                <p className="text-lg font-medium mt-2 dark:text-gray-300">{exp.position}</p>
                <div className="flex justify-between mt-2 text-gray-600 dark:text-gray-400">
                  <span>{exp.duration}</span>
                  <span>{exp.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{edu.degree}</h3>
                <p className="text-lg mt-2 dark:text-gray-300">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Achievements</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Resume 