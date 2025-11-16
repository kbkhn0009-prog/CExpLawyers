"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Scale } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8f9fa] to-white py-24 md:py-40">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="premium-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 0h120v120H0z" fill="none"/>
              <path d="M60 0v120M0 60h120" stroke="#1a1a2e" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="2" fill="#C9A961"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/20 px-5 py-2.5 text-sm font-medium text-[#1a1a2e]">
            <Scale className="h-4 w-4 text-[#C9A961]" />
            Диджитал-юристы с 15+ лет опыта
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-balance md:text-7xl lg:text-8xl text-[#1a1a2e] font-cormorant leading-[1.1]">
            Юридическая защита с душой и интеллектом
          </h1>

          <p className="mb-6 text-xl text-[#475569] text-pretty md:text-2xl leading-relaxed font-light">
            Решаем задачи, которые другие боятся брать
          </p>

          <p className="mb-12 text-lg text-[#64748b]">
            <span className="font-semibold text-[#1a1a2e]">Кирилл Барбухин</span> & <span className="font-semibold text-[#1a1a2e]">Женя Малышева</span> — диджитал-юристы с 15+ лет опыта в сложных делах
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              asChild 
              className="w-full sm:w-auto bg-[#C9A961] hover:bg-[#B8860B] text-white font-semibold shadow-lg hover:shadow-xl transition-all px-8 py-6 text-base"
            >
              <Link href="/ai-lawyer">
                Начать чат с AI-юристом
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="w-full sm:w-auto bg-transparent border-2 border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all px-8 py-6 text-base"
            >
              <Link href="/kontakty#contact">
                Получить стратегию за 15 мин
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

