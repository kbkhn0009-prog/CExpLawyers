"use client"

import { useState, useEffect } from "react"
import { Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AI_LAWYER_GREETING } from "@/lib/ai/prompts/system"

const exampleQuestions = [
  "Составите исковое заявление?",
  "Как разделить квартиру при разводе?",
  "Что делать если наследники не согласны?",
  "Как оспорить штраф ГИБДД?",
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: AI_LAWYER_GREETING
    }])
  }, [])

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

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || "Извините, произошла ошибка." }])
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

  const handleExampleClick = (question: string) => {
    setInput(question)
  }

  return (
    <div className="glass rounded-none shadow-2xl border border-white/10 h-[600px] flex flex-col">
      {/* Заголовок */}
      <div className="p-4 border-b border-[#E31937]/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border border-[#E31937]/30 bg-[#E31937]/10 flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-[#E31937]" />
          </div>
          <div>
            <h2 className="font-semibold text-white">AI-юрист Ольга</h2>
            <p className="text-xs text-[#8E8E8E]">Онлайн 24/7</p>
          </div>
        </div>
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

      {/* Примеры вопросов */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-[#8E8E8E] mb-2">Примеры вопросов:</p>
          <div className="flex flex-wrap gap-2">
            {exampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleExampleClick(q)}
                className="text-xs px-3 py-1 bg-white/5 border border-white/10 hover:border-[#E31937]/30 text-white hover:text-[#E31937] transition-colors rounded-none"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

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
    </div>
  )
}

