export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
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
  screenshotType: 'restaurant' | 'clinic';
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
  role: string;
  placeholderName: string;
  bio: string;
  skills: string[];
}

export interface TechCategory {
  category: string;
  items: { name: string; tag: string }[];
}

export const COMPANY_NAME = "Farogh AI";
export const COMPANY_LOCATION = "Pakistan";
export const PLACEHOLDERS = {
  founder1: "[FOUNDER 1 NAME]",
  founder2: "[FOUNDER 2 NAME]",
  email: "[EMAIL ADDRESS]",
  whatsapp: "[WHATSAPP NUMBER]",
  linkedin: "[LINKEDIN URL]",
  github: "[GITHUB URL]",
  bookingLink: "[BOOKING LINK]"
};

export const CAPABILITY_STRIP_ITEMS = [
  "AI Automation",
  "Computer Vision Analytics",
  "AI Chatbots",
  "Custom Software Development",
  "WhatsApp Integrations",
  "Full-Stack Engineering"
];

// 4 CORE MVP SERVICES
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    shortDesc: "Design intelligent workflows that automate repetitive tasks, connect business systems, and reduce manual operations.",
    fullDesc: "[COMPANY NAME] builds custom automation pipelines that connect existing software, APIs, and business data to reduce manual data handling and streamline daily operations.",
    iconName: "Cpu",
    capabilities: [
      "Workflow & process automation",
      "Document extraction & processing",
      "Business process automation",
      "Data integration across systems",
      "Automated operational summaries"
    ],
    technologies: ["Python", "FastAPI", "SQL", "Custom Webhooks"],
    useCases: [
      "Automating multi-department data verification",
      "Extracting information from invoices and documents into databases",
      "Generating automated operational summaries for management"
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision & AI Camera Analytics",
    shortDesc: "Transform camera feeds into operational insights using AI detection and pose analysis.",
    fullDesc: "We build computer vision systems capable of analyzing video streams, detecting activity, and converting camera footage into structured operational insights for business owners.",
    iconName: "Camera",
    capabilities: [
      "Staff activity & workflow monitoring",
      "Restaurant & operational analytics",
      "Workstation occupancy insights",
      "Customer movement analysis",
      "YOLO-based detection and pose analysis",
      "CCTV stream analysis"
    ],
    technologies: ["YOLOv8", "OpenCV", "PyTorch", "Python"],
    useCases: [
      "Monitoring preparation station activity in restaurant kitchens",
      "Tracking queue wait times and staff desk occupancy",
      "Analyzing footfall and operational flow"
    ]
  },
  {
    id: "chatbots-customer-service",
    title: "AI Chatbots & Customer Service Automation",
    shortDesc: "Automate customer inquiries, lead qualification, and appointment handling over WhatsApp and web interfaces.",
    fullDesc: "Handle common customer questions, appointment bookings, and initial inquiries automatically through AI chatbots integrated directly with WhatsApp Cloud API and internal business systems.",
    iconName: "MessageSquare",
    capabilities: [
      "WhatsApp Cloud API automation",
      "Automated customer support responses",
      "Lead qualification & routing",
      "FAQ & information retrieval",
      "Appointment handling & notifications"
    ],
    technologies: ["WhatsApp Cloud API", "Python", "Node.js", "REST APIs"],
    useCases: [
      "Automating common e-commerce customer support questions",
      "Handling clinic appointment inquiries and scheduling pre-checks",
      "Qualifying incoming leads via WhatsApp"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Web & Mobile Applications",
    shortDesc: "Build full-stack web applications, admin portals, and custom software tailored to your exact business workflow.",
    fullDesc: "When generic off-the-shelf software falls short, [COMPANY NAME] builds custom web applications, management portals, and backend systems designed around how your business operates.",
    iconName: "Layout",
    capabilities: [
      "Full-stack web applications",
      "Admin portals & dashboards",
      "Business management systems",
      "API backend development",
      "Database architecture"
    ],
    technologies: ["Next.js", "Node.js / Express", "FastAPI", "Python", "SQL"],
    useCases: [
      "Custom internal portals replacing spreadsheet workflows",
      "Client-facing dashboards with status tracking",
      "Tailored inventory and operations management tools"
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    tagline: "Operational clarity & automated customer interactions",
    description: "Understand kitchen workflow efficiency, monitor table turnaround, and handle incoming customer reservations automatically via WhatsApp.",
    iconName: "Utensils",
    features: [
      "AI camera analysis for kitchen order prep times",
      "Staff activity & workflow bottleneck identification",
      "WhatsApp automated menu navigation & reservation handling",
      "Customer queue flow and waiting area monitoring",
      "Automated daily store performance reports"
    ],
    exampleOutcome: "Transforms camera feeds into operational clarity and streamlines guest inquiries."
  },
  {
    id: "clinics",
    name: "Clinics & Healthcare Facilities",
    tagline: "Streamlined patient communication & administrative queue flow",
    description: "Reduce administrative friction with automated patient communication, queue updates, and appointment workflows.",
    iconName: "Stethoscope",
    features: [
      "Appointment management and automated notifications",
      "Queue updates sent directly via WhatsApp",
      "Admin dashboard for reception staff",
      "Automated answers for clinic hours and location inquiries",
      "Scheduled reminder messages for upcoming appointments"
    ],
    exampleOutcome: "Reduces receptionist phone inquiries while giving patients clear visit updates."
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    tagline: "Customer query support & automated lead handling",
    description: "Answer order queries, handle frequent support questions, and route complex cases to human support reps efficiently.",
    iconName: "ShoppingBag",
    features: [
      "Automated order status checking over WhatsApp",
      "Product inquiry answering",
      "Lead capture and inquiry routing",
      "Customer feedback collection"
    ],
    exampleOutcome: "Automates repetitive support queries so teams focus on high-value customers."
  },
  {
    id: "enterprises",
    name: "Custom Businesses",
    tagline: "Bespoke software systems built around your specific workflow",
    description: "We build custom administrative portals, internal software tools, and automation scripts tailored to your business rules.",
    iconName: "Building2",
    features: [
      "Custom internal admin software",
      "Automated document processing workflows",
      "Database and system integrations",
      "Executive management dashboards"
    ],
    exampleOutcome: "Replaces spreadsheet bottlenecks with clean, custom internal software."
  }
];

// 2 CORE MVP CASE STUDIES
export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "restaurant-analytics",
    category: "Computer Vision & Analytics",
    title: "AI-Powered Restaurant Staff Analytics",
    subtitle: "Turn camera feeds into operational insights using YOLO-based detection and pose analysis.",
    problem: "Restaurant owners often lack objective visibility into staff activity, station coverage, and preparation workflow speed across busy shifts.",
    solution: "We engineered a computer vision system that analyzes camera feeds to evaluate prep activity, identify station bottlenecks, and present clear operational reports to management.",
    technologies: ["YOLOv8", "Pose Detection", "Camera Monitoring", "Computer Vision", "Python", "Dashboard"],
    outcomes: [
      "Designed to monitor kitchen preparation activity across key workstations",
      "Helps management identify peak operational bottlenecks without continuous manual monitoring",
      "Enables automated daily activity reports for restaurant owners"
    ],
    screenshotType: "restaurant",
    metricsLabel: "Camera Feed & Analytics Interface"
  },
  {
    id: "clinic-queue",
    category: "Custom Software & Healthcare Admin",
    title: "Clinic Appointment & Queue Management Platform",
    subtitle: "A unified administration portal with WhatsApp patient notifications.",
    problem: "Clinics often face phone line congestion, waiting room crowding, and administrative friction when managing walk-in queues alongside scheduled appointments.",
    solution: "We built a web-based administration dashboard paired with automated WhatsApp messaging. Patients receive queue status updates on their phones, while front-desk staff manage patient flow from a single interface.",
    technologies: ["Appointment Management", "Queue Management", "Admin Dashboard", "WhatsApp Notifications", "Next.js", "Node.js"],
    outcomes: [
      "The system enables automated WhatsApp queue status updates for patients",
      "Provides reception staff with a clear patient queue management interface",
      "Designed to reduce waiting room congestion and receptionist phone overload"
    ],
    screenshotType: "clinic",
    metricsLabel: "Admin Queue & Appointment Dashboard"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We learn about your business, current workflows, operational bottlenecks, and technical requirements.",
    deliverables: ["Requirements Scope", "Proposed System Architecture"]
  },
  {
    number: "02",
    title: "Design",
    description: "We define the solution architecture, workflow logic, user interface layouts, and system endpoints.",
    deliverables: ["System Architecture Schema", "UI/UX Layouts"]
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the AI components, software applications, backend APIs, and system integrations.",
    deliverables: ["Custom Codebase", "Integrations & Testing"]
  },
  {
    number: "04",
    title: "Launch & Improve",
    description: "We deploy the system to production, ensure smooth adoption, and refine based on operational usage.",
    deliverables: ["Production Deployment", "System Documentation"]
  }
];

