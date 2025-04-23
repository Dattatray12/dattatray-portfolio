import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

interface SkillCategory {
  name: string
  skills: string[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      skills: [
        'ReactJS',
        'Redux',
        'Redux Toolkit',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap 3/4'
      ]
    },
    {
      name: 'Mobile Development',
      skills: [
        'Ionic Framework',
        'Cordova',
        'Capacitor',
        'Hybrid App Development'
      ]
    },
    {
      name: 'Testing & Tools',
      skills: [
        'Jest framework',
        'JIRA',
        'SVN',
        'GIT',
        'Code Review'
      ]
    },
    {
      name: 'Other Technologies',
      skills: [
        'VueJS 3',
        'JSON',
        'REST API Integration',
        'Agile Methodology'
      ]
    }
  ]

  const strengths = [
    'Learning agility: Quick learner',
    'Good team player and proactive leader',
    'Flexibility and Adaptability'
  ]

  return (
    <>
      <Helmet>
        <title>Skills - Dattatray Shendkar</title>
        <meta name="description" content="Explore my technical skills and expertise." />
      </Helmet>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Technical Skills</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold mb-4 text-primary">{category.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold mb-6">Key Strengths</h2>
            <div className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6">
              <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
                {strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold mb-6">Career Summary</h2>
            <div className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6">
              <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
                <li>9+ years of experience in software development</li>
                <li>Proficient in building dynamic, scalable client-side applications using React and TypeScript</li>
                <li>Experience in REST API integration</li>
                <li>Familiar with code review and processes</li>
                <li>Rich experience in system design, analysis, implementation, development, and maintenance</li>
                <li>Experience of Agile methodology</li>
                <li>Knowledge of JIRA, SVN, GIT and different IDE</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Skills 