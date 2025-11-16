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
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8 text-center">
            О нас
          </h1>

          {/* История команды */}
          <div className="bg-white rounded-lg p-8 shadow-md border border-[#E8D5C4] mb-8">
            <h2 className="text-2xl font-bold text-[#2C1810] mb-4">Наша история</h2>
            <p className="text-[#5A4A38] mb-4 leading-relaxed">
              Consul Expert Lawyer был основан в 2010 году Кириллом Барбухиным и Женей Малышевой 
              с целью предоставления качественных юридических услуг с использованием современных 
              технологий. За годы работы мы помогли сотням клиентов решить сложные правовые вопросы.
            </p>
            <p className="text-[#5A4A38] leading-relaxed">
              Сегодня мы — одно из ведущих диджитал-юридических агентств в Москве, 
              объединяющее опыт традиционной юриспруденции с инновационными AI-технологиями.
            </p>
          </div>

          {/* Кирилл и Женя */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/lawyers/kirill-barbukhin.jpg"
                  alt="Кирилл Барбухин"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-2">Кирилл Барбухин</h3>
              <p className="text-[#D4A574] font-semibold mb-3">Стратег • Основатель</p>
              <p className="text-[#5A4A38] text-sm">
                Окончил юридический факультет МГУ. Более 15 лет опыта в гражданском праве 
                и арбитраже. Специализируется на сложных корпоративных спорах и защите 
                интересов бизнеса. Автор множества публикаций по праву.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/lawyers/zhenya-malysheva.jpg"
                  alt="Женя Малышева"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-2">Женя Малышева</h3>
              <p className="text-[#D4A574] font-semibold mb-3">Переговорщик • Сооснователь</p>
              <p className="text-[#5A4A38] text-sm">
                Эксперт в семейном и наследственному праву. Мастер медиации и досудебного 
                урегулирования споров. Известна своим эмпатичным подходом к клиентам и 
                умением находить компромиссы в самых сложных ситуациях.
              </p>
            </div>
          </div>

          {/* Миссия и ценности */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <div className="inline-flex p-3 bg-[#D4A574]/20 rounded-lg mb-4">
                <Target className="h-6 w-6 text-[#D4A574]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-3">Наша миссия</h3>
              <p className="text-[#5A4A38]">
                Предоставлять доступную и качественную юридическую помощь, используя 
                современные технологии для решения задач любой сложности.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <div className="inline-flex p-3 bg-[#D4A574]/20 rounded-lg mb-4">
                <Heart className="h-6 w-6 text-[#D4A574]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-3">Наши ценности</h3>
              <ul className="space-y-2 text-[#5A4A38]">
                <li>• Профессионализм и экспертность</li>
                <li>• Честность и прозрачность</li>
                <li>• Индивидуальный подход к каждому клиенту</li>
                <li>• Использование современных технологий</li>
              </ul>
            </div>
          </div>

          {/* Сертификаты */}
          <div className="bg-white rounded-lg p-8 shadow-md border border-[#E8D5C4] mb-8">
            <h2 className="text-2xl font-bold text-[#2C1810] mb-4">Наши достижения</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-[#D4A574] mx-auto mb-2" />
                <p className="text-sm text-[#5A4A38]">Члены Адвокатской палаты Москвы</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-[#D4A574] mx-auto mb-2" />
                <p className="text-sm text-[#5A4A38]">500+ успешных дел</p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-[#D4A574] mx-auto mb-2" />
                <p className="text-sm text-[#5A4A38]">94% успешных решений</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-[#D4A574] hover:bg-[#C17B5A] text-[#2C1810] font-semibold">
              <Link href="/kontakty#contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

