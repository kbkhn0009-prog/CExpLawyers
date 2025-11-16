"use client"

import { motion } from "framer-motion"
import { Scale, Users, Award, Handshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutLawyers() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#F5F1E8] relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D5C4]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A574]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A574]/20 px-4 py-2 text-sm font-medium text-[#2C1810] mb-4">
            <Users className="h-4 w-4" />
            О команде
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C1810] mb-4">
            Кто защищает ваши интересы
          </h2>
          <p className="text-lg text-[#5A4A38] max-w-2xl mx-auto">
            <span className="font-semibold text-[#2C1810]">Кирилл Барбухин</span> — стратег, <span className="font-semibold text-[#2C1810]">Женя Малышева</span> — переговорщик. Вместе — непробиваемая команда
          </p>
        </motion.div>

        {/* Split Layout: Два юриста */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Кирилл Барбухин */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-6 w-full max-w-sm">
              <div className="absolute inset-0 bg-[#D4A574] rounded-lg transform rotate-3" />
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/lawyers/kirill-barbukhin.jpg"
                  alt="Кирилл Барбухин — юрист-стратег, основатель Consul Expert Lawyer"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C1810] mb-2">
                Кирилл Барбухин
              </h3>
              <p className="text-[#D4A574] font-semibold mb-4">Стратег • Основатель</p>
              <p className="text-[#5A4A38] mb-4 leading-relaxed">
                Специализируется на сложных гражданских делах и корпоративных спорах. 
                Более 15 лет опыта в стратегическом планировании судебных процессов. 
                Авторитетный эксперт в области защиты интересов бизнеса.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-[#E8D5C4] rounded-full text-sm text-[#2C1810]">
                  Гражданское право
                </span>
                <span className="px-3 py-1 bg-[#E8D5C4] rounded-full text-sm text-[#2C1810]">
                  Корпоративные споры
                </span>
                <span className="px-3 py-1 bg-[#E8D5C4] rounded-full text-sm text-[#2C1810]">
                  Арбитраж
                </span>
              </div>
            </div>
          </motion.div>

          {/* Женя Малышева */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-6 w-full max-w-sm">
              <div className="absolute inset-0 bg-[#E8D5C4] rounded-lg transform -rotate-3" />
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/lawyers/zhenya-malysheva.jpg"
                  alt="Женя Малышева — юрист-переговорщик, сооснователь Consul Expert Lawyer"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C1810] mb-2">
                Женя Малышева
              </h3>
              <p className="text-[#D4A574] font-semibold mb-4">Переговорщик • Сооснователь</p>
              <p className="text-[#5A4A38] mb-4 leading-relaxed">
                Эксперт в семейном и наследственному праву. Мастер досудебного урегулирования 
                споров. Эмпатичный подход к клиентам и умение находить компромиссы там, 
                где другие видят только конфликт.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-[#E8D5C4] rounded-full text-sm text-[#2C1810]">
                  Семейное право
                </span>
                <span className="px-3 py-1 bg-[#E8D5C4] rounded-full text-sm text-[#2C1810]">
                  Наследственное право
                </span>
                <span className="px-3 py-1 bg-[#E8D5C4] rounded-full text-sm text-[#2C1810]">
                  Медиация
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Блок преимуществ команды */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4] text-center">
            <div className="inline-flex p-3 bg-[#D4A574]/20 rounded-lg mb-4">
              <Scale className="h-6 w-6 text-[#D4A574]" />
            </div>
            <h4 className="font-bold text-[#2C1810] mb-2">15+ лет опыта</h4>
            <p className="text-sm text-[#5A4A38]">
              Совместный опыт Кирилла Барбухина и Жени Малышевой в решении сложных юридических задач
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4] text-center">
            <div className="inline-flex p-3 bg-[#D4A574]/20 rounded-lg mb-4">
              <Award className="h-6 w-6 text-[#D4A574]" />
            </div>
            <h4 className="font-bold text-[#2C1810] mb-2">500+ дел</h4>
            <p className="text-sm text-[#5A4A38]">
              Успешно завершенных дел с положительным результатом
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4] text-center">
            <div className="inline-flex p-3 bg-[#D4A574]/20 rounded-lg mb-4">
              <Handshake className="h-6 w-6 text-[#D4A574]" />
            </div>
            <h4 className="font-bold text-[#2C1810] mb-2">94% успеха</h4>
            <p className="text-sm text-[#5A4A38]">
              Процент выигранных дел и довольных клиентов
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#D4A574] hover:bg-[#C17B5A] text-[#2C1810] font-semibold"
          >
            <Link href="/o-nas">
              Узнать больше о нас
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

