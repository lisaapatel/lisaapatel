import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '../../lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  { name: 'About Me', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects + Explorations', path: '/projects' },
  { name: 'Travel Recommendations', path: '/travel' },
  { name: 'Contact', path: '/contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-8">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-bold pl-4">
              Lisa Patel
            </Link>
            <nav className="hidden md:flex gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = router.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={clsx(
                      'transition-colors hover:text-foreground/80',
                      isActive ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14">
        {children}
      </main>
    </div>
  );
} 