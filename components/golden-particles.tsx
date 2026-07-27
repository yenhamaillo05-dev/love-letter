'use client'

import { useEffect, useState } from 'react'

type Particle = {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  twinkleDuration: number
}

type GoldenParticlesProps = {
  count?: number
}

/**
 * Fines particules lumineuses dorées qui s'élèvent doucement
 * en scintillant, pour une ambiance feutrée et haut de gamme.
 */
export function GoldenParticles({ count = 16 }: GoldenParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  // Généré côté client uniquement pour éviter les écarts d'hydratation.
  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 12,
        twinkleDuration: 2 + Math.random() * 3,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-particle-rise absolute bottom-0"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <span
            className="animate-twinkle block rounded-full"
            style={{
              width: p.size,
              height: p.size,
              animationDuration: `${p.twinkleDuration}s`,
              background:
                'radial-gradient(circle, oklch(0.92 0.13 88) 0%, oklch(0.78 0.12 84) 55%, transparent 100%)',
              boxShadow: '0 0 6px oklch(0.82 0.13 86 / 0.8)',
            }}
          />
        </span>
      ))}
    </div>
  )
}
