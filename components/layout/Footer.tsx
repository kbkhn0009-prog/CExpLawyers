import Link from "next/link"
import { Scale, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#E5E5E5] py-16 border-t border-[#E31937]/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* О компании */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-7 w-7 text-[#E31937]" />
              <span className="text-xl font-bold text-white">Consul Expert Lawyer</span>
            </div>
            <p className="text-sm text-[#8E8E8E] mb-4 leading-relaxed">
              Диджитал-юридическое агентство с AI-консультантом. 
              Решаем задачи, которые другие боятся брать.
            </p>
          </div>

          {/* Практики */}
          <div>
            <h3 className="font-semibold text-white mb-6">Практики</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/praktika/grazhdanskoe-pravo" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Гражданское право</Link></li>
              <li><Link href="/praktika/semejnoe-pravo" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Семейное право</Link></li>
              <li><Link href="/praktika/nasledstvennoe-pravo" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Наследственное право</Link></li>
              <li><Link href="/praktika/trudovoe-pravo" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Трудовое право</Link></li>
              <li><Link href="/praktika/arbitrazh" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Арбитраж</Link></li>
              <li><Link href="/praktika/administrativnoe-pravo" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Административное право</Link></li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-semibold text-white mb-6">Навигация</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/o-nas" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">О нас</Link></li>
              <li><Link href="/otzyvy" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Отзывы</Link></li>
              <li><Link href="/blog" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Блог</Link></li>
              <li><Link href="/ai-lawyer" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">AI-юрист</Link></li>
              <li><Link href="/kontakty" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-semibold text-white mb-6">Контакты</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#E31937] mt-0.5 flex-shrink-0" />
                <span className="text-[#8E8E8E]">м. Тверская, ул. Большая Дмитровка, Москва</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#E31937] flex-shrink-0" />
                <a href="tel:+7XXXXXXXXXX" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">+7 (XXX) XXX-XX-XX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#E31937] flex-shrink-0" />
                <a href="mailto:info@consulexpert.ru" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">info@consulexpert.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E31937]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8E8E8E]">
            © {new Date().getFullYear()} Consul Expert Lawyer. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

