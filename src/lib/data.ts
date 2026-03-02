export interface Product {
    id: number;
    name: string;
    category: 'T-Shirts' | 'Hoodies' | 'Jeans' | 'Jackets' | 'Accessories';
    price: number;
    sizes: string[];
    colors: string[];
    description: string;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Classic Crewneck Tee',
        category: 'T-Shirts',
        price: 29.99,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White', 'Black', 'Navy'],
        description: 'A timeless staple for any wardrobe. Made from 100% premium cotton for ultimate comfort and durability. Perfect for layering or wearing on its own.',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Essential Zip Hoodie',
        category: 'Hoodies',
        price: 79.99,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Heather Grey', 'Charcoal', 'Black'],
        description: 'Our go-to zip hoodie, designed for everyday comfort. Features a soft fleece interior, a sturdy zipper, and a modern fit.',
        image: 'https://images.unsplash.com/photo-1556821840-3b0f95b6079d?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Slim Fit Denim Jeans',
        category: 'Jeans',
        price: 89.99,
        sizes: ['30x30', '32x32', '34x32', '36x34'],
        colors: ['Indigo', 'Washed Black', 'Light Blue'],
        description: 'Modern slim fit jeans crafted from stretch denim for maximum comfort and mobility. A versatile addition to your casual lineup.',
        image: 'https://images.unsplash.com/photo-1602293589930-45a9ec99e8c3?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 4,
        name: 'Water-Resistant Bomber Jacket',
        category: 'Jackets',
        price: 129.99,
        sizes: ['M', 'L', 'XL'],
        colors: ['Olive Green', 'Black', 'Burgundy'],
        description: 'Stay stylish and dry with this lightweight bomber jacket. Features a water-resistant shell and a classic silhouette.',
        image: 'https://images.unsplash.com/photo-1591047139829-d916b67ea74f?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 5,
        name: 'Graphic Print T-Shirt',
        category: 'T-Shirts',
        price: 34.99,
        sizes: ['S', 'M', 'L'],
        colors: ['Vintage Black', 'White'],
        description: 'Make a statement with our unique graphic tees. Soft, breathable fabric with a high-quality print that won\'t fade.',
        image: 'https://images.unsplash.com/photo-1503341504253-dff481648536?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 6,
        name: 'Heavyweight Pullover Hoodie',
        category: 'Hoodies',
        price: 99.99,
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['Oatmeal', 'Forest Green', 'Navy'],
        description: 'Built for warmth and durability, this heavyweight hoodie is perfect for colder days. Features a kangaroo pocket and a double-lined hood.',
        image: 'https://images.unsplash.com/photo-1621351180596-22da3733cf53?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 7,
        name: 'Relaxed Fit Chinos',
        category: 'Jeans', // Using Jeans category for simplicity, but could be 'Pants'
        price: 69.99,
        sizes: ['30', '32', '34', '36'],
        colors: ['Khaki', 'Stone', 'Olive'],
        description: 'A comfortable and stylish alternative to jeans. Our relaxed fit chinos are made from soft-washed twill for a broken-in feel from day one.',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 8,
        name: 'Classic Denim Jacket',
        category: 'Jackets',
        price: 119.99,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Medium Wash', 'Black Denim'],
        description: 'The iconic denim jacket, updated with a modern fit. A rugged and versatile layer that only gets better with age.',
        image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 9,
        name: 'Leather Belt',
        category: 'Accessories',
        price: 49.99,
        sizes: ['32', '34', '36', '38'],
        colors: ['Brown', 'Black'],
        description: 'A high-quality leather belt that completes any outfit. Features a solid brass buckle for a touch of class.',
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 10,
        name: 'Linen Short Sleeve Shirt',
        category: 'T-Shirts', // Using T-Shirts for simplicity, could be 'Shirts'
        price: 59.99,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Natural', 'Light Blue', 'White'],
        description: 'Stay cool and comfortable in our breathable linen shirt. Perfect for warm weather and vacation.',
        image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 11,
        name: 'Cargo Pants',
        category: 'Jeans', // Using Jeans for simplicity
        price: 95.00,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Olive Drab', 'Khaki', 'Black'],
        description: 'Functional and stylish cargo pants with ample storage. Made from durable ripstop cotton for any adventure.',
        image: 'https://images.unsplash.com/photo-1594284790918-10354b834469?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 12,
        name: 'Quilted Puffer Vest',
        category: 'Jackets',
        price: 109.99,
        sizes: ['M', 'L', 'XL'],
        colors: ['Navy', 'Red', 'Graphite'],
        description: 'A perfect layering piece for transitional weather. The quilted puffer vest provides core warmth without the bulk.',
        image: 'https://images.unsplash.com/photo-1611807460366-53215c91c120?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 13,
        name: 'Henley Long Sleeve',
        category: 'T-Shirts',
        price: 45.00,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Charcoal', 'Cream', 'Indigo'],
        description: 'A versatile long-sleeve henley that works on its own or as a base layer. Features a three-button placket and waffle-knit texture.',
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 14,
        name: 'Tech Fleece Joggers',
        category: 'Hoodies', // Using Hoodies for simplicity, could be 'Pants' or 'Loungewear'
        price: 85.00,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Grey', 'Navy'],
        description: 'Modern joggers made from lightweight tech fleece. Tapered fit for a clean look, perfect for the gym or the street.',
        image: 'https://images.unsplash.com/photo-1563389234563-74563500a29a?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 15,
        name: 'Wool Beanie',
        category: 'Accessories',
        price: 39.99,
        sizes: ['One Size'],
        colors: ['Mustard', 'Grey', 'Black'],
        description: 'A soft and warm beanie made from a premium wool blend. A stylish essential for cold weather.',
        image: 'https://images.unsplash.com/photo-1576228342461-428139a099a4?q=80&w=1920&auto=format&fit=crop',
    },
];
