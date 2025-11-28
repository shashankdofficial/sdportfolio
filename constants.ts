import { SkillCategory, Experience, Project, EducationItem, Achievement, ServiceCategoryData } from './types';

export const PROFILE = {
  name: 'Shashank Dubey',
  title: 'MERN Developer | Java Backend',
  image: '../assets/profile/shashankdubey.png',
  bio: `Versatile software engineer with 2.5+ years of experience building scalable, high-impact applications using both Java (Spring Boot) and Node.js/Express. Skilled in designing secure REST APIs, data modeling with PostgreSQL/MySQL, and implementing performance optimizations. Experienced in front-end integration with React/Next.js and deploying applications on AWS. Known for delivering clean, maintainable code.`,
  contact: {
    email: 'allyouget14@gmail.com',
    phone: '7905096489',
    location: 'Gurugram, Haryana, India',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/shashankdofficial',
    github: 'https://github.com/shashankdofficial',
  },
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Java Backend',
    skills: [{ name: 'Java (Core & Adv)' }, { name: 'Spring Boot' }, { name: 'Maven' }],
  },
  {
    category: 'Node.js (Full Stack)',
    skills: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'React.js' }, { name: 'Next.js' }],
  },
  {
    category: 'Architecture & Database',
    skills: [{ name: 'MVC' }, { name: 'MySQL' }, { name: 'PostgreSQL' }, { name: 'MongoDB' }],
  },
  {
    category: 'Additional Tools & Tech',
    skills: [{ name: 'Redis' }, { name: 'AWS' }, { name: 'Git' }, { name: 'Docker (Basic)' }],
  },
  {
    category: 'Soft Skills',
    skills: [{ name: 'Team Leading' }, { name: 'Communication' }, { name: 'Problem Solving' }, { name: 'Time Management' }],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'HRIS Portal (Bethel)',
    company: 'STREAMS Solutions',
    period: 'Full-time',
    description: [
      'Designed and developed backend REST APIs for PMO, leave, attendance, and performance review modules.',
      'Implemented role-based authentication and authorization.',
      'Integrated Redis for caching and improving response times.',
      'Built reusable components for the React.js front end.',
    ],
    techStack: ['Node.js', 'Express.js', 'React.js', 'Redis', 'REST APIs', 'Git'],
  },
  {
    role: 'IT Asset Management (SEIU)',
    company: 'STREAMS Solutions',
    period: 'Full-time',
    description: [
      'Developed backend services for asset creation, assignment, and inventory tracking.',
      'Designed APIs following MVC architecture with Spring Boot.',
      'Implemented database schemas and optimized SQL queries.',
      'Built asset assignment workflows integrated with React front end.',
    ],
    techStack: ['Java', 'Spring Boot', 'Maven', 'MVC', 'React.js', 'SQL', 'Git'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'AI App with Google Gemini API',
    platform: 'Personal Project',
    overview: 'A Next.js web app using Google Gemini API to generate AI-powered images and answer queries.',
    features: [
        'Accepts user prompts and fetches text or image responses from the Gemini API.',
        'Fast and responsive UI optimized for a smooth user experience.'
    ],
    techStack: ['Next.js', 'Google Gemini API', 'JavaScript', 'Git'],
  },
  {
    title: 'VS Code AI Extension (Chat with Ollama Models)',
    platform: 'Personal Project',
    overview: 'A custom VS Code extension enabling users to interact with AI models hosted on an internal Ollama server.',
    features: [
        'Select available models from the Ollama server.',
        'Query AI models directly inside VS Code.',
        'Fetch real-time information using the Serper API for internet integration.'
    ],
    techStack: ['JavaScript', 'VS Code Extension API', 'Ollama Server', 'Serper API'],
  },
];

export const SERVICES_DATA: ServiceCategoryData[] = [
    {
        title: 'Website Packages',
        packages: [
            {
                title: 'Starter Package',
                subtitle: 'Beginner / Basic Plan',
                description: 'For small businesses or startups who want an online presence.',
                features: [
                    'Single-page portfolio or business site',
                    'Responsive layout (mobile-friendly)',
                    'Basic contact form & map integration',
                    'Hosted on shared or basic AWS setup',
                ],
                delivery: '5–7 days',
                cost: '₹8,000 – ₹12,000',
            },
            {
                title: 'Professional Package',
                subtitle: 'Medium / Growth Plan',
                description: 'For growing businesses needing dynamic features.',
                features: [
                    'Multi-page website with CMS integration',
                    'Role-based dashboards (admin/user)',
                    'Dynamic data fetching via APIs',
                    'SEO optimized',
                    'Basic AI or chatbot integration (optional)',
                ],
                delivery: '10–14 days',
                cost: '₹20,000 – ₹30,000',
            },
            {
                title: 'Enterprise Package',
                subtitle: 'Advanced / Ultimate Plan',
                description: 'For established brands needing scalable, high-performance systems.',
                features: [
                    'Custom architecture (Microservices, Cloud scaling)',
                    'API development (Java/Node.js)',
                    'AI Integrations (Ollama, Gemini, or Serper)',
                    'Secure authentication & role-based access',
                    'Dashboard analytics & automation',
                    'DevOps support, deployment on AWS',
                ],
                delivery: '20–30 days',
                cost: '₹50,000 – ₹80,000',
            },
        ]
    },
    {
        title: 'Custom Web Solutions',
        packages: [
            {
                title: 'Personal Portfolio Websites',
                description: 'Suitable for freelancers, developers, or artists.',
                features: ['Single-page design with responsive layout and contact form.'],
                cost: '₹7,000 – ₹10,000',
            },
            {
                title: 'Business & Company Websites',
                description: 'Includes service pages, contact forms, testimonials, and analytics integration.',
                features: ['SEO optimized with custom domain and hosting setup.'],
                cost: '₹15,000 – ₹25,000',
            },
            {
                title: 'E-commerce Websites',
                description: 'Product listings, shopping cart, secure checkout, and admin dashboard.',
                features: ['Payment gateway integration and inventory management.'],
                cost: '₹40,000 – ₹60,000',
            },
             {
                title: 'AI-Powered Web Apps',
                description: 'Integrate AI chatbots, Gemini/Ollama APIs, and automation workflows.',
                features: ['Custom-built dashboards for data insights.'],
                cost: '₹60,000 – ₹90,000',
            },
            {
                title: 'Custom ERP / Internal Tools',
                description: 'Designed for enterprise teams (HR, IT, PMO tools).',
                features: ['Role-based modules, data analytics, and performance tracking.'],
                cost: '₹80,000 – ₹1,20,000',
            },
        ]
    }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'Master of Computer Application (MCA)',
        institution: 'Maharishi University of Information technology',
        period: '2021 - 2023'
    },
    {
        degree: 'Java Backend Development',
        institution: 'Masai School',
        period: '2022'
    },
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'The Study Hall College',
        period: '2018 - 2021'
    }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
    { name: 'Rockstar Rookie Award', issuer: 'STREAMS' },
    { name: 'Star Award (2 Times)', issuer: 'STREAMS' },
    { name: 'N.S.D.C Certificate', issuer: 'Masai' },
    { name: 'NCC \'C\' Certificate', issuer: 'Govt. of India' }
];