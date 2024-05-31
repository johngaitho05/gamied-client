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

    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    thumbnail:
      "https://img.freepik.com/free-photo/marketing-advertising-commercial-strategy-concept_53876-13733.jpg?t=st=1717075711~exp=1717079311~hmac=92591808bc41bc4ed95157c57003c6d34ccfec7d625f450e1f1c84205a2c2f87&w=1380",
  },
  {
    title: "Introduction to Python",
    lessons: 5,
    progress: 75,

    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    thumbnail:
      "https://img.freepik.com/free-photo/scripting-computer-language-code-programming-developer-technology-concept_53876-125414.jpg?w=826&t=st=1717075862~exp=1717076462~hmac=c8c76a7914eb9166c40f4f34316f622de3f5f924724b8f13a7308747a3c31fc2",
  },
  {
    title: "Project Management",
    lessons: 8,
    progress: 40,
    thumbnail: image,

    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Accounting Basics",
    lessons: 7,
    progress: 25,

    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    thumbnail:
      "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?t=st=1717075538~exp=1717079138~hmac=2d467bc3d99eaa5fcdf8b157cd794c3cc7e9241fa99fa53f60703c5ce1e1d701&w=1380",
  },
];

export const SingleCourse = [
  {
    title: "Accounting Basics",
    lessons: 7,
    progress: 25,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    thumbnail:
      "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?t=st=1717075538~exp=1717079138~hmac=2d467bc3d99eaa5fcdf8b157cd794c3cc7e9241fa99fa53f60703c5ce1e1d701&w=1380",

    lessons: [
      {
        id: 1,
        title:
          "Introduction to Financial Accounting: Understanding the Fundamentals",
        completed: true,
      },
      {
        id: 2,
        title:
          "Introduction to Financial Accounting: Understanding the Fundamentals",
        completed: true,
      },
      {
        id: 3,
        title:
          "Introduction to Financial Accounting: Understanding the Fundamentals",
        completed: false,
      },
      {
        id: 4,
        title:
          "Introduction to Financial Accounting: Understanding the Fundamentals",
        completed: true,
      },
    ],
  },
];

export const singleLesson = [
  {
    id: 12,
    title: "Introduction to Data Structures",
    completed: false,
    content: [
      {
        id: 4,
        title: "Data Structures Overview",
        href: "https://en.wikipedia.org/wiki/Data_structure",
      },
      {
        id: 5,
        title: "Arrays and Linked Lists",
        href: "https://en.wikipedia.org/wiki/Array_data_structure",
      },
      {
        id: 6,
        title: "Stacks and Queues",
        href: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
      },
    ],
    assessment: {
      id: 7,
      completed: false,
      questions: [
        {
          id: 14,
          name: "What is a data structure?",
          points: 60,
          answers: [
            {
              id: 32,
              name: "A way to store and organize data",
              is_correct: true,
            },
            {
              id: 33,
              name: "A type of algorithm",
              is_correct: false,
            },
          ],
          lost_points: 0,
        },
        {
          id: 15,
          name: "Which of the following is a linear data structure?",
          points: 60,
          answers: [
            {
              id: 34,
              name: "Binary Tree",
              is_correct: false,
            },
            {
              id: 35,
              name: "Array",
              is_correct: true,
            },
          ],
          lost_points: 0,
        },
        {
          id: 16,
          name: "What is the time complexity of accessing an element in an array?",
          points: 60,
          answers: [
            {
              id: 36,
              name: "O(n)",
              is_correct: false,
            },
            {
              id: 37,
              name: "O(1)",
              is_correct: true,
            },
          ],
          lost_points: 0,
        },
      ],
    },
  },
];
export const lessons = [{}];

