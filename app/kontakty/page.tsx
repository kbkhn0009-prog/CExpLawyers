"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    urgency: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет отправка формы
    alert("Форма отправлена! Мы свяжемся с вами в ближайшее время.")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8 text-center">
            Контакты
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Контактная информация */}
            <div className="space-y-6">
              <div className="corporate-card corporate-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F3F4F6] border border-[#E5E7EB]">
                    <MapPin className="h-6 w-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Адрес</h3>
                    <p className="text-[#6B7280]">м. Тверская, ул. Большая Дмитровка, Москва</p>
                  </div>
                </div>
              </div>

              <div className="corporate-card corporate-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F3F4F6] border border-[#E5E7EB]">
                    <Phone className="h-6 w-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Телефон</h3>
                    <a href="tel:+7XXXXXXXXXX" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">
                      +7 (XXX) XXX-XX-XX
                    </a>
                  </div>
                </div>
              </div>

              <div className="corporate-card corporate-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F3F4F6] border border-[#E5E7EB]">
                    <Mail className="h-6 w-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Email</h3>
                    <a href="mailto:info@consulexpert.ru" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">
                      info@consulexpert.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="corporate-card corporate-card-hover p-6">
                <h3 className="font-semibold text-[#111827] mb-3">Мессенджеры</h3>
                <div className="flex gap-4">
                  <a href="https://t.me/consul_lawyer" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">
                    Telegram
                  </a>
                  <a href="https://wa.me/7XXXXXXXXXX" className="text-[#6B7280] hover:text-[#1E3A5F] transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="corporate-card corporate-card-hover p-6">
              <h3 className="font-semibold text-[#111827] mb-4">Как нас найти</h3>
              <div className="aspect-video bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center">
                <p className="text-[#6B7280]">Карта Яндекс.Карт будет здесь</p>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div id="contact" className="corporate-card corporate-card-hover p-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Оставить заявку</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-[#F9FAFB] border-[#E5E7EB] text-[#111827] placeholder:text-[#9CA3AF]"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-[#F9FAFB] border-[#E5E7EB] text-[#111827] placeholder:text-[#9CA3AF]"
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[#F9FAFB] border-[#E5E7EB] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                <SelectTrigger className="bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]">
                  <SelectValue placeholder="Срочность" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#E5E7EB]">
                  <SelectItem value="low" className="text-[#111827] hover:bg-[#F9FAFB]">Не срочно</SelectItem>
                  <SelectItem value="medium" className="text-[#111827] hover:bg-[#F9FAFB]">Средняя срочность</SelectItem>
                  <SelectItem value="high" className="text-[#111827] hover:bg-[#F9FAFB]">Срочно</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-[#F9FAFB] border-[#E5E7EB] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#1E3A5F] hover:bg-[#152A4A] text-white font-semibold shadow-lg hover:shadow-xl"
              >
                Отправить заявку
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

