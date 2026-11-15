'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { Photo } from '@/lib/data/destinations';

const INTERVAL_MS = 6500;

/** Full-bleed background that cross-fades between real photos, with a slow zoom on the active one. */
export function HeroSlideshow({ slides, captions }: { slides: Photo[]; captions: string[] }) {
  const [active, setActive] = useState(0);
  // Slides are mounted progressively (current + next) so the first visit only downloads 2 photos.
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0, 1]));

  const go = (i: number) => {
    setActive(i);
    setMounted((m) => (m.has(i) && m.has((i + 1) % slides.length) ? m : new Set([...m, i, (i + 1) % slides.length])));
  };

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || slides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % slides.length;
        setMounted((m) => (m.has((next + 1) % slides.length) ? m : new Set([...m, next, (next + 1) % slides.length])));
        return next;
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const current = slides[active];

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((slide, i) => mounted.has(i) && (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              key={i === active ? `${slide.src}-on` : slide.src}
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover brightness-[0.62] ${i === active ? 'animate-kenburns' : ''}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-[#051017]/85 via-[#051017]/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#051017]/70 to-transparent"></div>
      </div>

      {/* caption + progress indicators */}
      <div className="absolute bottom-6 inset-x-0 z-10">
        <div className="container mx-auto px-6 flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Slides">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={captions[i] ?? slide.alt}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-secondary' : 'w-4 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
          <p className="text-white/80 text-sm flex items-center gap-2 sm:text-end" aria-live="polite">
            <MapPin size={16} className="text-secondary shrink-0" />
            <span>
              {captions[active]}
              <span className="text-white/45"> · © {current.author}{current.license ? `, ${current.license}` : ''}</span>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
