// 'use client'

// import { useRef, useState, useEffect } from 'react'
// import { Github, Linkedin, Mail, Moon, Sun, Send, Info } from 'lucide-react'
// import { PT_Serif } from 'next/font/google'
// import { ThemeProvider, useTheme } from 'next-themes'
// import Link from 'next/link'
// import ReactMarkdown from 'react-markdown'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// const ptSerif = PT_Serif({ 
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })

// const skillColors: { [key: string]: string } = {
//   React: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
//   TypeScript: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
//   JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
//   'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
//   GraphQL: 'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100',
//   Redux: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
//   'Tailwind CSS': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-100',
//   WCAG: 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100',
//   'Spotify API': 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
//   OAuth: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
//   Storybook: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100',
//   Jest: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
// }

// interface Experience {
//   title: string;
//   company: string;
//   description: string;
//   skills: string[];
//   dateRange: string;
//   image: string;
//   content: string;
// }

// interface Project {
//   title: string;
//   description: string;
//   skills: string[];
//   link: string;
//   image: string;
//   date: string;
//   content: string;
// }

// const experiences: Experience[] = [
//   {
//     title: "Senior Frontend Engineer, Accessibility",
//     company: "Klaviyo",
//     description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
//     skills: ['React', 'TypeScript', 'GraphQL', 'WCAG'],
//     dateRange: "2024 — PRESENT",
//     image: "/placeholder.svg?height=300&width=500",
//     content: "# Senior Frontend Engineer, Accessibility at Klaviyo\n\nAs a Senior Frontend Engineer specializing in Accessibility at Klaviyo, my role involves:\n\n## Key Responsibilities\n\n1. **Component Development**\n   - Build and maintain critical components for Klaviyo's frontend\n   - Ensure components are reusable, performant, and accessible\n\n2. **Accessibility Advocacy**\n   - Implement best practices in web accessibility\n   - Educate and guide other team members on accessibility standards\n\n3. **Cross-functional Collaboration**\n   - Work closely with developers, designers, and product managers\n   - Ensure accessibility is considered at all stages of product development\n\n4. **Technical Leadership**\n   - Provide technical guidance and mentorship to junior engineers\n   - Contribute to architectural decisions and code reviews\n\n5. **Continuous Improvement**\n   - Stay updated with the latest accessibility guidelines and technologies\n   - Implement and advocate for accessibility testing processes\n\nThis role allows me to combine my passion for frontend development with my commitment to creating inclusive digital experiences for all users.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "TechCorp Inc.",
//     description: "Developed and maintained responsive web applications using React and Next.js. Collaborated with UX designers to implement pixel-perfect, accessible user interfaces. Optimized application performance and improved load times by 40%.",
//     skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
//     dateRange: "2022 — 2024",
//     image: "/placeholder.svg?height=300&width=500",
//     content: "# Frontend Engineer at TechCorp Inc.\n\nDuring my time as a Frontend Engineer at TechCorp Inc., I focused on:\n\n## Key Achievements\n\n1. **Web Application Development**\n   - Built responsive web applications using React and Next.js\n   - Implemented state management solutions using Redux\n\n2. **UI/UX Collaboration**\n   - Worked closely with UX designers to create pixel-perfect interfaces\n   - Ensured accessibility standards were met in all user interfaces\n\n3. **Performance Optimization**\n   - Improved application load times by 40% through various optimization techniques\n   - Implemented code splitting and lazy loading to enhance performance\n\n4. **Tailwind CSS Implementation**\n   - Adopted Tailwind CSS for efficient and consistent styling across projects\n   - Created a custom design system using Tailwind's configuration\n\n5. **Agile Development**\n   - Participated in agile ceremonies and contributed to sprint planning\n   - Collaborated effectively with backend developers and QA engineers\n\nThis role significantly enhanced my skills in modern frontend development and taught me the importance of performance optimization in large-scale applications.",
//   }
// ]

// const projects: Project[] = [
//   {
//     title: "Spotify Web App Course",
//     description: "Created a comprehensive video course teaching developers how to build a web application using the Spotify API. Covers React, API integration, authentication, and deployment.",
//     skills: ['React', 'Spotify API', 'OAuth'],
//     link: "https://example.com/spotify-course",
//     image: "/placeholder.svg?height=300&width=500",
//     date: "2023-05-15",
//     content: "# Spotify Web App Course\n\nThis course covers everything you need to know to build a web application using the Spotify API. Throughout the course, you'll learn:\n\n## Key Topics\n\n1. **Setting up your development environment**\n   - Installing necessary tools and dependencies\n   - Creating a new React project\n\n2. **Understanding the Spotify API**\n   - Overview of available endpoints\n   - Authentication methods\n\n3. **Building the user interface**\n   - Creating reusable React components\n   - Implementing responsive design with CSS\n\n4. **Integrating with the Spotify API**\n   - Making API requests\n   - Handling responses and errors\n\n5. **Implementing user authentication**\n   - Setting up OAuth 2.0\n   - Managing user sessions\n\n6. **Advanced features**\n   - Real-time updates with WebSockets\n   - Caching strategies for improved performance\n\n7. **Testing and deployment**\n   - Writing unit and integration tests\n   - Deploying your app to a hosting platform\n\nBy the end of this course, you'll have a fully functional Spotify web app and the skills to build many more exciting projects!",
//   },
//   {
//     title: "Accessibility Toolkit",
//     description: "Developed an open-source toolkit of React components focused on web accessibility. Includes fully customizable, WCAG 2.1 compliant UI elements with extensive documentation.",
//     skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
//     link: "https://example.com/a11y-toolkit",
//     image: "/placeholder.svg?height=300&width=500",
//     date: "2023-08-01",
//     content: "# Accessibility Toolkit\n\nThis open-source toolkit provides a set of React components that are fully compliant with WCAG 2.1 guidelines. Our goal is to make web accessibility easier for developers to implement.\n\n## Features\n\n- **Fully Customizable Components**: Each component can be styled to fit your project's design system.\n- **WCAG 2.1 Compliant**: All components meet the latest web accessibility guidelines.\n- **Extensive Documentation**: Detailed usage instructions and best practices for each component.\n- **TypeScript Support**: Full TypeScript definitions for improved developer experience.\n- **Storybook Integration**: Interactive component library for easy testing and development.\n- **Comprehensive Test Suite**: Jest and React Testing Library tests ensuring reliability.\n\n## Components\n\n1. **Accessible Buttons**\n   - Various styles with proper ARIA attributes\n   - Keyboard navigation support\n\n2. **Form Inputs**\n   - Text inputs, checkboxes, radio buttons, and more\n   - Clear error states and helper text\n\n3. **Modal Dialogs**\n   - Keyboard trapping for improved focus management\n   - Proper ARIA roles and attributes\n\n4. **Navigation Menus**\n   - Dropdown menus with keyboard support\n   - Mobile-friendly navigation patterns\n\n5. **Data Tables**\n   - Sortable and filterable tables\n   - Proper table semantics for screen readers\n\n6. **And many more!**\n\nWe're constantly adding new components and improving existing ones. Contributions are welcome!\n\n## Getting Started\n\nTo start using the Accessibility Toolkit in your project, install it via npm:\n\n```bash\nnpm install a11y-toolkit\n```\n\nThen, import and use the components in your React application:\n\n```jsx\nimport { Button, TextInput } from 'a11y-toolkit';\n\nfunction MyForm() {\n  return (\n    <form>\n      <TextInput label=\"Name\" id=\"name\" />\n      <Button>Submit</Button>\n    </form>\n  );\n}\n```\n\nCheck out our documentation for more detailed usage instructions and examples.\n\nLet's make the web more accessible, one component at a time!",
//   }
// ]

