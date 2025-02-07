'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/providers/ThemeProvider';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="w-full border-b border-black dark:border-gray-700 bg-background">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="relative hover:opacity-80 transition-opacity duration-200">
          <Image
            src={theme === 'light' ? '/logo.png' : '/logo-white.png'}
            alt="Carl0sfelipe Logo"
            width={80}
            height={50}
            className="h-auto w-auto"
            priority
          />
          <span className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-gray-800 dark:text-gray-100">
            carl0sfelipe
          </span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          {/* Resto do código do Header... */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
} 