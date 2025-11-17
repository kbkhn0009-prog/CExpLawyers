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
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Контакты
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Контактная информация */}
            <div className="space-y-6">
              <div className="glass rounded-none p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10">
                    <MapPin className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Адрес</h3>
                    <p className="text-[#8E8E8E]">м. Тверская, ул. Большая Дмитровка, Москва</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-none p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10">
                    <Phone className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Телефон</h3>
                    <a href="tel:+7XXXXXXXXXX" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">
                      +7 (XXX) XXX-XX-XX
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-none p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10">
                    <Mail className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:info@consulexpert.ru" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">
                      info@consulexpert.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-none p-6">
                <h3 className="font-semibold text-white mb-3">Мессенджеры</h3>
                <div className="flex gap-4">
                  <a href="https://t.me/consul_lawyer" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">
                    Telegram
                  </a>
                  <a href="https://wa.me/7XXXXXXXXXX" className="text-[#8E8E8E] hover:text-[#E31937] transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="glass rounded-none p-6">
              <h3 className="font-semibold text-white mb-4">Как нас найти</h3>
              <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
                <p className="text-[#8E8E8E]">Карта Яндекс.Карт будет здесь</p>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div id="contact" className="glass rounded-none p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Оставить заявку</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-[#8E8E8E] rounded-none"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-[#8E8E8E] rounded-none"
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-[#8E8E8E] rounded-none"
              />
              <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-none">
                  <SelectValue placeholder="Срочность" />
                </SelectTrigger>
                <SelectContent className="bg-[#0A0A0A] border-white/10">
                  <SelectItem value="low" className="text-white hover:bg-white/5">Не срочно</SelectItem>
                  <SelectItem value="medium" className="text-white hover:bg-white/5">Средняя срочность</SelectItem>
                  <SelectItem value="high" className="text-white hover:bg-white/5">Срочно</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-[#8E8E8E] rounded-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#E31937] hover:bg-[#C0172F] text-white font-semibold rounded-none shadow-2xl hover:shadow-[0_0_40px_rgba(227,25,55,0.5)]"
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

