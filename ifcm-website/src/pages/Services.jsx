import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "3PL-логистика",
      description: "Полный аутсорсинг логистических процессов: от хранения до доставки",
    },
    {
      title: "WMS-системы",
      description: "Внедрение и сопровождение систем управления складом",
    },
    {
      title: "Контрактная логистика",
      description: "Комплексное управление товаропотоками клиента на аутсорсинге",
    },
    {
      title: "Транспортная логистика",
      description: "Построение маршрутов, управление автопарком, оптимизация поставок",
    },
    {
      title: "IT-интеграция",
      description: "Интеграция логистики с IT-системами клиентов: 1C, SAP и др.",
    },
    {
      title: "Проектирование складов",
      description: "Анализ, планировка и запуск современных логистических комплексов",
    }
  ];

  return (
    <section className="py-20 bg-white text-brand-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cera-black font-black mb-4">Наши услуги</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Комплексные логистические решения, цифровизация процессов и индивидуальный подход для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-brand-accent p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-brand-primary text-white rounded-2xl px-10 py-14 text-center shadow-md"
        >
          <h3 className="text-3xl font-cera-black mb-4">Мы идём дальше обычной логистики</h3>
          <p className="mb-6 max-w-2xl mx-auto text-white/90">
            В iFCM мы не просто предлагаем услуги — мы формируем стратегии, которые помогают нашим клиентам масштабироваться, адаптироваться и побеждать в условиях современной экономики. Мы интегрируем цифровые технологии, развиваем персональные проекты и создаём инновационные решения в логистике.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white text-brand-primary p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Персонализированные проекты</h4>
              <p className="text-sm text-gray-700">Создаём логистику под конкретные задачи бизнеса — от стартапов до крупных корпораций.</p>
            </div>
            <div className="bg-white text-brand-primary p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Цифровая трансформация</h4>
              <p className="text-sm text-gray-700">Интеграция передовых IT-инструментов для повышения прозрачности и эффективности цепочек поставок.</p>
            </div>
            <div className="bg-white text-brand-primary p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Обучение и консалтинг</h4>
              <p className="text-sm text-gray-700">Мы делимся опытом, обучаем команды клиентов и сопровождаем внедрение решений на всех этапах.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
