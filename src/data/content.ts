import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bolo-brigadeiro-morango',
    name: 'Bolo de brigadeiro com morango',
    description: 'Massa de chocolate, recheio de brigadeiro belga e morangos frescos.',
    image: '/images/p-brigadeiro-morango.jpg',
    category: 'bolos',
    tag: 'Mais pedido',
    tagVariant: 'terracotta',
    featured: true,
    startingPrice: 90,
    defaultSizeId: 'M',
    sizes: [
      { id: 'Mini', label: 'Mini', portions: '4–6 fatias', aro: '10 cm', weight: '0,6 kg', price: 90 },
      { id: 'P', label: 'P', portions: '10–12 fatias', aro: '15 cm', weight: '1,2 kg', price: 150 },
      { id: 'M', label: 'M', portions: '20–25 fatias', aro: '20 cm', weight: '2,2 kg', price: 230 },
      { id: 'G', label: 'G', portions: '35–40 fatias', aro: '25 cm', weight: '3,5 kg', price: 340 },
    ],
  },
  {
    id: 'red-velvet',
    name: 'Red velvet',
    description: 'Massa aveludada de cacau com cobertura de cream cheese batido.',
    image: '/images/p-red-velvet.jpg',
    category: 'bolos',
    tag: 'Mais pedido',
    tagVariant: 'terracotta',
    startingPrice: 100,
    defaultSizeId: 'P',
    sizes: [
      { id: 'Mini', label: 'Mini', portions: '4–6 fatias', aro: '10 cm', weight: '0,6 kg', price: 100 },
      { id: 'P', label: 'P', portions: '10–12 fatias', aro: '15 cm', weight: '1,2 kg', price: 170 },
      { id: 'M', label: 'M', portions: '20–25 fatias', aro: '20 cm', weight: '2,2 kg', price: 250 },
      { id: 'G', label: 'G', portions: '35–40 fatias', aro: '25 cm', weight: '3,5 kg', price: 370 },
    ],
  },
  {
    id: 'naked-frutas-vermelhas',
    name: 'Naked de frutas vermelhas',
    description: 'Pão de ló de baunilha, creme de mascarpone e frutas vermelhas.',
    image: '/images/p-naked-frutas.jpg',
    category: 'bolos',
    tag: 'Sazonal',
    tagVariant: 'pistachio',
    startingPrice: 110,
    defaultSizeId: 'Mini',
    sizes: [
      { id: 'Mini', label: 'Mini', portions: '4–6 fatias', aro: '10 cm', weight: '0,6 kg', price: 110 },
      { id: 'P', label: 'P', portions: '10–12 fatias', aro: '15 cm', weight: '1,2 kg', price: 180 },
      { id: 'M', label: 'M', portions: '20–25 fatias', aro: '20 cm', weight: '2,2 kg', price: 270 },
      { id: 'G', label: 'G', portions: '35–40 fatias', aro: '25 cm', weight: '3,5 kg', price: 390 },
    ],
  },
  {
    id: 'bolo-pistache',
    name: 'Bolo de pistache',
    description: 'Creme de pistache siciliano, ganache de chocolate branco e crocante.',
    image: '/images/p-pistache.jpg',
    category: 'bolos',
    tag: 'Novo',
    tagVariant: 'terracotta',
    startingPrice: 120,
    defaultSizeId: 'Mini',
    sizes: [
      { id: 'Mini', label: 'Mini', portions: '4–6 fatias', aro: '10 cm', weight: '0,6 kg', price: 120 },
      { id: 'P', label: 'P', portions: '10–12 fatias', aro: '15 cm', weight: '1,2 kg', price: 200 },
      { id: 'M', label: 'M', portions: '20–25 fatias', aro: '20 cm', weight: '2,2 kg', price: 290 },
      { id: 'G', label: 'G', portions: '35–40 fatias', aro: '25 cm', weight: '3,5 kg', price: 420 },
    ],
  },
  {
    id: 'caixa-brigadeiros',
    name: 'Caixa de brigadeiros gourmet',
    description: 'Brigadeiros belgas em quatro coberturas, na caixa kraft para presente.',
    image: '/images/p-caixa-brigadeiros.jpg',
    category: 'brigadeiros',
    tag: 'Mais pedido',
    tagVariant: 'terracotta',
    startingPrice: 22,
    defaultSizeId: '16',
    sizes: [
      { id: '4', label: '4', portions: 'Lembrancinha', price: 22 },
      { id: '9', label: '9', portions: 'Presente', price: 45 },
      { id: '16', label: '16', portions: 'Para dividir', price: 72 },
      { id: '25', label: '25', portions: 'Mesa de festa', price: 110 },
    ],
  },
  {
    id: 'bem-casados',
    name: 'Bem-casados',
    description: 'Pão de ló fofinho com doce de leite, embalado à mão com fita.',
    image: '/images/p-bem-casados.jpg',
    category: 'docinhos',
    tag: 'Mais pedido',
    tagVariant: 'terracotta',
    startingPrice: 65,
    defaultSizeId: '10',
    sizes: [
      { id: '10', label: '10', portions: '10 unidades', price: 65 },
      { id: '30', label: '30', portions: '30 unidades', price: 180 },
      { id: '50', label: '50', portions: '50 unidades', price: 290 },
      { id: '100', label: '100', portions: '100 unidades', price: 540 },
    ],
  },
  {
    id: 'docinhos-finos',
    name: 'Docinhos finos',
    description: 'Camafeu, brigadeiro de pistache, trufas e bombons de festa.',
    image: '/images/p-docinhos-finos.jpg',
    category: 'docinhos',
    tag: 'Sem glúten',
    tagVariant: 'pistachio',
    startingPrice: 95,
    defaultSizeId: '25',
    sizes: [
      { id: '25', label: '25', portions: '25 unidades', price: 95 },
      { id: '50', label: '50', portions: '50 unidades', price: 180 },
      { id: '100', label: '100', portions: '100 unidades', price: 340 },
    ],
  },
  {
    id: 'kit-festa',
    name: 'Kit festa',
    description: 'Bolo P, 50 docinhos e 25 brigadeiros para até 15 pessoas.',
    image: '/images/p-kit-festa.jpg',
    category: 'kits',
    tag: 'Mais pedido',
    tagVariant: 'terracotta',
    startingPrice: 260,
    defaultSizeId: '15',
    sizes: [
      { id: '10', label: '10', portions: 'Até 10 pessoas (Bolo Mini + 40 doces)', price: 260 },
      { id: '15', label: '15', portions: 'Até 15 pessoas (Bolo P + 75 doces)', price: 360 },
      { id: '25', label: '25', portions: 'Até 25 pessoas (Bolo M + 120 doces)', price: 540 },
    ],
  },
];

