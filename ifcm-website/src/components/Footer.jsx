export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-12 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-sans">iFCM Group</h3>
            <p className="text-white/70 font-sans">
              Cоздаем качество жизни с 1993 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white font-sans">Услуги</h4>
            <ul className="space-y-2 text-white/70 text-sm font-sans">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Консалтинг</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Аналитика</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Управление активами</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Юридические услуги</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white font-sans">Компания</h4>
            <ul className="space-y-2 text-white/70 text-sm font-sans">
              <li><a href="#" className="hover:text-brand-accent transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Команда</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Новости</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white font-sans">Контакты</h4>
            <ul className="space-y-2 text-white/70 text-sm font-sans">
              <li>Москва, ул. 3-я Рыбинская, д. 18, стр. 22.3</li>
              <li>Тел: +7(495) 246-01-10</li>
              <li>info@ifcmgroup.ru</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/60 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8 text-center text-white/60 text-sm font-sans">
          <p>© 2025 iFCM Group. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
