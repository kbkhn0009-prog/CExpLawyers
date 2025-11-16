"use client"

import { practices } from "@/data/practices"
import { PracticeCard } from "@/components/ui/PracticeCard"
import { motion } from "framer-motion"

export function PracticesGrid() {
  return (
    <section id="practices" className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C1810] mb-4">
            Наши практики
          </h2>
          <p className="text-lg text-[#5A4A38] max-w-2xl mx-auto">
            Комплексная юридическая защита по всем направлениям права
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PracticeCard {...practice} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

