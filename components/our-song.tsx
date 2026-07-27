'use client'

import { useState } from 'react'
import { Heart, Play } from 'lucide-react'

export function OurSong() {
  const [showNotice, setShowNotice] = useState(false)

  return (
    <section className="mx-auto w-full max-w-2xl">
      {/* Ornament + titre */}
      <div className="mb-8 flex items-center justify-center gap-3 text-gold">
        <span className="h-px w-12 bg-gold/50" />
        <Heart className="h-5 w-5 fill-current" />
        <span className="h-px w-12 bg-gold/50" />
      </div>

      <h2 className="text-balance text-center font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        Notre chanson
      </h2>

      {/* Disque vinyle animé */}
      <div className="mt-10 flex justify-center">
        <div className="relative h-56 w-56 sm:h-64 sm:w-64">
          {/* Halo doux */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
          />
          {/* Disque */}
          <div className="animate-vinyl-spin relative h-full w-full rounded-full border-4 border-gold/40 bg-[radial-gradient(circle_at_center,theme(colors.card)_0%,theme(colors.card)_18%,oklch(0.18_0.03_20)_18%,oklch(0.14_0.02_20)_100%)] shadow-2xl shadow-primary/30">
            {/* Sillons */}
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-full border border-gold/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-12 rounded-full border border-gold/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[4.5rem] rounded-full border border-gold/10"
            />
            {/* Étiquette centrale */}
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold/50 bg-primary text-primary-foreground shadow-inner">
              <Heart className="h-8 w-8 fill-current" />
            </div>
            {/* Trou central */}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
          </div>
        </div>
      </div>

      {/* Bouton élégant */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={() => setShowNotice(true)}
          className="group inline-flex items-center gap-3 rounded-full border border-gold/50 bg-primary px-8 py-3.5 font-serif text-lg italic text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Play className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110" />
          Lancer notre chanson
        </button>

        {showNotice && (
          <p
            role="status"
            className="animate-fade-in-up text-center font-serif text-base italic text-muted-foreground"
          >
            La musique sera ajoutée prochainement
          </p>
        )}
      </div>
    </section>
  )
}
