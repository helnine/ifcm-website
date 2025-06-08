import { motion } from 'framer-motion';
import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '@/firebase';

export default function ResumeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    letter: '',
    file: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.position) {
        throw new Error('Пожалуйста, заполните все обязательные поля');
      }

      const fileName = formData.file ? formData.file.name : '';

      await push(ref(db, 'resumes'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        letter: formData.letter,
        fileName: fileName,
        submittedAt: new Date().toISOString()
      });

      setSubmitted(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <section className="relative min-h-screen bg-white font-sans text-brand-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/ifcm-geometry-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-4 py-20 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-cera-black font-black mb-10 text-center text-brand-primary"
        >
          Отправка резюме
        </motion.h1>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center shadow-lg"
          >
            <h2 className="text-2xl font-cera-black mb-2">Спасибо!</h2>
            <p className="text-base font-cera-regular">
              Ваше резюме успешно отправлено. Мы свяжемся с вами при наличии подходящих вакансий.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-white p-8 rounded-xl shadow-xl border border-gray-100"
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl font-cera-regular">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm mb-1 font-cera-regular">ФИО</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1 font-cera-regular">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 font-cera-regular">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 font-cera-regular">Желаемая позиция</label>
              <input
                type="text"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-cera-regular">Сопроводительное письмо</label>
              <textarea
                name="letter"
                rows={5}
                value={formData.letter}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Расскажите о себе..."
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-cera-regular">Загрузить резюме (PDF)</label>
              <input
                type="file"
                name="file"
                accept=".pdf,application/pdf"
                onChange={handleChange}
                className="w-full text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-brand-primary text-white font-cera-black py-3 px-6 rounded-lg hover:bg-brand-accent transition disabled:opacity-50"
            >
              {isLoading ? 'Отправка...' : 'Отправить резюме'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
