'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CartItem, CheckoutData, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, sizeId: string, quantity?: number) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: (step?: number) => void;
  closeCart: () => void;
  cartStep: number;
  setCartStep: (step: number) => void;
  checkoutData: CheckoutData;
  setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>;
  generateWhatsAppText: () => string;
  generateWhatsAppUrl: () => string;
  hasCakesOrKits: boolean;
}

const defaultCheckoutData: CheckoutData = {
  nome: '',
  whatsapp: '',
  dataDesejada: '',
  formaRecebimento: 'retirada',
  endereco: '',
  recadoBolo: '',
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'bbb_sacola_v1';
const CHECKOUT_STORAGE_KEY = 'bbb_checkout_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartStep, setCartStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(defaultCheckoutData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      } else {
        // Initial mock items matching Figma default sacola:
        // 1x Bolo de brigadeiro com morango (M) + 1x Caixa 16 brigadeiros gourmet
        setItems([
          {
            id: 'bolo-brigadeiro-morango-M',
            productId: 'bolo-brigadeiro-morango',
            productName: 'Bolo de brigadeiro com morango',
            productImage: '/images/p-brigadeiro-morango.webp',
            sizeId: 'M',
            sizeLabel: 'M',
            portions: '20–25 fatias',
            aro: '20 cm',
            unitPrice: 230,
            quantity: 1,
            category: 'bolos',
          },
          {
            id: 'caixa-brigadeiros-16',
            productId: 'caixa-brigadeiros',
            productName: 'Caixa de brigadeiros gourmet',
            productImage: '/images/p-caixa-brigadeiros.webp',
            sizeId: '16',
            sizeLabel: '16 un',
            portions: 'Para dividir',
            unitPrice: 72,
            quantity: 1,
            category: 'brigadeiros',
          },
        ]);
      }

      const storedCheckout = localStorage.getItem(CHECKOUT_STORAGE_KEY);
      if (storedCheckout) {
        setCheckoutData(JSON.parse(storedCheckout));
      }
    } catch {
      // fallback
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save items to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, isLoaded]);

  // Save checkout data to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(checkoutData));
      } catch {
        // ignore
      }
    }
  }, [checkoutData, isLoaded]);

  const addItem = (product: Product, sizeId: string, quantity = 1) => {
    const selectedSize = product.sizes.find(s => s.id === sizeId) || product.sizes[0];
    const cartItemId = `${product.id}-${selectedSize.id}`;

    setItems(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          productName: product.name,
          productImage: product.image,
          sizeId: selectedSize.id,
          sizeLabel: selectedSize.label,
          portions: selectedSize.portions,
          aro: selectedSize.aro,
          unitPrice: selectedSize.price,
          quantity,
          category: product.category,
        },
      ];
    });
  };

  const removeItem = (cartItemId: string) => {
    setItems(prev => prev.filter(i => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );

  const hasCakesOrKits = useMemo(
    () => items.some(item => item.category === 'bolos' || item.category === 'kits'),
    [items]
  );

  const openCart = (step = 1) => {
    setCartStep(step);
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const generateWhatsAppText = () => {
    if (items.length === 0) return 'Olá, bbb! Quero tirar uma dúvida sobre as encomendas.';

    const itemsText = items
      .map(item => {
        const sizeDesc = item.category === 'bolos'
          ? ` — ${item.sizeLabel} (${item.portions})`
          : ` — ${item.sizeLabel} un`;
        return `• ${item.quantity}x ${item.productName}${sizeDesc} — R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}`;
      })
      .join('\n');

    let formattedDate = checkoutData.dataDesejada;
    try {
      if (checkoutData.dataDesejada) {
        const [year, month, day] = checkoutData.dataDesejada.split('-');
        if (year && month && day) {
          const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
          const weekdays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
          formattedDate = `${weekdays[dateObj.getDay()]}, ${day}/${month}`;
        }
      }
    } catch {
      // keep fallback
    }

    const deliveryText = checkoutData.formaRecebimento === 'entrega'
      ? `🚗 Entrega: ${checkoutData.endereco || 'A combinar'}`
      : `📍 Retirada: No ateliê (Vila Madalena)`;

    let recadoText = '';
    if (checkoutData.recadoBolo?.trim()) {
      recadoText = `\n📝 Escrever no bolo: “${checkoutData.recadoBolo.trim()}”`;
    }

    const contactText = checkoutData.nome?.trim()
      ? `\n\nNome: ${checkoutData.nome.trim()} · Tel: ${checkoutData.whatsapp.trim() || 'WhatsApp'}`
      : '';

    return `Olá, bbb! 🎂 Quero fazer uma encomenda:

${itemsText}

Total estimado: R$ ${subtotal.toFixed(2).replace('.', ',')}
📅 Data: ${formattedDate || 'A definir'}
${deliveryText}${recadoText}${contactText}`;
  };

  const generateWhatsAppUrl = () => {
    const text = generateWhatsAppText();
    const phone = '5511900000000';
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
        cartStep,
        setCartStep,
        checkoutData,
        setCheckoutData,
        generateWhatsAppText,
        generateWhatsAppUrl,
        hasCakesOrKits,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
