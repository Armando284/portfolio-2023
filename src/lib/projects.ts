import type { Job } from '@/models/types'

export const projects: Job[] = [
  {
    id: 'buzz-quest',
    featured: true,
    imgUrl: 'buzz_quest.webp',
    imgDescription: 'Buzz Quest screenshot',
    multimedia: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/Y_mDcK_rpBA?si=XwMJFxqkgqnc6nSc',
        description: 'Buzz Quest trailer at YouTube',
      },
    ],
    title: 'Buzz Quest',
    startAt: new Date('2024-1-1'),
    finishAt: 'Current',
    description: `"Buzz Quest" is my first completed and deployed game, marking my foray into the world of game development. This project was a rewarding dive into software engineering, where I embraced the role of a developer bringing an idea to life.

Throughout the development process, I experienced significant learning and growth. Utilizing Unity as the game engine provided a robust platform for creating an immersive experience. I also ventured into 3D modeling with Blender, gaining valuable skills along the way.

Image editing was accomplished with Photoshop, while audio editing was handled using Audacity. Each tool contributed uniquely to the game's overall appeal. 

Deployed on itch.io, "Buzz Quest" served as an educational journey, teaching me the intricacies of game development. From conceptualization to deployment, every step was an exciting adventure. Are you ready to explore "Buzz Quest"? Let the adventure begin!`,
    features: ['Unity', 'Game', '3D', 'C#', 'Blender', 'Itch.io'],
    links: [
      {
        url: 'armandojpt.itch.io/buzz-quest',
        description: 'Store.',
      },
    ],
  },
  {
    id: 'programmer-survey',
    featured: true,
    imgUrl: 'programmer_survey.webp',
    imgDescription: 'Programmer survey web app',
    multimedia: [
      {
        type: 'image',
        url: '',
        description: 'JavaScript quiz questions example gif.',
      },
    ],
    title: 'JavaScript Level Quiz',
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: `This project involved creating a single-page application (SPA) that quizzes users on their knowledge of JavaScript, with questions ranging from junior to senior levels. The main challenge was ensuring the integrity of the quiz by preventing users from cheating and managing data to provide accurate feedback.

The application was built using Angular and Material Design, and it was deployed on Firebase, which also served as the database for analytics. The quiz helps users gauge their proficiency in JavaScript and identify areas for improvement by providing detailed feedback.

The quiz has been used by over 100 developers and features a collection of random programming questions, each with several possible answers. It aims to give students and junior developers a clear understanding of their skill level and guide them on what to focus on next in their learning journey.`,
    features: [
      'Angular',
      'HTML/CSS',
      'TypeScript',
      'Firebase',
      'Material Design',
    ],
    links: [
      {
        url: 'javascript-survey.web.app/surveys',
        description: 'JavaScript Level Quiz.',
      },
      {
        url: 'github.com/Armando284/programmer-level-survey',
        description: 'Github repository.',
      },
    ],
  },
  {
    id: 'format-logs',
    imgUrl: 'format_logs.webp',
    imgDescription: 'Terminal logs formatter',
    title: 'Format logs',
    startAt: new Date('2023-10-1'),
    finishAt: 'Current',
    description: `The format-logs project is an NPM package designed to provide flexible and lightweight formatting for terminal logs in Node.js projects. The primary goal of this project was to delve into method composition, akin to the approach used by the popular NPM package chalk.

To tackle this, I implemented the builder pattern, which allowed for a versatile and composable way to format console logs. This project was a significant learning experience in building and deploying a package to NPM, and it greatly enhanced my understanding of method composition and package management.

The package allows developers to easily add styles to their terminal logs, making debugging and log tracking more efficient. format-logs supports various text styles and colors, offering a customizable solution for log formatting needs. The project, hosted on NPM and available on GitHub, serves as a testament to my growth in software development and my ability to create useful tools for the developer community.`,
    features: ['JavaScript', 'NPM', 'Node.js', 'Jest', 'Cli'],
    links: [
      {
        url: 'www.npmjs.com/package/format-logs',
        description: 'NPM package.',
      },
      {
        url: 'github.com/Armando284/format-logs',
        description: 'Github repository.',
      },
    ],
  },
  {
    id: 'zablek-siege',
    featured: true,
    imgUrl: 'zablek_siege.webp',
    imgDescription: '2D game based on feudal alloy',
    title: `Zablek's Siege`,
    multimedia: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/grRDv4-5_P0?si=ayiEDI9JaWequ_t_',
        description: `Zablek's Siege Youtube Video. - 3`,
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/6QAbeDbJPo8?si=Rv_iSFzoNapIyezg',
        description: `Zablek's Siege Youtube Video. - 2`,
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/X5N_JRNULGQ?si=LXfvO6CCV7rVcSam',
        description: `Zablek's Siege Youtube Video. - 1`,
      },
    ],
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: ``,
    features: ['Unity', 'C#'],
    links: [
      {
        url: 'github.com/Armando284/unnamed-soul-metroidvania',
        description: `Github repository.`,
      },
    ],
  },
  {
    id: 'chat-vibe',
    imgUrl: 'chatvibe.webp',
    imgDescription: 'Real time web chat application',
    title: 'ChatVibe',
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: `Realtime web chat application with user to user and rooms settings. Used nothing more than Vanilla JavaScript and Socket.IO for the frontend, for the backend I used Express to manage the routes. Currently is down for a change in the backend hosting server and design.`,
    features: ['Socket.IO', 'Express.js', 'Vercel', 'HTML/CSS', 'JavaScript'],
    links: [
      {
        url: 'chat-room-web-application.vercel.app/',
        description: 'ChatVibe.',
      },
    ],
  },
  {
    id: 'epic-todo',
    imgUrl: 'epic_todo.webp',
    imgDescription: 'Todo web application',
    multimedia: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/lG9_PVwlN_w?si=7EihYpdrvkgHH8H8',
        description:
          'Epic Todo App presentation at YouTube for CS50 final project.',
      },
    ],
    title: 'Epic Todo App',
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: `Todo App single page application (SPA). It has user authentication by email/password or with Google account. Tasks are saved in local cache and in Firebase Cloud Storage. Task descriptions count with rich text features and drag and drop for organization. Final project of CS50 course.`,
    features: ['Angular', 'Firebase', 'Auth', 'HTML/CSS', 'TypeScript'],
    links: [
      {
        url: 'cs50-final-project.vercel.app/',
        description: 'Epic Todo.',
      },
    ],
  },
  {
    id: 'web-game',
    imgUrl: 'phaser_game.webp',
    imgDescription: 'Web based 2D game.',
    title: 'Unnamed Web RPG Game',
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: `Small multiplayer 2D pixelart RPG based on web technologies.`,
    features: ['Webpack', 'Phaser 3', 'HTML/CSS', 'TypeScript'],
    links: [
      {
        url: 'github.com/Armando284/phaser-typescript-webpack',
        description: 'Github repository.',
      },
    ],
  },
]