// const EMAIL = 'your.email@example.com'

// function Resume() {
//   const aboutRef = useRef<HTMLDivElement>(null)
//   const experienceRef = useRef<HTMLDivElement>(null)
//   const projectsRef = useRef<HTMLDivElement>(null)
//   const [showContactForm, setShowContactForm] = useState(false)
//   const [showEmailToast, setShowEmailToast] = useState(false)
//   const [showContactToast, setShowContactToast] = useState(false)
//   const [activeSection, setActiveSection] = useState('')
//   const [showPopup, setShowPopup] = useState(false)
//   const [selectedItem, setSelectedItem] = useState<Experience | Project | null>(null)
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null)

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: string) => {
//     if (ref.current) {
//       const yOffset = -100; 
//       const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({top: y, behavior: 'smooth'});
//       setActiveSection(section);
//     }
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setShowContactForm(false)
//     setShowContactToast(true)
//     setTimeout(() => setShowContactToast(false), 3000)
//   }

//   const copyEmailToClipboard = () => {
//     navigator.clipboard.writeText(EMAIL)
//     setShowEmailToast(true)
//     setTimeout(() => setShowEmailToast(false), 3000)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 200;
//       if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
//         setActiveSection('about');
//       }
//       if (experienceRef.current && scrollPosition >= experienceRef.current.offsetTop) {
//         setActiveSection('experience');
//       }
//       if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
//         setActiveSection('projects');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className={`min-h-screen ${ptSerif.className} transition-colors duration-300 bg-cream dark:bg-gray-900 text-brown dark:text-gray-100`}>
//       <div className="py-12 px-6 md:px-12 relative">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
//           <div className="lg:w-1/4 lg:sticky lg:top-12 lg:self-start">
//             <div>
//               <h1 className="text-3xl font-bold mb-1">Your Name</h1>
//               <h2 className="text-lg mb-4 text-brown dark:text-gray-400">Senior Frontend Engineer</h2>
//             </div>
//             <p className="mb-8 text-sm leading-relaxed text-brown dark:text-gray-400">
//               I build pixel-perfect, engaging, and accessible digital experiences.
//             </p>
//             <nav className="mb-8">
//               <ul className="space-y-1 text-sm text-brown dark:text-gray-400">
//                 {['About', 'Experience', 'Projects'].map((section) => (
//                   <li 
//                     key={section}
//                     className="relative cursor-pointer group flex items-center"
//                     onClick={() => scrollToSection(section.toLowerCase() === 'about' ? aboutRef : section.toLowerCase() === 'experience' ? experienceRef : projectsRef, section.toLowerCase())}
//                   >
//                     <span 
//                       className={`w-0 h-0.5 bg-brown dark:bg-gray-100 transition-all duration-300 mr-2 group-hover:w-8 ${activeSection === section.toLowerCase() ? 'w-8' : ''}`}
//                     ></span>
//                     <span className={`transition-colors ${activeSection === section.toLowerCase() ? 'text-brown dark:text-gray-100' : 'group-hover:text-brown dark:group-hover:text-gray-100'}`}>
//                       {section}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//             <div className="flex space-x-4 mb-6">
//               <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
//                 <Github className="w-5 h-5 text-brown hover:text-brown-600 dark:hover:text-gray-100" />
//               </Link>
//               <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <Linkedin className="w-5 h-5 text-brown hover:text-brown-600 dark:hover:text-gray-100" />
//               </Link>
//               <button onClick={copyEmailToClipboard}>
//                 <Mail className="w-5 h-5 text-brown hover:text-brown-600 dark:hover:text-gray-100" />
//               </button>
//             </div>
//             <div className="flex space-x-3">
//               <button
//                 onClick={() => setShowContactForm(true)}
//                 className="flex items-center space-x-1 px-3 py-1 text-sm rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors duration-300 hover:shadow-md"
//               >
//                 <Send className="w-3 h-3" />
//                 <span>Contact</span>
//               </button>
//               <ThemeToggle />
//             </div>
//           </div>
//           <div className="lg:w-3/4 space-y-16 leading-relaxed text-sm">
//             <div ref={aboutRef} className="mb-12">
//               <h3 className="text-xl mb-4 uppercase">
//                 About Me
//               </h3>
//               <div className="space-y-3">
//                 <p>
//                   Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an{' '}
//                   <span className="font-semibold">advertising agency</span>, a{' '}
//                   <span className="font-semibold">start-up</span>, a{' '}
//                   <span className="font-semibold">huge corporation</span>, and a{' '}
//                   <span className="font-semibold">digital product studio</span>.
//                 </p>
//                 <p>
//                   My main focus these days is building accessible user interfaces for our customers at{' '}
//                   <span className="font-semibold">Klaviyo</span>. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an{' '}
//                   <span className="font-semibold">online video course</span> that covers everything you need to know to build a web app with the Spotify API.
//                 </p>
//                 <p>
//                   When I'm not at the computer, I'm usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for{' '}
//                   <span className="font-semibold">Korok seeds</span>.
//                 </p>
//               </div>
//             </div>
//             <div ref={experienceRef} className="mb-12">
//               <h3 className="text-xl mb-4 uppercase">
//                 Experience
//               </h3>
//               <div className="space-y-8 relative">
//                 <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brown dark:bg-gray-700"></div>
//                 {experiences.map((experience, index) => (
//                   <div 
//                     key={index}
//                     className="p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-gray-800 cursor-pointer group relative ml-6"
//                     onClick={() => {
//                       setSelectedItem(experience)
//                       setShowPopup(true)
//                     }}
//                     onMouseEnter={() => setHoveredCard(`experience-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div className="absolute left-0 top-6 transform -translate-x-[calc(0.5rem+1px)] w-2 h-2 bg-brown dark:bg-gray-500 rounded-full"></div>
//                     <Info className="float-right w-4 h-4 text-brown group-hover:text-brown-600 dark:group-hover:text-gray-200" />
//                     <h4 className="text-base font-semibold mb-1 text-brown dark:text-gray-400">{experience.dateRange}</h4>
//                     <h5 className="text-lg font-semibold mb-2">
//                       {experience.title} · {experience.company}
//                     </h5>
//                     <p className="mb-3 text-brown dark:text-gray-400">{experience.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {experience.skills.map((skill) => (
//                         <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                     {hoveredCard === `experience-${index}` && (
//                       <div
//                         className="fixed z-50 pointer-events-none bg-white dark:bg-gray-800 text-brown dark:text-gray-200 px-2 py-1 rounded shadow-md text-sm"
//                         style={{ left: cursorPosition.x + 10, top: cursorPosition.y + 10 }}
//                       >
//                         Click for more info
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div ref={projectsRef}>
//               <h3 className="text-xl mb-4 uppercase">
//                 Projects
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects.map((project, index) => (
//                   <div 
//                     key={index} 
//                     className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 cursor-pointer"
//                     onClick={() => {
//                       setSelectedItem(project)
//                       setShowPopup(true)
//                     }}
//                     onMouseEnter={() => setHoveredCard(`project-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         layout="fill"
//                         objectFit="cover"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
//                       <p className="text-sm text-brown dark:text-gray-400 mb-3">{project.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {project.skills.map((skill) => (
//                           <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     {hoveredCard === `project-${index}` && (
//                       <div
//                         className="fixed z-50 pointer-events-none bg-white dark:bg-gray-800 text-brown dark:text-gray-200 px-2 py-1 rounded shadow-md text-sm"
//                         style={{ left: cursorPosition.x + 10, top: cursorPosition.y + 10 }}
//                       >
//                         Click for more info
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <footer className="mt-16 pt-6 border-t border-brown dark:border-gray-700">
//               <p className="text-xs text-center text-brown dark:text-gray-400">
//                 © {new Date().getFullYear()} Your Name. All rights reserved.
//               </p>
//             </footer>
//           </div>
//         </div>
//       </div>
//       {showContactForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Contact Me</h2>
//               <button onClick={() => setShowContactForm(false)} className="text-brown hover:text-brown-600 dark:text-gray-400 dark:hover:text-gray-200">
//                 <span className="sr-only">Close</span>
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
//               </button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-1 text-sm text-brown dark:text-gray-400">Name</label>
//                 <input type="text" id="name" name="name" required className="w-full p-2 text-sm border rounded bg-white dark:bg-gray-700 text-brown dark:text-gray-100" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-1 text-sm text-brown dark:text-gray-400">Email</label>
//                 <input type="email" id="email" name="email" required className="w-full p-2 text-sm border rounded bg-white dark:bg-gray-700 text-brown dark:text-gray-100" />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-1 text-sm text-brown dark:text-gray-400">Message</label>
//                 <textarea id="message" name="message" required className="w-full p-2 text-sm border rounded bg-white dark:bg-gray-700 text-brown dark:text-gray-100" rows={4}></textarea>
//               </div>
//               <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm">Send Message</button>
//             </form>
//           </div>
//         </div>
//       )}
//       {showPopup && selectedItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowPopup(false)}>
//           <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
//             <div className="overflow-y-auto" style={{ maxHeight: '90vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//               <style jsx>{`
//                 div::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}</style>
//               <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
//                 {'company' in selectedItem && <p className="text-lg text-brown dark:text-gray-400 mb-2">{selectedItem.company}</p>}
//                 <p className="text-sm text-brown dark:text-gray-400 mb-4">
//                   {'dateRange' in selectedItem ? selectedItem.dateRange : `Date: ${selectedItem.date}`}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {selectedItem.skills.map((skill) => (
//                     <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="prose dark:prose-invert max-w-none text-sm">
//                   <ReactMarkdown
//                     components={{
//                       h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-3" {...props} />,
//                       h2: ({node, ...props}) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
//                       h3: ({node, ...props}) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
//                       p: ({node, ...props}) => <p className="mb-3" {...props} />,
//                       ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-3" {...props} />,
//                       ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-3" {...props} />,
//                       li: ({node, ...props}) => <li className="mb-1" {...props} />,
//                       code: ({node, className, children, ...props}) => {
//                         const match = /language-(\w+)/.exec(className || '')
//                         return match ? (
//                           <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-3 overflow-x-auto">
//                             <code className={className} {...props}>
//                               {children}
//                             </code>
//                           </pre>
//                         ) : (
//                           <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" {...props}>
//                             {children}
//                           </code>
//                         )
//                       },
//                     }}
//                   >
//                     {selectedItem.content}
//                   </ReactMarkdown>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       <AnimatePresence>
//         {showEmailToast && (
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed bottom-4 right-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md z-50"
//           >
//             Email copied to clipboard!
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {showContactToast && (
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50"
//           >
//             Your message has been sent successfully!
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// function ThemeToggle() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <button
//       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       className="flex items-center space-x-1 px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-brown dark:text-gray-200 transition-colors duration-300 hover:shadow-md"
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div
//           key={theme === 'dark' ? 'dark' : 'light'}
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 20, opacity: 0 }}
//           transition={{ duration: 0.2 }}
//         >
//           {theme === 'dark' ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
//         </motion.div>
//       </AnimatePresence>
//       <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
//     </button>
//   )
// }

// export default function PortfolioPage() {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       <Resume />
//     </ThemeProvider>
//   )
// }












// 'use client'

// import { useRef, useState, useEffect } from 'react'
// import { Github, Linkedin, Mail, Moon, Sun, Send, Info } from 'lucide-react'
// import { PT_Serif } from 'next/font/google'
// import { ThemeProvider, useTheme } from 'next-themes'
// import Link from 'next/link'
// import ReactMarkdown from 'react-markdown'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// const ptSerif = PT_Serif({ 
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })

// const skillColors: { [key: string]: string } = {
//   React: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
//   TypeScript: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
//   JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
//   'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
//   GraphQL: 'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100',
//   Redux: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
//   'Tailwind CSS': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-100',
//   WCAG: 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100',
//   'Spotify API': 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
//   OAuth: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
//   Storybook: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100',
//   Jest: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
// }

// interface Experience {
//   title: string;
//   company: string;
//   description: string;
//   skills: string[];
//   dateRange: string;
//   image: string;
//   content: string;
// }

// interface Project {
//   title: string;
//   description: string;
//   skills: string[];
//   link: string;
//   image: string;
//   date: string;
//   content: string;
// }

// const experiences: Experience[] = [
//   {
//     title: "Senior Frontend Engineer, Accessibility",
//     company: "Klaviyo",
//     description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
//     skills: ['React', 'TypeScript', 'GraphQL', 'WCAG'],
//     dateRange: "2024 — PRESENT",
//     image: "/placeholder.svg?height=300&width=500",
//     content: "# Senior Frontend Engineer, Accessibility at Klaviyo\n\nAs a Senior Frontend Engineer specializing in Accessibility at Klaviyo, my role involves:\n\n## Key Responsibilities\n\n1. **Component Development**\n   - Build and maintain critical components for Klaviyo's frontend\n   - Ensure components are reusable, performant, and accessible\n\n2. **Accessibility Advocacy**\n   - Implement best practices in web accessibility\n   - Educate and guide other team members on accessibility standards\n\n3. **Cross-functional Collaboration**\n   - Work closely with developers, designers, and product managers\n   - Ensure accessibility is considered at all stages of product development\n\n4. **Technical Leadership**\n   - Provide technical guidance and mentorship to junior engineers\n   - Contribute to architectural decisions and code reviews\n\n5. **Continuous Improvement**\n   - Stay updated with the latest accessibility guidelines and technologies\n   - Implement and advocate for accessibility testing processes\n\nThis role allows me to combine my passion for frontend development with my commitment to creating inclusive digital experiences for all users.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "TechCorp Inc.",
//     description: "Developed and maintained responsive web applications using React and Next.js. Collaborated with UX designers to implement pixel-perfect, accessible user interfaces. Optimized application performance and improved load times by 40%.",
//     skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
//     dateRange: "2022 — 2024",
//     image: "/placeholder.svg?height=300&width=500",
//     content: "# Frontend Engineer at TechCorp Inc.\n\nDuring my time as a Frontend Engineer at TechCorp Inc., I focused on:\n\n## Key Achievements\n\n1. **Web Application Development**\n   - Built responsive web applications using React and Next.js\n   - Implemented state management solutions using Redux\n\n2. **UI/UX Collaboration**\n   - Worked closely with UX designers to create pixel-perfect interfaces\n   - Ensured accessibility standards were met in all user interfaces\n\n3. **Performance Optimization**\n   - Improved application load times by 40% through various optimization techniques\n   - Implemented code splitting and lazy loading to enhance performance\n\n4. **Tailwind CSS Implementation**\n   - Adopted Tailwind CSS for efficient and consistent styling across projects\n   - Created a custom design system using Tailwind's configuration\n\n5. **Agile Development**\n   - Participated in agile ceremonies and contributed to sprint planning\n   - Collaborated effectively with backend developers and QA engineers\n\nThis role significantly enhanced my skills in modern frontend development and taught me the importance of performance optimization in large-scale applications.",
//   }
// ]

// const projects: Project[] = [
//   {
//     title: "Spotify Web App Course",
//     description: "Created a comprehensive video course teaching developers how to build a web application using the Spotify API. Covers React, API integration, authentication, and deployment.",
//     skills: ['React', 'Spotify API', 'OAuth'],
//     link: "https://example.com/spotify-course",
//     image: "/placeholder.svg?height=300&width=500",
//     date: "2023-05-15",
//     content: "# Spotify Web App Course\n\nThis course covers everything you need to know to build a web application using the Spotify API. Throughout the course, you'll learn:\n\n## Key Topics\n\n1. **Setting up your development environment**\n   - Installing necessary tools and dependencies\n   - Creating a new React project\n\n2. **Understanding the Spotify API**\n   - Overview of available endpoints\n   - Authentication methods\n\n3. **Building the user interface**\n   - Creating reusable React components\n   - Implementing responsive design with CSS\n\n4. **Integrating with the Spotify API**\n   - Making API requests\n   - Handling responses and errors\n\n5. **Implementing user authentication**\n   - Setting up OAuth 2.0\n   - Managing user sessions\n\n6. **Advanced features**\n   - Real-time updates with WebSockets\n   - Caching strategies for improved performance\n\n7. **Testing and deployment**\n   - Writing unit and integration tests\n   - Deploying your app to a hosting platform\n\nBy the end of this course, you'll have a fully functional Spotify web app and the skills to build many more exciting projects!",
//   },
//   {
//     title: "Accessibility Toolkit",
//     description: "Developed an open-source toolkit of React components focused on web accessibility. Includes fully customizable, WCAG 2.1 compliant UI elements with extensive documentation.",
//     skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
//     link: "https://example.com/a11y-toolkit",
//     image: "/placeholder.svg?height=300&width=500",
//     date: "2023-08-01",
//     content: "# Accessibility Toolkit\n\nThis open-source toolkit provides a set of React components that are fully compliant with WCAG 2.1 guidelines. Our goal is to make web accessibility easier for developers to implement.\n\n## Features\n\n- **Fully Customizable Components**: Each component can be styled to fit your project's design system.\n- **WCAG 2.1 Compliant**: All components meet the latest web accessibility guidelines.\n- **Extensive Documentation**: Detailed usage instructions and best practices for each component.\n- **TypeScript Support**: Full TypeScript definitions for improved developer experience.\n- **Storybook Integration**: Interactive component library for easy testing and development.\n- **Comprehensive Test Suite**: Jest and React Testing Library tests ensuring reliability.\n\n## Components\n\n1. **Accessible Buttons**\n   - Various styles with proper ARIA attributes\n   - Keyboard navigation support\n\n2. **Form Inputs**\n   - Text inputs, checkboxes, radio buttons, and more\n   - Clear error states and helper text\n\n3. **Modal Dialogs**\n   - Keyboard trapping for improved focus management\n   - Proper ARIA roles and attributes\n\n4. **Navigation Menus**\n   - Dropdown menus with keyboard support\n   - Mobile-friendly navigation patterns\n\n5. **Data Tables**\n   - Sortable and filterable tables\n   - Proper table semantics for screen readers\n\n6. **And many more!**\n\nWe're constantly adding new components and improving existing ones. Contributions are welcome!\n\n## Getting Started\n\nTo start using the Accessibility Toolkit in your project, install it via npm:\n\n```bash\nnpm install a11y-toolkit\n```\n\nThen, import and use the components in your React application:\n\n```jsx\nimport { Button, TextInput } from 'a11y-toolkit';\n\nfunction MyForm() {\n  return (\n    <form>\n      <TextInput label=\"Name\" id=\"name\" />\n      <Button>Submit</Button>\n    </form>\n  );\n}\n```\n\nCheck out our documentation for more detailed usage instructions and examples.\n\nLet's make the web more accessible, one component at a time!",
//   },
//   {
//     title: "Accessibility Toolkit",
//     description: "Developed an open-source toolkit of React components focused on web accessibility. Includes fully customizable, WCAG 2.1 compliant UI elements with extensive documentation.",
//     skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
//     link: "https://example.com/a11y-toolkit",
//     image: "/placeholder.svg?height=300&width=500",
//     date: "2023-08-01",
//     content: "# Accessibility Toolkit\n\nThis open-source toolkit provides a set of React components that are fully compliant with WCAG 2.1 guidelines. Our goal is to make web accessibility easier for developers to implement.\n\n## Features\n\n- **Fully Customizable Components**: Each component can be styled to fit your project's design system.\n- **WCAG 2.1 Compliant**: All components meet the latest web accessibility guidelines.\n- **Extensive Documentation**: Detailed usage instructions and best practices for each component.\n- **TypeScript Support**: Full TypeScript definitions for improved developer experience.\n- **Storybook Integration**: Interactive component library for easy testing and development.\n- **Comprehensive Test Suite**: Jest and React Testing Library tests ensuring reliability.\n\n## Components\n\n1. **Accessible Buttons**\n   - Various styles with proper ARIA attributes\n   - Keyboard navigation support\n\n2. **Form Inputs**\n   - Text inputs, checkboxes, radio buttons, and more\n   - Clear error states and helper text\n\n3. **Modal Dialogs**\n   - Keyboard trapping for improved focus management\n   - Proper ARIA roles and attributes\n\n4. **Navigation Menus**\n   - Dropdown menus with keyboard support\n   - Mobile-friendly navigation patterns\n\n5. **Data Tables**\n   - Sortable and filterable tables\n   - Proper table semantics for screen readers\n\n6. **And many more!**\n\nWe're constantly adding new components and improving existing ones. Contributions are welcome!\n\n## Getting Started\n\nTo start using the Accessibility Toolkit in your project, install it via npm:\n\n```bash\nnpm install a11y-toolkit\n```\n\nThen, import and use the components in your React application:\n\n```jsx\nimport { Button, TextInput } from 'a11y-toolkit';\n\nfunction MyForm() {\n  return (\n    <form>\n      <TextInput label=\"Name\" id=\"name\" />\n      <Button>Submit</Button>\n    </form>\n  );\n}\n```\n\nCheck out our documentation for more detailed usage instructions and examples.\n\nLet's make the web more accessible, one component at a time!",
//   },
//   {
//     title: "Accessibility Toolkit",
//     description: "Developed an open-source toolkit of React components focused on web accessibility. Includes fully customizable, WCAG 2.1 compliant UI elements with extensive documentation.",
//     skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
//     link: "https://example.com/a11y-toolkit",
//     image: "/placeholder.svg?height=300&width=500",
//     date: "2023-08-01",
//     content: "# Accessibility Toolkit\n\nThis open-source toolkit provides a set of React components that are fully compliant with WCAG 2.1 guidelines. Our goal is to make web accessibility easier for developers to implement.\n\n## Features\n\n- **Fully Customizable Components**: Each component can be styled to fit your project's design system.\n- **WCAG 2.1 Compliant**: All components meet the latest web accessibility guidelines.\n- **Extensive Documentation**: Detailed usage instructions and best practices for each component.\n- **TypeScript Support**: Full TypeScript definitions for improved developer experience.\n- **Storybook Integration**: Interactive component library for easy testing and development.\n- **Comprehensive Test Suite**: Jest and React Testing Library tests ensuring reliability.\n\n## Components\n\n1. **Accessible Buttons**\n   - Various styles with proper ARIA attributes\n   - Keyboard navigation support\n\n2. **Form Inputs**\n   - Text inputs, checkboxes, radio buttons, and more\n   - Clear error states and helper text\n\n3. **Modal Dialogs**\n   - Keyboard trapping for improved focus management\n   - Proper ARIA roles and attributes\n\n4. **Navigation Menus**\n   - Dropdown menus with keyboard support\n   - Mobile-friendly navigation patterns\n\n5. **Data Tables**\n   - Sortable and filterable tables\n   - Proper table semantics for screen readers\n\n6. **And many more!**\n\nWe're constantly adding new components and improving existing ones. Contributions are welcome!\n\n## Getting Started\n\nTo start using the Accessibility Toolkit in your project, install it via npm:\n\n```bash\nnpm install a11y-toolkit\n```\n\nThen, import and use the components in your React application:\n\n```jsx\nimport { Button, TextInput } from 'a11y-toolkit';\n\nfunction MyForm() {\n  return (\n    <form>\n      <TextInput label=\"Name\" id=\"name\" />\n      <Button>Submit</Button>\n    </form>\n  );\n}\n```\n\nCheck out our documentation for more detailed usage instructions and examples.\n\nLet's make the web more accessible, one component at a time!",
//   },
//   {
//     title: "Accessibility Toolkit",
//     description: "Developed an open-source toolkit of React components focused on web accessibility. Includes fully customizable, WCAG 2.1 compliant UI elements with extensive documentation.",
//     skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
//     link: "https://example.com/a11y-toolkit",
//     image: "/placeholder.svg?height=300&width=500",
//     date: "2023-08-01",
//     content: "# Accessibility Toolkit\n\nThis open-source toolkit provides a set of React components that are fully compliant with WCAG 2.1 guidelines. Our goal is to make web accessibility easier for developers to implement.\n\n## Features\n\n- **Fully Customizable Components**: Each component can be styled to fit your project's design system.\n- **WCAG 2.1 Compliant**: All components meet the latest web accessibility guidelines.\n- **Extensive Documentation**: Detailed usage instructions and best practices for each component.\n- **TypeScript Support**: Full TypeScript definitions for improved developer experience.\n- **Storybook Integration**: Interactive component library for easy testing and development.\n- **Comprehensive Test Suite**: Jest and React Testing Library tests ensuring reliability.\n\n## Components\n\n1. **Accessible Buttons**\n   - Various styles with proper ARIA attributes\n   - Keyboard navigation support\n\n2. **Form Inputs**\n   - Text inputs, checkboxes, radio buttons, and more\n   - Clear error states and helper text\n\n3. **Modal Dialogs**\n   - Keyboard trapping for improved focus management\n   - Proper ARIA roles and attributes\n\n4. **Navigation Menus**\n   - Dropdown menus with keyboard support\n   - Mobile-friendly navigation patterns\n\n5. **Data Tables**\n   - Sortable and filterable tables\n   - Proper table semantics for screen readers\n\n6. **And many more!**\n\nWe're constantly adding new components and improving existing ones. Contributions are welcome!\n\n## Getting Started\n\nTo start using the Accessibility Toolkit in your project, install it via npm:\n\n```bash\nnpm install a11y-toolkit\n```\n\nThen, import and use the components in your React application:\n\n```jsx\nimport { Button, TextInput } from 'a11y-toolkit';\n\nfunction MyForm() {\n  return (\n    <form>\n      <TextInput label=\"Name\" id=\"name\" />\n      <Button>Submit</Button>\n    </form>\n  );\n}\n```\n\nCheck out our documentation for more detailed usage instructions and examples.\n\nLet's make the web more accessible, one component at a time!",
//   }
// ]

// const EMAIL = 'your.email@example.com'

// function Resume() {
//   const aboutRef = useRef<HTMLDivElement>(null)
//   const experienceRef = useRef<HTMLDivElement>(null)
//   const projectsRef = useRef<HTMLDivElement>(null)
//   const [showContactForm, setShowContactForm] = useState(false)
//   const [showEmailToast, setShowEmailToast] = useState(false)
//   const [showContactToast, setShowContactToast] = useState(false)
//   const [activeSection, setActiveSection] = useState('')
//   const [showPopup, setShowPopup] = useState(false)
//   const [selectedItem, setSelectedItem] = useState<Experience | Project | null>(null)
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null)

