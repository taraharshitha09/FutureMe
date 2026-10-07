const futurePaths = {
  software: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "Software Engineer",
      description:
        "Build a strong foundation and grow steadily into a reliable software engineering career.",
      environment: "Established companies / Enterprise",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "Moderate",
      opportunity: "Strong",
      timeline: [
        "Build programming fundamentals",
        "Master DSA",
        "Learn frontend / backend",
        "Build real projects",
        "Get an internship",
        "Grow into Software Engineer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "Full Stack / Software Engineer",
      description:
        "Go deeper into modern engineering and target high-growth product companies.",
      environment: "Product companies / High-growth teams",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master DSA",
        "Become strong in full-stack development",
        "Learn system design",
        "Build production-level projects",
        "Target product companies",
        "Become a high-growth engineer"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Tech Founder / Product Builder",
      description:
        "Use your engineering skills to build products, freelance or create your own startup.",
      environment: "Startup / Freelance / Entrepreneurship",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master software development",
        "Identify real-world problems",
        "Build useful products",
        "Launch and test ideas",
        "Build users / clients",
        "Become a Product Builder or Founder"
      ]
    }
  },

  ai: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "AI / ML Engineer",
      description:
        "Build strong AI fundamentals and enter the field through a stable engineering role.",
      environment: "Established companies / AI teams",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "High",
      opportunity: "Strong",
      timeline: [
        "Master Python",
        "Learn mathematics and statistics",
        "Learn machine learning",
        "Build AI projects",
        "Get an internship",
        "Become an AI / ML Engineer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "GenAI / LLM Engineer",
      description:
        "Specialize in fast-growing AI technologies and target advanced AI roles.",
      environment: "AI startups / Product companies",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master ML",
        "Learn deep learning",
        "Learn Generative AI",
        "Master LLMs and RAG",
        "Build advanced AI systems",
        "Target GenAI / LLM Engineer roles"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "AI Product Builder / Founder",
      description:
        "Combine AI skills with product thinking and build your own intelligent products.",
      environment: "Startup / Freelance / AI products",
      stability: "Variable",
      growth: "Extremely High",
      risk: "High",
      learning: "Very High",
      opportunity: "Extremely High",
      timeline: [
        "Master AI development",
        "Find real-world problems",
        "Build AI-powered products",
        "Launch MVPs",
        "Find users or clients",
        "Build an AI startup or product business"
      ]
    }
  },

  data: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "Data Analyst",
      description:
        "Start with analytics and gradually build strong business and technical skills.",
      environment: "Enterprise / Business teams",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "Moderate",
      opportunity: "Strong",
      timeline: [
        "Learn SQL",
        "Learn Excel and Python",
        "Master data visualization",
        "Build dashboards",
        "Get an analytics internship",
        "Become a Data Analyst"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "Data Scientist",
      description:
        "Combine statistics, programming and machine learning to solve complex problems.",
      environment: "Product companies / Data teams",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master statistics",
        "Master Python and SQL",
        "Learn machine learning",
        "Build predictive models",
        "Create a strong portfolio",
        "Become a Data Scientist"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Analytics Entrepreneur",
      description:
        "Use data skills to build analytics products, consulting services or your own business.",
      environment: "Freelance / Consulting / Startup",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master data analytics",
        "Solve business problems",
        "Build analytics solutions",
        "Work with clients",
        "Create reusable products",
        "Build a data-focused business"
      ]
    }
  },

  cloud: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "Cloud Engineer",
      description:
        "Build reliable cloud infrastructure skills and grow steadily in enterprise environments.",
      environment: "Enterprise / IT infrastructure",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "High",
      opportunity: "Strong",
      timeline: [
        "Learn Linux",
        "Master networking",
        "Learn cloud fundamentals",
        "Learn AWS / Azure",
        "Get cloud certification",
        "Become a Cloud Engineer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "DevOps / SRE Engineer",
      description:
        "Specialize in automation, reliability and large-scale infrastructure.",
      environment: "Product companies / Cloud teams",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master Linux and networking",
        "Learn Docker",
        "Learn Kubernetes",
        "Master CI/CD",
        "Learn infrastructure as code",
        "Become DevOps / SRE Engineer"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Cloud Consultant / Platform Builder",
      description:
        "Use cloud expertise to work independently, consult or build infrastructure products.",
      environment: "Consulting / Freelance / Startup",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master cloud architecture",
        "Build real infrastructure",
        "Work with clients",
        "Automate deployments",
        "Build reusable cloud solutions",
        "Become an independent cloud specialist"
      ]
    }
  },

  cybersecurity: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "Cybersecurity Analyst",
      description:
        "Build strong security fundamentals and enter cybersecurity through a structured role.",
      environment: "SOC / Enterprise security teams",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "High",
      opportunity: "Strong",
      timeline: [
        "Learn networking",
        "Master Linux",
        "Learn security fundamentals",
        "Practice SOC skills",
        "Get security internship",
        "Become Cybersecurity Analyst"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "Security Engineer",
      description:
        "Develop deeper technical security expertise and specialize in advanced security engineering.",
      environment: "Product companies / Security teams",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master networking",
        "Learn web security",
        "Learn ethical hacking",
        "Master cloud security",
        "Build security projects",
        "Become a Security Engineer"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Security Researcher / Consultant",
      description:
        "Go deeper into security research, independent work and specialized consulting.",
      environment: "Research / Consulting / Freelance",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master offensive and defensive security",
        "Research vulnerabilities ethically",
        "Build security tools",
        "Participate in security communities",
        "Work with organizations",
        "Become a Security Researcher or Consultant"
      ]
    }
  },

  uiux: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "UI / UX Designer",
      description:
        "Build strong design fundamentals and grow through structured product teams.",
      environment: "Design teams / Product companies",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "Moderate",
      opportunity: "Strong",
      timeline: [
        "Learn design fundamentals",
        "Master Figma",
        "Learn UX research",
        "Build case studies",
        "Create portfolio",
        "Become UI / UX Designer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "Product Designer",
      description:
        "Combine UX, visual design and product thinking to work on large digital products.",
      environment: "Product companies / Design teams",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master UX",
        "Learn product thinking",
        "Build design systems",
        "Create advanced case studies",
        "Work with product teams",
        "Become Product Designer"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Independent Designer / Founder",
      description:
        "Build your own design studio, freelance career or digital products.",
      environment: "Freelance / Studio / Startup",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master product design",
        "Build a strong portfolio",
        "Work with clients",
        "Create your own products",
        "Build a design brand",
        "Become an independent designer or founder"
      ]
    }
  },

  blockchain: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "Blockchain Developer",
      description:
        "Build strong blockchain fundamentals and develop decentralized applications.",
      environment: "Web3 companies / Engineering teams",
      stability: "Medium",
      growth: "Steady",
      risk: "Medium",
      learning: "High",
      opportunity: "Strong",
      timeline: [
        "Learn blockchain fundamentals",
        "Learn JavaScript",
        "Learn Solidity",
        "Build smart contracts",
        "Build dApps",
        "Become Blockchain Developer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "Protocol Engineer",
      description:
        "Go deeper into blockchain architecture and protocol-level development.",
      environment: "Web3 protocols / Research teams",
      stability: "Medium",
      growth: "Very High",
      risk: "High",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master blockchain",
        "Master Solidity",
        "Study protocols",
        "Learn cryptography",
        "Contribute to open source",
        "Become Protocol Engineer"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Web3 Founder / Builder",
      description:
        "Build decentralized products and experiment with new Web3 business models.",
      environment: "Startup / Independent building",
      stability: "Low",
      growth: "Extremely High",
      risk: "Very High",
      learning: "Very High",
      opportunity: "Extremely High",
      timeline: [
        "Master Web3 development",
        "Identify a real problem",
        "Build a decentralized product",
        "Launch an MVP",
        "Build a community",
        "Become a Web3 Product Builder"
      ]
    }
  },

  iot: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "IoT Engineer",
      description:
        "Build embedded and connected-device skills for structured engineering roles.",
      environment: "Hardware / IoT companies",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "High",
      opportunity: "Strong",
      timeline: [
        "Learn C/C++",
        "Learn electronics",
        "Learn microcontrollers",
        "Learn IoT networking",
        "Build IoT projects",
        "Become IoT Engineer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "Robotics Engineer",
      description:
        "Combine embedded systems, robotics and intelligent software.",
      environment: "Robotics / R&D companies",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master embedded systems",
        "Learn robotics",
        "Learn ROS",
        "Build autonomous systems",
        "Work on advanced projects",
        "Become Robotics Engineer"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Hardware Startup Founder",
      description:
        "Create intelligent hardware products and build your own technology venture.",
      environment: "Startup / Hardware innovation",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master IoT",
        "Identify a real-world problem",
        "Build a prototype",
        "Test with users",
        "Develop the product",
        "Launch a hardware startup"
      ]
    }
  },

  research: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "Research Engineer",
      description:
        "Build strong technical foundations and enter research through structured organizations.",
      environment: "Research labs / Universities",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "Very High",
      opportunity: "Strong",
      timeline: [
        "Master programming",
        "Learn mathematics",
        "Master algorithms",
        "Learn research methodology",
        "Complete research projects",
        "Become Research Engineer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "AI / ML Researcher",
      description:
        "Specialize deeply in an advanced research area and contribute to new technology.",
      environment: "AI labs / Research organizations",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "Extremely High",
      opportunity: "Very High",
      timeline: [
        "Master mathematics",
        "Master algorithms",
        "Choose a specialization",
        "Read research papers",
        "Conduct experiments",
        "Publish research"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Independent Researcher / Founder",
      description:
        "Turn research ideas into products, tools or independent technology ventures.",
      environment: "Independent / Startup / Research",
      stability: "Variable",
      growth: "Extremely High",
      risk: "High",
      learning: "Extremely High",
      opportunity: "Extremely High",
      timeline: [
        "Develop deep expertise",
        "Find an unsolved problem",
        "Conduct original research",
        "Build a working prototype",
        "Publish or commercialize",
        "Build a research-driven venture"
      ]
    }
  },

  testing: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "QA Engineer",
      description:
        "Build strong testing fundamentals and grow into software quality engineering.",
      environment: "Enterprise / QA teams",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "Moderate",
      opportunity: "Strong",
      timeline: [
        "Learn testing fundamentals",
        "Learn programming",
        "Practice manual testing",
        "Learn automation",
        "Build test projects",
        "Become QA Engineer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "SDET / Automation Engineer",
      description:
        "Combine programming, automation and testing to build advanced quality systems.",
      environment: "Product companies / Engineering teams",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master programming",
        "Learn Selenium",
        "Learn API testing",
        "Build automation frameworks",
        "Learn CI/CD",
        "Become SDET"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "QA Automation Consultant",
      description:
        "Build independent testing solutions and work with multiple products or clients.",
      environment: "Consulting / Freelance",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master automation",
        "Build testing frameworks",
        "Work with clients",
        "Create reusable solutions",
        "Build a consulting portfolio",
        "Become an automation consultant"
      ]
    }
  },

  networking: {
    safe: {
      icon: "🌱",
      title: "Safe Path",
      role: "Network Engineer",
      description:
        "Build strong networking fundamentals and grow through enterprise infrastructure roles.",
      environment: "Enterprise / IT infrastructure",
      stability: "High",
      growth: "Steady",
      risk: "Low",
      learning: "High",
      opportunity: "Strong",
      timeline: [
        "Learn networking fundamentals",
        "Learn routing and switching",
        "Learn Linux",
        "Learn network security",
        "Build network labs",
        "Become Network Engineer"
      ]
    },

    ambitious: {
      icon: "🚀",
      title: "Ambitious Path",
      role: "Network / Infrastructure Architect",
      description:
        "Specialize in large-scale infrastructure, cloud networking and architecture.",
      environment: "Cloud / Enterprise infrastructure",
      stability: "High",
      growth: "Very High",
      risk: "Medium",
      learning: "Very High",
      opportunity: "Very High",
      timeline: [
        "Master networking",
        "Master Linux",
        "Learn cloud networking",
        "Learn security",
        "Design large systems",
        "Become Infrastructure Architect"
      ]
    },

    bold: {
      icon: "⚡",
      title: "Bold Path",
      role: "Network Consultant",
      description:
        "Use infrastructure expertise to work independently and solve networking problems for organizations.",
      environment: "Consulting / Freelance",
      stability: "Variable",
      growth: "Very High",
      risk: "High",
      learning: "High",
      opportunity: "Very High",
      timeline: [
        "Master networking",
        "Build enterprise labs",
        "Gain practical experience",
        "Work with organizations",
        "Build a consulting portfolio",
        "Become an independent network consultant"
      ]
    }
  }
};

export default futurePaths;