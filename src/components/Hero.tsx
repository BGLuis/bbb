'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/content';

export default function Hero() {
  const { addItem, openCart } = useCart();
  const featuredProduct = PRODUCTS.find(p => p.id === 'bolo-brigadeiro-morango') || PRODUCTS[0];

  const handleAddFeatured = () => {
    addItem(featuredProduct, 'Mini', 1);
    openCart(1);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 border border-cream-300 text-cocoa-800 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-600" />
              Ateliê de confeitaria · São Paulo
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-cocoa-900 leading-[1.15] mb-6">
              Bolos e brigadeiros feitos à mão,{' '}
              <span className="italic font-normal text-terracotta-700">
                para datas que ficam.
              </span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-lg sm:text-xl text-cocoa-600 leading-relaxed max-w-2xl mb-8">
              Escolha na vitrine, monte sua sacola e envie o pedido pronto pelo
              WhatsApp. A gente confirma data, sabor e entrega em poucos minutos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#vitrine"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-terracotta-600 text-white font-semibold text-base hover:bg-terracotta-700 active:scale-98 transition-all shadow-md shadow-terracotta-600/20 w-full sm:w-auto"
              >
                <span>Ver vitrine</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-4 h-4 brightness-0 invert"
                />
              </a>

              <a
                href="https://wa.me/5511900000000?text=Ol%C3%A1%2C%20bbb!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20encomendas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-100 border border-cream-300 text-cocoa-900 font-semibold text-base hover:bg-cream-200 active:scale-98 transition-all w-full sm:w-auto"
              >
                <Image
                  src="/icons/message.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-4 h-4"
                />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-cream-200 w-full max-w-lg">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-cocoa-900">
                  +2.400
                </div>
                <div className="text-xs sm:text-sm text-cocoa-600 mt-0.5">
                  bolos entregues
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 font-serif text-2xl sm:text-3xl font-semibold text-cocoa-900">
                  <span>4,9</span>
                  <span className="text-terracotta-700 text-lg">★</span>
                </div>
                <div className="text-xs sm:text-sm text-cocoa-600 mt-0.5">
                  avaliação no Google
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-cocoa-900">
                  48h
                </div>
                <div className="text-xs sm:text-sm text-cocoa-600 mt-0.5">
                  de antecedência
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Featured Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background aura */}
              <div
                className="absolute -inset-4 bg-terracotta-100/50 rounded-3xl -rotate-2 -z-10 blur-sm"
                aria-hidden="true"
              />

              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card border border-cream-200 bg-cream-100">
                <Image
                  src="/images/hero.jpg"
                  alt="Bolo artesanal de brigadeiro com morangos frescos preparado no ateliê bbb"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Top Badge: feito sob encomenda */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-cream-50/90 backdrop-blur-md border border-cream-200 text-cocoa-800 text-[11px] font-semibold tracking-wide uppercase shadow-sm">
                  feito sob encomenda
                </div>
              </div>

              {/* Floating Featured Product Card (h2 to respect sequential heading order) */}
              <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-cream-50/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-cream-300 shadow-floating">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-terracotta-100 text-terracotta-700 text-[11px] font-semibold uppercase tracking-wider mb-1">
                      Bolo da semana
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-cocoa-900 leading-tight">
                      Brigadeiro com morango
                    </h2>
                    <p className="text-xs sm:text-sm text-cocoa-600 mt-0.5">
                      a partir de R$ 90 · Mini serve 4–6
                    </p>
                  </div>

                  <button
                    onClick={handleAddFeatured}
                    className="flex-shrink-0 inline-flex items-center justify-center p-3 rounded-full bg-terracotta-600 text-white hover:bg-terracotta-700 active:scale-95 transition-all shadow-md"
                    aria-label="Adicionar bolo da semana à sacola"
                  >
                    <Image
                      src="/icons/plus.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="w-4 h-4 brightness-0 invert"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
