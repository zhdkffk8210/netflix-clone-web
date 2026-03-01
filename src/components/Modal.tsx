"use client"

import { Movie } from "@/types/movie"
import { useEffect, useState } from "react"

interface ModalProps {
  movie: Movie
  onClose: () => void
}

export default function Modal({ movie, onClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : ""

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 200)
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ${
        isVisible ? "bg-black/80 opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-zinc-900 w-[90%] max-w-3xl rounded-lg overflow-hidden relative transform transition-all duration-200 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        {/* 이미지 */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={movie.title || movie.name}
            className="w-full h-60 object-cover"
          />
        )}

        {/* 내용 */}
        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">
            {movie.title || movie.name}
          </h2>

          <p className="text-sm text-gray-300">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  )
}