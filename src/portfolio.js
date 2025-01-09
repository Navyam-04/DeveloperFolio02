/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
//import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import birthdayAnimationIntro from "./assets/lottie/birthdayAnimationIntro.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: birthdayAnimationIntro,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mangali Navya",
  title: "Hi all, I'm Navya",
  subTitle: emoji(
    "Results-driven Data Science student with expertise in data analytics, statistics, and programming. Skilled in Python, SQL, Excel, and data visualization tools like Tableau and Power BI to deliver actionable insights and support decision-making. Passionate about solving real-world problems through data and seeking opportunities to grow as a Data Analyst through impactful projects and internships."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1azLiuBOrKOC377I-V2cCneUgZZw7FDLm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/navya-mangali/",
  gmail: "middenavya51@gmail.com",
  github: "https://github.com/Navyam-04",
  //gitlab: "https://gitlab.com/name",
  //facebook: "https://www.facebook.com/name",
  //medium: "https://medium.com/@name",
  //stackoverflow: "https://stackoverflow.com/users/10422806/name",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA ANALYST EAGER TO EXPLORE EVERY ASPECT OF DATA AND ANALYTICS",
  skills: [
    emoji(
      "🔍 Uncover Hidden Trends: Analyze large datasets to identify meaningful patterns and opportunities that drive business growth"
    ),
    emoji("📊 Create Impactful Visualizations: Transform raw data into interactive dashboards and visual reports for clear decision-making"),
    emoji(
      "🚀 Enable Data-Driven Strategies: Provide actionable insights to solve complex problems and optimize business performance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PowerBI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Statistics",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Decision Making",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Hadoop",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "C Language",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajeev Gandhi Memorial College of Engineering and Technology",
      logo: require("./assets/images/logorgm.jpg"),
      subHeader: "Bachelor of Technology in Computer Science ( Data Science ) ",
      duration: "September 2022 - April 2026",
      desc: "My academic journey has equipped me with a solid foundation in data analysis, machine learning, and statistical modeling.",
      descBullets: [
        "I am passionate about leveraging data-driven insights to solve complex problems and make informed decisions.",
        " With a keen eye for detail and proficiency in tools such as Python, SQL, and data visualization platforms, I am eager to apply my skills as a Data Analyst."
      ]
    },
    {
      schoolName: "Narayana Junior College",
      logo: require("./assets/images/NarayanaJrClg.png"),
      subHeader: "Board of Intermediate Education, Andhra Pradesh ( BIEAP ) ",
      duration: "September 2020 - April 2022",
      desc: "Completed Intermediate education in MPC under the Board of Intermediate Education, Andhra Pradesh (BIEAP).",
      descBullets: [
        "Developed a strong foundation in mathematics along with improved statistical skills."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PowerBI",
      progressPercentage: "85%"
    },
    {
      Stack: "Excel",
      progressPercentage: "80%"
    },
    {
      Stack: "Statistics",
      progressPercentage: "90%"
    },
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    
    // {
    //   Stack: "Data Visualization",
    //   progressPercentage: "90%"
    // },
    {
      Stack: "C++",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "FEW PROJECTS WHICH I HAVE WORKED ON TRANSFORMING RAW DATA INTO ACTIONABLE INSIGHTS",
  projects: [
    {
      image: require("./assets/images/blinkitanalysis.png"),
      projectName: "Blinkit Analysis",
      projectDesc: "Developed an interactive Power BI dashboard to analyze Blinkit's operational performance, including sales trends, delivery times, and customer satisfaction metrics, enabling data-driven decision-making...",
      footerLink: [
        {
          name: "View Project",
          url: "link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/adidassalesanalysis.png"),
      projectName: "Adidas Sales Analysis",
      projectDesc: "Streamlined data visualization and reporting by integrating key performance metrics, enabling data-driven decision-making and identifying opportunities for sales growth...",
      footerLink: [
        {
          name: "View Project",
          url: "link"
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
      title: "Professional Certificate in Data Analyst",
      subtitle: "With this certificate I have developed the confidence and portfolio to begin a career as an associate or junior data analyst...",
      image: require("./assets/images/ibmlogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1u6fHKaYDbehFbcIa9yX3k7xUd_awKAqR/view?usp=sharing"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      subtitle: "Completed a simulation involving creating data visualizations for Tata Consultancy Services...",
      image: require("./assets/images/tatalofoforages.png"),
      imageAlt: "TATA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1LhquGjak-ggwj26c1nDXz_YOFkJAlX7v/view?usp=sharing"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    
    {
      title: "Accenture North America Data Analytics and Visualization Job Simulation on Forage - May 2024",
      subtitle: "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture...",
      image: require("./assets/images/accenturelogo.png"),
      imageAlt: "ACCENTURE Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1l9oOSQSe21Oncl7_3j5xtd7OwMQ0J7Df/view?usp=sharing"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "PwC Switzerland Power BI Job Simulation on Forage - November 2024",
      subtitle: "Completed a job simulation where I strengthened my PowerBI skills to better understand clients and their data visualisation needs...",
      image: require("./assets/images/pwcpowerbilogo.png"),
      imageAlt: "PWC Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1ydeF_LDDbt9I9gmQZ5e3VRZ5eEFCmRjK/view?usp=sharing"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },


    {
      title: "BCG Data Science Job Simulation on Forage - December 2024",
      subtitle: "Conducted efficient data analysis using Python, including Pandas and NumPy. Employed data visualization techniques for insightful trend interpretation...",
      image: require("./assets/images/bcgxlogo.png"),
      imageAlt: "BCGX Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1uQkUyBEDwrfPnzz5pN8HgxsBh-fMZOo4/view?usp=sharing"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    // {
    //   title: "Smart India Hackathon",
    //   subtitle:
    //     " Selected for Smart India Hackathon with innovative project on FootStep Power Generation...",
    //   image: require("./assets/images/SIH2023.png"),
    //   imageAlt: "Smart India Hackathon Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/11jwzxzN7_YmhAywcmN-gFKZyk-lMhOM9/view?usp=sharing"
    //     },
        
    //   ]
    // },
    // {
    //   title: "24 - Hours Hackathon",
    //   subtitle:
    //     "Participated in CODEQUEST Event, gained skills through hands-on experience...",
    //   image: require("./assets/images/24hackathon.png"),
    //   imageAlt: "24 Hours Hackathon Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: ""
    //     }
    //   ]
    // },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 91825 29928",
  email_address: "middenavya51@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
