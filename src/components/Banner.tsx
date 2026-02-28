"use client"

import { Movie } from "@/types/movie"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Modal from "./Modal"

interface BannerProps {
  movies: Movie[]
}

export default function Banner({ movies }: BannerProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const [movie] = useState<Movie | null>(() => {
    if (!movies.length) return null
    const index = Math.floor(Math.random() * movies.length)
    return movies[index]
  })

  if (!movie) return null

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : ""

  return (
    <>
      <header
        className="relative h-[85vh] bg-cover bg-center text-white flex items-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* 강한 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* 텍스트 영역 */}
        <div className="relative z-10 p-12 max-w-2xl mb-20">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            {movie.title || movie.name}
          </h1>

          <p className="text-lg mb-8 line-clamp-3 text-gray-200">
            {movie.overview}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => router.push(`/player/${movie.id}`)}
              className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition"
            >
              ▶ Play
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-gray-600/80 px-8 py-3 rounded hover:bg-gray-600 transition"
            >
              ⓘ More Info
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <Modal movie={movie} onClose={() => setIsOpen(false)} />
      )}
    </>
  )
}