import { create } from 'zustand';
import { products, Product } from '@/lib/data';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (productId: number, size: string, color: string) => void;
  removeFromCart: (productId: number, size: string, color: string) => void;
  updateQuantity: (productId: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (productId, size, color) =>
    set((state) => {
      const product = products.find((p) => p.id === productId);
      if (!product) return state;

      const existingItem = state.items.find(
        (item) => item.id === productId && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === productId && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { items: updatedItems };
      } else {
        const newItem: CartItem = { ...product, quantity: 1, selectedSize: size, selectedColor: color };
        return { items: [...state.items, newItem] };
      }
    }),
  removeFromCart: (productId, size, color) =>
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
      ),
    })),
  updateQuantity: (productId, size, color, quantity) =>
    set((state) => {
        if (quantity <= 0) {
            return {
                items: state.items.filter(
                    (item) => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
                ),
            }
        }
        return {
            items: state.items.map((item) =>
                item.id === productId && item.selectedSize === size && item.selectedColor === color
                ? { ...item, quantity }
                : item
            ),
        }
    }),
  clearCart: () => set({ items: [] }),
}));
