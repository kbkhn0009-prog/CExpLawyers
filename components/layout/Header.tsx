"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scale, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Scale className="h-6 w-6 text-[#1E3A5F] group-hover:text-[#152A4A] transition-colors" />
          <span className="text-lg font-bold text-[#111827] group-hover:text-[#1E3A5F] transition-colors">Consul Expert Lawyer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/praktika" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
            Практики
          </Link>
          <Link href="/o-nas" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
            О нас
          </Link>
          <Link href="/otzyvy" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
            Отзывы
          </Link>
          <Link href="/blog" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
            Блог
          </Link>
          <Link href="/kontakty" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
            Контакты
          </Link>
          
          {/* Social Media */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-[#E5E7EB]">
            <a href="https://t.me/consul_lawyer" target="_blank" rel="noopener noreferrer" 
               className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors"
               aria-label="Telegram канал">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-[#E5E7EB] text-[#111827] hover:bg-[#F9FAFB] hover:border-[#1E3A5F] transition-all">
            <Link href="/ai-lawyer">AI-юрист</Link>
          </Button>
          <Button asChild className="bg-[#1E3A5F] hover:bg-[#152A4A] text-white font-semibold transition-all">
            <Link href="/kontakty#contact">Консультация</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#111827]" /> : <Menu className="h-6 w-6 text-[#111827]" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/praktika" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
              Практики
            </Link>
            <Link href="/o-nas" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
              О нас
            </Link>
            <Link href="/otzyvy" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
              Отзывы
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
              Блог
            </Link>
            <Link href="/kontakty" className="text-sm font-medium text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
              Контакты
            </Link>
            <div className="flex items-center gap-3 pt-2 border-t border-[#E5E7EB]">
              <a href="https://t.me/consul_lawyer" target="_blank" rel="noopener noreferrer" 
                 className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <Button asChild variant="outline" className="w-full border-[#E5E7EB] text-[#111827] hover:bg-[#F9FAFB]">
              <Link href="/ai-lawyer">AI-юрист</Link>
            </Button>
            <Button asChild className="w-full bg-[#1E3A5F] hover:bg-[#152A4A] text-white font-semibold">
              <Link href="/kontakty#contact">Консультация</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

