// Components
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiPhone, CiLocationOn, CiMail } from "react-icons/ci";

// Types
import { IconType } from "react-icons";
export type InformationDataType = {
  title: string,
  icon: IconType,
  content: string,
};

export type EducationDataType = {
  time: string,
  title: string,
  score: string,
  location?: string,
  subInfo?: string[],
};

export type WorkExperienceDataType = {
  time: string,
  company: string,
  position: string,
  description: string[],
};

export type AwardDataType = {
  time: string,
  title: string,
  location: string,
  position: string,
};

export type SkillDataType = {
  type: string,
  skills: string[],
};

export type ProjectDataType = {
  name: string,
  time: string,
  url?: string[],
  company?: string,
  position: string,
  mainTechs: string[],
  description: string,
  numberOfMember: number,
  technologyInUse: string[],
  responsibilitiesAndAchievement: string[],
}

export const INFORMATION_DATA: InformationDataType[] = [
  {
    title: 'Phone',
    icon: CiPhone,
    content: '(+84) 987 803 475',
  },
  {
    title: 'Birth',
    content: '17/03/2000',
    icon: LiaBirthdayCakeSolid,
  },
  {
    title: 'Address',
    content: '10 Ward, Go Vap District, Ho Chi Minh City',
    icon: CiLocationOn,
  },
  {
    title: 'Email',
    content: 'thanhduyking1703@gmail.com',
    icon: CiMail,
  }
];

export const OVERVIEW_DATA: string[] = [
  "I'm a hardworking person, quick to adapt to new environments, not afraid of challenges at work, and like to learn new things.",
  "My goal is to become a full-stack developer. With that goal, I improved my programming skills such as improving my ability to make Single Page Application Web and improving my English. With 4 years of college experience with C++, and Javascript, ... and 2 years of experience working with JavaScript and Typescript with framework VueJS (Vue2 & Vue3), I hope to have the opportunity to be challenged and apply my knowledge to the development of the company",
  "Strengths: Front-end technology and knowledge of Back-end application development.",
  "Proficiency in HTML, CSS, JavaScript, TypeScript and C++.",
  "Experience in: JavaScript, TypeScript, VueJS (Vue2 & Vue3), NestJS, SQL Server, MySQL, NoSQL and PostgreSQL."
];

export const EDUCATION_DATA: EducationDataType[] = [
  {
    time: "2018 - 2022",
    score: "8.37/10",
    subInfo: ["Point Trainning: 97/100"],
    title: "Major - Website & Mobile Programming",
    location: "University of Infomation Technology (VNUHCM - UIT)",
  },
  {
    title: "TOEIC",
    score: "670/990",
    time: "2023 - 2025",
  }
];

export const WORK_EXPERIENCE_DATA: WorkExperienceDataType[] = [
  {
    time: "12/2023 - Present",
    company: "Viettel Solutions",
    position: "FE Developer",
    description: [
      "Programmer of the product projects",
      "Create UI/UX and logic at layout based on requirements",
    ]
  },
  {
    time: "05/2022 - 11/2023",
    company: "AhaSoft",
    position: "FE Developer",
    description: [
      "Programmer of the product projects",
      "Create UI/UX and logic at layout based on requirements",
      "Feature business analysis",
      "Test features during development",
    ],
  }
];

export const AWARDS_DATA: AwardDataType[] = [
  {
    time: "2018 - 2019",
    position: "Student",
    location: "University of Infomation Technology (VNUHCM - UIT)",
    title: "Receive scholarships for excellent students in the 1st & 2nd semester"
  }
];

