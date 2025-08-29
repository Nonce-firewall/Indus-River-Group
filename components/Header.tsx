'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Approach', href: '/approach' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 hero-gradient shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center">
              <img 
                src="/Indus%20River%20logo%20alone.png" 
                alt="Indus River Group" 
                className="h-12 w-12 sm:h-16 sm:w-16 mr-2 sm:mr-4" 
              />
              <span className="text-lg sm:text-2xl leading-tight text-indus-blue font-black">
              <span className="text-lg sm:text-2xl leading-tight text-white font-black">
                INDUS RIVER
              </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link font-semibold text-white hover:text-cerulean ${pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cerulean transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-charcoal-grey border-t border-white/20 shadow-lg">
            <div className="py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-cerulean transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}