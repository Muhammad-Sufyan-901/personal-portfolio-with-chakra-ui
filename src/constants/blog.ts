import type { Blog } from "@/types";

export const blogList: Blog[] = [
  {
    slug: "what-is-javascript",
    title: "What Is JavaScript? ",
    description: [
      "JavaScript is a versatile programming language that plays a crucial role in web development, providing dynamic and interactive features to enhance user experience. Let's delve into the definition, functions, and evolution of JavaScript.",
      "JavaScript is a high-level, interpreted programming language primarily used for client-side scripting in web browsers. It allows developers to create dynamic content, manipulate the Document Object Model (DOM), and respond to user interactions. JavaScript is an essential component of modern web development, contributing to the creation of interactive and engaging web pages.",
      "JavaScript has undergone significant evolution since its inception. The introduction of ECMAScript, the standard upon which JavaScript is based, has seen regular updates to enhance the language's capabilities. Key advancements include ES6 (ECMAScript 2015) and subsequent versions, bringing features like arrow functions, template literals, and destructuring assignments.",
      "Frameworks and libraries such as Angular, React, and Vue.js have further propelled JavaScript's evolution, simplifying the development of complex web applications. Node.js, a runtime built on the V8 JavaScript engine, enables server-side JavaScript, expanding its domain beyond the browser.",
      'The rise of JavaScript in the context of server-side development, known as "Full Stack JavaScript," showcases its versatility. JavaScript continues to be a driving force in web development, adapting to industry needs and contributing to the creation of sophisticated, interactive, and efficient web applications.',
    ],
    thumbnailImage: "/assets/images/article-01.webp",
    categories: [
      {
        name: "JavaScript",
        color: "yellow.300",
      },
      {
        name: "Website",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2023-12-07"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
  {
    slug: "what-is-css",
    title: "What Is CSS?",
    description: [
      "CSS, or Cascading Style Sheets, is a style language used to control the presentation and layout of HTML elements on a web page. In the world of web development, CSS collaborates with HTML and JavaScript to create visually appealing and responsive designs.",
      "CSS provides a way to alter the appearance of HTML elements. By using style rules, CSS allows web developers to customize features such as color, text size, spacing between elements, and more. It separates presentation from the HTML structure, enabling changes in appearance without modifying the fundamental page structure.",
      "As the web evolves, CSS undergoes continuous development. CSS3, the latest version at the time of writing, introduces various new features such as flexbox, grid layout, and transition effects. These additions offer developers more tools to create complex layouts and creative designs.",
      "Moreover, CSS continues to adapt to the needs of more responsive displays, especially with the increasing popularity of mobile devices. The development of CSS frameworks, such as Bootstrap and Tailwind CSS, has also facilitated web development by providing ready-to-use frameworks for building responsive layouts and designs.",
      "With CSS, web developers have the ability to enhance user experience through attractive designs and flexible layouts across various device platforms.",
    ],
    thumbnailImage: "/assets/images/article-02.webp",
    categories: [
      {
        name: "CSS",
        color: "blue.500",
      },
      {
        name: "Website",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2023-12-06"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
  {
    slug: "what-is-html",
    title: "What Is HTML?",
    description: [
      "HTML, short for Hypertext Markup Language, is a markup language used to build and design the basic structure of a web page. In the world of web development, HTML serves as the foundation for most of the content we see and interact with in browsers.",
      "HTML is a collection of tags or elements that provide instructions to the browser on how a web page should be displayed. Each tag has a specific function and meaning. For example, the <head> tag contains information about the document, while the <p> tag is used to mark paragraphs.",
      "HTML continues to evolve to accommodate the needs of increasingly complex web environments. The latest version, HTML5, introduces many new features including semantic elements like <article>, <section>, and <nav>, as well as support for multimedia without the need for additional plugins.",
      "HTML is also increasingly focused on responsive capabilities, allowing web pages to adapt their display across various devices, from computers to mobile devices.",
      "It's important to note that HTML works in conjunction with CSS (Cascading Style Sheets) and JavaScript to create dynamic and engaging web experiences. As web technology advances, HTML remains a key element in the construction of accessible and dynamic pages across the internet.",
    ],
    thumbnailImage: "/assets/images/article-03.webp",
    categories: [
      {
        name: "HTML",
        color: "orange.500",
      },
      {
        name: "Website",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2023-12-05"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
];
