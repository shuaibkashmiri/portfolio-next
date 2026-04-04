const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

// Models
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  role: String,
}, { timestamps: true });

const ExperienceSchema = new mongoose.Schema({
  year: String,
  role: String,
  company: String,
  description: String,
  technologies: [String],
  order: Number,
}, { timestamps: true });

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  technologies: [String],
  order: Number,
}, { timestamps: true });

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
  features: [String],
  order: Number,
}, { timestamps: true });

const BlogSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  date: String,
  readTime: String,
  category: String,
  image: String,
  url: String,
  order: Number,
}, { timestamps: true });

const TechnologySchema = new mongoose.Schema({
  name: String,
  icon: String,
  color: String,
  duration: Number,
  order: Number,
}, { timestamps: true });

const SiteSettingsSchema = new mongoose.Schema({
  aboutText: String,
  heroTitle: String,
  heroSubtitle: String,
  profileImage: String,
  aboutImage: String,
  contactEmail: String,
  contactPhone: String,
  location: String,
  githubUrl: String,
  linkedinUrl: String,
  instagramUrl: String,
  facebookUrl: String,
  yearsOfExperience: String,
  projectsCompleted: String,
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);
const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
const Technology = mongoose.models.Technology || mongoose.model('Technology', TechnologySchema);
const SiteSettings = mongoose.models.SiteSettings || mongoose.model('SiteSettings', SiteSettingsSchema);

// Data
const experiences = [
  {
    year: "2024 - Present",
    role: "Senior Full Stack Developer & Team Lead",
    company: "Interface Technologies",
    description: "Leading a team in developing and maintaining web applications using NextJs, React.js, Express and NestJS. Implemented RESTful APIs and integrated with Sql/NoSql databases. Collaborated with stakeholders to define project requirements and timelines.",
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    order: 1,
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Freelancing",
    description: "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    order: 2,
  },
];

const projects = [
  {
    title: "Adventure Outfits E-Commerce Website",
    image: "/projects/project-1.png",
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
    order: 1,
  },
  {
    title: "Algo Academy E-Learning Platform",
    image: "/projects/project-2.png",
    description: "A digital platform that is designed to facilitate educational and training experiences through electronic devices like smartphones, tablets, or computers.",
    technologies: ["HTML", "SCSS", "React", "Node", "Express", "MongoDB", "Redux"],
    order: 2,
  },
  {
    title: "Shop Fusion E-Commerce Website",
    image: "/projects/project-3.png",
    description: "An online garment shop with a wide range of clothing, accessories, and shoes for women, men, kids, and babies.",
    technologies: ["HBS", "CSS", "Bootstrap", "Node", "Express", "MongoDB"],
    order: 3,
  },
  {
    title: "Blogging Platform",
    image: "/projects/project-4.png",
    description: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React", "Meterial UI", "Redux", "Express", "MongoDB"],
    order: 4,
  },
];

const services = [
  {
    title: "Travel & Tourism Platform",
    description: "Complete travel management system with booking, itinerary planning, and tour package management.",
    icon: "FaStore",
    features: [
      "Tour Package Management",
      "Booking System",
      "Travel Itinerary",
      "Customer Management",
    ],
    order: 1,
  },
  {
    title: "E-Commerce Solutions",
    description: "Scalable e-commerce platforms for both single and multiple vendors with complete inventory management.",
    icon: "FaStore",
    features: [
      "Product Management",
      "Order Processing",
      "Payment Integration",
      "Vendor Management",
    ],
    order: 2,
  },
  {
    title: "Hospital & School Management System",
    description: "Comprehensive management system for healthcare and educational institutions with integrated modules for both sectors.",
    icon: "FaHospital",
    features: [
      "Patient/Student Records",
      "Appointment/Class Scheduling",
      "Resource Management",
      "Billing & Fee Management",
    ],
    order: 3,
  },
  {
    title: "Online Learning Platform",
    description: "Feature-rich e-learning platform with live classes, course management, and student tracking.",
    icon: "FaGraduationCap",
    features: [
      "Live Classes",
      "Course Library",
      "Progress Tracking",
      "Certificate Generation",
    ],
    order: 4,
  },
  {
    title: "Personal Portfolio Websites",
    description: "Custom-designed portfolio websites to showcase your work, skills, and professional achievements.",
    icon: "FaUserTie",
    features: [
      "Responsive Design",
      "Project Showcase",
      "Contact Integration",
      "SEO Optimization",
    ],
    order: 5,
  },
  {
    title: "And Many More...",
    description: "Custom web applications tailored to your specific business needs. From CRM systems to specialized industry solutions.",
    icon: "FaPlus",
    features: [
      "News & Blog Portals",
      "Matrimonial Platforms",
      "Tour & Travel Systems",
      "Custom Business Solutions",
    ],
    order: 6,
  },
];

const blogs = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to create high-performance web applications using Next.js and modern React patterns.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    url: "/blog/building-scalable-web-applications-nextjs",
    order: 1,
  },
  {
    title: "Mastering React Hooks: A Complete Guide",
    excerpt: "Deep dive into React Hooks and learn how to write cleaner, more efficient React components.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    url: "/blog/mastering-react-hooks-guide",
    order: 2,
  },
  {
    title: "DevOps Best Practices for Modern Applications",
    excerpt: "Explore essential DevOps practices to streamline your development and deployment workflows.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    url: "https://example.com/blog/devops-best-practices",
    order: 3,
  },
];

