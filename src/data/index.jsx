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
    name: "Accounting Basics",
    lessons: 7,
    completion: 25,
    image:
      "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?t=st=1717075538~exp=1717079138~hmac=2d467bc3d99eaa5fcdf8b157cd794c3cc7e9241fa99fa53f60703c5ce1e1d701&w=1380",
  },
  {
    name: "Marketing 101",
    lessons: 10,
    completion: 50,
    image:
      "https://img.freepik.com/free-photo/marketing-advertising-commercial-strategy-concept_53876-13733.jpg?t=st=1717075711~exp=1717079311~hmac=92591808bc41bc4ed95157c57003c6d34ccfec7d625f450e1f1c84205a2c2f87&w=1380",
  },
  {
    name: "Introduction to Python",
    lessons: 5,
    completion: 75,
    image:
      "https://img.freepik.com/free-photo/scripting-computer-language-code-programming-developer-technology-concept_53876-125414.jpg?w=826&t=st=1717075862~exp=1717076462~hmac=c8c76a7914eb9166c40f4f34316f622de3f5f924724b8f13a7308747a3c31fc2",
  },
  {
    name: "Project Management",
    lessons: 8,
    completion: 40,
    image: image,
  },
  {
    name: "Accounting Basics",
    lessons: 7,
    completion: 25,
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
