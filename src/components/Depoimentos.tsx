import React from 'react';
import { TESTIMONIALS } from '../data/content';

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700 mb-2 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-cocoa-900 leading-tight">
            Quem já levou um pedaço pra casa
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-2xl bg-cream-100/70 border border-cream-300 shadow-soft hover:shadow-card hover:bg-cream-100 transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-terracotta-700 text-lg mb-6" aria-label="Avaliação 5 estrelas">
                  {'★'.repeat(t.rating)}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-lg sm:text-xl font-light italic text-cocoa-900 leading-relaxed mb-6">
                  {t.quote}
                </blockquote>
              </div>

              {/* Author & Occasion */}
              <div className="pt-4 border-t border-cream-200">
                <div className="font-semibold text-cocoa-900 text-base">
                  {t.author}
                </div>
                <div className="text-xs text-cocoa-600 mt-0.5">
                  {t.occasion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
