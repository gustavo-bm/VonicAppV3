import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white text-gray-800 fixed w-full z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/vonic-logo.png" alt="Vonic" className="h-12" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="hover:text-red-600 transition-colors font-medium">HOME</a>
              <a href="#sobre" className="hover:text-red-600 transition-colors font-medium">SOBRE NÓS</a>
              <a href="#produtos" className="hover:text-red-600 transition-colors font-medium">PRODUTOS</a>
              <a href="#parceiros" className="hover:text-red-600 transition-colors font-medium">PARCEIROS</a>
              <a href="#contato" className="hover:text-red-600 transition-colors font-medium">CONTATO</a>
              <a 
                href="#parceiro" 
                className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors ml-4"
              >
                SEJA UM PARCEIRO →
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`lg:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#home" className="block hover:text-red-600 transition-colors font-medium">HOME</a>
            <a href="#sobre" className="block hover:text-red-600 transition-colors font-medium">SOBRE NÓS</a>
            <a href="#produtos" className="block hover:text-red-600 transition-colors font-medium">PRODUTOS</a>
            <a href="#parceiros" className="block hover:text-red-600 transition-colors font-medium">PARCEIROS</a>
            <a href="#contato" className="block hover:text-red-600 transition-colors font-medium">CONTATO</a>
            <a 
              href="#parceiro" 
              className="block bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors text-center"
            >
              SEJA UM PARCEIRO →
            </a>
          </div>
        </motion.div>
      </nav>

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="servicos">
          <Services />
        </section>
        
        <section id="contato">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/vonic-logo-white.png" alt="Vonic" className="h-12 mb-4" />
              <p className="text-gray-400">Hot Runner Systems</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Navegação</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#sobre" className="hover:text-white">Sobre Nós</a></li>
                <li><a href="#produtos" className="hover:text-white">Produtos</a></li>
                <li><a href="#parceiros" className="hover:text-white">Parceiros</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@vonic.com.br</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo - SP</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vonic. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 