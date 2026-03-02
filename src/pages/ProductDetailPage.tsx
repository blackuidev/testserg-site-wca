import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/lightswind/button';
import { ShoppingCart, CheckCircle } from 'lucide-react';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id || ''));
    const { addToCart } = useCartStore();

    const [selectedSize, setSelectedSize] = useState<string | null>(product?.sizes[0] || null);
    const [selectedColor, setSelectedColor] = useState<string | null>(product?.colors[0] || null);
    const [addedToCart, setAddedToCart] = useState(false);

    if (!product) {
        return <div className="container mx-auto px-4 py-12 text-center">Product not found.</div>;
    }

    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
            addToCart(product.id, selectedSize, selectedColor);
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image Gallery */}
                <div>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
                    <p className="text-2xl text-gray-800 dark:text-gray-200 mb-4">${product.price.toFixed(2)}</p>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>

                    {/* Size Selector */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 text-sm rounded-md border ${selectedSize === size
                                        ? 'bg-indigo-600 text-white border-indigo-600'
                                        : 'bg-transparent dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Selector */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Color</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`px-4 py-2 text-sm rounded-md border ${selectedColor === color
                                        ? 'bg-indigo-600 text-white border-indigo-600'
                                        : 'bg-transparent dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                        onClick={handleAddToCart}
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={!selectedSize || !selectedColor || addedToCart}
                    >
                        {addedToCart ? (
                            <>
                                <CheckCircle className="mr-2 h-5 w-5" /> Added!
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
