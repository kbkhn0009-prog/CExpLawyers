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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 text-center">
            Блог
          </h1>
          <p className="text-lg text-[#6B7280] mb-12 text-center">
            Полезные статьи по юридическим вопросам от наших экспертов
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block corporate-card corporate-card-hover p-6 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#F3F4F6] border border-[#E5E7EB] text-xs text-[#111827]">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#111827] mb-3 hover:text-[#1E3A5F] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B7280] mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[#6B7280]">
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

