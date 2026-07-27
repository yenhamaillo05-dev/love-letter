'use client'

import { Heart } from 'lucide-react'

const paragraphs = [
  'Le 7 avril 2026, le destin a posé ton regard dans le mien, et sans le savoir encore, ma vie a changé pour toujours. Ce jour-là, je ne rencontrais pas seulement une femme d’une beauté rare : je rencontrais celle qui allait devenir le battement de mon cœur.',
  'Puis vint le 11 mai 2026, ce jour béni où nous avons décidé de marcher ensemble, main dans la main. C’est là que notre histoire a vraiment commencé, comme une promesse murmurée à l’univers, comme une évidence que rien ni personne ne pourrait défaire.',
  'Depuis, chaque instant passé à tes côtés est un trésor. Ton sourire illumine mes matins les plus gris, ta voix apaise mes nuits les plus longues, et ta présence donne un sens à tout ce que je fais. Tu es ma paix, mon refuge, ma plus belle raison d’aimer.',
  'Alors merci, mon Acsa Olivia, d’avoir croisé mon chemin ce 7 avril, et d’avoir choisi mon cœur ce 11 mai. Je te choisis à mon tour, encore et encore, aujourd’hui et pour tous les jours qui nous restent à écrire ensemble.',
]

export function LetterContent() {
  return (
    <article className="relative mx-auto w-full max-w-2xl">
      <div className="animate-letter-in rounded-2xl border border-border/60 bg-card/90 p-7 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-12">
        {/* Ornament */}
        <div className="mb-8 flex items-center justify-center gap-3 text-primary">
          <span className="h-px w-12 bg-primary/40" />
          <Heart className="h-5 w-5 fill-current" />
          <span className="h-px w-12 bg-primary/40" />
        </div>

        <h1 className="text-balance text-center font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Mon Acsa Olivia,
        </h1>

        <div className="mt-8 space-y-6">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-pretty font-serif text-lg leading-relaxed text-foreground/90 sm:text-xl"
            >
              {text}
            </p>
          ))}
        </div>

        <p className="mt-10 text-right font-serif text-2xl italic text-primary">
          À toi, pour toujours.
        </p>
      </div>
    </article>
  )
}
