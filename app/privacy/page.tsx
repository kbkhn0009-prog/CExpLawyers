export const metadata = {
  title: "Политика конфиденциальности | Consul Expert Lawyer",
  description: "Политика конфиденциальности и обработки персональных данных в соответствии с 152-ФЗ.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8">
            Политика конфиденциальности
          </h1>

          <div className="bg-white rounded-lg p-8 shadow-md border border-[#E8D5C4] space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4">1. Общие положения</h2>
              <p className="text-[#5A4A38] leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
                персональных данных пользователей сайта Consul Expert Lawyer в соответствии 
                с Федеральным законом от 27.07.2006 № 152-ФЗ "О персональных данных".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4">2. Сбор персональных данных</h2>
              <p className="text-[#5A4A38] leading-relaxed mb-3">
                Мы собираем следующие персональные данные:
              </p>
              <ul className="list-disc list-inside text-[#5A4A38] space-y-2 ml-4">
                <li>Имя и контактная информация (телефон, email)</li>
                <li>Информация, предоставленная при заполнении форм на сайте</li>
                <li>Данные о взаимодействии с AI-консультантом</li>
                <li>Технические данные (IP-адрес, тип браузера)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4">3. Цели обработки данных</h2>
              <p className="text-[#5A4A38] leading-relaxed">
                Персональные данные обрабатываются для следующих целей:
              </p>
              <ul className="list-disc list-inside text-[#5A4A38] space-y-2 ml-4 mt-3">
                <li>Предоставление юридических консультаций и услуг</li>
                <li>Обработка заявок и обращений</li>
                <li>Улучшение качества сервиса</li>
                <li>Соблюдение требований законодательства</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4">4. Защита данных</h2>
              <p className="text-[#5A4A38] leading-relaxed">
                Мы применяем современные технические и организационные меры для защиты 
                персональных данных от несанкционированного доступа, изменения, раскрытия 
                или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4">5. Права пользователей</h2>
              <p className="text-[#5A4A38] leading-relaxed mb-3">
                Вы имеете право:
              </p>
              <ul className="list-disc list-inside text-[#5A4A38] space-y-2 ml-4">
                <li>Получать информацию о своих персональных данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления персональных данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4">6. Контакты</h2>
              <p className="text-[#5A4A38] leading-relaxed">
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <p className="text-[#5A4A38] mt-3">
                Email: info@consulexpert.ru<br />
                Телефон: +7 (XXX) XXX-XX-XX
              </p>
            </section>

            <section>
              <p className="text-sm text-[#5A4A38] mt-8">
                Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

