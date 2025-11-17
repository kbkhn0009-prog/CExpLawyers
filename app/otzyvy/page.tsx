import { Star } from "lucide-react"

export const metadata = {
  title: "Отзывы клиентов | Consul Expert Lawyer",
  description: "Реальные отзывы наших клиентов. Видео-отзывы и рейтинг на Яндекс.Картах.",
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Отзывы наших клиентов
          </h1>

          {/* Рейтинг */}
          <div className="glass rounded-none p-8 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-8 w-8 text-[#E31937] fill-[#E31937]" />
              <span className="text-4xl font-bold text-white">4.9</span>
            </div>
            <p className="text-lg text-[#8E8E8E] mb-2">Рейтинг на Яндекс.Картах</p>
            <p className="text-sm text-[#8E8E8E]">На основе 127 отзывов</p>
          </div>

          {/* Видео-отзывы */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Видео-отзывы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-none p-4">
                <div className="aspect-video bg-white/5 border border-white/10 mb-4 flex items-center justify-center">
                  <p className="text-[#8E8E8E]">YouTube видео будет здесь</p>
                </div>
                <p className="text-sm font-semibold text-white">Иван Петров</p>
                <p className="text-xs text-[#8E8E8E]">Дело по гражданскому праву</p>
              </div>
              <div className="glass rounded-none p-4">
                <div className="aspect-video bg-white/5 border border-white/10 mb-4 flex items-center justify-center">
                  <p className="text-[#8E8E8E]">YouTube видео будет здесь</p>
                </div>
                <p className="text-sm font-semibold text-white">Мария Иванова</p>
                <p className="text-xs text-[#8E8E8E]">Дело по семейному праву</p>
              </div>
            </div>
          </div>

          {/* Текстовые отзывы */}
          <div className="space-y-6 mb-8">
            <div className="glass rounded-none p-6">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#E31937] fill-[#E31937]" />
                ))}
              </div>
              <p className="text-[#8E8E8E] mb-3">
                "Обратился к Кириллу по сложному делу о взыскании долга. Профессиональный подход, 
                все сделали быстро и качественно. Рекомендую!"
              </p>
              <p className="text-sm font-semibold text-white">— Сергей К.</p>
            </div>

            <div className="glass rounded-none p-6">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#E31937] fill-[#E31937]" />
                ))}
              </div>
              <p className="text-[#8E8E8E] mb-3">
                "Женя помогла решить вопрос с разделом имущества при разводе. Очень внимательная, 
                все объяснила доступно. Благодарна за помощь!"
              </p>
              <p className="text-sm font-semibold text-white">— Анна М.</p>
            </div>

            <div className="glass rounded-none p-6">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#E31937] fill-[#E31937]" />
                ))}
              </div>
              <p className="text-[#8E8E8E] mb-3">
                "AI-консультант Ольга помогла быстро разобраться в ситуации. Потом записался 
                на консультацию к юристу. Удобно и экономит время!"
              </p>
              <p className="text-sm font-semibold text-white">— Дмитрий В.</p>
            </div>
          </div>

          {/* Яндекс.Карты виджет */}
          <div className="glass rounded-none p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Отзывы на Яндекс.Картах</h2>
            <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
              <p className="text-[#8E8E8E]">Виджет Яндекс.Карт будет здесь</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

