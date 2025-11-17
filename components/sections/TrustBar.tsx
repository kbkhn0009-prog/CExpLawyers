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
    <section className="py-16 bg-[#0A0A0A] border-y border-[#393C41]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
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
                <div className="inline-flex p-4 bg-white/5 border border-white/10 mb-4">
                  <Icon className="h-7 w-7 text-[#E31937]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-[#E31937]">{stat.suffix}</span>
                </div>
                <div className="text-sm text-[#8E8E8E] font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

