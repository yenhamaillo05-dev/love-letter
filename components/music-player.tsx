'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'

// A gentle, generative ambient melody built with the Web Audio API,
// so no external audio file is required. Disabled by default.
const MELODY = [
  { note: 523.25, dur: 1.2 }, // C5
  { note: 659.25, dur: 1.2 }, // E5
  { note: 783.99, dur: 1.2 }, // G5
  { note: 659.25, dur: 1.2 }, // E5
  { note: 587.33, dur: 1.2 }, // D5
  { note: 698.46, dur: 1.2 }, // F5
  { note: 880.0, dur: 1.6 }, // A5
  { note: 783.99, dur: 2.0 }, // G5
]

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const indexRef = useRef(0)

  const scheduleNote = useCallback(() => {
    const ctx = ctxRef.current
    const master = gainRef.current
    if (!ctx || !master) return

    const { note, dur } = MELODY[indexRef.current % MELODY.length]
    indexRef.current += 1

    const osc = ctx.createOscillator()
    const noteGain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = note

    const now = ctx.currentTime
    noteGain.gain.setValueAtTime(0.0001, now)
    noteGain.gain.exponentialRampToValueAtTime(0.5, now + 0.15)
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + dur)

    osc.connect(noteGain)
    noteGain.connect(master)
    osc.start(now)
    osc.stop(now + dur + 0.1)

    timerRef.current = setTimeout(scheduleNote, dur * 1000 * 0.9)
  }, [])

  const stop = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = null
    const master = gainRef.current
    const ctx = ctxRef.current
    if (master && ctx) {
      master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4)
    }
  }, [])

  const toggle = useCallback(() => {
    if (playing) {
      setPlaying(false)
      stop()
      return
    }

    if (!ctxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      const ctx = new AudioCtx()
      const master = ctx.createGain()
      master.gain.value = 0.0001
      master.connect(ctx.destination)
      ctxRef.current = ctx
      gainRef.current = master
    }

    const ctx = ctxRef.current
    const master = gainRef.current
    if (!ctx || !master) return
    void ctx.resume()
    master.gain.setValueAtTime(0.0001, ctx.currentTime)
    master.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1)

    setPlaying(true)
    scheduleNote()
  }, [playing, scheduleNote, stop])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      void ctxRef.current?.close()
    }
  }, [])

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={
        playing ? 'Couper la musique de fond' : 'Activer la musique de fond'
      }
      className={cn(
        'fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-md transition-colors',
        'hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        playing && 'border-primary/40 text-primary',
      )}
    >
      {playing ? (
        <Music className="h-4 w-4 animate-pulse" />
      ) : (
        <VolumeX className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">
        {playing ? 'Musique activée' : 'Musique'}
      </span>
    </button>
  )
}
