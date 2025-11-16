"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scale } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e2e8f0] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-7 w-7 text-[#C9A961]" />
          <span className="text-xl font-bold text-[#1a1a2e] font-cormorant">Consul Expert Lawyer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/praktika" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
            Практики
          </Link>
          <Link href="/o-nas" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
            О нас
          </Link>
          <Link href="/otzyvy" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
            Отзывы
          </Link>
          <Link href="/blog" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
            Блог
          </Link>
          <Link href="/kontakty" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
            Контакты
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all">
            <Link href="/ai-lawyer">AI-юрист</Link>
          </Button>
          <Button asChild className="bg-[#C9A961] hover:bg-[#B8860B] text-white font-semibold shadow-md">
            <Link href="/kontakty#contact">Консультация</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#1a1a2e]" /> : <Menu className="h-6 w-6 text-[#1a1a2e]" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/praktika" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
              Практики
            </Link>
            <Link href="/o-nas" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
              О нас
            </Link>
            <Link href="/otzyvy" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
              Отзывы
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
              Блог
            </Link>
            <Link href="/kontakty" className="text-sm font-medium text-[#475569] hover:text-[#C9A961] transition-colors">
              Контакты
            </Link>
            <Button asChild variant="outline" className="w-full border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white">
              <Link href="/ai-lawyer">AI-юрист</Link>
            </Button>
            <Button asChild className="w-full bg-[#C9A961] hover:bg-[#B8860B] text-white font-semibold">
              <Link href="/kontakty#contact">Консультация</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

