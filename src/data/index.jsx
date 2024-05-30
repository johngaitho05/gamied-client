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
];

export const coursesDetail = [
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
          "Matching expenses with revenues",
          "Estimating future profits",
        ],
      },
    ],
  },
];
