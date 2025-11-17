import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-lg text-[#8E8E8E] mb-8">Практика не найдена</p>
        <Button asChild className="bg-[#E31937] hover:bg-[#C0172F] text-white rounded-none">
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  )
}

