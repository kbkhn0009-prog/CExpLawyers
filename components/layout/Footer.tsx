import Link from "next/link"
import { Scale, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-[#111827] py-16 border-t border-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* О компании */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-7 w-7 text-[#1E3A5F]" />
              <span className="text-xl font-bold text-[#111827]">Consul Expert Lawyer</span>
            </div>
            <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
              Юридическое агентство для бизнеса и частных лиц. 
              Обеспечиваем юридическую защиту. Анализируем риски. Консультируем. Защищаем.
            </p>
          </div>

          {/* Практики */}
          <div>
            <h3 className="font-semibold text-[#111827] mb-6">Практики</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/praktika/grazhdanskoe-pravo" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Гражданское право</Link></li>
              <li><Link href="/praktika/semejnoe-pravo" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Семейное право</Link></li>
              <li><Link href="/praktika/nasledstvennoe-pravo" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Наследственное право</Link></li>
              <li><Link href="/praktika/trudovoe-pravo" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Трудовое право</Link></li>
              <li><Link href="/praktika/arbitrazh" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Арбитраж</Link></li>
              <li><Link href="/praktika/administrativnoe-pravo" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Административное право</Link></li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-semibold text-[#111827] mb-6">Навигация</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/o-nas" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">О нас</Link></li>
              <li><Link href="/otzyvy" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Отзывы</Link></li>
              <li><Link href="/blog" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Блог</Link></li>
              <li><Link href="/ai-lawyer" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">AI-юрист</Link></li>
              <li><Link href="/kontakty" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Социальные сети и контакты */}
          <div>
            <h3 className="font-semibold text-[#111827] mb-6">Контакты</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#1E3A5F] mt-0.5 flex-shrink-0" />
                <span className="text-[#6B7280]">м. Тверская, ул. Большая Дмитровка, Москва</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#1E3A5F] flex-shrink-0" />
                <a href="tel:+7XXXXXXXXXX" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">+7 (XXX) XXX-XX-XX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#1E3A5F] flex-shrink-0" />
                <a href="mailto:info@consulexpert.ru" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">info@consulexpert.ru</a>
              </li>
            </ul>
            
            <div>
              <h4 className="font-semibold text-[#111827] mb-3 text-sm">Социальные сети</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://t.me/consul_lawyer" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Telegram-канал
                  </a>
                </li>
                <li>
                  <a href="https://t.me/consul_lawyer_bot" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Telegram-бот для консультаций
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} Consul Expert Lawyer. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

