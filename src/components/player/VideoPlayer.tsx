"use client"

import { useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import YouTubePlayer from "./YouTubePlayer"
import type { TMDBVideo } from "@/types/movie"

interface VideoPlayerProps {
  readonly title: string
  readonly backdropPath: string | null
  readonly videos: ReadonlyArray<TMDBVideo>
}

export default function VideoPlayer({
  title,
  backdropPath,
  videos,
}: VideoPlayerProps) {
  const router = useRouter()
  const handleBack = useCallback(() => router.back(), [router])

  const youtubeTrailer = useMemo(
    () =>
      videos.find(
        (v) =>
          v.site === "YouTube" &&
          (v.type === "Trailer" || v.type === "Teaser"),
      ),
    [videos],
  )

  if (youtubeTrailer) {
    return <YouTubePlayer title={title} videoKey={youtubeTrailer.key} />
  }

  const imageUrl = backdropPath
    ? `https://image.tmdb.org/t/p/original${backdropPath}`
    : undefined

  return (
    <div
      className="relative w-full h-screen bg-black flex items-center justify-center"
      style={
        imageUrl
          ? { backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/70" />

      {/* Back button */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent px-6 pt-5 pb-12 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="text-white hover:text-white/70 transition-colors"
            aria-label="Go back"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h2 className="text-white text-lg sm:text-xl font-semibold truncate">
            {title}
          </h2>
        </div>
      </div>

      {/* No trailer message */}
      <div className="relative z-10 text-center">
        <p className="text-white/60 text-lg">No trailer available</p>
      </div>
    </div>
  )
}
