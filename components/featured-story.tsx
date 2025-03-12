import Image from "next/image"
import Link from "next/link"

interface FeaturedStoryProps {
  image: string
  category: string
  source: string
  date: string
  title: string
  subtitle: string
  description: string
}

export default function FeaturedStory({
  image,
  category,
  source,
  date,
  title,
  subtitle,
  description,
}: FeaturedStoryProps) {
  return (
    <Link href="#" className="block group h-full">
      <div className="relative h-full rounded-xl overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Top Tags */}
          <div className="flex items-center gap-4 text-white">
            <span className="bg-purple-600 px-4 py-1 rounded-full text-sm font-medium">Featured Story</span>
            <div className="flex items-center gap-4 text-sm">
              <span>{category}</span>
              <span>{source}</span>
              <span>{date}</span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="mt-auto text-white">
            <h2 className="text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{title}</h2>
            <p className="text-lg mb-2 text-gray-200 max-w-2xl">{subtitle}</p>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

