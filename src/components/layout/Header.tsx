'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'トップ' },
  { href: '/company', label: '会社概要' },
  { href: '/greeting', label: '代表挨拶' },
  { href: '/team', label: '社員紹介' },
  { href: '/contact', label: 'お問い合わせ' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-900 shadow-lg'
          : 'bg-forest-900/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            {/* Leaf accent */}
            <svg
              className="h-6 w-6 text-forest-500 transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
            <span className="text-xl font-semibold tracking-wide text-cream transition-colors duration-300 group-hover:text-forest-500">
              Bremch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-forest-500'
                          : 'text-cream hover:text-forest-500'
                      }`}
                    >
                      {link.label}
                      {/* Underline animation */}
                      <span
                        className={`absolute bottom-0 left-1/2 h-0.5 bg-forest-500 transition-all duration-300 ${
                          isActive
                            ? 'w-4/5 -translate-x-1/2'
                            : 'w-0 -translate-x-1/2'
                        }`}
                      />
                      {/* Hover underline */}
                      {!isActive && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-forest-500 transition-all duration-300 group-hover:w-4/5 hover:w-4/5 peer-hover:w-4/5" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
          >
            <div className="flex h-5 w-6 flex-col items-center justify-center">
              <span
                className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${
                  isMenuOpen ? 'translate-y-[4.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`mt-1.5 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`mt-1.5 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                  isMenuOpen ? '-translate-y-[7.5px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-forest-800 px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-forest-700/50 text-forest-500'
                        : 'text-cream hover:bg-forest-700/30 hover:text-forest-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
