import image from "../assets/course.webp";
export const links = [
  {
    name: "courses",
    link: "/",
  },
  {
    name: "exams",
    link: "/exams",
  },
];

export const courses = [
  {
    title: "Accounting Basics",
    lessons: 7,
    progress: 25,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    thumbnail:
      "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?t=st=1717075538~exp=1717079138~hmac=2d467bc3d99eaa5fcdf8b157cd794c3cc7e9241fa99fa53f60703c5ce1e1d701&w=1380",
  },
  {
    title: "Marketing 101",
    lessons: 10,
    progress: 50,
    progress: 25,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    thumbnail:
      "https://img.freepik.com/free-photo/marketing-advertising-commercial-strategy-concept_53876-13733.jpg?t=st=1717075711~exp=1717079311~hmac=92591808bc41bc4ed95157c57003c6d34ccfec7d625f450e1f1c84205a2c2f87&w=1380",
  },
  {
    title: "Introduction to Python",
    lessons: 5,
    progress: 75,
    progress: 25,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    thumbnail:
      "https://img.freepik.com/free-photo/scripting-computer-language-code-programming-developer-technology-concept_53876-125414.jpg?w=826&t=st=1717075862~exp=1717076462~hmac=c8c76a7914eb9166c40f4f34316f622de3f5f924724b8f13a7308747a3c31fc2",
  },
  {
    title: "Project Management",
    lessons: 8,
    progress: 40,
    thumbnail: Image,
    progress: 25,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Accounting Basics",
    lessons: 7,
    completion: 25,
    progress: 25,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image:
      "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?t=st=1717075538~exp=1717079138~hmac=2d467bc3d99eaa5fcdf8b157cd794c3cc7e9241fa99fa53f60703c5ce1e1d701&w=1380",
  },
];

export const courseDetail = {
  title: "Financial Accounting",
  topics: [
    {
      title:
        "Introduction to Financial Accounting: Understanding the Fundamentals",
      completed: true,
      resources: ["Basics of accounting", "Accounting fundamentals"],
      assessment: [
        {
          question: "What is the primary purpose of financial accounting?",
          options: [
            "To provide internal reports for management's decision-making",
            "To prepare tax returns for the government",
            "To provide financial information to external stakeholders such as investors and creditors",
            "To track day-to-day cash flow operations",
          ],
        },
        {
          question:
            "Which of the following is a fundamental principle of financial accounting?",
          options: [
            "Cash flow management",
            "Matching expenses with revenues",
            "Estimating future profits",
            "To track day-to-day cash flow operations",
          ],
        },
      ],
    },
    {
      title: "Mastering Debits and Credits: The Language of Accounting",
      completed: false,
      resources: ["Basics of accounting", "Accounting fundamentals"],
      assessment: [
        {
          question: "What is the primary purpose of financial accounting?",
          options: [
            "To provide internal reports for management's decision-making",
            "To prepare tax returns for the government",
            "To provide financial information to external stakeholders such as investors and creditors",
            "To track day-to-day cash flow operations",
          ],
        },
        {
          question:
            "Which of the following is a fundamental principle of financial accounting?",
          options: [
            "Cash flow management",
            "Matching expenses with revenues",
            "Estimating future profits",
            "To track day-to-day cash flow operations",
          ],
        },
      ],
    },
    {
      title: "Advanced Financial Accounting Techniques",
      completed: false,
      resources: [
        "Advanced accounting principles",
        "Financial statement analysis",
      ],
      assessment: [
        {
          question: "What is a key feature of advanced financial accounting?",
          options: [
            "Basic bookkeeping",
            "In-depth financial analysis",
            "Preparation of tax returns",
            "Cash flow management",
          ],
        },
        {
          question: "Which technique is used in advanced financial accounting?",
          options: [
            "Variance analysis",
            "Simple addition",
            "Basic subtraction",
            "To track day-to-day cash flow operations",
          ],
        },
      ],
    },
  ],
};

