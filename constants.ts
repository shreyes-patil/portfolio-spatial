
import { Smartphone, Tablet, Watch, Laptop, FileText, Layers, Cpu, GraduationCap } from 'lucide-react';

// Types
export enum DeviceType {
  IPHONE = 'iPhone',
  IPAD = 'iPad',
  WATCH = 'Watch',
  MACBOOK = 'MacBook'
}

export interface Project {
  title: string;
  tags: string[];
  date: string;
  description: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  details: string[];
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  date: string;
}

// Resume Data
export const PROFILE = {
  name: "Shreyas H Patil",
  role: "iOS Developer",
  contact: {
    phone: "857-693-1155",
    email: "patil.shreyas@northeastern.edu",
    linkedin: "https://linkedin.com/in/shreyes-patil",
    github: "https://github.com/shreyes-patil",
    website: "https://shreyaspatil.me",
    resume: "https://drive.google.com/file/d/1VHMEftO6itfCqUBXK_yJgQxTuOcWkFjx/view?usp=sharing"
  },
  summary: "iOS developer who combines product vision with technical depth, delivering Swift/SwiftUI apps that feature clean architecture, real-time interactions, and user experiences guided by Apple’s Human Interface Guidelines."
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Goomi Academy Education and Technology LLC",
    location: "Boston, MA",
    date: "Jan 2025 – July 2025",
    details: [
      "Delivered a scalable social learning iOS app (Goomi Community) by leading end-to-end development in SwiftUI, Realm, AWS, and Supabase.",
      "Enhanced engagement with core features including home feed, community posts, comments, notifications, moderation, and real-time direct messaging powered by Stream.",
      "Improved performance by 40% through Realm-based offline caching, reducing API dependency.",
      "Accelerated media delivery by 55% by building an AWS-backed pipeline (S3 + CloudFront)."
    ]
  },
  {
    role: "Software Engineering Fellow",
    company: "Headstarter",
    location: "Remote",
    date: "July 2024 – September 2024",
    details: [
      "Shipped 5 AI-powered projects in 5 weeks, leveraging React, Next.js, and Firebase with CI/CD pipelines.",
      "Built and deployed a SaaS product for dynamic flashcard generation using GPT-4 API; integrated Stripe for custom pricing and paywalls."
    ]
  },
  {
    role: "Software Developer",
    company: "Krushi Mitra",
    location: "Bengaluru, India",
    date: "May 2021 – June 2022",
    details: [
      "Improved agricultural decision-making by building an intuitive frontend platform that integrated machine learning outputs.",
      "Worked on mobile-first design principles, helping create responsive user flows."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "FlashGen",
    tags: ["SwiftUI", "Clean Architecture", "MVVM", "LLM", "Supabase"],
    date: "July 2025 – Present",
    description: [
      "Developing an AI-powered flashcard app that generates study cards from topics or PDFs.",
      "Integrated AI APIs for personalized content.",
      "Designed a modern, accessible UI/UX with dark mode and subscriptions."
    ],
    link: "https://github.com/shreyes-patil/flashgen"
  },
  {
    title: "Vision3D",
    tags: ["SwiftUI", "VisionOS", "ARKit", "RealityKit"],
    date: "Oct 2024 – Dec 2024",
    description: [
      "Built an iOS application using RealityKit to deliver immersive 3D vision features on VisionOS.",
      "Created interactive 3D experiences demonstrating proficiency in Apple’s AR frameworks."
    ],
    link: "https://github.com/shreyes-patil/vision3d"
  },
  {
    title: "Flash",
    tags: ["SwiftUI", "Core Image", "Core ML", "MVVM"],
    date: "Oct 2024 – Nov 2024",
    description: [
      "Developed an iOS photo editing app with real-time image adjustments and intelligent filters.",
      "Leveraged Core ML for on-device color and object detection."
    ],
    link: "https://github.com/shreyes-patil/flash"
  },
  {
    title: "Forecast",
    tags: ["SwiftUI", "Charts", "Clean Arch", "AI"],
    date: "Nov 2024 – Dec 2024",
    description: [
      "A cash flow projection MVP built in 48 hours featuring 30-day interactive balance forecasts.",
      "Integrated AI chat for 'what-if' financial scenarios using a modular, swappable architecture."
    ],
    link: "https://github.com/shreyes-patil/Forecast"
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Science in Information Systems",
    date: "December 2025"
  },
  {
    school: "CMR University",
    location: "Bengaluru, India",
    degree: "B.Tech in Computer Science",
    date: "May 2021"
  }
];

export const SKILLS = {
  ios: ["Swift", "SwiftUI", "UIKit", "Core Data", "Realm", "Core ML", "ARKit", "RealityKit", "Vision", "Core Image"],
  architecture: ["MVVM", "Clean Architecture", "RESTful APIs", "Auto Layout", "Combine"],
  backend: ["Supabase", "Firebase", "AWS S3/CloudFront", "CloudKit", "Node.js", "PostgreSQL"],
  tools: ["Xcode", "SwiftPM", "Git", "VS Code"]
};

export const NAVIGATION_ITEMS = [
  { id: DeviceType.IPHONE, label: 'Projects', icon: Smartphone, color: 'bg-blue-500' },
  { id: DeviceType.IPAD, label: 'Experience', icon: Tablet, color: 'bg-pink-500' },
  { id: DeviceType.WATCH, label: 'Skills', icon: Watch, color: 'bg-orange-500' },
  { id: DeviceType.MACBOOK, label: 'About', icon: Laptop, color: 'bg-indigo-500' },
];
