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
  title: "Hi all, I'm Numa",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / .NET / Flutter / Kotln and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
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
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end and User Interfaces for your web "
    ),
    emoji("⚡ Develop highly responsive and adaptive Interfaces for your mobile Application "),
    emoji(
      "⚡ building a secure backend and delivering high preformance api "
    ), emoji(
      "⚡ Integration of third party services "
    )
    , emoji(
      "⚡ Dealing efficiently with Database / Analyzing Data and generating a high preformance queries "
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "Kotln",
    //   fontAwesomeClassname: "fab fa-kotlin"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

  ],
  display: true 
};

// Education Section
const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Al-Baath University",
      logo: require("./assets/images/IMG-20211124-WA0000.jpg"),
      subHeader: "bachelor of Software engineering ",
      duration: "September 2019 - August 2024",
      desc: "Participated in ICPC 3 times ",
      descBullets:''
    },
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "98%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false 
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
      desc: [" mobile application  helps you to find rental places based on filters and contacting directly with the owner  ",<p >I Learnt from this project</p>,],
      descBullets: [
        "Building a responsive and adaptive mobile interfaces ",
        "Authunticate users and Token with any backend",
        "Building a chat Functionality with webSocket",
        "Mastering Provider StateManagmet and implementing it via widget tree",
        "Dealing with Firebase and achive its Featuers"
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "RENTAL REAL ESTATE",
      projectDesc: "SMART ASSISTANSE THAT HELPS YOU FIND OR PUBLISH REANTAL PROPRTY ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "RENTAL REAL ESTATE",
      projectDesc: "SMART ASSISTANSE THAT HELPS YOU FIND OR PUBLISH REANTAL PROPRTY ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "RENTAL REAL ESTATE",
      projectDesc: "SMART ASSISTANSE THAT HELPS YOU FIND OR PUBLISH REANTAL PROPRTY ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "PUBLIC SERVICES",
      projectDesc: "FIND FACILITIES LIKE PHARMACIES BASED ON NEAREST OR RATED AND DISPLAYED ON MAP",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
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
      subtitle: "I participate in the ICPC win in the local level but didn't reach to international yet",
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
