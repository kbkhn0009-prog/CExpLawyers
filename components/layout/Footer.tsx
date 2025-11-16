import Link from "next/link"
import { Scale, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-[#f1f5f9] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* О компании */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-7 w-7 text-[#C9A961]" />
              <span className="text-xl font-bold text-white font-cormorant">Consul Expert Lawyer</span>
            </div>
            <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">
              Диджитал-юридическое агентство с AI-консультантом. 
              Решаем задачи, которые другие боятся брать.
            </p>
          </div>

          {/* Практики */}
          <div>
            <h3 className="font-semibold text-white mb-6 font-cormorant">Практики</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/praktika/grazhdanskoe-pravo" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Гражданское право</Link></li>
              <li><Link href="/praktika/semejnoe-pravo" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Семейное право</Link></li>
              <li><Link href="/praktika/nasledstvennoe-pravo" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Наследственное право</Link></li>
              <li><Link href="/praktika/trudovoe-pravo" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Трудовое право</Link></li>
              <li><Link href="/praktika/arbitrazh" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Арбитраж</Link></li>
              <li><Link href="/praktika/administrativnoe-pravo" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Административное право</Link></li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-semibold text-white mb-6 font-cormorant">Навигация</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/o-nas" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">О нас</Link></li>
              <li><Link href="/otzyvy" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Отзывы</Link></li>
              <li><Link href="/blog" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Блог</Link></li>
              <li><Link href="/ai-lawyer" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">AI-юрист</Link></li>
              <li><Link href="/kontakty" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-semibold text-white mb-6 font-cormorant">Контакты</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C9A961] mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8]">м. Тверская, ул. Большая Дмитровка, Москва</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#C9A961] flex-shrink-0" />
                <a href="tel:+7XXXXXXXXXX" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">+7 (XXX) XXX-XX-XX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C9A961] flex-shrink-0" />
                <a href="mailto:info@consulexpert.ru" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">info@consulexpert.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} Consul Expert Lawyer. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-[#94a3b8] hover:text-[#C9A961] transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

