import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} h-full bg-background text-foreground`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-[calc(100vh-160px)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
