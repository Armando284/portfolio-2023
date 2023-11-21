import type { ExternalLink } from '../models/types'

export interface Job {
  id: string
  imgUrl: string
  imgDescription: string
  title: string
  startAt: Date
  finishAt: Date
  description: string
  features: string[]
  links: ExternalLink[]
}

export const jobs: Job[] = [
  {
    id: '1',
    imgUrl: 'imagined_earth.png',
    imgDescription: 'Imagined Earth Website',
    title: 'Imagined Earth',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: 'Development of a mobile application for Android and iOS using Ionic and Angular.',
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
    imgUrl: 'cuban_engineer.png',
    imgDescription: 'Cuban Engineer Website',
    title: 'Cuban Engineer',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: 'Development of a single page aplication, SPA, with Angular.',
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
    imgUrl: 'wassermeloni.png',
    imgDescription: 'Wassermeloni Website',
    title: 'Wassermeloni',
    startAt: new Date('2019-10-1'),
    finishAt: new Date('2023-02-1'),
    description: 'Development of a single page aplication, SPA, with Angular.',
    features: ['Angular', 'SPA'],
    links: [
      {
        url: 'www.imaginedearth.com',
        description: 'Imagined Earth website',
      },
    ],

  },

]