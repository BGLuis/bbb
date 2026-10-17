'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FAQS } from '../data/content';

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-cream-100/50 border-t border-cream-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700 mb-2 block">
            Dúvidas frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-cocoa-900 leading-tight mb-4">
            Antes de encomendar
          </h2>
          <p className="text-base text-cocoa-600 leading-relaxed mb-6">
            Não achou sua resposta? Chama no WhatsApp — respondemos de terça a
            sábado, das 9h às 18h.
          </p>

          <a
            href="https://wa.me/5511900000000?text=Ol%C3%A1%2C%20bbb!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20encomendas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream-50 border border-cream-300 text-cocoa-900 text-sm font-semibold hover:bg-cream-200 active:scale-98 transition-all shadow-soft"
          >
            <Image
              src="/icons/message.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 text-cocoa-900"
            />
            <span>Perguntar no WhatsApp</span>
          </a>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-cream-50 rounded-2xl border border-cream-300 overflow-hidden shadow-soft transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-700 transition-colors hover:bg-cream-100/40"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-cocoa-900 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-cream-100 border border-cream-200 flex items-center justify-center text-cocoa-800 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-cream-200' : ''
                    }`}
                  >
                    <Image
                      src="/icons/chevron-down.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-cocoa-600 leading-relaxed border-t border-cream-200/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
