"use client"

import { motion } from "framer-motion"
import { Award, Users, TrendingUp, Star } from "lucide-react"
import { useEffect, useState } from "react"

interface Stat {
  value: number
  suffix: string
  label: string
  icon: typeof Award
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "дел", icon: Award },
  { value: 94, suffix: "%", label: "успешных решений", icon: TrendingUp },
  { value: 4.9, suffix: "★", label: "на Яндекс.Картах", icon: Star },
  { value: 15, suffix: "+", label: "лет опыта", icon: Users },
]

export function TrustBar() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <section className="py-12 bg-white border-y border-[#E8D5C4]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={animated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 bg-[#D4A574]/20 rounded-lg mb-3">
                  <Icon className="h-6 w-6 text-[#D4A574]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-1">
                  {stat.value}
                  <span className="text-[#D4A574]">{stat.suffix}</span>
                </div>
                <div className="text-sm text-[#5A4A38]">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

