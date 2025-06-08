import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  
  // Данные для галереи
  const galleryItems = [
    {
      id: 1,
      image: "/gallery1.jpg",
      text: "Каждый день предоставляем безупречный сервис, тем самым улучшаем качество жизни и способствуем эффективному развитию собственной команды, компаний-партнеров, регионов, где мы работаем, и общества в целом"
    },
    {
      id: 2,
      image: "/gallery2.jpg",
      text: "Безопасно, 100% качественно, с постоянством, честно, вовлеченно, проактивно, вдумчиво и социально-ответственно"
    },
    {
      id: 3,
      image: "/gallery3.jpg",
      text: "Чтобы наши клиенты оставались довольными, сотрудники - вовлеченными и уверенными в завтрашнем дне, поставщики стабильными, компания - прибыльной, а акционеры - заинтересованными в будущем компании"
    },
    {
      id: 4,
      image: "/gallery4.jpg",
      text: "Тренинги для сотрудников по повышению квалификации"
    }
  ];

  // Данные для табов
  const tabContent = {
    mission: {
      title: "Наша миссия",
      content: "Создавать комфортные условия для работы и жизни, обеспечивая высочайший уровень сервиса и заботясь об окружающей среде."
    },
    values: {
      title: "Наши ценности",
      content: "Честность, профессионализм, инновации и социальная ответственность - это основа нашей корпоративной культуры."
    },
    history: {
      title: "Наша история",
      content: "Начиная с небольшой команды энтузиастов в 1990 году, мы выросли в международную компанию с представительствами в 12 странах мира."
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Анимированный заголовок */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-center mb-12 font-cera-black text-brand-primary"
        >
          О компании
        </motion.h2>
        
        {/* Основной блок с информацией */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <img 
              src="/about-image.jpg" 
              alt="О компании IFCM" 
              className="rounded-lg w-full h-auto transition-opacity duration-500 opacity-0"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl mb-6 font-cera-black text-brand-primary">
              iFCM Group - лидер на рынке
            </h3>
            <p className="text-gray-700 mb-6 text-lg font-sans">
              Каждый день мы усердно трудимся, чтобы сделать жизнь наших клиентов лучше и счастливее.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Более 30 лет успешной работы",
                "Тысячи довольных клиентов",
                "Команда из 200+ профессионалов",
                "Собственные инновационные разработки"
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start opacity-0 animate-fadeIn font-sans"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-brand-accent mr-3 text-xl">✓</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl transition text-lg font-medium font-cera-regular"
              onClick={() => setShowMessage(true)}
            >
              Обращение президента iFCM
            </motion.button>
          </motion.div>
        </div>

        {/* Табы с информацией */}
        <div className="mt-24">
          <div className="flex border-b border-gray-200">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 font-medium transition-colors font-cera-regular ${
                  activeTab === tab ? 'text-brand-primary font-cera-black border-b-2 border-brand-primary' : 'text-gray-600 hover:text-brand-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tabContent[tab].title}
              </button>
            ))}
          </div>
          <div className="p-8">
            <h3 className="text-2xl mb-4 font-cera-black text-brand-primary">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-lg text-gray-700 font-sans">
              {tabContent[activeTab].content}
            </p>
          </div>
        </div>

        {/* Модальное окно с обращением президента */}
        <AnimatePresence>
          {showMessage && (
            <motion.div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMessage(false)}
            >
              <motion.div 
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative font-sans"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowMessage(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-cera-black text-brand-primary">
                  Обращение президента iFCM GROUP
                </h3>
                
                <div className="prose max-w-none">
                  <p className="mb-4 font-semibold text-gray-800">
                    <strong>Дорогие друзья и партнеры!</strong>
                  </p>
                  
                  <p className="mb-4 text-gray-700">
                    Прежде всего, я благодарю Вас за интерес к нашей компании.
                  </p>
                  
                  <p className="mb-4 text-gray-700">
                    В iFCM GROUP мы верим, что в центре любой эффективной работы и динамичного развития всегда стоит человек и, что прогресс и достижения возможны только когда за дело берется сплоченная команда, состоящая из людей, которым не всё равно.
                  </p>
                  
                  <p className="mb-4 text-gray-700">
                    Мы также убеждены, что по-настоящему впечатляющий результат показывает только человек, который может полностью сосредоточиться на своей профессиональной задаче. Именно поэтому для каждого сотрудника наших партнеров мы создаем рабочую среду, где ни минуты времени не тратится на непрофильные процессы.
                  </p>
                  
                  <p className="mb-4 text-gray-700">
                    Всё инфраструктурные бытовые вопросы, включая качественную работу инженерных систем промышленного или офисного здания, здоровое питание, досуг, логистику персонала, охрану, клиниг, озеленение и многие другие задачи мы берем на себя.
                  </p>
                  
                  <p className="mb-4 text-gray-700">
                    Отношения, которые мы строим с клиентами – уникальны. Они основаны на том, что мы внимательно слушаем и слышим потребности клиента, понимаем «точки боли» и находим оптимальные решения, исключительно добросовестно исполняем свои обязательства, скрупулезно относимся к вопросам безопасности труда и пищевой безопасности. Доверие и честность являются основой нашего сотрудничества.
                  </p>
                  
                  <p className="mb-6 text-gray-700">
                    Ежедневно мы создаем комфорт и высокое качество профессиональной жизни для сотен тысяч людей. Безопасность, проактивность, забота об окружающем мире, внимание к деталям, эталонное качество сервиса, умение слушать и слышать, гибкость и быстрота в принятии решений делают нашу компанию надежным и ценным партнером на пути к росту Вашего бизнеса.
                  </p>
                  
                  <p className="text-right font-semibold text-brand-primary">
                    — А.В. Жаворонков
                  </p>
                  <p className="text-right text-gray-600">
                    Президент iFCM GROUP
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Видео-секция */}
        <motion.div 
          className="mt-24 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-cera-black text-brand-primary">
            Наша история
          </h3>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            {!videoLoaded && (
              <motion.div 
                className="absolute inset-0 bg-gray-200 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: videoLoaded ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear"
                  }}
                  className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full"
                />
              </motion.div>
            )}
            <iframe
              className="w-full h-full"
              src="https://vk.com/video_ext.php?oid=-182128940&id=456239039&hash=abcdef123456"
              title="Видео о компании"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
            />
          </div>
        </motion.div>

        {/* Галерея */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-16 font-cera-black text-brand-primary">
            Наша жизнь
          </h3>
          <div className="space-y-24 md:space-y-32">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center opacity-0 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:w-1/2 relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-20"></div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-sans">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Блок с цифрами - здесь я переместил информацию о 30+ годах опыта */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "200+", text: "Профессионалов в команде" },
            { number: "30+", text: "Лет опыта" },
            { number: "5000+", text: "Довольных клиентов" },
            { number: "12", text: "Стран присутствия" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2 font-cera-black text-brand-accent">
                {item.number}
              </h3>
              <p className="text-lg text-brand-primary font-sans font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS для простых анимаций */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
      `}</style>
    </section>
  )
}