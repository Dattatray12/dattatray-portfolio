
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dattatray Shendkar - Senior Software Engineer</title>
        <meta name="description" content="Senior Software Engineer specializing in React, Angular, and modern web technologies." />
      </Helmet>
      <div className="container max-w-6xl">
        <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="text-primary">Dattatray Shendkar</span>
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              With 9+ years of experience in software development, I specialize in building 
              dynamic, scalable web and mobile applications using React, Angular, and modern technologies.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="mailto:dshendkar12@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Frontend Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proficient in React, Redux, Angular, TypeScript, and modern frontend technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Mobile Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience with Ionic Framework, Cordova, and Capacitor for hybrid mobile apps.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Best Practices</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strong focus on code quality, testing, and agile development methodologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Home 