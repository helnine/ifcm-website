import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Clients() {
  const clients = [
    {
      name: "Производители",
      count: "120+",
      description: "Крупные промышленные предприятия и заводы",
      color: "bg-brand-primary"
    },
    {
      name: "Дистрибьюторы",
      count: "80+",
      description: "Федеральные и региональные дистрибьюторские сети",
      color: "bg-brand-accent"
    },
    {
      name: "Ритейл сети",
      count: "50+",
      description: "Крупнейшие торговые сети России и СНГ",
      color: "bg-brand-primary"
    },
    {
      name: "Сервисные компании",
      count: "30+",
      description: "Специализированные сервисные организации",
      color: "bg-brand-accent"
    },
  ];

  const successStories = [
    {
      title: "Оптимизация логистики",
      result: "+40% к эффективности",
      description: "Для крупного производителя продуктов питания"
    },
    {
      title: "Автоматизация склада",
      result: "Сокращение затрат на 25%",
      description: "Для федеральной дистрибьюторской сети"
    },
    {
      title: "Внедрение WMS",
      result: "Точность учета 99.9%",
      description: "Для розничной сети с 200+ магазинами"
    }
  ];

  return (
    <section className="py-20 bg-white text-brand-primary">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black font-cera-black mb-16 text-center"
        >
          Наши клиенты
        </motion.h1>

        {/* Клиентские сегменты */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${client.color} p-6 rounded-xl text-white shadow-md`}
            >
              <h3 className="text-xl font-bold mb-2">{client.name}</h3>
              <p className="text-4xl font-cera-black mb-3">{client.count}</p>
              <p className="text-sm">{client.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Истории успеха */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 p-10 rounded-2xl shadow-md border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Описание */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-cera-black mb-4">Истории успеха</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Мы реализуем комплексные кейсы по всей стране — от оптимизации логистики до цифровизации складов. Наши клиенты получают измеримые результаты, экономию и рост.
              </p>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-accent transition"
                >
                  Перейти к услугам
                </motion.button>
              </Link>
            </div>

            {/* Карточки */}
            <div className="grid md:grid-cols-2 gap-6 lg:w-2/3">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-cera-black">{story.title}</h3>
                  </div>
                  <p className="text-brand-accent text-xl font-semibold mb-2">{story.result}</p>
                  <p className="text-gray-600 text-sm">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Почему выбирают нас */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 border-t pt-12 border-gray-200"
        >
          <h3 className="text-2xl font-cera-black mb-6">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-2 gap-10 text-gray-700">
            <div>
              <p className="mb-4">
                Более 15 лет на рынке логистических решений. Реализовали 200+ проектов различной сложности по всей России.
              </p>
              <p>
                Наши эксперты помогут оптимизировать ваши логистические процессы, сократить издержки и повысить эффективность работы склада.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Персональный подход к каждому клиенту",
                "Комплексные решения под ключ",
                "Собственные разработки и технологии"
              ].map((point, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-3 h-3 mt-1 bg-brand-accent rounded-full mr-3" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
