import { log } from "console";

export const profile = {
  name: "Suvigya Srivastava",
  tagline: "Passionate about changing the world with technology",
  email: "suvigyasrvstva@gmail.com",
  about: "My name is Suvigya Srivastava. I'm a final-year grad at ABES Engineering College , Ghaziabad with a degree in Bachelor of Technology (Computer Science). I'm passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
  social: {
    github: "https://github.com/SuvigyaSrivastava",
    linkedin: "https://www.linkedin.com/in/suvigya-srivastava-134a8221a/",
   
  },
  experience: [
    {
      company: "Prodigal AI",
      role: "Gen AI Intern",
      period: "Aug 2024 – Sept 2024",
      logo: "https://cdn-images-1.medium.com/v2/resize:fit:1200/1*PHesa8wDYEA_lJRntF_f4g.png",
    },
    
  ],
  projects: [
    {
      name: "MinutesOfMeet",
      description: "It's a video calling web app using WebRTC and WebSockets. ",
      languages: ["JavaScript", "SCSS"],
      github: "https://github.com/SuvigyaSrivastava/MinutesOfMeet"
    },
    {
      name: "rule-engine-app",
      description: "This project is a simple 3-tier rule engine application designed to determine user eligibility based on attributes such as age, department, salary, experience, etc.",
      languages: ["React", "Node.js"],
      github: "https://github.com/SuvigyaSrivastava/rule-engine-app"
    }
  ],
  skills: {
    technical: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Data Structures", level: 70 }
    ],
    soft: [
      { name: "Communication", level: 90, description: "Excellent verbal and written communication skills" },
      { name: "Leadership", level: 85, description: "Experience in team leadership and project management" },
      { name: "Team Spirit", level: 88, description: "Strong ability to work collaboratively in diverse teams" },
      { name: "Adaptability", level: 82, description: "Quick to adapt to new technologies and environments" },
      { name: "Goal Oriented", level: 87, description: "Focused on achieving targets and delivering results" }
    ]
  }
};