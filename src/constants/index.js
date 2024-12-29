// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const PROFILE_CONTENT = "I'm a junior at UC Berkeley interested in EdTech, web development, SWE, and related fields! Currently, I'm working as a Software Engineer building full-stack apps at Berkeley startup Wyzly, and I've been a Course Tutor for several UCB CS classes, including 61A and 61B.";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Software Engineer",
    company: "Wyzly",
    description: "Developed and maintained web applications using JavaScript and React.js. fill rest",
    technologies: ["Javascript", "React.js"],
  },
  {
    year: "Aug 2023 - Present",
    role: "Course Tutor",
    company: "University of California, Berkeley, EECS",
    description: "Official EECS tutor for CS61A and CS61B, taught students weekly, created original educational material to foster learning and problem solving skills, emphasized understanding rather than rote memorization.",
    technologies: ["Java", "Python", "DSA", "OOP"],
  },
];

export const PROJECTS = [
  {
    title: "Jellyfish Personality Quiz",
    link: "https://meicib.github.io/jelly-quiz/",
    description:
      "A personality quiz game made with naive HTML/CSS/JS.",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "SRBC Status Website",
    link: "https://srbc-status-1d51462a25c5.herokuapp.com/",
    description:
      "A fully functional website allowing admin to update the live capacity of the SR Badminton Club, and users to view the live capacity and when it was last updated.",
    technologies: ["JS", "Express", "Node.js", "MongoDB", "HTML", "CSS"],
  },
  {
    title: "Language Classifier",
    link: null,
    description:
      "A Recurrent Neural Network that processes a batch of input words by letter and returns the most likely language classification for each word, with 90% accuracy on test set.",
    technologies: ["Python", "Pytorch", "matplotlib", "numpy"],
  },
  {
    title: "Portfolio Website",
    link: null,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Vite"],
  },
];

export const COURSEWORK = [
  {
    year: "FALL 2024",
    courses_descs: [
      {
        course: "CS 188", 
        desc: "Introduction to Artificial Intelligence",
      },
      {
        course: "CS 61C", 
        desc: "Great Ideas of Computer Architecture (Machine Structures)",
      },
      {
        course: "CS 168", 
        desc: "Internet Architecture and Protocols",
      },
      {
        course: "CS 198",
        desc: "Directed Group Studies for Advanced Undergraduates",
      },
      {
        course: "CYPLAN 98",
        desc: "Public Transit Systems",
      },
    ],
  },
  {
    year: "SPRING 2024",
    courses_descs: [
      {
        course:"CS 70",
        desc: "Discrete Mathematics and Probability Theory",
      },
      {
        course:"DATA 100",
        desc: "Principles & Techniques of Data Science",
      },
      {
        course:"COGSCI 131",
        desc: "Computational Models of Cognition/Neural Networks",
      },
      {
        course:"CHINESE 1B",
        desc: "Elementary Chinese",
      },
    ],
  },
  {
    year: "FALL 2023",
    courses_descs: [
      {
        course:"CS 61B",
        desc: "Data Structures and Algorithms",
      },
      {
        course:"MATH 54",
        desc: "Linear Algebra and Differential Equations",
      },
      {
        course:"ECON 162",
        desc: "The Chinese Economy",
      },
      {
        course:"CHINESE 1A",
        desc: "Elementary Chinese",
      },
    ],
  },
  {
    year: "SPRING 2023",
    courses_descs: [
      {
        course:"CS 61A",
        desc: "The Structure and Interpretation of Computer Programs",
      },
      {
        course:"PHILOS 25B",
        desc: "Modern Philosophy",
      },
      {
        course:"FILM R1A",
        desc: "The Craft of Writing - Film Focus",
      },
      {
        course:"PLANTBI 40",
        desc: "The (Secret) Life of Plants",
      },
      {
        course:"MUSIC 26AC",
        desc: "Music in American Culture",
      },
    ],
  },
  {
    year: "FALL 2022",
    courses_descs: [
      {
        course:"DATA C8",
        desc: "Foundations of Data Science",},
      {
        course:"MATH 1B",
        desc: "Calculus (Integration, Sequences, Series, ODE)",},
      {
        course:"HISTORY 100S",
        desc: "Science, Technology and Medicine in Modern East Asia",},
      {
        course:"EPS 82",
        desc: "Oceans",},
    ],
  },
];
