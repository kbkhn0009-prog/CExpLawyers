"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PracticeCardProps {
  title: string
  description: string
  icon: LucideIcon
  cases: string[]
  complexity: 'low' | 'medium' | 'high'
  slug: string
  winsCount?: number
}

const complexityLabels = {
  low: { label: 'Простая', color: 'bg-[#059669]' },
  medium: { label: 'Средняя', color: 'bg-[#393C41]' },
  high: { label: 'Сложная', color: 'bg-[#E31937]' }
}

export function PracticeCard({ title, description, icon: Icon, cases, complexity, slug, winsCount = 0 }: PracticeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/praktika/${slug}`}>
        <div className="glass rounded-none p-8 hover:border-[#E31937]/30 red-glow-hover transition-all h-full flex flex-col relative group">
          {/* Red Top Indicator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E31937] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-start justify-between mb-6">
            <div className="p-4 bg-white/5 border border-white/10">
              <Icon className="h-7 w-7 text-white/90" />
            </div>
            <Badge className={`${complexityLabels[complexity].color} text-white rounded-none`}>
              {complexityLabels[complexity].label}
            </Badge>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-[#8E8E8E] mb-6 flex-1 leading-relaxed">{description}</p>

          <div className="space-y-2.5 mb-6">
            {cases.slice(0, 3).map((caseItem, idx) => (
              <div key={idx} className="text-sm text-[#8E8E8E] flex items-start gap-2.5">
                <span className="text-[#E31937] font-bold">•</span>
                <span>{caseItem}</span>
              </div>
            ))}
          </div>

          {winsCount > 0 && (
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-[#8E8E8E]">
                <span className="font-semibold text-[#E31937]">{winsCount}+</span> выигранных дел
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

