import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#2C1810] mb-4">404</h1>
        <p className="text-lg text-[#5A4A38] mb-8">Практика не найдена</p>
        <Button asChild className="bg-[#D4A574] hover:bg-[#C17B5A] text-[#2C1810]">
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  )
}

