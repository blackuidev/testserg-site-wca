import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { useCartStore } from '@/store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import { Button } from './lightswind/button';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        // For simplicity, add with the first available size and color
        const defaultSize = product.sizes[0];
        const defaultColor = product.colors[0];
        addToCart(product.id, defaultSize, defaultColor);
        // In a real app, you might open a modal to select options
    };

    return (
        <div className="group relative border rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 hover:shadow-xl">
            <Link to={`/products/${product.id}`}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
                </div>
            </Link>
            <div className="p-4 pt-0">
                <Button onClick={handleAddToCart} className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
