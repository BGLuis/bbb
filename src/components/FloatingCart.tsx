'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function FloatingCart() {
  const { totalItems, subtotal, isCartOpen, openCart } = useCart();

  if (totalItems === 0 || isCartOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-5 inset-x-4 max-w-md mx-auto z-30 animate-slideUp">
      <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-cocoa-900 text-cream-50 shadow-floating border border-cream-50/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-cream-50/10 flex items-center justify-center text-white">
            <Image
              src="/icons/bag.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 brightness-0 invert"
            />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-terracotta-600 rounded-full border-2 border-cocoa-900">
              {totalItems}
            </span>
          </div>

          <div>
            <div className="text-xs text-cream-200/80">Sua sacola</div>
            <div className="font-serif font-semibold text-base sm:text-lg text-cream-50 leading-tight">
              R$ {subtotal.toFixed(2).replace('.', ',')}
            </div>
          </div>
        </div>

        <button
          onClick={() => openCart(1)}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-terracotta-600 text-white font-semibold text-sm hover:bg-terracotta-700 active:scale-95 transition-all shadow-sm"
        >
          <span>Fazer pedido</span>
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={14}
            height={14}
            className="w-3.5 h-3.5 brightness-0 invert"
          />
        </button>
      </div>
    </div>
  );
}
