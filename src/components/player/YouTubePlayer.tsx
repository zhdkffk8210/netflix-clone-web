"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"

interface YouTubePlayerProps {
  readonly title: string
  readonly videoKey: string
}

export default function YouTubePlayer({ title, videoKey }: YouTubePlayerProps) {
  const router = useRouter()

  const handleBack = useCallback(() => router.back(), [router])

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Mobile/Tablet: back bar above iframe */}
      <div className="flex items-center gap-2 px-4 py-3 shrink-0 md:hidden">
        <button
          onClick={handleBack}
          className="text-white hover:text-white/70 transition-colors flex items-center gap-1"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="text-sm font-medium">Home</span>
        </button>
      </div>

      {/* PC: title overlay on hover */}
      <div className="hidden md:block absolute top-3 left-3 z-10 group/title">
        <span className="text-white text-sm font-medium opacity-0 group-hover/title:opacity-100 transition-opacity duration-300 bg-black/60 px-3 py-1.5 rounded">
          {title}
        </span>
      </div>

      {/* YouTube iframe */}
      <iframe
        className="w-full h-full md:absolute md:inset-0"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  )
}
