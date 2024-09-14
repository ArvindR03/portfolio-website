'use client'

import { useRef, useState, useEffect } from 'react'
import { Github, Linkedin, Moon, Sun, Send, Info } from 'lucide-react'
import { ThemeProvider, useTheme } from 'next-themes'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
// figure out how to have skillColors import from constants
import { NAME, TITLE, SINGLE_LINE, GITHUB_LINK, LINKEDIN_LINK, ABOUT_ME_MARKDOWN, ptSerif, HEADINGS, experiences, projects, ExperienceInterface, ProjectInterface } from '../lib/constants'

function Resume() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  // EMAIL TOAST COMMENTED OUT FOR SECURITY
  // const [showEmailToast, setShowEmailToast] = useState(false)
  const [showContactToast, setShowContactToast] = useState(false)
  const [showErrorToast, setShowErrorToast] = useState('')
  const [activeSection, setActiveSection] = useState('about') // Set initial state to 'about'
  const [showPopup, setShowPopup] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ExperienceInterface | ProjectInterface | null>(null)
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  const skillColors: { [key: string]: string } = {
    'Swift': 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
    'UIKit': 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
    'Machine Learning': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
    'Artificial Intelligence': 'bg-black text-white dark:bg-white dark:text-black',
    'Python': 'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100',
    'Quant': 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-100',
    'Leadership': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    'Next.js': 'bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200',
    'TypeScript': 'bg-blue-300 text-blue-900 dark:bg-blue-900 dark:text-blue-300',
    'Java': 'bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200',
    'Agile': 'bg-green-200 text-green-900 dark:bg-green-900 dark:text-green-200',
    'Figma': 'bg-purple-200 text-purple-900 dark:bg-purple-900 dark:text-purple-200',
    'API': 'bg-yellow-200 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-200',
    'React.js': 'bg-blue-400 text-blue-900 dark:bg-blue-900 dark:text-blue-400',
    'PostgreSQL': 'bg-orange-200 text-orange-900 dark:bg-orange-900 dark:text-orange-200',
    'Firebase Auth': 'bg-yellow-300 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-300',
    'Heroku': 'bg-indigo-200 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-200',
    'Express.js': 'bg-green-300 text-green-900 dark:bg-green-900 dark:text-green-300',
    'MongoDB': 'bg-green-400 text-green-900 dark:bg-green-900 dark:text-green-400',
    'JWT': 'bg-red-300 text-red-900 dark:bg-red-900 dark:text-red-300',
    'Algorithms': 'bg-blue-500 text-blue-900 dark:bg-blue-900 dark:text-blue-500',
    'Blockchain': 'bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200',
    'Multithreading': 'bg-purple-300 text-purple-900 dark:bg-purple-900 dark:text-purple-300',
    'Sockets': 'bg-yellow-400 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-400',
    'Tensorflow': 'bg-orange-300 text-orange-900 dark:bg-orange-900 dark:text-orange-300',
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: string) => {
    if (ref.current) {
      const yOffset = -100; 
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      setActiveSection(section);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowContactForm(false);
        setShowContactToast(true);
        setTimeout(() => setShowContactToast(false), 3000);
      } else if (response.status === 429) {
        setShowContactForm(false);
        setShowErrorToast('Rate limit exceeded. Please try again later.');
        setTimeout(() => setShowErrorToast(''), 3000);
      } else {
        setShowErrorToast('Error sending email');
        setTimeout(() => setShowErrorToast(''), 3000);
      }
    } catch (error) {
      setShowErrorToast('Error sending email');
      setTimeout(() => setShowErrorToast(''), 3000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      }
      if (experienceRef.current && scrollPosition >= experienceRef.current.offsetTop) {
        setActiveSection('experience');
      }
      if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${ptSerif.className} transition-colors duration-300 bg-[#f4f1e8] dark:bg-[#2c2c2c] text-[#2c2c2c] dark:text-[#f4f1e8]`}>
      <div className="py-12 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="lg:w-1/4 lg:sticky lg:top-12 lg:self-start">
            <div>
              <h1 className="text-4xl font-bold mb-1 text-[#1a1a1a] dark:text-[#ffffff]">{NAME}</h1>
              <h2 className="text-lg mb-4 text-[#4a4a4a] dark:text-[#cccccc]">{TITLE}</h2>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-[#4a4a4a] dark:text-[#cccccc]">
              {SINGLE_LINE}
            </p>
            <nav className="mb-8">
              <ul className="space-y-1 text-sm text-[#4a4a4a] dark:text-[#cccccc]">
                {Object.keys(HEADINGS).map((section) => (
                  <li 
                    key={section}
                    className="relative cursor-pointer group flex items-center"
                    onClick={() => scrollToSection(section.toUpperCase() === 'ABOUT' ? aboutRef : section.toLowerCase() === 'experience' ? experienceRef : projectsRef, section.toLowerCase())}
                  >
                    <span 
                      className={`w-0 h-0.5 bg-[#4a4a4a] dark:bg-[#cccccc] transition-all duration-300 mr-2 group-hover:w-8 ${activeSection === section.toLowerCase() ? 'w-8' : ''}`}
                    ></span>
                    <span className={`uppercase transition-colors ${activeSection === section.toLowerCase() ? 'text-[#1a1a1a] dark:text-[#ffffff]' : 'group-hover:text-[#1a1a1a] dark:group-hover:text-[#ffffff]'}`}>
                      {section}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-4 mb-6">
              <Link href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-[#4a4a4a] hover:text-[#1a1a1a] dark:text-[#cccccc] dark:hover:text-[#ffffff]" />
              </Link>
              <Link href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-[#4a4a4a] hover:text-[#1a1a1a] dark:text-[#cccccc] dark:hover:text-[#ffffff]" />
              </Link>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowContactForm(true)}
                className="flex items-center space-x-1 px-3 py-1 text-sm rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors duration-300 hover:shadow-md dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700"
              >
                <Send className="w-3 h-3" />
                <span>Contact</span>
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center space-x-1 px-3 py-1 text-sm rounded-full bg-[#2c2c2c] dark:bg-[#f4f1e8] text-[#f4f1e8] dark:text-[#2c2c2c] transition-colors duration-300 hover:shadow-md"
              >
                {mounted && (
                  <>
                    {theme === 'dark' ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
                    <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="lg:w-3/4 space-y-16 leading-relaxed text-sm relative z-10">
            <div ref={aboutRef} className="mb-12">
              <h3 className="text-xl mb-4 uppercase text-[#1a1a1a] dark:text-[#ffffff]">
                {HEADINGS.about}
              </h3>
              <div className="space-y-3 text-[#2c2c2c] dark:text-[#f4f1e8]">
                <ReactMarkdown>
                  {ABOUT_ME_MARKDOWN}
                </ReactMarkdown>
              </div>
            </div>
            <div ref={experienceRef} className="mb-12">
              <h3 className="text-xl mb-6 uppercase text-[#1a1a1a] dark:text-[#ffffff]">
                {HEADINGS.experience}
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#4a4a4a] dark:bg-[#f4f1e8]"></div>
                {experiences.map((experience, index) => (
                  <div 
                    key={index}
                    className="relative pl-10 mb-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-7px] top-1/2 transform -translate-y-1/2 w-[14px] h-[14px] bg-[#4a4a4a] dark:bg-[#f4f1e8] rounded-full"></div>
                    <div 
                      className="p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-[#3a3a3a] cursor-pointer group"
                      onClick={() => {
                        setSelectedItem(experience)
                        setShowPopup(true)
                      }}
                    >
                      <Info className="float-right w-4 h-4 text-[#4a4a4a] group-hover:text-[#1a1a1a] dark:text-[#f4f1e8] dark:group-hover:text-[#ffffff]" />
                      <h4 className="text-base font-semibold mb-1 text-[#4a4a4a] dark:text-[#f4f1e8]">{experience.dateRange}</h4>
                      <h5 className="text-lg font-semibold mb-2 text-[#1a1a1a] dark:text-[#ffffff]">
                        {experience.title} · {experience.company}
                      </h5>
                      <ReactMarkdown className="mb-3 text-[#2c2c2c] dark:text-[#f4f1e8]">{experience.description}</ReactMarkdown>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={projectsRef}>
              <h3 className="text-xl mb-6 uppercase text-[#1a1a1a] dark:text-[#ffffff]">
                {HEADINGS.projects}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#3a3a3a] cursor-pointer hover:scale-[1.02]"
                    onClick={() => {
                      setSelectedItem(project)
                      setShowPopup(true)
                    }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold mb-2 text-[#1a1a1a] dark:text-[#ffffff]">{project.title}</h4>
                      
                        <ReactMarkdown className={"text-sm text-[#2c2c2c] dark:text-[#f4f1e8] mb-3"}>{project.description}</ReactMarkdown>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <footer className="mt-16 pt-6 border-t border-[#4a4a4a] dark:border-[#cccccc]">
              <p className="text-xs text-center text-[#4a4a4a] dark:text-[#cccccc]">
                © September 2024 {NAME}. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#3a3a3a] p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-[#ffffff]">Contact Me</h2>
              <button onClick={() => setShowContactForm(false)} className="text-[#4a4a4a] hover:text-[#1a1a1a] dark:text-[#cccccc] dark:hover:text-[#ffffff]">
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm text-[#4a4a4a] dark:text-[#cccccc]">Name</label>
                <input type="text" id="name" name="name" required className="w-full p-2 text-sm border rounded bg-white dark:bg-[#2c2c2c] text-[#2c2c2c] dark:text-[#f4f1e8]" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm text-[#4a4a4a] dark:text-[#cccccc]">Email</label>
                <input type="email" id="email" name="email" required className="w-full p-2 text-sm border rounded bg-white dark:bg-[#2c2c2c] text-[#2c2c2c] dark:text-[#f4f1e8]" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm text-[#4a4a4a] dark:text-[#cccccc]">Message</label>
                <textarea id="message" name="message" required className="w-full p-2 text-sm border rounded bg-white dark:bg-[#2c2c2c] text-[#2c2c2c] dark:text-[#f4f1e8]" rows={4}></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm">Send Message</button>
            </form>
          </div>
        </div>
      )}
      {showPopup && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowPopup(false)}>
          <div className="bg-white dark:bg-[#3a3a3a] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-y-auto" style={{ maxHeight: '90vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {selectedItem.image && (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#1a1a1a] dark:text-[#ffffff]">{selectedItem.title}</h2>
                {'company' in selectedItem && <p className="text-lg text-[#4a4a4a] dark:text-[#cccccc] mb-2">{selectedItem.company}</p>}
                <p className="text-sm text-[#4a4a4a] dark:text-[#cccccc] mb-4">
                  {'dateRange' in selectedItem ? selectedItem.dateRange : `${selectedItem.date}`}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedItem.skills.map((skill) => (
                    <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="prose dark:prose-invert max-w-none text-sm text-[#2c2c2c] dark:text-[#f4f1e8]">
                <ReactMarkdown
                    components={{
                      h1: ({ ...props }) => <h1 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                      h2: ({ ...props }) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                      h3: ({ ...props }) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
                      p: ({ ...props }) => <p className="mb-3" {...props} />,
                      ul: ({ ...props }) => <ul className="list-disc pl-5 mb-3" {...props} />,
                      ol: ({ ...props }) => <ol className="list-decimal pl-5 mb-3" {...props} />,
                      li: ({ ...props }) => <li className="mb-1" {...props} />,
                      code: ({ className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                          <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-3 overflow-x-auto">
                            <code className={className} {...props}>
                              {children}
                            </code>
                          </pre>
                        ) : (
                          <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" {...props}>
                            {children}
                          </code>
                        )
                      },
                    }}
                  >
                    {selectedItem.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* EMAIL TOAST COMMENTED OUT FOR SECURITY */}
      {/* <AnimatePresence>
        {showEmailToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md z-50"
          >
            Email copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {showContactToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50"
          >
            Your message has been sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showErrorToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md z-50"
          >
            {showErrorToast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export default function PortfolioPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Resume />
    </ThemeProvider>
  )
}