//   const { theme, setTheme } = useTheme()

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: string) => {
//     if (ref.current) {
//       const yOffset = -100; 
//       const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({top: y, behavior: 'smooth'});
//       setActiveSection(section);
//     }
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setShowContactForm(false)
//     setShowContactToast(true)
//     setTimeout(() => setShowContactToast(false), 3000)
//   }

//   const copyEmailToClipboard = () => {
//     navigator.clipboard.writeText(EMAIL)
//     setShowEmailToast(true)
//     setTimeout(() => setShowEmailToast(false), 3000)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 200;
//       if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
//         setActiveSection('about');
//       }
//       if (experienceRef.current && scrollPosition >= experienceRef.current.offsetTop) {
//         setActiveSection('experience');
//       }
//       if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
//         setActiveSection('projects');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className={`min-h-screen ${ptSerif.className} transition-colors duration-300 bg-[#f5f5f0] dark:bg-[#1a1a1a] text-[#3d3223] dark:text-[#f5f5f0]`}>
//       <div className="py-12 px-6 md:px-12 relative">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
//           <div className="lg:w-1/4 lg:sticky lg:top-12 lg:self-start">
//             <div>
//               <h1 className="text-3xl font-bold mb-1">Your Name</h1>
//               <h2 className="text-lg mb-4 text-[#3d3223] dark:text-[#f5f5f0]">Senior Frontend Engineer</h2>
//             </div>
//             <p className="mb-8 text-sm leading-relaxed text-[#3d3223] dark:text-[#f5f5f0]">
//               I build pixel-perfect, engaging, and accessible digital experiences.
//             </p>
//             <nav className="mb-8">
//               <ul className="space-y-1 text-sm text-[#3d3223] dark:text-[#f5f5f0]">
//                 {['ABOUT', 'EXPERIENCE', 'PROJECTS'].map((section) => (
//                   <li 
//                     key={section}
//                     className="relative cursor-pointer group flex items-center"
//                     onClick={() => scrollToSection(section.toLowerCase() === 'about' ? aboutRef : section.toLowerCase() === 'experience' ? experienceRef : projectsRef, section.toLowerCase())}
//                   >
//                     <span 
//                       className={`w-0 h-0.5 bg-[#3d3223] dark:bg-[#f5f5f0] transition-all duration-300 mr-2 group-hover:w-8 ${activeSection === section.toLowerCase() ? 'w-8' : ''}`}
//                     ></span>
//                     <span className={`transition-colors ${activeSection === section.toLowerCase() ? 'text-[#3d3223] dark:text-[#f5f5f0]' : 'group-hover:text-[#3d3223] dark:group-hover:text-[#f5f5f0]'}`}>
//                       {section}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//             <div className="flex space-x-4 mb-6">
//               <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
//                 <Github className="w-5 h-5 text-[#3d3223] hover:text-[#3d3223] dark:text-[#f5f5f0] dark:hover:text-[#f5f5f0]" />
//               </Link>
//               <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <Linkedin className="w-5 h-5 text-[#3d3223] hover:text-[#3d3223] dark:text-[#f5f5f0] dark:hover:text-[#f5f5f0]" />
//               </Link>
//               <button onClick={copyEmailToClipboard}>
//                 <Mail className="w-5 h-5 text-[#3d3223] hover:text-[#3d3223] dark:text-[#f5f5f0] dark:hover:text-[#f5f5f0]" />
//               </button>
//             </div>
//             <div className="flex space-x-3">
//               <button
//                 onClick={() => setShowContactForm(true)}
//                 className="flex items-center space-x-1 px-3 py-1 text-sm rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors duration-300 hover:shadow-md dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700"
//               >
//                 <Send className="w-3 h-3" />
//                 <span>Contact</span>
//               </button>
//               {/* <button
//                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                 className="flex items-center space-x-1 px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-[#3d3223] dark:text-[#f5f5f0] transition-colors duration-300 hover:shadow-md"
//               >
//                 {theme === 'dark' ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
//                 <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
//               </button> */}
//               <button
//                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                 className="flex items-center space-x-1 px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-[#4a4a4a] dark:text-[#f5f5f0] transition-colors duration-300 hover:shadow-md"
//               >
//                 {theme === 'dark' ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
//                 <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
//               </button>
//             </div>
//           </div>
//           <div className="lg:w-3/4 space-y-16 leading-relaxed text-sm">
//             <div ref={aboutRef} className="mb-12">
//               <h3 className="text-xl mb-4 uppercase">
//                 About Me
//               </h3>
//               <div className="space-y-3">
//                 <p>
//                   Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an{' '}
//                   <span className="font-semibold">advertising agency</span>, a{' '}
//                   <span className="font-semibold">start-up</span>, a{' '}
//                   <span className="font-semibold">huge corporation</span>, and a{' '}
//                   <span className="font-semibold">digital product studio</span>.
//                 </p>
//                 <p>
//                   My main focus these days is building accessible user interfaces for our customers at{' '}
//                   <span className="font-semibold">Klaviyo</span>. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an{' '}
//                   <span className="font-semibold">online video course</span> that covers everything you need to know to build a web app with the Spotify API.
//                 </p>
//                 <p>
//                   When I'm not at the computer, I'm usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for{' '}
//                   <span className="font-semibold">Korok seeds</span>.
//                 </p>
//               </div>
//             </div>
//             <div ref={experienceRef} className="mb-12">
//               <h3 className="text-xl mb-4 uppercase">
//                 Experience
//               </h3>
//               <div className="space-y-8 relative">
//                 <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#3d3223] dark:bg-[#f5f5f0]"></div>
//                 {experiences.map((experience, index) => (
//                   <div 
//                     key={index}
//                     className="p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-[#2a2a2a] cursor-pointer group relative ml-6"
//                     onClick={() => {
//                       setSelectedItem(experience)
//                       setShowPopup(true)
//                     }}
//                     onMouseEnter={() => setHoveredCard(`experience-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div className="absolute left-0 top-6 transform -translate-x-[calc(0.5rem+1px)] w-2 h-2 bg-[#3d3223] dark:bg-[#f5f5f0] rounded-full"></div>
//                     <Info className="float-right w-4 h-4 text-[#3d3223] group-hover:text-[#3d3223] dark:text-[#f5f5f0] dark:group-hover:text-[#f5f5f0]" />
//                     <h4 className="text-base font-semibold mb-1 text-[#3d3223] dark:text-[#f5f5f0]">{experience.dateRange}</h4>
//                     <h5 className="text-lg font-semibold mb-2">
//                       {experience.title} · {experience.company}
//                     </h5>
//                     <p className="mb-3 text-[#3d3223] dark:text-[#f5f5f0]">{experience.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {experience.skills.map((skill) => (
//                         <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                     {hoveredCard === `experience-${index}` && (
//                       <div
//                         className="fixed z-50 pointer-events-none bg-white dark:bg-[#2a2a2a] text-[#3d3223] dark:text-[#f5f5f0] px-2 py-1 rounded shadow-md text-sm"
//                         style={{ left: cursorPosition.x + 10, top: cursorPosition.y + 10 }}
//                       >
//                         Click for more info
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div ref={projectsRef}>
//               <h3 className="text-xl mb-4 uppercase">
//                 Projects
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects.map((project, index) => (
//                   <div 
//                     key={index} 
//                     className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-[#2a2a2a] cursor-pointer"
//                     onClick={() => {
//                       setSelectedItem(project)
//                       setShowPopup(true)
//                     }}
//                     onMouseEnter={() => setHoveredCard(`project-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         layout="fill"
//                         objectFit="cover"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
//                       <p className="text-sm text-[#3d3223] dark:text-[#f5f5f0] mb-3">{project.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {project.skills.map((skill) => (
//                           <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     {hoveredCard === `project-${index}` && (
//                       <div
//                         className="fixed z-50 pointer-events-none bg-white dark:bg-[#2a2a2a] text-[#3d3223] dark:text-[#f5f5f0] px-2 py-1 rounded shadow-md text-sm"
//                         style={{ left: cursorPosition.x + 10, top: cursorPosition.y + 10 }}
//                       >
//                         Click for more info
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <footer className="mt-16 pt-6 border-t border-[#3d3223] dark:border-[#f5f5f0]">
//               <p className="text-xs text-center text-[#3d3223] dark:text-[#f5f5f0]">
//                 © {new Date().getFullYear()} Your Name. All rights reserved.
//               </p>
//             </footer>
//           </div>
//         </div>
//       </div>
//       {showContactForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Contact Me</h2>
//               <button onClick={() => setShowContactForm(false)} className="text-[#3d3223] hover:text-[#3d3223] dark:text-[#f5f5f0] dark:hover:text-[#f5f5f0]">
//                 <span className="sr-only">Close</span>
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
//               </button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-1 text-sm text-[#3d3223] dark:text-[#f5f5f0]">Name</label>
//                 <input type="text" id="name" name="name" required className="w-full p-2 text-sm border rounded bg-white dark:bg-[#1a1a1a] text-[#3d3223] dark:text-[#f5f5f0]" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-1 text-sm text-[#3d3223] dark:text-[#f5f5f0]">Email</label>
//                 <input type="email" id="email" name="email" required className="w-full p-2 text-sm border rounded bg-white dark:bg-[#1a1a1a] text-[#3d3223] dark:text-[#f5f5f0]" />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-1 text-sm text-[#3d3223] dark:text-[#f5f5f0]">Message</label>
//                 <textarea id="message" name="message" required className="w-full p-2 text-sm border rounded bg-white dark:bg-[#1a1a1a] text-[#3d3223] dark:text-[#f5f5f0]" rows={4}></textarea>
//               </div>
//               <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm">Send Message</button>
//             </form>
//           </div>
//         </div>
//       )}
//       {showPopup && selectedItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowPopup(false)}>
//           <div className="bg-white dark:bg-[#2a2a2a] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
//             <div className="overflow-y-auto" style={{ maxHeight: '90vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//               <style jsx>{`
//                 div::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}</style>
//               <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
//                 {'company' in selectedItem && <p className="text-lg text-[#3d3223] dark:text-[#f5f5f0] mb-2">{selectedItem.company}</p>}
//                 <p className="text-sm text-[#3d3223] dark:text-[#f5f5f0] mb-4">
//                   {'dateRange' in selectedItem ? selectedItem.dateRange : `Date: ${selectedItem.date}`}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {selectedItem.skills.map((skill) => (
//                     <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium ${skillColors[skill]} hover:shadow-md transition-shadow duration-300`}>
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="prose dark:prose-invert max-w-none text-sm">
//                 <ReactMarkdown
//                     components={{
//                       h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-3" {...props} />,
//                       h2: ({node, ...props}) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
//                       h3: ({node, ...props}) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
//                       p: ({node, ...props}) => <p className="mb-3" {...props} />,
//                       ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-3" {...props} />,
//                       ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-3" {...props} />,
//                       li: ({node, ...props}) => <li className="mb-1" {...props} />,
//                       code: ({node, className, children, ...props}) => {
//                         const match = /language-(\w+)/.exec(className || '')
//                         return match ? (
//                           <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-3 overflow-x-auto">
//                             <code className={className} {...props}>
//                               {children}
//                             </code>
//                           </pre>
//                         ) : (
//                           <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" {...props}>
//                             {children}
//                           </code>
//                         )
//                       },
//                     }}
//                   >
//                     {selectedItem.content}
//                   </ReactMarkdown>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       <AnimatePresence>
//         {showEmailToast && (
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed bottom-4 right-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md z-50"
//           >
//             Email copied to clipboard!
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {showContactToast && (
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50"
//           >
//             Your message has been sent successfully!
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default function PortfolioPage() {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       <Resume />
//     </ThemeProvider>
//   )
// }
















'use client'

import { useRef, useState, useEffect } from 'react'
import { Github, Linkedin, Codepen, Instagram, Twitter, Headphones, Moon, Sun, X, Send, ExternalLink } from 'lucide-react'
import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const skillColors: { [key: string]: string } = {
  React: 'bg-blue-100 text-blue-800',
  TypeScript: 'bg-green-100 text-green-800',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  'Next.js': 'bg-black text-white',
  GraphQL: 'bg-pink-100 text-pink-800',
  Redux: 'bg-purple-100 text-purple-800',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
  WCAG: 'bg-orange-100 text-orange-800',
  'Spotify API': 'bg-green-100 text-green-800',
  OAuth: 'bg-red-100 text-red-800',
  Storybook: 'bg-indigo-100 text-indigo-800',
  Jest: 'bg-red-100 text-red-800',
}

const projects = [
  {
    title: "Spotify Web App Course",
    description: "Created a comprehensive video course teaching developers how to build a web application using the Spotify API. Covers React, API integration, authentication, and deployment.",
    skills: ['React', 'Spotify API', 'OAuth'],
    link: "https://example.com/spotify-course"
  },
  {
    title: "Accessibility Toolkit",
    description: "Developed an open-source toolkit of React components focused on web accessibility. Includes fully customizable, WCAG 2.1 compliant UI elements with extensive documentation.",
    skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
    link: "https://example.com/a11y-toolkit"
  }
]

export default function ArchivedPortfolioPage() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: string) => {
    if (ref.current) {
      const yOffset = -100; 
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      setActiveSection(section);
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowContactForm(false)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

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

  const bgColor = darkMode ? '#2c2c2c' : '#f4f1e8'
  const textColor = darkMode ? '#f4f1e8' : '#2c2c2c'
  const headingColor = darkMode ? '#ffffff' : '#1a1a1a'
  const subHeadingColor = darkMode ? '#cccccc' : '#4a4a4a'

  return (
    <div className={`min-h-screen py-24 px-8 md:px-16 relative ${ptSerif.className} transition-colors duration-300`} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
        <div className="lg:w-1/3 lg:fixed lg:max-w-[340px]">
          <div>
            <h1 className="text-4xl font-bold mb-1" style={{ color: headingColor }}>Your Name</h1>
            <h2 className="text-xl mb-6" style={{ color: subHeadingColor }}>Senior Frontend Engineer</h2>
          </div>
          <p className="mb-12 leading-relaxed" style={{ color: subHeadingColor }}>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <nav className="mb-12">
            <ul className="space-y-1 text-lg" style={{ color: subHeadingColor }}>
              {['ABOUT', 'EXPERIENCE', 'PROJECTS'].map((section) => (
                <li 
                  key={section}
                  className="relative cursor-pointer group"
                  onClick={() => scrollToSection(section.toLowerCase() === 'about' ? aboutRef : section.toLowerCase() === 'experience' ? experienceRef : projectsRef, section.toLowerCase())}
                >
                  <span className={`transition-colors ${activeSection === section.toLowerCase() ? 'text-[#1a1a1a] dark:text-[#ffffff]' : 'group-hover:text-[#1a1a1a] dark:group-hover:text-[#ffffff]'}`}>
                    {section}
                  </span>
                  <span 
                    className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1a1a1a] dark:bg-[#ffffff] transition-all duration-300 ${activeSection === section.toLowerCase() ? 'w-12' : 'group-hover:w-6'}`}
                  ></span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-5 mb-6">
            <Github className="w-6 h-6 text-[#666666] hover:text-[#1a1a1a] dark:hover:text-[#ffffff] cursor-pointer" />
            <Linkedin className="w-6 h-6 text-[#666666] hover:text-[#1a1a1a] dark:hover:text-[#ffffff] cursor-pointer" />
            <Codepen className="w-6 h-6 text-[#666666] hover:text-[#1a1a1a] dark:hover:text-[#ffffff] cursor-pointer" />
            <Instagram className="w-6 h-6 text-[#666666] hover:text-[#1a1a1a] dark:hover:text-[#ffffff] cursor-pointer" />
            <Twitter className="w-6 h-6 text-[#666666] hover:text-[#1a1a1a] dark:hover:text-[#ffffff] cursor-pointer" />
            <Headphones className="w-6 h-6 text-[#666666] hover:text-[#1a1a1a] dark:hover:text-[#ffffff] cursor-pointer" />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowContactForm(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors duration-300"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1a1a1a] dark:bg-[#f4f1e8] text-[#f4f1e8] dark:text-[#1a1a1a] transition-colors duration-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
        <div className="lg:w-2/3 lg:ml-auto space-y-20 leading-relaxed">
          <div ref={aboutRef} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 relative" style={{ color: headingColor }}>
              About Me
              <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-[#1a1a1a] dark:bg-[#ffffff]"></span>
            </h3>
            <div className="space-y-4">
              <p>
                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an{' '}
                <span className="font-semibold" style={{ color: subHeadingColor }}>advertising agency</span>, a{' '}
                <span className="font-semibold" style={{ color: subHeadingColor }}>start-up</span>, a{' '}
                <span className="font-semibold" style={{ color: subHeadingColor }}>huge corporation</span>, and a{' '}
                <span className="font-semibold" style={{ color: subHeadingColor }}>digital product studio</span>.
              </p>
              <p>
                My main focus these days is building accessible user interfaces for our customers at{' '}
                <span className="font-semibold" style={{ color: subHeadingColor }}>Klaviyo</span>. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an{' '}
                <span className="font-semibold" style={{ color: subHeadingColor }}>online video course</span> that covers everything you need to know to build a web app with the Spotify API.
              </p>
              <p>
                When I'm not at the computer, I'm usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for{' '}
                <span className="font-semibold" style={{ color: subHeadingColor }}>Korok seeds</span>.
              </p>
            </div>
          </div>
          <div ref={experienceRef} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 relative" style={{ color: headingColor }}>
              Experience
              <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-[#1a1a1a] dark:bg-[#ffffff]"></span>
            </h3>
            <div className="space-y-12">
              <div className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" style={{ backgroundColor: darkMode ? '#3a3a3a' : '#ffffff' }}>
                <h3 className="text-base font-semibold mb-1" style={{ color: subHeadingColor }}>2024 — PRESENT</h3>
                <h4 className="text-xl font-semibold mb-2" style={{ color: headingColor }}>
                  Senior Frontend Engineer, Accessibility · Klaviyo →
                </h4>
                <p className="mb-4" style={{ color: subHeadingColor }}>
                  Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'GraphQL', 'WCAG'].map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${skillColors[skill]}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" style={{ backgroundColor: darkMode ? '#3a3a3a' : '#ffffff' }}>
                <h3 className="text-base font-semibold mb-1" style={{ color: subHeadingColor }}>2022 — 2024</h3>
                <h4 className="text-xl font-semibold mb-2" style={{ color: headingColor }}>
                  Frontend Engineer · TechCorp Inc. →
                </h4>
                <p className="mb-4" style={{ color: subHeadingColor }}>
                  Developed and maintained responsive web applications using React and Next.js. Collaborated with UX designers to implement pixel-perfect, accessible user interfaces. Optimized application performance and improved load times by 40%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Redux', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${skillColors[skill]}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div ref={projectsRef}>
            <h3 className="text-2xl font-bold mb-6 relative" style={{ color: headingColor }}>
              Projects
              <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-[#1a1a1a] dark:bg-[#ffffff]"></span>
            </h3>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative" style={{ backgroundColor: darkMode ? '#3a3a3a' : '#ffffff' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                  </a>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: headingColor }}>{project.title}</h4>
                  <p className="mb-4" style={{ color: subHeadingColor }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${skillColors[skill]}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-center" style={{ color: subHeadingColor }}>
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold" style={{ color: headingColor }}>Contact Me</h2>
              <button onClick={() => setShowContactForm(false)}>
                <X className="w-6 h-6" style={{ color: subHeadingColor }} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1" style={{ color: subHeadingColor }}>Name</label>
                <input type="text" id="name" name="name" required className="w-full p-2 border rounded" style={{ backgroundColor: bgColor, color: textColor }} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1" style={{ color: subHeadingColor }}>Email</label>
                <input type="email" id="email" name="email" required className="w-full p-2 border rounded" style={{ backgroundColor: bgColor, color: textColor }} />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1" style={{ color: subHeadingColor }}>Message</label>
                <textarea id="message" name="message" required className="w-full p-2 border rounded" rows={4} style={{ backgroundColor: bgColor, color: textColor }}></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      )}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md">
          Your message has been sent successfully!
        </div>
      )}
    </div>
  )
}