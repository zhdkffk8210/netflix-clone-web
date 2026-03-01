import { TMDBResponse, MovieDetail, TMDBVideoResponse } from "@/types/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(endpoint: string): Promise<TMDBResponse> {
  const separator = endpoint.includes("?") ? "&" : "?";

  const res = await fetch(
    `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status}`);
  }

  return res.json();
}

export async function fetchMovieById(id: string): Promise<MovieDetail> {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch movie ${id}: ${res.status}`);
  }

  return res.json();
}

export async function fetchMovieVideos(id: string): Promise<TMDBVideoResponse> {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch videos for movie ${id}: ${res.status}`);
  }

  return res.json();
}
