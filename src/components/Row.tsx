"use client"

import { useRef } from "react"
import MovieCard from "./MovieCard"
import { Movie } from "@/types/movie"

interface RowProps {
  title: string
  movies: Movie[]
}

export default function Row({ title, movies }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return

    const scrollAmount = rowRef.current.clientWidth * 0.9

    if (direction === "left") {
      rowRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    } else {
      rowRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative group mb-8">
      <h2 className="text-white text-xl font-semibold mb-3 px-4">
        {title}
      </h2>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-0 bottom-0 z-10 hidden group-hover:flex items-center bg-black/60 px-3 text-white text-3xl hover:bg-black/80 transition"
      >
        ‹
      </button>

      {/* Movie List */}
      <div
        ref={rowRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 px-4 scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-0 bottom-0 z-10 hidden group-hover:flex items-center bg-black/60 px-3 text-white text-3xl hover:bg-black/80 transition"
      >
        ›
      </button>
    </div>
  )
}