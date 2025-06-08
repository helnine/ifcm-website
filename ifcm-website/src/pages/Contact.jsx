import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '@/firebase';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const contactsRef = ref(db, 'contacts');
      await push(contactsRef, {
        ...formData,
        timestamp: new Date().toISOString()
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="py-20 bg-white text-brand-primary font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cera-black font-black mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Мы готовы ответить на все ваши вопросы и рассмотреть предложения о сотрудничестве.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md border"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-primary">Контактная информация</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Адрес:</strong> г. Москва, ул. 3-я Рыбинская, д. 18, стр. 22.3
              </li>
              <li>
                <strong>Телефон:</strong> +7 (495) 246-01-10
              </li>
              <li>
                <strong>Email:</strong> info@ifcmgroup.ru
              </li>
              <li>
                <strong>Время работы:</strong> Пн-Пт с 9:00 до 18:00
              </li>
            </ul>

            <div className="mt-8 p-4 bg-white border rounded-lg">
              <h4 className="font-semibold mb-2">Реквизиты</h4>
              <p className="text-sm text-gray-600">
                ООО "АЙЭФСИЭМ ГРУПП"<br />
                ИНН 1234567890<br />
                КПП 123456789<br />
                ОГРН 1234567890123
              </p>
            </div>
          </motion.div>

          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md border"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-primary">Написать нам</h3>
            {submitStatus === 'success' && (
              <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-lg">
                Спасибо! Ваше сообщение отправлено.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-lg">
                Произошла ошибка. Попробуйте позже.
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-accent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-accent"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-accent"
                required
              />
              <textarea
                name="message"
                placeholder="Ваше сообщение..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-accent"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-brand-accent transition"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
