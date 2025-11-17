"use client"

import { motion } from "framer-motion"
import { Scale, Users, Award, Handshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutLawyers() {
  return (
    <section id="about" className="py-24 md:py-40 bg-[#0A0A0A] relative overflow-hidden metal-texture">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31937]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#393C41]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-lg px-5 py-2.5 text-sm font-medium text-[#8E8E8E] mb-6">
            <Users className="h-4 w-4 text-[#E31937]" />
            О команде
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Кто защищает ваши интересы
          </h2>
          <p className="text-lg text-[#8E8E8E] max-w-2xl mx-auto font-light">
            <span className="font-semibold text-white">Кирилл Барбухин</span> — стратег, <span className="font-semibold text-white">Женя Малышева</span> — переговорщик. Вместе — непробиваемая команда
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
            <div className="relative mb-8 w-full max-w-sm">
              <div className="absolute inset-0 bg-[#E31937] transform rotate-3 opacity-20" />
              <div className="relative overflow-hidden border border-white/10">
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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Кирилл Барбухин
              </h3>
              <p className="text-[#E31937] font-semibold mb-6 text-lg">Стратег • Основатель</p>
              <p className="text-[#8E8E8E] mb-6 leading-relaxed">
                Специализируется на сложных гражданских делах и корпоративных спорах. 
                Более 15 лет опыта в стратегическом планировании судебных процессов. 
                Авторитетный эксперт в области защиты интересов бизнеса.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm text-white">
                  Гражданское право
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm text-white">
                  Корпоративные споры
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm text-white">
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
            <div className="relative mb-8 w-full max-w-sm">
              <div className="absolute inset-0 bg-[#393C41] transform -rotate-3 opacity-20" />
              <div className="relative overflow-hidden border border-white/10">
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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Женя Малышева
              </h3>
              <p className="text-[#E31937] font-semibold mb-6 text-lg">Переговорщик • Сооснователь</p>
              <p className="text-[#8E8E8E] mb-6 leading-relaxed">
                Эксперт в семейном и наследственному праву. Мастер досудебного урегулирования 
                споров. Технологичный подход к клиентам и умение находить решения там, 
                где другие видят только конфликт.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm text-white">
                  Семейное право
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm text-white">
                  Наследственное право
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm text-white">
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
          <div className="glass rounded-none p-8 text-center hover:border-[#E31937]/30 red-glow-hover transition-all">
            <div className="inline-flex p-4 bg-white/5 border border-white/10 mb-6">
              <Scale className="h-7 w-7 text-[#E31937]" />
            </div>
            <h4 className="font-bold text-white mb-3 text-xl">15+ лет опыта</h4>
            <p className="text-sm text-[#8E8E8E] leading-relaxed">
              Совместный опыт Кирилла Барбухина и Жени Малышевой в решении сложных юридических задач
            </p>
          </div>

          <div className="glass rounded-none p-8 text-center hover:border-[#E31937]/30 red-glow-hover transition-all">
            <div className="inline-flex p-4 bg-white/5 border border-white/10 mb-6">
              <Award className="h-7 w-7 text-[#E31937]" />
            </div>
            <h4 className="font-bold text-white mb-3 text-xl">500+ дел</h4>
            <p className="text-sm text-[#8E8E8E] leading-relaxed">
              Успешно завершенных дел с положительным результатом
            </p>
          </div>

          <div className="glass rounded-none p-8 text-center hover:border-[#E31937]/30 red-glow-hover transition-all">
            <div className="inline-flex p-4 bg-white/5 border border-white/10 mb-6">
              <Handshake className="h-7 w-7 text-[#E31937]" />
            </div>
            <h4 className="font-bold text-white mb-3 text-xl">94% успеха</h4>
            <p className="text-sm text-[#8E8E8E] leading-relaxed">
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
            className="bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold shadow-2xl hover:shadow-[0_0_40px_rgba(227,25,55,0.5)] transition-all px-8 py-6 rounded-none"
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

