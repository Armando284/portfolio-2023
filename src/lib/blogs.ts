import type { Blog } from "@/models/types";

export const blogs: Blog[] = [
  {
    slug: 'node-vs-go-performance',
    title: 'Node.Js vs Go Which Has The Best Performance',
    imgUrl: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ry9YZ2HJl-HFrfKDWILXZg.png',
    imgDescription: 'Visual Studio Code with the sorting project open, Node.js on the left, Go on the right.',
    description: 'Benchmarking sorting algorithms, Bubble Sort and Merge Sort, using Node.js and Go',
    tags: ['javascript', 'node.js', 'go', 'benchmark'],
  },
  {
    slug: 'light-dark-theme',
    title: 'How To Make a System/Light/Dark Theme Selector',
    imgUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*hENya-JPKMK7VqPo',
    imgDescription: 'Photo by Mohammad Rahmani on Unsplash.',
    description: 'A tutorial on how to create a theme selector for your website or app using only HTML, CSS, and JavaScript',
    tags: ['javascript', 'css', 'themes'],
  },
  {
    slug: 'modules-vs-classes',
    title: 'Module Design Pattern vs Classes in JavaScript',
    imgUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*UhrszUZ_ImWyOHGpP7Y4rA.png',
    imgDescription: 'JavaScript class and Module Pattern examples side by side.',
    description: 'A few examples about the use and differences between Module Pattern and Classes in JavaScript.',
    tags: ['javascript'],
  },
  {
    slug: 'node-vs-go-backend',
    title: 'Comparing Node Js vs Golang for Backend Development',
    imgUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QZjtaeDtosL5b78k_25sQQ.png',
    imgDescription: 'Express and Gin main files side by side.',
    description: 'Testing the performance of a Node Js API vs a Golang API, which language is better for what and when to use it to get the best performance.',
    tags: ['javascript', 'node.js', 'go', 'backend', 'express', 'gin', 'benchmark'],
  },
]