export const profileData = {
  name: 'Mohd Danish Shaikh',
  title: 'Java / Full-Stack Software Engineer',
  avatar: '/MohdDanishShaikh_ProfilePic.png',
  email: 'skmohddanish@gmail.com',
  phone: '+91-9152460510',
  birthday: '',
  location: 'Thane, Maharashtra, India',
  social: {
    github: '',
    linkedin: 'https://linkedin.com/in/shaikhmohddanish',
  },
  links: [
    { label: 'ventridag.tech', url: 'https://ventridag.tech' },
    { label: 'app.ventridag.tech', url: 'https://app.ventridag.tech' },
  ],
}

type AboutService = {
  icon: 'Zap' | 'Code' | 'PenTool' | 'Smartphone'
  title: string
  description: string
}

type Testimonial = {
  avatar?: string
  name: string
  text: string
}

type Client = {
  name: string
  logo?: string
}

export const aboutData: {
  description: string[]
  services: AboutService[]
  testimonials: Testimonial[]
  clients: Client[]
} = {
  description: [
    "Java / Full-Stack Software Engineer with 3+ years of experience building scalable backend and full-stack applications. Strong background in Spring Boot, REST APIs, microservice-based systems, and frontend integration using React and Next.js.",
    'Experienced in AI-powered analytics, data visualization, and secure enterprise application development.',
  ],
  services: [
    {
      icon: 'Zap',
      title: 'Backend (Spring Boot)',
      description: 'Spring Boot, Spring Security, REST APIs, JPA/Hibernate, microservices, JWT, and RBAC.',
    },
    {
      icon: 'Code',
      title: 'Frontend (React / Next.js)',
      description: 'React, Next.js, TypeScript, Tailwind CSS, and secure frontend-to-API integration.',
    },
    {
      icon: 'PenTool',
      title: 'AI & Analytics',
      description: 'OpenAI, LangChain, Apache Superset, conversational AI, and LLM-driven analytics.',
    },
    {
      icon: 'Smartphone',
      title: 'Cloud & DevOps',
      description: 'AWS SDK (SES/S3), Azure SDK, Docker, Nginx, Git, and Maven.',
    },
  ],
  testimonials: [],
  clients: [],
}

type EducationItem = {
  title: string
  period: string
  description: string
}

type ExperienceSubsection = {
  title: string
  bullets: string[]
}

type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  subsections?: ExperienceSubsection[]
}

type SkillGroup = {
  title: string
  items: string[]
}

type ProjectLink = {
  label: string
  url: string
}

type ProjectItem = {
  title: string
  role: string
  bullets: string[]
  techStack: string
  links: ProjectLink[]
}

type CertificationItem = {
  title: string
  url?: string
}

