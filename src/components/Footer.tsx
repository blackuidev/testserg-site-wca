import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 dark:bg-black dark:border-t dark:border-gray-800">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Urban Threads</h3>
                        <p className="text-sm text-gray-400">
                            Elevating men's fashion with premium quality apparel. Discover your style with our curated collections.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/products?category=T-Shirts" className="text-gray-400 hover:text-white transition-colors">T-Shirts</Link></li>
                            <li><Link to="/products?category=Hoodies" className="text-gray-400 hover:text-white transition-colors">Hoodies</Link></li>
                            <li><Link to="/products?category=Jeans" className="text-gray-400 hover:text-white transition-colors">Jeans</Link></li>
                            <li><Link to="/products?category=Jackets" className="text-gray-400 hover:text-white transition-colors">Jackets</Link></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h3>
                        <p className="text-sm text-gray-400 mb-4">Get exclusive deals and style tips delivered to your inbox.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                                aria-label="Email for newsletter"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors flex items-center justify-center"
                                aria-label="Subscribe to newsletter"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Urban Threads. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
