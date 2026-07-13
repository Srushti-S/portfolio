export const personal = {
  name: 'Srushti Sonavane',
  firstName: 'Srushti',
  lastName: 'Sonavane',
  title: 'Full Stack Software Engineer',
  tagline: 'React · Node.js · Backend Systems',
  bio: [
    "Hi, I'm Srushti, a full-stack engineer with a Master's in Computer Science from Indiana University Bloomington, where I spent a year building web systems for the Graduate School that 70+ departments use. Right now I'm at the DSAIL Lab, researching security for agentic AI.",
    "Most of what I know comes from shipping real things: a teacher-training portal for the Maharashtra State Government that 550,000+ teachers register through, a chatbot on the IU website that answers thousands of student questions a day, and ETL pipelines at Barclays that moved financial compliance data from Hadoop to AWS. On the research side, I've published twice at ACL Anthology, first author in 2024, mostly on NLP for low-resource languages.",
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
    period: 'Aug 2024 – May 2026',
    coursework: ['Software Engineering', 'Algorithms', 'Operating Systems', 'Databases', 'Machine Learning'],
    badge: 'MS · Computer Science',
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra · India',
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
      'Working on the agent coordination layer of an **LLM-RL** red teaming framework for **SOAR** security systems, replacing the decoupled planner-controller handoff with a real-time feedback loop that adapts attack strategies across episodes.',
      'Surveyed 12 AI agent skill platforms and led a vulnerability scanner comparison for the first academic security study of the agent skills ecosystem, covering 900,000+ skills.',
    ],
  },
  {
    role: 'Software Engineer (Graduate Assistant)',
    company: 'Indiana University Graduate School',
    location: 'Bloomington, USA',
    period: 'May 2025 – May 2026',
    current: false,
    bullets: [
      'Shipped a live AI chatbot on the Indiana University website, built on an **A2A** multi-agent architecture with **Azure LLM** and an **MCP server**. It answers thousands of student queries a day across 70+ departments and cut office walk-ins by 60%.',
      'Replaced manual form-handling across 70+ departments with **PHP**/**MySQL** pipelines and migrated 13 legacy applications to shared PHP abstraction layers over **XML** schemas.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'TriFrnd (Maharashtra State Government)',
    location: 'Pune, India',
    period: 'Sep 2023 – Jun 2024',
    current: false,
    bullets: [
      'Built and ran the state teacher-training registration portal on **Next.js**, **Node.js**, and **PostgreSQL**, with a stateless API layer serving concurrent traffic from 550,000+ registered teachers across 35 districts.',
      'Wrote a **Node.js** batch allocation engine assigning teachers across 960 training batches, replacing a fully manual process with real-time dashboards and audit trails.',
    ],
  },
  {
    role: 'NLP Research Intern (Part-time)',
    company: 'L3Cube',
    location: 'Pune, India',
    period: 'Jun 2023 – Jul 2024',
    current: false,
    bullets: [
      'Built and published **mahaNLP** to **PyPI**, an NLP toolkit for low-resource Marathi, and compiled 30+ text classification datasets across 10 Indic languages, published to **HuggingFace** with 500+ downloads.',
    ],
  },
  {
    role: 'ML Research Intern (Part-time)',
    company: 'CAILMD, PICT',
    location: 'Pune, India',
    period: 'Jun 2023 – Jul 2024',
    current: false,
    bullets: [
      'Fine-tuned multilingual **BERT** with **FP16** mixed-precision training, cutting GPU training time by 30% with no accuracy loss, and first-authored the **SemEval-2024** paper on multilingual semantic textual relatedness (ACL Anthology 2024).',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Barclays',
    location: 'Pune, India',
    period: 'Jun 2023 – Aug 2023',
    current: false,
    bullets: [
      'Engineered a **PySpark** ETL pipeline migrating multi-terabyte compliance datasets (FCA, GDPR, financial crime reporting) from on-premise **Hadoop** clusters to **AWS**, and packaged reusable PySpark utilities that two other teams adopted as their standard template.',
    ],
  },
]

export const publications = [
  {
    title: 'CAILMD-23 at SemEval-2024 Task 1: Multilingual Evaluation of Semantic Textual Relatedness',
    venue: 'ACL Anthology',
    year: '2024',
    credit: 'First Author',
    link: 'https://aclanthology.org/2024.semeval-1.142/',
  },
  {
    title: 'L3Cube-IndicNews: News-based Short Text and Long Document Classification Datasets in Indic Languages',
    venue: 'ACL Anthology',
    year: '2023',
    credit: 'Co-Author',
    link: 'https://aclanthology.org/2023.icon-1.37/',
  },
]

export const artifacts = [
  { label: 'mahaNLP · NLP toolkit for Marathi on PyPI', link: 'https://pypi.org/project/mahaNLP/' },
  { label: 'Indic language datasets on HuggingFace · 500+ downloads', link: 'https://huggingface.co/l3cube-pune' },
]

export const projects = [
  {
    title: 'AI Course Planning Platform',
    description: 'Course recommendation engine covering 300+ courses, built on LangChain and the OpenAI API, with a deterministic fallback that ranks by prerequisites, credit load, and student interests whenever the API is unavailable or rate-limited. A React drag-and-drop planner handles multi-semester scheduling: prerequisite and credit-limit checks run in the browser so conflicts get fixed instantly, and full LLM-generated schedules arrive in under 60 seconds.',
    stack: ['Python', 'React', 'FastAPI', 'LangChain'],
    github: 'https://github.com/Srushti-S/Course-Selector-AI-Agent-',
    live: 'https://course-planner-frontend.onrender.com/',
    highlight: true,
    art: 'neural',
  },
  {
    title: 'Invoice Processing Automation',
    description: 'Multi-agent pipeline built on LangGraph that reads invoices in five file formats, checks them against inventory, and decides whether to pay. The money decisions are deterministic Python covered by tests, so a bad model response can never release a payment, and a ledger blocks paying the same invoice twice. Runs offline with no API key.',
    stack: ['Python', 'LangGraph', 'SQLite', 'LLM'],
    github: 'https://github.com/Srushti-S/invoice-autopilot',
    live: 'https://invoice-autopilot-henna.vercel.app/',
    highlight: false,
    art: 'pipeline',
  },
  {
    title: 'Rental & Services Management System',
    description: '9-service microservices system with a Node.js API gateway enforcing JWT authentication, role-based access control and per-route rate limiting, with each service independently containerised and orchestrated via Docker Compose. Designed normalised PostgreSQL schemas achieving sub-200ms query response times under concurrent load.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Srushti-S/Multi-Tenant-Rental-Platform',
    live: '',
    highlight: false,
    art: 'rental',
  },
  {
    title: 'Chicago Food Safety Inspections Dashboard',
    description: 'Interface and integration layer that makes 250,000+ Chicago food-inspection records searchable by facility and risk level through Express APIs and PostgreSQL. Interactive maps and Chart.js dashboards break the records down by risk, and marker clustering keeps the city-wide map responsive.',
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'PostGIS'],
    github: 'https://github.com/Srushti-S/CDPH-food-inspections',
    live: '',
    highlight: false,
    art: 'dashboard',
  },
  {
    title: "Pulzion'23 Event Management System",
    description: 'High-traffic event management system handling thousands of registrations with optimised backend APIs and database queries for reliable performance under peak load.',
    stack: ['Node.js', 'PostgreSQL', 'Next.js'],
    github: '',
    live: 'https://pict.acm.org/pulzion/',
    highlight: false,
    art: 'event',
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
