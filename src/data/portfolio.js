// Poora content sirf is file se change hota hai.
import {
  FaCode, FaLayerGroup, FaDatabase, FaServer, FaHtml5, FaCss3Alt, FaJs,
  FaHandPointer, FaBootstrap, FaPlug, FaGitAlt, FaGraduationCap, FaSitemap,
  FaLightbulb, FaArrowTrendUp, FaGithub, FaLinkedin, FaEnvelope,
} from "react-icons/fa6";

import { withProtocol } from "../utils/links";

// public/ folder ki files ke liye helper (deploy subpath me bhi chalta hai)
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Vansh Rana",
  firstName: "Vansh",
  lastName: "Rana",
  greeting: "Hi, I'm",
  role: "Fresher Full Stack Developer",
  intro:
    "I am a BCA graduate and aspiring Full Stack Developer passionate about building responsive, user-friendly and database-driven web applications using modern web technologies.",
  photo: asset("images/profile.jpg"),
  resume: asset("resume.pdf"), // resume.pdf ko public/ folder me rakho
  email: "ranavansh1090@gmail.com",
  // Contact form + rating: web3forms.com par apna email daal ke free "Access Key" lo aur .env me
  // VITE_WEB3FORMS_KEY=... likho. Key na ho to FormSubmit use hota hai (Gmail me ek baar Activate karna padta hai).
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "",
  // Site ka color theme: "teal" | "indigo" | "green" | "rose"
  accent: "teal",
  github: "https://github.com/Vanshr755",
  linkedin: "https://www.linkedin.com/in/vansh-rana-340064355",
};

export const socials = [
  { label: "GitHub", href: withProtocol(profile.github), icon: FaGithub },
  { label: "LinkedIn", href: withProtocol(profile.linkedin), icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Hero ke photo ke aas-paas floating badges
export const techBadges = [
  { label: "C#", color: "#6f42c1", position: "tl" },
  { label: "HTML5", color: "#e44d26", position: "tr" },
  { label: "CSS3", color: "#1572b6", position: "bl" },
  { label: "JS", color: "#d9a400", position: "br" },
];

export const about = {
  tag: "About Me",
  title: "Get To Know Me",
  heading: "More About Me",
  photo: asset("images/profile.jpg"),
  paragraphs: [
    "I'm a BCA graduate and a fresher Full Stack Developer with a strong foundation in both frontend and backend web development. I enjoy building complete, database-driven applications using ASP.NET Core MVC and C#, and I focus on writing clean, structured, maintainable code that follows proper MVC architecture.",
    "My interest lies in solving real problems through software, from designing efficient database schemas with SQL Server and Entity Framework Core, to creating responsive and accessible interfaces with HTML, CSS, JavaScript, jQuery and Bootstrap. I have a genuine learning mindset and I'm always exploring new tools and best practices in the .NET ecosystem.",
  ],
  highlights: [
    { label: "BCA Graduate", icon: FaGraduationCap },
    { label: "Full Stack Development", icon: FaCode },
    { label: "Database Design", icon: FaDatabase },
    { label: "MVC Architecture", icon: FaSitemap },
    { label: "Problem Solving", icon: FaLightbulb },
    { label: "Continuous Learner", icon: FaArrowTrendUp },
  ],
};

// NOTE: last 4 skills ke level/description apne hisaab se adjust karo.
export const skills = {
  tag: "Skills",
  title: "My Technical Skills",
  items: [
    { name: "C#", desc: "Core language for backend logic and application development.", level: 85, icon: FaCode },
    { name: "ASP.NET Core MVC", desc: "Building structured, scalable web applications.", level: 80, icon: FaLayerGroup },
    { name: "Entity Framework Core", desc: "ORM for clean, model-driven data access.", level: 75, icon: FaDatabase },
    { name: "SQL Server", desc: "Designing relational schemas and writing queries.", level: 78, icon: FaServer },
    { name: "HTML5", desc: "Semantic, accessible page structure.", level: 90, icon: FaHtml5 },
    { name: "CSS3", desc: "Responsive layouts, animations and styling.", level: 88, icon: FaCss3Alt },
    { name: "JavaScript", desc: "Interactive, dynamic client-side behaviour.", level: 78, icon: FaJs },
    { name: "jQuery", desc: "Simplifying DOM manipulation and AJAX calls.", level: 80, icon: FaHandPointer },
    { name: "Bootstrap 5", desc: "Fast, responsive UI with a consistent design.", level: 85, icon: FaBootstrap },
    { name: "ASP.NET Core Web API", desc: "RESTful APIs with controllers, DTOs and validation.", level: 75, icon: FaPlug },
    { name: "Git & GitHub", desc: "Version control and collaborative workflows.", level: 80, icon: FaGitAlt },
  ],
};

export const projects = {
  tag: "Projects",
  title: "Things I've Built",
  items: [
    {
      title: "E-Commerce Book Shopping Website",
      description:
        "Full-featured book shopping web application with product browsing, product management, shopping cart, order management, role-based access, and payment integration workflows.",
      image: asset("images/project-ecommerce.jpg"),
      tech: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "HTML", "CSS", "Bootstrap 5"],
      github: "",
      live: "",
    },
    {
      title: "NationalPark REST API",
      description:
        "RESTful API for managing national parks and trails built using controllers, DTOs, repository and unit-of-work patterns, data validation, object mapping, and database operations.",
      image: "", // image dalna ho to "asset('images/nationalpark.jpg')"
      tech: ["ASP.NET Core Web API", "C#", "EF Core", "SQL Server", "Repository Pattern"],
      github: "",
      live: "",
    },
  ],
};

export const education = {
  tag: "Education",
  title: "My Learning Journey",
  items: [
    {
      title: "Bachelor of Computer Applications (BCA)",
      text: "A comprehensive undergraduate program covering the fundamentals of computer applications, programming languages, data structures, database management systems and software development principles. This degree built the analytical and technical foundation I now apply to real-world web application development.",
    },
    {
      title: "Full Stack Development",
      text: "Self-driven and project-based learning in ASP.NET Core MVC, C#, SQL Server, HTML, CSS, JavaScript, jQuery and Bootstrap, focused on building complete, database-driven web applications following proper MVC architecture.",
    },
  ],
};

export const contact = {
  tag: "Contact",
  title: "Let's Work Together",
  text: "Have a project, an opportunity or just want to say hello? Send me a message and I'll get back to you.",
  availability: "Open to Full Stack Developer opportunities",
};
