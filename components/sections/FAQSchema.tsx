"use client"

import Script from "next/script"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "Что делать если наследники не согласны с разделом имущества?",
    answer: "Если наследники не могут договориться о разделе наследственного имущества, необходимо обратиться в суд. Мы поможем подготовить исковое заявление, собрать необходимые документы и защитить ваши интересы в суде. В большинстве случаев удается достичь справедливого раздела имущества."
  },
  {
    question: "Как оспорить штраф ГИБДД в 2025 году?",
    answer: "Для оспаривания штрафа ГИБДД необходимо подать жалобу в течение 10 дней с момента получения постановления. Мы поможем подготовить жалобу с правовым обоснованием, собрать доказательства и представлять ваши интересы в суде. Процент успешного оспаривания составляет более 70%."
  },
  {
    question: "Сколько стоит консультация юриста?",
    answer: "Первичная консультация может быть бесплатной при записи на стратегическую сессию. Стоимость услуг зависит от сложности дела и объема работы. Мы предлагаем прозрачное ценообразование и фиксированные тарифы для стандартных услуг. Свяжитесь с нами для уточнения стоимости."
  },
  {
    question: "Можно ли использовать AI-консультанта вместо живого юриста?",
    answer: "AI-консультант Ольга помогает получить общую информацию и первичную консультацию 24/7. Однако для сложных дел, составления документов и представления в суде необходима консультация с живым юристом. AI-консультант экономит до 80% времени на первичном этапе."
  },
  {
    question: "Как быстро можно получить помощь?",
    answer: "AI-консультант доступен 24/7 и отвечает мгновенно. Для консультации с юристом можно записаться на ближайшее время. В срочных случаях мы стараемся организовать консультацию в течение 24 часов. Для экстренных ситуаций доступна горячая линия."
  }
]

export function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-20 bg-white border-y border-[#E5E7EB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#E5E7EB]">
                  <AccordionTrigger className="text-left text-[#111827] hover:text-[#1E3A5F]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B7280] pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

