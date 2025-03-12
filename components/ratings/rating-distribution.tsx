import { cn } from "@/lib/utils"

interface RatingDistributionProps {
  ratings: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  totalRatings: number
  className?: string
}

export default function RatingDistribution({ ratings, totalRatings, className }: RatingDistributionProps) {
  const stars = [5, 4, 3, 2, 1]

  return (
    <div className={cn("space-y-2", className)}>
      {stars.map((star) => {
        const count = ratings[star as keyof typeof ratings] || 0
        const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0

        return (
          <div key={star} className="flex items-center gap-2 text-sm">
            <div className="w-16 text-gray-600">{star} star</div>
            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${percentage}%` }} />
            </div>
            <div className="w-12 text-right text-gray-600">{percentage.toFixed(0)}%</div>
          </div>
        )
      })}
    </div>
  )
}