export const assessments = [
  {
    id: 5,
    title: "Data Structures",
    pass_mark: 70,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
    thumbnail:
      "https://img.freepik.com/free-photo/abstract-networking-concept-still-life-composition_23-2149035687.jpg?t=st=1717091807~exp=1717095407~hmac=1a6fecb4304d9c90015708adfb1c01045db932b364f731dc84703f1937fe9a6f&w=1380",
    completed: true,
    result: {
      score: 80,
      comment: "Passed",
    },

    time_allowed: 90, // 1.5 hours in minutes
  },
  {
    id: 1,
    title: "Reactjs Mastery",
    pass_mark: 70,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
    thumbnail:
      "https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?t=st=1717090413~exp=1717094013~hmac=5f1eb9e02cc9a7c4ca22595e0bb3c36ec15f7750e582c3c51265cd943c3d73a2&w=1380",
    completed: false,
    result: {
      score: 0,
      comment: "Not started",
    },

    time_allowed: 120, // 2 hours in minutes
  },
  {
    id: 2,
    title: "Data Structures",
    pass_mark: 70,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
    thumbnail:
      "https://img.freepik.com/free-photo/abstract-networking-concept-still-life-composition_23-2149035687.jpg?t=st=1717091807~exp=1717095407~hmac=1a6fecb4304d9c90015708adfb1c01045db932b364f731dc84703f1937fe9a6f&w=1380",
    completed: true,
    result: {
      score: 85,
      comment: "Passed",
    },

    time_allowed: 90, // 1.5 hours in minutes
  },
  {
    id: 3,
    title: "Database",
    pass_mark: 70,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
    thumbnail:
      "https://img.freepik.com/free-photo/online-business-database_53876-95876.jpg?t=st=1717091956~exp=1717095556~hmac=3bdcc483968836e5eee66ba72394d0317ca0330f6243ad25544f8f6268d79323&w=826",
    completed: true,
    result: {
      score: 55,
      comment: "Failed",
    },

    time_allowed: 120, // 2 hours in minutes
  },
  {
    id: 4,
    title: "Data Structures",
    pass_mark: 70,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
    thumbnail:
      "https://img.freepik.com/free-photo/abstract-networking-concept-still-life-composition_23-2149035687.jpg?t=st=1717091807~exp=1717095407~hmac=1a6fecb4304d9c90015708adfb1c01045db932b364f731dc84703f1937fe9a6f&w=1380",
    completed: true,
    result: {
      score: 75,
      comment: "Passed",
    },

    time_allowed: 90, // 1.5 hours in minutes
  },
];

export const singleAssessment = {
  id: 1,
  title: "Data Structures",
  pass_mark: 70,
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum facilis harum rem dolores, non esse neque repellat cum saepe.",
  thumbnail:
    "https://img.freepik.com/free-photo/abstract-networking-concept-still-life-composition_23-2149035687.jpg?t=st=1717091807~exp=1717095407~hmac=1a6fecb4304d9c90015708adfb1c01045db932b364f731dc84703f1937fe9a6f&w=1380",
  completed: false,
  result: {
    score: 75,
    comment: "not started",
  },
  questions: [
    {
      id: 1,
      name: "What is a linked list?",
      points: 40,
      answers: [
        {
          id: 1,
          name: "A sequence of nodes where each node points to the next node",
          is_correct: true,
        },
        {
          id: 2,
          name: "A type of search algorithm",
          is_correct: false,
        },
      ],
      lost_points: 0,
    },

    {
      id: 3,
      name: "Which of the following is not a type of binary tree?",
      points: 40,
      answers: [
        {
          id: 3,
          name: "Splay Tree",
          is_correct: false,
        },
        {
          id: 4,
          name: "Hash Tree",
          is_correct: true,
        },
      ],
      lost_points: 0,
    },
    {
      id: 4,
      name: "What is an example of a linear data structure?",
      points: 40,
      answers: [
        {
          id: 2,
          name: "Tree",
          is_correct: false,
        },
        {
          id: 3,
          name: "Queue",
          is_correct: true,
        },
        {
          id: 4,
          name: "Hash Table",
          is_correct: false,
        },
      ],
      lost_points: 0,
    },
  ],
  time_allowed: 90, // 1.5 hours in minutes
};
