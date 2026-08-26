export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  visualType: 'workflow' | 'vision' | 'agent' | 'messaging' | 'architecture';
  capabilities: string[];
  technologies: string[];
  useCases: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  visualFlow: string[];
  exampleOutcome: string;
}

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  screenshotType: 'restaurant' | 'clinic' | 'social-media' | 'ecommerce-agent';
  metricsLabel: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Differentiator {
  title: string;
  description: string;
  iconName: string;
}

export interface Founder {
  id: string;
  placeholderName: string;
  role: string;
  bio: string;
  email: string;
  linkedin: string;
  specialties: string[];
  image?: string;
}

export interface TechLayer {
  layerName: string;
  layerTag: string;
  description: string;
  items: { name: string; tag: string }[];
}

export const COMPANY_NAME = "Farogh AI";
export const COMPANY_LOCATION = "Pakistan";
export const PLACEHOLDERS = {
  founder1Name: "[FOUNDER 1 NAME]",
  founder2Name: "[FOUNDER 2 NAME]",
  founder3Name: "[FOUNDER 3 NAME]",
  founder4Name: "[FOUNDER 4 NAME]",
  founder5Name: "[FOUNDER 5 NAME]",
  role: "[ROLE]",
  shortBio: "[SHORT BIO]",
  email: "hello@faroghai.com",
  whatsapp: "[WHATSAPP NUMBER]",
  linkedin: "[LINKEDIN URL]",
  bookingLink: "[BOOKING LINK]"
};

export const CAPABILITY_STRIP_ITEMS = [
  "AI Automation Pipelines",
  "Computer Vision Analytics",
  "AI Agents & Assistive Systems",
  "WhatsApp Cloud API Integration",
  "Custom Web & Portal Development",
  "Full-Stack Systems Architecture"
];

// 4 CORE OUTCOMES ("AI isn't the product. The outcome is.")
export const OUTCOMES_DATA = [
  {
    number: "01",
    title: "Automate Repetitive Work",
    description: "Connect APIs, extract document data, and replace spreadsheet tasks with automatic pipelines."
  },
  {
    number: "02",
    title: "Understand What's Happening",
    description: "Convert video feeds and operational data into clear daily dashboards and real-time alerts."
  },
  {
    number: "03",
    title: "Respond to Customers Instantly",
    description: "Handle incoming inquiries, status tracking, and appointment bookings 24/7 over WhatsApp."
  },
  {
    number: "04",
    title: "Build Systems Around Your Workflow",
    description: "Custom software tailored strictly to your company's actual operating logic."
  }
];

