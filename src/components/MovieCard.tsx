"use client"

import { Movie } from "@/types/movie"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter()

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : ""

  if (!imageUrl) return null

  return (
    <div
      onClick={() => router.push(`/player/${movie.id}`)}
      className="relative min-w-[150px] cursor-pointer group transform transition duration-300 hover:scale-110"
    >
    <Image
        src={imageUrl}
        alt={movie.title || movie.name || "movie"}
        width={150}
        height={225}
        className="rounded-md"
        unoptimized
    />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-md flex items-end p-2">
        <p className="text-xs text-white font-semibold">
          {movie.title || movie.name}
        </p>
      </div>
    </div>
  )
}