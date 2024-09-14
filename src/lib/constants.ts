import { PT_Serif } from "next/font/google"

export const ptSerif = PT_Serif({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const skillColors: { [key: string]: string } = {
  React: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
  TypeScript: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
  'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
  GraphQL: 'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100',
  Redux: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-100',
  WCAG: 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100',
  'Spotify API': 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  OAuth: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
  Storybook: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100',
  Jest: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
}

export const HEADINGS = {
  about: 'ABOUT',
  experience: 'EXPERIENCE',
  projects: 'PROJECTS',
}

export const EMAIL = 'arvindr03@gmail.com'
export const NAME = 'Arvind Raghu'
export const TITLE = 'University of Cambridge BA Hons Computer Science, Final Year'
export const SINGLE_LINE = 'I build models and software that are elegant and impactful, and help CS students achieve their potential.'
export const GITHUB_LINK = 'https://github.com/arvindr03'
export const LINKEDIN_LINK = 'https://linkedin.com/in/ArvindR03'

export interface ExperienceInterface {
  title: string;
  company: string;
  description: string;
  skills: string[];
  dateRange: string;
  image: string;
  content: string;
}

export interface ProjectInterface {
  title: string;
  description: string;
  skills: string[];
  link: string;
  image: string;
  date: string;
  content: string;
}

export const experiences: ExperienceInterface[] = [
  {
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ['React', 'TypeScript', 'GraphQL', 'WCAG'],
    dateRange: "2024 — PRESENT",
    image: "/placeholder.svg?height=300&width=500",
    content: `
# Senior Frontend Engineer, Accessibility at Klaviyo

As a Senior Frontend Engineer specializing in Accessibility at Klaviyo, my role involves:

## Key Responsibilities

1. **Component Development**
   - Build and maintain critical components for Klaviyo's frontend
   - Ensure components are reusable, performant, and accessible

2. **Accessibility Advocacy**
   - Implement best practices in web accessibility
   - Educate and guide other team members on accessibility standards

3. **Cross-functional Collaboration**
   - Work closely with developers, designers, and product managers
   - Ensure accessibility is considered at all stages of product development

4. **Technical Leadership**
   - Provide technical guidance and mentorship to junior engineers
   - Contribute to architectural decisions and code reviews

5. **Continuous Improvement**
   - Stay updated with the latest accessibility guidelines and technologies
   - Implement and advocate for accessibility testing processes

This role allows me to combine my passion for frontend development with my commitment to creating inclusive digital experiences for all users.
`,
  },
  {
    title: "Frontend Engineer",
    company: "TechCorp Inc.",
    description: "Developed and maintained responsive web applications using React and Next.js. Collaborated with UX designers to implement pixel-perfect, accessible user interfaces. Optimized application performance and improved load times by 40%.",
    skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
    dateRange: "2022 — 2024",
    image: "/placeholder.svg?height=300&width=500",
    content: `
# Frontend Engineer at TechCorp Inc.

During my time as a Frontend Engineer at TechCorp Inc., I focused on:

## Key Achievements

1. **Web Application Development**
   - Built responsive web applications using React and Next.js
   - Implemented state management solutions using Redux

2. **UI/UX Collaboration**
   - Worked closely with UX designers to create pixel-perfect interfaces
   - Ensured accessibility standards were met in all user interfaces

3. **Performance Optimization**
   - Improved application load times by 40% through various optimization techniques
   - Implemented code splitting and lazy loading to enhance performance

4. **Tailwind CSS Implementation**
   - Adopted Tailwind CSS for efficient and consistent styling across projects
   - Created a custom design system using Tailwind's configuration

5. **Agile Development**
   - Participated in agile ceremonies and contributed to sprint planning
   - Collaborated effectively with backend developers and QA engineers

This role significantly enhanced my skills in modern frontend development and taught me the importance of performance optimization in large-scale applications.
`,
  }
]

export const projects: ProjectInterface[] = [
  {
    title: "Spotify Web App Course",
    description: "Created a comprehensive video course teaching developers how to build a web application using the Spotify API. Covers React, API integration, authentication, and deployment.",
    skills: ['React', 'Spotify API', 'OAuth'],
    link: "https://example.com/spotify-course",
    image: "/placeholder.svg?height=300&width=500",
    date: "2023-05-15",
    content: `
# Spotify Web App Course

This course covers everything you need to know to build a web application using the Spotify API. Throughout the course, you'll learn:

## Key Topics

1. **Setting up your development environment**
   - Installing necessary tools and dependencies
   - Creating a new React project

2. **Understanding the Spotify API**
   - Overview of available endpoints
   - Authentication methods

3. **Building the user interface**
   - Creating reusable React components
   - Implementing responsive design with CSS

4. **Integrating with the Spotify API**
   - Making API requests
   - Handling responses and errors

5. **Implementing user authentication**
   - Setting up OAuth 2.0
   - Managing user sessions

6. **Advanced features**
   - Real-time updates with WebSockets
   - Caching strategies for improved performance

7. **Testing and deployment**
   - Writing unit and integration tests
   - Deploying your app to a hosting platform

By the end of this course, you'll have a fully functional Spotify web app and the skills to build many more exciting projects!
`,
  },
  {
    title: "Accessibility Toolkit",
    description: "Developed an open-source toolkit of React components focused on web accessibility. Includes fully customizable, WCAG 2.1 compliant UI elements with extensive documentation.",
    skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
    link: "https://example.com/a11y-toolkit",
    image: "/placeholder.svg?height=300&width=500",
    date: "2023-08-01",
    content: `
# Accessibility Toolkit

This open-source toolkit provides a set of React components that are fully compliant with WCAG 2.1 guidelines. Our goal is to make web accessibility easier for developers to implement.

## Features

- **Fully Customizable Components**: Each component can be styled to fit your project's design system.
- **WCAG 2.1 Compliant**: All components meet the latest web accessibility guidelines.
- **Extensive Documentation**: Detailed usage instructions and best practices for each component.
- **TypeScript Support**: Full TypeScript definitions for improved developer experience.
- **Storybook Integration**: Interactive component library for easy testing and development.
- **Comprehensive Test Suite**: Jest and React Testing Library tests ensuring reliability.

## Components

1. **Accessible Buttons**
   - Various styles with proper ARIA attributes
   - Keyboard navigation support

2. **Form Inputs**
   - Text inputs, checkboxes, radio buttons, and more
   - Clear error states and helper text

3. **Modal Dialogs**
   - Keyboard trapping for improved focus management
   - Proper ARIA roles and attributes

4. **Navigation Menus**
   - Dropdown menus with keyboard support
   - Mobile-friendly navigation patterns

5. **Data Tables**
   - Sortable and filterable tables
   - Proper table semantics for screen readers

6. **And many more!**

We're constantly adding new components and improving existing ones. Contributions are welcome!

## Getting Started

To start using the Accessibility Toolkit in your project, install it via npm:

\`\`\`bash
npm install a11y-toolkit
\`\`\`

Then, import and use the components in your React application:

\`\`\`jsx
import { Button, TextInput } from 'a11y-toolkit';

function MyForm() {
  return (
    <form>
      <TextInput label="Name" id="name" />
      <Button>Submit</Button>
    </form>
  );
}
\`\`\`

Check out our documentation for more detailed usage instructions and examples.

Let's make the web more accessible, one component at a time!
`,
  }
]

export const ABOUT_ME_MARKDOWN = `
Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an **advertising agency**, a **start-up**, a **huge corporation**, and a **digital product studio**.

My main focus these days is building accessible user interfaces for our customers at **Klaviyo**. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an **online video course** that covers everything you need to know to build a web app with the Spotify API.

When I'm not at the computer, I'm usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for **Korok seeds**.
`;
