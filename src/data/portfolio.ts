export const personal = {
  name: 'Srushti Sonavane',
  role: 'Software Engineer · AI & Backend',
  pitch: "I'm a software engineer working across backend systems and applied AI. I enjoy turning messy, real-world problems into reliable software that people can depend on.",
  openTo: 'Open to software engineering and AI roles',
  now: 'Software Engineer at Korrus · MS Computer Science, Indiana University',
  bio: [
    "Right now I'm a software engineer at Korrus. My audit system checks six business systems every week and has caught problems the teams that own the data confirmed in writing.",
    "Before that, I finished my Master's in Computer Science at Indiana University Bloomington, shipped a live AI chatbot on the university website built as A2A agents with an MCP server, and benchmarked agent-skill security scanners at the DSAIL Lab.",
    "Earlier, I built the Maharashtra State Government's teacher-training portal that 550,000+ teachers registered through, and published twice at ACL Anthology, first author in 2024. Outside code, I'm energised by hard problems, good coffee, and the quiet satisfaction of a system that just works.",
  ],
  email: 'srushtisonavane@gmail.com',
  linkedin: 'https://linkedin.com/in/srushtis7',
  github: 'https://github.com/Srushti-S',
}

export const stats = [
  { number: '$437K', suffix: '', label: 'Stalled deals recovered from one finding' },
  { number: '25', suffix: '', label: 'Checks running unattended every week' },
  { number: '550K', suffix: '+', label: 'Teachers on the TriFrnd portal' },
  { number: '2', suffix: '', label: 'ACL Anthology publications' },
]

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Indiana University Bloomington',
    location: 'Bloomington, Indiana · USA',
    period: 'Aug 2024 – May 2026',
    gpa: '3.8/4.0',
    coursework: ['Software Engineering', 'Algorithms', 'Operating Systems', 'Databases', 'Machine Learning'],
    badge: 'MS · Computer Science',
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra · India',
    period: 'Sep 2021 – Jun 2024',
    gpa: '3.6/4.0',
    coursework: ['Data Structures', 'Computer Networks', 'Object Programming', 'Cloud', 'Distributed Systems'],
    badge: 'BE · Computer Engineering',
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Korrus',
    location: '',
    period: 'Aug 2026 – Present',
    current: true,
    bullets: [
      'Built a read-only audit system in **Python** over 6 business systems (**NetSuite**, **HubSpot**, **Shopify**, **Stripe**, **Avalara**, **Arena PLM**), turning exploratory **Claude Code** passes into 25 deterministic **YAML**-defined checks that run unattended each week over dated API snapshots.',
      'Surfaced defects confirmed in writing by the teams that own the data, including a customer master that was 69% duplicate and a silent CRM sync failure that let IT recover 45 stalled opportunities worth $437K.',
      "Owned data mapping for an acquired company's Macola and **Salesforce** migration to **NetSuite** at the CEO's request, mapping 145 Salesforce fields and building an item-matching tool that IT adopted over its own to match 604 items.",
    ],
  },
  {
    role: 'Research Assistant · Agentic AI Security',
    company: 'DSAIL Lab, Indiana University',
    location: 'Bloomington, USA',
    period: 'Mar 2026 – Aug 2026',
    current: false,
    bullets: [
      "Benchmarked 11 agent-skill security scanners head-to-head, finding 0.15% cross-scanner agreement and silent-failure modes that invalidated 92% of one scanner's reported output.",
      "Engineered a resumable **SLURM** array pipeline on IU's HPC cluster that ran 8 scan runs across 10K packages and scaled to a 265K-skill evaluation corpus.",
    ],
  },
  {
    role: 'Software Engineer (Graduate Assistant)',
    company: 'Indiana University Graduate School',
    location: 'Bloomington, USA',
    period: 'May 2025 – May 2026',
    current: false,
    bullets: [
      'Shipped a live AI chatbot on the Indiana University website that answers thousands of student queries a day across 70+ colleges and departments, cutting Graduate School office walk-ins by 60%.',
      'Architected it as an **A2A** multi-agent system on **Azure LLM** and **Azure Kubernetes Service**: a routing agent classifies each query and hands it to department agents that fetch live data through an **MCP server**.',
      'Migrated 13 legacy university applications onto shared **PHP** abstraction layers over **XML** schemas, verifying each migration with automated record-count checks.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'TriFrnd (Maharashtra State Government)',
    location: 'Pune, India',
    period: 'Sep 2023 – Jun 2024',
    current: false,
    bullets: [
      'Led the state teacher-training registration portal on **Next.js**, **Node.js**, and **PostgreSQL**, with a stateless API layer serving 550,000+ registered teachers across 35 districts.',
      'Wrote a **Node.js** batch allocation engine that assigns teachers across 960 training batches, replacing a fully manual process with real-time dashboards and audit trails.',
      'Implemented role-based access control across three permission tiers and gated all 35 district rollouts behind **Jest** integration tests.',
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
      'Built a **PySpark** pipeline that moved multi-terabyte compliance datasets (FCA, GDPR, financial crime reporting) from on-premise **Hadoop** clusters to **AWS**, and packaged reusable PySpark utilities that two other teams adopted as their standard template.',
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
    title: 'Invoice Processing Automation',
    summary: 'LangGraph pipeline that reads invoices in 5 formats, checks them against inventory, and decides whether to pay.',
    decision: 'Payment approval is plain, tested Python. The LLM only extracts fields and flags fraud, so it can never release money, and a ledger blocks double payments.',
    metrics: ['56 offline tests', '5 file formats', 'No API key needed'],
    stack: ['Python', 'LangGraph', 'FastAPI', 'Pydantic', 'React'],
    github: 'https://github.com/Srushti-S/invoice-autopilot',
    live: 'https://invoice-autopilot-henna.vercel.app/',
    art: 'pipeline',
  },
  {
    title: 'AI Course Planning Platform',
    summary: 'Recommends courses with LangChain and the OpenAI API, then lets students drag them into a multi-semester plan.',
    decision: 'Every LLM plan is validated on the server, with a deterministic fallback when the API is down. An offline eval over 24 profiles checks for prerequisite violations.',
    metrics: ['42 courses', '24-profile eval', 'Deterministic fallback'],
    stack: ['Python', 'FastAPI', 'LangChain', 'React'],
    github: 'https://github.com/Srushti-S/Course-Selector-AI-Agent-',
    live: 'https://course-planner-frontend.onrender.com/',
    art: 'neural',
  },
  {
    title: 'Chicago Food Safety Inspections Dashboard',
    summary: 'Makes 250,000+ Chicago food-inspection records searchable by facility and risk level, with maps and Chart.js dashboards.',
    decision: 'Express APIs over PostgreSQL and PostGIS do the searching on the server, and marker clustering keeps the city-wide map fast.',
    metrics: ['250K+ records', 'City-wide map'],
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'PostGIS'],
    github: 'https://github.com/Srushti-S/CDPH-food-inspections',
    live: '',
    art: 'dashboard',
  },
  {
    title: 'Rental & Services Management System',
    summary: 'Rental and services platform split into 9 containerised services, run together with Docker Compose.',
    decision: 'One Node.js API gateway handles JWT auth, role-based access and rate limits for every service, over PostgreSQL schemas that answer in under 200ms.',
    metrics: ['9 services', 'Sub-200ms queries'],
    stack: ['Node.js', 'PostgreSQL', 'Docker', 'React'],
    github: 'https://github.com/Srushti-S/Multi-Tenant-Rental-Platform',
    live: '',
    art: 'rental',
  },
  {
    title: "Pulzion'23 Event Management System",
    summary: "Registration and event management system for PICT ACM's Pulzion'23, handling thousands of registrations.",
    decision: 'Optimised backend APIs and database queries so the site stayed reliable under peak registration load.',
    metrics: ['Thousands of registrations'],
    stack: ['Node.js', 'PostgreSQL', 'Next.js'],
    github: '',
    live: 'https://pict.acm.org/pulzion/',
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
