// ========= EDIT ONLY THIS FILE TO MAKE THE SITE YOURS =========
export const profile = {
  name: "Mohammed Naeem",
  role: "Student & aspiring developer",
  tagline: "I learn by building. Every course I finish is listed below with its materials.",
  about: [
    "Write 2-3 sentences about yourself here: who you are, what you study, and what you want to do next.",
    "Add what motivates you or what you are currently learning."
  ],
  email: "you@example.com",
  links: [
    { label: "GitHub", url: "https://https://github.com/mohammednaeemog-sys" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-naeem-bb5589400/" }
  ]
};

export const education = [
  { University: "East West University", degree: "BSC in Computer Science", period: "2023 - 2027" }
];

export const skills = {
  Languages: ["JavaScript", "Python", "SQL"],
  Frameworks: ["React", "Node.js"],
  Tools: ["Git", "Linux", "Figma"]
};

export const projects = [
  { title: "Project one", description: "One sentence on what it does and what you learned.", tags: ["React", "API"], url: "https://github.com/your-username/project-one" },
  { title: "Project two", description: "Another short description.", tags: ["Python"], url: "https://github.com/your-username/project-two" }
];

export const interests = ["Web development", "Machine learning", "Cybersecurity", "Open source"];

// type "repo": file inside public/materials/  -> url is the path after "materials/"
// type "drive": full Google Drive share link  -> url is the https link
export const courses = [
  {
    title: "Sample Course: Intro to Web Development",
    provider: "Coursera",
    year: 2025,
    tags: ["Web", "HTML/CSS", "JavaScript"],
    summary: "Replace this with what you learned in the course.",
    certificate: "",
    materials: [
      { label: "Lecture notes", type: "repo", url: "sample-course/notes.txt" },
      { label: "All videos and slides", type: "drive", url: "https://drive.google.com/drive/folders/REPLACE_ME" }
    ]
  }
];
