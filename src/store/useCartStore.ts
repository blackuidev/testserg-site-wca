import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// We're assuming a Product type is (or will be) exported from your data library.
// This is a critical convention for a scalable e-commerce app.
// Example Product interface:
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description?: string;
// }
import type { Product } from '@/lib/data';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateItemQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            // Update quantity if item already exists
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          // Add new item to cart
          return { items: [...state.items, { ...product, quantity }] };
        }),
        
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),

      updateItemQuantity: (productId, quantity) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            ).filter(item => item.quantity > 0), // remove if quantity is 0 or less
        })),

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const totalPrice = get().items.reduce((total, item) => total + item.price * item.quantity, 0);
        return parseFloat(totalPrice.toFixed(2));
      }
    }),
    {
      name: 'shopping-cart-storage', // unique name for localStorage key
    }
  )
);