// 5 PRIMARY CAPABILITIES
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI Automation",
    shortDesc: "Automate repetitive workflows, connect business systems, and eliminate manual operations.",
    fullDesc: "We build custom automation pipelines that connect your software, APIs, and operational data to eliminate manual data entry, streamline verification, and trigger automated downstream actions.",
    iconName: "Cpu",
    visualType: "workflow",
    capabilities: [
      "Document & PDF extraction pipeline",
      "Cross-system webhook synchronization",
      "Daily operational summary reports"
    ],
    technologies: ["Python", "FastAPI", "SQL", "Custom Webhooks"],
    useCases: [
      "Automating multi-department invoice verification",
      "Extracting unstructured document data into databases",
      "Generating daily automated shift summaries"
    ]
  },
  {
    id: "computer-vision",
    number: "02",
    title: "Computer Vision",
    shortDesc: "Turn camera feeds into operational intelligence using object detection and pose analysis.",
    fullDesc: "We engineer computer vision systems capable of processing video streams in real time, tracking activity, evaluating station occupancy, and converting footage into objective management data.",
    iconName: "Camera",
    visualType: "vision",
    capabilities: [
      "Real-time camera feed analyzer",
      "Station activity & prep time logger",
      "Automated bottleneck alert system"
    ],
    technologies: ["YOLOv8", "OpenCV", "PyTorch", "Python"],
    useCases: [
      "Kitchen prep-station activity tracking in busy restaurants",
      "Workstation occupancy monitoring across store floors",
      "Queue overflow detection and supervisor alerts"
    ]
  },
  {
    id: "ai-agents",
    number: "03",
    title: "AI Agents",
    shortDesc: "Build intelligent agents that understand tasks, retrieve information, and execute defined workflows.",
    fullDesc: "Deploy specialized AI agents designed to execute multi-step operational tasks, query internal databases, communicate with tools, and assist employees or customers automatically.",
    iconName: "Bot",
    visualType: "agent",
    capabilities: [
      "Task execution AI agent",
      "Vector search API & knowledge base",
      "Lead qualification & routing system"
    ],
    technologies: ["Python", "LangChain / Custom Orchestration", "FastAPI", "Vector DBs"],
    useCases: [
      "Internal knowledge base querying for support teams",
      "Lead qualification and automated routing to sales reps",
      "Automated data collection and verification agents"
    ]
  },
  {
    id: "ai-customer-experience",
    number: "04",
    title: "AI Customer Experience",
    shortDesc: "Automate customer communication through WhatsApp Cloud API and web interfaces.",
    fullDesc: "Provide 24/7 instant responses, appointment scheduling, and order status updates through AI systems directly connected to your WhatsApp Cloud API and backend database.",
    iconName: "MessageSquare",
    visualType: "messaging",
    capabilities: [
      "WhatsApp Cloud API bot integration",
      "24/7 automated order status lookup",
      "Clinic appointment scheduler"
    ],
    technologies: ["WhatsApp Cloud API", "Node.js", "Python", "REST APIs"],
    useCases: [
      "Instant WhatsApp order tracking for e-commerce stores",
      "Automated queue status updates for clinic visitors",
      "24/7 FAQs and reservation handling"
    ]
  },
  {
    id: "custom-software",
    number: "05",
    title: "Custom Software",
    shortDesc: "Build full-stack web applications, dashboards, portals, and APIs tailored to your business.",
    fullDesc: "When off-the-shelf software doesn't fit your operational rules, we engineer clean full-stack web applications, internal admin portals, and API backends built precisely around how your business works.",
    iconName: "Layout",
    visualType: "architecture",
    capabilities: [
      "Custom administrative dashboard portal",
      "Full-stack React / Next.js web application",
      "RESTful API backend & database"
    ],
    technologies: ["Next.js", "React", "Node.js / Express", "FastAPI", "PostgreSQL"],
    useCases: [
      "Custom internal admin portals replacing spreadsheets",
      "Real-time operational status dashboards",
      "Multi-tenant customer portals"
    ]
  }
];

// SIGNATURE "FROM INPUT TO ACTION" SYSTEM DIAGRAM DATA
export const INPUT_TO_ACTION_DATA = {
  inputs: [
    { label: "Cameras", detail: "CCTV / IP Streams", icon: "Camera" },
    { label: "WhatsApp", detail: "Cloud API Feeds", icon: "MessageSquare" },
    { label: "Business Data", detail: "PDFs / DBs / Webhooks", icon: "Database" },
    { label: "Customers & Staff", detail: "Web / Mobile Inquiries", icon: "Users" }
  ],
  intelligence: [
    { label: "Computer Vision", detail: "YOLOv8 Detection", icon: "Eye" },
    { label: "AI Models", detail: "NLP & Classification", icon: "Cpu" },
    { label: "AI Agents", detail: "Task & Tool Execution", icon: "Bot" },
    { label: "Automation Logic", detail: "Event Trigger Pipeline", icon: "Workflow" }
  ],
  actions: [
    { label: "Notifications", detail: "WhatsApp / Email Alerts", icon: "Bell" },
    { label: "Live Dashboard", detail: "Real-time Metrics", icon: "BarChart3" },
    { label: "System Reports", detail: "Daily Operational Audit", icon: "FileText" },
    { label: "Workflow Trigger", detail: "Database / API Updates", icon: "Zap" }
  ],
  outcomes: [
    { label: "Less Manual Work", detail: "Eliminate spreadsheet friction" },
    { label: "Better Visibility", detail: "Objective operational clarity" },
    { label: "Faster Response", detail: "Instant customer & staff replies" },
    { label: "Smarter Operations", detail: "Scalable business infrastructure" }
  ]
};

