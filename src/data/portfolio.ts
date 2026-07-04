export const personal = {
  name: 'Srushti Sonavane',
  firstName: 'Srushti',
  lastName: 'Sonavane',
  title: 'Full Stack Software Engineer',
  tagline: 'React · Node.js · Backend Systems',
  bio: [
    "Hi — I'm Srushti, a Full Stack Software Engineer currently pursuing my Master's in Computer Science at Indiana University Bloomington, where I also work as a Web Developer helping 70+ academic departments ship better digital experiences.",
    "I care deeply about the craft — whether that's a clean REST API, a pixel-tight frontend, or an AI agent that cuts response time from 48 hours to under 2 minutes. I've built production systems at scale: from a government teacher-training portal serving 550,000+ teachers at TriFrnd, to PySpark ETL pipelines at Barclays, to microservices architectures and LLM-backed tools.",
    "Outside code, I'm energised by hard problems, good coffee, and the quiet satisfaction of a system that just works.",
  ],
  email: 'srushtisonavane@gmail.com',
  phone: '+1 9303337732',
  location: 'Bloomington, Indiana',
  linkedin: 'https://linkedin.com/in/srushtis7',
  github: 'https://github.com/Srushti-S',
  openToWork: true,
}

export const stats = [
  { number: '3.77', suffix: '/4', label: 'GPA at IU Bloomington' },
  { number: '550K', suffix: '+', label: 'Teachers served via TriFrnd portal' },
  { number: '150', suffix: '+', label: 'Engineering tickets resolved' },
  { number: '70', suffix: '+', label: 'Academic departments supported' },
]

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Indiana University Bloomington',
    location: 'Bloomington, Indiana · USA',
    gpa: '3.77 / 4.0',
    period: 'Aug 2024 – May 2026',
    coursework: ['Software Engineering', 'Algorithms', 'Operating Systems', 'Databases', 'Machine Learning'],
    badge: 'MS · Computer Science',
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'Pune University',
    location: 'Pune, Maharashtra · India',
    gpa: '8.7 / 10',
    period: 'Oct 2021 – May 2024',
    coursework: ['Data Structures', 'Computer Networks', 'Object Programming', 'Cloud', 'Distributed Systems'],
    badge: 'BE · Computer Engineering',
  },
]

