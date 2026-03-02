import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/lightswind/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/lightswind/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
];

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">UrbanThreads</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
                  isActive ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 p-4">
                  <Link to="/" className="font-bold text-lg mb-4">UrbanThreads</Link>
                  {navLinks.map((link) => (
                    <NavLink
                      key={`mobile-${link.href}`}
                      to={link.href}
                      className={({ isActive }) =>
                        `transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
                          isActive ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <hr className="border-gray-200 dark:border-gray-700"/>
                  <Link to="/login">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/cart">
                    <Button variant="outline" className="w-full justify-start relative">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Cart
                      {itemCount > 0 && (
                        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                          {itemCount}
                        </span>
                      )}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