const technologies = [
  { name: "Node.js", icon: "FaNodeJs", color: "text-green-500", duration: 2.5, order: 1 },
  { name: "React", icon: "RiReactjsLine", color: "text-purple-400", duration: 3, order: 2 },
  { name: "Next.js", icon: "SiNextdotjs", color: "text-white", duration: 4, order: 3 },
  { name: "React Native", icon: "TbBrandReactNative", color: "text-blue-400", duration: 3.5, order: 4 },
  { name: "TypeScript", icon: "SiTypescript", color: "text-blue-600", duration: 4.5, order: 5 },
  { name: "JavaScript", icon: "FaJsSquare", color: "text-yellow-400", duration: 2, order: 6 },
  { name: "MongoDB", icon: "SiMongodb", color: "text-green-500", duration: 5, order: 7 },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-400", duration: 3.8, order: 8 },
  { name: "HTML5", icon: "FaHtml5", color: "text-orange-500", duration: 6, order: 9 },
  { name: "CSS3", icon: "FaCss3Alt", color: "text-blue-500", duration: 4, order: 10 },
];

const siteSettings = {
  aboutText: "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.",
  heroTitle: "Full Stack Developer",
  heroSubtitle: "Building scalable web, mobile & desktop applications with expertise in DevOps and teaching code.",
  heroAnimatedTexts: [
    "Full Stack Developer",
    "Mobile Developer",
    "DevOps Engineer",
    "Coding Instructor"
  ],
  profileImage: "/home_profile.png",
  aboutImage: "/aboutme.png",
  logo: "/logodf.png",
  cvPath: "/cv_shoaib.pdf",
  contactEmail: "bhatshoaibmushtaq@gmail.com",
  contactPhone: "+91 9541697271",
  location: "Srinagar, J&K, India",
  githubUrl: "https://github.com/shuaibkashmiri",
  linkedinUrl: "https://www.linkedin.com/in/shoaib-mushtaq-bhat-9a2666190/",
  instagramUrl: "https://www.instagram.com/shuaib_kashmiri_/",
  facebookUrl: "https://www.facebook.com/mohammadshuaib786/",
  yearsOfExperience: "3+",
  projectsCompleted: "20+",
};

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Experience.deleteMany({});
    await Project.deleteMany({});
    await Service.deleteMany({});
    await Blog.deleteMany({});
    await Technology.deleteMany({});
    await SiteSettings.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const hashedPassword = await bcrypt.hash('Mynameisold007', 10);
    await User.create({
      email: 'admin@shoaibcodes.online',
      password: hashedPassword,
      name: 'Shoaib Codes Admin',
      role: 'admin',
    });
    console.log('Created admin user');

    // Seed data
    await Experience.insertMany(experiences);
    console.log('Seeded experiences');

    await Project.insertMany(projects);
    console.log('Seeded projects');

    await Service.insertMany(services);
    console.log('Seeded services');

    await Blog.insertMany(blogs);
    console.log('Seeded blogs');

    await Technology.insertMany(technologies);
    console.log('Seeded technologies');

    await SiteSettings.create(siteSettings);
    console.log('Seeded site settings');

    console.log('\n✅ Database seeded successfully!');
    console.log('\nAdmin credentials:');
    console.log('Email: admin@portfolio.com');
    console.log('Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