// INDUSTRIES DATA
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    tagline: "Operational clarity & automated guest communication",
    description: "Monitor kitchen workflow efficiency, track station activity, and automate customer inquiries over WhatsApp.",
    iconName: "Utensils",
    features: [
      "AI camera analysis for kitchen order prep activity",
      "Station bottleneck & occupancy insights",
      "WhatsApp automated menu navigation & table reservations",
      "Automated daily operational activity summaries"
    ],
    visualFlow: ["Kitchen Camera Feed", "YOLO Station Detection", "Activity Log", "Management Insights"],
    exampleOutcome: "Converts camera feeds into operational clarity and streamlines guest inquiries."
  },
  {
    id: "clinics",
    name: "Clinics & Healthcare Facilities",
    tagline: "Administrative queue flow & patient updates",
    description: "Streamline clinic administration with appointment management, receptionist dashboards, and automated WhatsApp patient queue notifications.",
    iconName: "Stethoscope",
    features: [
      "Appointment & queue management administration portal",
      "Queue position updates sent directly via WhatsApp",
      "Front-desk staff queue control dashboard",
      "Automated clinic hours and scheduling pre-check answers"
    ],
    visualFlow: ["Admin Dashboard", "Patient Queue Slot", "WhatsApp Notification", "Streamlined Visit"],
    exampleOutcome: "Reduces phone line congestion while providing clear visit updates to waiting patients."
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    tagline: "24/7 WhatsApp AI customer service & lead handling",
    description: "Automate order status lookups, product inquiries, and customer support routing over WhatsApp.",
    iconName: "ShoppingBag",
    features: [
      "Automated WhatsApp order status lookups",
      "Instant product FAQ answers",
      "Lead qualification & support escalation to human reps",
      "Post-purchase feedback automation"
    ],
    visualFlow: ["Customer Message", "AI Agent Lookup", "Order DB Query", "Instant WhatsApp Reply"],
    exampleOutcome: "Handles repetitive customer questions automatically so teams focus on high-value orders."
  }
];

