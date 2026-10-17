import React from 'react';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section className="py-16 sm:py-24 bg-cream-100/50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card border border-cream-300 bg-cream-100">
              <Image
                src="/images/about.jpg"
                alt="Ana Beatriz Lima preparando bolos artesanais no ateliê bbb"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Small decorative corner tag */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 bg-cream-50 p-4 rounded-xl border border-cream-300 shadow-floating text-left max-w-[200px] hidden sm:block">
              <div className="font-serif font-semibold text-cocoa-900 text-sm">
                Ana Beatriz Lima
              </div>
              <div className="text-xs text-cocoa-600 mt-0.5">
                Confeiteira e fundadora
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700 mb-2 block">
              Quem faz
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cocoa-900 leading-tight mb-6">
              Receitas de família, feitas uma a uma.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-cocoa-600 leading-relaxed max-w-2xl">
              <p>
                A bbb nasceu na cozinha da vó Lurdes, entre panelas de cobre e
                cadernos de receita manchados de chocolate. Hoje seguimos o mesmo
                ritmo: poucas encomendas por dia, massa batida na hora e
                brigadeiro mexido até soltar do fundo da panela.
              </p>
              <p>
                Não temos vitrine de loja — cada bolo é feito para uma data, uma
                pessoa, uma história. Por isso pedimos antecedência e
                caprichamos no recado.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 mt-8 border-t border-cream-200 w-full max-w-xl">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-cocoa-900">
                  2016
                </div>
                <div className="text-xs sm:text-sm text-cocoa-600 mt-0.5">
                  primeira encomenda
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-cocoa-900">
                  12
                </div>
                <div className="text-xs sm:text-sm text-cocoa-600 mt-0.5">
                  sabores fixos + sazonais
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-cocoa-900">
                  30
                </div>
                <div className="text-xs sm:text-sm text-cocoa-600 mt-0.5">
                  pedidos por semana, no máximo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
