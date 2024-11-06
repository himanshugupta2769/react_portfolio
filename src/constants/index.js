import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "jun/2024 - Present",
    role: " Full Stack Developer",
    company: "Ducat.",
    description: `The MERN stack is a web development framework combining MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (server environment). It allows developers to build full-stack JavaScript applications. MongoDB stores data, Express.js handles the backend, React manages the user interface, and Node.js executes server-side code. `,
    technologies: ["Javascript", "React.js", "tailwind", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "BMI",
    image: project1,
    description:
      "Body Mass Index or BMI is an estimate of a person's leanness or body fat based on their body weight and height, and is designed to assess tissue mass. It is commonly used as a general measure of whether a person's body weight is appropriate for their height.",
    technologies: ["HTML", "Tailwind", "React"],
    link: "https://master--bmicalculaterrr.netlify.app/", // Add the link here
  },
  {
    title: "Mausam dekho ",
    image: project2,
    description: "An application for checking wheather for any where",
    technologies: ["HTML", "Tailwind", "React", "Free Weather Api"],
    link: "https://66ea55ae293522e944afdfdb--mausamdekhlo.netlify.app/", // Add the link here
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwind", "framer motion"],
    link: "", // Add the link here
  },
  {
    title: "Todo Application",
    image: project4,
    description:
      "An application where you can save your daily task and also gives you the notification of task complition ",
    technologies: ["HTML", "tailwind", "React"],
    link: "https://master--himanshutodos.netlify.app/", // Add the link here
  },
];

export const CONTACT = {
  address: "R5/28 ohan Garden Uttam Nagar New Delhi-110059 ",
  phoneNo: "09717120615",
  email: "hg539747@gmail.com",
};
