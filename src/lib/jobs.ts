import type { Job } from '@/models/types'

export const jobs: Job[] = [
  {
    id: 'confidential-conglomerate',
    imgUrl: '',
    imgDescription: '',
    title: 'FullStack Developer @ Confidential Conglomerate',
    startAt: new Date('2024-03-15'),
    finishAt: 'Current',
    description: `As a Semi-Senior Fullstack Developer, I have been working on a comprehensive project that involves developing and maintaining two Angular-based frontends using Tailwind CSS: one for content administration and another for user-facing interactions. My responsibilities extend to integrating the backend for frontend (BFF) architecture using Lumen and managing dynamic content through Squidex CMS. Additionally, we use Keycloak for authentication processes.

In this role, I have been responsible for adding new features to enhance functionality and user experience, fixing bugs to ensure smooth and error-free operations, and making significant improvements to the UI and UX for better engagement. I have also focused on code refactoring to improve maintainability and overall performance.

A significant part of my work has involved performance optimization, particularly through image optimization and refining search and sort algorithms. On the SEO front, I have enhanced the website's search engine visibility by adding alt information to images, incorporating meta keywords, and improving the semantics of the HTML structure.

One of the main challenges in this project has been the frequent changes in development team members, which led to variations in code style and quality over time. To address this, we implemented code style guides and linters to ensure consistency and conducted daily standups to discuss and resolve issues promptly. Another major challenge was the implementation of Squidex, which does not support reference data sorting. This limitation required extensive investigation and the development of custom solutions to meet project requirements.`,
    features: ['Angular', 'Tailwind', 'SPA', 'Lumen', 'Squidex', 'Keycloak', 'Gitlab', 'Figma'],
    links: [],
  },
  {
    id: 'cuban-engineer',
    imgUrl: 'cuban_engineer.webp',
    imgDescription: 'Cuban Engineer Website',
    title: 'Frontend Developer @ Cuban Engineer',
    startAt: new Date('2023-08-1'),
    finishAt: new Date('2023-11-20'),
    description: `As a Frontend Developer, I worked on a Single Page Application (SPA) built with Angular for a CV generator tailored to developers and IT professionals. The project involved handling extensive career-related data. A significant challenge was that the Angular version in use was outdated, and many dependencies were deprecated.

My primary responsibility was updating Angular from version 10 to version 15 and addressing deprecated dependencies. This task required substantial effort and numerous unit tests to ensure development security. By replacing or updating deprecated dependencies and refactoring old code to meet modern standards, I improved the performance for the First Contentfull Paint FCP and total load time by 15%.

Additionally, I implemented a cascade versioning system in Git to manage version updates, which enhanced backward compatibility and reduced merge conflicts.`,
    features: ['Angular', 'SPA', 'npm', 'Git', 'Gitlab'],
    links: [
      {
        url: 'cuban.engineer/',
        description: 'Cuban Engineer website',
      },
    ],
  },
  {
    id: 'wassermeloni',
    imgUrl: 'wassermeloni.webp',
    imgDescription: 'Wassermeloni Website',
    title: 'Frontend Developer @ Wassermeloni',
    startAt: new Date('2023-02-1'),
    finishAt: new Date('2023-08-1'),
    description: `In this project, I modernized a company's website framework by updating the Angular version within a Ruby on Rails application, a task complicated by the server-side compilation process and numerous broken unit tests. I upgraded Angular from a very old version, meticulously fixed deprecated dependencies through trial and error, and undertook extensive refactoring. By applying Test-Driven Development (TDD) principles, I addressed around 800 broken unit tests. Additionally, I implemented a continuous integration and continuous deployment (CI/CD) pipeline, improving deployment time and reducing CI/CD costs by 50% through efficient caching and optimized testing. This project also involved enhancing the development experience, improving backward compatibility, and reducing merge conflicts with a cascade versioning system for git branches. Security and code quality were bolstered by replacing or updating deprecated dependencies and refactoring old code to meet modern standards. This project highlighted the importance of regular software updates to prevent technical debt, resulting in a more secure, maintainable, and efficient application.`,
    features: ['Angular', 'SPA', 'npm', 'Git', 'Gitlab', 'Bitbucket', 'CI/CD'],
    links: [
      {
        url: 'www.wassermeloni.de/',
        description: 'Wassermeloni website',
      },
    ],
  },
  {
    id: 'imagined-earth',
    imgUrl: 'imagined_earth.webp',
    imgDescription: 'Imagined Earth Website',
    title: 'Mobile Developer @ Imagined Earth',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: `I led the overhaul of a mobile application built with Ionic and Angular 12, inherited from two prior development companies, resulting in significant legacy code issues. I refactored the bad code, addressing memory leaks, uncached data, and unnecessary API calls, reducing authentication load times from 7 minutes to 3 seconds. I added new features such as Google Maps integrations, in-app sales, and advertising, and redesigned the mobile app UI. I also improved backend API performance using Laravel, added new API routes for app compatibility, and deployed versions on Google Play and App Store. Implementing a debouncing algorithm cut Google Maps costs by 90%. Enhancements included fixing navigation and accessibility issues, reducing error messages, and integrating push notifications, which improved customer retention and reduced server costs and downtime. The main lesson was the importance of quality over cost when hiring a software development company.`,
    features: ['Angular', 'Ionic', 'Google Maps', 'Android', 'Google Play', 'iOS', 'App Store', 'Figma'],
    links: [
      {
        url: 'www.imaginedearth.com',
        description: 'Imagined Earth website',
      },
      {
        url: 'play.google.com/store/apps/details?id=com.imaginedearth.app&pcampaignid=web_share',
        description: 'Imagined Earth at Google Play'
      },
      {
        url: 'apps.apple.com/us/app/imagined-earth/id1480303801?platform=iphone',
        description: 'Imagined Earth at App Store'
      }
    ],
  },
]
