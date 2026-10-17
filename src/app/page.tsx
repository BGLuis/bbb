import React from 'react';
import { CartProvider } from '../context/CartContext';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Differentials from '../components/Differentials';
import Vitrine from '../components/Vitrine';
import Tamanhos from '../components/Tamanhos';
import ComoEncomendar from '../components/ComoEncomendar';
import Sobre from '../components/Sobre';
import Depoimentos from '../components/Depoimentos';
import Duvidas from '../components/Duvidas';
import CtaFinal from '../components/CtaFinal';
import Footer from '../components/Footer';
import FloatingCart from '../components/FloatingCart';
import dynamic from 'next/dynamic';

const CartDrawer = dynamic(() => import('../components/CartDrawer'));

export default function Home() {
  return (
    <CartProvider>
      <div className="relative min-h-screen flex flex-col bg-cream-50 text-cocoa-900 selection:bg-terracotta-100 selection:text-cocoa-900">
        {/* Skip to main content for 100% WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-terracotta-500 text-white font-semibold rounded-md shadow-lg"
        >
          Pular para o conteúdo principal
        </a>

        {/* Global Navigation */}
        <Nav />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-grow">
          <Hero />
          <Differentials />
          <Vitrine />
          <Tamanhos />
          <ComoEncomendar />
          <Sobre />
          <Depoimentos />
          <Duvidas />
          <CtaFinal />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Bottom Floating Cart Bar */}
        <FloatingCart />

        {/* Checkout & Sacola Drawer */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
