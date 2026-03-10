import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true 
};
const greeting = {
  username: "Numa alset",
  title: "Hi, I'm Numa",
 subTitle: emoji(
  `I'm a Full-Stack Software Developer and Expert Generalist who builds modern web and mobile applications.

I develop robust backend systems with .NET, craft high-performance mobile apps with Flutter, and build dynamic frontends using React and Next.js.

I enjoy turning complex ideas into clean, efficient, and user-friendly digital products.`
),
  resumeLink:
    "https://drive.google.com/file/d/1In8Km4iRb9JtAY4MHQX4ruBYTqRKLnL2", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/numa-alset",
  linkedin: "https://www.linkedin.com/in/numaalset/",
  gmail: "numaalset@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Full-Stack Developer building modern web, mobile, and backend systems",

  skills: [
    emoji(
      "⚡ Build modern, responsive web applications using React, Next.js, and TypeScript with focus on performance, SEO, and great user experience."
    ),

    emoji(
      "⚡ Develop high-performance cross-platform mobile apps with Flutter and Dart, implementing clean architecture, scalable state management (Bloc, Riverpod), and pixel-perfect UI."
    ),

    emoji(
      "⚡ Design and build secure backend systems using .NET, creating RESTful APIs, real-time services (SignalR, WebSockets), and scalable application architectures."
    ),

    emoji(
      "⚡ Integrate third-party services and APIs including Firebase, authentication systems, notifications, analytics, and real-time communication."
    ),

    emoji(
      "⚡ Design and optimize databases using PostgreSQL, MongoDB, Redis, and SQL with focus on performance and reliability."
    ),

    emoji(
      "⚡ Follow modern development practices including Clean Architecture, modular design, API security (JWT/OAuth), and Agile workflows."
    )
  ],

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "TypeScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "NPM",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fas fa-mobile-alt"
  },
  {
    skillName: "Dart",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: ".NET",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "REST API",
    fontAwesomeClassname: "fas fa-exchange-alt"
  },
  {
    skillName: "WebSockets",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "SignalR",
    fontAwesomeClassname: "fas fa-bolt"
  },
  {
    skillName: "SQL Database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "Redis",
    fontAwesomeClassname: "fas fa-memory"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  }
],
  displaySkills: [
    {
      category: "Mobile & Flutter",
      items: ["Riverpod/Bloc", "Custom Platform Channels (Kotlin/Swift)", "SDU Implementation", "Codemagic/TestFlight"]
    },
    {
      category: "Frontend & Web",
      items: ["Next.js (SSR/CSR/ISR)", "TypeScript", "Tailwind CSS", "SEO"]
    },
    {
      category: "Backend & Cloud",
      items: [".NET Core", "SignalR", "PostgreSQL/MongoDB","Daper", "Firebase (FCM/Analytics)"]
    },
    {
      category: "Architecture & Security",
      items: ["Clean Architecture", "OAuth/JWT/Cookies", "Agile/Scrum", "Data Encryption"]
    }
  ],
  display: true 
};

// Education Section
const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Homs University",
      logo: require("./assets/images/homsUniversity.png"),
      subHeader: "bachelor of Software engineering ",
      duration: "September 2019 - August 2024",
      desc: "Degree recognized in Germany (Anabin H+) and equivalent to a German Bachelor's degree.",
      descBullets:''
    },
   
  ]
};

// Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend", //Insert stack or technology you have experience in
//       progressPercentage: "98%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "98%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "100%"
//     }
//   ],
//   displayCodersrank: false 
// };
 const techStack = {
  viewSkillBars: true, // You can keep this toggle
  services: [
    {
      title: "Mobile-First Development",
      icon: "📱",
      description: "Building high-performance, cross-platform apps with Flutter. Expert in SDU (Server Driven UI) and seamless native integrations.",
      tags: ["Flutter", "Firebase", "dynamic widgets", "Bloc","Custom Method Channels"]
    },
    {
      title: "Scalable Backend Systems",
      icon: "⚙️",
      description: "Architecting robust enterprise solutions using .NET. Focused on Clean Architecture, high-concurrency APIs, and real-time data.",
      tags: [".NET 8", "SignalR", "PostgreSQL", "Redis"]
    },
    {
      title: "Modern Web Ecosystems",
      icon: "🌐",
      description: "Crafting SEO-optimized, ultra-fast web interfaces using Next.js and React. Bridging the gap between design and complex logic.",
      tags: ["Next.js", "TypeScript", "React", "Hydration State management","SSR/ISR"]
    }
  ]
};

// Work experience section

