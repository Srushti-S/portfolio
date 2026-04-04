export const personal = {
  name: 'Srushti Sonavane',
  firstName: 'Srushti',
  lastName: 'Sonavane',
  title: 'Full Stack Software Engineer',
  tagline: 'React · Node.js · Backend Systems',
  bio: [
    "Hi — I'm Srushti, a Full Stack Software Engineer currently pursuing my Master's in Computer Science at Indiana University Bloomington, where I also work as a Web Development Assistant helping 70+ academic departments ship better digital experiences.",
    'I care deeply about the craft — whether that\'s a clean REST API, a pixel-tight frontend, or an NLP pipeline that makes language actually useful. I\'ve worked at the boundary of product and research: from building ETL pipelines at Barclays to fine-tuning transformer models on low-resource Indic languages, to shipping production web apps that thousands of people use every day.',
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
  { number: '2', suffix: '+', label: 'ACL Publications' },
  { number: '150', suffix: '+', label: 'Engineering tickets resolved' },
  { number: '10', suffix: '+', label: 'Languages in NLP datasets' },
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
    role: 'Web Development Assistant',
    company: 'Indiana Graduate School',
    location: 'Bloomington, USA',
    period: 'May 2025 – Present',
    current: true,
    bullets: [
      'Built and deployed production web applications and internal tools, improving workflow automation and usability across 70+ academic departments using JavaScript, PHP, MySQL, and XML',
      'Maintained and enhanced large-scale web platforms by debugging issues, optimizing existing features, and resolving 150+ engineering tickets, improving system reliability using PHP and React',
      'Migrated legacy applications and routing workflows to the Fireform platform, enabling standardized form handling and reusable abstractions while ensuring data integrity during transition',
      'Developed a chatbot system for the university website to automate student queries, integrating backend services with MCP Server and A2A agent framework',
    ],
    stack: ['JavaScript', 'PHP', 'MySQL', 'React', 'XML'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Barclays',
    location: 'Pune, India',
    period: 'Jun 2023 – Aug 2023',
    current: false,
    bullets: [
      'Built a PySpark ETL pipeline to migrate large-scale datasets from Hadoop to cloud infrastructure, improving data processing efficiency and reducing query latency for analytics workflows',
      'Developed data extraction and transformation pipelines for multi-terabyte datasets, reducing manual intervention and improving reliability of compliance reporting systems',
    ],
    stack: ['PySpark', 'Hadoop', 'ETL', 'Cloud', 'Python'],
  },
  {
    role: 'NLP Intern',
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
    role: 'NLP Intern',
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
    title: 'Chicago Food Safety Inspections Dashboard',
    description: 'Full-stack data platform to manage and analyse food inspection data with REST APIs, database schemas, and frontend components for real-time filtering and visualisation.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Srushti-S/CDPH-food-inspections/tree/main',
    live: '',
    highlight: true,
  },
  {
    title: 'Smart Course Selector AI Agent',
    description: 'Course recommendation system that validates prerequisites and generates optimised schedules, integrating backend logic with a React frontend and rule-based decision logic.',
    stack: ['Python', 'React'],
    github: 'https://github.com/Srushti-S/Course-Selector-AI-Agent-',
    live: '',
    highlight: false,
  },
  {
    title: 'Rental & Services Management System',
    description: 'Containerised full-stack platform with authentication and role-based dashboards, supporting concurrent users through scalable backend and database design.',
    stack: ['React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Srushti-S/RMS/tree/main',
    live: '',
    highlight: false,
  },
  {
    title: 'Pulzion\'23 Event Management System',
    description: 'High-traffic event management system handling thousands of registrations with optimised backend APIs and database queries for reliable performance under peak load.',
    stack: ['Node.js', 'PostgreSQL', 'Next.js'],
    github: 'https://pict.acm.org/pulzion/',
    live: '',
    highlight: false,
  },
]

export const skills = {
  frontend: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  backend: ['Node.js', 'Django', 'Flask', 'Spring Boot', 'PHP', 'Python', 'Java', 'C++'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'],
  cloud: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Hadoop', 'Ab Initio', 'Unix Scripting'],
  ml: ['PySpark', 'TensorFlow', 'PyTorch', 'LangChain', 'spaCy', 'NLTK', 'Keras', 'OpenCV'],
}