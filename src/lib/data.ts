export interface Product {
    id: number;
    name: string;
    category: 'T-Shirts' | 'Hoodies' | 'Jeans' | 'Jackets';
    price: number;
    description: string;
    imageUrl: string;
    sizes: string[];
    colors: string[];
    featured?: boolean;
    selectedSize?: string;
    selectedColor?: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Classic Crew Neck T-Shirt',
        category: 'T-Shirts',
        price: 24.99,
        description: 'A timeless classic, this crew neck t-shirt is made from premium, soft-touch cotton for ultimate comfort. Perfect for layering or wearing on its own.',
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White', 'Black', 'Navy'],
        featured: true,
    },
    {
        id: 2,
        name: 'Urban Explorer Hoodie',
        category: 'Hoodies',
        price: 69.99,
        description: 'Stay warm and stylish with our Urban Explorer Hoodie. Featuring a soft fleece interior, adjustable drawstring hood, and a spacious kangaroo pocket.',
        imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Heather Grey', 'Charcoal', 'Olive'],
        featured: true,
    },
    {
        id: 3,
        name: 'Slim Fit Stretch Jeans',
        category: 'Jeans',
        price: 89.99,
        description: 'Engineered for comfort and style, these slim fit jeans offer a modern silhouette with just the right amount of stretch. A versatile staple for any wardrobe.',
        imageUrl: 'https://images.unsplash.com/photo-1602293589930-4535a9a7464b?q=80&w=1935&auto=format&fit=crop',
        sizes: ['30x30', '32x32', '34x32', '36x34'],
        colors: ['Dark Indigo', 'Black Wash', 'Light Wash'],
    },
    {
        id: 4,
        name: 'All-Weather Bomber Jacket',
        category: 'Jackets',
        price: 129.99,
        description: 'This versatile bomber jacket is crafted from a water-resistant shell and features a lightweight insulated lining, making it ideal for transitioning between seasons.',
        imageUrl: 'https://images.unsplash.com/photo-1591047139829-d916b67ea74f?q=80&w=1974&auto=format&fit=crop',
        sizes: ['M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Burgundy'],
        featured: true,
    },
    {
        id: 5,
        name: 'Vintage Graphic Tee',
        category: 'T-Shirts',
        price: 29.99,
        description: 'Add a touch of retro cool to your look with this vintage-inspired graphic tee. Made from 100% ringspun cotton for a soft, lived-in feel.',
        imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop',
        sizes: ['S', 'M', 'L'],
        colors: ['Off-White', 'Washed Black'],
    },
    {
        id: 6,
        name: 'Essential Zip-Up Hoodie',
        category: 'Hoodies',
        price: 74.99,
        description: 'The perfect everyday layer. Our Essential Zip-Up Hoodie is made from a midweight cotton-poly blend with a smooth zipper and ribbed cuffs and hem.',
        imageUrl: 'https://images.unsplash.com/photo-1621352219088-6cea523f034c?q=80&w=1964&auto=format&fit=crop',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Dark Green'],
    },
    {
        id: 7,
        name: 'Relaxed Fit Carpenter Jeans',
        category: 'Jeans',
        price: 99.99,
        description: 'A modern take on a workwear classic. These carpenter jeans feature a relaxed fit, durable denim, and utility pockets for a functional, on-trend look.',
        imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop',
        sizes: ['30x30', '32x32', '34x32', '38x34'],
        colors: ['Stonewash Blue', 'Tan', 'Graphite'],
    },
    {
        id: 8,
        name: 'Technical Field Jacket',
        category: 'Jackets',
        price: 179.99,
        description: 'Built for the modern adventurer, this technical field jacket combines rugged durability with practical features like multiple pockets and a stowaway hood.',
        imageUrl: 'https://images.unsplash.com/photo-1520975954732-35dd222996b7?q=80&w=1974&auto=format&fit=crop',
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['Khaki', 'Black', 'Camo'],
        featured: true,
    },
];
