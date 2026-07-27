'use client'

import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

type EnvelopeSceneProps = {
  opened: boolean
  onOpen: () => void
}

export function EnvelopeScene({ opened, onOpen }: EnvelopeSceneProps) {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-6 py-16">
      <p className="mb-10 text-center font-serif text-2xl italic text-muted-foreground sm:text-3xl">
        {opened ? 'Pour toi, avec tout mon cœur…' : 'Une lettre t’attend'}
      </p>

      <button
        type="button"
        onClick={onOpen}
        disabled={opened}
        aria-label="Ouvrir l’enveloppe"
        className={cn(
          'group relative h-52 w-80 max-w-[86vw] cursor-pointer touch-manipulation rounded-lg outline-none transition-transform duration-700 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:h-60 sm:w-96',
          !opened && 'animate-envelope-bob hover:scale-[1.03] active:scale-[0.99]',
          opened && 'pointer-events-none -translate-y-4 scale-95',
        )}
      >
        {/* Envelope body */}
        <div className="absolute inset-0 rounded-lg bg-accent shadow-2xl shadow-primary/20" />

        {/* Letter that lifts out */}
        <div
          className={cn(
            'absolute inset-x-4 bottom-3 top-3 rounded-md bg-card shadow-md transition-all duration-1000 ease-out',
            opened
              ? '-translate-y-24 opacity-100 sm:-translate-y-28'
              : 'translate-y-0',
          )}
        >
          <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
            <Heart className="h-7 w-7 fill-primary text-primary" />
            <span className="font-serif text-lg text-foreground">
              Je t’aime
            </span>
          </div>
        </div>

        {/* Left & right pockets */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div
            className="absolute inset-y-0 left-0 w-1/2 bg-secondary"
            style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
          />
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-secondary"
            style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
          />
          {/* Bottom front */}
          <div
            className="absolute inset-x-0 bottom-0 top-0 bg-accent"
            style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }}
          />
        </div>

        {/* Top flap */}
        <div
          className={cn(
            'absolute inset-x-0 top-0 origin-top transition-transform duration-700 ease-in-out',
            opened
              ? '[transform:rotateX(180deg)] delay-0'
              : '[transform:rotateX(0deg)] delay-700',
          )}
          style={{ height: '55%', transformStyle: 'preserve-3d' }}
        >
          <div
            className="h-full w-full bg-primary"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          />
        </div>

        {/* Wax seal */}
        <div
          className={cn(
            'absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-500',
            opened ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
          )}
        >
          <Heart className="h-6 w-6 fill-current" />
        </div>
      </button>

      {!opened && (
        <p className="mt-10 animate-pulse text-center text-sm font-medium text-primary">
          Touche l’enveloppe pour l’ouvrir
        </p>
      )}
    </div>
  )
}
