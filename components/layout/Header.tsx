"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scale } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8D5C4] bg-[#F5F1E8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F5F1E8]/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-[#D4A574]" />
          <span className="text-xl font-bold text-[#2C1810]">Consul Expert Lawyer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/praktika" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
            Практики
          </Link>
          <Link href="/o-nas" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
            О нас
          </Link>
          <Link href="/otzyvy" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
            Отзывы
          </Link>
          <Link href="/blog" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
            Блог
          </Link>
          <Link href="/kontakty" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
            Контакты
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-[#D4A574] text-[#2C1810] hover:bg-[#E8D5C4]">
            <Link href="/ai-lawyer">AI-юрист</Link>
          </Button>
          <Button asChild className="bg-[#D4A574] hover:bg-[#C17B5A] text-[#2C1810] font-semibold">
            <Link href="/kontakty#contact">Консультация</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#2C1810]" /> : <Menu className="h-6 w-6 text-[#2C1810]" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8D5C4] bg-[#F5F1E8]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/praktika" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
              Практики
            </Link>
            <Link href="/o-nas" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
              О нас
            </Link>
            <Link href="/otzyvy" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
              Отзывы
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
              Блог
            </Link>
            <Link href="/kontakty" className="text-sm font-medium text-[#5A4A38] hover:text-[#D4A574] transition-colors">
              Контакты
            </Link>
            <Button asChild variant="outline" className="w-full border-[#D4A574] text-[#2C1810] hover:bg-[#E8D5C4]">
              <Link href="/ai-lawyer">AI-юрист</Link>
            </Button>
            <Button asChild className="w-full bg-[#D4A574] hover:bg-[#C17B5A] text-[#2C1810] font-semibold">
              <Link href="/kontakty#contact">Консультация</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

