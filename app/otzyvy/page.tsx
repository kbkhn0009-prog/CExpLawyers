import { Star } from "lucide-react"

export const metadata = {
  title: "Отзывы клиентов | Consul Expert Lawyer",
  description: "Реальные отзывы наших клиентов. Видео-отзывы и рейтинг на Яндекс.Картах.",
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8 text-center">
            Отзывы наших клиентов
          </h1>

          {/* Рейтинг */}
          <div className="bg-white rounded-lg p-8 shadow-md border border-[#E8D5C4] mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-8 w-8 text-[#D4A574] fill-[#D4A574]" />
              <span className="text-4xl font-bold text-[#2C1810]">4.9</span>
            </div>
            <p className="text-lg text-[#5A4A38] mb-2">Рейтинг на Яндекс.Картах</p>
            <p className="text-sm text-[#5A4A38]">На основе 127 отзывов</p>
          </div>

          {/* Видео-отзывы */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2C1810] mb-4">Видео-отзывы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-md border border-[#E8D5C4]">
                <div className="aspect-video bg-[#E8D5C4] rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-[#5A4A38]">YouTube видео будет здесь</p>
                </div>
                <p className="text-sm font-semibold text-[#2C1810]">Иван Петров</p>
                <p className="text-xs text-[#5A4A38]">Дело по гражданскому праву</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-[#E8D5C4]">
                <div className="aspect-video bg-[#E8D5C4] rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-[#5A4A38]">YouTube видео будет здесь</p>
                </div>
                <p className="text-sm font-semibold text-[#2C1810]">Мария Иванова</p>
                <p className="text-xs text-[#5A4A38]">Дело по семейному праву</p>
              </div>
            </div>
          </div>

          {/* Текстовые отзывы */}
          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#D4A574] fill-[#D4A574]" />
                ))}
              </div>
              <p className="text-[#5A4A38] mb-3">
                "Обратился к Кириллу по сложному делу о взыскании долга. Профессиональный подход, 
                все сделали быстро и качественно. Рекомендую!"
              </p>
              <p className="text-sm font-semibold text-[#2C1810]">— Сергей К.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#D4A574] fill-[#D4A574]" />
                ))}
              </div>
              <p className="text-[#5A4A38] mb-3">
                "Женя помогла решить вопрос с разделом имущества при разводе. Очень внимательная, 
                все объяснила доступно. Благодарна за помощь!"
              </p>
              <p className="text-sm font-semibold text-[#2C1810]">— Анна М.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#D4A574] fill-[#D4A574]" />
                ))}
              </div>
              <p className="text-[#5A4A38] mb-3">
                "AI-консультант Ольга помогла быстро разобраться в ситуации. Потом записался 
                на консультацию к юристу. Удобно и экономит время!"
              </p>
              <p className="text-sm font-semibold text-[#2C1810]">— Дмитрий В.</p>
            </div>
          </div>

          {/* Яндекс.Карты виджет */}
          <div className="bg-white rounded-lg p-8 shadow-md border border-[#E8D5C4]">
            <h2 className="text-2xl font-bold text-[#2C1810] mb-4">Отзывы на Яндекс.Картах</h2>
            <div className="aspect-video bg-[#E8D5C4] rounded-lg flex items-center justify-center">
              <p className="text-[#5A4A38]">Виджет Яндекс.Карт будет здесь</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

