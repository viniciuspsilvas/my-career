import "dotenv/config";

import { connectDB } from "../lib/mongodb";
import { Project } from "../models/Project";
import { Experience } from "../models/Experience";
import { Stat } from "../models/Stat";
import { Skill } from "../models/Skill";
import { PersonalInfo } from "../models/PersonalInfo";
import { Tool } from "../models/Tool";
import { BlogPost } from "../models/BlogPost";
import { Certification } from "../models/Certification";
import { Education } from "../models/Education";
import { Reference } from "../models/Reference";
import { Interest } from "../models/Interest";

const experiences = [
  {
    year: "Feb 2023 – Jun 2023",
    title: "Front End Developer",
    company: "TEREM - Sydney, Australia",
    description:
      "Worked as a React JS developer on the Find My Credit project for Qantas Airways. Developed a web application to help customers find their Covid19 Credit."
  },
  {
    year: "Jan 2024 – Sep 2024",
    title: "Full Stack Developer",
    company: "FLK IT OVER - Sydney, Australia",
    description:
      "Key role in developing and maintaining a real estate platform. Worked on UI/UX with Radix UI, CSS Modules, Embla Carousel, and Framer Motion."
  },
  {
    year: "Apr 2021 - Dec 2022",
    title: "Full Stack Developer",
    company: "ZAPID HIRE - Sydney, Australia",
    description:
      "Maintained applications written in ReactJS and React Native. Developed GraphQL server with Apollo, using JWT authentication and Prisma ORM."
  },
  {
    year: "Dec 2020 – Apr 2021",
    title: "Mobile Developer",
    company: "PAY IT LATER - Brisbane, Australia",
    description:
      "Developed mobile applications for Android and iOS. Built reusable components with Storybook and implemented API calls using Apollo GraphQL."
  },
  {
    year: "Mar 2020 - Dec 2020",
    title: "Full Stack Developer",
    company: "Two Red Kites",
    description:
      "Developed frontend and backend solutions, contributing to various projects."
  },
  {
    year: "Mar 2019 - Jun 2019",
    title: "React Mobile Developer",
    company: "Live Platforms Pty Ltd",
    description:
      "Worked on mobile development using React Native and related technologies."
  },
  {
    year: "Aug 2018 - Feb 2019",
    title: "React Mobile Developer",
    company: "Mindroom Innovation",
    description: "Developed mobile applications and optimized UI components."
  },
  {
    year: "Feb 2015 - Apr 2016",
    title: "Web Developer",
    company: "Indra Brasil",
    description:
      "Developed web applications with JavaScript and Java technologies."
  },
  {
    year: "Apr 2014 - Feb 2015",
    title: "Java Developer",
    company: "Sinos Algar Tecnologia",
    description: "Built Java applications and maintained enterprise systems."
  },
  {
    year: "Sep 2013 - Mar 2014",
    title: "Java Developer",
    company: "Urcal Projetos",
    description: "Worked on Java-based solutions for various clients."
  },
  {
    year: "Dec 2009 - Jul 2013",
    title: "Java Developer",
    company: "Politec Indra",
    description: "Developed enterprise applications with Java."
  },
  {
    year: "Aug 2008 - Nov 2009",
    title: ".NET Developer",
    company: "LG Informatica",
    description:
      "Built and maintained .NET applications for various business needs."
  }
];

const stats = [
  { label: "HTML5 / CSS3", value: "85%" },
  { label: "JavaScript / TypeScript", value: "90%" },
  { label: "Node.js", value: "80%" },
  { label: "React", value: "70%" },
  { label: "React Native", value: "65%" },
  { label: "Redux", value: "70%" }
  // { label: "Storybook", value: "60%" },
  // { label: "Styled Components", value: "50%" },
  // { label: "iOS & Android", value: "60%" },
  // { label: "GraphQL", value: "50%" },
  // { label: "GIT Workflows", value: "70%" },
  // { label: "REST & Web Services", value: "75%" },
];