// 4 EDITORIAL CASE STUDY SHOWCASES (REAL ENGINEERED PROJECTS)
export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "restaurant-analytics",
    category: "Computer Vision & Visual Analytics",
    title: "Restaurant AI Kitchen Activity Analytics",
    subtitle: "Turn video streams into operational intelligence using YOLOv8 detection and pose analysis.",
    problem: "Restaurant managers lack objective visibility into kitchen prep speed, station coverage, and workflow bottlenecks during peak service shifts.",
    solution: "We engineered a computer vision system that processes camera feeds to evaluate preparation activity across workstations and present clear operational reports to management.",
    technologies: ["YOLOv8", "Pose Detection", "OpenCV", "Python", "FastAPI", "React Dashboard"],
    outcomes: [
      "Monitors kitchen preparation activity across key workstations",
      "Provides objective bottleneck identification without continuous manual observation",
      "Enables automated daily activity summaries for restaurant owners"
    ],
    screenshotType: "restaurant",
    metricsLabel: "Live Camera Feed & Activity Interface"
  },
  {
    id: "clinic-queue",
    category: "Custom Software & Healthcare Admin",
    title: "Clinic Queue & Appointment Management Platform",
    subtitle: "A unified administrative portal paired with automated WhatsApp patient queue alerts.",
    problem: "Clinics experience phone line congestion, crowded waiting rooms, and administrative friction when handling walk-in queue slots alongside scheduled visits.",
    solution: "We built a web administration dashboard connected to automated WhatsApp messaging. Reception staff manage patient queues effortlessly while patients receive live status updates on their phones.",
    technologies: ["Next.js", "Node.js", "Express", "WhatsApp Cloud API", "SQL Database"],
    outcomes: [
      "Enables automated WhatsApp status notifications for queue updates",
      "Provides reception staff with a clean queue control interface",
      "Reduces receptionist phone overload and waiting room friction"
    ],
    screenshotType: "clinic",
    metricsLabel: "Admin Queue & Appointment Portal"
  },
  {
    id: "social-content-engine",
    category: "AI Content Automation Pipeline",
    title: "AI Social Media Content Engine",
    subtitle: "A multi-stage pipeline converting content ideas into structured post variations and review workflows.",
    problem: "Marketing teams waste hours drafting, re-formatting, and manually organizing content across multiple social channels.",
    solution: "We engineered a content generation pipeline that takes topic inputs, applies brand rules, generates formatted caption variations, and presents an organized review interface for approval.",
    technologies: ["Python", "FastAPI", "React", "AI Pipelines", "JSON Workflows"],
    outcomes: [
      "Structures content ideation into automated prompt pipelines",
      "Generates multi-platform post previews and caption variations",
      "Provides a clean administrative UI for team review and approval"
    ],
    screenshotType: "social-media",
    metricsLabel: "Content Generation & Review Pipeline"
  },
  {
    id: "ecommerce-support-agent",
    category: "AI Agents & Customer Support",
    title: "AI Customer Support Agent for E-Commerce",
    subtitle: "WhatsApp-integrated AI agent connected directly to order databases and inventory APIs.",
    problem: "E-commerce customer support reps spend a significant portion of their day answering repetitive 'Where is my order?' and product spec queries.",
    solution: "We deployed an AI agent integrated with WhatsApp Cloud API that parses customer requests, queries internal database endpoints, and provides accurate order updates instantly.",
    technologies: ["WhatsApp Cloud API", "Python", "FastAPI", "Database Integration", "AI Agent Logic"],
    outcomes: [
      "Automates order tracking and standard product inquiries over WhatsApp",
      "Queries backend database APIs securely to return live order status",
      "Escalates complex support cases seamlessly to human representatives"
    ],
    screenshotType: "ecommerce-agent",
    metricsLabel: "WhatsApp AI Support Workflow"
  }
];

// BEFORE VS AFTER TRANSFORMATION DATA
export const BEFORE_AFTER_DATA = [
  {
    before: "Manual station monitoring & subjective observation",
    after: "AI camera analytics & objective operational visibility"
  },
  {
    before: "WhatsApp messages & appointment queries handled manually",
    after: "24/7 automated WhatsApp responses & live queue alerts"
  },
  {
    before: "Disjointed spreadsheets & paper log bottlenecks",
    after: "Centralized web dashboards built around your workflow"
  },
  {
    before: "Disconnected software tools requiring double data entry",
    after: "Automated event-driven system integration pipelines"
  },
  {
    before: "Limited visibility into daily shift performance",
    after: "Automated daily operational summaries & actionable metrics"
  }
];

// "HOW WE THINK ABOUT AI" DECISION TREE DATA
export const HOW_WE_THINK_AI = {
  headline: "Not Every Problem Needs AI.",
  supportingText: "Sometimes the best solution is simple automation. Sometimes it's custom software. Sometimes it's computer vision or an AI agent. We choose the technology based strictly on the problem—not the trend.",
  decisionMap: [
    {
      problemType: "Repetitive data moving between systems",
      technology: "Workflow Automation",
      outcome: "Zero manual data entry, instant webhook pipelines"
    },
    {
      problemType: "Physical station or camera visibility needs",
      technology: "Computer Vision (YOLOv8)",
      outcome: "Objective activity metrics from existing camera feeds"
    },
    {
      problemType: "Complex multi-step inquiry or task execution",
      technology: "AI Agent + Tool Integration",
      outcome: "Intelligent task parsing & DB endpoint execution"
    },
    {
      problemType: "High-volume customer inquiries & scheduling",
      technology: "WhatsApp Cloud API + AI Support",
      outcome: "24/7 automated responses & reduced support load"
    },
    {
      problemType: "Unique workflow requiring custom portals",
      technology: "Full-Stack Custom Web Software",
      outcome: "Clean admin portal tailored strictly to your operations"
    }
  ]
};