export const resumeData: {
  education: EducationItem[]
  experience: ExperienceItem[]
  skillGroups: SkillGroup[]
  projects: ProjectItem[]
  certifications: CertificationItem[]
} = {
  education: [
    {
      title: 'Bachelor of Engineering (B.E.) — Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC), Mumbai University',
      period: '2018 — 2022',
      description: 'CGPI: 8.59',
    },
  ],
  experience: [
    {
      role: 'Software Development Engineer II',
      company: 'Accelya',
      location: 'Mumbai',
      period: 'April 2025 – Present',
      bullets: [
        'Designed and developed microservice-based backend services using Spring Boot, following clean separation of concerns and RESTful API standards.',
        'Integrated React / Next.js frontend applications with backend APIs, supporting secure authentication and responsive UI workflows.',
        'Implemented Spring Security using JWT-based authentication and role-based access control to protect APIs and sensitive business data.',
        'Built a near real-time database synchronization service from MS SQL Server to PostgreSQL using embedded Debezium (without Kafka), ensuring low-latency and reliable replication.',
        'Developed a configurable email notification service integrating AWS SDK and Microsoft Azure SDK to handle transactional and bulk emails.',
        'Collaborated with cross-functional teams in an Agile environment to deliver enterprise-grade features and production-ready solutions.',
        'Applied performance optimizations and code quality improvements, reducing processing time and infrastructure overhead.',
      ],
      subsections: [
        {
          title: 'AI Business Insights Chatbot — Internal Workshop Project (Team)',
          bullets: [
            'Built an AI-powered chatbot capable of answering business questions with insights, tabular results, and visual analytics.',
            'Integrated Apache Superset (Python) to generate charts dynamically based on user queries.',
            'Used OpenAI LLMs to translate natural language questions into structured Superset visualization payloads.',
            'Embedded Superset dashboards into the chatbot UI using secure iframe-based integration.',
            'Implemented backend APIs using Java Spring Boot and frontend chatbot UI using React.',
            'Delivered a working prototype within a limited workshop timeline through close team collaboration.',
          ],
        },
      ],
    },
    {
      role: 'Java Developer',
      company: 'Wipro Ltd',
      location: 'Bengaluru',
      period: 'September 2022 – April 2025',
      bullets: [
        'Led backend development for a major enterprise project using Spring Boot & JPA, improving workflows and achieving a 15% efficiency boost.',
        'Developed and optimized REST APIs, reducing response time by 20%.',
        'Conducted code reviews, maintained high-quality standards, and resolved production issues using Splunk and SonarQube.',
        'Created unit and integration tests achieving 98% test coverage.',
        'Supported production deployments by creating RFCs, promptly addressing issues, and resolving SonarQube violations to maintain high code quality.',
      ],
    },
  ],
  skillGroups: [
    { title: 'Languages', items: ['Java', 'TypeScript', 'JavaScript'] },
    {
      title: 'Backend',
      items: [
        'Spring Boot',
        'Spring Security',
        'REST APIs',
        'JPA',
        'Hibernate',
        'Microservices',
        'JWT Authentication',
        'Role-Based Access Control (RBAC)',
      ],
    },
    { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MS SQL Server', 'Oracle SQL', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS SDK (SES, S3)', 'Microsoft Azure SDK', 'Docker', 'Nginx', 'Git', 'Maven'],
    },
    {
      title: 'AI & Analytics',
      items: ['OpenAI', 'LangChain', 'Apache Superset', 'Conversational AI', 'LLM-driven analytics'],
    },
    {
      title: 'Testing & Quality',
      items: ['JUnit', 'Integration Testing', 'SonarQube', 'Splunk'],
    },
  ],
  projects: [
    {
      title: 'Supply Chain Analytics Platform (Team Project)',
      role: 'SDE (Full Stack)',
      bullets: [
        'Built a multi-tenant supply-chain analytics SaaS platform enabling multiple companies to manage operational data while maintaining strict tenant-level data isolation.',
        'Implemented role-based access control (RBAC) to separate administrative, analytical, and read-only user permissions.',
        'Developed backend modules for tasks, calendar, and analytics dashboards using authenticated REST APIs.',
        'Designed and implemented React + TypeScript dashboards with protected routing and shared application layout for consistent user experience.',
        'Integrated AI chat assistants (analytics assistant and data assistant) using OpenAI and LangChain, including conversation/session handling and usage tracking.',
        'Supported both structured analytics data and flexible document storage using PostgreSQL (Supabase) and MongoDB.',
        'Containerized backend and frontend services using Docker and configured Nginx for reverse proxy and deployment readiness.',
      ],
      techStack: 'TypeScript, React, Node.js, Supabase (Postgres), MongoDB, OpenAI/LangChain, Docker',
      links: [
        { label: 'ventridag.tech', url: 'https://ventridag.tech' },
        { label: 'app.ventridag.tech', url: 'https://app.ventridag.tech' },
      ],
    },
  ],
  certifications: [
    {
      title: 'Java Full Stack – StackRoute',
      url: 'https://verifyawards.stackroute.in/verify?url=https://awards.stackroute.in/public/assertions/v-llMFLZQ6-ayxYd5-N1yQ.json?v=2_0',
    },
    {
      title: 'AWS Cloud Practitioner – AWS',
      url: 'https://www.credly.com/badges/94e796a7-480d-4dc8-b261-4ae0a5cfa001',
    },
  ],
}

export const portfolioData = {
  categories: ['all', 'applications', 'web development'],
  projects: [
    {
      title: 'Ventridag — Supply Chain Analytics Platform',
      category: 'applications',
      image: '/placeholder.svg',
      description: 'Multi-tenant analytics SaaS with dashboards and AI assistants (analytics + data assistant).',
      tech: ['React', 'TypeScript', 'Supabase (Postgres)', 'MongoDB', 'OpenAI/LangChain', 'Docker'],
      liveUrl: 'https://ventridag.tech',
      githubUrl: '',
    },
    {
      title: 'Ventridag App',
      category: 'web development',
      image: '/placeholder.svg',
      description: 'Authenticated application experience for the platform (multi-tenant).',
      tech: ['React', 'TypeScript', 'Supabase', 'Docker'],
      liveUrl: 'https://app.ventridag.tech',
      githubUrl: '',
    },
  ],
}

export const blogData = {
  posts: [
    {
      title: 'Debezium Without Kafka: Near Real-Time DB Sync',
      category: 'Backend',
      date: 'Jan 4, 2026',
      readTime: '6 min',
      image: '/placeholder.svg',
      excerpt: 'How embedded Debezium can power low-latency MS SQL → Postgres sync without a Kafka cluster.',
      tags: ['Debezium', 'PostgreSQL', 'Spring Boot'],
      slug: 'debezium-without-kafka-db-sync',
    },
    {
      title: 'JWT + RBAC in Spring Security (Practical Patterns)',
      category: 'Backend',
      date: 'Jan 4, 2026',
      readTime: '7 min',
      image: '/placeholder.svg',
      excerpt: 'A pragmatic approach to secure APIs with JWT authentication and role-based access control.',
      tags: ['Spring Security', 'JWT', 'RBAC'],
      slug: 'spring-security-jwt-rbac-patterns',
    },
    {
      title: 'Building LLM-Driven Analytics Experiences',
      category: 'AI & Analytics',
      date: 'Jan 4, 2026',
      readTime: '8 min',
      image: '/placeholder.svg',
      excerpt: 'Patterns for conversational insights, charts, and dashboards with OpenAI and modern tooling.',
      tags: ['OpenAI', 'LangChain', 'Analytics'],
      slug: 'llm-driven-analytics-experiences',
    },
  ],
}

export const contactData = {
  email: 'skmohddanish@gmail.com',
  phone: '+91-9152460510',
  location: 'Thane, Maharashtra, India',
  mapEmbedUrl: 'https://www.google.com/maps?q=Thane%2C%20Maharashtra%2C%20India&output=embed',
}
