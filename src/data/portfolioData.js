/**
 * Centralized Portfolio Data Store for HARIHARAN S.
 * Premium Editorial AI Engineer Portfolio
 */

export const personalInfo = {
  name: "HARIHARAN S.",
  brandName: "HARIHARAN.S",
  primaryTitle: "AI ENGINEER",
  specialties: ["ML ENGINEER", "DATA ANALYST", "SOFTWARE DEVELOPER"],
  specialtiesString: "ML ENGINEER • DATA ANALYST • SOFTWARE DEVELOPER",
  shortDescription: "Building intelligent systems with data, machine learning and software.",
  status: "OPEN TO INTERNSHIPS & OPPORTUNITIES",
  email: "hariharan8438431@gmail.com",
  linkedin: "https://www.linkedin.com/in/hariharan-s-37757a284",
  github: "https://github.com/Hariharan1520",
  leetcode: "https://leetcode.com/u/hariharan20/",
};

export const navLinks = [
  { id: "work", label: "WORK", href: "#projects" },
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "skills", label: "SKILLS", href: "#skills" },
  { id: "achievements", label: "ACHIEVEMENTS", href: "#achievements" },
  { id: "certifications", label: "CERTIFICATIONS", href: "#certifications" },
  { id: "leadership", label: "LEADERSHIP", href: "#leadership" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export const aboutData = {
  sectionLabel: "01 / ABOUT",
  title: "ABOUT ME",
  introParagraph: "I'm an AI & Data Science engineering student who enjoys turning data into practical intelligent systems. My work spans machine learning, data analytics and software development, with a focus on building solutions that are useful beyond the model itself.",
  secondaryParagraph: "I've worked on projects involving sales forecasting, time-series analysis, stock market prediction and intelligent systems. I enjoy taking a problem from raw data and exploration through modeling, evaluation and application development.",
  metaDetails: [
    { label: "BASED IN", value: "Pollachi, India" },
    { label: "EDUCATION", value: "B.Tech — Artificial Intelligence & Data Science" },
    { label: "INSTITUTION", value: "Dr. Mahalingam College of Engineering & Technology" },
    { label: "CGPA", value: "8.3 / 10" },
  ],
  captionText: "AI & DATA SCIENCE • ENGINEERING · ANALYTICS",
};

export const skillsData = {
  sectionLabel: "02 / SKILLS",
  mainHeadingLine1: "TECHNICAL",
  mainHeadingLine2: "EXPERTISE",
  supportingText: "A practical stack built around machine learning, data analytics, software development, and intelligent systems.",
  coreStackTitle: "CORE STACK",
  coreStackItems: [
    { name: "Python", category: "Core Language" },
    { name: "Java", category: "Core Language" },
    { name: "SQL", category: "Data Querying" },
    { name: "Machine Learning", category: "Predictive Models" },
    { name: "Data Analytics", category: "Exploration & Insights" },
    { name: "TensorFlow", category: "Deep Learning Framework" },
    { name: "Power BI", category: "Business Intelligence" },
  ],
  categories: [
    {
      number: "01",
      title: "CORE LANGUAGES",
      items: ["Python", "Java", "SQL"],
    },
    {
      number: "02",
      title: "DATA & ANALYTICS",
      items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "DAX", "Data Analysis", "Data Visualization"],
    },
    {
      number: "03",
      title: "MACHINE LEARNING",
      items: ["Scikit-learn", "TensorFlow", "Keras", "Random Forest", "Logistic Regression", "ARIMA", "Prophet", "LSTM", "BiLSTM"],
    },
    {
      number: "04",
      title: "DATABASES",
      items: ["MySQL", "SQLite"],
    },
    {
      number: "05",
      title: "TOOLS & ENVIRONMENT",
      items: ["Git", "GitHub", "VS Code", "Anaconda", "Google Colab", "Jupyter", "Streamlit"],
    },
  ],
  sectionFooter: "BUILDING WITH DATA • MODELS • CODE",
};