export const DIFFERENTIALS = [
  {
    icon: '/icons/leaf.svg',
    title: 'Ingredientes de verdade',
    description: 'Manteiga, ovos caipiras e frutas da estação.',
  },
  {
    icon: '/icons/sparkle.svg',
    title: 'Chocolate belga 54%',
    description: 'No brigadeiro, no recheio e na cobertura.',
  },
  {
    icon: '/icons/heart.svg',
    title: 'Receitas de família',
    description: 'Testadas por três gerações de confeiteiras.',
  },
  {
    icon: '/icons/truck.svg',
    title: 'Entrega com cuidado',
    description: 'Na cidade de São Paulo, em caixa refrigerada.',
  },
];

export const SIZE_TABLE_BOLOS = [
  { tamanho: 'Mini', aro: '10 cm', serve: '4–6 fatias', peso: '0,6 kg', preco: 'R$ 90' },
  { tamanho: 'P', aro: '15 cm', serve: '10–12 fatias', peso: '1,2 kg', preco: 'R$ 150' },
  { tamanho: 'M', aro: '20 cm', serve: '20–25 fatias', peso: '2,2 kg', preco: 'R$ 230' },
  { tamanho: 'G', aro: '25 cm', serve: '35–40 fatias', peso: '3,5 kg', preco: 'R$ 340' },
];

export const SIZE_TABLE_BRIGADEIROS = [
  { caixa: '4 un', ideal: 'Lembrancinha', preco: 'R$ 22' },
  { caixa: '9 un', ideal: 'Presente', preco: 'R$ 45' },
  { caixa: '16 un', ideal: 'Para dividir', preco: 'R$ 72' },
  { caixa: '25 un', ideal: 'Mesa de festa', preco: 'R$ 110' },
];

export const TESTIMONIALS = [
  {
    quote: '“O bolo de pistache foi o assunto da festa. Chegou lindo, no horário, e a mensagem pronta no WhatsApp facilitou tudo.”',
    author: 'Mariana C.',
    occasion: 'Aniversário de 30 anos',
    rating: 5,
  },
  {
    quote: '“Encomendei 100 bem-casados para o casamento da minha irmã. Embalagem impecável e o sabor lembra o de antigamente.”',
    author: 'Rafael M.',
    occasion: 'Casamento',
    rating: 5,
  },
  {
    quote: '“Peço a caixa de 16 brigadeiros todo mês. A tabela de tamanhos me ajudou a acertar a quantidade logo na primeira vez.”',
    author: 'Júlia S.',
    occasion: 'Cliente desde 2021',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: 'Com quanta antecedência preciso encomendar?',
    answer: 'Bolos e kits pedem 48 horas; caixas de brigadeiros, 24 horas. Para casamentos e eventos acima de 100 pessoas, fale com a gente com 15 dias.',
  },
  {
    question: 'Vocês entregam? Qual a taxa?',
    answer: 'Entregamos em São Paulo capital, de terça a sábado, em caixa refrigerada. A taxa é calculada pelo CEP e aparece na confirmação do pedido.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Depois que confirmamos a data no WhatsApp, enviamos o link de pagamento. Um sinal de 50% garante a reserva; o restante é pago até a entrega.',
  },
  {
    question: 'Como devo conservar o bolo?',
    answer: 'Mantenha refrigerado e retire 30 minutos antes de servir. Brigadeiros ficam ótimos por até 3 dias fora da geladeira, em local fresco.',
  },
  {
    question: 'Têm opções sem glúten ou sem lactose?',
    answer: 'Sim: os docinhos marcados com o selo “Sem glúten” e o bolo de pistache sob consulta. Produzimos em cozinha compartilhada, então avise em caso de alergia.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Monte sua sacola',
    description: 'Escolha os produtos, o tamanho e a quantidade direto na vitrine.',
  },
  {
    number: '02',
    title: 'Conte os detalhes',
    description: 'Data, retirada ou entrega e o recado para escrever no bolo.',
  },
  {
    number: '03',
    title: 'Envie pelo WhatsApp',
    description: 'A mensagem já vai pronta. A gente confirma a disponibilidade e o sinal.',
  },
];
