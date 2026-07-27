'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { EnvelopeScene } from '@/components/envelope-scene'
import { FloatingHearts } from '@/components/floating-hearts'
import { GoldenParticles } from '@/components/golden-particles'
import { LetterContent } from '@/components/letter-content'
import { MemoriesGallery } from '@/components/memories-gallery'
import { MusicPlayer } from '@/components/music-player'
import { OurSong } from '@/components/our-song'
import { Reveal } from '@/components/reveal'
import { ResponseForm } from '@/components/response-form'
import { RosePetals } from '@/components/rose-petals'
import { WelcomeScreen } from '@/components/welcome-screen'

export function LoveLetter() {
  const [started, setStarted] = useState(false)
  const [opened, setOpened] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const letterRef = useRef<HTMLDivElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)

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

  // Effet de parallaxe subtil sur l'arrière-plan (désactivé si mouvement réduit).
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0) scale(1.08)`
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      {/* Romantic backdrop with subtle parallax */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="fixed inset-0 -z-10 will-change-transform bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url(/romantic-bg.png)',
          transform: 'scale(1.08)',
        }}
      />
      {/* Voile ivoire + vignettage doré pour la profondeur */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-background/60"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, transparent 55%, oklch(0.56 0.17 22 / 0.12) 100%)',
        }}
      />

      <FloatingHearts />
      <RosePetals />
      <GoldenParticles />
      <MusicPlayer />

      {!started ? (
        <WelcomeScreen onStart={() => setStarted(true)} />
      ) : (
        <div className="animate-fade-in-up">
          <EnvelopeScene opened={opened} onOpen={handleOpen} />
        </div>
      )}

      {showLetter && (
        <section
          ref={letterRef}
          className="relative z-10 flex flex-col gap-16 px-5 pb-28 sm:px-8"
        >
          <Reveal>
            <LetterContent />
          </Reveal>
          <Reveal delay={80}>
            <OurSong />
          </Reveal>
          <Reveal delay={80}>
            <MemoriesGallery />
          </Reveal>
          <Reveal delay={80}>
            <ResponseForm />
          </Reveal>
        </section>
      )}
    </main>
  )
}