export const SKILLS_DATA: SkillDataType[] = [
  {
    type: "Front-End",
    skills: [
      "HTML",
      "CSS & SCSS",
      "Javascript",
      "Typescript",
      "VueJS (Vue2 & Vue3)",
      "VueX",
      "Vue Router",
      "Pinia",
      "NextJS",
      "BootStrap",
      "AntDesign",
      "PrimeVue"
    ]
  },
  {
    type: "Back-End",
    skills: [
      "Javascript",
      "Typescript",
      "NodeJS",
      "NestJS",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    type: "Other",
    skills: [
      "Git",
      "Docker & Docker Compose",
      "Figma",
      "Firebase",
      "HTTP Cache-Control",
      "C++",
    ],
  }
];

export const PROJECTS_DATA: ProjectDataType[] = [
  {
    name: "SALON ADMIN",
    time: "05/2022 - 11/2023",
    company: "Ahasoft",
    url: ["https://home.ahasoft.co.kr/"],
    description: "Salon management website (booking, sales, customer and employee management)",
    numberOfMember: 15,
    position: "FE Developer",
    responsibilitiesAndAchievement: [
      "Developer",
      "Design UI",
      "Requirements analysis",
      "Archievement: Improve UI and UX for some the old features. Implement features such as export report to excel, PDF by service worker, write validation files in layout (Joi), PWA, configure website cache to help applications load faster (HTTP Cache-Control, Nginx)."
    ],
    mainTechs: ['Javascript', 'VueJS (Vue2)'],
    technologyInUse: [
      "Frontend: HTML, SCSS, VueJS, VueX, VueRouter, Joi,  Axios",
    ],
  },
  {
    name: "SALON HEADQUARTER",
    time: "05/2022 - 11/2023",
    company: "Ahasoft",
    url: ["https://home.ahasoft.co.kr/"],
    description: "Salon chain management website",
    numberOfMember: 15,
    position: "FE Developer",
    responsibilitiesAndAchievement: [
      "Developer",
      "Requirements analysis",
      "Archievement: Improve UI and UX for some the old features and implement new features ",
    ],
    mainTechs: ['Javascript', 'VueJS (Vue2)'],
    technologyInUse: [
      "Frontend: HTML, SCSS, VueJS, VueX, VueRouter, Joi, Axios"
    ]
  },
  {
    name: "DMS4",
    time: "12/20223 - 03/2024",
    company: "Viettel Solutions",
    description: "Commodity transaction management application for companies",
    numberOfMember: 20,
    position: "FE Developer",
    responsibilitiesAndAchievement: [
      "Developer",
      "Achievement: Implement features as order management, warehouse management, warehouse transfer"
    ],
    mainTechs: ['Typescript', 'VueJS (Vue3)'],
    technologyInUse: [
      "Frontend: HTML, VueJS (Vue3), TypeScript, AntDesign, Axios, SCSS"
    ],
  },
  {
    name: "Viettel Retailer Platform (DSP)",
    time: "01/2024 - Present",
    company: "Viettel Solutions",
    url: [
      "https://ec-nutifood-retailer.gpmn.net/login",
      "https://admin-nutifood-retailer.gpmn.net/login"
    ],
    description: "Website manages sales transactions between stores and suppliers. At the same time, manage direct purchases between end users and suppliers",
    numberOfMember: 6,
    position: "FE Developer",
    responsibilitiesAndAchievement: [
      "Developer",
      "Requirements analysis",
      "Achievement Web Admin: Implement features as login, product management",
      "Achievement Web EC: Implement features as login, shopping cart, ordering, order management, order review, account information management, product management, notifications, suggestions and feedback, Zalo mini app, ..."
    ],
    mainTechs: ['Typescript', 'VueJS (Vue3)'],
    technologyInUse: [
      "Frontend: HTML, VueJS (Vue3), Typescript, PrimeVue, Pinia, Viettel Maps, Vue Router, Axios, Vite, SCSS, Vue i18n"
    ]
  },
  {
    name: "ThankZ Diary",
    time: "01/2022 - 05/2022",
    description: "Build a website like an online diary. Includes functions: Login, Register, Create, edit and delete a diary, Edit user information",
    numberOfMember: 1,
    position: "Full-Stack Developer",
    responsibilitiesAndAchievement: [
      "Build Frontend",
      "Build Backend",
    ],
    mainTechs: ['Javascript', 'ReactJS', 'NodeJS', 'Mongodb'],
    technologyInUse: [
      "Frontend: ReactJS, SCSS, Firebase (Source: https://github.com/ThanhDuy173/ThankZFrontend)",
      "Backend: NodeJS, Mongodb (Source: https://github.com/ThanhDuy173/ThankZBackend)"
    ]
  },
  {
    name: "Client Management",
    time: "07/2022 - 09/2022",
    url: ["https://thankz-salon.web.app/"],
    description: "Login (Username: thankz_bt & Password: abcd@1234), View client, Add/Edit/Delete client, Export client, Add Sales by client, View Sales history by client",
    numberOfMember: 1,
    position: "FE Developer",
    responsibilitiesAndAchievement: [
      "Developer",
      "Design UI",
    ],
    mainTechs: ['Javascript', 'VueJS (Vue2)'],
    technologyInUse: [
      "Frontend: Javascript, VueJS, VueX, VueRouter, Axios",
      "Deploy: Firebase",
    ]
  },
  {
    name: "Reserve Solution",
    time: "01/2024 - Present",
    description: "Manage services and reservations for stores",
    numberOfMember: 2,
    position: "Full-Stack Developer",
    responsibilitiesAndAchievement: [
      "Developer",
      "Design UI",
      "Design Database",
      "Business analysis"
    ],
    mainTechs: ['Typescipt', 'VueJS (Vue3)', 'NestJS', 'PostgreSQL'],
    technologyInUse: [
      "Frontend: HTML, CSS, SCSS, TypeScript, VueJS (Vue3), Vuetify, Pinia, Vue Router, Joi",
      "Backend: TypeScript, NestJS, PostgreSQL, Zod, Docker, Docker Compose"
    ]
  },
  {
    name: "CV",
    time: "04/2024 - Present",
    description: "My CV Online",
    url: ['https://cv-front-end.web.app/'],
    numberOfMember: 1,
    position: 'Fullstack Developer',
    responsibilitiesAndAchievement: [
      "Developer",
      "Design UI"
    ],
    mainTechs: ['Typescript', 'NextJS'],
    technologyInUse: [
      'Frontend: HTML, CSS, SCSS, Typescript, NextJS'
    ]
  }
];