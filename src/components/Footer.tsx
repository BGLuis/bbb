import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-300 pt-16 pb-12 text-cocoa-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-cream-200">
          {/* Brand Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a
              href="#"
              className="flex items-center gap-3 mb-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-700 rounded"
            >
              <span className="font-serif text-3xl font-semibold tracking-tight text-cocoa-900 group-hover:text-terracotta-700 transition-colors">
                bbb<span className="text-terracotta-700">.</span>
              </span>
              <span className="border-l border-cream-300 pl-3 text-xs leading-tight font-medium text-cocoa-800">
                bons brigadeiros<br />&amp; bolos
              </span>
            </a>

            <p className="text-sm text-cocoa-700 leading-relaxed max-w-sm">
              Confeitaria artesanal sob encomenda em São Paulo. Bolos, brigadeiros
              e docinhos feitos à mão, um pedido de cada vez.
            </p>
          </div>

          {/* Ateliê */}
          <div>
            <h2 className="font-serif text-base font-semibold text-cocoa-900 mb-4">
              Ateliê
            </h2>
            <address className="not-italic text-sm text-cocoa-700 space-y-2">
              <p>Rua Harmonia, 123 — Vila Madalena</p>
              <p>Ter a sáb · 9h às 18h</p>
              <p className="text-cocoa-600">Retirada com hora marcada</p>
            </address>
          </div>

          {/* Encomendas */}
          <div>
            <h2 className="font-serif text-base font-semibold text-cocoa-900 mb-4">
              Encomendas
            </h2>
            <ul className="text-sm text-cocoa-700 space-y-2.5">
              <li>
                <a
                  href="https://wa.me/5511900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta-700 flex items-center gap-2 transition-colors"
                >
                  <Image
                    src="/icons/phone.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>(11) 90000-0000 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta-700 flex items-center gap-2 transition-colors"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>@bbb.confeitaria</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="font-serif text-base font-semibold text-cocoa-900 mb-4">
              Navegação
            </h2>
            <ul className="text-sm text-cocoa-700 space-y-2">
              <li>
                <a href="#vitrine" className="hover:text-terracotta-700 transition-colors">
                  Vitrine
                </a>
              </li>
              <li>
                <a href="#tamanhos" className="hover:text-terracotta-700 transition-colors">
                  Tabela de tamanhos
                </a>
              </li>
              <li>
                <a href="#como-encomendar" className="hover:text-terracotta-700 transition-colors">
                  Como encomendar
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-terracotta-700 transition-colors">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cocoa-700">
          <p>© {new Date().getFullYear()} bbb — Bons Brigadeiros e Bolos</p>
          <p>Marca fictícia · projeto de portfólio</p>
        </div>
      </div>
    </footer>
  );
}
