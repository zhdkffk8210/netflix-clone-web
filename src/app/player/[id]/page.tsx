import { fetchMovies } from "@/lib/tmdb"
import { Movie } from "@/types/movie"
import Link from "next/link"

interface PlayerPageProps {
  params: {
    id: string
  }
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const data = await fetchMovies("/movie/popular")

  const movie = data.results.find(
    (m: Movie) => m.id.toString() === params.id
  )

  if (!movie) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Movie not found
      </div>
    )
  }

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : ""

  return (
    <div className="bg-black min-h-screen text-white">
      
      {/* 상단 뒤로가기 */}
      <div className="p-6">
        <Link href="/" className="text-lg hover:underline">
          ← Back
        </Link>
      </div>

      {/* 배경 이미지 영역 */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <h1 className="text-5xl font-bold p-10">
            {movie.title || movie.name}
          </h1>
        </div>
      </div>

      {/* 플레이어 영역 자리 */}
      <div className="p-10">
        <div className="bg-zinc-800 h-96 rounded-lg flex items-center justify-center text-gray-400">
          🎬 Video Player Area (팀원이 구현 예정)
        </div>
      </div>
    </div>
  )
}