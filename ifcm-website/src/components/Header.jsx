import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
  };

  const navItems = [
    { path: "/about", name: "О нас" },
    { path: "/clients", name: "С кем мы работаем?" },
    { path: "/suppliers", name: "Для поставщиков" },
    { path: "/services", name: "Услуги" },
    { path: "/career", name: "Карьера" },
    { path: "/contact", name: "Связаться с нами" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/home" className="flex items-center">
            <motion.img
              src="/logo.png"
              alt="iFCM Group Logo"
              className="h-12"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item.path}
                    className="text-brand-primary hover:text-brand-accent transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <motion.button
            className="md:hidden text-brand-primary focus:outline-none p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <motion.ul className="flex flex-col space-y-2 py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-brand-primary hover:text-brand-accent hover:bg-gray-100 rounded-md transition-colors font-medium"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
