import { TMDBResponse } from "@/types/movie"

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export async function fetchMovies(
  endpoint: string
): Promise<TMDBResponse> {
  const separator = endpoint.includes("?") ? "&" : "?"

  const res = await fetch(
    `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`
  )

  if (!res.ok) {
    console.log("STATUS:", res.status)
    const errorText = await res.text()
    console.log("ERROR BODY:", errorText)
    throw new Error("Failed to fetch movies")
  }

  return res.json()
}