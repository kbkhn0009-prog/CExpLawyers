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
  medium: { label: 'Средняя', color: 'bg-[#6B7280]' },
  high: { label: 'Сложная', color: 'bg-[#1E3A5F]' }
}

export function PracticeCard({ title, description, icon: Icon, cases, complexity, slug, winsCount = 0 }: PracticeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/praktika/${slug}`}>
        <div className="corporate-card corporate-card-hover p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-[#F3F4F6] border border-[#E5E7EB]">
              <Icon className="h-6 w-6 text-[#1E3A5F]" />
            </div>
            <Badge className={`${complexityLabels[complexity].color} text-white text-xs`}>
              {complexityLabels[complexity].label}
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-[#111827] mb-3">{title}</h3>
          <p className="text-[#4B5563] mb-4 flex-1 leading-relaxed text-sm">{description}</p>

          <div className="space-y-2 mb-4">
            {cases.slice(0, 3).map((caseItem, idx) => (
              <div key={idx} className="text-sm text-[#6B7280] flex items-start gap-2">
                <span className="text-[#1E3A5F] font-bold">•</span>
                <span>{caseItem}</span>
              </div>
            ))}
          </div>

          {winsCount > 0 && (
            <div className="pt-4 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280]">
                <span className="font-semibold text-[#1E3A5F]">{winsCount}+</span> выигранных дел
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

