'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { EnvelopeScene } from '@/components/envelope-scene'
import { FloatingHearts } from '@/components/floating-hearts'
import { LetterContent } from '@/components/letter-content'
import { MemoriesGallery } from '@/components/memories-gallery'
import { MusicPlayer } from '@/components/music-player'
import { ResponseForm } from '@/components/response-form'

export function LoveLetter() {
  const [opened, setOpened] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const letterRef = useRef<HTMLDivElement | null>(null)

  const handleOpen = useCallback(() => {
    if (opened) return
    setOpened(true)
    // Reveal the letter once the envelope animation has played.
    window.setTimeout(() => setShowLetter(true), 1400)
  }, [opened])

  useEffect(() => {
    if (showLetter && letterRef.current) {
      letterRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showLetter])

  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      {/* Romantic backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(/romantic-bg.png)' }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-background/55"
      />

      <FloatingHearts />
      <MusicPlayer />

      <EnvelopeScene opened={opened} onOpen={handleOpen} />

      {showLetter && (
        <section
          ref={letterRef}
          className="relative z-10 flex flex-col gap-12 px-5 pb-24 sm:px-8"
        >
          <LetterContent />
          <div className="animate-fade-in-up">
            <MemoriesGallery />
          </div>
          <div className="animate-fade-in-up">
            <ResponseForm />
          </div>
        </section>
      )}
    </main>
  )
}
