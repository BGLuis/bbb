import React from 'react';
import Image from 'next/image';
import { DIFFERENTIALS } from '../data/content';

export default function Differentials() {
  return (
    <section className="bg-cream-100/70 border-y border-cream-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Nossos diferenciais artesanais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 p-2 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream-50 border border-cream-300 flex items-center justify-center text-terracotta-500 shadow-soft group-hover:border-terracotta-500/50 group-hover:scale-105 transition-all">
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 text-terracotta-500"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-cocoa-900 leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-cocoa-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
