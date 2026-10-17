// ========= EDIT ONLY THIS FILE TO CHANGE YOUR TEXT, COURSES AND LINKS =========
export const profile = {
  name: "Mohammed Naeem",
  tagline: "cs student · after dark · open 24 hours",
  about: [
    "I am a Computer Science student at East West University, Dhaka, focused on machine learning, AI, and cybersecurity.",
    "Alongside my degree, I build applied projects and carry out independent research, from diffusion-based image generation to machine learning models for password security."
  ],
  email: "mohammed.naeem.og@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/mohammednaeemog-sys" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-naeem-bb5589400/" }
  ],
  footnote: "Open to research collaboration and project work in machine learning and cybersecurity."
};

export const education = [
  { school: "East West University, Dhaka", degree: "B.Sc. in Computer Science and Engineering", period: "2023 - present", note: "Focus: machine learning, AI and cybersecurity." }
];

export const technicalFocus = [
  { title: "Machine Learning", items: ["Deep learning with CNNs", "Ensemble methods", "Model evaluation"] },
  { title: "Generative AI", items: ["Stable Diffusion and ControlNet", "LoRA adapters", "Retrieval-augmented generation"] },
  { title: "Cybersecurity", items: ["Penetration testing", "Kali Linux and Metasploit", "Security-focused machine learning"] }
];

export const technologies = ["Python", "PyTorch", "Jupyter", "Gradio", "Kali Linux", "Git"];

export const projects = [
  {
    title: "AI Art Studio",
    description: "Local-first image stylization app with 18 selectable styles. Combines Stable Diffusion, Canny ControlNet, LoRA adapters and fast neural style models behind a Gradio interface, with no paid API required.",
    tags: ["Python", "PyTorch", "Diffusers", "Gradio"],
    url: "https://github.com/mohammednaeemog-sys/AI-Art-Style-Transfer"
  },
  {
    title: "Password Strength Classification",
    description: "Classifies password strength from structural features using a stacking ensemble learning approach.",
    tags: ["Python", "Machine Learning"],
    url: "https://github.com/mohammednaeemog-sys/Password-Strength-Classification-Using-Structural-Features"
  },
  {
    title: "CNN Image Classification",
    description: "Image classifier built with a convolutional neural network.",
    tags: ["Deep Learning", "Jupyter"],
    url: "https://github.com/mohammednaeemog-sys/-Image-Classification-Using-Convolutional-Neural-Network"
  },
  {
    title: "Penetration Testing Simulation",
    description: "Simulated penetration test and remote access scenario in a controlled lab environment.",
    tags: ["Kali Linux", "Metasploit"],
    url: "https://github.com/mohammednaeemog-sys/Penetration-Testing-and-Remote-Access-Simulation-Using-Kali-Linux-and-Metasploit-Framework"
  }
];

export const collab = {
  title: "EWU Bulletin RAG Chatbot",
  url: "https://github.com/mohammednaeemog-sys/rag-project-bluebook",
  note: "Citation-grounded question-answering system over the university bulletin, forked from a project by mishkat2025."
};

export const interests = ["Machine learning", "Generative AI", "Cybersecurity", "Diffusion models", "Password security", "RAG systems"];

// ===== COURSES =====
// 1) Paste your main Google Drive folder link below (Share -> Anyone with the link -> Viewer).
export const DRIVE_ALL = "https://drive.google.com/drive/folders/1HygDYr1OdQlUeCQ_hrfPdK8oyLMoWcCE?usp=drive_link";
// 2) Optional: give a course its own folder. Example: { CSE207: "https://drive.google.com/..." }
const FOLDERS = {};
// [code, title, term, topic]
const LIST = [
  ["CSE103", "Structured Programming", "2023 Fall", "Programming"],
  ["ENG101", "Basic English", "2023 Fall", "Humanities"],
  ["MAT101", "Differential and Integral Calculus", "2023 Fall", "Mathematics"],
  ["CHE109", "Engineering Chemistry-I", "2024 Spring", "Science"],
  ["CSE106", "Discrete Mathematics", "2024 Spring", "Mathematics"],
  ["MAT102", "Differential Equations and Special Functions", "2024 Spring", "Mathematics"],
  ["PHY109", "Engineering Physics-I", "2024 Spring", "Science"],
  ["CSE110", "Object Oriented Programming", "2024 Summer", "Programming"],
  ["MAT104", "Co-ordinate Geometry and Vector Analysis", "2024 Summer", "Mathematics"],
  ["CSE200", "Computer-Aided Engineering Drawing", "2024 Fall", "Engineering"],
  ["CSE207", "Data Structures", "2024 Fall", "Core CS"],
  ["ECO101", "Principles of Microeconomics", "2024 Fall", "Business"],
  ["ENG102", "Composition and Communication Skills", "2024 Fall", "Humanities"],
  ["STA102", "Statistics and Probability", "2024 Fall", "Mathematics"],
  ["CSE209", "Electrical Circuits", "2025 Spring", "Electronics"],
  ["MAT205", "Linear Algebra and Complex Variables", "2025 Spring", "Mathematics"],
  ["PHY209", "Engineering Physics-II", "2025 Spring", "Science"],
  ["CSE246", "Algorithms", "2025 Summer", "Core CS"],
  ["CSE251", "Electronic Circuits", "2025 Summer", "Electronics"],
  ["GEN7226", "Emergence of Bangladesh", "2025 Summer", "Humanities"],
  ["CSE302", "Database Systems", "2025 Fall", "Core CS"],
  ["CSE345", "Digital Logic Design", "2025 Fall", "Electronics"],
  ["CSE347", "Information System Analysis and Design", "2025 Fall", "Core CS"],
  ["CSE303", "Statistics for Data Science", "2026 Spring", "AI and data"],
  ["CSE325", "Operating Systems", "2026 Spring", "Core CS"],
  ["CSE405", "Computer Networks", "2026 Spring", "Networks and security"],
  ["GEN7203", "Ecological System and Environment", "2026 Spring", "Science"],
  ["CSE366", "Artificial Intelligence", "2026 Summer", "AI and data"],
  ["CSE400A", "Capstone Project (Part 1 of 3)", "2026 Summer", "Capstone"],
  ["CSE487", "Computer and Cyber Security", "2026 Summer", "Networks and security"],
  ["FIN101", "Principles of Finance", "2026 Summer", "Business"]
];

export const courses = LIST.map(([code, title, term, topic]) => ({
  title: code + " " + title,
  provider: "East West University",
  year: term,
  tags: [topic],
  summary: "",
  certificate: "",
  materials: [{ label: "Course books and materials", type: "drive", url: FOLDERS[code] || DRIVE_ALL }]
})).reverse();
