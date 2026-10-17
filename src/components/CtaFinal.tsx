'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function CtaFinal() {
  const { openCart } = useCart();

  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-cocoa-900 text-cream-50 p-8 sm:p-12 lg:p-16 shadow-floating">
          {/* Subtle background glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-terracotta-600/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-pistachio-600/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl text-center sm:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-cream-50/10 border border-cream-50/20 text-terracotta-100 text-xs font-semibold uppercase tracking-widest mb-6">
              Agenda aberta
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Tem uma data especial chegando?
            </h2>

            <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed mb-8">
              Reserve com antecedência: atendemos no máximo 30 pedidos por semana
              para manter cada detalhe feito à mão.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <a
                href="#vitrine"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta-600 text-white font-semibold text-base hover:bg-terracotta-700 active:scale-95 transition-all shadow-md shadow-terracotta-600/30"
              >
                <span>Montar meu pedido</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-4 h-4 brightness-0 invert"
                />
              </a>

              <button
                onClick={() => openCart(1)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 border border-cream-50/20 font-semibold text-base transition-all"
              >
                <span>Abrir sacola</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
