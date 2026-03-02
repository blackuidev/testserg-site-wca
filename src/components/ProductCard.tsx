import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/lightswind/button';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/lib/data';
import { toast } from 'react-toastify';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      <Link to={`/products/${product.id}`} className="block overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </Link>
      <div className="p-4 flex flex-col h-[calc(100%-16rem)]">
        <div className="flex-grow">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate h-7">
            <Link to={`/products/${product.id}`} className="hover:text-sky-500 transition-colors">
              {product.name}
            </Link>
          </h3>
          
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({product.reviews} reviews)</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
          <Button onClick={handleAddToCart} size="sm" variant="outline">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
