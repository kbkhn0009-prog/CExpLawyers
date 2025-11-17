"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Scale } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 border-b border-[#E5E7EB]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-2.5 text-sm font-medium text-[#6B7280]">
            <Scale className="h-4 w-4 text-[#1E3A5F]" />
            Юристы с 15+ лет опыта
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl text-[#111827] leading-[1.1]">
            Право без компромиссов.
          </h1>

          <p className="mb-6 text-xl text-[#4B5563] text-pretty md:text-2xl leading-relaxed font-normal">
            Обеспечиваем юридическую защиту для бизнеса и частных лиц. 
            Анализируем риски. Консультируем. Защищаем.
          </p>

          <p className="mb-12 text-lg text-[#6B7280]">
            <span className="font-semibold text-[#111827]">Кирилл Барбухин</span> и <span className="font-semibold text-[#111827]">Женя Малышева</span> — команда юристов с 15+ лет опыта в сложных делах
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              asChild 
              className="w-full sm:w-auto bg-[#1E3A5F] hover:bg-[#152A4A] text-white font-semibold transition-all px-8 py-6 text-base shadow-lg hover:shadow-xl"
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
              className="w-full sm:w-auto bg-transparent border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all px-8 py-6 text-base"
            >
              <Link href="/kontakty#contact">
                Получить стратегию за 15 минут
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

