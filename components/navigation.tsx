"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LanguageSwitcher } from '@/components/language-switcher';
import {
  User,
  Briefcase,
  Code2,
  Wrench,
  Info,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const navigation = [
  { name: 'About Me', href: '/', icon: User },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: Code2 },
  { name: 'Skills', href: '/skills', icon: Wrench },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="fixed top-4 right-4 z-50 md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transition-transform duration-200 ease-in-out md:translate-x-0 md:relative flex-shrink-0",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex h-16 items-center justify-between px-6 border-b flex-shrink-0">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="border-t p-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}