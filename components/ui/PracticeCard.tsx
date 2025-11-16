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
  low: { label: 'Простая', color: 'bg-[#7A9B57]' },
  medium: { label: 'Средняя', color: 'bg-[#D4A574]' },
  high: { label: 'Сложная', color: 'bg-[#C17B5A]' }
}

export function PracticeCard({ title, description, icon: Icon, cases, complexity, slug, winsCount = 0 }: PracticeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/praktika/${slug}`}>
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col border border-[#E8D5C4]">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-[#E8D5C4] rounded-lg">
              <Icon className="h-6 w-6 text-[#2C1810]" />
            </div>
            <Badge className={complexityLabels[complexity].color}>
              {complexityLabels[complexity].label}
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-[#2C1810] mb-2">{title}</h3>
          <p className="text-[#5A4A38] mb-4 flex-1">{description}</p>

          <div className="space-y-2 mb-4">
            {cases.slice(0, 3).map((caseItem, idx) => (
              <div key={idx} className="text-sm text-[#5A4A38] flex items-start gap-2">
                <span className="text-[#D4A574]">•</span>
                <span>{caseItem}</span>
              </div>
            ))}
          </div>

          {winsCount > 0 && (
            <div className="pt-4 border-t border-[#E8D5C4]">
              <p className="text-sm text-[#5A4A38]">
                <span className="font-semibold text-[#D4A574]">{winsCount}+</span> выигранных дел
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

