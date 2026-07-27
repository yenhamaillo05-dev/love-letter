'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

type FloatingHeart = {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
}

type FloatingHeartsProps = {
  count?: number
}

export function FloatingHearts({ count = 14 }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  // Generate randomized hearts only on the client to avoid SSR hydration mismatch.
  useEffect(() => {
    setHearts(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="animate-float-up absolute bottom-[-40px] text-primary"
          style={{
            left: `${h.left}%`,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          <Heart
            style={{ width: h.size, height: h.size }}
            className="fill-current"
          />
        </span>
      ))}
    </div>
  )
}
