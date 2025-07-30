
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import cyber from "./assets/cyber.png"
import sar from "./assets/sar.jpg"
import kuk from "./assets/kuk.jpg"    
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import merni from "./assets/merni.png"
import env from "./assets/env.png"
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import primg from "./assets/pro.png"




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
     
     
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      
     
      { name: 'Python', logo: pythonLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
     
    ],
  },
];

  export const experiences = [
    {
     
  id: 1,
  img: merni,
  role: "Fullstack Developer (Learning Phase)",
  company: "Self Projects",
  date: "june 2024 – Present",
  desc: "Building real-world web applications using the MERN stack (MongoDB, Express, React, Node.js). Created a Marvel Universe project with dynamic routes, API integration, and responsive UI using Tailwind CSS. Implemented authentication, CRUD operations, and RESTful APIs using Express and MongoDB. Collaborating on GitHub and learning version control, deployment, and code optimization techniques.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Tailwind CSS",
    "Git",
    "React Router"
  ],

    },
    {
      
  id: 1,
  img: cyber, // Replace with actual import or path to your image file
  role: "Cyber Security Learner",
  company: "Self-paced / Online Platforms",
  date: "2023 – Present",
  desc: "Learning and practicing core cybersecurity concepts including SOC operations, threat detection, and vulnerability assessment. Hands-on labs using CTF platforms like TryHackMe and Hack The Box.",
  skills: [
    "Network Security",
    
    
    
    
    "TryHackMe",
    "Hack The Box",
    "Linux",
    "Burp Suite",
    "Wireshark",
  ],


    },
    {
      
  id: 3,
  img: env, // Add logo image and name it as envisionLogo in your assets
  role: "Cyber Security Intern",
  company: "Envision Group",
  date: "July 2024 – August 2024",
  desc: "Completed a 6-week internship focused on Ethical Hacking under the mentorship of industry professionals. Gained hands-on experience with network security, threat analysis, and ethical hacking methodologies.",
  skills: [
    "Ethical Hacking",
    "Network Security",
    "Threat Analysis",
    "Linux",
    "Reconnaissance",
    "Burp Suite",
    "Nmap",
    "Kali Linux"
  ]


    },
  ];
  
 
   export const education = [
  {
    id: 0,
    img: sar, // Use your school logo image or import
    school: "Saraswati Vidya Mandir Senior Secondary School, Haryana",
    date: "April 2020 - March 2021",
    grade: "98.6%",
    desc: "I completed my Class 10 education under the HBSE board with outstanding academic performance. This foundational phase helped me develop a disciplined approach toward learning and excellence in core subjects.",
    degree: "HBSE (X) - Secondary Education",
  },
  {
    id: 1,
    img: sar,
    school: "Saraswati Vidya Mandir Senior Secondary School, Haryana",
    date: "April 2022 - March 2023",
    grade: "79%",
    desc: "I completed my Class 12 education under the HBSE board with a focus on the PCM stream. This phase helped me build a solid base in logical thinking and problem-solving, especially in mathematics and computer science.",
    degree: "HBSE (XII) - PCM (Physics, Chemistry, Mathematics)",
  },
  {
    id: 2,
    img: kuk, // Use Kurukshetra University logo here
    school: "Kurukshetra University",
    date: "Oct 2023 – July 2027 (Ongoing)",
    grade: "",
    desc: "Pursuing BTech in Computer Science with a specialization in Cyber Security. The program focuses on network security, ethical hacking, cryptography, digital forensics, and secure software engineering. It is equipping me with both the theoretical knowledge and practical skills required in the cybersecurity domain.",
    degree: "Bachelor of Technology - BTech in Cyber Security",
  },
];


  
  export const projects = [

{
  id: 1,
  title: "Marvel Universe Explorer",
  description:
    "A dynamic MERN stack web application that showcases Marvel universe content. Features include responsive UI, authentication, CRUD operations, and dynamic routing. Built using React, Node.js, Express, and MongoDB with Tailwind CSS for styling. Designed for both learning and real-world application experience.",
  image: primg, // Add your Marvel project screenshot and name it marvelLogo
  tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS", "REST API"],
// Replace with actual GitHub repo
  webapp: "https://marvelverse-fvx0.onrender.com/", // Replace with actual deployed app link
}







  ]