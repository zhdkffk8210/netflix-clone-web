"use client"

import { useRef } from "react"
import { Movie } from "@/types/movie"
import MovieCard from "./MovieCard"

interface RowProps {
  title: string
  movies: Movie[]
}

export default function Row({ title, movies }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return

    const { scrollLeft, clientWidth, scrollWidth } = rowRef.current

    const scrollAmount = clientWidth

    if (direction === "right") {
      const newScrollLeft = scrollLeft + scrollAmount

      if (newScrollLeft >= scrollWidth - clientWidth) {
        // 끝이면 처음으로
        rowRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        })
      } else {
        rowRef.current.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        })
      }
    } else {
      const newScrollLeft = scrollLeft - scrollAmount

      if (newScrollLeft <= 0) {
        // 처음이면 끝으로
        rowRef.current.scrollTo({
          left: scrollWidth,
          behavior: "smooth",
        })
      } else {
        rowRef.current.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <div className="text-white mb-8">
      <h2 className="text-xl font-bold mb-2 px-4">{title}</h2>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 hidden group-hover:flex items-center bg-black/50 px-2"
        >
          ◀
        </button>

        <div
          ref={rowRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-4 px-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 hidden group-hover:flex items-center bg-black/50 px-2"
        >
          ▶
        </button>
      </div>
    </div>
  )
}