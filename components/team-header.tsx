import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface TeamHeaderProps {
  teamName: string
}

export default function TeamHeader({ teamName }: TeamHeaderProps) {
  return (
    <div className="w-full bg-[#f8f9fa] border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-12">
          <Link href="/shop" className="text-blue-900 hover:text-blue-700 flex items-center gap-2 font-medium">
            Team {teamName} <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

