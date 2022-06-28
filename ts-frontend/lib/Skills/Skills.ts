import { SkillItem } from "./Types";


export const skill1: SkillItem = {
  name: "Figma",
  importance: 1,
  experience: 2,
  skill: 2,
  preference: 1,
  broadCategory: "Front End / UI",
  narrowCategory: "Graphic Design",
  conceptualCategory: "Software",
  hasParent: false,
  parentOrBestConnectionPoint: "CSS",
} as const;
export const skill2: SkillItem = {
  name: "CSS",
  importance: 7,
  skill: 6,
  experience: 6,
  preference: 7,
  broadCategory: "Front End / UI",
  conceptualCategory: "Language",
  hasParent: false,
  parentOrBestConnectionPoint: "html 5",
} as const;
export const skill3: SkillItem = {
  name: "sass",
  importance: 8,
  broadCategory: "Front End / UI",
  narrowCategory: "CSS",
  conceptualCategory: "Library",
  skill: 6,
  experience: 5,
  preference: 7,
  hasParent: true,
  parentOrBestConnectionPoint: "CSS",
} as const;
export const skill4: SkillItem = {
  name: "Tailwind CSS",
  importance: 2,
  broadCategory: "Front End / UI",
  narrowCategory: "CSS",
  conceptualCategory: "Library",
  skill: 7,
  experience: 5,
  preference: 5,
  parentOrBestConnectionPoint: "CSS",
  hasParent: true,
} as const;
export const skill5: SkillItem = {
  name: "framer-motion",
  importance: 1,
  broadCategory: "Front End / UI",
  narrowCategory: "CSS",
  conceptualCategory: "Library",
  skill: 3,
  experience: 2,
  preference: 3,
  parentOrBestConnectionPoint: "Javascript",
  hasParent: true,
} as const;
export const skill6: SkillItem = {
  name: "styled-components",
  importance: 4,
  broadCategory: "Front End / UI",
  narrowCategory: "React",
  conceptualCategory: "Library",
  skill: 9,
  experience: 8,
  preference: 8,
  parentOrBestConnectionPoint: "React",
  hasParent: true,
} as const;
export const skill7: SkillItem = {
  name: "html 5",
  importance: 4,
  broadCategory: "Front End / UI",
  conceptualCategory: "Language",
  skill: 7,
  experience: 7,
  preference: 3,
  hasParent: false,
  parentOrBestConnectionPoint: "Javascript",
} as const;
export const skill8: SkillItem = {
  name: "Web Components",
  importance: 2,
  broadCategory: "Front End / UI",
  narrowCategory: "DOM",
  conceptualCategory: "Library",
  skill: 3,
  experience: 3,
  preference: 2,
  parentOrBestConnectionPoint: "html 5",
  hasParent: true,
} as const;
export const skill9: SkillItem = {
  name: "Typescript",
  importance: 10,
  broadCategory: "Back or Frontend",
  conceptualCategory: "Language",
  skill: 8.5,
  experience: 8,
  preference: 10,
  hasParent: false,
  parentOrBestConnectionPoint: "Javascript",
} as const;
export const skill10: SkillItem = {
  name: "Javascript",
  importance: 7,
  broadCategory: "Front End / UI",
  conceptualCategory: "Language",
  skill: 8,
  experience: 8,
  preference: 7,
  hasParent: false,
  parentOrBestConnectionPoint: "C#",
} as const;
export const skill11: SkillItem = {
  name: "React",
  importance: 10,
  broadCategory: "Front End / UI",
  conceptualCategory: "Framework",
  skill: 9,
  experience: 9,
  preference: 9,
  hasParent: false,
  parentOrBestConnectionPoint: "Javascript",
} as const;
export const skill12: SkillItem = {
  name: "Node.js",
  importance: 7,
  broadCategory: "Back End",
  conceptualCategory: "Software",
  skill: 7,
  experience: 6,
  preference: 9,
  parentOrBestConnectionPoint: "Javascript",
  hasParent: true,
} as const;
export const skill13: SkillItem = {
  name: "express.js",
  importance: 5,
  broadCategory: "Back End",
  conceptualCategory: "Framework",
  skill: 5,
  experience: 5,
  preference: 8,
  parentOrBestConnectionPoint: "Node.js",
  hasParent: true,
} as const;
export const skill14: SkillItem = {
  name: "functional components",
  importance: 3,
  narrowCategory: "React",
  broadCategory: "Front End / UI",
  conceptualCategory: "Code Strategy",
  skill: 10,
  experience: 10,
  preference: 8,
  parentOrBestConnectionPoint: "React",
  hasParent: true,
} as const;
export const skill15: SkillItem = {
  name: "Redux",
  importance: 6,
  narrowCategory: "React",
  broadCategory: "Back or Frontend",
  conceptualCategory: "Library",
  skill: 7,
  experience: 7,
  preference: 7,
  parentOrBestConnectionPoint: "React",
  hasParent: true,
} as const;
export const skill16: SkillItem = {
  name: "state machines",
  importance: 6,
  broadCategory: "Back or Frontend",
  conceptualCategory: "Code Strategy",
  skill: 6,
  experience: 6,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "Typescript",
} as const;
export const skill17: SkillItem = {
  name: "kingly",
  importance: 4,
  narrowCategory: "State Machines",
  broadCategory: "Back or Frontend",
  conceptualCategory: "Library",
  skill: 6,
  experience: 5,
  preference: 7,
  parentOrBestConnectionPoint: "state machines",
  hasParent: true,
} as const;
export const skill18: SkillItem = {
  name: "xstate",
  importance: 5,
  narrowCategory: "State Machines",
  broadCategory: "Back or Frontend",
  conceptualCategory: "Library",
  skill: 6,
  experience: 5,
  preference: 7,
  parentOrBestConnectionPoint: "state machines",
  hasParent: true,
} as const;
export const skill19: SkillItem = {
  name: "apollo",
  importance: 1,
  narrowCategory: "React",
  broadCategory: "Back or Frontend",
  conceptualCategory: "Library",
  skill: 4,
  experience: 3,
  preference: 5,
  parentOrBestConnectionPoint: "GraphQL APIs",
  hasParent: true,
} as const;
export const skill20: SkillItem = {
  name: "html2canvas",
  importance: 2,
  narrowCategory: "DOM",
  broadCategory: "Front End / UI",
  conceptualCategory: "Library",
  skill: 4,
  experience: 3,
  preference: 4,
  parentOrBestConnectionPoint: "Javascript",
  hasParent: true,
} as const;
export const skill21: SkillItem = {
  name: "lazy loading",
  importance: 2,
  narrowCategory: "React",
  broadCategory: "Front End / UI",
  conceptualCategory: "Code Strategy",
  skill: 7,
  experience: 6,
  preference: 7,
  parentOrBestConnectionPoint: "React",
  hasParent: true,
} as const;
export const skill22: SkillItem = {
  name: "react-router",
  importance: 3,
  narrowCategory: "React",
  broadCategory: "Front End / UI",
  conceptualCategory: "Library",
  skill: 7,
  experience: 7,
  preference: 7,
  parentOrBestConnectionPoint: "React",
  hasParent: true,
} as const;
export const skill23: SkillItem = {
  name: "axios",
  importance: 4,
  broadCategory: "Front End / UI",
  conceptualCategory: "Library",
  skill: 8,
  experience: 8,
  preference: 8,
  parentOrBestConnectionPoint: "Javascript",
  hasParent: true,
} as const;
export const skill24: SkillItem = {
  name: "fetch",
  importance: 4,
  broadCategory: "Front End / UI",
  conceptualCategory: "Library",
  skill: 7,
  experience: 6,
  preference: 6,
  parentOrBestConnectionPoint: "Javascript",
  hasParent: true,
} as const;
export const skill25: SkillItem = {
  name: "material-ui",
  importance: 2,
  broadCategory: "Front End / UI",
  conceptualCategory: "Library",
  skill: 7,
  experience: 6,
  preference: 3,
  hasParent: false,
  parentOrBestConnectionPoint: "CSS",
} as const;
export const skill26: SkillItem = {
  name: "REST APIs",
  importance: 5,
  broadCategory: "Back or Frontend",
  conceptualCategory: "Code Strategy",
  skill: 9,
  experience: 8,
  preference: 7,
  hasParent: false,
  parentOrBestConnectionPoint: "GraphQL APIs",
} as const;
export const skill27: SkillItem = {
  name: "GraphQL APIs",
  importance: 3,
  broadCategory: "Back or Frontend",
  conceptualCategory: "Code Strategy",
  skill: 5,
  experience: 4,
  preference: 6,
  hasParent: false,
  parentOrBestConnectionPoint: "REST APIs",
} as const;
export const skill28: SkillItem = {
  name: ".NET Console Applications",
  importance: 4,
  broadCategory: "Back End",
  conceptualCategory: "Framework",
  skill: 7,
  experience: 2,
  preference: 7,
  hasParent: false,
  parentOrBestConnectionPoint: "C#",
} as const;
export const skill29: SkillItem = {
  name: "C#",
  importance: 10,
  conceptualCategory: "Language",
  broadCategory: "Back End",
  skill: 8.5,
  experience: 8,
  preference: 9,
  hasParent: false,
  parentOrBestConnectionPoint: "ASP.NET Core",
} as const;
export const skill30: SkillItem = {
  name: "ASP.NET Core",
  importance: 7,
  conceptualCategory: "Framework",
  broadCategory: "Back or Frontend",
  skill: 7,
  experience: 8,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "C#",
} as const;
export const skill31: SkillItem = {
  name: "Linq",
  importance: 3,
  broadCategory: "Back End",
  conceptualCategory: "Library",
  skill: 8,
  experience: 8,
  preference: 7,
  parentOrBestConnectionPoint: "C#",
  hasParent: true,
} as const;
export const skill32: SkillItem = {
  name: "Entity Framework",
  importance: 6,
  broadCategory: "Back End",
  conceptualCategory: "Library",
  skill: 9,
  experience: 8,
  preference: 8,
  parentOrBestConnectionPoint: "C#",
  hasParent: true,
} as const;
export const skill33: SkillItem = {
  name: "Laravel",
  importance: 7,
  broadCategory: "Back End",
  conceptualCategory: "Framework",
  skill: 9,
  experience: 7,
  preference: 7,
  parentOrBestConnectionPoint: "PHP",
  hasParent: true,
} as const;
export const skill34: SkillItem = {
  name: "PHP",
  importance: 6,
  broadCategory: "Back End",
  conceptualCategory: "Language",
  skill: 6,
  experience: 6,
  preference: 4,
  hasParent: false,
  parentOrBestConnectionPoint: "Laravel",
} as const;
export const skill35: SkillItem = {
  name: "C++",
  importance: 7,
  conceptualCategory: "Language",
  broadCategory: "Back End",
  skill: 4,
  experience: 3,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "CMake",
} as const;
export const skill36: SkillItem = {
  name: "CMake",
  importance: 3,
  conceptualCategory: "Software",
  broadCategory: "Back End",
  skill: 3,
  experience: 3,
  preference: 6,
  parentOrBestConnectionPoint: "C++",
  hasParent: true,
} as const;
export const skill37: SkillItem = {
  name: "MVC Architecture",
  importance: 6,
  conceptualCategory: "Code Strategy",
  broadCategory: "Back End",
  skill: 8,
  experience: 8,
  preference: 8,
  parentOrBestConnectionPoint: "ASP.NET Core",
  hasParent: false,
} as const;
export const skill38: SkillItem = {
  name: "Async Programming",
  importance: 6,
  conceptualCategory: "Code Strategy",
  broadCategory: "Back or Frontend",
  skill: 7,
  experience: 7,
  preference: 7,
  parentOrBestConnectionPoint: "Javascript",
  hasParent: false,
} as const;
export const skill39: SkillItem = {
  name: "Multi-Threading",
  importance: 6,
  conceptualCategory: "Code Strategy",
  broadCategory: "Back or Frontend",
  skill: 4,
  experience: 4,
  preference: 7,
  hasParent: false,
  parentOrBestConnectionPoint: "Python",
} as const;
export const skill40: SkillItem = {
  name: "MySQL",
  importance: 8,
  conceptualCategory: "Language",
  broadCategory: "Database",
  skill: 6,
  experience: 7,
  preference: 7,
  hasParent: false,
  parentOrBestConnectionPoint: "SQLite",
} as const;
export const skill41: SkillItem = {
  name: "SQLite",
  importance: 7,
  conceptualCategory: "Language",
  broadCategory: "Database",
  skill: 6,
  experience: 6,
  preference: 7,
  hasParent: false,
  parentOrBestConnectionPoint: "MySQL",
} as const;
export const skill42: SkillItem = {
  name: "Python",
  importance: 8,
  conceptualCategory: "Language",
  broadCategory: "Back End",
  skill: 8,
  experience: 8,
  preference: 4,
  parentOrBestConnectionPoint: "Flask",
  hasParent: false,
} as const;
export const skill43: SkillItem = {
  name: "PyTorch C++ API",
  importance: 7,
  broadCategory: "Machine Learning",
  conceptualCategory: "Library",
  skill: 9,
  experience: 6,
  preference: 10,
  hasParent: false,
  parentOrBestConnectionPoint: "C++",
} as const;
export const skill44: SkillItem = {
  name: "PyTorch",
  importance: 7,
  broadCategory: "Machine Learning",
  conceptualCategory: "Library",
  skill: 7,
  experience: 7,
  preference: 7,
  parentOrBestConnectionPoint: "Python",
  hasParent: true,
} as const;
export const skill45: SkillItem = {
  name: "SkLearn",
  importance: 7,
  broadCategory: "Machine Learning",
  conceptualCategory: "Library",
  skill: 8,
  experience: 9,
  preference: 6,
  parentOrBestConnectionPoint: "Python",
  hasParent: true,
} as const;
export const skill46: SkillItem = {
  name: "Flask",
  importance: 6,
  broadCategory: "Back End",
  conceptualCategory: "Framework",
  skill: 8,
  experience: 6,
  preference: 3,
  parentOrBestConnectionPoint: "Python",
  hasParent: true,
} as const;
export const skill47: SkillItem = {
  name: "Shopify APIs",
  importance: 3,
  broadCategory: "Back or Frontend",
  conceptualCategory: "Software",
  skill: 7,
  experience: 6,
  preference: 1,
  hasParent: false,
  parentOrBestConnectionPoint: "Javascript",
} as const;
export const skill48: SkillItem = {
  name: "NGINX",
  importance: 7,
  broadCategory: "Back End",
  conceptualCategory: "Software",
  skill: 7,
  experience: 8,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "Apache",
} as const;
export const skill49: SkillItem = {
  name: "Apache",
  importance: 6,
  broadCategory: "Back End",
  conceptualCategory: "Software",
  skill: 6,
  experience: 6,
  preference: 6,
  hasParent: false,
  parentOrBestConnectionPoint: "Bash",
} as const;
export const skill50: SkillItem = {
  name: "Bash",
  importance: 7,
  broadCategory: "Other",
  conceptualCategory: "Language",
  skill: 7,
  experience: 7,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "Linux",
} as const;
export const skill51: SkillItem = {
  name: "Linux",
  importance: 3,
  broadCategory: "Hardware",
  conceptualCategory: "Software",
  skill: 7,
  experience: 7,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "AWS",
} as const;
export const skill52: SkillItem = {
  name: "Git",
  importance: 7,
  broadCategory: "Other",
  conceptualCategory: "Code Strategy",
  skill: 8,
  experience: 9,
  preference: 10,
  hasParent: false,
  parentOrBestConnectionPoint: "AWS",
} as const;
export const skill53: SkillItem = {
  name: "Docker",
  importance: 7,
  broadCategory: "Hardware",
  conceptualCategory: "Other",
  skill: 5,
  experience: 4,
  preference: 9,
  parentOrBestConnectionPoint: "Linux",
  hasParent: false,
} as const;
export const skill54: SkillItem = {
  name: "HTTP Protocol",
  importance: 6,
  broadCategory: "Other",
  conceptualCategory: "Other",
  skill: 7,
  experience: 7,
  preference: 5,
  parentOrBestConnectionPoint: "html 5",
  hasParent: false,
} as const;
export const skill55: SkillItem = {
  name: "SSL",
  importance: 6,
  broadCategory: "Other",
  conceptualCategory: "Software",
  skill: 6,
  experience: 5,
  preference: 2,
  parentOrBestConnectionPoint: "HTTP Protocol",
  hasParent: false,
} as const;
export const skill56: SkillItem = {
  name: "AWS",
  importance: 8,
  broadCategory: "Hardware",
  conceptualCategory: "Hardware",
  skill: 7,
  experience: 8,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "Linux",
} as const;
export const skill57: SkillItem = {
  name: "Java",
  importance: 3,
  broadCategory: "Back End",
  conceptualCategory: "Language",
  skill: 5,
  experience: 3,
  preference: 8,
  hasParent: false,
  parentOrBestConnectionPoint: "C#",
} as const;
export const skill58: SkillItem = {
  name: "Visual Basic",
  importance: 2,
  broadCategory: "Back End",
  conceptualCategory: "Language",
  skill: 4,
  experience: 2,
  preference: 1,
  hasParent: false,
  parentOrBestConnectionPoint: "C#",
} as const;
export const skill59: SkillItem = {
  name: "Excel Macro Programming",
  importance: 1,
  broadCategory: "Other",
  conceptualCategory: "Other",
  skill: 5,
  experience: 3,
  preference: 3,
  hasParent: true,
  parentOrBestConnectionPoint: "Visual Basic",
} as const;
export const skill60: SkillItem = {
  name: "pandas",
  importance: 3,
  broadCategory: "Machine Learning",
  conceptualCategory: "Library",
  skill: 8,
  experience: 8,
  preference: 8,
  hasParent: true,
  parentOrBestConnectionPoint: "Python",
} as const;
export const skill61: SkillItem = {
  name: "dlib",
  importance: 1,
  broadCategory: "Machine Learning",
  conceptualCategory: "Library",
  skill: 3,
  experience: 2,
  preference: 8,
  hasParent: true,
  parentOrBestConnectionPoint: "C++",
} as const;
export const skill62: SkillItem = {
  name: "optuna",
  importance: 6,
  broadCategory: "Machine Learning",
  conceptualCategory: "Library",
  skill: 9,
  experience: 9,
  preference: 7,
  hasParent: true,
  parentOrBestConnectionPoint: "Python",
} as const;



// function getStringOrUnd(): string | undefined{
//   return undefined;
// }
// let testVar : string | undefined = getStringOrUnd();

// function testFunc(st: string){
//   // do something with a string
// }

// assertIsString(testVar);
// testFunc(testVar);

// function assertIsString(s: any): asserts s is string {
//   if (!(typeof s === "string")){
//     throw new Error("assertIsString failed, is not a string: "+s);
//   }
// }
