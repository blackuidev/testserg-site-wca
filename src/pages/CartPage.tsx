import { useCartStore, CartItem } from '@/store/useCartStore';
import { Button } from '@/components/lightswind/button';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage = () => {
    const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleQuantityChange = (item: CartItem, newQuantity: number) => {
        updateQuantity(item.id, item.selectedSize!, item.selectedColor!, newQuantity);
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Button asChild>
                    <Link to="/products">Start Shopping</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {items.map(item => (
                        <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                            <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                            <div className="flex-grow">
                                <h2 className="font-semibold">{item.name}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Size: {item.selectedSize}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Color: {item.selectedColor}</p>
                                <p className="text-lg font-bold mt-1">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-md">
                                    <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className="p-2 disabled:opacity-50"><Minus size={16} /></button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item, item.quantity + 1)} className="p-2"><Plus size={16} /></button>
                                </div>
                                <button onClick={() => removeFromCart(item.id, item.selectedSize!, item.selectedColor!)} className="text-gray-500 hover:text-red-500">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="border-t pt-4 flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <Button size="lg" className="w-full mt-6">Proceed to Checkout</Button>
                        <Button variant="outline" className="w-full mt-2" onClick={clearCart}>Clear Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
