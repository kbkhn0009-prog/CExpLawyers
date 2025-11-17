"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Scale } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32 md:py-48 metal-texture">
      {/* Tesla Red Chain Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="chain-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100 L200 100 M100 0 L100 200" stroke="#E31937" strokeWidth="1" opacity="0.3"/>
              <circle cx="50" cy="50" r="3" fill="#E31937" opacity="0.5"/>
              <circle cx="150" cy="150" r="3" fill="#E31937" opacity="0.5"/>
              <path d="M50 50 L150 150" stroke="#E31937" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chain-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-lg px-5 py-2.5 text-sm font-medium text-[#8E8E8E]">
            <Scale className="h-4 w-4 text-[#E31937]" />
            Диджитал-юристы с 15+ лет опыта
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl text-white leading-[1.1]">
            Юридическая точность. Без эмоций — с результатом
          </h1>

          <p className="mb-6 text-xl text-[#8E8E8E] text-pretty md:text-2xl leading-relaxed font-light">
            Решаем задачи, которые другие боятся брать
          </p>

          <p className="mb-12 text-lg text-[#8E8E8E]">
            <span className="font-semibold text-white">Кирилл Барбухин</span> & <span className="font-semibold text-white">Женя Малышева</span> — диджитал-юристы с 15+ лет опыта в сложных делах
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              asChild 
              className="w-full sm:w-auto bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold transition-all px-8 py-6 text-base shadow-2xl hover:shadow-[0_0_40px_rgba(227,25,55,0.5)] rounded-none"
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
              className="w-full sm:w-auto bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all px-8 py-6 text-base rounded-none"
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

