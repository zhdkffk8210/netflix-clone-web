export interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  runtime: number | null;
  release_date: string;
  vote_average: number;
  genres: ReadonlyArray<{ id: number; name: string }>;
}

export interface TMDBVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export interface TMDBVideoResponse {
  id: number;
  results: ReadonlyArray<TMDBVideo>;
}

export interface TMDBResponse {
  results: Movie[];
}
