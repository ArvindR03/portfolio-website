import { PT_Serif } from "next/font/google"

export const ptSerif = PT_Serif({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const skillColors: { [key: string]: string } = {
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

export const HEADINGS = {
  about: 'ABOUT',
  experience: 'EXPERIENCE',
  projects: 'PROJECTS',
}

// removed email for security reasons
export const EMAIL = ''
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
    title: "iOS Developer Intern, Design System",
    company: "Revolut",
    description: "Created proprietary module to extract metadata from media, to conditionally and efficiently render videos and photos in-app for 30+ million iOS users.",
    skills: ['Swift', 'UIKit'],
    dateRange: "JULY - SEPTEMBER 2024",
    image: "/images/revolut-logo.png",
    content: `
## Summary

I worked in conjunction with the design team to create a module that would extract metadata from media, to conditionally and efficiently render videos and photos in-app for 30+ million iOS users.

The module was built with AVFoundation in UIKit, and will be used across the whole app in development to render videos and photos based on the metadata that the Design team add.

## Key Skills

My key skills / improvements from the internship were:

💻 **Swift + UIKit Development** - this was my first time ever working in Swift, and I tackled complex memory and concurrency topics daily in order to build my module.

⚙️ **Large Scale App Development** - I learned so much about how to develop software at scale, proper conduct for code reviews and CI/CD, and it was very insightful to see what goes into maintaining a globally scaled app.

🤝 **Cross-Department Collaboration** - my work involved close collaboration with the design team, and I went out of my way to help people in other projects e.g. people working with SQL in Operations. I was able to effectively integrate myself into my team to aid efficiency.
`,
  },
  {
    title: "Braille Auto-Predictive ML REST API",
    company: "Paige Braille",
    description: "Conducted ML / AI model exploration to develop and deploy an ensemble model for Braille next character prediction, to upgrade learning experience for 100s of vision impaired users.",
    skills: ['Python', 'Machine Learning', 'Artificial Intelligence', "API"],
    dateRange: "JANUARY - MARCH 2024",
    image: "/images/paige-braille-logo.jpeg",
    content: `
## Summary

I worked with a team of 6 to develop an ensemble model for Braille next character prediction, to upgrade the learning experience for 100s of vision impaired users.

Researching and testing 10+ models, I created a custom stacked Random Forest on temperature sampled LSTM and Fivegram models to boost prediction accuracy from 79% to 94%.

## Key Skills

My key skills / improvements from the project were:

🤖 **ML / AI Exploration** - it was fascinating to research several different models and techniques, and I was able to use these insights to significantly boost the model's performance and thus experience for 100s of users.

⚙️ **Client Understanding** - as a team we had regular catch-ups with the client to understand their requirements and expectations, and we were able to use this feedback to iteratively improve the product.
`,
},
{
   title: "Quantitative Software Developer Intern",
   company: "Skillikz Ltd.",
   description: "Independently developed CRM Python model, implementing DCF, BG-NBD and more models for CLV analysis to provide data-driven customer segment analysis and marketing prompts.",
   skills: ['Python', 'Machine Learning', 'Quant'],
   dateRange: "AUGUST - SEPTEMBER 2023",
   image: "/images/skillikz-logo.jpeg",
   content: `
## Summary

I worked with a team of 6 to develop an ensemble model for Braille next character prediction, to upgrade the learning experience for 100s of vision impaired users.

Researching and testing 10+ models, I created a custom stacked Random Forest on temperature sampled LSTM and Fivegram models to boost prediction accuracy from 79% to 94%.

## Key Skills

My key skills / improvements from the project were:

🤖 **ML / AI Exploration** - it was fascinating to research several different models and techniques, and I was able to use these insights to significantly boost the model's performance and thus experience for 100s of users.

⚙️ **Client Understanding** - as a team we had regular catch-ups with the client to understand their requirements and expectations, and we were able to use this feedback to iteratively improve the product.
`,
 },
 {
    title: "Cofounder, CS Specialist Mentor and CTO",
    company: "PersonalPath",
    description: "Cofounded a startup to guide students through their university applications, with alumni at Oxford, Cambridge, Imperial and more. Deployed elegant Next.js website: **[www.personalpath.co.uk](https://www.personalpath.co.uk)**",
    skills: ['Leadership', 'Next.js', 'TypeScript'],
    dateRange: "JULY 2023 - PRESENT",
    image: "/images/personalpath-logo.jpg",
    content: `
 ## Summary
 
 With my 3 best friends, I cofounded a startup that is a sixth form student's comprehensive guide to UCAS university applications. Over the years we have gotten people into all of the UK's top 10 universities, and made 10000s of online impressions.
 
 As part of this, I created our website **[www.personalpath.co.uk](https://www.personalpath.co.uk)**
 
 ## Key Skills
 
 My key skills / improvements from PersonalPath are:
 
🌐 **Full Stack Deployment** - this project really solidified my confidence in quickly and efficiently building elegant websites to deployment.
 
 👏 **Entrepreneurship** - we managed to rapidly grow our company within the span of a year, and learnt a lot about marketing, client management and business along the way.
 `,
  }
]

export const projects: ProjectInterface[] = [
  {
    title: "Sailing Weather JavaFX Mobile App",
    description: "Developed a mobile app for sailors to access weather forecasts and safety info, with agile development and proper user research and evaluation methods.",
    skills: ['Java', 'Agile', 'Figma', "API"],
    link: "",
    image: "/images/sailing-banner.jpg",
    date: "MAY - JUNE 2023",
    content: `
In a team of 5, we developed a mobile app for sailors to access sailing-specific weather forecast information, utilizing the OpenMeteo API.

We created user-centred Figma prototypes, and conducted various user research and heuristic evaluation methods to ensure the quality of the product.

## Key Skills

My key skills from this project were:

💻 **Java Development** - I gained experience using Java in a team development environment with CI/CD pipelines, strengthening my confidence and skill with the language.

📲 **User-Centred Design** - as a team, we put the user at the heart of the product, and iterating over feedback in the structured manner we did was insightful into a development design process.

🕜 **Agile Development** - working in a 2 week sprint cycle really honed my ability to deliver software quickly and effectively, and I became very accustomed to the process of development and deployment.
`,
  },
  {
    title: "Project Silverline",
    description: "Created a React.js full stack blog website for short form articles in Year 12, and got 10+ students and teachers to post and interact with users on the platform",
    skills: ['React.js', 'PostgreSQL', 'Firebase Auth', 'Heroku'],
    link: "",
    image: "/images/blog-banner.png",
    date: "JUNE 2021",
    content: `
In Year 12, for my first major project, I created a full stack MERN website for short form academic articles in the style of a Twitter format.

As part of this project, I implemented Firebase Authentication, and hosted the website on the Heroku free tier.

## Key Skills

My key skills / takeaways from this project were:

📚 **Full Stack Development** - this was my first time implementing different microservices such as the Azure based PostgreSQL instance, and linking them all together to make a website. It was a very rewarding process!

👥 **Entrepreneurship** - I was the first person in my school to create a website like this, and I had to learn how to market and sell the product to get people to use it. It was very rewarding to see people engage with the product and get used to the new way of consuming content.
`,
  },
{
   title: "E-Commerce Distributed Express.js REST API",
   description: "Deployed a secure example e-commerce REST API with Express.js, a MongoDB Atlas DB, and secure JWT authentication.",
   skills: ['Express.js', 'MongoDB', 'JWT', "API"],
   link: "",
   image: "/images/e-commerce-banner.jpeg",
   date: "MAY - JUNE 2023",
   content: `
As an exercise to learn about various topics, I created a secure e-commerce API in Express.js, deployed on Azure with Web App, and a complementary MongoDB Atlas database to store information about buyers, sellers and products.

The API was designed to be used as a scalable distributed system for a client such as Depop.

## Key Skills

My key skills / takeaways from this project were:

💻 **Security-Based Design** - the focus of this project was on the security and role-based access of the API, allowing different permissions for buyers, sellers and viewers, and as such it was a valuable exercise to implement.

📲 **Microservice Development** - it was important to design the API as a scalable microservice system, and I learnt a lot about how to do this through this project.
`,
},
{
  title: "Sorting Visualizer in Pygame",
  description: "Created a sorting algorithm visualizer in Python to display the time efficiency of different algorithms.",
  skills: ['Python', 'Algorithms'],
  link: "",
  image: "/images/sorting-banner.png",
  date: "APRIL 2020",
  content: `
I created a sorting algorithm visualizer in Python to display the time efficiency of different algorithms.

## Key Skills

My key skills / takeaways from this project were:

💻 **Python Development** - by this point, I had solidified my experience in Python, and was extremely confident in the language.

🧠 **Algorithms** - I learnt a lot about the efficiency of different sorting algorithms, and visualizing this to the user made it easier to understand.
`,
},
{
 title: "Secure Voting Blockchain with Multithreaded Sockets",
 description: "Deployed a secure blockchain intended for use in a voting system, with working implementations of wallets, signatures, encryption, proof of work consensus algorithms and even fast multithreaded networking.",
 skills: ['Python', 'Blockchain', 'Multithreading', "Sockets"],
 link: "",
 image: "/images/blockchain-banner.jpeg",
 date: "DECEMBER 2023",
 content: `
I created a secure blockchain intended for use in a voting system, with working implementations of wallets, signatures, encryption, proof of work consensus algorithms and even fast multithreaded networking.

This exercise was very useful to understand the inner workings of blockchain technology, and to understand how to implement complex algorithms. In addition it was a nice touch to implement sockets to allow node interaction, and multithreading to make this computing faster.

## Key Skills

My key skills / takeaways from this project were:

🧱 **Blockchain Development** - through this project I understood vital concepts such as hashing and proof of work in blockchain systems for security.

🏎️ **Multithreading for Speed** - it was useful to implement my multithreading and concurrency knowledge from my university course to speed up computing here by up to 5x.
`,
},
{
  title: "Handwritten AI Digit Recognizer",
  description: "Trained a Tensorflow neural network to recognize digits written in a Tkinter GUI in real time, with 99% accuracy.",
  skills: ['Tensorflow', 'Artificial Intelligence'],
  link: "",
  image: "/images/digit-banner.png",
  date: "JANUARY 2021",
  content: `
I created a neural network using Tensorflow to recognize digits written in a Tkinter GUI in real time.

## Key Skills

My key skills / takeaways from this project were:

📚 **Neural Network Training + Testing** - this was my first time implementing the training and testing process known in Machine Learning, in a project that I was unfamiliar with, solidifying my ML skills.
`,
},
]

export const ABOUT_ME_MARKDOWN = `
👋 Hey there! I'm Arvind, a **final year Computer Science student at the University of Cambridge**, and a **software / machine learning engineer**, having worked with startups such as **Paige Braille**, and big names such as **Revolut**, alike.

My introduction to computer science was when my dad showed me how he worked with financial databases in SQL Server when I was 12 years old (quite an unconventional first language). Since then, I've been creating projects and working in teams to **create an impact with my technological knowledge**.

Apart from programming, I am a **huge music fan** (🎵 my favourite album is The Off Season by J. Cole), I play **badminton**, and I am a **boxing enthusiast**!

I'm always looking for opportunities to push myself outside of my comfort zone and create an impact, so **please get in touch** if you'd like to work together! If you'd like to learn more about my experience, have a look below, and reach out to me to find out more 😎
`;

export const WEBSITE_METADATA = {
  title: "Arvind Raghu",
  description: "Hey there! I'm Arvind, a final year Cambridge Computer Science student and software + machine learning engineer.",
}