export const WHY_CHOOSE_US: Differentiator[] = [
  {
    title: "Business-First Engineering",
    description: "We don't start with a technology looking for a problem. We start with your business problem and build the right technology around it.",
    iconName: "Target"
  },
  {
    title: "Real AI + Software Expertise",
    description: "Our team combines artificial intelligence, computer vision, backend engineering, frontend development, and automation.",
    iconName: "Code2"
  },
  {
    title: "Custom Solutions",
    description: "We build systems around your actual workflow instead of forcing your business into rigid off-the-shelf templates.",
    iconName: "Sliders"
  },
  {
    title: "Practical AI",
    description: "We focus on practical AI that can actually be integrated into day-to-day business operations.",
    iconName: "Zap"
  },
  {
    title: "One Technical Team",
    description: "AI, automation, backend, frontend, and integrations are handled within one dedicated technical team.",
    iconName: "ShieldCheck"
  },
  {
    title: "Built to Scale",
    description: "Solutions are architected so an initial system can evolve as your business operations grow.",
    iconName: "TrendingUp"
  }
];

export const FOUNDERS_DATA: Founder[] = [
  {
    id: "founder-1",
    role: "Co-Founder / AI & Systems Lead",
    placeholderName: PLACEHOLDERS.founder1,
    bio: "Focuses on machine learning pipelines, computer vision systems, backend API architecture, and AI automation. Experienced in Python, YOLO, FastAPI, and enterprise integrations.",
    skills: ["AI & ML Solutions", "Computer Vision", "FastAPI & Python", "Workflow Automation"]
  },
  {
    id: "founder-2",
    role: "Co-Founder / Full-Stack & Software Lead",
    placeholderName: PLACEHOLDERS.founder2,
    bio: "Specializes in scalable web applications, frontend architecture, database design, and custom software portals. Experienced in Next.js, React, Node.js, and SQL.",
    skills: ["Full-Stack Software", "Next.js & React", "Node.js & Express", "Database Design"]
  }
];

export const TECH_STACK: TechCategory[] = [
  {
    category: "AI, ML & Computer Vision",
    items: [
      { name: "Python", tag: "Core AI Language" },
      { name: "YOLOv8", tag: "Object & Pose Detection" },
      { name: "PyTorch", tag: "Machine Learning" },
      { name: "OpenCV", tag: "Video Processing" }
    ]
  },
  {
    category: "Backend & System APIs",
    items: [
      { name: "FastAPI", tag: "Python APIs" },
      { name: "Node.js / Express", tag: "Backend Services" },
      { name: "SQL / Relational DBs", tag: "Data Storage" },
      { name: "WhatsApp Cloud API", tag: "Messaging Integration" }
    ]
  },
  {
    category: "Frontend & Web Architecture",
    items: [
      { name: "Next.js / React", tag: "Web Applications" },
      { name: "TypeScript", tag: "Type Safety" },
      { name: "Tailwind CSS", tag: "Responsive Styling" }
    ]
  }
];
