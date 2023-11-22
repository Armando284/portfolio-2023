import type { Job } from '@/models/types'

export const jobs: Job[] = [
  {
    id: '1',
    imgUrl: 'imagined_earth.webp',
    imgDescription: 'Imagined Earth Website',
    title: 'Imagined Earth',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: `RESPONSIBILITIES: Refactor and fix legacy code for a mobile application made with Ionic and Angular 12. Add new features like, Google Maps integrations, in app sales and in app advertising. Remake mobile app UI to new design. Building, deploying and publishing app closed tests, betas and release versions on Google Play and App Store. Improve performance of the backend API based on Laravel. Adding new API routes to include new app versions compatibility. KEY ACCOMPLISHMENTS: Improved performance by reducing first page load after login from ~7 minutes to ~3 seconds, by creating a data caching algorithm, lazy loading heavy data, fixing heavy blocking code and fixing API’s algorithm and response data. Reduced company’s Google Maps costs to 10% of original by implementing a debouncing algorithm on the autocomplete search system. Improved customer retention on Google Play and App Store, by fixing navigation issues, accessibility, improving performance and reducing error messages to the UI. Reduced company’s server costs and app downtime by fixing synchronous API’s methods with heavy CPU load. Improved user experience by implementing a push notifications system.`,
    features: ['Angular', 'Ionic', 'Google Maps', 'Android', 'iOS'],
    links: [
      {
        url: 'www.imaginedearth.com',
        description: 'Imagined Earth website',
      },
    ],

  },
  {
    id: '2',
    imgUrl: 'cuban_engineer.webp',
    imgDescription: 'Cuban Engineer Website',
    title: 'Cuban Engineer',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: `RESPONSIBILITIES: Updated company’s website framework, Angular, from version 10 to version 15 and deprecated dependencies. KEY ACCOMPLISHMENTS: Improved performance by 15% by replacing or updating deprecated dependencies and refactoring old code into newer standards. Improved backward version compatibility and reduced merge conflicts by following a cascade versioning system of git branches for each version update`,
    features: ['Angular', 'SPA'],
    links: [
      {
        url: 'www.imaginedearth.com',
        description: 'Imagined Earth website',
      },
    ],

  },
  {
    id: '3',
    imgUrl: 'wassermeloni.webp',
    imgDescription: 'Wassermeloni Website',
    title: 'Wassermeloni',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: `RESPONSIBILITIES: Updated company’s website framework, Angular, from version 10 to version 15 and deprecated dependencies. Apply TDD concepts and fix update related broken unit tests. Create CI/CD for deployment. KEY ACCOMPLISHMENTS: Improved development experience by fixing and updating +800 broken unit tests and end to end tests, by updating code and dependencies to new technologies. Improved security by replacing or updating deprecated dependencies and refactoring old code into newer standards. Improved backward compatibility and reduced merge conflicts by following a cascade versioning system of git branches for each version update. Improved deployment time and reduced costs by 50% on CI/CD by caching dependencies and improving tests.`,
    features: ['Angular', 'SPA'],
    links: [
      {
        url: 'www.imaginedearth.com',
        description: 'Imagined Earth website',
      },
    ],

  },

]