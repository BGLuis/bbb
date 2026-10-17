'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SIZE_TABLE_BOLOS, SIZE_TABLE_BRIGADEIROS } from '../data/content';

export default function Tamanhos() {
  const [activeTab, setActiveTab] = useState<'bolos' | 'brigadeiros'>('bolos');

  return (
    <section id="tamanhos" className="py-16 sm:py-24 bg-cream-100/60 border-y border-cream-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700 mb-2 block">
            Tabela de tamanhos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-cocoa-900 leading-tight mb-4">
            Quanto bolo para quantas pessoas?
          </h2>
          <p className="text-base sm:text-lg text-cocoa-600 leading-relaxed mb-6">
            Calculamos uma fatia de 100 g por convidado. Na dúvida, escolha um
            tamanho acima — sobra é sempre bem-vinda.
          </p>

          {/* Antecedência Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50 border border-cream-300 text-cocoa-900 text-xs sm:text-sm font-medium shadow-soft">
            <Image
              src="/icons/clock.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 text-terracotta-700"
            />
            <span>Bolos com 48h de antecedência. Brigadeiros e docinhos com 24h.</span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-full bg-cream-200/80 border border-cream-300">
            <button
              onClick={() => setActiveTab('bolos')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'bolos'
                  ? 'bg-cream-50 text-cocoa-900 shadow-sm'
                  : 'text-cocoa-800 hover:text-cocoa-900'
              }`}
            >
              Bolos
            </button>
            <button
              onClick={() => setActiveTab('brigadeiros')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'brigadeiros'
                  ? 'bg-cream-50 text-cocoa-900 shadow-sm'
                  : 'text-cocoa-800 hover:text-cocoa-900'
              }`}
            >
              Brigadeiros gourmet
            </button>
          </div>
        </div>

        {/* Tables */}
        <div className="bg-cream-50 rounded-2xl border border-cream-300 overflow-hidden shadow-card">
          {activeTab === 'bolos' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-cream-200 bg-cream-100/50 text-xs font-bold uppercase text-cocoa-800 tracking-wider">
                    <th scope="col" className="py-4 px-6">Tamanho</th>
                    <th scope="col" className="py-4 px-6">Aro</th>
                    <th scope="col" className="py-4 px-6">Serve</th>
                    <th scope="col" className="py-4 px-6">Peso aprox.</th>
                    <th scope="col" className="py-4 px-6 text-right">Preço</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200 text-sm">
                  {SIZE_TABLE_BOLOS.map((row) => (
                    <tr
                      key={row.tamanho}
                      className="hover:bg-cream-100/40 transition-colors"
                    >
                      <td className="py-4 px-6 font-serif font-semibold text-cocoa-900 text-base">
                        {row.tamanho}
                      </td>
                      <td className="py-4 px-6 text-cocoa-700">{row.aro}</td>
                      <td className="py-4 px-6 text-cocoa-900 font-medium">{row.serve}</td>
                      <td className="py-4 px-6 text-cocoa-700">{row.peso}</td>
                      <td className="py-4 px-6 font-serif font-semibold text-cocoa-900 text-right text-base">
                        {row.preco}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-cream-200 bg-cream-100/50 text-xs font-bold uppercase text-cocoa-800 tracking-wider">
                    <th scope="col" className="py-4 px-6">Caixa</th>
                    <th scope="col" className="py-4 px-6">Ideal para</th>
                    <th scope="col" className="py-4 px-6 text-right">Preço</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200 text-sm">
                  {SIZE_TABLE_BRIGADEIROS.map((row) => (
                    <tr
                      key={row.caixa}
                      className="hover:bg-cream-100/40 transition-colors"
                    >
                      <td className="py-4 px-6 font-serif font-semibold text-cocoa-900 text-base">
                        {row.caixa}
                      </td>
                      <td className="py-4 px-6 text-cocoa-900 font-medium">
                        {row.ideal}
                      </td>
                      <td className="py-4 px-6 font-serif font-semibold text-cocoa-900 text-right text-base">
                        {row.preco}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-cocoa-600 max-w-xl mx-auto">
          Valores de referência para os sabores clássicos. Recheios especiais e
          decoração personalizada podem alterar o preço — tudo é confirmado
          antes do pagamento.
        </p>
      </div>
    </section>
  );
}
