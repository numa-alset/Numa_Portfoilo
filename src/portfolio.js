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
    "https://drive.google.com/file/d/188ycy0g8FF_3JZeGCeVGpc8VM6XAFDvy", // Set to empty to hide the button
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

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Backend Developer",
      company: "Rental Reale Estate App",
      companylogo: require("./assets/images/Logo_PNG_1024.png"),
      date: "Jan 2024 ",
      desc: ["Asp.net core web Api for Rental App with chat functionalty and VIP user tier for accessing a specific Features  ",<p >I Learnt from this project</p>,],
      descBullets: [
        "Building a complete and secure Api ",
        "Authunticate and Authorization with [Admin-Vip-default] teirs ",
        "Building a chat Functionality with SingleR over webSocket",
        "using EntityFramework with code first migration",
        "Clean Arcitecture with Repository pattern and UnitOfWork"
      ]
    },
    {
      role: "Flutter Developer",
      company: "Rental Reale Estate App",
      companylogo: require("./assets/images/Logo_PNG_1024.png"),
      date: "Jan 2024 ",
      desc: ["mobile application  helps you to find rental places based on filters and contacting directly with the owner  ",<p >I Learnt from this project</p>,],
      descBullets: [
        "Building a responsive and adaptive mobile interfaces ",
        "Authunticate users and Token with any backend",
        "Building a chat Functionality with webSocket",
        "Mastering Provider StateManagmet and implementing it via widget tree",
        "Dealing with Firebase and achive its Featuers"
      ]
    },
    {
      role: "Front-End Developer",
      company: "public service website",
      companylogo: require("./assets/images/APP2 (2).png"),
      date: "May 2023",
      desc:[ "website that allows you to add your facility on map and let users reach you by reviews or short distance",<p>I Learnt from this project</p>],
      descBullets: [

        "Building a responsive and interactive web interfaces",
        "Comunicating with backend via APIs",
        "integrating React with third party",
        "Mastering mapbox services and implementing it in the app",
        "Dealing with React hooks and use it in the app"
      ]
    },
   
  ]
};

const openSource = {
  showGithubProfile: "true", 
    display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS THAT I HELPED TO CREATE AND DELEVER",
  projects: [
    {
      image: require("./assets/images/Logo_PNG_1024.png"),
      projectName: "RENTAL REAL ESTATE",
      projectDesc: "the Backend section for Homey app",
      footerLink: [
        {
          name: "See on github",
          url: "https://github.com/numa-alset/Homey_Backend"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Logo_PNG_1024.png"),
      projectName: "RENTAL REAL ESTATE",
      projectDesc: "The Frontend section for Homey app ",
      footerLink: [
        {
          name: "See on github",
          url: "https://github.com/numa-alset/homey"
        },
        {
          name: "see Demo about the app",
          url: "https://drive.google.com/drive/folders/13y_tSIEy404VY4wVkIXvsy8QL5uS1Ft4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shop_app.png"),
      projectName: "SHOP APP",
      projectDesc: "A simple Electronic shop with cart feature and Firebase integrations ",
      footerLink: [
        {
          name: "see on github",
          url: "https://github.com/numa-alset/shop_app"
        },
        {
          name: "see Demo and install the app",
          url: "https://drive.google.com/drive/folders/163eeWbIjg4R_CtXUeNFtuUOpQOFxyfea"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/meal-app1.png"),
      projectName: "Reccipe Meals App",
      projectDesc: "Simple app for show Recipe for some Meals and Filter them ",
      footerLink: [
        {
          name: "see on github",
          url: "https://github.com/numa-alset/meals-app"
        },
        {
          name: "see Demo and install the app",
          url: "https://drive.google.com/drive/folders/16D2Fj4NVS1aDEOtAkNKhTWgdz7pKwS7C"
        }
      ]
    },
    {
      image: require("./assets/images/APP2 (2).png"),
      projectName: "Public Service",
      projectDesc: "Roaming website with Map integration to see the path for nearest Health facility or based on filters",
      footerLink: [
        {
          name: "see on github",
          url: "https://github.com/numa-alset/public_services"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NextJs Course",
      subtitle:
        "Finished Maximilian course , coding all his projects and understands all topics",
      image: require("./assets/images/next.jpg"),
      imageAlt: "Flutter Dev",
      footerLink: [
        // {
        //   name: "Projects",
        //   url: "https://drive.google.com/drive/folders/133fkRxQrt65ln_9DIlWXkvjXWO2JJ0Vm"
        // },
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
    {
      title: "Flutter Developer",
      subtitle:
        "Finished Maximilian course , coding all his projects and understands all topics",
      image: require("./assets/images/flutter.png"),
      imageAlt: "Flutter Dev",
      footerLink: [
        {
          name: "Projects",
          url: "https://drive.google.com/drive/folders/133fkRxQrt65ln_9DIlWXkvjXWO2JJ0Vm"
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
      title: "ICPC CONTESTANT",
      subtitle: "I participate in the ICPC as contestant twice and once as volunteer",
      image: require("./assets/images/ICPC.png"),
      imageAlt: "PWA Logo",
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
