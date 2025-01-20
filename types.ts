export interface PageParams {
  locale: string
}

export interface PageProps {
  params: PageParams
  searchParams?: { [key: string]: string | string[] | undefined }
} 