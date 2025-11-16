import { Scale, Home, Users, Briefcase, FileText, Shield } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Practice {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  cases: string[]
  complexity: 'low' | 'medium' | 'high'
  winsCount?: number
}

export const practices: Practice[] = [
  {
    slug: 'grazhdanskoe-pravo',
    title: 'Гражданское право',
    description: 'Защита ваших интересов в судах по гражданским спорам',
    icon: Scale,
    complexity: 'high',
    cases: [
      'Взыскание долгов',
      'Возмещение ущерба',
      'Защита прав потребителей'
    ],
    winsCount: 150
  },
  {
    slug: 'semejnoe-pravo',
    title: 'Семейное право',
    description: 'Развод, раздел имущества, алименты, опека над детьми',
    icon: Home,
    complexity: 'medium',
    cases: [
      'Раздел имущества при разводе',
      'Взыскание алиментов',
      'Определение места жительства детей'
    ],
    winsCount: 120
  },
  {
    slug: 'nasledstvennoe-pravo',
    title: 'Наследственное право',
    description: 'Оформление наследства, споры между наследниками',
    icon: FileText,
    complexity: 'high',
    cases: [
      'Оспаривание завещания',
      'Признание права на наследство',
      'Раздел наследственного имущества'
    ],
    winsCount: 80
  },
  {
    slug: 'trudovoe-pravo',
    title: 'Трудовое право',
    description: 'Защита прав работников и работодателей',
    icon: Briefcase,
    complexity: 'medium',
    cases: [
      'Восстановление на работе',
      'Взыскание заработной платы',
      'Компенсация морального вреда'
    ],
    winsCount: 90
  },
  {
    slug: 'arbitrazh',
    title: 'Арбитраж',
    description: 'Споры между юридическими лицами и ИП',
    icon: Shield,
    complexity: 'high',
    cases: [
      'Корпоративные споры',
      'Взыскание задолженности',
      'Оспаривание сделок'
    ],
    winsCount: 60
  },
  {
    slug: 'administrativnoe-pravo',
    title: 'Административное право',
    description: 'Оспаривание штрафов, лишение прав, административные дела',
    icon: FileText,
    complexity: 'low',
    cases: [
      'Оспаривание штрафов ГИБДД',
      'Возврат водительских прав',
      'Защита от административных правонарушений'
    ],
    winsCount: 200
  },
]

