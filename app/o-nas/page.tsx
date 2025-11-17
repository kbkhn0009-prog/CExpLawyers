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
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            О нас
          </h1>

          {/* История команды */}
          <div className="glass rounded-none p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Наша история</h2>
            <p className="text-[#8E8E8E] mb-4 leading-relaxed">
              Consul Expert Lawyer был основан в 2010 году Кириллом Барбухиным и Женей Малышевой 
              с целью предоставления качественных юридических услуг с использованием современных 
              технологий. За годы работы мы помогли сотням клиентов решить сложные правовые вопросы.
            </p>
            <p className="text-[#8E8E8E] leading-relaxed">
              Сегодня мы — одно из ведущих диджитал-юридических агентств в Москве, 
              объединяющее опыт традиционной юриспруденции с инновационными AI-технологиями.
            </p>
          </div>

          {/* Кирилл и Женя */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass rounded-none p-6">
              <div className="relative w-full h-64 mb-4 overflow-hidden border border-white/10">
                <Image
                  src="/lawyers/kirill-barbukhin.jpg"
                  alt="Кирилл Барбухин"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Кирилл Барбухин</h3>
              <p className="text-[#E31937] font-semibold mb-3">Стратег • Основатель</p>
              <p className="text-[#8E8E8E] text-sm">
                Окончил юридический факультет МГУ. Более 15 лет опыта в гражданском праве 
                и арбитраже. Специализируется на сложных корпоративных спорах и защите 
                интересов бизнеса. Автор множества публикаций по праву.
              </p>
            </div>

            <div className="glass rounded-none p-6">
              <div className="relative w-full h-64 mb-4 overflow-hidden border border-white/10">
                <Image
                  src="/lawyers/zhenya-malysheva.jpg"
                  alt="Женя Малышева"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Женя Малышева</h3>
              <p className="text-[#E31937] font-semibold mb-3">Переговорщик • Сооснователь</p>
              <p className="text-[#8E8E8E] text-sm">
                Эксперт в семейном и наследственному праву. Мастер медиации и досудебного 
                урегулирования споров. Известна своим технологичным подходом к клиентам и 
                умением находить решения в самых сложных ситуациях.
              </p>
            </div>
          </div>

          {/* Миссия и ценности */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass rounded-none p-6">
              <div className="inline-flex p-3 bg-white/5 border border-white/10 mb-4">
                <Target className="h-6 w-6 text-[#E31937]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Наша миссия</h3>
              <p className="text-[#8E8E8E]">
                Предоставлять доступную и качественную юридическую помощь, используя 
                современные технологии для решения задач любой сложности.
              </p>
            </div>

            <div className="glass rounded-none p-6">
              <div className="inline-flex p-3 bg-white/5 border border-white/10 mb-4">
                <Heart className="h-6 w-6 text-[#E31937]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Наши ценности</h3>
              <ul className="space-y-2 text-[#8E8E8E]">
                <li>• Профессионализм и экспертность</li>
                <li>• Честность и прозрачность</li>
                <li>• Индивидуальный подход к каждому клиенту</li>
                <li>• Использование современных технологий</li>
              </ul>
            </div>
          </div>

          {/* Сертификаты */}
          <div className="glass rounded-none p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Наши достижения</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-[#E31937] mx-auto mb-2" />
                <p className="text-sm text-[#8E8E8E]">Члены Адвокатской палаты Москвы</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-[#E31937] mx-auto mb-2" />
                <p className="text-sm text-[#8E8E8E]">500+ успешных дел</p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-[#E31937] mx-auto mb-2" />
                <p className="text-sm text-[#8E8E8E]">94% успешных решений</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold rounded-none shadow-2xl hover:shadow-[0_0_40px_rgba(227,25,55,0.5)]">
              <Link href="/kontakty#contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

