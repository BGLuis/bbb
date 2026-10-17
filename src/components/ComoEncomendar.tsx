'use client';

import React from 'react';
import Image from 'next/image';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { useCart } from '../context/CartContext';

export default function ComoEncomendar() {
  const { openCart } = useCart();

  return (
    <section id="como-encomendar" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700 mb-2 block">
            Como encomendar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-cocoa-900 leading-tight">
            Do card ao WhatsApp em três passos.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Steps List */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-5 p-6 rounded-2xl bg-cream-100/60 border border-cream-300 hover:bg-cream-100 hover:border-cocoa-400/40 transition-all shadow-soft"
              >
                <div className="flex-shrink-0 font-serif text-2xl font-bold text-terracotta-700 bg-cream-50 w-12 h-12 rounded-xl flex items-center justify-center border border-cream-300 shadow-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-cocoa-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-cocoa-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Message Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-cream-50 rounded-2xl border border-cream-300 shadow-card p-6 sm:p-8">
              {/* WhatsApp App Mock Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-cream-200 mb-4">
                <div className="w-10 h-10 rounded-full bg-whatsapp-600 flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm">
                  bbb
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-cocoa-900 leading-tight">
                    bbb · Bons Brigadeiros e Bolos
                  </h3>
                  <p className="text-xs text-cocoa-600">
                    Prévia da mensagem gerada pela sacola
                  </p>
                </div>
              </div>

              {/* Message Bubble */}
              <div className="bg-cream-100/80 rounded-xl p-4 sm:p-5 border border-cream-200/80 text-xs sm:text-sm text-cocoa-800 font-sans leading-relaxed whitespace-pre-line font-mono mb-6 shadow-inner">
                {`Olá, bbb! 🎂 Quero fazer uma encomenda:

• 1x Bolo de brigadeiro com morango — M (20–25 fatias) — R$ 230,00
• 1x Caixa 16 brigadeiros gourmet — R$ 72,00

Total estimado: R$ 302,00
📅 Data: sáb, 24/10 · 🚗 Entrega: Rua Harmonia, 123 — Vila Madalena
📝 Escrever no bolo: “Feliz 30 anos, Ana”

Nome: Mariana · Tel: (11) 90000-0000`}
              </div>

              {/* Action */}
              <button
                onClick={() => openCart(1)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp-600 hover:bg-whatsapp-700 text-white font-semibold text-sm sm:text-base active:scale-98 transition-all shadow-md"
              >
                <Image
                  src="/icons/message.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 brightness-0 invert"
                />
                <span>Enviar pedido no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