const skills = [
  // { name: "Node.js", percentage: 85 },
  // { name: "Express", percentage: 80 },
  // { name: "Apollo Server", percentage: 75 },
  // { name: "TypeScript", percentage: 85 },
  { name: "AWS", percentage: 70 },
  { name: "EC2, ECS, ELB, S3, IAM", percentage: 65 },
  { name: "Prisma ORM", percentage: 60 },
  { name: "MongoDB", percentage: 65 },
  { name: "PostgreSQL", percentage: 60 },
  { name: "Docker", percentage: 75 },
  { name: "CI/CD", percentage: 70 },
  { name: "DevOps", percentage: 65 }
];

const personalInfo = {
  fullName: "Vinicius Silva",
  title: "Full Stack Developer",
  email: "viniciuspsilvas@gmail.com",
  location: "Gold Coast, Australia",
  profile:
    "Programmer analyst professional, offering over 10 years of experience with solid knowledge in the field of web development. I am skilled in fact finding and analysis, discovering problems and providing the most appropriate solutions.",
  languages: ["English", "Portuguese"]
};

const tools = [
  {
    title: "VS Code",
    description: "Powerful code editor with great extensions.",
    link: "https://code.visualstudio.com/",
    image: "/images/vscode.png"
  },
  {
    title: "TypeScript",
    description: "Typed superset of JavaScript for scalability.",
    link: "https://www.typescriptlang.org/",
    image: "/images/typescript.png"
  },
  {
    title: "React JS",
    description: "Library for building UI components.",
    link: "https://react.dev/",
    image: "/images/react.png"
  },
  {
    title: "React Query",
    description: "Data fetching and state management tool.",
    link: "https://tanstack.com/query/latest",
    image: "/images/react-query.png"
  },
  {
    title: "Tailwind",
    description: "Utility-first CSS framework for fast styling.",
    link: "https://tailwindcss.com/",
    image: "/images/tailwind.png"
  },
  {
    title: "Next JS",
    description: "Full-stack React framework for web apps.",
    link: "https://nextjs.org/",
    image: "/images/nextjs.png"
  },
  {
    title: "Node.js",
    description: "JavaScript runtime for backend development.",
    link: "https://nodejs.org/",
    image: "/images/nodejs.png"
  },
  {
    title: "Prisma",
    description: "Modern ORM for Node.js and TypeScript.",
    link: "https://www.prisma.io/",
    image: "/images/prisma.png"
  },
  {
    title: "Mongoose",
    description: "MongoDB object modeling for Node.js.",
    link: "https://mongoosejs.com/",
    image: "/images/mongoose.png"
  },
  {
    title: "PostgreSQL",
    description: "Powerful relational database system.",
    link: "https://www.postgresql.org/",
    image: "/images/postgresql.png"
  },
  {
    title: "MongoDB",
    description: "NoSQL document-oriented database.",
    link: "https://www.mongodb.com/",
    image: "/images/mongodb.png"
  },
  {
    title: "Azure",
    description: "Cloud computing platform from Microsoft.",
    link: "https://azure.microsoft.com/",
    image: "/images/azure.png"
  },
  {
    title: "AWS",
    description: "Amazon Web Services for cloud computing.",
    link: "https://aws.amazon.com/",
    image: "/images/aws.png"
  }
];