export const experience = [
  {
    role: 'Web Developer',
    company: 'Indiana University',
    location: 'Bloomington, USA',
    period: 'May 2025 – May 2026',
    current: true,
    bullets: [
      'Deployed a student-facing chatbot using MCP Server and an A2A agent framework, routing incoming queries through an automated classification and resolution pipeline with staff escalation for unhandled cases, reducing average query response time from 48 hours to under 2 minutes.',
      'Built and deployed production web applications and PHP/MySQL-backed workflow automation tools, replacing manual form-handling processes with automated XML-driven data pipelines across 70+ academic departments and reducing administrative overhead by 3 hours per department per week.',
      'Diagnosed recurring eDocs defects by instrumenting PHP server logs and MySQL query traces to identify root-cause patterns across 150+ reported tickets, introducing input validation guards and parameterised query rewrites that eliminated the defect class with zero critical regressions across subsequent releases.',
      'Migrated 13 legacy applications to the Fireform platform by building shared PHP form-handling abstraction layers over XML schemas, achieving 100% data integrity across all 13 deployments with zero rollbacks.',
    ],
    stack: ['JavaScript', 'PHP', 'MySQL', 'React', 'XML', 'MCP Server', 'A2A'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Barclays',
    location: 'Pune, India',
    period: 'Jun 2023 – Aug 2023',
    current: false,
    bullets: [
      'Built a PySpark ETL pipeline migrating multi-terabyte financial datasets from Hadoop to cloud infrastructure, cutting average analytics query latency by 4 seconds per query measured against baseline execution times on the pre-migration analytics layer.',
      'Processed multi-terabyte Hadoop datasets through PySpark transformation pipelines handling schema normalisation and field-level data mapping, eliminating manual intervention from 3 weekly compliance reporting cycles and enabling fully automated report generation.',
      'Developed and documented distributed PySpark data processing workflows with reusable pipeline abstractions adopted by 2 internal engineering teams, standardising scalable data processing patterns across enterprise compliance reporting pipelines.',
    ],
    stack: ['PySpark', 'Hadoop', 'ETL', 'Cloud', 'Python', 'Ab Initio'],
  },
  {
    role: 'NLP Research Intern',
    company: 'L3Cube',
    location: 'Pune, India',
    period: 'Jun 2023 – Jul 2024',
    current: false,
    bullets: [
      'Built NLP data processing pipelines and similarity search systems for Marathi text, improving preprocessing quality using transformer-based models',
      'Designed and implemented workflows for multilingual dataset curation and preprocessing across 10 low-resource Indic languages',
      'Fine-tuned transformer-based models and released reproducible datasets and models on HuggingFace and GitHub',
      'Published: L3Cube-IndicNews: News-based Document Classification in Indic languages, ACL Anthology 2023',
    ],
    stack: ['Python', 'HuggingFace', 'Transformers', 'spaCy', 'NLP'],
  },
  {
    role: 'ML Research Intern',
    company: 'CAILMD, PICT',
    location: 'Pune, India',
    period: 'Jun 2023 – Jul 2024',
    current: false,
    bullets: [
      'Optimized transformer-based document classification models, improving training efficiency while maintaining high accuracy for large-scale NLP pipelines',
      'Developed a web-based accent classification system by collecting and processing 1,600+ audio samples and training ML models for regional speaker detection',
      'Published: Multilingual Evaluation of Semantic Textual Relatedness, ACL Anthology 2024',
    ],
    stack: ['ML', 'TensorFlow', 'PyTorch', 'OpenCV', 'Python'],
  },
]

export const projects = [
  {
    title: 'Smart Course Selector AI Agent',
    description: 'AI-powered course recommendation engine combining rule-based constraint validation (credit limits, prerequisite chains, time-conflict detection) with LangChain-orchestrated LLM decision logic to generate conflict-free schedules across 300+ courses. Delivers schedule recommendations in under a minute via a React frontend backed by a FastAPI REST API.',
    stack: ['Python', 'React', 'FastAPI', 'LangChain'],
    github: 'https://github.com/Srushti-S/Course-Selector-AI-Agent-',
    live: '',
    highlight: true,
  },
  {
    title: 'Rental & Services Management System',
    description: '9-service microservices system with a Node.js API gateway enforcing JWT authentication, role-based access control and per-route rate limiting, with each service independently containerised and orchestrated via Docker Compose. Designed normalised PostgreSQL schemas achieving sub-200ms query response times under concurrent load.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Srushti-S/RMS/tree/main',
    live: '',
    highlight: false,
  },
  {
    title: 'Chicago Food Safety Inspections Dashboard',
    description: 'Full-stack data platform to manage and analyse food inspection data with REST APIs, database schemas, and frontend components for real-time filtering and visualisation.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Srushti-S/CDPH-food-inspections/tree/main',
    live: '',
    highlight: false,
  },
  {
    title: "Pulzion'23 Event Management System",
    description: 'High-traffic event management system handling thousands of registrations with optimised backend APIs and database queries for reliable performance under peak load.',
    stack: ['Node.js', 'PostgreSQL', 'Next.js'],
    github: '',
    live: 'https://pict.acm.org/pulzion/',
    highlight: false,
  },
]

export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'PHP', 'C++', 'HTML', 'CSS'],
  frontend: ['React', 'Next.js'],
  backend: ['Node.js', 'FastAPI', 'BullMQ', 'Redis', 'JWT', 'RBAC', 'MCP Server'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'],
  cloud: ['AWS', 'Docker', 'CI/CD (GitHub Actions)', 'Git', 'PySpark', 'Hadoop', 'Ab Initio'],
  ai: ['LangChain', 'OpenAI API', 'A2A Agent Framework', 'spaCy', 'NLTK'],
}
