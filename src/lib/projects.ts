import type { Job } from '@/models/types'

export const projects: Job[] = [
  {
    id: '1',
    imgUrl: 'buzz_quest.webp',
    imgDescription: 'Buzz Quest screenshot',
    title: 'Buzz Quest',
    startAt: new Date('2024-1-1'),
    finishAt: 'Current',
    description: `"Buzz Quest", my first ever completed and deployed game, stands as a testament to my journey into the world of game development. This project was a sweet dive into the realm of software engineering, where I took on the role of a determined developer on a mission to bring an idea to life.
    The development process was a vertical flight of learning and growth. I used Unity as the game engine, which provided a robust and flexible platform for creating this immersive game. The 3D modeling was done using Blender, a tool that I learned a great deal from during this project.
    Image editing was carried out in Photoshop, and audio editing was done using Audacity. Each tool added a unique dimension to the game, enhancing its overall appeal.
    Deployed on itch.io, "Buzz Quest" was more than just a game; it was a learning experience that taught me about the intricacies of game making. From conceptualization to deployment, every step was a buzz-worthy journey!
    Are you ready to explore "Buzz Quest"? Let the adventure begin!`,
    features: ['Unity', 'Game', '3D', 'C#', 'Blender', 'Itch.io'],
    links: [
      {
        url: 'armandojpt.itch.io/buzz-quest',
        description: 'Buzz Quest store page.',
      },
    ],
  },
  {
    id: '2',
    imgUrl: 'programmer_survey.webp',
    imgDescription: 'Programmer survey web app',
    title: 'Programmer Level Survey',
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: `Used by +100 developers. Single Page Application with a collection of random questions about programming languages, only JavaScript questions for now, each question is separated in ranges of junior to senior and has several possible answers. Users get their approximated level on the language and learn what they are missing. I used Firebase for hosting and database to get easy access to analytics. The objective is to give students or juniors a clear view of their level and what they must learn.`,
    features: ['Angular', 'HTML/CSS', 'TypeScript', 'Firebase'],
    links: [
      {
        url: 'javascript-survey.web.app/surveys',
        description: 'Programmer level survey web app.',
      },
    ],
  },
  {
    id: '3',
    imgUrl: 'format_logs.webp',
    imgDescription: 'Terminal logs formatter',
    title: 'Format logs',
    startAt: new Date('2023-10-1'),
    finishAt: 'Current',
    description: `It is a flexible and light formatter for terminal logs for Node.js projects.`,
    features: ['JavaScript', 'NPM', 'Node.js', 'Jest', 'Cli'],
    links: [
      {
        url: 'www.npmjs.com/package/format-logs',
        description: 'Format logs page at npm registry.',
      },
    ],
  },
  {
    id: '4',
    imgUrl: 'zablek_siege.webp',
    imgDescription: '2D game based on feudal alloy',
    title: `Zablek's Siege`,
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: `A 2D adventure RPG game inspired in Salt and Sanctuary and Feudal Alloy. A large game which I am developing one step at a time as Solo Indie Developer on my free time. I have created all the assets except for the music and some backgrounds sprites. I have learned a lot about game development with this project.`,
    features: ['Unity', 'C#'],
    links: [
      {
        url: 'github.com/Armando284/unnamed-soul-metroidvania',
        description: `Zablek's Siege Game repository.`,
      },
      {
        url: 'www.youtube.com/watch?v=grRDv4-5_P0',
        description: `Zablek's Siege Youtube Video.`,
      },
    ],
  },
  {
    id: '5',
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
        description: 'ChatVibe webapp.',
      },
    ],
  },
  {
    id: '6',
    imgUrl: 'epic_todo.webp',
    imgDescription: 'Todo web application',
    title: 'Epic Todo App',
    startAt: new Date('2019-10-1'),
    finishAt: 'Current',
    description: `Todo App single page application (SPA). It has user authentication by email/password or with Google account. Tasks are saved in local cache and in Firebase Cloud Storage. Task descriptions count with rich text features and drag and drop for organization. Final project of CS50 course.`,
    features: ['Angular', 'Firebase', 'Auth', 'HTML/CSS', 'TypeScript'],
    links: [
      {
        url: 'cs50-final-project.vercel.app/',
        description: 'Epic Todo webapp.',
      },
    ],
  },
  {
    id: '7',
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
        description: 'Unnamed Web RPG Game repository.',
      },
    ],
  },
]
