export type ProductCategory = 'bolos' | 'brigadeiros' | 'docinhos' | 'kits';

export interface ProductSize {
  id: string;
  label: string;
  portions: string;
  aro?: string;
  weight?: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: ProductCategory;
  tag?: string;
  tagVariant?: 'terracotta' | 'pistachio' | 'coral' | 'cocoa';
  sizes: ProductSize[];
  defaultSizeId: string;
  startingPrice: number;
  featured?: boolean;
}

export interface CartItem {
  id: string; // unique cart item id: `${productId}-${sizeId}`
  productId: string;
  productName: string;
  productImage: string;
  sizeId: string;
  sizeLabel: string;
  portions: string;
  aro?: string;
  unitPrice: number;
  quantity: number;
  category: ProductCategory;
}

export type DeliveryMethod = 'retirada' | 'entrega';

export interface CheckoutData {
  nome: string;
  whatsapp: string;
  dataDesejada: string;
  formaRecebimento: DeliveryMethod;
  endereco: string;
  recadoBolo: string;
}
