'use client'

import { Heart } from 'lucide-react'

type WelcomeScreenProps = {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="animate-fade-in-up flex min-h-[100svh] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="flex flex-wrap items-center justify-center gap-3 font-serif text-4xl font-semibold text-foreground text-balance sm:text-6xl">
          Acsa Olivia
          <Heart
            aria-hidden="true"
            className="h-8 w-8 fill-primary text-primary sm:h-11 sm:w-11"
          />
        </h1>

        <p className="max-w-md font-serif text-lg italic leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          Cette lettre a été écrite spécialement pour toi. Chaque mot vient du
          fond de mon cœur. Prends quelques instants pour la découvrir.
        </p>

        <button
          type="button"
          onClick={onStart}
          className="group mt-2 inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary px-8 py-3.5 font-serif text-lg text-primary-foreground shadow-lg shadow-primary/25 outline-none transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-primary/30 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Heart className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110" />
          Ouvrir la lettre
        </button>
      </div>
    </div>
  )
}
