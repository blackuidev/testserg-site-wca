import { Button } from "@/components/lightswind/button";
import { products } from "@/lib/data";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
    const featuredProducts = products.filter(p => p.featured);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                        alt="Hero background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Style Redefined
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                        Discover curated collections of modern menswear. Premium quality, timeless design.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg">
                            <Link to="/products">Shop Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