export const exams = [
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/abstract-networking-concept-still-life-composition_23-2149035687.jpg?t=st=1717091807~exp=1717095407~hmac=1a6fecb4304d9c90015708adfb1c01045db932b364f731dc84703f1937fe9a6f&w=1380",
    time: "1.5 hours",
    title: "Data Structures",
    status: "passed",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?t=st=1717090413~exp=1717094013~hmac=5f1eb9e02cc9a7c4ca22595e0bb3c36ec15f7750e582c3c51265cd943c3d73a2&w=1380",
    time: "2 hours",
    title: "Reactjs mastery",
    status: "not started",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/abstract-networking-concept-still-life-composition_23-2149035687.jpg?t=st=1717091807~exp=1717095407~hmac=1a6fecb4304d9c90015708adfb1c01045db932b364f731dc84703f1937fe9a6f&w=1380",
    time: "1.5 hours",
    title: "Data Structures",
    status: "passed",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/online-business-database_53876-95876.jpg?t=st=1717091956~exp=1717095556~hmac=3bdcc483968836e5eee66ba72394d0317ca0330f6243ad25544f8f6268d79323&w=826",
    time: "2 hours",
    title: "Database",
    status: "failed",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/abstract-networking-concept-still-life-composition_23-2149035687.jpg?t=st=1717091807~exp=1717095407~hmac=1a6fecb4304d9c90015708adfb1c01045db932b364f731dc84703f1937fe9a6f&w=1380",
    time: "1.5 hours",
    title: "Data Structures",
    status: "passed",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
  },
];

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A library for managing user interfaces",
      "A full-fledged framework for building web applications",
      "A database management system",
      "A programming language",
    ],
    answer: "A library for managing user interfaces",
  },
  {
    id: 2,
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook",
  },
  {
    id: 3,
    question: "What is a React component?",
    options: [
      "A function or class that returns a piece of the UI",
      "A CSS style sheet",
      "A JavaScript function that manipulates the DOM",
      "A type of data structure",
    ],
    answer: "A function or class that returns a piece of the UI",
  },
  {
    id: 4,
    question: "What is JSX?",
    options: [
      "JavaScript XML",
      "JavaScript and XQuery",
      "JavaScript Extension",
      "JavaScript Syntax",
    ],
    answer: "JavaScript XML",
  },
  {
    id: 5,
    question: "How do you create a React component using a function?",
    options: [
      "function MyComponent() { return <div>Hello</div>; }",
      "createComponent('MyComponent', function() { return <div>Hello</div>; })",
      "new MyComponent() { return <div>Hello</div>; }",
      "MyComponent.prototype.render = function() { return <div>Hello</div>; }",
    ],
    answer: "function MyComponent() { return <div>Hello</div>; }",
  },
  {
    id: 6,
    question: "What is the purpose of the render() method in React?",
    options: [
      "To initialize state",
      "To update the UI",
      "To define component logic",
      "To fetch data",
    ],
    answer: "To update the UI",
  },
  {
    id: 7,
    question: "How do you pass data to a child component in React?",
    options: ["Using props", "Using state", "Using events", "Using methods"],
    answer: "Using props",
  },
  {
    id: 8,
    question: "What is the virtual DOM?",
    options: [
      "A copy of the real DOM kept in memory",
      "A special type of DOM used for server-side rendering",
      "A lightweight version of the browser's DOM",
      "A programming interface for HTML and XML documents",
    ],
    answer: "A copy of the real DOM kept in memory",
  },
  {
    id: 9,
    question: "What is the use of useState in React?",
    options: [
      "To manage component state",
      "To manage side effects",
      "To handle form submissions",
      "To fetch data from APIs",
    ],
    answer: "To manage component state",
  },
  {
    id: 10,
    question: "What hook is used to perform side effects in React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useEffect",
  },
  {
    id: 11,
    question: "How do you create a context in React?",
    options: [
      "React.createContext()",
      "React.useContext()",
      "React.createState()",
      "React.createStore()",
    ],
    answer: "React.createContext()",
  },
  {
    id: 12,
    question: "What is a higher-order component (HOC) in React?",
    options: [
      "A function that takes a component and returns a new component",
      "A component that manages state for other components",
      "A special type of class component",
      "A function that fetches data from APIs",
    ],
    answer: "A function that takes a component and returns a new component",
  },
  {
    id: 13,
    question: "What is the purpose of keys in React?",
    options: [
      "To uniquely identify elements in a list",
      "To manage component state",
      "To handle events",
      "To optimize performance",
    ],
    answer: "To uniquely identify elements in a list",
  },
  {
    id: 14,
    question: "How do you handle events in React?",
    options: [
      "Using event listeners",
      "Using props",
      "Using event handlers",
      "Using state",
    ],
    answer: "Using event handlers",
  },
  {
    id: 15,
    question: "What is the use of useReducer in React?",
    options: [
      "To manage complex state logic",
      "To perform side effects",
      "To create context",
      "To optimize performance",
    ],
    answer: "To manage complex state logic",
  },
  {
    id: 16,
    question: "How do you optimize performance in a React application?",
    options: [
      "Using React.memo",
      "Using inline styles",
      "Using multiple states",
      "Using functional components",
    ],
    answer: "Using React.memo",
  },
  {
    id: 17,
    question: "What is the use of useRef in React?",
    options: [
      "To create a mutable reference",
      "To manage state",
      "To perform side effects",
      "To create context",
    ],
    answer: "To create a mutable reference",
  },
  {
    id: 18,
    question: "How do you fetch data in a React component?",
    options: [
      "Using useEffect",
      "Using useState",
      "Using useContext",
      "Using useReducer",
    ],
    answer: "Using useEffect",
  },
  {
    id: 19,
    question: "What is the use of useCallback in React?",
    options: [
      "To memoize functions",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    answer: "To memoize functions",
  },
  {
    id: 20,
    question: "What is the use of useMemo in React?",
    options: [
      "To memoize values",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    answer: "To memoize values",
  },
];

export default questions;
