"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Scale } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F1E8] via-[#E8D5C4] to-[#F5F1E8] py-20 md:py-32">
      {/* Декоративные SVG узоры */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="legal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 0h100v100H0z" fill="none"/>
              <path d="M50 0v100M0 50h100" stroke="#2C1810" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#legal-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#D4A574]/20 px-4 py-2 text-sm font-medium text-[#2C1810]">
            <Scale className="h-4 w-4" />
            Диджитал-юристы с 15+ лет опыта
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl text-[#2C1810]">
            Юридическая защита с душой и интеллектом
          </h1>

          <p className="mb-4 text-xl text-[#5A4A38] text-pretty md:text-2xl leading-relaxed">
            Решаем задачи, которые другие боятся брать
          </p>

          <p className="mb-8 text-lg text-[#5A4A38]">
            <span className="font-semibold text-[#2C1810]">Кирилл Барбухин</span> & <span className="font-semibold text-[#2C1810]">Женя Малышева</span> — диджитал-юристы с 15+ лет опыта в сложных делах
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              asChild 
              className="w-full sm:w-auto bg-[#D4A574] hover:bg-[#C17B5A] text-[#2C1810] font-semibold"
            >
              <Link href="/ai-lawyer">
                Начать чат с AI-юристом
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="w-full sm:w-auto bg-transparent border-2 border-[#D4A574] text-[#2C1810] hover:bg-[#E8D5C4]"
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

