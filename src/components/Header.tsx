"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Netflix Logo */}
        <h1
          onClick={() => router.push("/")}
          className="text-red-600 text-2xl font-extrabold cursor-pointer tracking-widest"
        >
          NETFLIX
        </h1>

        {/* Profile Box */}
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-red-500 to-yellow-500 cursor-pointer hover:scale-110 transition" />
      </div>
    </header>
  )
}