"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AILawyerWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: "Здравствуйте! Я Ольга, AI-ассистент Кирилла и Жени. Какой вопрос вас беспокоит?"
      }])
    }
  }, [isOpen, messages.length])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      })

      if (!response.ok) throw new Error('Ошибка запроса')

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let aiResponse = ""

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          aiResponse += decoder.decode(value, { stream: true })
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || "Извините, произошла ошибка. Пожалуйста, попробуйте позже." }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Извините, произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую." 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Плавающая кнопка */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#0A0A0A] border border-[#E31937]/30 text-white rounded-none p-4 shadow-2xl flex items-center gap-2 group relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Открыть чат с AI-юристом"
      >
        {/* Red Ring Animation */}
        <div className="absolute inset-0 border-2 border-[#E31937] animate-ping opacity-20" />
        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-semibold">AI-юрист Ольга</span>
        <span className="absolute -top-2 -right-2 bg-[#E31937] text-white text-xs px-2 py-1 rounded-none font-bold">
          24/7
        </span>
      </motion.button>

      {/* Модальное окно чата */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-white/10 rounded-none w-full max-w-md h-[600px] flex flex-col shadow-2xl"
            >
              {/* Заголовок */}
              <div className="flex items-center justify-between p-4 border-b border-[#E31937]/20">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 border border-[#E31937]/30 bg-[#E31937]/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-[#E31937]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI-юрист Ольга</h3>
                    <p className="text-xs text-[#8E8E8E]">Задай вопрос 24/7</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-[#8E8E8E] hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Сообщения */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-none p-3 ${
                        msg.role === 'user'
                          ? 'bg-[#E31937] text-white'
                          : 'bg-white/5 border border-white/10 text-[#E5E5E5]'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-none p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[#E31937] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-[#E31937] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-[#E31937] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Ввод */}
              <div className="p-4 border-t border-[#E31937]/20 flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Задайте вопрос..."
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-[#8E8E8E] rounded-none"
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#E31937] hover:bg-[#C0172F] text-white rounded-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

