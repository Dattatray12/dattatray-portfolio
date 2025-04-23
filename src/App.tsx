import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') as 'light' | 'dark' || 'light'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App 