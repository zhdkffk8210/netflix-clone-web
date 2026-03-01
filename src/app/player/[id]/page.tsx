import { notFound } from "next/navigation"
import { fetchMovieById, fetchMovieVideos } from "@/lib/tmdb"
import VideoPlayer from "@/components/player/VideoPlayer"
import type { Metadata } from "next"

interface PlayerPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PlayerPageProps): Promise<Metadata> {
  const { id } = await params
  try {
    const movie = await fetchMovieById(id)
    return { title: `${movie.title} - Netflix Clone` }
  } catch {
    return { title: "Movie Not Found" }
  }
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { id } = await params

  const numericId = parseInt(id, 10)
  if (!Number.isFinite(numericId) || numericId <= 0) {
    notFound()
  }

  try {
    const [movie, videos] = await Promise.all([
      fetchMovieById(id),
      fetchMovieVideos(id),
    ])

    return (
      <VideoPlayer
        title={movie.title}
        backdropPath={movie.backdrop_path}
        videos={videos.results}
      />
    )
  } catch {
    notFound()
  }
}
