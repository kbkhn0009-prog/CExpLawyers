# Consul Expert Lawyer

Диджитал-юридическое агентство с AI-консультантом. Сайт для Кирилла Барбухина и Жени Малышевой.

## Технологический стек

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 4.1 + Framer Motion
- **Database**: Supabase (PostgreSQL)
- **AI**: Vercel AI SDK + OpenAI GPT-4 Turbo
- **Deployment**: Vercel

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env.local` на основе `.env.example`:
```bash
cp .env.example .env.local
```

3. Заполните переменные окружения в `.env.local`

4. Запустите dev сервер:
```bash
npm run dev
```

## Структура проекта

```
├── app/                    # Next.js App Router страницы
├── components/             # React компоненты
│   ├── layout/            # Header, Footer
│   ├── sections/          # Секции главной страницы
│   ├── ui/                # UI компоненты
│   └── ai/                # AI компоненты
├── lib/                   # Утилиты и библиотеки
│   ├── ai/                # AI логика
│   └── supabase/          # Supabase клиент
├── data/                  # Статические данные
└── public/                # Статические файлы
```

## Основные страницы

- `/` - Главная страница
- `/praktika/[slug]` - Страницы практик
- `/ai-lawyer` - AI-консультант
- `/o-nas` - О нас
- `/otzyvy` - Отзывы
- `/blog` - Блог
- `/kontakty` - Контакты
- `/privacy` - Политика конфиденциальности

## Цветовая палитра

- Primary: #D4A574 (Warm Gold)
- Secondary: #E8D5C4 (Sand)
- Background: #F5F1E8 (Cream)
- Text: #2C1810 (Deep Brown)
- Success: #7A9B57 (Sage Green)
- Alert: #C17B5A (Terracotta)

## Разработка

```bash
# Dev режим
npm run dev

# Production сборка
npm run build

# Запуск production
npm start
```

## Лицензия

© 2025 Consul Expert Lawyer. Все права защищены.

