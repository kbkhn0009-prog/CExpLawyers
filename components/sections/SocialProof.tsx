"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-12 bg-[#E8D5C4]/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <Award className="h-5 w-5 text-[#D4A574]" />
            <span className="text-sm font-semibold text-[#2C1810]">
              Члены Адвокатской палаты Москвы
            </span>
          </div>
          <p className="text-sm text-[#5A4A38]">
            Наши юристы имеют все необходимые сертификаты и состоят в профессиональных объединениях
          </p>
        </motion.div>
      </div>
    </section>
  )
}

