import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I'm Full Stack Web Developer The crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Senior Full Stack Developer & Team Lead",
    company: "Interface Technologies",
    description: `Leading a team in developing and maintaining web applications using NextJs, React.js, Express and NestJS. Implemented RESTful APIs and integrated with Sql/NoSql databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Freelancing",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },

];

export const PROJECTS = [
  {
    title: "Adventure Outfits E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Algo Academy E-Learning Platform",
    image: project2,
    description:
      " A digital platform that is designed to facilitate educational and training experiences through electronic devices like smartphones, tablets, or computers.",
    technologies: [
      "HTML",
      "SCSS",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Redux",
    ],
  },
  {
    title: " Shop Fusion E-Commerce Website",
    image: project3,
    description:
      " An online garment shop with a wide range of clothing, accessories, and shoes for women, men, kids, and babies. ",
    technologies: ["HBS", "CSS", "Bootstrap", "Node", "Express", "MongoDB"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React", "Meterial UI", "Redux", "Express", "MongoDB"],
  },
];

export const CONTACT = {
  address: "253 Athwajan Srinagar, J&K India 191101 ",
  phoneNo: "+91 9541697271 ",
  email: "bhatshoaibmushtaq@gmail.com",
};

export const SERVICES = [
  {
    title: "Travel & Tourism Platform",
    description:
      "Complete travel management system with booking, itinerary planning, and tour package management.",
    icon: "FaStore",
    features: [
      "Tour Package Management",
      "Booking System",
      "Travel Itinerary",
      "Customer Management",
    ],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Scalable e-commerce platforms for both single and multiple vendors with complete inventory management.",
    icon: "FaStore",
    features: [
      "Product Management",
      "Order Processing",
      "Payment Integration",
      "Vendor Management",
    ],
  },
  {
    title: "Hospital & School Management System",
    description:
      "Comprehensive management system for healthcare and educational institutions with integrated modules for both sectors.",
    icon: "FaHospital",
    features: [
      "Patient/Student Records",
      "Appointment/Class Scheduling",
      "Resource Management",
      "Billing & Fee Management",
    ],
  },
  {
    title: "Online Learning Platform",
    description:
      "Feature-rich e-learning platform with live classes, course management, and student tracking.",
    icon: "FaGraduationCap",
    features: [
      "Live Classes",
      "Course Library",
      "Progress Tracking",
      "Certificate Generation",
    ],
  },
  {
    title: "Personal Portfolio Websites",
    description:
      "Custom-designed portfolio websites to showcase your work, skills, and professional achievements.",
    icon: "FaUserTie",
    features: [
      "Responsive Design",
      "Project Showcase",
      "Contact Integration",
      "SEO Optimization",
    ],
  },
  {
    title: "And Many More...",
    description:
      "Custom web applications tailored to your specific business needs. From CRM systems to specialized industry solutions.",
    icon: "FaPlus",
    features: [
      "News & Blog Portals",
      "Matrimonial Platforms",
      "Tour & Travel Systems",
      "Custom Business Solutions",
    ],
  },
];

export const BLOGS = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to create high-performance web applications using Next.js and modern React patterns.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    url: "/blog/building-scalable-web-applications-nextjs", // Internal link
  },
  {
    title: "Mastering React Hooks: A Complete Guide",
    excerpt: "Deep dive into React Hooks and learn how to write cleaner, more efficient React components.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    url: "/blog/mastering-react-hooks-guide", // Internal link
  },
  {
    title: "DevOps Best Practices for Modern Applications",
    excerpt: "Explore essential DevOps practices to streamline your development and deployment workflows.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    url: "https://example.com/blog/devops-best-practices", // External link
  },
];
