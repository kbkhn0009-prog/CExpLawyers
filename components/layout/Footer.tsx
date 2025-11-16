import Link from "next/link"
import { Scale, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#E8D5C4] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* О компании */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-[#D4A574]" />
              <span className="text-xl font-bold text-white">Consul Expert Lawyer</span>
            </div>
            <p className="text-sm text-[#E8D5C4]/80 mb-4">
              Диджитал-юридическое агентство с AI-консультантом. 
              Решаем задачи, которые другие боятся брать.
            </p>
          </div>

          {/* Практики */}
          <div>
            <h3 className="font-semibold text-white mb-4">Практики</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/praktika/grazhdanskoe-pravo" className="hover:text-[#D4A574] transition-colors">Гражданское право</Link></li>
              <li><Link href="/praktika/semejnoe-pravo" className="hover:text-[#D4A574] transition-colors">Семейное право</Link></li>
              <li><Link href="/praktika/nasledstvennoe-pravo" className="hover:text-[#D4A574] transition-colors">Наследственное право</Link></li>
              <li><Link href="/praktika/trudovoe-pravo" className="hover:text-[#D4A574] transition-colors">Трудовое право</Link></li>
              <li><Link href="/praktika/arbitrazh" className="hover:text-[#D4A574] transition-colors">Арбитраж</Link></li>
              <li><Link href="/praktika/administrativnoe-pravo" className="hover:text-[#D4A574] transition-colors">Административное право</Link></li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-semibold text-white mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/o-nas" className="hover:text-[#D4A574] transition-colors">О нас</Link></li>
              <li><Link href="/otzyvy" className="hover:text-[#D4A574] transition-colors">Отзывы</Link></li>
              <li><Link href="/blog" className="hover:text-[#D4A574] transition-colors">Блог</Link></li>
              <li><Link href="/ai-lawyer" className="hover:text-[#D4A574] transition-colors">AI-юрист</Link></li>
              <li><Link href="/kontakty" className="hover:text-[#D4A574] transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#D4A574] mt-0.5 flex-shrink-0" />
                <span>м. Тверская, ул. Большая Дмитровка, Москва</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#D4A574] flex-shrink-0" />
                <a href="tel:+7XXXXXXXXXX" className="hover:text-[#D4A574] transition-colors">+7 (XXX) XXX-XX-XX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#D4A574] flex-shrink-0" />
                <a href="mailto:info@consulexpert.ru" className="hover:text-[#D4A574] transition-colors">info@consulexpert.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5A4A38] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#E8D5C4]/60">
            © {new Date().getFullYear()} Consul Expert Lawyer. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:text-[#D4A574] transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

