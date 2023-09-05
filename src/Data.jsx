// import VouchifyApp from "./assets/1.jpg";
// import ARPorang from "./assets/AR.jpg";
// import PremApps from "./assets/15.jpg";
// import Koskuy from "./assets/12.jpg";
import Wemos from "./assets/wemosd1.png";
// import Amd from "./assets/8.jpg";
// import PortfolioV4 from "./assets/10.jpg";
import Suhu from "./assets/suhu.jpg";
import Blog from "./assets/myblog.png"
// import PortfolioV2 from "./assets/2.svg"
// import PortfolioV1 from "./assets/6.svg"
// import JsGame from "./assets/11.svg"

// import Testimonial1 from "./assets/testimonial1.jpg";
// import Testimonial2 from "./assets/testimonial2.jpg";
// import Testimonial3 from "./assets/testimonial3.jpg";
// import Testimonial4 from "./assets/testimonial4.jpg";
// import Testimonial5 from "./assets/testimonial5.jpg";

import ReactLogo from "./assets/react-logo.svg";
//import UnityLogo from "./assets/unity2-logo.svg";
import JsLogo from "./assets/js2-logo.svg";
import PhpLogo from "./assets/php2-logo.svg";
import SqlLogo from "./assets/sql-logo.svg";
import CanvaLogo from "./assets/canva2-logo.svg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Works",
    path: "work",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Contact",
    path: "contact",
  },
  {
    name: "Main Site",
    link: "https://sedanight.my.id",
  },
];

export const services = [
  {
    id: 1,
    name: "Web Development",
    title: "Management Web",
    description:
      "Over 1 years of development experience in Script Languange, JS, PHP.",
    technology: ReactLogo,
  },
  {
    id: 2,
    name: "Embedded System",
    title: "Arduino Microcontroller",
    description:
      "Creating and developing humidity & temperature monitoring system with SHT-31 sensor and WeMos Microcontroller",
    technology: CanvaLogo,
  },
  // {
  //   id: 2,
  //   name: "Embedded System",
  //   title: "Arduino Microcontroller",
  //   description:
  //     "The Figma and Canva Pro that I have can help you work on designs such as website, posters, banners, presentations, proposals, logos, and social media needs.",
  //   technology: CanvaLogo,
  // },
  // {
  //   id: 3,
  //   name: " Game & AR ",
  //   title: "Unity",
  //   description:
  //     "Creating and developing games & Augmented Reality (AR) experiences for the Android platform with a unique signature.",
  //   technology: UnityLogo,
  // },
  // {
  //   id: 4,
  //   name: ' Advertising ',
  //   title: ' Google Ads ',
  //   description:
  //     ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  // },
  // {
  //   id: 5,
  //   name: ' Music Writing ',
  //   title: ' Sound Track ',
  //   description:
  //     'Music copying, writing, creating, transcription and composition services.',
  // },
];

export const skills = [
  {
    id: 1,
    name: "PHP",
    percentage: 50,
    logo: PhpLogo,
  },

  {
    id: 2,
    name: "JavaScript",
    percentage: 50,
    logo: JsLogo,
  },

  // {
  //   id: 3,
  //   name: "React",
  //   percentage: 50,
  //   logo: ReactLogo,
  // },

  {
    id: 3,
    name: "SQL",
    percentage: 50,
    logo: SqlLogo,
  },

  // {
  //   id: 5,
  //   name: "Canva",
  //   percentage: 50,
  //   logo: CanvaLogo,
  // },

  // {
  //   id: 6,
  //   name: "Unity",
  //   percentage: 50,
  //   logo: UnityLogo,
  // },
];