// "WHAT MAKES US DIFFERENT" COMPARISON
export const COMPARISON_DATA = [
  {
    feature: "Workflow Approach",
    generic: "Fixed template workflows forcing your business to adapt",
    farogh: "Custom software & AI built strictly around your existing workflow"
  },
  {
    feature: "Technology Selection",
    generic: "Pushing pre-packaged AI tools regardless of need",
    farogh: "Pragmatic engineering: Automation, Software, or AI based on ROI"
  },
  {
    feature: "System Integration",
    generic: "Disconnected SaaS subscriptions requiring manual workarounds",
    farogh: "Unified systems: APIs, Databases, Portals, and AI under one roof"
  },
  {
    feature: "Execution Model",
    generic: "Freelance assembly or superficial chat-bot templates",
    farogh: "Dedicated 5-person technical founding team with full-stack capabilities"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "We analyze your business operations, map current bottlenecks, and evaluate where automation, software, or AI produces actual ROI.",
    deliverables: ["Technical Scope", "Workflow Mapping", "System Architecture Plan"]
  },
  {
    number: "02",
    title: "ARCHITECT",
    description: "We design system logic, API endpoints, database schemas, user interface wireframes, and model integrations.",
    deliverables: ["System Schematics", "UI/UX Designs", "API & Database Architecture"]
  },
  {
    number: "03",
    title: "ENGINEER",
    description: "We write clean, production-grade code across backend APIs, AI pipelines, computer vision models, and frontend dashboards.",
    deliverables: ["Tested Codebase", "API Integration", "Model Deployment & Verification"]
  },
  {
    number: "04",
    title: "DEPLOY",
    description: "We deploy the solution, connect operational data feeds, train your team, and refine system performance.",
    deliverables: ["Production Deployment", "Operations Documentation", "Ongoing System Support"]
  }
];

export const WHY_CHOOSE_US: Differentiator[] = [
  {
    title: "We Start With the Business Problem",
    description: "Tell us what is slowing your business down. We'll determine whether AI, automation, custom software—or a combination—is the right solution.",
    iconName: "Target"
  },
  {
    title: "We Build, Not Just Integrate",
    description: "We engineer custom backend APIs, frontend portals, and computer vision models rather than stitching together restrictive off-the-shelf templates.",
    iconName: "Code2"
  },
  {
    title: "AI + Software Under One Roof",
    description: "An AI model alone doesn't solve a business problem. We build the full stack: models, databases, APIs, web interfaces, and automated alerts.",
    iconName: "Cpu"
  },
  {
    title: "Built Around Your Workflow",
    description: "We adapt technology to fit how your team operates instead of forcing your company into rigid software templates.",
    iconName: "Sliders"
  }
];