// const workExperiences = {
//   display: true, 
//   experience: [
//     {
//       role: "Backend Developer",
//       company: "Rental Reale Estate App",
//       companylogo: require("./assets/images/Logo_PNG_1024.png"),
//       date: "Jan 2024 ",
//       desc: ["Asp.net core web Api for Rental App with chat functionalty and VIP user tier for accessing a specific Features  ",<p >I Learnt from this project</p>,],
//       descBullets: [
//         "Building a complete and secure Api ",
//         "Authunticate and Authorization with [Admin-Vip-default] teirs ",
//         "Building a chat Functionality with SingleR over webSocket",
//         "using EntityFramework with code first migration",
//         "Clean Arcitecture with Repository pattern and UnitOfWork"
//       ]
//     },
//     {
//       role: "Flutter Developer",
//       company: "Rental Reale Estate App",
//       companylogo: require("./assets/images/Logo_PNG_1024.png"),
//       date: "Jan 2024 ",
//       desc: ["mobile application  helps you to find rental places based on filters and contacting directly with the owner  ",<p >I Learnt from this project</p>,],
//       descBullets: [
//         "Building a responsive and adaptive mobile interfaces ",
//         "Authunticate users and Token with any backend",
//         "Building a chat Functionality with webSocket",
//         "Mastering Provider StateManagmet and implementing it via widget tree",
//         "Dealing with Firebase and achive its Featuers"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "public service website",
//       companylogo: require("./assets/images/APP2 (2).png"),
//       date: "May 2023",
//       desc:[ "website that allows you to add your facility on map and let users reach you by reviews or short distance",<p>I Learnt from this project</p>],
//       descBullets: [

//         "Building a responsive and interactive web interfaces",
//         "Comunicating with backend via APIs",
//         "integrating React with third party",
//         "Mastering mapbox services and implementing it in the app",
//         "Dealing with React hooks and use it in the app"
//       ]
//     },
   
//   ]
// };
// const workExperiences = {
//   display: true,
//   experience: [
//     {
//       role: "Full-Stack Engineer",
//       company: "Mazadi.app",
//       companylogo: require("./assets/images/mazadi.png"),
//       date: "Sep 2024 – Present",
//       desc: "Working across Flutter, Next.js, React, and ASP.NET Core to build and scale real-world production systems.",
//       descBullets: [
//         "Upgraded the Mazadi mobile application to Flutter 3 and resolved breaking changes.",
//         "Implemented real-time video and audio streaming using WebRTC in Flutter.",
//         "Built a server-driven UI system allowing backend-controlled interface rendering.",
//         "Developed backend services using ASP.NET Core including authentication and REST APIs.",
//         "Built a Next.js web platform with improved SEO and optimized server-side rendering.",
//         "Developed a React + TypeScript dashboard integrating AI chat assistance.",
//         "Integrated blockchain smart contract interactions and wallet authentication flows.",
//         "Maintained clean modular architecture and optimized application performance."
//       ]
//     },

//     {
//       role: "Frontend Developer",
//       company: "web.mazadi.app",
//       companylogo: require("./assets/images/mazadi.png"),
//       date: "Oct 2025 – Mar 2026",
//       desc: "Responsible for building and optimizing the Mazadi web platform using modern frontend technologies.",
//       descBullets: [
//         "Re-architected the frontend using Next.js App Router improving performance and structure.",
//         "Reduced initial page load time by optimizing SSR boundaries.",
//         "Improved SEO using Next.js Metadata API, Open Graph, and sitemap strategies.",
//         "Implemented optimized SSR / CSR hydration strategies.",
//         "Improved CLS, LCP, and overall Lighthouse performance scores."
//       ]
//     },

//     {
//       role: "React Developer",
//       company: "Ethiq.us",
//       companylogo: require("./assets/images/ethiq.png"),
//       date: "Sep 2025 – Dec 2025",
//       desc: "Worked on an AI-powered chatbot platform integrated with Web3 blockchain infrastructure.",
//       descBullets: [
//         "Integrated an AI agent into a React chatbot interface for intelligent responses.",
//         "Built frontend logic interacting with smart contracts and decentralized services.",
//         "Designed conversational UI components for real-time AI interactions.",
//         "Handled asynchronous state management for AI responses and blockchain events."
//       ]
//     },

