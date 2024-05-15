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

export interface Blog {
  slug: string
  title: string
  imgUrl: string
  imgDescription: string
  description: string
  tags?: string[]
}

export interface Toast {
  type: 'success' | 'warn' | 'alert'
  message: string
}