export const FOUNDERS_DATA: Founder[] = [
  {
    id: "founder-1",
    placeholderName: "Minhaj Asghar",
    role: "Co-Founder & AI Systems Architect",
    bio: "Minhaj leads the technical direction at Farogh AI, turning complex business problems into working AI and automation systems. With hands-on experience building computer vision platforms, intelligent chatbots, and full-stack business tools, he focuses on architecture and system design — ensuring every solution is reliable, scalable, and built around how the business actually operates.",
    email: PLACEHOLDERS.email,
    linkedin: "https://linkedin.com/in/minhajasghar",
    specialties: ["AI Architecture", "Machine Learning", "System Design"],
    image: "/Minhaj Asghar.png"
  },
  {
    id: "founder-2",
    placeholderName: "Huzaifa Rehan",
    role: "Co-Founder & ML Engineer",
    bio: "Huzaifa specializes in engineering machine learning models and automated data pipelines. He focuses on training, optimizing, and deploying intelligent models that run seamlessly in real-time business operations — ensuring data is processed accurately, quickly, and dependably.",
    email: PLACEHOLDERS.email,
    linkedin: "https://linkedin.com/in/huzaifa-rehan-14b719297",
    specialties: ["Machine Learning", "Data Pipelines", "Model Optimization"],
    image: "/Huzaifa Rehan.png"
  },
  {
    id: "founder-3",
    placeholderName: "Sajid Ali",
    role: "Co-Founder & Computer Vision Lead",
    bio: "Sajid leads computer vision and automated visual analysis systems. He converts physical camera feeds and visual inputs into real-time operational data — helping businesses monitor workflows, detect activity, and automate quality control without manual inspection.",
    email: PLACEHOLDERS.email,
    linkedin: "https://linkedin.com",
    specialties: ["Computer Vision", "Visual Automation", "Quality Monitoring"],
    image: "/Sajid Ali.png"
  },
  {
    id: "founder-4",
    placeholderName: "Muhammad Faraz",
    role: "Co-Founder & Full-Stack Lead",
    bio: "Faraz leads the development of custom web applications, client portals, and cloud backends. He focuses on bridging intelligent automation models with clean, intuitive user interfaces — giving business teams fast, reliable tools to manage their daily workflows.",
    email: PLACEHOLDERS.email,
    linkedin: "https://linkedin.com",
    specialties: ["Full-Stack Development", "Web Applications", "System Integration"],
    image: "/Muhammad Faraz.png"
  },
  {
    id: "founder-5",
    placeholderName: "Maayer Hassan",
    role: "Co-Founder & Operations Strategy",
    bio: "Maayer leads operational strategy and client partnerships at Farogh AI. He works closely with business leaders to identify workflow bottlenecks, evaluate automation potential, and ensure every solution delivers measurable efficiency and high return on investment.",
    email: PLACEHOLDERS.email,
    linkedin: "https://linkedin.com",
    specialties: ["Operations Strategy", "Workflow Automation", "Client ROI"],
    image: "/Maayer Hassan.png"
  }
];

export const TECH_STACK_LAYERS: TechLayer[] = [
  {
    layerName: "INTELLIGENCE",
    layerTag: "AI, ML & Computer Vision",
    description: "Core algorithms, vision pipelines, and agent reasoning.",
    items: [
      { name: "Python", tag: "Core AI Language" },
      { name: "YOLOv8", tag: "Object & Pose Detection" },
      { name: "PyTorch", tag: "Deep Learning" },
      { name: "OpenCV", tag: "Video Stream Processing" }
    ]
  },
  {
    layerName: "SYSTEMS",
    layerTag: "Backend APIs & Data Architecture",
    description: "Performant API backends, event logic, and relational data storage.",
    items: [
      { name: "FastAPI", tag: "High-Speed Python APIs" },
      { name: "Node.js / Express", tag: "Backend Services" },
      { name: "SQL / Relational DBs", tag: "Structured Operations Data" },
      { name: "Redis", tag: "Caching & Queue State" }
    ]
  },
  {
    layerName: "EXPERIENCE",
    layerTag: "Frontend Applications & Portals",
    description: "Responsive web interfaces, admin portals, and executive dashboards.",
    items: [
      { name: "Next.js / React", tag: "Web Applications" },
      { name: "TypeScript", tag: "Type Safety" },
      { name: "Tailwind CSS", tag: "Design Systems" },
      { name: "Recharts / Lucide", tag: "Analytics & UI Systems" }
    ]
  },
  {
    layerName: "INTEGRATIONS",
    layerTag: "APIs & Business Connectors",
    description: "Connecting intelligence to messaging feeds and internal enterprise endpoints.",
    items: [
      { name: "WhatsApp Cloud API", tag: "Messaging Automation" },
      { name: "REST / Webhooks", tag: "Inter-System Pipelines" },
      { name: "Custom API Connectors", tag: "Enterprise Software" }
    ]
  }
];
