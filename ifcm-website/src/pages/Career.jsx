import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Career() {
  const [activeTab, setActiveTab] = useState('vacancies');

  const vacancies = [
    { id: 1, title: "Менеджер по продажам", department: "Коммерческий отдел", experience: "Опыт от 1 года", type: "Офис/Гибрид", salary: "от 120 000 ₽" },
    { id: 2, title: "Финансовый аналитик", department: "Финансовый департамент", experience: "Опыт от 3 лет", type: "Офис", salary: "от 180 000 ₽" },
    { id: 3, title: "Логист", department: "Отдел логистики", experience: "Опыт от 2 лет", type: "Удаленно", salary: "от 150 000 ₽" }
  ];

  const benefits = [
    {
      title: "Сильная команда",
      description: "Работа в окружении экспертов и возможность учиться у лучших."
    },
    {
      title: "Инновационные проекты",
      description: "Участие в передовых проектах, формирующих рынок."
    },
    {
      title: "Профессиональный рост",
      description: "Постоянное развитие и карьерные перспективы."
    },
    {
      title: "Устойчивость и стабильность",
      description: "Надёжная компания с долгосрочной стратегией."
    },
    {
      title: "Современный офис и гибкость",
      description: "Комфортная рабочая среда и гибкие форматы работы."
    },
    {
      title: "Признание вклада",
      description: "Система бонусов, премий и поддержка инициатив."
    }
  ];

  return (
    <section className="py-20 bg-white font-sans text-brand-primary">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-black font-cera-black mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Карьера в iFCM
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <button onClick={() => setActiveTab('vacancies')} className={`px-6 py-3 font-medium transition border-b-2 ${activeTab === 'vacancies' ? 'text-brand-primary border-brand-primary' : 'text-gray-400 border-transparent'}`}>Актуальные вакансии</button>
          <button onClick={() => setActiveTab('internship')} className={`px-6 py-3 font-medium transition border-b-2 ${activeTab === 'internship' ? 'text-brand-primary border-brand-primary' : 'text-gray-400 border-transparent'}`}>Стажировки</button>
        </div>

        {activeTab === 'vacancies' ? (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vacancies.map(v => (
                <motion.div 
                  key={v.id} 
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold font-cera-regular mb-2">{v.title}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Отдел: {v.department}</p>
                    <p>Опыт: {v.experience}</p>
                    <p>Формат: {v.type}</p>
                    <p className="text-brand-primary font-semibold">Зарплата: {v.salary}</p>
                  </div>
                  <button className="mt-4 w-full bg-brand-primary text-white py-2 rounded-lg hover:bg-brand-accent transition">Подробнее</button>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-100 p-8 rounded-xl mt-12 text-center">
              <h2 className="text-2xl font-bold font-cera-black mb-4">Не нашли подходящую вакансию?</h2>
              <p className="mb-6 text-gray-700 font-cera-regular">Отправьте нам свое резюме — мы свяжемся с вами, как только появятся новые возможности.</p>
              <Link to="/resume">
                <button className="bg-white border border-brand-primary text-brand-primary py-3 px-6 rounded-lg hover:bg-brand-primary hover:text-white transition">
                  Отправить резюме
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <motion.div className="bg-gray-50 p-8 rounded-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold font-cera-black mb-4">Стажировка в iFCM</h2>
            <p className="mb-6 font-cera-regular text-gray-700">
              Возможность получить реальный опыт, работая в команде профессионалов.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold font-cera-regular mb-2">Программа</h3>
                <ul className="text-sm space-y-2">
                  <li>• 3–6 месяцев</li>
                  <li>• 20–40 часов в неделю</li>
                  <li>• Возможность продолжения карьеры</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold font-cera-regular mb-2">Требования</h3>
                <ul className="text-sm space-y-2">
                  <li>• Студент или выпускник</li>
                  <li>• Ответственность</li>
                  <li>• Желание учиться</li>
                </ul>
              </div>
            </div>
            <button className="bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-brand-accent transition">
              Подать заявку
            </button>
          </motion.div>
        )}

        {/* Преимущества */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10 font-cera-black">Почему выбирают iFCM?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold font-cera-regular mb-2">{b.title}</h3>
                <p className="text-sm text-gray-700">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Культура */}
        <div className="mt-20 bg-brand-primary text-white p-12 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-cera-black">Наша корпоративная культура</h2>
            <p className="text-lg mb-8 font-cera-regular">
              Мы ценим открытость, профессионализм и развитие. Здесь вы найдете поддержку и рост.
            </p>
            <Link to="/about">
              <button className="bg-white text-brand-primary py-3 px-8 rounded-lg hover:bg-gray-200 transition font-semibold">
                Узнать больше о компании
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
