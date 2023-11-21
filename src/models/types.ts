export interface ExternalLink {
  url: string
  description: string
}

export interface Job {
  id: string
  imgUrl: string
  imgDescription: string
  title: string
  startAt: Date
  finishAt: Date | 'Current'
  description: string
  features: string[]
  links: ExternalLink[]
}