"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ImageCarousel({
  images,
  alt,
  accentClass = "bg-emerald-500",
}: {
  images: string[];
  alt: string;
  accentClass?: string;
}) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="group relative w-full rounded-2xl overflow-hidden border border-[#dee2e6] dark:border-slate-800 shadow-md">
      {/* Sizer: invisible first image keeps container height stable */}
      <img src={images[0]} alt="" aria-hidden className="w-full h-auto object-contain block invisible" />
      {/* Stacked images crossfade */}
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} Screenshot ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Carousel Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto p-2 rounded-full bg-white/90 dark:bg-black/60 text-slate-900 dark:text-white hover:scale-110 transition-transform backdrop-blur-sm shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto p-2 rounded-full bg-white/90 dark:bg-black/60 text-slate-900 dark:text-white hover:scale-110 transition-transform backdrop-blur-sm shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm border border-black/10 ${
              idx === current ? `w-6 ${accentClass}` : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
