import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '@/firebase';
import { motion } from 'framer-motion';

export default function Suppliers() {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const supplierRef = ref(db, 'suppliers');
      await push(supplierRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });
      setSubmitted(true);
      setFormData({ company: '', contact: '', phone: '' });
    } catch (err) {
      console.error('Ошибка отправки:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white text-brand-primary font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-black font-cera-black mb-4">Партнерство с iFCM</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Мы строим прочные и взаимовыгодные отношения с поставщиками по всей стране. Надежность, прозрачность и развитие — наша основа.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Преимущества сотрудничества</h2>
            <div className="space-y-6">
              {[{
                title: 'Надежность',
                desc: 'Гарантия стабильных поставок и своевременной оплаты.'
              }, {
                title: 'Прозрачные условия',
                desc: 'Открытые договоренности и четкая логистика.'
              }, {
                title: 'Рост вместе с нами',
                desc: 'Увеличение объемов, расширение географии поставок.'
              }, {
                title: 'Единый центр обработки заказов',
                desc: 'Упрощённый документооборот и поддержка.'
              }].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 border-l-4 border-brand-accent p-6 rounded-lg shadow-sm transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Стать нашим поставщиком</h2>
            {submitted ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                Спасибо! Ваша заявка успешно отправлена.
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">Название компании</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Контактное лицо</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-brand-accent transition"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border-t pt-12 border-gray-200"
        >
          <h2 className="text-3xl font-cera-black mb-6 text-brand-primary">Требования к поставщикам</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Соответствие стандартам качества и безопасности.</li>
            <li>Наличие необходимых лицензий и сертификатов.</li>
            <li>Готовность к долгосрочному сотрудничеству.</li>
            <li>Оперативность в предоставлении документации.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-cera-black mb-4 text-brand-primary">Контакты для связи</h2>
          <p className="text-gray-700">По вопросам партнерства и поставок, пожалуйста, свяжитесь с нами:</p>
          <p className="text-gray-700 mt-2">Email: <a href="mailto:info@ifcmgroup.ru" className="text-brand-accent underline">info@ifcmgroup.ru</a></p>
          <p className="text-gray-700">Телефон: <a href="tel:+74952460110" className="text-brand-accent underline">+7 (495) 246-01-10</a></p>
        </motion.div>
      </div>
    </section>
  );
}
