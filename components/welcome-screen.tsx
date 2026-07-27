'use client'

import { Heart } from 'lucide-react'

type WelcomeScreenProps = {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="animate-fade-in-up flex min-h-[100svh] flex-col items-center justify-center px-6 py-16 text-center [padding-top:calc(4rem+env(safe-area-inset-top))]">
      <div className="flex flex-col items-center gap-8">
        {/* Ornement doré */}
        <div className="flex items-center justify-center gap-3 text-gold">
          <span className="h-px w-10 bg-gold/50" />
          <Heart aria-hidden="true" className="h-4 w-4 fill-current" />
          <span className="h-px w-10 bg-gold/50" />
        </div>

        <h1 className="relative flex flex-wrap items-center justify-center gap-3 font-serif text-5xl font-semibold tracking-tight text-foreground text-balance sm:text-7xl">
          Acsa Olivia
          <span className="relative inline-flex">
            <span
              aria-hidden="true"
              className="animate-soft-glow absolute inset-0 -z-10 rounded-full bg-primary/40 blur-lg"
            />
            <Heart
              aria-hidden="true"
              className="h-9 w-9 fill-primary text-primary sm:h-12 sm:w-12"
            />
          </span>
        </h1>

        <p className="max-w-md font-serif text-xl italic leading-relaxed text-muted-foreground text-pretty sm:text-2xl">
          Cette lettre a été écrite spécialement pour toi. Chaque mot vient du
          fond de mon cœur. Prends quelques instants pour la découvrir.
        </p>

        <button
          type="button"
          onClick={onStart}
          className="group relative mt-2 inline-flex touch-manipulation items-center gap-2.5 overflow-hidden rounded-full border border-gold/50 bg-primary px-9 py-4 font-serif text-lg text-primary-foreground shadow-lg shadow-primary/25 outline-none transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-primary/35 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
        >
          {/* Reflet doré au survol */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          <Heart className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110" />
          Ouvrir la lettre
        </button>
      </div>
    </div>
  )
}