//     {
//       role: "Flutter Developer",
//       company: "ASBN (Australian Syrian Business Network)",
//       companylogo: require("./assets/images/asbn.png"),
//       date: "Jun 2025 – Aug 2025",
//       desc: "Led development of the ASBN mobile application from wireframes to production deployment.",
//       descBullets: [
//         "Translated UI wireframes and requirements into a full Flutter application.",
//         "Implemented dynamic CMS-driven pages and WebView modules.",
//         "Designed scalable Clean Architecture using BLoC and feature-based structure.",
//         "Delivered a production-ready cross-platform application for iOS and Android."
//       ]
//     }
//   ]
// };
const workExperiences = {
  display: true,
  experience: [
{
  role: "Senior Flutter Developer",
  company: "Mazadi.app",
  url:"https://mazadi.app/",
  companylogo: require("./assets/images/mazadi3.png"), // update path if needed
  date: "Oct 2024 – Aug 2025",
  desc: "Responsible for maintaining, modernizing, and scaling the Mazadi mobile application while improving performance and stability.",
  descBullets: [
    "Refactored and migrated the application to Flutter 3, resolving breaking changes and improving overall stability.",
    "Optimized rendering performance for large dynamic data lists by redesigning data-fetching logic with caching to reduce unnecessary rebuilds.",
    "Implemented image caching and lazy loading strategies, significantly improving media loading performance.",
    "Developed dynamic multi-language support (Arabic / English) with proper RTL handling and localization architecture.",
    "Integrated secure payment gateways including Bank Al Baraka for smooth transaction processing.",
    "Built a custom native Android module using Kotlin for SMS-based OTP verification and auto-read authentication flow."
  ]
},
    {
      role: "Frontend Developer (Next.js)",
      company: "web.mazadi.app",
      url: "https://web.mazadi.app/",
      companylogo: require("./assets/images/mazadi3.png"),
      date: "Oct 2025 – Mar 2026",
      desc: "Re-engineered the web presence to prioritize performance, SEO, and seamless user hydration.",
      descBullets: [
        "Re-architected the frontend using Next.js App Router, cutting initial page load time in half via optimized SSR boundaries.",
        "Mastered SEO optimization using Metadata API, dynamic meta tags, Open Graph, and automated sitemap strategies.",
        "Implemented SSR/CSR hydration strategies to resolve performance bottlenecks and improve user experience.",
        "Significantly improved Core Web Vitals (CLS, LCP) and achieved high Lighthouse scores across all modules."
      ]
    },
    {
      role: "React Developer (AI & Web3)",
      company: "Ethiq.us",
      url:"https://app.ethiq.us/",
      companylogo: require("./assets/images/ethiq2.png"),
      date: "Sep 2025 – Dec 2025",
      desc: "Bridging the gap between AI-driven communication and decentralized blockchain infrastructure.",
      descBullets: [
        "Integrated AI-powered agents into a React chatbot interface for intelligent, context-aware user interactions.",
        "Built secure frontend logic for interacting with smart contracts and Web3 decentralized services.",
        "Designed conversational UI components and managed complex asynchronous state for blockchain events.",
        "Developed wallet-based authentication flows and on-chain operation tracking."
      ]
    },
    {
      role: "Flutter Developer",
      company: "ASBN (Australian Syrian Business Network)",
      url:"https://asbn.org.au/",
      companylogo: require("./assets/images/asbn.png"),
      date: "June 2025 – Aug 2025",
      desc: "Led the end-to-end mobile development lifecycle from initial wireframes to App Store/Google Play deployment.",
      descBullets: [
        "Translated complex business requirements into a fully functional cross-platform application for iOS and Android.",
        "Architected the app using Clean Architecture and BLoC pattern for maximum scalability.",
        "Implemented dynamic content-driven pages and integrated WebView modules for CMS-powered content.",
        "Managed successful production deployment and release cycles on both major app stores."
      ]
    },
    {
  role: "Backend Developer (ASP.NET)",
  company: "RK Tender",
  url: "https://rk-tenders.com/",
  companylogo: require("./assets/images/rktender.png"), // add logo if you have one
  date: "Oct 2024 – Mar 2025",
  desc: "Maintained and enhanced enterprise legacy systems used by Kabalan Group, focusing on backend performance, security, and maintainability.",
  descBullets: [
    "Maintained the enterprise systems built with C# and ASP.NET core, improving performance and maintainability.",
    "Implemented custom Attribute-Based Access Control (ABAC) mechanisms to strengthen authorization and enforce fine-grained permissions.",
    "Analyzed legacy system architecture to identify technical debt and proposed structural improvements.",
    "Produced detailed technical documentation covering system architecture, workflows, and API behavior to support future development.",
    "Collaborated with internal teams to troubleshoot production issues and optimize backend services."
  ]
}
  ]
};

