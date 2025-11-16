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
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8 text-center">
            Контакты
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Контактная информация */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4A574]/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Адрес</h3>
                    <p className="text-[#5A4A38]">м. Тверская, ул. Большая Дмитровка, Москва</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4A574]/20 rounded-lg">
                    <Phone className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Телефон</h3>
                    <a href="tel:+7XXXXXXXXXX" className="text-[#5A4A38] hover:text-[#D4A574]">
                      +7 (XXX) XXX-XX-XX
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4A574]/20 rounded-lg">
                    <Mail className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Email</h3>
                    <a href="mailto:info@consulexpert.ru" className="text-[#5A4A38] hover:text-[#D4A574]">
                      info@consulexpert.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
                <h3 className="font-semibold text-[#2C1810] mb-3">Мессенджеры</h3>
                <div className="flex gap-4">
                  <a href="https://t.me/consul_lawyer" className="text-[#5A4A38] hover:text-[#D4A574]">
                    Telegram
                  </a>
                  <a href="https://wa.me/7XXXXXXXXXX" className="text-[#5A4A38] hover:text-[#D4A574]">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8D5C4]">
              <h3 className="font-semibold text-[#2C1810] mb-4">Как нас найти</h3>
              <div className="aspect-video bg-[#E8D5C4] rounded-lg flex items-center justify-center">
                <p className="text-[#5A4A38]">Карта Яндекс.Карт будет здесь</p>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div id="contact" className="bg-white rounded-lg p-8 shadow-md border border-[#E8D5C4]">
            <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Оставить заявку</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white border-[#E8D5C4]"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white border-[#E8D5C4]"
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white border-[#E8D5C4]"
              />
              <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                <SelectTrigger className="bg-white border-[#E8D5C4]">
                  <SelectValue placeholder="Срочность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Не срочно</SelectItem>
                  <SelectItem value="medium">Средняя срочность</SelectItem>
                  <SelectItem value="high">Срочно</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white border-[#E8D5C4]"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#D4A574] hover:bg-[#C17B5A] text-[#2C1810] font-semibold"
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

