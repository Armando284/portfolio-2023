export interface ExternalContent {
  type?: 'image' | 'video'
  url: string
  description: string
}

export interface Job {
  id: string
  featured?: boolean
  imgUrl: string
  imgDescription: string
  multimedia?: ExternalContent[]
  title: string
  startAt: Date
  finishAt: Date | 'Current'
  description: string
  features: string[]
  links: ExternalContent[]
}

export interface Blog {
  slug: string
  featured?: boolean
  title: string
  imgUrl: string
  imgDescription: string
  description: string
  tags?: string[]
}

export type ToastType = 'success' | 'warn' | 'alert'

export interface JobCardInfo {
  id: string
	imgUrl: string
	imgDescription: string
	title: string
	description: string
	features: string[]
	classList?: string
}