export const projectsSectionData = {
  sectionLabel: "03 / SELECTED WORK",
  mainHeadingLine1: "PROJECTS",
  mainHeadingLine2: "THAT MATTER",
  supportingText: "Selected systems where data, machine learning and software engineering come together to solve practical problems.",
  projects: [
    {
      number: "01",
      category: "DATA ANALYTICS / FORECASTING",
      title: "Sales Forecasting & Analysis Dashboard",
      description: "A production-oriented sales analytics and forecasting system designed to transform large-scale sales data into actionable insights for planning, inventory decisions and waste reduction.",
      capabilities: [
        "Time-series analysis",
        "Sales forecasting",
        "Product-level analysis",
        "Outlet analysis",
        "Hourly sales analysis",
        "Seasonal and festival analysis",
        "Interactive filtering",
        "Forecast evaluation"
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Streamlit",
        "SQLite",
        "Plotly",
        "Facebook Prophet"
      ],
      githubUrl: "https://github.com/Hariharan1520",
      demoUrl: null,
      visualType: "dashboard"
    },
    {
      number: "02",
      category: "MACHINE LEARNING / INTELLIGENT SYSTEMS",
      title: "Stock Market Analysis & Forecasting System",
      description: "An end-to-end stock analysis platform combining technical indicators, deep-learning forecasting and financial sentiment analysis to provide a richer view of market behaviour.",
      capabilities: [
        "Stock data collection",
        "Technical indicators",
        "BiLSTM forecasting",
        "Financial sentiment analysis",
        "FinBERT",
        "Interactive market analysis",
        "REST API architecture",
        "React-based interface"
      ],
      technologies: [
        "Python",
        "Flask",
        "TensorFlow",
        "Keras",
        "BiLSTM",
        "FinBERT",
        "yFinance",
        "React",
        "Vite",
        "Tailwind CSS",
        "Recharts"
      ],
      githubUrl: "https://github.com/Hariharan1520",
      demoUrl: null,
      visualType: "financial"
    }
  ],
  sectionFooter: "MORE THAN A MODEL • BUILDING COMPLETE SYSTEMS"
};

export const achievementsSectionData = {
  sectionLabel: "04 / ACHIEVEMENTS",
  mainHeading: "HONORS & RECOGNITION",
  supportingText: "Verified certificates earned through technical competitions, paper presentations, pitch showcases, and problem-solving.",
  achievements: [
    {
      id: "ach-1",
      rank: "1ST PRIZE",
      title: "Paper Presentation",
      event: "Barnstromz — National Level Technical Symposium",
      date: "September 2024",
      year: "2024",
      imageKey: "paperPresentation",
      hasCertificate: true,
    },
    {
      id: "ach-2",
      rank: "1ST PRIZE",
      title: "Solder War",
      event: "Fiestaa",
      date: "March 2025",
      year: "2025",
      imageKey: "solderWar",
      hasCertificate: true,
    },
    {
      id: "ach-3",
      rank: "2ND PRIZE",
      title: "Idea Pitching",
      event: "Technical Symposium",
      date: "October 2024",
      year: "2024",
      imageKey: "ideaPitching",
      hasCertificate: true,
    },
    {
      id: "ach-4",
      rank: "3RD PRIZE",
      title: "Challenge Showcase",
      event: "Real-World Problem Solving",
      date: "August 2024",
      year: "2024",
      imageKey: "challengeShowcase",
      hasCertificate: true,
    },
    {
      id: "ach-5",
      rank: "3RD PRIZE",
      title: "Pitch Perfect",
      event: "Idea Showcase",
      date: "October 2024",
      year: "2024",
      imageKey: "techThrive",
      hasCertificate: true,
    },
  ]
};

