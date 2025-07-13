"use client";

import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "আমাদের কথা" },
    { href: "/our-work", label: "আমাদের কাজ" },
    { href: "/blog", label: "ব্লগ" },
    { href: "/library", label: "লাইব্রেরি ও মাল্টিমিডিয়া" },
    { href: "/schedule", label: "শিডিউল ট্রেইনিং" },
    { href: "/consultancy", label: "কনসালটেন্সি" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 lg:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-destructive transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover:bg-orange-50">
              <Search className="h-5 w-5" />
            </Button>
            <Link href={"/contact"}>
              <Button className="bg-destructive text-white shadow-lg flex-1">
                যোগাযোগ করুন
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-destructive transition-colors font-medium py-2 px-2 rounded-lg hover:bg-orange-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-3 pt-3 border-t">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-orange-50"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Link href={"/contact"}>
                  <Button className="bg-destructive text-white shadow-lg flex-1">
                    যোগাযোগ করুন
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