const openSource = {
  showGithubProfile: "true", 
    display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SELECTED PROJECTS I BUILT OR CONTRIBUTED TO",
  projects: [
    {
  image: require("./assets/images/flutter.png"), // use Flutter logo or package image
  projectName: "USSD Advanced Flutter",
  projectDesc:
    "A Flutter plugin that enables advanced USSD interactions on Android devices. It allows developers to send USSD requests, handle multi-step USSD sessions, and capture responses programmatically, enabling automation of telecom-based services.",
  footerLink: [
    {
      name: "See on GitHub",
      url: "https://github.com/numa-alset/ussd_advanced_flutter"
    }
  ]
},
    {
      image: require("./assets/images/roomy.png"),
      projectName: "Roomy – Voice Chat Rooms",
      projectDesc:
        "Real-time voice chat application built with Flutter using WebRTC and WebSockets. Includes AI voice assistant integration and follows Clean Architecture with Riverpod for scalable state management.",
      techStack: ["Flutter", "WebRTC", "WebSockets", "Riverpod", "AI"],
      footerLink: [
        {
          name: "See on GitHub",
          url: "https://github.com/numa-alset/Roomy"
        }
      ]
    },

    {
      image: require("./assets/images/Logo_PNG_1024.png"),
      projectName: "Homey – Real Estate Backend",
      projectDesc:
        "ASP.NET Core Web API powering a real estate platform with user authentication, property listings, comments, and real-time chat functionality using SignalR.",
      techStack: ["C#", "ASP.NET Core", "SQL Server", "SignalR", "JWT"],
      footerLink: [
        {
          name: "See on GitHub",
          url: "https://github.com/numa-alset/Homey_Backend"
        }
      ]
    },

    {
      image: require("./assets/images/Logo_PNG_1024.png"),
      projectName: "Homey – Real Estate Mobile App",
      projectDesc:
        "Flutter-based mobile application for discovering rental properties with advanced filtering, direct messaging with property owners, and an intuitive UI for seamless browsing.",
      techStack: ["Flutter", "Firebase", "REST API"],
      footerLink: [
        {
          name: "See on GitHub",
          url: "https://github.com/numa-alset/homey"
        }
      ]
    },

    {
      image: require("./assets/images/shop_app.png"),
      projectName: "E-Commerce Shop App",
      projectDesc:
        "Mobile e-commerce application built with Flutter featuring product browsing, cart management, and Firebase backend integration.",
      techStack: ["Flutter", "Firebase"],
      footerLink: [
        {
          name: "See on GitHub",
          url: "https://github.com/numa-alset/shop_app"
        }
      ]
    },

    {
      image: require("./assets/images/meal-app1.png"),
      projectName: "Recipe Meals App",
      projectDesc:
        "Flutter application that allows users to explore recipes, filter meals by dietary preferences, and view detailed cooking instructions.",
      techStack: ["Flutter"],
      footerLink: [
        {
          name: "See on GitHub",
          url: "https://github.com/numa-alset/meals-app"
        }
      ]
    },

    {
      image: require("./assets/images/APP2 (2).png"),
      projectName: "Public Services Locator",
      projectDesc:
        "Web application with map integration that helps users locate nearby healthcare facilities and public services based on filters and geographic distance.",
      techStack: ["JavaScript", "Maps API"],
      footerLink: [
        {
          name: "See on GitHub",
          url: "https://github.com/numa-alset/public_services"
        }
      ]
    }
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Mathimatics Olympiad",
      subtitle:
        "Participate in the third university olympiad for mathimatics and earned the 5th place",
      image: require("./assets/images/homsUniversity.png"),
      imageAlt: "University Logo",
      footerLink: [
        {
          name: "2021",
          // url: "https://drive.google.com/drive/folders/133fkRxQrt65ln_9DIlWXkvjXWO2JJ0Vm"
        },
        // {
        //   name: "Award Letter",
        //   url: ""
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Flutter Developer",
    //   subtitle:
    //     "Finished Maximilian course , coding all his projects and understands all topics",
    //   image: require("./assets/images/flutter.png"),
    //   imageAlt: "Flutter Dev",
    //   footerLink: [
    //     {
    //       name: "Projects",
    //       url: "https://drive.google.com/drive/folders/133fkRxQrt65ln_9DIlWXkvjXWO2JJ0Vm"
    //     },
    //   ]
    // },
    {
      title: "FULL STACK IBM CERTIFICATE",
      subtitle:
        "I  finished the IBM Full Stack course on coursera",
      image: require("./assets/images/IBM.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/132CnXdiituNb0kiXdGtbvMyhef81pjvb"
        },
        {
          name: "Course Link",
          url: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer"
        },
      ]
    },

    {
      title: "SCPC CONTESTANT",
      subtitle: "I participate in the SCPC as contestant twice ",
      image: require("./assets/images/ICPC.png"),
      imageAlt: "scpc Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/drive/folders/13mKm9e4OHj-d4gtLsQtP2uzrG3Hklhbf"},
      ]
    },
    
    {
      title: "SCPC Volunteer",
      subtitle: "I Volunteer in the SCPC as Technical team member ",
      image: require("./assets/images/ICPC.png"),
      imageAlt: "scpc Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/drive/folders/13mKm9e4OHj-d4gtLsQtP2uzrG3Hklhbf"},
      ]
    }
  ],
  display: true
};
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+963-997412139",
  email_address: "numaalset@gmail.com"
};

const isHireable = false; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable
};