export const projects = [
  {
    id: 1,
    img: Suhu,
    category: "Web",
    title: "Final Project Campus Website",
    description:
      "This Final Project Web to Future Project in my Department",
  },
  // {
  //   id: 2,
  //   img: ARPorang,
  //   category: "Game & AR",
  //   title: "Porang Plant AR Application",
  //   description:
  //     "Introducing and educating about the characteristics of porang plants, their benefits, and cultivation through augmented reality technology.",
  // },
  // {
  //   id: 3,
  //   img: Koskuy,
  //   category: "Branding",
  //   title: "Koskuy",
  //   description:
  //     "Koskuy is a platform that manages and presents a list of boarding houses, particularly in the Madiun area.",
  // },

  // {
  //   id: 4,
  //   img: PremApps,
  //   category: "Branding",
  //   title: "Premium Apps",
  //   description:
  //     "Selling various Premium Applications such as video streaming, music, design, editing, education, and more.",
  // },

  {
    id: 2,
    img: Blog,
    category: "Web",
    title: "Laravel Blog",
    description:
      "Laravel Blog Develop to Train How About Blog Works",
  },

  // {
  //   id: 3,
  //   img: PortfolioV4,
  //   category: "Web",
  //   title: "Personal Website V4",
  //   description:
  //     "My personal website has now reached version 4 with updated design, technology, and information about myself. Enjoy!",
  // },

  {
    id: 3,
    img: Wemos,
    category: "Embedded System",
    title: "Wemos D1 R1 & SHT31-D",
    description:
      "Develop a Source Code to Implement Monitoring System in Internet Of Things Principal",
  },

  // {
  //   id: 8,
  //   img: PortfolioV2,
  //   category: "Web",
  //   title: "Personal Website V2",
  //   description:
  //     "Welcome to version 2 of my personal website! This iteration presents an enhanced and user-friendly interface",
  // },

  // {
  //   id: 9,
  //   img: PortfolioV1,
  //   category: "Web",
  //   title: "Personal Website V1",
  //   description:
  //     "Welcome to version 1 of my personal website! This iteration presents an enhanced and user-friendly interface",
  // },
];

export const cv = [
  {
    id: 1,
    title: "Sriwijaya University",
    subtitle: "Bachelor Degree of Physics in Natural Science",
    date: "2020 - 2023",
    description:
      "Relevant Course works: Algorithms and Programming",
    category: "education",
  },

  {
    id: 2,
    title: "Dicoding Course Bootcamp",
    subtitle: "Back-End Web Developer",
    date: "2023",
    description:
      "Throughout the courses, I learned to design and develop web applications from scratch to finish, utilizing programming languages such as HTML, CSS, JavaScript, along with popular frameworks like Node.js and testing with POSTMAN all within a period of 5 months.",
    category: "education",
  },

  {
    id: 3,
    title: "Codepolitan",
    subtitle: "Fullstack Web Developer",
    date: "2022 - PRESENT",
    description:
      "This course has equipped me with the skills needed to develop dynamic and responsive web solutions, and I am very enthusiastic about applying my expertise in real-world projects.",
    category: "education",
  },

  {
    id: 4,
    title: "BMKG I Class Climatology & Meteorology in South Sumatera",
    subtitle: "Data Analyts",
    date: "2020",
    description:
      "During the internship, I collaborated with a team of developers to work on real-world measurement how about the system works.",
    category: "experience",
  },

  {
    id: 5,
    title: "PT. Alih Daya Pratama",
    subtitle: "Payment Collector",
    date: "2023",
    description:
      "Being a Payment Collector in Outsourcing Company Able to knowledge how about payment system works and remind the client do the payment is some knowledge why they can't pay during the periode of the system are notice. ",
    category: "experience",
  },

  // {
  //   id: 6,
  //   title: "Project Manager",
  //   subtitle: "PT Mandiri Asta Kencana",
  //   date: "2022",
  //   description:
  //     "I was once a project manager in a collaborative project with campus partners. In this role, I successfully lead and coordinate a project team to achieve the set goals and project milestones.",
  //   category: "experience",
  // },
];

// export const testimonials = [
//   {
//     id: 1,
//     img: Testimonial1,
//     name: "Barbara Wilson",
//     author: "CEO Company",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: Testimonial2,
//     name: "Charlie Smith",
//     author: "Designer",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Testimonial3,
//     name: "Roy Wang",
//     author: "Manager GYM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 4,
//     img: Testimonial4,
//     name: "Jennifer Smith",
//     author: "CEO & Founder",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 5,
//     img: Testimonial5,
//     name: "Paul Freeman",
//     author: "Photographer",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];
