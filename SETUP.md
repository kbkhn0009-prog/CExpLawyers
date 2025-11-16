# Инструкция по настройке проекта

## Шаг 1: Установка зависимостей

```bash
cd G:\Business\ConsulExp\CExpLawyer
npm install
```

## Шаг 2: Настройка переменных окружения

Скопируйте файл `.env.example` в `.env.local` и заполните реальными значениями:

```bash
cp .env.example .env.local
```

Или создайте файл `.env.local` вручную со следующим содержимым:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI
OPENAI_API_KEY=your_openai_key

# Resend (для email)
RESEND_API_KEY=your_resend_key

# Analytics (опционально)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_YANDEX_METRICA_ID=your_yandex_id

# Upstash Redis (для rate limiting, опционально)
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

## Шаг 3: Добавление изображений

Поместите фотографии юристов в папку `public/lawyers/`:
- `kirill-barbukhin.jpg` - фото Кирилла Барбухина
- `zhenya-malysheva.jpg` - фото Жени Малышевой

Рекомендуемый размер: минимум 800x1000px, формат JPG или WebP.

## Шаг 4: Настройка Supabase

1. Создайте проект на [supabase.com](https://supabase.com)
2. Создайте таблицы согласно схеме в документации
3. Скопируйте URL и Anon Key в `.env.local`

## Шаг 5: Запуск проекта

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура базы данных Supabase

Создайте следующие таблицы:

```sql
-- История чатов
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  message TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Практики
CREATE TABLE practices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  complexity TEXT CHECK (complexity IN ('low', 'medium', 'high')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Кейсы
CREATE TABLE cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  practice_id UUID REFERENCES practices(id),
  title TEXT NOT NULL,
  description TEXT,
  result TEXT,
  duration TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Следующие шаги

1. Настройте домен и деплой на Vercel
2. Добавьте реальные фотографии юристов
3. Настройте интеграцию с Яндекс.Картами
4. Добавьте видео-отзывы на YouTube
5. Настройте email-рассылки через Resend

## Поддержка

При возникновении проблем проверьте:
- Все зависимости установлены (`npm install`)
- Переменные окружения настроены правильно
- Supabase проект создан и таблицы созданы
- OpenAI API ключ валиден

