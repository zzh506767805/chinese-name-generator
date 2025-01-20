export interface PageParams {
  locale: string
}

export interface PageProps {
  params: Promise<PageParams>
  searchParams?: { [key: string]: string | string[] | undefined }
} 