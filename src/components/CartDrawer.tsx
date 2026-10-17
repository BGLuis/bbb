'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
    isCartOpen,
    closeCart,
    cartStep,
    setCartStep,
    checkoutData,
    setCheckoutData,
    generateWhatsAppText,
    generateWhatsAppUrl,
    hasCakesOrKits,
  } = useCart();

  const [dateError, setDateError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showOrderReceived, setShowOrderReceived] = useState(false);

  if (!isCartOpen) return null;

  // Validate date logic
  const handleDateChange = (val: string) => {
    setCheckoutData(prev => ({ ...prev, dataDesejada: val }));
    setDateError(null);

    if (!val) return;

    const [year, month, day] = val.split('-').map(Number);
    const selected = new Date(year, month - 1, day);
    const dayOfWeek = selected.getDay(); // 0 = Dom, 1 = Seg

    // Check closed days (Dom e Seg)
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      setDateError('Não abrimos aos domingos e segundas. Escolha de terça a sábado.');
      return;
    }

    // Check minimum notice
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const diffTime = selected.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const minDays = hasCakesOrKits ? 2 : 1;
    if (diffDays < minDays) {
      setDateError(`Para bolos e kits pedimos no mínimo 48h de antecedência.`);
    }
  };

  const handleGoToStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!checkoutData.nome.trim()) {
      errors.nome = 'Por favor, informe seu nome.';
    }
    if (!checkoutData.whatsapp.trim()) {
      errors.whatsapp = 'Por favor, informe seu WhatsApp para contato.';
    }
    if (!checkoutData.dataDesejada) {
      errors.data = 'Por favor, selecione a data desejada.';
    } else if (dateError) {
      errors.data = dateError;
    }
    if (checkoutData.formaRecebimento === 'entrega' && !checkoutData.endereco.trim()) {
      errors.endereco = 'Por favor, informe o endereço de entrega em São Paulo.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setCartStep(3);
  };

  const handleSendWhatsApp = () => {
    const url = generateWhatsAppUrl();
    window.open(url, '_blank');
    setShowOrderReceived(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-cocoa-900/50 backdrop-blur-sm flex justify-end animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={closeCart} aria-hidden="true" />

      {/* Drawer panel */}
      <div className="relative w-full max-w-lg bg-cream-50 h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-cream-200">
          <div>
            <h2 id="drawer-title" className="font-serif text-2xl font-semibold text-cocoa-900">
              {cartStep === 1 && 'Sua sacola'}
              {cartStep === 2 && 'Dados do pedido'}
              {cartStep === 3 && 'Revisar e enviar'}
              {cartStep === 4 && 'Pedido recebido'}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              {[
                { num: 1, label: 'Sacola' },
                { num: 2, label: 'Dados' },
                { num: 3, label: 'Revisar' },
              ].map(s => (
                <div key={s.num} className="flex items-center gap-1.5 text-xs font-semibold">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                      cartStep >= s.num
                        ? 'bg-cocoa-900 text-cream-50'
                        : 'bg-cream-200 text-cocoa-600'
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className={cartStep >= s.num ? 'text-cocoa-900' : 'text-cocoa-600'}>
                    {s.label}
                  </span>
                  {s.num < 3 && <span className="text-cream-300 ml-1">·</span>}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={closeCart}
            className="p-2 rounded-full text-cocoa-600 hover:text-cocoa-900 hover:bg-cream-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-700"
            aria-label="Fechar sacola"
          >
            <Image src="/icons/x.svg" alt="" width={20} height={20} className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center mx-auto mb-4 text-cocoa-400">
                <Image src="/icons/bag.svg" alt="" width={32} height={32} className="w-8 h-8 opacity-40" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-cocoa-900 mb-2">
                Sua sacola está vazia
              </h3>
              <p className="text-sm text-cocoa-600 mb-6 max-w-xs mx-auto">
                Explore nossa vitrine de bolos e doces artesanais e adicione seus favoritos.
              </p>
              <button
                onClick={() => {
                  closeCart();
                  const vitrine = document.getElementById('vitrine');
                  vitrine?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-terracotta-600 text-white font-semibold text-sm hover:bg-terracotta-700 transition-colors shadow-sm"
              >
                Ver vitrine
              </button>
            </div>
          ) : (
            <>
              {/* STEP 1: SACOLA */}
              {cartStep === 1 && (
                <div className="space-y-6">
                  {/* Item List */}
                  <div className="divide-y divide-cream-200">
                    {items.map(item => (
                      <div key={item.id} className="py-4 flex gap-4 items-center">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-cream-100 flex-shrink-0 border border-cream-200">
                          <Image
                            src={item.productImage}
                            alt={item.productName}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif font-semibold text-cocoa-900 text-base truncate">
                            {item.productName}
                          </h4>
                          <p className="text-xs text-cocoa-600 truncate">
                            {item.category === 'bolos'
                              ? `Tamanho ${item.sizeLabel} · ${item.portions} · aro ${item.aro}`
                              : `Caixa com ${item.sizeLabel} unidades`}
                          </p>
                          <div className="font-serif font-semibold text-sm text-cocoa-900 mt-1">
                            R$ {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-1.5 bg-cream-100 rounded-full border border-cream-300 p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-cream-50 hover:bg-cream-200 flex items-center justify-center text-cocoa-900 active:scale-95 transition-all"
                            aria-label="Diminuir quantidade"
                          >
                            <Image src="/icons/minus.svg" alt="" width={12} height={12} className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-cocoa-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-terracotta-600 hover:bg-terracotta-700 flex items-center justify-center text-white active:scale-95 transition-all"
                            aria-label="Aumentar quantidade"
                          >
                            <Image src="/icons/plus.svg" alt="" width={12} height={12} className="w-3 h-3 brightness-0 invert" />
                          </button>
                        </div>

                        {/* Delete button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-cocoa-400 hover:text-coral-600 transition-colors"
                          aria-label={`Remover ${item.productName} da sacola`}
                        >
                          <Image src="/icons/trash.svg" alt="" width={16} height={16} className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add more items link */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        closeCart();
                        document.getElementById('vitrine')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-terracotta-700 hover:text-terracotta-800 underline underline-offset-4"
                    >
                      + Adicionar mais itens
                    </button>
                  </div>

                  {/* Antecedence callout note */}
                  <div className="p-4 rounded-xl bg-cream-100 border border-cream-200 flex items-start gap-3">
                    <Image src="/icons/clock.svg" alt="" width={18} height={18} className="w-4 h-4 text-terracotta-700 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-cocoa-700 leading-relaxed">
                      Bolos precisam de 48h de antecedência. A data você escolhe no próximo passo.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 2: DADOS DO PEDIDO */}
              {cartStep === 2 && (
                <form id="checkout-form" onSubmit={handleGoToStep3} className="space-y-5">
                  {/* Nome */}
                  <div>
                    <label htmlFor="input-nome" className="block text-xs font-semibold text-cocoa-900 mb-1.5">
                      Seu nome *
                    </label>
                    <input
                      id="input-nome"
                      type="text"
                      required
                      placeholder="Mariana Costa"
                      value={checkoutData.nome}
                      onChange={e => setCheckoutData(prev => ({ ...prev, nome: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-cocoa-900 text-sm focus:border-terracotta-700 focus:outline-none transition-colors"
                    />
                    {fieldErrors.nome && (
                      <p className="text-xs text-coral-600 mt-1">{fieldErrors.nome}</p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="input-whatsapp" className="block text-xs font-semibold text-cocoa-900 mb-1.5">
                      WhatsApp *
                    </label>
                    <input
                      id="input-whatsapp"
                      type="tel"
                      required
                      placeholder="(11) 90000-0000"
                      value={checkoutData.whatsapp}
                      onChange={e => setCheckoutData(prev => ({ ...prev, whatsapp: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-cocoa-900 text-sm focus:border-terracotta-700 focus:outline-none transition-colors"
                    />
                    {fieldErrors.whatsapp && (
                      <p className="text-xs text-coral-600 mt-1">{fieldErrors.whatsapp}</p>
                    )}
                  </div>

                  {/* Data desejada */}
                  <div>
                    <label htmlFor="input-data" className="block text-xs font-semibold text-cocoa-900 mb-1.5">
                      Data desejada *
                    </label>
                    <input
                      id="input-data"
                      type="date"
                      required
                      value={checkoutData.dataDesejada}
                      onChange={e => handleDateChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-cocoa-900 text-sm focus:border-terracotta-700 focus:outline-none transition-colors"
                    />
                    {dateError ? (
                      <p className="text-xs text-coral-600 mt-1 flex items-center gap-1 font-medium">
                        <span>⚠</span> {dateError}
                      </p>
                    ) : (
                      <p className="text-[11px] text-cocoa-600 mt-1">
                        Bolos com no mínimo 48h de antecedência. Ateliê de terça a sábado.
                      </p>
                    )}
                  </div>

                  {/* Forma de recebimento */}
                  <div>
                    <label className="block text-xs font-semibold text-cocoa-900 mb-2">
                      Como você quer receber?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setCheckoutData(prev => ({ ...prev, formaRecebimento: 'retirada' }))}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          checkoutData.formaRecebimento === 'retirada'
                            ? 'bg-cream-100 border-cocoa-900 shadow-sm'
                            : 'bg-cream-50 border-cream-300 hover:bg-cream-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Image src="/icons/store.svg" alt="" width={16} height={16} className="w-4 h-4 text-cocoa-900" />
                          <span className="font-serif font-semibold text-sm text-cocoa-900">Retirada</span>
                        </div>
                        <div className="text-[11px] text-cocoa-700">Vila Madalena · grátis</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCheckoutData(prev => ({ ...prev, formaRecebimento: 'entrega' }))}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          checkoutData.formaRecebimento === 'entrega'
                            ? 'bg-cream-100 border-cocoa-900 shadow-sm'
                            : 'bg-cream-50 border-cream-300 hover:bg-cream-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Image src="/icons/truck.svg" alt="" width={16} height={16} className="w-4 h-4 text-cocoa-900" />
                          <span className="font-serif font-semibold text-sm text-cocoa-900">Entrega</span>
                        </div>
                        <div className="text-[11px] text-cocoa-700">Taxa pelo CEP no WhatsApp</div>
                      </button>
                    </div>
                  </div>

                  {/* Endereço de entrega (if entrega) */}
                  {checkoutData.formaRecebimento === 'entrega' && (
                    <div className="animate-fadeIn">
                      <label htmlFor="input-endereco" className="block text-xs font-semibold text-cocoa-900 mb-1.5">
                        Endereço de entrega em São Paulo *
                      </label>
                      <input
                        id="input-endereco"
                        type="text"
                        required
                        placeholder="Rua Harmonia, 123 — Vila Madalena, SP"
                        value={checkoutData.endereco}
                        onChange={e => setCheckoutData(prev => ({ ...prev, endereco: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-cocoa-900 text-sm focus:border-terracotta-700 focus:outline-none transition-colors"
                      />
                      {fieldErrors.endereco && (
                        <p className="text-xs text-coral-600 mt-1">{fieldErrors.endereco}</p>
                      )}
                    </div>
                  )}

                  {/* Recado no bolo */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="input-recado" className="text-xs font-semibold text-cocoa-900">
                        Recado no bolo (opcional)
                      </label>
                      <span className="text-[11px] text-cocoa-600">
                        {checkoutData.recadoBolo.length}/30
                      </span>
                    </div>
                    <input
                      id="input-recado"
                      type="text"
                      maxLength={30}
                      placeholder="Ex: Feliz 30 anos, Ana"
                      value={checkoutData.recadoBolo}
                      onChange={e => setCheckoutData(prev => ({ ...prev, recadoBolo: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-cocoa-900 text-sm focus:border-terracotta-700 focus:outline-none transition-colors"
                    />
                    <p className="text-[11px] text-cocoa-600 mt-1">
                      Até 30 caracteres, escrito em chocolate.
                    </p>
                  </div>
                </form>
              )}

              {/* STEP 3: REVISAR E ENVIAR */}
              {cartStep === 3 && (
                <div className="space-y-6">
                  {/* Order Summary Box */}
                  <div className="p-5 rounded-2xl bg-cream-100/70 border border-cream-300 space-y-3">
                    <div className="font-serif font-semibold text-cocoa-900 text-base pb-2 border-b border-cream-200">
                      Resumo dos itens
                    </div>
                    <div className="divide-y divide-cream-200/60 text-sm">
                      {items.map(item => (
                        <div key={item.id} className="py-2 flex justify-between gap-2">
                          <span className="text-cocoa-800">
                            {item.quantity}× {item.productName} · {item.sizeLabel}
                          </span>
                          <span className="font-serif font-semibold text-cocoa-900 flex-shrink-0">
                            R$ {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-cream-200 flex justify-between text-base">
                      <span className="font-semibold text-cocoa-900">Total estimado</span>
                      <span className="font-serif font-bold text-lg text-cocoa-900">
                        R$ {subtotal.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  {/* Customer details pill */}
                  <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 text-xs sm:text-sm text-cocoa-800 space-y-2">
                    <div className="flex items-center gap-2">
                      <Image src="/icons/calendar.svg" alt="" width={16} height={16} className="w-4 h-4 text-terracotta-700" />
                      <span>{checkoutData.dataDesejada || 'Data a combinar'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={checkoutData.formaRecebimento === 'entrega' ? '/icons/truck.svg' : '/icons/store.svg'}
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4 text-terracotta-700"
                      />
                      <span>
                        {checkoutData.formaRecebimento === 'entrega'
                          ? `Entrega: ${checkoutData.endereco}`
                          : 'Retirada no ateliê (Vila Madalena · grátis)'}
                      </span>
                    </div>
                    {checkoutData.recadoBolo && (
                      <div className="flex items-center gap-2">
                        <Image src="/icons/pencil.svg" alt="" width={16} height={16} className="w-4 h-4 text-terracotta-700" />
                        <span>Recado: “{checkoutData.recadoBolo}”</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Image src="/icons/user.svg" alt="" width={16} height={16} className="w-4 h-4 text-terracotta-700" />
                      <span>{checkoutData.nome} · {checkoutData.whatsapp}</span>
                    </div>
                  </div>

                  {/* Real-time WhatsApp Text preview container */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cocoa-700 mb-2">
                      Mensagem que será enviada
                    </label>
                    <div className="p-4 rounded-xl bg-cream-100 border border-cream-300 font-mono text-xs text-cocoa-800 leading-relaxed whitespace-pre-line shadow-inner max-h-48 overflow-y-auto">
                      {generateWhatsAppText()}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: WHATSAPP SIMULATION / CONFIRMAÇÃO */}
              {showOrderReceived && (
                <div className="space-y-6 py-4 animate-fadeIn">
                  <div className="p-5 rounded-2xl bg-[#E7F6EC] border border-[#25D366]/30 text-cocoa-900 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-whatsapp-600 text-white flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg text-cocoa-900 leading-tight">
                          Pedido pronto para envio!
                        </h3>
                        <p className="text-xs text-cocoa-600">
                          Conta comercial · responde em minutos
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/90 text-xs text-cocoa-800 leading-relaxed border border-cream-200">
                      <p className="font-semibold text-whatsapp-700 mb-1">
                        Oi, {checkoutData.nome || 'cliente'}! Recebemos seu pedido 💛
                      </p>
                      <p>
                        A data {checkoutData.dataDesejada} será confirmada com a nossa confeiteira.
                        Um sinal de 50% garante a reserva.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowOrderReceived(false);
                      closeCart();
                    }}
                    className="w-full py-3 rounded-full bg-cream-200 text-cocoa-900 font-semibold text-sm hover:bg-cream-300 transition-colors"
                  >
                    Fechar e voltar ao site
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && !showOrderReceived && (
          <div className="p-5 sm:p-6 border-t border-cream-200 bg-cream-100/60 space-y-3">
            {/* Subtotal line */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-cocoa-700">Subtotal ({totalItems} itens)</span>
              <span className="font-serif font-bold text-cocoa-900 text-base">
                R$ {subtotal.toFixed(2).replace('.', ',')}
              </span>
            </div>

            {/* Delivery note */}
            <div className="flex items-center justify-between text-xs text-cocoa-600">
              <span>Entrega</span>
              <span>{checkoutData.formaRecebimento === 'retirada' ? 'Grátis' : 'calculada pelo CEP no WhatsApp'}</span>
            </div>

            {/* Dynamic Buttons depending on Step */}
            {cartStep === 1 && (
              <button
                onClick={() => setCartStep(2)}
                className="w-full py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-base active:scale-98 transition-all shadow-md shadow-terracotta-600/20"
              >
                Continuar
              </button>
            )}

            {cartStep === 2 && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCartStep(1)}
                  className="px-5 py-3.5 rounded-full bg-cream-200 hover:bg-cream-300 text-cocoa-800 font-semibold text-sm transition-colors"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-base active:scale-98 transition-all shadow-md shadow-terracotta-600/20 text-center"
                >
                  Revisar pedido
                </button>
              </div>
            )}

            {cartStep === 3 && (
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCartStep(2)}
                    className="px-5 py-3.5 rounded-full bg-cream-200 hover:bg-cream-300 text-cocoa-800 font-semibold text-sm transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex-1 py-3.5 rounded-full bg-whatsapp-600 hover:bg-whatsapp-700 text-white font-semibold text-base active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Image src="/icons/message.svg" alt="" width={20} height={20} className="w-5 h-5 brightness-0 invert" />
                    <span>Enviar pedido no WhatsApp</span>
                  </button>
                </div>
                <p className="text-[11px] text-cocoa-600 text-center pt-1">
                  Abrimos o WhatsApp com a mensagem pronta. Nada é cobrado agora.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
