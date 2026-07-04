export const personal = {
  name: 'Srushti Sonavane',
  firstName: 'Srushti',
  lastName: 'Sonavane',
  title: 'Full Stack Software Engineer',
  tagline: 'React · Node.js · Backend Systems',
  bio: [
    "Hi — I'm Srushti, a full-stack engineer with a Master's in Computer Science from Indiana University Bloomington, where I spent a year building web systems for the Graduate School that 70+ departments use. Right now I'm at the DSAIL Lab, researching security for agentic AI.",
    "Most of what I know comes from shipping real things: a teacher-training portal for the Maharashtra State Government that 550,000+ teachers register through, a chatbot on the IU website that answers thousands of student questions a day, and ETL pipelines at Barclays that moved financial compliance data from Hadoop to AWS. On the research side, I've published twice at ACL Anthology — first author in 2024 — mostly on NLP for low-resource languages.",
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
  { number: '3.8', suffix: '/4', label: 'GPA at IU Bloomington' },
  { number: '550K', suffix: '+', label: 'Teachers on the TriFrnd portal' },
  { number: '2', suffix: '', label: 'ACL Anthology publications' },
  { number: '70', suffix: '+', label: 'University departments served' },
]

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Indiana University Bloomington',
    location: 'Bloomington, Indiana · USA',
    gpa: '3.8 / 4.0',
    period: 'Aug 2024 – May 2026',
    coursework: ['Software Engineering', 'Algorithms', 'Operating Systems', 'Databases', 'Machine Learning'],
    badge: 'MS · Computer Science',
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra · India',
    gpa: '8.7 / 10',
    period: 'Sep 2021 – Jun 2024',
    coursework: ['Data Structures', 'Computer Networks', 'Object Programming', 'Cloud', 'Distributed Systems'],
    badge: 'BE · Computer Engineering',
  },
]

export const experience = [
  {
    role: 'Research Assistant · Agentic AI Security',
    company: 'DSAIL Lab, Indiana University',
    location: 'Bloomington, USA',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [
      'Contributing to the agent coordination layer of an LLM-RL red teaming framework for AI-enabled SOAR systems, where I replaced the decoupled planner-controller handoff with a real-time feedback loop that adapts attack strategies across episodes.',
      'Surveyed 12 AI agent skill platforms and compared vulnerability scanners (Snyk, Cisco, LlamaFirewall, AQtive Guard) for the first academic security study of the agent skills ecosystem, covering 900,000+ skills.',
    ],
    stack: ['Python', 'Reinforcement Learning', 'LLM Agents'],
  },
  {
    role: 'Software Engineer (Graduate Assistant)',
    company: 'Indiana University Graduate School',
    location: 'Bloomington, USA',
    period: 'May 2025 – May 2026',
    current: false,
    bullets: [
      'Shipped a live AI chatbot on the Indiana University website that answers thousands of student queries a day across 70+ colleges and departments. Graduate School office walk-ins dropped by 60%.',
      'The chatbot runs on an A2A multi-agent architecture: a routing agent backed by Azure LLM classifies each query and hands it to department-specific agents, with an MCP server supplying live university data.',
      'Migrated 13 legacy university applications to shared PHP abstraction layers over XML schemas, and verified each migration with automated record-count checks.',
      'Replaced manual form-handling across 70+ departments with PHP/MySQL pipelines; coordinators now use a centralised submission dashboard instead of keying in data by hand.',
    ],
    stack: ['PHP', 'MySQL', 'Azure', 'Kubernetes', 'MCP Server', 'A2A'],
  },
  {
    role: 'Software Engineer',
    company: 'TriFrnd (Maharashtra State Government)',
    location: 'Pune, India',
    period: 'Sep 2023 – Jun 2024',
    current: false,
    bullets: [
      'Built and ran the state teacher-training registration portal on Next.js, Node.js, and PostgreSQL: a stateless API layer serving concurrent traffic from 550,000+ registered teachers across 35 districts.',
      'Wrote a Node.js batch allocation engine that assigns teachers across 960 training batches, replacing a fully manual coordination process with real-time dashboards and audit trails.',
      'Set up role-based access control across three permission tiers; every district rollout was gated by Jest integration tests before going live.',
      'Implemented a two-channel OTP verification flow with eligibility checks that blocked duplicate and invalid submissions across 40,000+ registrations.',
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Jest'],
  },
  {
    role: 'NLP Research Intern (Part-time)',
    company: 'L3Cube',
    location: 'Pune, India',
    period: 'Jun 2023 – Jul 2024',
    current: false,
    bullets: [
      'Built and published mahaNLP to PyPI, an NLP toolkit for low-resource Marathi text covering preprocessing, semantic similarity, and tokenization with transformer embeddings.',
      "Compiled 30+ text classification datasets across 10 low-resource Indic languages and published them to HuggingFace, where they've picked up 500+ downloads.",
      'Co-authored L3Cube-IndicNews: News-based Short Text and Document Classification in Indic Languages (ACL Anthology 2023).',
    ],
    stack: ['Python', 'HuggingFace', 'Transformers', 'PyPI'],
  },
  {
    role: 'ML Research Intern (Part-time)',
    company: 'CAILMD, PICT',
    location: 'Pune, India',
    period: 'Jun 2023 – Jul 2024',
    current: false,
    bullets: [
      'Fine-tuned multilingual BERT for text classification with FP16 mixed-precision training and cut GPU training time by 30% with no accuracy loss.',
      'Trained an accent classification model on 1,600+ audio samples using spectral feature extraction across 5 linguistic categories.',
      'First-authored the SemEval-2024 paper on multilingual semantic textual relatedness (ACL Anthology 2024), leading model development and benchmarking across low-resource language pairs.',
    ],
    stack: ['PyTorch', 'BERT', 'Python'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Barclays',
    location: 'Pune, India',
    period: 'Jun 2023 – Aug 2023',
    current: false,
    bullets: [
      'Engineered a PySpark ETL pipeline to migrate multi-terabyte financial compliance datasets (FCA, GDPR, and financial crime reporting) from on-premise Hadoop clusters to AWS.',
      'Packaged reusable PySpark utility modules for logging, partitioning, and error handling; two other data engineering teams adopted them as their standard template.',
    ],
    stack: ['PySpark', 'Hadoop', 'AWS', 'Python'],
  },
]

export const projects = [
  {
    title: 'AI Course Planning Platform',
    description: 'Course recommendation engine covering 300+ courses, built on LangChain and the OpenAI API, with a deterministic fallback that ranks by prerequisites, credit load, and student interests whenever the API is unavailable or rate-limited. A React drag-and-drop planner handles multi-semester scheduling: prerequisite and credit-limit checks run in the browser so conflicts get fixed instantly, and full LLM-generated schedules arrive in under 60 seconds.',
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
    description: 'Interface and integration layer that makes 250,000+ Chicago food-inspection records searchable by facility and risk level through Express APIs and PostgreSQL. Interactive maps and Chart.js dashboards break the records down by risk, and marker clustering keeps the city-wide map responsive.',
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'PostGIS'],
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
  backend: ['Node.js', 'Express', 'FastAPI', 'BullMQ', 'Redis', 'JWT', 'RBAC', 'MCP Server'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'PostGIS', 'Prisma ORM'],
  cloud: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Git', 'PySpark', 'Hadoop'],
  ai: ['LangChain', 'OpenAI API', 'Azure LLM', 'A2A Agent Framework', 'PyTorch', 'HuggingFace Transformers', 'spaCy', 'NLTK'],
}
