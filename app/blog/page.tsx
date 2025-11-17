import Link from "next/link"
import { Calendar, User } from "lucide-react"

export const metadata = {
  title: "Блог | Consul Expert Lawyer",
  description: "Полезные статьи по юридическим вопросам. Практические советы от экспертов.",
}

const blogPosts = [
  {
    slug: "nasledovanie-kvartiry",
    title: "Как наследовать квартиру через 10 лет после смерти родителя",
    excerpt: "Разбираемся в сложностях наследования недвижимости и восстанавливаем пропущенные сроки.",
    author: "Кирилл Барбухин",
    date: "2025-01-15",
    category: "Наследственное право"
  },
  {
    slug: "osparivanie-shtrafa-gibdd",
    title: "Как оспорить штраф ГИБДД в 2025 году: пошаговая инструкция",
    excerpt: "Актуальная информация о порядке обжалования постановлений ГИБДД с учетом последних изменений в законодательстве.",
    author: "Женя Малышева",
    date: "2025-01-10",
    category: "Административное право"
  },
  {
    slug: "razdel-imushchestva-pri-razvode",
    title: "Раздел имущества при разводе: что нужно знать",
    excerpt: "Практические советы по разделу совместно нажитого имущества и защите своих прав.",
    author: "Женя Малышева",
    date: "2025-01-05",
    category: "Семейное право"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Блог
          </h1>
          <p className="text-lg text-[#8E8E8E] mb-12 text-center">
            Полезные статьи по юридическим вопросам от наших экспертов
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block glass rounded-none p-6 hover:border-[#E31937]/30 red-glow-hover transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-[#E31937] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#8E8E8E] mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[#8E8E8E]">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

