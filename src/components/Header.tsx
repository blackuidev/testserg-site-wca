import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search } from 'lucide-react';
import useCartStore from '@/store/useCartStore';
import { useEffect, useState } from 'react';

const Header = () => {
    // This pattern ensures that we don't have a hydration mismatch between server and client
    // when using Zustand with persistence. The cart count is only rendered on the client.
    const [cartCount, setCartCount] = useState(0);
    const items = useCartStore(state => state.items);

    useEffect(() => {
        // The reduce operation is now safe because `items` is guaranteed to be an array.
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalItems);
    }, [items]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Products' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg bg-white/30 dark:bg-black/30">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="mr-6 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-black dark:text-white"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
                    <span className="hidden font-bold sm:inline-block text-gray-900 dark:text-gray-100">Lightswind</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                        <Search className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <Link to="/login" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                        <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </Link>
                    <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                        <ShoppingBag className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
