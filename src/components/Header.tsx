import { Link } from 'react-router-dom';
import { ShoppingBag, Shirt } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';

const Header = () => {
    const { items } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const totalItems = isMounted ? items.reduce((total, item) => total + item.quantity, 0) : 0;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <Shirt className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Urban Threads</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
                        <Link to="/products" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">All Products</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link to="/cart" className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <ShoppingBag className="h-6 w-6" />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
