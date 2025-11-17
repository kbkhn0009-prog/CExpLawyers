import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#111827] mb-4">404</h1>
        <p className="text-lg text-[#6B7280] mb-8">Практика не найдена</p>
        <Button asChild className="bg-[#1E3A5F] hover:bg-[#152A4A] text-white">
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  )
}

