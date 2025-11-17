"use client"

import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TelegramBotSection() {
  return (
    <section className="py-20 bg-white border-y border-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="corporate-card corporate-card-hover p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 bg-[#F3F4F6] border border-[#E5E7EB] flex-shrink-0">
                <MessageCircle className="h-8 w-8 text-[#1E3A5F]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#111827] mb-3">
                  Telegram-бот для консультаций
                </h2>
                <p className="text-[#4B5563] mb-4 leading-relaxed">
                  Получите первичную консультацию через Telegram-бота. 
                  Быстро. Удобно. Конфиденциально.
                </p>
                <ul className="space-y-2 text-[#4B5563] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E3A5F] font-bold">•</span>
                    <span>Мгновенные ответы на типовые вопросы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E3A5F] font-bold">•</span>
                    <span>Запись на консультацию с юристом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E3A5F] font-bold">•</span>
                    <span>Отправка документов для анализа</span>
                  </li>
                </ul>
                <Button asChild className="bg-[#1E3A5F] hover:bg-[#152A4A] text-white">
                  <Link href="https://t.me/consul_lawyer_bot" target="_blank" rel="noopener noreferrer">
                    Открыть Telegram-бота
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

