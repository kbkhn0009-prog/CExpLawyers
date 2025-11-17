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
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#8E8E8E] hover:text-[#E31937] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Назад на главную
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/5 border border-white/10">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {practice.title}
              </h1>
              <p className="text-lg text-[#8E8E8E]">{practice.description}</p>
            </div>
          </div>

          <div className="glass rounded-none p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ключевые направления</h2>
            <ul className="space-y-3">
              {practice.cases.map((caseItem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#E31937] text-xl">•</span>
                  <span className="text-[#8E8E8E]">{caseItem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-none p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Наш опыт</h2>
            <p className="text-[#8E8E8E] mb-4">
              За годы работы мы успешно завершили множество дел в области {practice.title.toLowerCase()}. 
              Наши юристы имеют глубокие знания и практический опыт решения сложных правовых вопросов.
            </p>
            {practice.winsCount && (
              <p className="text-lg font-semibold text-[#E31937]">
                Более {practice.winsCount} успешных дел
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold rounded-none shadow-2xl hover:shadow-[0_0_40px_rgba(227,25,55,0.5)]">
              <Link href="/kontakty#contact">Записаться на консультацию</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-none">
              <Link href="/ai-lawyer">Задать вопрос AI-юристу</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