const blogPosts = [
  {
    title: "Mastering Web Performance: A Developer’s Guide to Core Web Vitals",
    content:
      "## Why Speed Matters\n\nWe live in an age where waiting more than three seconds for a page to load feels like a lifetime. Google agrees, which is why site speed and performance directly impact SEO rankings and user experience.\n\nIf you want to keep users happy (and boost your site's visibility), you need to master Web Vitals – the key metrics that define a fast and smooth web experience. Let’s break them down.\n\n## Core Web Vitals Explained\n\nCore Web Vitals focus on three main aspects of performance and user experience:\n\n### 1. First Contentful Paint (FCP)\n**What it is:** FCP measures the time it takes for the first piece of content to appear on the screen.\n\nImagine ordering coffee and the barista at least acknowledges you straight away – that’s good FCP. A blank stare for 5 seconds? Not great.\n\n**How to improve:**\n- Reduce render-blocking resources (JavaScript & CSS).\n- Use server-side rendering and preloading strategies.\n- Optimise your server response time.\n\n### 2. Cumulative Layout Shift (CLS)\n**What it is:** Measures how much elements move unexpectedly while a page is loading.\n\nEver tried clicking a link, only for an ad to load and push everything down? That’s CLS at its worst.\n\n**How to improve:**\n- Define image and video dimensions to prevent layout shifts.\n- Avoid inserting dynamic content above existing elements.\n- Use font-display: swap to prevent text shifts.\n\n### 3. Interaction to Next Paint (INP)\n**What it is:** Measures how long it takes for a site to respond to user interactions.\n\nClick a button and nothing happens? That’s bad INP. Users expect instant feedback.\n\n**How to improve:**\n- Optimise event handlers and remove unnecessary JavaScript.\n- Reduce main thread work and use background tasks.\n- Implement lazy loading and defer non-essential scripts.\n\n## Time to First Byte (TTFB) - The Unsung Hero\n\n**What it is:** The time between the browser requesting a page and receiving the first byte of data.\n\nSlow TTFB is like waiting forever for a waiter to bring you a menu.\n\n**How to improve:**\n- Use a CDN (Content Delivery Network) to serve content faster.\n- Optimise database queries and server response times.\n- Implement caching strategies effectively.\n\n## Real-World Example: The Power of Optimisation\n\nWhen [Shopify](https://www.shopify.com/) optimised their JavaScript execution and implemented lazy loading, they slashed load times by **50%**, which led to higher conversions.\n\n## Final Thoughts\n\nWeb performance isn't just a nice-to-have – it’s a must-have. A slow website drives users away, impacts SEO, and hurts revenue.\n\n### What’s Next?\nRun a [Google Lighthouse audit](https://web.dev/measure/) to check your site’s performance. Found a bottleneck? Start optimising today! 🚀\n\nHave your own web performance tips? Share them in the comments below! Let’s make the web faster together.",
    author: "Vinicius Silva",
    coverImage: "https://source.unsplash.com/800x400/?technology,performance",
    tags: ["Web Performance", "SEO", "Core Web Vitals", "Frontend Development"],
    published: true,
    publishedAt: new Date("2025-04-15T08:00:00Z")
  },

  {
    title: "The Magic Behind the Web",
    content: `<p>Ever wondered how your browser takes raw code and transforms it into a beautiful, interactive web page? Or how you can make your JavaScript more efficient without freezing the UI? Advanced web development is packed with techniques to make your apps faster, smoother, and more interactive. Today, we’re diving into key topics like the <strong>browser rendering pipeline</strong>, <strong>event handling</strong>, <strong>WebWorkers</strong>, <strong>WebGL</strong>, and <strong>WebGPU</strong>.</p>
              <h2>Understanding the Browser Rendering Pipeline</h2>

              <p>When you load a webpage, your browser goes through several steps to display content: parsing HTML, building the DOM, applying CSS, running JavaScript, calculating layouts, and finally painting pixels on the screen.</p>

              <h3>Optimising Performance</h3>
              <ul>
                <li><strong>Minimise reflows and repaints</strong>: Avoid unnecessary style changes and large DOM manipulations.</li>
                <li><strong>Use GPU acceleration</strong>: Transform-heavy animations should use <code>will-change</code> or <code>translate3d</code>.</li>
                <li><strong>Lazy loading</strong>: Defer loading off-screen images and components.</li>
              </ul>

              <h2>Efficient Event Handling in JavaScript</h2>

              <p>Event handling allows users to interact with web applications, but improper implementation can lead to sluggish performance.</p>

              <h3>Best Practices</h3>
              <ul>
                <li><strong>Use event delegation</strong>: Attach event listeners to parent elements instead of multiple child elements.</li>
                <li><strong>Throttle and debounce</strong>: Limit the number of function executions in rapid-fire events like scrolling.</li>
                <li><strong>Passive event listeners</strong>: Improve scroll performance by marking listeners as <code>passive</code>.</li>
              </ul>

              <h2>WebWorkers: Multithreading for the Web</h2>

              <p>JavaScript is single-threaded, but <strong>WebWorkers</strong> let you run tasks in the background without blocking the UI.</p>

              <h3>When to Use WebWorkers</h3>
              <ul>
                <li><strong>Heavy computations</strong>: Data processing, cryptographic operations, and large calculations.</li>
                <li><strong>Background tasks</strong>: Fetching data, processing files, or handling WebSockets.</li>
              </ul>

              <h4>Example:</h4>
              <pre><code class="language-ts">const worker = new Worker('worker.js');
              worker.postMessage('Start task');
              worker.onmessage = (e) => console.log(e.data);</code></pre>

              <h2>WebGL & WebGPU: High-Performance 3D Graphics</h2>

              <h3>WebGL: The Backbone of Web Graphics</h3>
              <p>WebGL allows rendering 3D graphics in the browser using the GPU. Libraries like <a href="https://threejs.org/" target="_blank">Three.js</a> simplify WebGL development.</p>

              <h4>Example:</h4>
              <pre><code class="language-ts">const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
              const renderer = new THREE.WebGLRenderer();
              document.body.appendChild(renderer.domElement);</code></pre>

              <h3>WebGPU: The Next Generation</h3>
              <p>WebGPU improves upon WebGL, providing better performance, modern APIs, and direct GPU access. While still new, it promises faster rendering and computation.</p>

              <h2>Wrapping Up</h2>

              <p>Mastering these advanced web technologies takes time, but the payoff is huge. Optimising rendering, handling events efficiently, using WebWorkers, and leveraging WebGL/WebGPU will take your web development skills to the next level.</p>

              <h3>Ready to Level Up?</h3>
              <p>Try integrating these techniques into a project! Whether it's a high-performance dashboard or a 3D visualisation, these tools will make your web apps smoother and faster. Got a cool project idea? Drop it in the comments! 🚀</p>
  `,
    author: "Vinicius Silva",
    coverImage: "https://source.unsplash.com/800x400/?technology,coding",
    tags: [
      "Advanced Web Development",
      "Performance",
      "WebGL",
      "JavaScript",
      "WebWorkers"
    ],
    published: true,
    publishedAt: new Date("2025-06-10T08:00:00Z")
  },

  {
    title: "Mastering Backend Development: Node.js, Express, and Databases",
    content:
      "Learn the key concepts of backend development, covering Node.js internals, Express.js, and database best practices.",
    author: "Vinicius Silva",
    coverImage: "/images/backend-development.png",
    tags: ["Node.js", "Express.js", "Databases", "Backend Architecture"],
    published: false
  }
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js and TailwindCSS.",
    image: "https://via.placeholder.com/300",
    link: "https://myportfolio.com"
  },
  {
    title: "E-commerce App",
    description: "An online store built with React, Node.js, and MongoDB.",
    image: "https://via.placeholder.com/300",
    link: "https://myecommerce.com"
  }
];

