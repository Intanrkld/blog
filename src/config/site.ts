import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Intan Blog", // shown in the header
  description:
    "Welcome to my blog, where I write about a wide variety of topics.",
  image: "/images/screenshots/screenshot01.png",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
    mail: "Intanrizkikarlinda@gmail.com",
    linkedin: "https://www.linkedin.com/in/intan-rizki-karlinda-604470224",
    github: "https://github.com/Intanrkld",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/intanrkld",
  },
  header: {
    logo: "/images/logo.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      // {
      //   title: "Courses",
      //   href: "/courses",
      // },
      // {
      //   title: "Useful tools",
      //   href: "/tools",
      // },
    ],
  },
  heroBanner: {
    title: {
      1: [
        { text: "Welcome to my blog" },
        { text: "." },
      ],
      2: [{ text: "𝐼𝓃𝓉𝒶𝓃 𝑅𝒾𝓏𝓀𝒾 𝒦𝒶𝓇𝓁𝒾𝓃𝒹𝒶." }],
    },
    subtitle:
      "From personal experiences to diverse interests, my blog is a space where I share it all.",
    callToActions: [
      {
        label: "Read the blog",
        href: "/blog",
      },
      {
        label: "Explore my projects",
        href: "/#projects",
      },
    ],
  },
  about: {
    avatar: "/images/avatar.png",
    title: "Intan Rizki Karlinda",
    description: [
      "I am a graduate of S1 Psychology with the following experience, I am active in the organisation of Medical and Psychology Student Association. I am motivated to develop a career in psychology with the aim of working in a competent and dedicated consulting agency or company. In addition, I also have an interest in developing abilities in non-psychology fields with the aim of increasing skill development and flexibility, by actively joining communities such as the rubi community.",
    ],
  },
  experience: [
    {
      title: "Private Tutor",
      company: "EDUFIO Home Tutoring.",
      link: "https://edufio.com/",
      location: "Yogyakarta, Indonesia",
      startDate: "Feb 2023",
      endDate: "Present",
      description: [
        "As a Private Tutor at EDUFIO Home Tutoring in Yogyakarta, Indonesia, I have been helping students unlock their potential since February 2023. My passion for education drives me to provide personalized and effective tutoring, tailored to each student's unique learning needs. Together, we're working to achieve their academic goals and inspire a lifelong love for learning. I'm committed to making a positive impact on their educational journey.",
      ],
      tags: [
        "Private Tutoring",
        "Education",
        "Part Time",
      ],
    },
  ],
  education: [
    {
      school: "Universitas Negeri Yogyakarta",
      link: "https://uny.ac.id/",
      degree: "Magister",
      fieldOfStudy: "Psikologi",
      startDate: "2022",
      endDate: "Present",
    },
    {
      school: "Universitas Syiah Kuala",
      link: "https://usk.ac.id/",
      degree: "Sarjana",
      fieldOfStudy: "Psikologi",
      startDate: "2016",
      endDate: "2021",
    },
  ],
  projects: [
    {
      title: "Spotify Connected App",
      image: "/images/projects/project01.webp",
      summary:
        "Build a Spotify Connected App Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      tags: ["React"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.codehub.tn",
        github: "https://www.github.com/Mehdi-BHA/notionfolio",
        npm: "https://www.npmjs.com/package/react-wave-player",
      },
      featured: true,
    },
    {
      title: "Weather Forecast App",
      image: "/images/projects/project02.png",
      summary:
        "Create a weather forecast web application that allows users to check the weather for different locations. The project will involve using APIs, front-end technologies like React, and integrating with a weather data provider.",
      tags: ["React", "API Integration", "Weather"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.codehub.tn",
        github: "https://www.github.com/Mehdi-BHA/notionfolio",
        npm: "https://www.npmjs.com/package/react-wave-player",
      },
      featured: true,
    },
    {
      title: "E-commerce Website",
      image: "/images/projects/project03.png",
      summary:
        "Develop a fully functional e-commerce website where users can browse products, add them to a cart, and make purchases. Technologies used will include React for the front end, Node.js for the back end, and MongoDB for the database.",
      tags: ["React", "Node.js", "E-commerce"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.codehub.tn",
        github: "https://www.github.com/Mehdi-BHA/notionfolio",
        npm: "https://www.npmjs.com/package/react-wave-player",
      },
      featured: true,
    },
  ],
  contact: {
    title: "Get in touch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    callToAction: {
      label: "Say hello",
      href: "mailto:hello@mehdibha.co",
    },
  },
  courses: [
    {
      title: "Master React developmenet",
      description:
        "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, best practices and way more",
      image: "/images/courses/course01.png",
      rate: 4.7,
      numberReviews: "1.2k",
      price: "$74.99",
      tags: ["27 lessons", "Intermediate", "4h70"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Advanced Python Programming",
      description:
        "Take your Python skills to the next level with advanced topics like decorators, generators, metaclasses, and more.",
      image: "/images/courses/course01.png",
      rate: 4.9,
      numberReviews: "850",
      price: "FREE",
      tags: ["15 lessons", "Advanced", "3h45"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Machine Learning Fundamentals",
      description:
        "Get started with machine learning and explore algorithms, data preprocessing, and model evaluation.",
      image: "/images/courses/course01.png",
      rate: 4.8,
      numberReviews: "1.5k",
      price: "FREE",
      tags: ["20 lessons", "Intermediate", "4h30"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Web Design and Development",
      description:
        "Learn the essentials of web design, HTML, CSS, and JavaScript to build interactive websites.",
      image: "/images/courses/course01.png",
      rate: 4.6,
      numberReviews: "1.8k",
      price: "$79.99",
      tags: ["22 lessons", "Beginner", "3h15"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Data Science Essentials",
      description:
        "Learn the fundamentals of data science, including data analysis, machine learning, and data visualization.",
      image: "/images/courses/course01.png",
      rate: 4.7,
      numberReviews: "1.1k",
      price: "FREE",
      tags: ["25 lessons", "Intermediate", "4h15"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "UX/UI Design Fundamentals",
      description:
        "Explore the basics of user experience (UX) and user interface (UI) design to create user-friendly digital products.",
      image: "/images/courses/course01.png",
      rate: 4.6,
      numberReviews: "950",
      price: "$69.99",
      tags: ["20 lessons", "Beginner", "3h30"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Java Programming for Beginners",
      description:
        "Start your journey into programming with Java. Learn syntax, object-oriented principles, and basic Java applications.",
      image: "/images/courses/course01.png",
      rate: 4.5,
      numberReviews: "800",
      price: "FREE",
      tags: ["15 lessons", "Beginner", "2h45"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Gain a foundational understanding of cybersecurity, including threat detection, encryption, and network security.",
      image: "/images/courses/course01.png",
      rate: 4.8,
      numberReviews: "1.2k",
      price: "$89.99",
      tags: ["22 lessons", "Intermediate", "4h10"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
  ],
  tools: [
    {
      title: "CSS Gradient Generator",
      description: "Generate CSS gradients visually.",
      image: "/images/courses/course01.png",
      tags: ["CSS", "Generator", "Gradient"],
      link: "https://cssgradient.io/",
    },
    {
      title: "Gradient Hunt",
      description: "Discover and collect beautiful gradients.",
      image: "/images/courses/course01.png",
      tags: ["CSS", "Generator", "Gradient"],
      link: "https://gradienthunt.com/",
    },
    {
      title: "Coolors",
      description: "Generate color palettes easily.",
      image: "/images/courses/course01.png",
      tags: ["Color", "Generator", "Palette"],
      link: "https://coolors.co/",
    },
    {
      title: "Font Awesome",
      description: "Library of free icons for web projects.",
      image: "/images/courses/course01.png",
      tags: ["Icons", "Library"],
      link: "https://fontawesome.com/",
    },
    {
      title: "Material Icons",
      description: "A collection of icons in Material Design style.",
      image: "/images/courses/course01.png",
      tags: ["Icons", "Material Design"],
      link: "https://material.io/resources/icons/",
    },
    {
      title: "Visual Studio Code",
      description: "A popular code editor for web development.",
      image: "/images/courses/course01.png",
      tags: ["Code Editor", "Development"],
      link: "https://code.visualstudio.com/",
    },
  ],
}
