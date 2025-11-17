import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'

const blogPosts: Record<string, {
  title: string
  content: string
  author: string
  date: string
  category: string
}> = {
  "nasledovanie-kvartiry": {
    title: "Как наследовать квартиру через 10 лет после смерти родителя",
    content: `
      <h2>Вопрос читателя</h2>
      <p>Мой отец умер 10 лет назад, и я не вступил в наследство вовремя. Теперь хочу оформить квартиру на себя. Что делать?</p>
      
      <h2>Правовой анализ</h2>
      <p>Согласно статье 1154 ГК РФ, срок принятия наследства составляет 6 месяцев со дня открытия наследства. Однако существует возможность восстановить пропущенный срок или признать фактическое принятие наследства.</p>
      
      <h2>Практический совет</h2>
      <p>Если вы фактически приняли наследство (проживали в квартире, оплачивали коммунальные услуги), можно обратиться в суд с заявлением о признании права собственности. В противном случае необходимо восстановить срок принятия наследства через суд.</p>
      
      <h2>Что делать дальше</h2>
      <p>Рекомендуем обратиться к юристу для подготовки документов и представления ваших интересов в суде. Процесс может занять от 3 до 6 месяцев.</p>
    `,
    author: "Кирилл Барбухин",
    date: "2025-01-15",
    category: "Наследственное право"
  },
  "osparivanie-shtrafa-gibdd": {
    title: "Как оспорить штраф ГИБДД в 2025 году: пошаговая инструкция",
    content: `
      <h2>Вопрос читателя</h2>
      <p>Получил штраф ГИБДД, но считаю его несправедливым. Как оспорить?</p>
      
      <h2>Правовой анализ</h2>
      <p>Согласно КоАП РФ, у вас есть 10 дней с момента получения постановления для подачи жалобы. Жалоба подается в суд или вышестоящему должностному лицу.</p>
      
      <h2>Практический совет</h2>
      <p>Соберите доказательства (фото, видео, показания свидетелей), подготовьте жалобу с правовым обоснованием и подайте ее в течение 10 дней. В большинстве случаев при наличии доказательств штраф отменяется.</p>
      
      <h2>Что делать дальше</h2>
      <p>Если вы не уверены в своих силах, обратитесь к юристу. Мы поможем подготовить жалобу и представлять ваши интересы в суде.</p>
    `,
    author: "Женя Малышева",
    date: "2025-01-10",
    category: "Административное право"
  },
  "razdel-imushchestva-pri-razvode": {
    title: "Раздел имущества при разводе: что нужно знать",
    content: `
      <h2>Вопрос читателя</h2>
      <p>Разводимся с супругом. Как правильно разделить совместно нажитое имущество?</p>
      
      <h2>Правовой анализ</h2>
      <p>Согласно Семейному кодексу РФ, имущество, нажитое в браке, является совместной собственностью супругов и делится поровну. Исключение составляют подарки, наследство и имущество, приобретенное до брака.</p>
      
      <h2>Практический совет</h2>
      <p>Попробуйте договориться с супругом и заключить соглашение о разделе имущества. Если договориться не получается, обращайтесь в суд. Важно собрать все документы на имущество и оценить его стоимость.</p>
      
      <h2>Что делать дальше</h2>
      <p>Рекомендуем обратиться к юристу для подготовки соглашения или представления интересов в суде. Мы поможем защитить ваши права и добиться справедливого раздела.</p>
    `,
    author: "Женя Малышева",
    date: "2025-01-05",
    category: "Семейное право"
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#8E8E8E] hover:text-[#E31937] mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Назад к блогу
          </Link>

          <article className="glass rounded-none p-8">
            <div className="mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-[#8E8E8E] mb-8 pb-6 border-b border-white/10">
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

            <div 
              className="prose prose-lg max-w-none text-[#8E8E8E] prose-headings:text-white prose-strong:text-white prose-a:text-[#E31937]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-[#8E8E8E] mb-4">
                <strong className="text-white">Важно:</strong> Данная статья носит информационный характер и не является юридической консультацией. 
                Для решения вашей конкретной ситуации необходима индивидуальная консультация с юристом.
              </p>
              <Link 
                href="/kontakty#contact"
                className="inline-block px-6 py-3 bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold rounded-none transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(227,25,55,0.5)]"
              >
                Записаться на консультацию
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

