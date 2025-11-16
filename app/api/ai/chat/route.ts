import { NextRequest, NextResponse } from 'next/server'
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { SYSTEM_PROMPT } from '@/lib/ai/prompts/system'

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Сообщение обязательно' },
        { status: 400 }
      )
    }

    const result = await streamText({
      model: openai('gpt-4-turbo'),
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('AI chat error:', error)
    return NextResponse.json(
      { error: 'Ошибка при обработке запроса' },
      { status: 500 }
    )
  }
}

