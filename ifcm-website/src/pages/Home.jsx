import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      id: 1,
      image: "/hero-bg1.jpg",
      title: "iFCM Group",
      subtitle: "Профессиональные решения для вашего бизнеса"
    },
    {
      id: 2,
      image: "/hero-bg2.jpg",
      title: "Консалтинг",
      subtitle: "Экспертные решения для роста"
    },
    {
      id: 3,
      image: "/hero-bg3.jpg",
      title: "Развитие",
      subtitle: "Инновационные подходы к управлению"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="overflow-hidden font-sans text-gray-900">
      {/* Hero Slider */}
      <section className="relative h-screen text-white">
        <AnimatePresence custom={direction}>
          <motion.div
            key={slides[currentSlide].id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 z-10 max-w-4xl">
                <motion.h1 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-xl font-light text-white"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="mt-6 inline-block px-6 py-3 bg-brand-accent text-white font-semibold rounded-md hover:bg-red-700 transition"
                >
                  Узнать больше
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-brand-primary">
            iFCM Group
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 font-normal">
            Мы - сервисная компания, предоставляющая услуги корпоративного питания и технической эксплуатации зданий и сооружений.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 font-normal">
            С нами работают компании, которые ценят честность, профессионализм и результат. Наша миссия — быть не просто консультантами, а надежным партнёром в вашем развитии.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
