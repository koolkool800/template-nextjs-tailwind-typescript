import React from "react"
import { OtherIcon, StarIcon } from "./icons"

export const ListStars: React.FC<{
  className?: string
  currentStars: number
}> = ({ className, currentStars }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    {new Array(5).fill(0).map((_, index) => (
      <StarIcon
        className={
          index + 1 <= currentStars ? "text-[#F1B940]" : "text-[#B9B7B7]"
        }
      />
    ))}
  </div>
)
