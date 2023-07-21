import type { Blog } from "@/types";

export const blogList: Blog[] = [
  {
    slug: "list-of-javascript-array-methods",
    title: "List of JavaScript Array Methods",
    description: "In JavaScript, an array is a data structure that contains list of elements which store multiple values in a single variable. The strength of JavaScript arrays lies in the array methods.",
    thumbnailImage: "/assets/images/article-1.webp",
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
    uploadedAt: new Date("2023-01-02"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
  {
    slug: "css-cheat-sheet-a-basic-guide-to-css",
    title: "CSS Cheat Sheet - A Guide For CSS",
    description:
      "CSS i.e. Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in a markup language such as HTML, XML, etc. CSS enhances the look and feel of the webpage by describing how elements should be rendered on screen or in other media.",
    thumbnailImage: "/assets/images/article-2.webp",
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
    uploadedAt: new Date("2022-12-30"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
  {
    slug: "what-is-html-basic-explanation",
    title: "What Is HTML? - Basic Explanation",
    description:
      "HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.",
    thumbnailImage: "/assets/images/article-3.webp",
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
    uploadedAt: new Date("2022-12-29"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
];
