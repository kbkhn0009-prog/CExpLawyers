import { notFound } from 'next/navigation'
import { practices } from '@/data/practices'
import { PracticeCard } from '@/components/ui/PracticeCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return practices.map((practice) => ({
    slug: practice.slug,
  }))
}

export default function PracticePage({ params }: { params: { slug: string } }) {
  const practice = practices.find(p => p.slug === params.slug)

  if (!practice) {
    notFound()
  }

  const Icon = practice.icon

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#1E3A5F] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Назад на главную
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-[#F3F4F6] border border-[#E5E7EB]">
              <Icon className="h-8 w-8 text-[#1E3A5F]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-2">
                {practice.title}
              </h1>
              <p className="text-lg text-[#6B7280]">{practice.description}</p>
            </div>
          </div>

          <div className="corporate-card corporate-card-hover p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Ключевые направления</h2>
            <ul className="space-y-3">
              {practice.cases.map((caseItem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#1E3A5F] text-xl font-bold">•</span>
                  <span className="text-[#6B7280]">{caseItem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="corporate-card corporate-card-hover p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Наш опыт</h2>
            <p className="text-[#6B7280] mb-4">
              За годы работы мы успешно завершили множество дел в области {practice.title.toLowerCase()}. 
              Наши юристы имеют глубокие знания и практический опыт решения сложных правовых вопросов.
            </p>
            {practice.winsCount && (
              <p className="text-lg font-semibold text-[#1E3A5F]">
                Более {practice.winsCount} успешных дел
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#1E3A5F] hover:bg-[#152A4A] text-white font-semibold shadow-lg hover:shadow-xl">
              <Link href="/kontakty#contact">Записаться на консультацию</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#E5E7EB] text-[#111827] hover:bg-[#F9FAFB] hover:border-[#1E3A5F]">
              <Link href="/ai-lawyer">Задать вопрос AI-юристу</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

