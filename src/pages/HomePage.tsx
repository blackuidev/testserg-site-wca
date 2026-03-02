import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/lightswind/button';
import { GlowingCards, GlowingCard } from '@/components/lightswind/glowing-cards';
import { ArrowRight, ShoppingBag, Sparkles, ShieldCheck, Shirt, Wind, Watch } from 'lucide-react';

const categories = [
  {
    name: 'T-Shirts',
    description: 'Comfortable and stylish tees for every occasion.',
    icon: Shirt,
  },
  {
    name: 'Jackets',
    description: 'Stay warm and fashionable with our latest jackets.',
    icon: Wind,
  },
  {
    name: 'Accessories',
    description: 'Complete your look with our trendy accessories.',
    icon: Watch,
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 dark:bg-gray-900/50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-lg p-8 rounded-xl inline-block">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
                    Discover Your Style
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    High-quality apparel for the modern individual. Explore our latest collection and find your perfect fit.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link to="/products" className="flex items-center">
                            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link to="/#featured">
                            See Featured
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section with GlowingCards */}
      <section className="w-full bg-gray-100 dark:bg-gray-900/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Shop by Category</h2>
              <GlowingCards>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {categories.map((category) => (
                          <GlowingCard key={category.name}>
                              <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                                  <category.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
                                  <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">{category.description}</p>
                              </div>
                          </GlowingCard>
                      ))}
                  </div>
              </GlowingCards>
          </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We source the finest materials to create durable and comfortable apparel.
              </p>
            </div>
            <div className="p-6">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Latest Styles</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Our collections are always up-to-date with the latest fashion trends.
              </p>
            </div>
            <div className="p-6">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Secure Shopping</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Your privacy and security are our top priority. Shop with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