const education = [
  {
    courseName: "Project Management",
    institution: "Mindroom Innovation",
    locality: "Gold Coast, Australia",
    year: "2018-2020"
  },
  {
    courseName: "Cert Iv In Media",
    institution: "Eip",
    locality: "Gold Coast, Australia",
    year: "2018"
  },
  {
    courseName: "Master In Business Management",
    institution: "Getulio Vargas Foundation",
    locality: "Rio De Janeiro, Brazil",
    year: "2013-2014"
  },
  {
    courseName: "B.S. In Computer Science",
    institution: "Pontifical Catholic University",
    locality: "Goiânia, Brazil",
    year: "2007-2012"
  }
];

const certifications = [
  {
    name: "Certified Scrum Master",
    institution: "Scrum Alliance"
  },
  {
    name: "SUn Certified Java Programmer",
    institution: "Oracle"
  }
];

const references = [
  {
    name: "Wade Noordink",
    description: "Senior Software Engineer",
    phone: "0452420202",
    email: "wade.noordink@trinoor.comcom"
  },
  {
    name: "Aaron Burke",
    description: "Tech Lead",
    phone: "0421 212 255",
    email: "aaron.burke@trinoor.com"
  }
];

const interests = [
  { title: "Music", icon: "fa-solid fa-music" },
  { title: "Coding", icon: "fa-solid fa-laptop-code" },
  { title: "Travels", icon: "fa-solid fa-plane-departure" },
  { title: "Sport", icon: "fa-solid fa-person-biking" }
];

