// Projects data
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with payment processing, inventory management, and real-time analytics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-3fd95af88614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Health Tracking App",
    description: "Mobile application for tracking fitness goals, nutrition intake, and providing personalized health insights using machine learning.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "Firebase", "TensorFlow.js", "Redux"],
    link: "https://github.com"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Web application that leverages GPT-3 to generate marketing content, blog posts, and social media captions with customizable tone and style.",
    image: "https://images.unsplash.com/photo-1551650975-87de45978306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    link: "https://github.com"
  }
];

// Experience & Education data
export const experiences = [
  {
    id: 1,
    title: "computer Applications Developer",
    company: "Tech Innovations Inc.",
    period: "Jan 2021 - Present",
    description: "Lead development of cloud-native applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 40%. Mentored junior developers and established best practices for code quality and testing."
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    period: "Mar 2021 - Dec 2023",
    description: "Developed and maintained multiple client-facing web applications. Collaborated with UX designers to implement responsive interfaces. Optimized application performance resulting in 30% faster load times."
  }
];

export const education = [
  
  {
    id: 3,
    degree: "B.S. Computer Applications",
    institution: "MIT",
    period: "2021 - 2026",
    details: "Graduated with honors. President of Coding Club. Led team to win National Hackathon 2026."
  }
];

// Skills data with proficiency levels
export const skills = [
  { name: "JavaScript", level: 95, icon: "javascript" },
  { name: "React", level: 90, icon: "react" },
  { name: "TypeScript", level: 85, icon: "typescript" },
  { name: "Node.js", level: 80, icon: "nodejs" },
  { name: "Python", level: 75, icon: "python" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
];

// Contact information
export const contactInfo = {
  email: "Lakinhoboy231@gmail.com",
  phone: "+252 (061) 478-3963",
  location: "Somalia, Mogadishu",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/AhmedHasanAhmed", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-hasan-26a16a368/", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" }
  ]
};

// Navbar links
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];