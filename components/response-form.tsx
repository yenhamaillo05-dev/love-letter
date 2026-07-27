'use client'

import { useState } from 'react'
import { Heart, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const questions = [
  {
    id: 'ressenti',
    label: 'Qu’as-tu ressenti en lisant cette lettre ?',
    placeholder: 'Dis-moi ce que ton cœur a murmuré…',
    rows: 3,
  },
  {
    id: 'souvenir',
    label: 'Quel est ton plus beau souvenir avec moi ?',
    placeholder: 'Ce moment que tu gardes précieusement…',
    rows: 3,
  },
  {
    id: 'avenir',
    label: 'Que souhaites-tu pour notre avenir ?',
    placeholder: 'Les rêves que nous construirons ensemble…',
    rows: 3,
  },
]

export function ResponseForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }

  if (submitted) {
    return (
      <div className="animate-letter-in mx-auto w-full max-w-2xl rounded-2xl border border-border/60 bg-card/90 p-10 text-center shadow-xl shadow-primary/10 backdrop-blur-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Heart className="h-7 w-7 fill-current" />
        </div>
        <h3 className="font-serif text-3xl font-semibold text-foreground">
          Merci du fond du cœur
        </h3>
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
          Tes mots comptent plus que tout pour moi. Je les garderai
          précieusement.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl rounded-2xl border border-border/60 bg-card/90 p-7 shadow-xl shadow-primary/10 backdrop-blur-sm sm:p-10"
    >
      <div className="mb-8 text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          À ton tour de m’écrire
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Réponds-moi avec ton cœur, il n’y a pas de mauvaise réponse.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <Label
              htmlFor={q.id}
              className="font-serif text-lg font-medium text-foreground"
            >
              {q.label}
            </Label>
            <Textarea
              id={q.id}
              name={q.id}
              rows={q.rows}
              placeholder={q.placeholder}
              className="resize-none bg-background/60 text-base leading-relaxed"
            />
          </div>
        ))}

        <div className="space-y-2 rounded-xl border border-primary/25 bg-accent/40 p-4">
          <Label
            htmlFor="message"
            className="font-serif text-xl font-semibold text-primary"
          >
            Ton message pour moi
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Écris-moi tout ce que tu ressens, sans retenue…"
            className="resize-none bg-card text-base leading-relaxed"
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-8 h-12 w-full gap-2 rounded-full text-base font-semibold"
      >
        <Send className="h-4 w-4" />
        Envoyer ma réponse
      </Button>
    </form>
  )
}
