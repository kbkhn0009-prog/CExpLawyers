import { ChatInterface } from "@/components/ai/ChatInterface"

export const metadata = {
  title: "AI-юрист Ольга | Бесплатная консультация 24/7",
  description: "Задайте вопрос AI-юристу Ольге и получите первичную консультацию в любое время. AI не заменяет юриста, но экономит 80% времени.",
}

export default function AILawyerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            AI-юрист Ольга
          </h1>
          <p className="text-lg text-[#6B7280] mb-4">
            Получите первичную консультацию в любое время суток. AI-ассистент поможет 
            разобраться в вашей ситуации и направит к нужному специалисту.
          </p>
          <div className="corporate-card p-4">
            <p className="text-sm text-[#6B7280]">
              <strong className="text-[#111827]">Важно:</strong> AI не заменяет юриста, но экономит 80% времени на первичном этапе. 
              Для сложных дел необходима консультация с живым юристом.
            </p>
          </div>
        </div>
        <ChatInterface />
      </div>
    </div>
  )
}

