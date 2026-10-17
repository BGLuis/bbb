'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '../data/content';
import { Product, ProductCategory } from '../types';
import { useCart } from '../context/CartContext';

export default function Vitrine() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    PRODUCTS.forEach(p => {
      initial[p.id] = p.defaultSizeId;
    });
    return initial;
  });

  const { items, addItem, updateQuantity, openCart } = useCart();

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bolos', label: 'Bolos' },
    { id: 'brigadeiros', label: 'Brigadeiros' },
    { id: 'docinhos', label: 'Docinhos' },
    { id: 'kits', label: 'Kits festa' },
  ];

  const filteredProducts = selectedCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === (selectedCategory as ProductCategory));

  const handleSelectSize = (productId: string, sizeId: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: sizeId }));
  };

  return (
    <section id="vitrine" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700 mb-2 block">
            Vitrine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cocoa-900 leading-tight mb-4">
            Escolha, monte e peça em minutos.
          </h2>
          <p className="text-base sm:text-lg text-cocoa-600 leading-relaxed">
            Selecione o tamanho direto no card e adicione à sacola. O pedido
            chega montado no nosso WhatsApp.
          </p>

          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
            role="tablist"
            aria-label="Filtrar produtos por categoria"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cocoa-900 text-cream-50 shadow-sm'
                    : 'bg-cream-100 text-cocoa-800 border border-cream-300 hover:bg-cream-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map(product => {
            const currentSizeId = selectedSizes[product.id] || product.defaultSizeId;
            const currentSize = product.sizes.find(s => s.id === currentSizeId) || product.sizes[0];
            const cartItemId = `${product.id}-${currentSize.id}`;
            const inCartItem = items.find(item => item.id === cartItemId);

            return (
              <article
                key={product.id}
                className="group flex flex-col bg-cream-50 rounded-2xl border border-cream-300 overflow-hidden shadow-soft hover:shadow-card hover:border-cocoa-400/40 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
                    {product.tag && (
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${
                          product.tagVariant === 'pistachio'
                            ? 'bg-pistachio-100 text-pistachio-600 border border-pistachio-600/30'
                            : 'bg-terracotta-100 text-terracotta-700 border border-terracotta-600/30'
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}

                    {inCartItem && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-50/95 backdrop-blur-md border border-cream-300 text-cocoa-900 text-[11px] font-bold shadow-sm ml-auto">
                        <Image
                          src="/icons/check.svg"
                          alt=""
                          width={12}
                          height={12}
                          className="w-3 h-3 text-whatsapp-600"
                        />
                        Na sacola · {inCartItem.quantity}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold text-cocoa-900 leading-snug group-hover:text-terracotta-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-cocoa-600 leading-relaxed mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Size Selector */}
                  <div className="mt-auto pt-3 border-t border-cream-200">
                    <div className="flex items-center justify-between text-xs text-cocoa-800 mb-2">
                      <span className="font-semibold">Tamanho / Quantidade:</span>
                      <span className="text-[11px] text-cocoa-600 font-medium truncate max-w-[150px]">
                        {currentSize.portions}
                      </span>
                    </div>

                    <div
                      className="grid grid-cols-4 gap-1.5 p-1 rounded-lg bg-cream-100 border border-cream-200"
                      role="radiogroup"
                      aria-label={`Opções de tamanho para ${product.name}`}
                    >
                      {product.sizes.map(size => {
                        const isSelected = size.id === currentSizeId;
                        return (
                          <button
                            key={size.id}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() => handleSelectSize(product.id, size.id)}
                            className={`py-1.5 px-1 rounded-md text-xs font-semibold transition-all text-center truncate ${
                              isSelected
                                ? 'bg-cream-50 text-cocoa-900 shadow-sm border border-cream-300'
                                : 'text-cocoa-800 hover:text-cocoa-900'
                            }`}
                          >
                            {size.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="mt-5 flex items-center justify-between gap-3 pt-3">
                    <div>
                      <div className="text-[11px] text-cocoa-600 leading-none">
                        Preço
                      </div>
                      <div className="font-serif text-2xl font-semibold text-cocoa-900 leading-tight">
                        R$ {currentSize.price}
                      </div>
                    </div>

                    {inCartItem ? (
                      <div className="flex items-center gap-2 bg-cream-100 rounded-full border border-cream-300 p-1">
                        <button
                          onClick={() => updateQuantity(cartItemId, inCartItem.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-cream-50 hover:bg-cream-200 flex items-center justify-center text-cocoa-900 font-bold active:scale-95 transition-all"
                          aria-label={`Diminuir quantidade de ${product.name}`}
                        >
                          <Image
                            src="/icons/minus.svg"
                            alt=""
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5"
                          />
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-cocoa-900">
                          {inCartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(cartItemId, inCartItem.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-terracotta-600 hover:bg-terracotta-700 flex items-center justify-center text-white font-bold active:scale-95 transition-all"
                          aria-label={`Aumentar quantidade de ${product.name}`}
                        >
                          <Image
                            src="/icons/plus.svg"
                            alt=""
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 brightness-0 invert"
                          />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          addItem(product, currentSize.id, 1);
                          openCart(1);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-terracotta-600 text-white text-sm font-semibold hover:bg-terracotta-700 active:scale-95 transition-all shadow-sm"
                        aria-label={`Adicionar ${product.name} tamanho ${currentSize.label} à sacola`}
                      >
                        <Image
                          src="/icons/plus.svg"
                          alt=""
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 brightness-0 invert"
                        />
                        <span>Adicionar</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pricing notice disclaimer */}
        <p className="mt-8 text-center text-xs text-cocoa-600 max-w-xl mx-auto">
          Preços “a partir de” referem-se ao menor tamanho. O valor final aparece
          na sacola antes do envio.
        </p>
      </div>
    </section>
  );
}
