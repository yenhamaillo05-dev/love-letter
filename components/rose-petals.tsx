'use client'

import { useEffect, useState } from 'react'

type Petal = {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  sway: number
  swayDuration: number
  hue: number
  rotate: number
}

type RosePetalsProps = {
  count?: number
}

/**
 * Pétales de roses qui tombent lentement et se balancent.
 * Chaque pétale est un élément décoratif léger (aucune image),
 * optimisé pour rester fluide sur mobile.
 */
export function RosePetals({ count = 12 }: RosePetalsProps) {
  const [petals, setPetals] = useState<Petal[]>([])

  // Généré côté client uniquement pour éviter les écarts d'hydratation.
  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        delay: Math.random() * 16,
        duration: 14 + Math.random() * 12,
        sway: 16 + Math.random() * 28,
        swayDuration: 3 + Math.random() * 3,
        hue: Math.random(),
        rotate: Math.random() * 360,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="animate-petal-fall absolute top-0"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <span
            className="animate-petal-sway block"
            style={
              {
                '--sway': `${p.sway}px`,
                animationDuration: `${p.swayDuration}s`,
              } as React.CSSProperties
            }
          >
            <span
              className="block"
              style={{
                width: p.size,
                height: p.size * 1.15,
                transform: `rotate(${p.rotate}deg)`,
                borderRadius: '150% 0 150% 0',
                background:
                  p.hue > 0.5
                    ? 'linear-gradient(135deg, oklch(0.7 0.17 24) 0%, oklch(0.56 0.17 22) 100%)'
                    : 'linear-gradient(135deg, oklch(0.82 0.1 30) 0%, oklch(0.66 0.16 20) 100%)',
                boxShadow: '0 1px 3px oklch(0.4 0.1 20 / 0.25)',
                opacity: 0.85,
              }}
            />
          </span>
        </span>
      ))}
    </div>
  )
}