export const certificationsSectionData = {
  sectionLabel: "05 / CERTIFICATIONS",
  mainHeading: "CERTIFICATIONS",
  supportingText: "Verified certificates across AI, machine learning, data science, databases, and software engineering.",
  certifications: [
    {
      id: "cert-1",
      number: "01",
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      assetKey: "awsCloud",
      fileType: "image",
    },
    {
      id: "cert-2",
      number: "02",
      title: "TCS iON National Qualifier Test (NQT)",
      issuer: "TCS iON",
      assetKey: "tcsIon",
      fileType: "image",
    },
    {
      id: "cert-3",
      number: "03",
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM / Coursera",
      assetKey: "databasesSql",
      fileType: "image",
    },
    {
      id: "cert-4",
      number: "04",
      title: "Code Clash 2025",
      issuer: "Technical Coding Competition",
      assetKey: "codeClash",
      fileType: "image",
    },
    {
      id: "cert-5",
      number: "05",
      title: "AIML for GeoData Analysis",
      issuer: "GeoData AI/ML",
      assetKey: "aimlGeoData",
      fileType: "pdf",
    },
    {
      id: "cert-6",
      number: "06",
      title: "Deep Learning for Developers",
      issuer: "Deep Learning",
      assetKey: "deepLearningDev",
      fileType: "pdf",
    },
    {
      id: "cert-7",
      number: "07",
      title: "Linguaskill Test Report",
      issuer: "Cambridge Assessment English",
      assetKey: "linguaskill",
      fileType: "pdf",
    },
    {
      id: "cert-8",
      number: "08",
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      assetKey: "sqlAdvanced",
      fileType: "pdf",
    },
    {
      id: "cert-9",
      number: "09",
      title: "Machine Learning Using Python and R",
      issuer: "Machine Learning Training",
      assetKey: "mlPythonR",
      fileType: "pdf",
    },
  ]
};

export const leadershipSectionData = {
  sectionLabel: "06 / LEADERSHIP",
  mainHeading: "LEADERSHIP & INVOLVEMENT",
  supportingText: "Beyond technical work, I take an active role in leadership, collaboration, and student activities.",
  featured: {
    number: "01",
    role: "President",
    organization: "IGNITE, Dr. MCET",
    imageKey: "ignite",
    highlight: true,
  },
  items: [
    {
      number: "01",
      role: "President",
      organization: "IGNITE, Dr. MCET",
      imageKey: "ignite",
      highlight: true,
    },
    {
      number: "02",
      role: "NSS Volunteer",
      organization: null,
      imageKey: null,
      highlight: false,
    },
    {
      number: "03",
      role: "Treasurer",
      organization: "INVICTUS, Dr. MCET",
      imageKey: "invictusTreasurer",
      highlight: false,
    },
    {
      number: "04",
      role: "Secretary",
      organization: "INVICTUS, Dr. MCET",
      imageKey: null,
      highlight: false,
    },
  ]
};

export const contactSectionData = {
  sectionLabel: "07 / CONTACT",
  mainHeadingLine1: "LET'S BUILD",
  mainHeadingLine2: "SOMETHING USEFUL.",
  supportingText: "Have an opportunity, project, or idea worth discussing? I'd be happy to connect.",
  name: "Hariharan S",
  email: "hariharan8438431@gmail.com",
  emailMailto: "mailto:hariharan8438431@gmail.com",
  ctaText: "GET IN TOUCH",
  linkedin: {
    label: "LINKEDIN",
    url: "https://www.linkedin.com/in/hariharan-s-37757a284",
    displayUrl: "linkedin.com/in/hariharan-s-37757a284",
  },
  github: {
    label: "GITHUB",
    url: "https://github.com/Hariharan1520",
    displayUrl: "github.com/Hariharan1520",
  },
  leetcode: {
    label: "LEETCODE",
    url: "https://leetcode.com/u/hariharan20/",
    displayUrl: "leetcode.com/u/hariharan20",
  },
};

export const footerData = {
  name: "HARIHARAN S.",
  role: "AI ENGINEER",
  specialties: "ML ENGINEER · DATA ANALYST · SOFTWARE DEVELOPER",
  navLinks: [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "LEADERSHIP", href: "#leadership" },
    { label: "CONTACT", href: "#contact" },
  ],
  socialLinks: [
    { label: "GITHUB", url: "https://github.com/Hariharan1520", external: true },
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/hariharan-s-37757a284", external: true },
    { label: "LEETCODE", url: "https://leetcode.com/u/hariharan20/", external: true },
    { label: "EMAIL", url: "mailto:hariharan8438431@gmail.com", external: false },
  ],
  copyrightYear: 2026,
  copyrightText: "© 2026 HARIHARAN S.",
  tagline: "BUILT WITH DATA, CODE & CURIOSITY.",
};


