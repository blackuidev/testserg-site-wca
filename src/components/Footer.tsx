import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Urban Threads</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Your destination for modern men's fashion. Quality clothing for every occasion.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</Link></li>
                            <li><Link to="/products" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Products</Link></li>
                            <li><Link to="/cart" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Your Cart</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Email: support@urbanthreads.com
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Urban Threads. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
