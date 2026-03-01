export interface Movie {
  id: number
  title?: string
  name?: string
  overview: string
  backdrop_path: string | null
  poster_path: string | null
}

export interface TMDBResponse {
  results: Movie[]
}