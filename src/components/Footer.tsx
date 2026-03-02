import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-950 border-t">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Lightswind</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A modern e-commerce experience built with the best tools.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Home</Link></li>
                            <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Products</Link></li>
                            <li><Link to="/cart" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Your Cart</Link></li>
                            <li><Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Login</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    &copy; {currentYear} Lightswind, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
