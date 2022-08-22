
const broadCategories = [
    'Front End / UI',
    'Back End',
    'Machine Learning',
    "Back or Frontend",
    'Hardware',
    'Database',
    "Other"
] as const;

const conceptualCategories = [
    "Language",
    "Framework",
    "Library",
    "Hardware",
    "Software",
    "Code Strategy",
    "Other"
] as const;

export type ConceptualCategories = typeof conceptualCategories[any];

export type BroadCategories = typeof broadCategories[any];
const narrowCategories = [
    'Graphic Design',
    "React",
    "CSS",
    "DOM",
    "State Machines",
    "Machine Learning"
] as const;
export type NarrowCategories = typeof narrowCategories[any];
export interface SkillItem {
    broadCategory: BroadCategories
    narrowCategory?: NarrowCategories;
    conceptualCategory: ConceptualCategories;
    name: string;
    experience: number;
    skill: number;
    preference: number;
    importance: number;
    parent?: string
}
export const skills: SkillItem[] = [
    {
        name: "Figma",
        importance: 1,
        experience: 2,
        skill: 2,
        preference: 1,
        broadCategory: "Front End / UI",
        narrowCategory: "Graphic Design",
        conceptualCategory: "Software"
    },
    {
        name: "CSS",
        importance: 7,
        skill: 6,
        experience: 6,
        preference: 7,
        broadCategory: "Front End / UI",
        conceptualCategory: "Language"
    },
        {
          "name": "sass",
          "importance": 8,
          broadCategory: "Front End / UI",
          narrowCategory: "CSS",
          conceptualCategory: "Library",
          skill: 6,
          experience: 5,
          preference: 7,
          parent: "CSS"
        },
        {
          "name": "Tailwind CSS",
          "importance": 2,
          broadCategory: "Front End / UI",
          narrowCategory: "CSS",
          conceptualCategory: "Library",
          skill: 7,
          experience: 5,
          preference: 5,
          parent: "CSS"
        },
        {
          "name": "framer-motion",
          "importance": 1,
          broadCategory: "Front End / UI",
          narrowCategory: "CSS",
          conceptualCategory: "Library",
          skill: 3,
          experience: 2,
          preference: 3,
          parent: "Javascript"
        },
        {
          "name": "styled-components",
          "importance": 4,
          broadCategory: "Front End / UI",
          narrowCategory: "React",
          conceptualCategory: "Library",
          skill: 9,
          experience: 8,
          preference: 8,
          parent: "React"
        },
        {
          "name": "html 5",
          "importance": 4,
          broadCategory: "Front End / UI",
            conceptualCategory: "Language",
            skill: 7,
            experience: 7,
            preference: 3
        },
        {
          "name": "Web Components",
          "importance": 2,
          broadCategory: "Front End / UI",
          narrowCategory: "DOM",
          conceptualCategory: "Library",
          skill: 3,
          experience: 3,
          preference: 2,
          parent: "html 5"
        },
        {
          "name": "Typescript",
          "importance": 10,
          broadCategory: "Back or Frontend",
          conceptualCategory: "Language",
          skill: 8.5,
          experience: 8,
          preference: 10
        },
        {
          "name": "Javascript",
          "importance": 7,
          broadCategory: "Back or Frontend",
          conceptualCategory: "Language",
          skill: 8,
          experience: 8,
          preference: 7
        },
        {
          "name": "React",
          "importance": 10,
          broadCategory: "Front End / UI",
          conceptualCategory: "Framework",
          skill: 9,
          experience: 9,
          preference: 9
        },
        {
            name: 'Node.js',
            importance: 7,
            broadCategory: "Back End",
            conceptualCategory: "Software",
            skill: 7,
            experience:6,
            preference: 9,
            parent: "Javascript"
        },
        {
            name: "express.js",
            importance: 5,
            broadCategory: "Back End",
            conceptualCategory: "Framework",
            skill: 5,
            experience: 5,
            preference: 8,
            parent: "Node.js"
        },
        {
          "name": "functional components",
          "importance": 3,
          narrowCategory: "React",
          broadCategory: "Front End / UI",
          conceptualCategory: "Code Strategy",
          skill: 10,
          experience: 10,
          preference: 8,
          parent: "React"
        },
        {
          "name": "Redux",
          "importance": 6,
          narrowCategory: "React",
            broadCategory: "Back or Frontend",
            conceptualCategory: "Library",
            skill: 7,
            experience: 7,
            preference: 7,
            parent: "React"
        },
        {
          "name": "state machines",
          "importance": 6,
          broadCategory: "Back or Frontend",
          conceptualCategory: "Code Strategy",
          skill: 6,
          experience: 6,
          preference: 8
        },
        {
          "name": "kingly",
          "importance": 4,
          narrowCategory: "State Machines",
          broadCategory: "Back or Frontend",
          conceptualCategory: "Library",
          skill: 6,
          experience: 5,
          preference: 7,
          parent: "state machines"
        },
        {
          "name": "xstate",
          "importance": 5,
          narrowCategory: "State Machines",
          broadCategory: "Back or Frontend",
          conceptualCategory: "Library",
          skill: 6,
          experience: 5,
          preference: 7,
          parent: "state machines"
        },
        {
          "name": "apollo",
          "importance": 1,
          narrowCategory: "React",
          broadCategory: "Back or Frontend",
          conceptualCategory: "Library",
          skill: 4,
          experience: 3,
          preference: 5,
          parent: "GraphQL"
        },
        {
          "name": "html2canvas",
          "importance": 2,
          narrowCategory: "DOM",
          broadCategory: "Front End / UI",
          conceptualCategory: "Library",
          skill: 4,
          experience: 3,
          preference: 4,
          parent: "javascript"
        },
        {
          "name": "lazy loading",
          "importance": 2,
          narrowCategory: "React",
          broadCategory: "Front End / UI",
          conceptualCategory: "Code Strategy",
          skill: 7,
          experience: 6,
          preference: 7,
          parent: "React"
        },
        {
          "name": "react-router",
          "importance": 3,
          narrowCategory: "React",
          broadCategory: "Front End / UI",
          conceptualCategory: "Library",
          skill: 7,
          experience: 7,
          preference: 7,
          parent: "React"
        },
        {
          "name": "axios",
          "importance": 4,
          broadCategory: "Front End / UI",
          conceptualCategory: "Library",
          skill: 8,
          experience: 8,
          preference: 8,
          parent: "Javascript"
        },
        {
          "name": "fetch",
          "importance": 4,
          broadCategory: "Front End / UI",
          conceptualCategory: "Library",
          skill: 7,
          experience: 6,
          preference: 6,
          parent: "Javascript"
        },
        {
          "name": "material-ui",
          "importance": 2,
          broadCategory: "Front End / UI",
          conceptualCategory: "Library",
          skill: 7,
          experience: 6,
          preference: 3
        },
        {
          "name": "REST APIs",
          "importance": 5,
          broadCategory: "Back or Frontend",
          conceptualCategory: "Code Strategy",
          skill: 9,
          experience: 8,
          preference: 7
        },
        {
          "name": "GraphQL APIs",
          "importance": 3,
          broadCategory: "Back or Frontend",
          conceptualCategory: "Code Strategy",
          skill: 5,
          experience: 4,
          preference: 6
        },
        {
          "name": ".NET Console Applications",
          "importance": 4,
          broadCategory: "Back End",
          conceptualCategory: "Framework",
          skill: 7,
          experience: 2,
          preference: 7
        },
        {
          "name": "C#",
          "importance": 10,
          conceptualCategory: "Language",
          broadCategory: "Back End",
          skill: 8.5,
          experience: 8,
          preference: 9
        },
        {
          "name": "ASP.NET Core",
          "importance": 7,
          conceptualCategory: "Framework",
          broadCategory: "Back or Frontend",
          skill: 7,
          experience: 8,
          preference: 8
        },
        {
          "name": "Linq",
          "importance": 3,
          broadCategory: "Back End",
          conceptualCategory: "Library",
          skill: 8,
          experience: 8,
          preference: 7,
          parent: "C#"
        },
        {
          "name": "Entity Framework",
          "importance": 6,
          broadCategory: "Back End",
          conceptualCategory: "Library",
          skill: 9,
          experience: 8,
          preference: 8,
          parent: "C#"
        },
        {
            name: "Laravel 8",
            importance: 7,
            broadCategory: "Back End",
            conceptualCategory: "Framework",
            skill: 9,
            experience: 7,
            preference: 7,
            parent: "PHP"
        },
        {
            name: "PHP",
            importance: 6,
            broadCategory: "Back End",
            conceptualCategory: "Language",
            skill: 6,
            experience: 6,
            preference: 4
        },
        {
          "name": "C++",
          "importance": 7,
          conceptualCategory: "Language",
          broadCategory: "Back End",
          skill: 4,
          experience: 3,
          preference: 8
        },
        {
          "name": "CMake",
          "importance": 3,
          conceptualCategory: "Software",
            broadCategory: "Back End",
            skill: 3,
            experience: 3,
            preference: 6,
            parent: "C++"
        },
        {
            name : "MVC Architecture",
            importance: 6,
            conceptualCategory: "Code Strategy",
            broadCategory: "Back End",
            skill: 8,
            experience: 8,
            preference: 8
        },
        {
            name: "Async Programming",
            importance: 6,
            conceptualCategory: "Code Strategy",
            broadCategory: "Back or Frontend",
            skill: 7,
            experience: 7,
            preference: 7
        },
        {
            name: "Multi-Threading",
            importance: 6,
            conceptualCategory: "Code Strategy",
            broadCategory: "Back or Frontend",
            skill: 4,
            experience: 4,
            preference: 7
        },
        {
            name: "MySQL",
            importance: 8,
            conceptualCategory: "Language",
            broadCategory: "Database",
            skill: 6,
            experience: 7,
            preference: 7
        },
        {
            name: 'SQLite',
            importance: 7,
            conceptualCategory: "Language",
            broadCategory: "Database",
            skill: 6,
            experience: 6,
            preference: 7
        },
        {
          name: "Python",
          importance: 8,
          conceptualCategory: "Language",
          broadCategory: "Back End",
          skill: 8,
          experience: 8,
          preference: 4
        },
        {
          name: "PyTorch C++ API",
          importance: 7,
          broadCategory: "Machine Learning",
          conceptualCategory: "Library",
          skill: 9,
          experience: 6,
          preference: 10
        },
        {
          name: "PyTorch",
          importance: 7,
          broadCategory: "Machine Learning",
          conceptualCategory: "Library",
          skill: 7,
          experience: 7,
          preference: 7,
          parent: "Python"
        },
        {
          name: "SkLearn",
          importance: 7,
          broadCategory: "Machine Learning",
          conceptualCategory: "Library",
          skill: 8,
          experience: 9,
          preference: 6,
          parent: "Python"
        },
        {
          name: "Flask",
          importance: 6,
          broadCategory: "Back End",
          conceptualCategory: "Framework",
          skill: 8,
          experience: 6,
          preference: 3,
          parent: "Python"
        },
        {
          name: "Shopify APIs",
          importance: 3,
          broadCategory: "Back or Frontend",
          conceptualCategory: "Software",
          skill: 7,
          experience: 6,
          preference: 1
        },
         {
          name: "NGINX",
          importance: 7,
          broadCategory: "Back End",
          conceptualCategory: "Software",
          skill: 7,
          experience: 8,
          preference: 8
         },
         {
          name: "Apache",
          importance: 6,
          broadCategory: "Back End",
          conceptualCategory: "Software",
          skill: 6,
          experience: 6,
          preference: 6
         },
         {
          name: "Bash",
          importance: 7,
          broadCategory: "Other",
          conceptualCategory: 'Language',
          skill: 7,
          experience: 7,
          preference: 8
         },
         {
          name: "Git",
          importance: 10,
          broadCategory: "Other",
          conceptualCategory: "Code Strategy",
          skill: 8,
          experience: 9,
          preference: 10
         },
         {
          name: "Docker",
          importance: 7,
          broadCategory: "Hardware",
          conceptualCategory: "Other",
          skill: 5,
          experience: 4,
          preference: 9
         },
         {
          name: "HTTP Protocol",
          importance: 6,
          broadCategory: "Other",
          conceptualCategory: "Other",
          skill: 7,
          experience: 7,
          preference: 5
         },
         {
          name: "SSL",
          importance: 6,
          broadCategory:"Other",
          conceptualCategory: "Software",
          skill: 6,
          experience: 5,
          preference: 2
         },
         {
          name: "AWS",
          importance: 8,
          broadCategory: "Hardware",
          conceptualCategory: "Hardware",
          skill: 7,
          experience: 8,
          preference: 8
         },
         {
          name: "Java",
          importance: 3,
          broadCategory: "Back End",
          conceptualCategory: "Language",
          skill: 5,
          experience: 3,
          preference: 8
         },
         {
          name: "Visual Basic",
          importance: 2,
          broadCategory: "Back End",
          conceptualCategory: "Language",
          skill: 4,
          experience: 2,
          preference: 1
         },
         {
          name: "Excel Macro Programming",
          importance: 1,
          broadCategory: "Other",
          conceptualCategory: "Other",
          skill: 5,
          experience: 3,
          preference: 3
         },
         {name: "pandas",
         importance: 3,
         broadCategory: "Machine Learning",
         conceptualCategory: "Library",
         skill: 8,
         experience: 8,
         preference: 8
        },
        {
          name: "dlib",
          importance: 1,
          broadCategory: "Machine Learning",
          conceptualCategory: "Library",
          skill: 3,
          experience: 2,
          preference: 8
        },
        {
          name: "optuna",
          importance: 6,
          broadCategory: "Machine Learning",
          conceptualCategory: "Library",
          skill: 9,
          experience: 9,
          preference: 7

        },
       
]