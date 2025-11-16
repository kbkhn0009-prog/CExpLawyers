import { ChatInterface } from "@/components/ai/ChatInterface"

export const metadata = {
  title: "AI-юрист Ольга | Бесплатная консультация 24/7",
  description: "Задайте вопрос AI-юристу Ольге и получите первичную консультацию в любое время. AI не заменяет юриста, но экономит 80% времени.",
}

export default function AILawyerPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
            AI-юрист Ольга
          </h1>
          <p className="text-lg text-[#5A4A38] mb-4">
            Получите первичную консультацию в любое время суток. AI-ассистент поможет 
            разобраться в вашей ситуации и направит к нужному специалисту.
          </p>
          <div className="bg-[#E8D5C4]/50 rounded-lg p-4 border border-[#D4A574]">
            <p className="text-sm text-[#5A4A38]">
              <strong>Важно:</strong> AI не заменяет юриста, но экономит 80% времени на первичном этапе. 
              Для сложных дел необходима консультация с живым юристом.
            </p>
          </div>
        </div>
        <ChatInterface />
      </div>
    </div>
  )
}

