import React, { useState } from 'react';
import { Sun, Moon, Menu, X, HeartHandshake, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenGetInvolved: (defaultTab?: 'learner' | 'volunteer' | 'partner') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenGetInvolved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Programs', href: '#programs' },
    { label: 'Skills Academy', href: '#skills-academy' },
    { label: 'Voices & Stories', href: '#stories' },
    { label: 'State Hubs', href: '#state-hubs' },
    { label: 'Support & Pledge', href: '#support' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand wordmark (single element, clean display type) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-stone-900 dark:text-stone-100 font-display text-xl sm:text-2xl font-extrabold tracking-tight whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-black text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              SS
            </span>
            <span>
              S.SUDAN <span className="text-amber-600 dark:text-amber-400 font-light">HOPE</span>
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text links with subtle hover */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600 dark:text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 relative py-1 text-sm tracking-normal after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 dark:after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + theme toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            <button
              onClick={() => onOpenGetInvolved('learner')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Get Involved</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetInvolved('learner');
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg"
            >
              Apply for Skills Training
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetInvolved('volunteer');
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-medium text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg"
            >
              Volunteer or Partner
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
