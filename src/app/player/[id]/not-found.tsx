import Link from "next/link"

export default function PlayerNotFound() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white gap-6">
      <h1 className="text-4xl font-bold">Content Not Found</h1>
      <p className="text-gray-400">
        The movie you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
