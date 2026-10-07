const roadmaps = {
  software: {
    name: "Software Engineering",
    icon: "💻",
    target: "Software Engineer",
    totalHours: 420,

    steps: [
      {
        title: "Programming Fundamentals",
        time: "3-4 weeks",
        hours: 35,
        learn: [
          "Variables and data types",
          "Conditions and loops",
          "Functions",
          "OOP concepts",
          "Exception handling"
        ],
        project: "Student Management System",
        resources: [
          {
            name: "Java Documentation",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.oracle.com/en/java/"
          },
          {
            name: "HackerRank",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.hackerrank.com/domains/java"
          }
        ]
      },

      {
        title: "Data Structures & Algorithms",
        time: "6-8 weeks",
        hours: 70,
        learn: [
          "Arrays",
          "Strings",
          "Linked Lists",
          "Stacks and Queues",
          "Trees",
          "Graphs",
          "Sorting",
          "Searching",
          "Dynamic Programming"
        ],
        project: "Algorithm Visualizer",
        resources: [
          {
            name: "GeeksforGeeks",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.geeksforgeeks.org/"
          },
          {
            name: "LeetCode",
            type: "PRACTICE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://leetcode.com/"
          }
        ]
      },

      {
        title: "Git & GitHub",
        time: "1 week",
        hours: 8,
        learn: [
          "Git basics",
          "Repositories",
          "Branches",
          "Commits",
          "Pull requests"
        ],
        project: "Publish a personal project",
        resources: [
          {
            name: "GitHub Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.github.com/"
          }
        ]
      },

      {
        title: "Frontend Development",
        time: "5–6 weeks",
        hours: 55,
        learn: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Responsive design",
          "API integration"
        ],
        project: "Full Stack Portfolio UI",
        resources: [
          {
            name: "MDN Web Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://developer.mozilla.org/"
          },
          {
            name: "React Documentation",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://react.dev/"
          }
        ]
      },

      {
        title: "Backend Development",
        time: "5–6 weeks",
        hours: 55,
        learn: [
          "REST APIs",
          "Authentication",
          "Server-side programming",
          "Spring Boot / Node.js",
          "API security"
        ],
        project: "Authentication API",
        resources: [
          {
            name: "Spring Boot",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://spring.io/projects/spring-boot"
          },
          {
            name: "Node.js",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://nodejs.org/docs/latest/api/"
          }
        ]
      },

      {
        title: "Databases",
        time: "3 weeks",
        hours: 30,
        learn: [
          "SQL",
          "Joins",
          "Normalization",
          "Indexes",
          "Transactions",
          "Database design"
        ],
        project: "College Management Database",
        resources: [
          {
            name: "SQLBolt",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://sqlbolt.com/"
          },
          {
            name: "PostgreSQL Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://www.postgresql.org/docs/"
          }
        ]
      },

      {
        title: "System Design",
        time: "4 weeks",
        hours: 35,
        learn: [
          "Scalability",
          "Caching",
          "Load balancing",
          "Microservices",
          "Database scaling"
        ],
        project: "Design a Scalable Web App",
        resources: [
          {
            name: "System Design Primer",
            type: "GITHUB",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://github.com/donnemartin/system-design-primer"
          }
        ]
      },

      {
        title: "Real Projects",
        time: "4–6 weeks",
        hours: 50,
        learn: [
          "Project planning",
          "Team collaboration",
          "Deployment",
          "Documentation",
          "Portfolio building"
        ],
        project: "Production-ready Full Stack Application",
        resources: [
          {
            name: "GitHub",
            type: "PROJECTS",
            tag: "FREE",
            level: "ALL LEVELS",
            url: "https://github.com/"
          }
        ]
      },

      {
        title: "Internship & Interview",
        time: "3–4 weeks",
        hours: 30,
        learn: [
          "Resume",
          "DSA interviews",
          "Projects explanation",
          "Technical interviews",
          "HR interviews"
        ],
        project: "Complete Developer Portfolio",
        resources: [
          {
            name: "LeetCode",
            type: "INTERVIEW",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://leetcode.com/"
          }
        ]
      }
    ]
  },

  ai: {
    name: "AI / ML",
    icon: "🤖",
    target: "AI / ML Engineer",
    totalHours: 480,

    steps: [
      {
        title: "Python",
        time: "3–4 weeks",
        hours: 35,
        learn: [
          "Python syntax",
          "Functions",
          "OOP",
          "File handling",
          "Libraries"
        ],
        project: "AI Student Assistant",
        resources: [
          {
            name: "Python Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.python.org/3/"
          },
          {
            name: "HackerRank Python",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.hackerrank.com/domains/python"
          }
        ]
      },

      {
        title: "Mathematics & Statistics",
        time: "3–4 weeks",
        hours: 35,
        learn: [
          "Linear algebra",
          "Probability",
          "Statistics",
          "Calculus basics",
          "Vectors and matrices"
        ],
        project: "Statistical Data Explorer",
        resources: [
          {
            name: "Khan Academy",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.khanacademy.org/math"
          }
        ]
      },

      {
        title: "NumPy & Pandas",
        time: "2–3 weeks",
        hours: 25,
        learn: [
          "Arrays",
          "DataFrames",
          "Data cleaning",
          "Data manipulation",
          "Numerical operations"
        ],
        project: "Data Analysis Dashboard",
        resources: [
          {
            name: "NumPy Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://numpy.org/doc/"
          },
          {
            name: "Pandas Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://pandas.pydata.org/docs/"
          }
        ]
      },

      {
        title: "Machine Learning",
        time: "5–6 weeks",
        hours: 55,
        learn: [
          "Regression",
          "Classification",
          "Clustering",
          "Feature engineering",
          "Model evaluation"
        ],
        project: "Student Performance Predictor",
        resources: [
          {
            name: "Kaggle",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.kaggle.com/learn"
          },
          {
            name: "Scikit-learn",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://scikit-learn.org/stable/"
          }
        ]
      },

      {
        title: "Deep Learning",
        time: "5–6 weeks",
        hours: 55,
        learn: [
          "Neural networks",
          "CNN",
          "RNN",
          "Training",
          "Loss functions",
          "Optimizers"
        ],
        project: "Image Classification System",
        resources: [
          {
            name: "PyTorch",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://pytorch.org/docs/"
          },
          {
            name: "TensorFlow",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://www.tensorflow.org/learn"
          }
        ]
      },

      {
        title: "NLP / Computer Vision",
        time: "4 weeks",
        hours: 40,
        learn: [
          "Text processing",
          "Embeddings",
          "Image processing",
          "Object detection",
          "Classification"
        ],
        project: "Image / Text Intelligence App",
        resources: [
          {
            name: "Hugging Face",
            type: "PRACTICE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://huggingface.co/learn"
          },
          {
            name: "OpenCV",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://docs.opencv.org/"
          }
        ]
      },

      {
        title: "Generative AI",
        time: "4 weeks",
        hours: 40,
        learn: [
          "LLMs",
          "Prompt engineering",
          "Embeddings",
          "Vector databases",
          "AI applications"
        ],
        project: "AI Study Assistant",
        resources: [
          {
            name: "Hugging Face",
            type: "COURSE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://huggingface.co/learn"
          }
        ]
      },

      {
        title: "LLM & RAG",
        time: "3–4 weeks",
        hours: 35,
        learn: [
          "Retrieval Augmented Generation",
          "Vector search",
          "Chunking",
          "Embeddings",
          "AI pipelines"
        ],
        project: "PDF Question Answering System",
        resources: [
          {
            name: "LangChain Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://python.langchain.com/docs/"
          }
        ]
      },

      {
        title: "AI Projects",
        time: "5 weeks",
        hours: 55,
        learn: [
          "Model deployment",
          "APIs",
          "UI integration",
          "Testing",
          "Portfolio"
        ],
        project: "End-to-End AI Application",
        resources: [
          {
            name: "Kaggle",
            type: "PROJECTS",
            tag: "FREE",
            level: "ALL LEVELS",
            url: "https://www.kaggle.com/"
          },
          {
            name: "GitHub",
            type: "PROJECTS",
            tag: "FREE",
            level: "ALL LEVELS",
            url: "https://github.com/"
          }
        ]
      }
    ]
  },

  data: {
    name: "Data Science & Analytics",
    icon: "📊",
    target: "Data Scientist",
    totalHours: 400,

    steps: [
      {
        title: "Python",
        time: "3 weeks",
        hours: 30,
        learn: ["Python basics", "Functions", "OOP", "Libraries"],
        project: "Data Processing Tool",
        resources: [
          {
            name: "Python Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.python.org/3/"
          }
        ]
      },
      {
        title: "SQL",
        time: "3 weeks",
        hours: 30,
        learn: ["Queries", "Joins", "Subqueries", "CTEs", "Window functions"],
        project: "Sales Database Analysis",
        resources: [
          {
            name: "SQLBolt",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://sqlbolt.com/"
          }
        ]
      },
      {
        title: "Statistics",
        time: "4 weeks",
        hours: 40,
        learn: ["Probability", "Distributions", "Hypothesis testing", "Correlation"],
        project: "Statistics Explorer",
        resources: [
          {
            name: "Khan Academy",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.khanacademy.org/math/statistics-probability"
          }
        ]
      },
      {
        title: "NumPy & Pandas",
        time: "3 weeks",
        hours: 30,
        learn: ["DataFrames", "Cleaning", "Transformation", "Aggregation"],
        project: "Data Cleaning Pipeline",
        resources: [
          {
            name: "Pandas",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://pandas.pydata.org/docs/"
          }
        ]
      },
      {
        title: "Data Visualization",
        time: "3 weeks",
        hours: 25,
        learn: ["Charts", "Dashboards", "Matplotlib", "Power BI"],
        project: "Business Intelligence Dashboard",
        resources: [
          {
            name: "Matplotlib",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://matplotlib.org/stable/"
          },
          {
            name: "Kaggle",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.kaggle.com/learn"
          }
        ]
      },
      {
        title: "Machine Learning",
        time: "5 weeks",
        hours: 50,
        learn: ["Regression", "Classification", "Clustering", "Evaluation"],
        project: "Prediction System",
        resources: [
          {
            name: "Scikit-learn",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://scikit-learn.org/"
          }
        ]
      },
      {
        title: "Portfolio Projects",
        time: "4 weeks",
        hours: 40,
        learn: ["EDA", "Storytelling", "Dashboards", "Business insights"],
        project: "Complete Data Portfolio",
        resources: [
          {
            name: "Kaggle",
            type: "PROJECTS",
            tag: "FREE",
            level: "ALL LEVELS",
            url: "https://www.kaggle.com/"
          }
        ]
      }
    ]
  },

  cloud: {
    name: "Cloud / DevOps",
    icon: "☁️",
    target: "Cloud / DevOps Engineer",
    totalHours: 400,

    steps: [
      {
        title: "Linux",
        time: "3 weeks",
        hours: 30,
        learn: ["Terminal", "Files", "Permissions", "Processes", "Shell"],
        project: "Linux Server Setup",
        resources: [
          {
            name: "Linux Journey",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://linuxjourney.com/"
          }
        ]
      },
      {
        title: "Networking",
        time: "3 weeks",
        hours: 30,
        learn: ["TCP/IP", "DNS", "HTTP", "Ports", "Routing"],
        project: "Network Monitoring Tool",
        resources: [
          {
            name: "Cisco Networking Academy",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.netacad.com/"
          }
        ]
      },
      {
        title: "Git & GitHub",
        time: "1 week",
        hours: 8,
        learn: ["Git", "Branches", "Pull requests", "CI basics"],
        project: "Team Git Workflow",
        resources: [
          {
            name: "GitHub Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.github.com/"
          }
        ]
      },
      {
        title: "AWS / Cloud Fundamentals",
        time: "4 weeks",
        hours: 40,
        learn: ["Compute", "Storage", "Networking", "IAM", "Databases"],
        project: "Deploy a Web Application",
        resources: [
          {
            name: "AWS Skill Builder",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://skillbuilder.aws/"
          }
        ]
      },
      {
        title: "Docker",
        time: "2 weeks",
        hours: 20,
        learn: ["Containers", "Images", "Dockerfiles", "Compose"],
        project: "Containerized Web App",
        resources: [
          {
            name: "Docker Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://docs.docker.com/"
          }
        ]
      },
      {
        title: "Kubernetes",
        time: "4 weeks",
        hours: 40,
        learn: ["Pods", "Services", "Deployments", "Scaling"],
        project: "Kubernetes Deployment",
        resources: [
          {
            name: "Kubernetes Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://kubernetes.io/docs/"
          }
        ]
      },
      {
        title: "CI/CD",
        time: "2 weeks",
        hours: 20,
        learn: ["Pipelines", "Automation", "Testing", "Deployment"],
        project: "Automated Deployment Pipeline",
        resources: [
          {
            name: "GitHub Actions",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://docs.github.com/en/actions"
          }
        ]
      },
      {
        title: "Terraform & Monitoring",
        time: "3 weeks",
        hours: 30,
        learn: ["Infrastructure as Code", "Monitoring", "Logs", "Alerts"],
        project: "Infrastructure Automation",
        resources: [
          {
            name: "Terraform Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://developer.hashicorp.com/terraform/docs"
          }
        ]
      }
    ]
  },

  cybersecurity: {
    name: "Cybersecurity",
    icon: "🛡️",
    target: "Cybersecurity Engineer",
    totalHours: 420,

    steps: [
      {
        title: "Computer Networks",
        time: "4 weeks",
        hours: 40,
        learn: ["TCP/IP", "DNS", "HTTP", "Ports", "Firewalls"],
        project: "Network Traffic Analyzer",
        resources: [
          {
            name: "Cisco Networking Academy",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.netacad.com/"
          }
        ]
      },
      {
        title: "Linux",
        time: "3 weeks",
        hours: 30,
        learn: ["Linux commands", "Permissions", "Processes", "Networking"],
        project: "Linux Security Lab",
        resources: [
          {
            name: "Linux Journey",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://linuxjourney.com/"
          }
        ]
      },
      {
        title: "Security Fundamentals",
        time: "3 weeks",
        hours: 30,
        learn: ["CIA Triad", "Threats", "Vulnerabilities", "Authentication"],
        project: "Security Risk Assessment",
        resources: [
          {
            name: "OWASP",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://owasp.org/"
          }
        ]
      },
      {
        title: "Web Security",
        time: "4 weeks",
        hours: 40,
        learn: ["XSS", "SQL Injection", "Authentication", "OWASP Top 10"],
        project: "Secure Web Application",
        resources: [
          {
            name: "PortSwigger Web Security Academy",
            type: "PRACTICE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://portswigger.net/web-security"
          }
        ]
      },
      {
        title: "Ethical Hacking",
        time: "5 weeks",
        hours: 50,
        learn: ["Reconnaissance", "Scanning", "Enumeration", "Security testing"],
        project: "Authorized Security Lab",
        resources: [
          {
            name: "TryHackMe",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://tryhackme.com/"
          },
          {
            name: "Hack The Box",
            type: "PRACTICE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://www.hackthebox.com/"
          }
        ]
      },
      {
        title: "SOC & SIEM",
        time: "4 weeks",
        hours: 40,
        learn: ["Logs", "Alerts", "SIEM", "Incident analysis"],
        project: "Security Monitoring Dashboard",
        resources: [
          {
            name: "LetsDefend",
            type: "PRACTICE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://letsdefend.io/"
          }
        ]
      },
      {
        title: "Digital Forensics",
        time: "3 weeks",
        hours: 30,
        learn: ["Evidence", "Disk analysis", "Memory analysis", "Investigation"],
        project: "Digital Investigation Case",
        resources: [
          {
            name: "Autopsy",
            type: "TOOL",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://www.autopsy.com/"
          }
        ]
      },
      {
        title: "Cloud Security",
        time: "4 weeks",
        hours: 40,
        learn: ["IAM", "Cloud threats", "Security controls", "Monitoring"],
        project: "Cloud Security Audit",
        resources: [
          {
            name: "AWS Security",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://aws.amazon.com/security/"
          }
        ]
      }
    ]
  },

  uiux: {
    name: "UI / UX & Product",
    icon: "🎨",
    target: "Product Designer",
    totalHours: 300,

    steps: [
      {
        title: "Design Fundamentals",
        time: "2 weeks",
        hours: 20,
        learn: ["Color", "Typography", "Layout", "Visual hierarchy"],
        project: "Landing Page Design",
        resources: [
          {
            name: "Figma Learn",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://help.figma.com/hc/en-us/categories/360002051613"
          }
        ]
      },
      {
        title: "Figma",
        time: "3 weeks",
        hours: 30,
        learn: ["Frames", "Components", "Auto layout", "Prototyping"],
        project: "Mobile App Prototype",
        resources: [
          {
            name: "Figma",
            type: "TOOL",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.figma.com/"
          }
        ]
      },
      {
        title: "UX Research",
        time: "3 weeks",
        hours: 25,
        learn: ["User interviews", "Personas", "User journeys", "Research"],
        project: "User Research Case Study",
        resources: [
          {
            name: "Nielsen Norman Group",
            type: "ARTICLES",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.nngroup.com/articles/"
          }
        ]
      },
      {
        title: "Wireframing & Prototyping",
        time: "3 weeks",
        hours: 25,
        learn: ["Wireframes", "Flows", "Prototypes", "Usability"],
        project: "Complete App Prototype",
        resources: [
          {
            name: "Figma",
            type: "PRACTICE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.figma.com/"
          }
        ]
      },
      {
        title: "Product Design",
        time: "4 weeks",
        hours: 35,
        learn: ["Product thinking", "Design systems", "Accessibility"],
        project: "End-to-End Product Case Study",
        resources: [
          {
            name: "Material Design",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://m3.material.io/"
          }
        ]
      },
      {
        title: "Portfolio",
        time: "3 weeks",
        hours: 30,
        learn: ["Case studies", "Presentation", "Portfolio storytelling"],
        project: "Professional Design Portfolio",
        resources: [
          {
            name: "Behance",
            type: "INSPIRATION",
            tag: "FREE",
            level: "ALL LEVELS",
            url: "https://www.behance.net/"
          }
        ]
      }
    ]
  },

  blockchain: {
    name: "Blockchain / Web3",
    icon: "🔗",
    target: "Blockchain Developer",
    totalHours: 380,

    steps: [
      {
        title: "Blockchain Fundamentals",
        time: "2 weeks",
        hours: 20,
        learn: ["Blocks", "Consensus", "Hashing", "Decentralization"],
        project: "Mini Blockchain",
        resources: [
          {
            name: "Ethereum Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://ethereum.org/developers/docs/"
          }
        ]
      },
      {
        title: "JavaScript",
        time: "3 weeks",
        hours: 30,
        learn: ["JavaScript", "Async programming", "APIs"],
        project: "Web3 Frontend",
        resources: [
          {
            name: "MDN JavaScript",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          }
        ]
      },
      {
        title: "Solidity",
        time: "5 weeks",
        hours: 50,
        learn: ["Smart contracts", "Functions", "Events", "Security"],
        project: "Token Smart Contract",
        resources: [
          {
            name: "Solidity Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://docs.soliditylang.org/"
          }
        ]
      },
      {
        title: "Smart Contracts",
        time: "4 weeks",
        hours: 40,
        learn: ["Contract design", "Testing", "Deployment", "Gas"],
        project: "Decentralized Application",
        resources: [
          {
            name: "OpenZeppelin",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://docs.openzeppelin.com/"
          }
        ]
      },
      {
        title: "Web3 Development",
        time: "4 weeks",
        hours: 40,
        learn: ["Wallets", "Blockchain APIs", "Frontend integration"],
        project: "Web3 Application",
        resources: [
          {
            name: "Ethereum Developer Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://ethereum.org/developers/"
          }
        ]
      }
    ]
  },

  iot: {
    name: "IoT / Robotics",
    icon: "🤖",
    target: "IoT / Robotics Engineer",
    totalHours: 420,

    steps: [
      {
        title: "C / C++ Fundamentals",
        time: "4 weeks",
        hours: 40,
        learn: ["C", "Pointers", "Memory", "C++ basics"],
        project: "Sensor Controller",
        resources: [
          {
            name: "Learn C++",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.learncpp.com/"
          }
        ]
      },
      {
        title: "Electronics",
        time: "3 weeks",
        hours: 30,
        learn: ["Voltage", "Current", "Sensors", "Circuits"],
        project: "Smart Sensor System",
        resources: [
          {
            name: "Arduino Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.arduino.cc/"
          }
        ]
      },
      {
        title: "Microcontrollers",
        time: "4 weeks",
        hours: 40,
        learn: ["Arduino", "ESP32", "GPIO", "Communication"],
        project: "IoT Monitoring Device",
        resources: [
          {
            name: "Arduino",
            type: "PROJECTS",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.arduino.cc/"
          }
        ]
      },
      {
        title: "IoT Networking",
        time: "3 weeks",
        hours: 30,
        learn: ["MQTT", "HTTP", "Wi-Fi", "Cloud IoT"],
        project: "Connected IoT Device",
        resources: [
          {
            name: "MQTT",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://mqtt.org/"
          }
        ]
      },
      {
        title: "Robotics",
        time: "5 weeks",
        hours: 50,
        learn: ["Robotics basics", "Sensors", "Motors", "Control"],
        project: "Obstacle Avoiding Robot",
        resources: [
          {
            name: "ROS",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://docs.ros.org/"
          }
        ]
      }
    ]
  },

  research: {
    name: "Computer Science Research",
    icon: "🔬",
    target: "Research Engineer",
    totalHours: 450,

    steps: [
      {
        title: "Programming",
        time: "4 weeks",
        hours: 40,
        learn: ["Python", "Java", "Algorithms"],
        project: "Algorithm Implementation Library",
        resources: [
          {
            name: "Python Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.python.org/3/"
          }
        ]
      },
      {
        title: "Advanced Mathematics",
        time: "5 weeks",
        hours: 50,
        learn: ["Linear algebra", "Probability", "Optimization"],
        project: "Mathematical Model",
        resources: [
          {
            name: "MIT OpenCourseWare",
            type: "COURSE",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://ocw.mit.edu/"
          }
        ]
      },
      {
        title: "Algorithms",
        time: "6 weeks",
        hours: 60,
        learn: ["Advanced data structures", "Graph algorithms", "Optimization"],
        project: "Algorithm Research Project",
        resources: [
          {
            name: "MIT OpenCourseWare",
            type: "COURSE",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://ocw.mit.edu/search/?q=algorithms"
          }
        ]
      },
      {
        title: "Research Methodology",
        time: "3 weeks",
        hours: 25,
        learn: ["Literature review", "Experiments", "Research writing"],
        project: "Mini Research Paper",
        resources: [
          {
            name: "Google Scholar",
            type: "RESEARCH",
            tag: "FREE",
            level: "ALL LEVELS",
            url: "https://scholar.google.com/"
          }
        ]
      },
      {
        title: "Specialization",
        time: "8 weeks",
        hours: 80,
        learn: ["AI research", "Distributed systems", "Algorithms"],
        project: "Research Publication Project",
        resources: [
          {
            name: "arXiv",
            type: "RESEARCH",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://arxiv.org/"
          }
        ]
      }
    ]
  },

  testing: {
    name: "QA / Software Testing",
    icon: "🧪",
    target: "QA Automation Engineer",
    totalHours: 320,

    steps: [
      {
        title: "Testing Fundamentals",
        time: "2 weeks",
        hours: 20,
        learn: ["Test cases", "Bug lifecycle", "Test planning"],
        project: "Manual Testing Project",
        resources: [
          {
            name: "ISTQB",
            type: "CERTIFICATION",
            tag: "REFERENCE",
            level: "BEGINNER",
            url: "https://www.istqb.org/"
          }
        ]
      },
      {
        title: "Java / Python",
        time: "3 weeks",
        hours: 30,
        learn: ["Programming", "OOP", "Collections", "Exceptions"],
        project: "Testing Utility",
        resources: [
          {
            name: "Python Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://docs.python.org/3/"
          }
        ]
      },
      {
        title: "Selenium",
        time: "4 weeks",
        hours: 40,
        learn: ["Locators", "WebDriver", "Automation", "Page Objects"],
        project: "Automated Website Testing",
        resources: [
          {
            name: "Selenium Docs",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://www.selenium.dev/documentation/"
          }
        ]
      },
      {
        title: "API Testing",
        time: "3 weeks",
        hours: 30,
        learn: ["REST APIs", "Postman", "Assertions", "Automation"],
        project: "API Test Suite",
        resources: [
          {
            name: "Postman Learning",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://learning.postman.com/"
          }
        ]
      },
      {
        title: "CI/CD Testing",
        time: "3 weeks",
        hours: 30,
        learn: ["Automation pipelines", "Reports", "GitHub Actions"],
        project: "Automated CI Test Pipeline",
        resources: [
          {
            name: "GitHub Actions",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://docs.github.com/en/actions"
          }
        ]
      }
    ]
  },

  networking: {
    name: "Networking / Systems",
    icon: "🌐",
    target: "Network Engineer",
    totalHours: 380,

    steps: [
      {
        title: "Networking Fundamentals",
        time: "4 weeks",
        hours: 40,
        learn: ["OSI", "TCP/IP", "Ethernet", "IP addressing"],
        project: "Network Topology Design",
        resources: [
          {
            name: "Cisco Networking Academy",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://www.netacad.com/"
          }
        ]
      },
      {
        title: "Routing & Switching",
        time: "5 weeks",
        hours: 50,
        learn: ["Routers", "Switches", "VLAN", "Routing protocols"],
        project: "Enterprise Network Simulation",
        resources: [
          {
            name: "Cisco Packet Tracer",
            type: "PRACTICE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://www.netacad.com/courses/packet-tracer"
          }
        ]
      },
      {
        title: "Linux Systems",
        time: "3 weeks",
        hours: 30,
        learn: ["Linux", "Processes", "Networking commands", "Services"],
        project: "Linux Network Server",
        resources: [
          {
            name: "Linux Journey",
            type: "COURSE",
            tag: "FREE",
            level: "BEGINNER",
            url: "https://linuxjourney.com/"
          }
        ]
      },
      {
        title: "Network Security",
        time: "4 weeks",
        hours: 40,
        learn: ["Firewalls", "VPN", "IDS", "Security monitoring"],
        project: "Secure Network Design",
        resources: [
          {
            name: "Cisco Security",
            type: "COURSE",
            tag: "FREE",
            level: "INTERMEDIATE",
            url: "https://www.netacad.com/"
          }
        ]
      },
      {
        title: "Cloud Networking",
        time: "4 weeks",
        hours: 40,
        learn: ["VPC", "Load balancing", "DNS", "Cloud networking"],
        project: "Cloud Network Architecture",
        resources: [
          {
            name: "AWS Networking",
            type: "DOCUMENTATION",
            tag: "FREE",
            level: "ADVANCED",
            url: "https://docs.aws.amazon.com/vpc/"
          }
        ]
      }
    ]
  }
};

export default roadmaps;