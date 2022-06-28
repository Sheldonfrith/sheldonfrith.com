const broadCategories = [
  "Front End / UI",
  "Back End",
  "Machine Learning",
  "Back or Frontend",
  "Hardware",
  "Database",
  "Other",
] as const;

const conceptualCategories = [
  "Language",
  "Framework",
  "Library",
  "Hardware",
  "Software",
  "Code Strategy",
  "Other",
] as const;

export type ConceptualCategories = typeof conceptualCategories[any];

export type BroadCategories = typeof broadCategories[any];
const narrowCategories = [
  "Graphic Design",
  "React",
  "CSS",
  "DOM",
  "State Machines",
  "Machine Learning",
] as const;
export type NarrowCategories = typeof narrowCategories[any];

export interface SkillItem {
  broadCategory: BroadCategories;
  narrowCategory?: NarrowCategories | undefined;
  conceptualCategory: ConceptualCategories;
  name: SkillNames; //needs a type
  experience: number;
  skill: number;
  preference: number;
  importance: number;
  hasParent: boolean;
  parentOrBestConnectionPoint: SkillNames; // needs a type
}
export type SkillNames = typeof skillNames[any];
const skillNames = [
  "Figma",
  "CSS",
  "sass",
  "Tailwind CSS",
  "framer-motion",
  "styled-components",
  "html 5",
  "Web Components",
  "Typescript",
  "Javascript",
  "React",
  "Node.js",
  "express.js",
  "functional components",
  "Redux",
  "state machines",
  "kingly",
  "xstate",
  "apollo",
  "html2canvas",
  "lazy loading",
  "react-router",
  "axios",
  "fetch",
  "material-ui",
  "REST APIs",
  "GraphQL APIs",
  ".NET Console Applications",
  "C#",
  "ASP.NET Core",
  "Linq",
  "Entity Framework",
  "Laravel",
  "PHP",
  "C++",
  "CMake",
  "MVC Architecture",
  "Async Programming",
  "Multi-Threading",
  "MySQL",
  "SQLite",
  "Python",
  "PyTorch C++ API",
  "PyTorch",
  "SkLearn",
  "Flask",
  "Shopify APIs",
  "NGINX",
  "Apache",
  "Bash",
  "Linux",
  "Git",
  "Docker",
  "HTTP Protocol",
  "SSL",
  "AWS",
  "Java",
  "Visual Basic",
  "Excel Macro Programming",
  "pandas",
  "dlib",
  "optuna",
] as const;
