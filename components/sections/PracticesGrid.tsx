"use client"

import { practices } from "@/data/practices"
import { PracticeCard } from "@/components/ui/PracticeCard"
import { motion } from "framer-motion"

export function PracticesGrid() {
  return (
    <section id="practices" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-6 font-cormorant">
            Наши практики
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto font-light">
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