// @@@

const seedProjects = async () => {
  try {
    await Project.insertMany(projects);
    console.log("Projects inserted successfully");
  } catch (error) {
    console.error("Error inserting Project seeds:", error);
  }
};

const seedExperiences = async () => {
  try {
    await Experience.insertMany(experiences);
    console.log("Experiences inserted successfully");
  } catch (error) {
    console.error("Error inserting Experience seeds:", error);
  }
};

const seedStats = async () => {
  try {
    await Stat.insertMany(stats);
    console.log("Stats inserted successfully");
  } catch (error) {
    console.error("Error inserting Stat seeds:", error);
  }
};

const seedSkills = async () => {
  try {
    await Skill.insertMany(skills);
    console.log("Skills inserted successfully");
  } catch (error) {
    console.error("Error inserting Skill seeds:", error);
  }
};

const seedPersonalInfo = async () => {
  try {
    await PersonalInfo.insertMany(personalInfo);
    console.log("Personal Info inserted successfully");
  } catch (error) {
    console.error("Error inserting Personal Info seeds:", error);
  }
};

const seedTools = async () => {
  try {
    await Tool.insertMany(tools);
    console.log("Tools inserted successfully");
  } catch (error) {
    console.error("Error inserting Tool seeds:", error);
  }
};

const seedBlogPosts = async () => {
  try {
    await BlogPost.insertMany(blogPosts);
    console.log("BlogPosts inserted successfully");
  } catch (error) {
    console.error("Error inserting blogPosts seeds:", error);
  }
};

const seedEducation = async () => {
  try {
    await Education.insertMany(education);
    console.log("Education inserted successfully");
  } catch (error) {
    console.error("Error inserting Education seeds:", error);
  }
};

const seedCertifications = async () => {
  try {
    await Certification.insertMany(certifications);
    console.log("Certifications inserted successfully");
  } catch (error) {
    console.error("Error inserting Certification seeds:", error);
  }
};

const seedReferences = async () => {
  try {
    await Reference.insertMany(references);
    console.log("References inserted successfully");
  } catch (error) {
    console.error("Error inserting Reference seeds:", error);
  }
};

const seedInterests = async () => {
  try {
    await Interest.insertMany(interests);
    console.log("Interests inserted successfully");
  } catch (error) {
    console.error("Error inserting Interest seeds:", error);
  }
};

const seedAll = async () => {
  try {
    await connectDB();

    await Promise.all([
      seedProjects(),
      seedExperiences(),
      seedStats(),
      seedSkills(),
      seedPersonalInfo(),
      seedTools(),
      seedBlogPosts(),
      seedEducation(),
      seedCertifications(),
      seedReferences(),
      seedInterests()
    ]);

    console.log("All seeds inserted successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit();
  }
};

seedAll();
