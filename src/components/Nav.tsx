'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function Nav() {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Vitrine', href: '#vitrine' },
    { label: 'Tamanhos', href: '#tamanhos' },
    { label: 'Como encomendar', href: '#como-encomendar' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md border-b border-cream-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 rounded-md py-1"
          >
            <span className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-cocoa-900 group-hover:text-terracotta-600 transition-colors">
              bbb<span className="text-terracotta-600">.</span>
            </span>
            <span className="border-l border-cream-300 pl-3 text-xs leading-tight font-medium text-cocoa-600 hidden sm:block">
              bons brigadeiros<br />&amp; bolos
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cocoa-800 hover:text-terracotta-700 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openCart(1)}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cream-100 border border-cream-300 text-cocoa-900 text-sm font-semibold hover:bg-cream-200 hover:border-cocoa-600 active:scale-95 transition-all shadow-sm"
              aria-label={`Abrir sacola com ${totalItems} itens`}
            >
              <span className="relative flex items-center justify-center w-5 h-5">
                <Image
                  src="/icons/bag.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 text-cocoa-900"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-terracotta-600 rounded-full">
                    {totalItems}
                  </span>
                )}
              </span>
              <span className="hidden sm:inline">Fazer pedido</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-cocoa-800 hover:bg-cream-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              <Image
                src={mobileMenuOpen ? '/icons/x.svg' : '/icons/menu.svg'}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-cream-200 flex flex-col gap-2 animate-fadeIn"
            aria-label="Menu móvel"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-cocoa-800 hover:bg-cream-100 hover:text-terracotta-700 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
