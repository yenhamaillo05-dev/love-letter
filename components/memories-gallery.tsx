'use client'

import { Heart } from 'lucide-react'

/**
 * Pour remplacer une photo, changez simplement la valeur "src"
 * par le chemin de votre image (ex: "/nos-souvenirs/1.jpg").
 * Le champ "alt" décrit l'image pour l'accessibilité.
 */
const photos = [
  { src: '/placeholder.svg?height=600&width=600', alt: 'Photo 1', label: 'Photo 1' },
  { src: '/placeholder.svg?height=600&width=600', alt: 'Photo 2', label: 'Photo 2' },
  { src: '/placeholder.svg?height=600&width=600', alt: 'Photo 3', label: 'Photo 3' },
  { src: '/placeholder.svg?height=600&width=600', alt: 'Photo 4', label: 'Photo 4' },
]

export function MemoriesGallery() {
  return (
    <section className="mx-auto w-full max-w-2xl">
      {/* Ornament + titre */}
      <div className="mb-8 flex items-center justify-center gap-3 text-gold">
        <span className="h-px w-12 bg-gold/50" />
        <Heart className="h-5 w-5 fill-current" />
        <span className="h-px w-12 bg-gold/50" />
      </div>

      <h2 className="text-balance text-center font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        Nos plus beaux souvenirs
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {photos.map((photo, i) => (
          <figure
            key={i}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lg shadow-primary/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20"
          >
            <img
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Voile dégradé pour lisibilité de la légende */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <figcaption className="pointer-events-none absolute bottom-3 left-0 right-0 text-center font-serif text-lg italic text-primary-foreground opacity-0 drop-shadow transition-opacity duration-300 group-hover:opacity-100">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
