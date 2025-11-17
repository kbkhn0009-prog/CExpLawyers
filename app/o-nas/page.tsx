import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Target, Heart } from "lucide-react"

export const metadata = {
  title: "О нас | Consul Expert Lawyer",
  description: "Кирилл Барбухин и Женя Малышева — команда диджитал-юристов с 15+ лет опыта. Наша миссия, ценности и история.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8 text-center">
            О нас
          </h1>

          {/* История команды */}
          <div className="corporate-card corporate-card-hover p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Наша история</h2>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              Consul Expert Lawyer был основан в 2010 году Кириллом Барбухиным и Женей Малышевой 
              с целью предоставления качественных юридических услуг с использованием современных 
              технологий. За годы работы мы помогли сотням клиентов решить сложные правовые вопросы.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Сегодня мы — одно из ведущих диджитал-юридических агентств в Москве, 
              объединяющее опыт традиционной юриспруденции с инновационными AI-технологиями.
            </p>
          </div>

          {/* Кирилл и Женя */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="corporate-card corporate-card-hover p-6">
              <div className="relative w-full h-64 mb-4 overflow-hidden border border-[#E5E7EB]">
                <Image
                  src="/lawyers/kirill-barbukhin.jpg"
                  alt="Кирилл Барбухин"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Кирилл Барбухин</h3>
              <p className="text-[#1E3A5F] font-semibold mb-3">Стратег • Основатель</p>
              <p className="text-[#6B7280] text-sm">
                Окончил юридический факультет МГУ. Более 15 лет опыта в гражданском праве 
                и арбитраже. Специализируется на сложных корпоративных спорах и защите 
                интересов бизнеса. Автор множества публикаций по праву.
              </p>
            </div>

            <div className="corporate-card corporate-card-hover p-6">
              <div className="relative w-full h-64 mb-4 overflow-hidden border border-[#E5E7EB]">
                <Image
                  src="/lawyers/zhenya-malysheva.jpg"
                  alt="Женя Малышева"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Женя Малышева</h3>
              <p className="text-[#1E3A5F] font-semibold mb-3">Переговорщик • Сооснователь</p>
              <p className="text-[#6B7280] text-sm">
                Эксперт в семейном и наследственному праву. Мастер медиации и досудебного 
                урегулирования споров. Известна своим профессиональным подходом к клиентам и 
                умением находить решения в самых сложных ситуациях.
              </p>
            </div>
          </div>

          {/* Миссия и ценности */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="corporate-card corporate-card-hover p-6">
              <div className="inline-flex p-3 bg-[#F3F4F6] border border-[#E5E7EB] mb-4">
                <Target className="h-6 w-6 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Наша миссия</h3>
              <p className="text-[#6B7280]">
                Предоставлять доступную и качественную юридическую помощь, используя 
                современные технологии для решения задач любой сложности.
              </p>
            </div>

            <div className="corporate-card corporate-card-hover p-6">
              <div className="inline-flex p-3 bg-[#F3F4F6] border border-[#E5E7EB] mb-4">
                <Heart className="h-6 w-6 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Наши ценности</h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li>• Профессионализм и экспертность</li>
                <li>• Честность и прозрачность</li>
                <li>• Индивидуальный подход к каждому клиенту</li>
                <li>• Использование современных технологий</li>
              </ul>
            </div>
          </div>

          {/* Сертификаты */}
          <div className="corporate-card corporate-card-hover p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Наши достижения</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-[#1E3A5F] mx-auto mb-2" />
                <p className="text-sm text-[#6B7280]">Члены Адвокатской палаты Москвы</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-[#1E3A5F] mx-auto mb-2" />
                <p className="text-sm text-[#6B7280]">500+ успешных дел</p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-[#1E3A5F] mx-auto mb-2" />
                <p className="text-sm text-[#6B7280]">94% успешных решений</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-[#1E3A5F] hover:bg-[#152A4A] text-white font-semibold shadow-lg hover:shadow-xl">
              <Link href="/kontakty#contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

