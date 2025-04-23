import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact - Dattatray Shendkar</title>
        <meta name="description" content="Get in touch with me for any inquiries or opportunities." />
      </Helmet>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="w-5 h-5 text-primary mr-3" />
                  <a
                    href="mailto:dshendkar12@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    dshendkar12@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-5 h-5 text-primary mr-3" />
                  <a
                    href="tel:+917709401021"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    +91 7709401021
                  </a>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Pune, India
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Send a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark dark:border-gray-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact 