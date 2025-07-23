export interface PageProps {
  params: {
    locale: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
} 

export interface KeywordPage {
  title: string
  href: string
} 