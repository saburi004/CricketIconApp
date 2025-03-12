import Image from "next/image"
import Link from "next/link"

interface NewsCardProps {
  image: string
  date: string
  source: string
  title: string
}

export default function NewsCard({ image, date, source, title }: NewsCardProps) {
  return (
    <Link href="#" className="block group">
      <div className="bg-white rounded-xl overflow-hidden flex h-[100px]">
        <div className="w-[100px] relative flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{date}</span>
            <span>{source}</span>
          </div>
          <h2 className="text-base font-semibold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  )
}

