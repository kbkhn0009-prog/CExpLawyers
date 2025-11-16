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
  medium: { label: 'Средняя', color: 'bg-[#C9A961]' },
  high: { label: 'Сложная', color: 'bg-[#1a1a2e]' }
}

export function PracticeCard({ title, description, icon: Icon, cases, complexity, slug, winsCount = 0 }: PracticeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/praktika/${slug}`}>
        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col border border-[#e2e8f0] hover:border-[#C9A961]/30">
          <div className="flex items-start justify-between mb-6">
            <div className="p-4 bg-[#f8f9fa] rounded-lg border border-[#e2e8f0]">
              <Icon className="h-7 w-7 text-[#1a1a2e]" />
            </div>
            <Badge className={`${complexityLabels[complexity].color} text-white`}>
              {complexityLabels[complexity].label}
            </Badge>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3 font-cormorant">{title}</h3>
          <p className="text-[#64748b] mb-6 flex-1 leading-relaxed">{description}</p>

          <div className="space-y-2.5 mb-6">
            {cases.slice(0, 3).map((caseItem, idx) => (
              <div key={idx} className="text-sm text-[#475569] flex items-start gap-2.5">
                <span className="text-[#C9A961] font-bold">•</span>
                <span>{caseItem}</span>
              </div>
            ))}
          </div>

          {winsCount > 0 && (
            <div className="pt-6 border-t border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">
                <span className="font-semibold text-[#C9A961]">{winsCount}+</span> выигранных дел
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

