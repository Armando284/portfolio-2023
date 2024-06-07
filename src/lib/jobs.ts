import type { Job } from '@/models/types'

export const jobs: Job[] = [
  {
    id: crypto.randomUUID(),
    imgUrl: '',
    imgDescription: '',
    title: 'FullStack Developer @ Secret',
    startAt: new Date('2024-03-15'),
    finishAt: 'Current',
    description: `As a Semi-Senior Fullstack Developer, I have been working on a comprehensive project that involves developing and maintaining two Angular-based frontends using Tailwind CSS: one for content administration and another for user-facing interactions. My responsibilities extend to integrating the backend for frontend (BFF) architecture using Lumen and managing dynamic content through Squidex CMS. Additionally, we use Keycloak for authentication processes.

In this role, I have been responsible for adding new features to enhance functionality and user experience, fixing bugs to ensure smooth and error-free operations, and making significant improvements to the UI and UX for better engagement. I have also focused on code refactoring to improve maintainability and overall performance.

A significant part of my work has involved performance optimization, particularly through image optimization and refining search and sort algorithms. On the SEO front, I have enhanced the website's search engine visibility by adding alt information to images, incorporating meta keywords, and improving the semantics of the HTML structure.

One of the main challenges in this project has been the frequent changes in development team members, which led to variations in code style and quality over time. To address this, we implemented code style guides and linters to ensure consistency and conducted daily standups to discuss and resolve issues promptly. Another major challenge was the implementation of Squidex, which does not support reference data sorting. This limitation required extensive investigation and the development of custom solutions to meet project requirements.`,
    features: ['Angular', 'Tailwind', 'SPA', 'Lumen', 'Squidex', 'Keycloak'],
    links: [],
  },
  {
    id: crypto.randomUUID(),
    imgUrl: 'cuban_engineer.webp',
    imgDescription: 'Cuban Engineer Website',
    title: 'Frontend Developer @ Cuban Engineer',
    startAt: new Date('2023-08-1'),
    finishAt: new Date('2023-11-20'),
    description: `As a Frontend Developer, I worked on a Single Page Application (SPA) built with Angular for a CV generator tailored to developers and IT professionals. The project involved handling extensive career-related data. A significant challenge was that the Angular version in use was outdated, and many dependencies were deprecated.

My primary responsibility was updating Angular from version 10 to version 15 and addressing deprecated dependencies. This task required substantial effort and numerous unit tests to ensure development security. By replacing or updating deprecated dependencies and refactoring old code to meet modern standards, I improved the performance for the First Contentfull Paint FCP and total load time by 15%.

Additionally, I implemented a cascade versioning system in Git to manage version updates, which enhanced backward compatibility and reduced merge conflicts.`,
    features: ['Angular', 'SPA'],
    links: [
      {
        url: 'cuban.engineer/',
        description: 'Cuban Engineer website',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    imgUrl: 'wassermeloni.webp',
    imgDescription: 'Wassermeloni Website',
    title: 'Frontend Developer @ Wassermeloni',
    startAt: new Date('2023-02-1'),
    finishAt: new Date('2023-08-1'),
    description: `Updated company’s website framework, Angular, from version 10 to version 15 and deprecated dependencies. Apply TDD concepts and fix update related broken unit tests. Create CI/CD for deployment. Improved development experience by fixing and updating +800 broken unit tests and end to end tests, by updating code and dependencies to new technologies. Improved security by replacing or updating deprecated dependencies and refactoring old code into newer standards. Improved backward compatibility and reduced merge conflicts by following a cascade versioning system of git branches for each version update. Improved deployment time and reduced costs by 50% on CI/CD by caching dependencies and improving tests`,
    features: ['Angular', 'SPA'],
    links: [
      {
        url: 'www.wassermeloni.de/',
        description: 'Wassermeloni website',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    imgUrl: 'imagined_earth.webp',
    imgDescription: 'Imagined Earth Website',
    title: 'Mobile Developer @ Imagined Earth',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: `Refactor and fix legacy code for a mobile application made with Ionic and Angular 12. Add new features like, Google Maps integrations, in app sales and in app advertising. Remake mobile app UI to new design. Building, deploying and publishing app closed tests, betas and release versions on Google Play and App Store. Improve performance of the backend API based on Laravel. Adding new API routes to include new app versions compatibility. Improved performance by reducing first page load after login from ~7 minutes to ~3 seconds, by creating a data caching algorithm, lazy loading heavy data, fixing heavy blocking code and fixing API’s algorithm and response data. Reduced company’s Google Maps costs to 10% of original by implementing a debouncing algorithm on the autocomplete search system. Improved customer retention on Google Play and App Store, by fixing navigation issues, accessibility, improving performance and reducing error messages to the UI. Reduced company’s server costs and app downtime by fixing synchronous API’s methods with heavy CPU load. Improved user experience by implementing a push notifications system`,
    features: ['Angular', 'Ionic', 'Google Maps', 'Android', 'iOS'],
    links: [
      {
        url: 'www.imaginedearth.com',
        description: 'Imagined Earth website',
      },
    ],
  },
]
