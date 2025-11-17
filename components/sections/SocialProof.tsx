"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-12 bg-[#0A0A0A] border-y border-[#393C41]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-white/10 mb-4">
            <Award className="h-5 w-5 text-[#E31937]" />
            <span className="text-sm font-semibold text-white">
              Члены Адвокатской палаты Москвы
            </span>
          </div>
          <p className="text-sm text-[#8E8E8E]">
            Наши юристы имеют все необходимые сертификаты и состоят в профессиональных объединениях
          </p>
        </motion.div>
      </div>
    </section>
  )
}

