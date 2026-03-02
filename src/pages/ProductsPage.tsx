import { useState } from 'react';
import { products, Product } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Slider } from '@/components/lightswind/slider';
import { Checkbox } from '@/components/lightswind/checkbox';

const categories = ['All', 'T-Shirts', 'Hoodies', 'Jeans', 'Jackets'];
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const ProductsPage = () => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [priceRange, setPriceRange] = useState<[number]>([200]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const handleFilterChange = () => {
        let tempProducts = products;

        // Filter by category
        if (selectedCategory !== 'All') {
            tempProducts = tempProducts.filter(p => p.category === selectedCategory);
        }

        // Filter by price
        tempProducts = tempProducts.filter(p => p.price <= priceRange[0]);

        // Filter by size
        if (selectedSizes.length > 0) {
            tempProducts = tempProducts.filter(p => p.sizes.some(size => selectedSizes.includes(size)));
        }

        setFilteredProducts(tempProducts);
    };
    
    useState(handleFilterChange);


    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        handleFilterChange();
    };

    const handleSizeChange = (size: string) => {
        const newSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];
        setSelectedSizes(newSizes);
        handleFilterChange();
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-lg font-semibold mb-4">Filters</h3>
                        
                        {/* Category Filter */}
                        <div className="mb-6">
                            <h4 className="font-medium mb-2">Category</h4>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryClick(category)}
                                        className={`px-3 py-1 text-sm rounded-full border ${selectedCategory === category
                                            ? 'bg-indigo-600 text-white border-indigo-600'
                                            : 'bg-transparent dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Range Filter */}
                        <div className="mb-6">
                            <h4 className="font-medium mb-2">Max Price: ${priceRange[0]}</h4>
                            <Slider
                                defaultValue={[200]}
                                max={200}
                                step={10}
                                onValueChange={(value) => setPriceRange(value as [number])}
                                onValueChangeEnd={handleFilterChange}
                            />
                        </div>

                        {/* Size Filter */}
                        <div>
                            <h4 className="font-medium mb-2">Size</h4>
                            <div className="grid grid-cols-3 gap-2">
                                {sizes.map(size => (
                                    <div key={size} className="flex items-center">
                                        <Checkbox
                                            id={`size-${size}`}
                                            checked={selectedSizes.includes(size)}
                                            onCheckedChange={() => handleSizeChange(size)}
                                        />
                                        <label htmlFor={`size-${size}`} className="ml-2 text-sm">
                                            {size}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Products Grid */}
                <main className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-lg text-gray-500">No products match your criteria.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductsPage;
