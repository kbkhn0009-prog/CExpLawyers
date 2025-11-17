"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scale } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#393C41]/20 bg-[#0A0A0A]/95 backdrop-blur-lg supports-[backdrop-filter]:bg-[#0A0A0A]/90">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Scale className="h-6 w-6 text-white group-hover:text-[#E31937] transition-colors" />
          <span className="text-lg font-bold text-white group-hover:text-[#E31937] transition-colors">Consul Expert Lawyer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/praktika" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
            Практики
          </Link>
          <Link href="/o-nas" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
            О нас
          </Link>
          <Link href="/otzyvy" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
            Отзывы
          </Link>
          <Link href="/blog" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
            Блог
          </Link>
          <Link href="/kontakty" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
            Контакты
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all rounded-none">
            <Link href="/ai-lawyer">AI-юрист</Link>
          </Button>
          <Button asChild className="bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold transition-all rounded-none">
            <Link href="/kontakty#contact">Консультация</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#393C41]/20 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/praktika" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
              Практики
            </Link>
            <Link href="/o-nas" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
              О нас
            </Link>
            <Link href="/otzyvy" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
              Отзывы
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
              Блог
            </Link>
            <Link href="/kontakty" className="text-sm font-medium text-[#8E8E8E] hover:text-[#E31937] transition-colors">
              Контакты
            </Link>
            <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/5 rounded-none">
              <Link href="/ai-lawyer">AI-юрист</Link>
            </Button>
            <Button asChild className="w-full bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold rounded-none">
              <Link href="/kontakty#contact">Консультация</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

