import { faFile , faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons'
export const heroCardData = [
  {
    id: 1,
    icon: faFile,
    title: "100+ Free Components & Examples",
    description:
      "Hundreds of component examples for all your website needs that meet accessibility criteria.",
  },
  {
    id: 2,
    icon: faReact, 
    title: "Pure ReactJS Code - No Extra Libraries",
    description:
      "All components are built using pure ReactJS, without any external libraries, ensuring clean and easy-to-maintain code.",
  },
  {
    id: 3,
    icon: faPenToSquare, 
    title: "Future Customization Options",
    description:
      "In the future, EasyUI will allow you to fully customize components, giving you the flexibility to tailor designs to your needs.",
  },
];


export const testimonialsData = [
  {
    id:1,
    name: "Pratham Seth",
    image: "/images/Pratham.jpg",
    description:
      "PraI don't know how to thank  file, It should be paid product ally.",
  },
  {
    id:2,
    name: "Vishal Tiwari",
    image: "/images/Vishal.png",
    description:
      "VishI don't know how to thank for such ld be paid product actually.",
  },
  {
    id:3,
    name: "CJ",
    image: "/images/Cj.jpg",
    description:
      "CI don't know how to thank for such a good file, It should be paid product actually .",
  },
  {
    id:4,
    name: "Prerit",
    image: "/images/Vishal.png",
    description:
      "CI don't know how to thank for such a good file, It should be paid product actually .",
  },
  {
    id:5,
    name: "Pranav",
    image: "/images/Cj.jpg",
    description:
      "CI don't know how to thank for such a good file, It should be paid product actually .",
  },
  
];

export const wordArray =["Developers", "Coders", "Engineers"];

export const footerLinks = [
  {
    title: "Components",
    links: [
      { name: "Components", href: "/accordion" },
      { name: "Documentation", href: "/accordion" },
      { name: "Portfolio", href: "/accordion" },
      { name: "Accordion", href: "/accordion" },
      { name: "Alert", href: "/alert" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "Linkedin", href: "https://www.linkedin.com/in/lucifertyagi/" },
      { name: "Github", href: "https://github.com/LuciferTyagi" },
      { name: "Foody", href: "https://foody-734ba.web.app/" },
    ],
  },
  {
    title: "EasyUI",
    links: [
      { name: "EasyUI", href: "/" },
    ],
  },
];
export const sidebarItems = [
  {
    title: "Follow For More Updates",
    links: [
      { name: "Linkedin @YagyanshTyagi", url: "https://www.linkedin.com/in/lucifertyagi/" },
    ],
  },
  {
    title: "Getting Started",
    links: [
      { name: "Installation", url: "/" },
      { name: "Introduction", url: "/" },
    ],
  },
];

export const faqData = [
  {
    id: 1,
    question: "What is Easy UI?",
    answer: "Easy UI is a platform that provides pre-built, customizable ReactJS components, helping developers speed up their development process with high-quality UI elements.",
  },
  {
    id: 2,
    question: "How can I customize the components in Easy UI?",
    answer: "Easy UI allows customization through Tailwind CSS classes. You can modify the styling directly within the provided code or use our upcoming customization tool for a more intuitive experience.",
  },
  {
    id: 3,
    question: "Is Easy UI free to use?",
    answer: "Yes, Easy UI offers a collection of free components. However, we plan to introduce premium components with advanced features in the future.",
  },
  {
    id: 4,
    question: "Do I need to install any dependencies to use Easy UI components?",
    answer: "Most Easy UI components are built using pure ReactJS and Tailwind CSS. Some advanced components may require additional libraries, which will be mentioned in the documentation.",
  }
];

export const stepData =["React App","Tailwind CSS","Motion"];
export const installationSteps = [
  {
    id: 1,
    title: "Create a React App",
    description: "Run the init command to create a new Next.js project or to setup an existing one",
    commands: [
      "npm create vite@latest my-easyui-app --template react",
      "cd my-easyui-app",
      "npm install",
    ],
  },
  {
    id: 2,
    title: "Install Tailwind CSS",
    description: "After setting up the project, install Tailwind CSS",
    commands: [
      "npm install -D tailwindcss postcss autoprefixer",
      "npx tailwindcss init -p",
    ],
  },
  {
    id: 3,
    title: "Install Motion",
    description: "Motion is used for animations in React:",
    commands: ["npm install framer-motion"],
  },
];

