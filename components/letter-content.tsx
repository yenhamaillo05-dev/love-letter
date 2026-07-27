'use client'

import { Heart } from 'lucide-react'

const paragraphs = [
  'Depuis le jour où nos chemins se sont croisés, le monde a pris des couleurs que je ne connaissais pas. Ton sourire est devenu ma lumière du matin, et ta voix, la mélodie qui apaise mes soirs.',
  'Je repense à tous ces instants, les grands comme les tout petits : nos rires sans raison, nos silences complices, nos rêves murmurés tard dans la nuit. Chacun d’eux est un trésor que je garde précieusement.',
  'Avec toi, j’ai appris ce que veut dire aimer vraiment : c’est vouloir ton bonheur autant que le mien, c’est te choisir encore et encore, chaque jour, malgré tout.',
  'Alors merci. Merci d’exister, merci de m’aimer comme je suis, merci de rendre la vie plus douce simplement en étant toi.',
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
          Mon amour,
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
