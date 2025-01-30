import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-vonic-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Coluna 1 - Informações de Contato */}
          <div className="space-y-6">
            <img src="/logo.png" alt="Vonic Systems" className="h-12" />
            <p className="text-white/80 max-w-sm">
              {t('footer_description')}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:marcos.moraes@vonicsystems.com.br"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-[#CE171F]" />
                <span>marcos.moraes@vonicsystems.com.br</span>
              </a>
              <a
                href="https://wa.me/5515998024314"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <FaWhatsapp className="text-[#25D366]" />
                <span>+55 15 99802-4314</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <FaMapMarkerAlt className="text-[#CE171F]" />
                <span>Salto de Pirapora - SP</span>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Mapa */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0167757024584!2d-47.5743493!3d-23.6472775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abf85b6ff59%3A0x7e47c35937b9844e!2sVonic%20Systems!5e0!3m2!1spt-BR!2sbr!4v1647887421784!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Rodapé com Copyright e Redes Sociais */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Vonic Systems. {t('all_rights_reserved')}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/vonic-systems"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vonicsystems"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                href="https://wa.me/5515998024314"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 