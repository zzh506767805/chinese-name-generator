export interface PageProps {
  params: {
    locale: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
} 