import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import VonicLogo from '../../assets/VONIC.png';

const SocialButton = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-white/80 hover:text-white transition-colors"
  >
    <Icon className="text-2xl" />
  </motion.a>
);

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.060407583502!2d-47.5779152!3d-23.6380076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58e4d728879e1%3A0xa5331535313b1a93!2sR.%20Jo%C3%A3o%20Pedroso%20da%20Rosa%2C%20100%2C%20Salto%20de%20Pirapora%20-%20SP%2C%2018160-000!5e0!3m2!1spt-BR!2sbr!4v1739655826189!5m2!1spt-BR!2sbr";
  const googleMapsLink = "https://www.google.com.br/maps/place/R.+Jo%C3%A3o+Pedroso+da+Rosa,+100,+Salto+de+Pirapora+-+SP,+18160-000/@-23.6380076,-47.5804901,17z/data=!3m1!4b1!4m6!3m5!1s0x94c58e4d728879e1:0xa5331535313b1a93!8m2!3d-23.6380076!4d-47.5779152!16s%2Fg%2F11gtz6cmvv?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-[#1A1A1A]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="space-y-6">
            <img src={VonicLogo} alt="Vonic Systems" className="h-12" />
            <p className="text-white/80 max-w-sm">
              {t('footer_description')}
            </p>
            <div className="flex space-x-6">
              <SocialButton
                icon={FaLinkedin}
                href="https://www.linkedin.com/company/vonic-systems-do-brasil/posts/?feedView=all"
              />
              <SocialButton
                icon={FaInstagram}
                href="https://www.instagram.com/vonicsystems"
              />
              <SocialButton
                icon={FaWhatsapp}
                href="https://wa.me/5515998024314"
              />
            </div>
          </div>

          {/* Coluna 2 - Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact_info')}</h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:marcos.moraes@vonicsystems.com.br"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-[#CE171F] text-xl" />
                <span>marcos.moraes@vonicsystems.com.br</span>
              </motion.a>
              <motion.a
                href="https://wa.me/5515998024314"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaWhatsapp className="text-[#25D366] text-xl" />
                <span>+55 15 99802-4314</span>
              </motion.a>
              <motion.a
                href="tel:+5515998024314"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="text-[#CE171F] text-xl" />
                <span>+55 15 99802-4314</span>
              </motion.a>
              <motion.a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="text-[#CE171F] text-xl" />
                <span>Salto de Pirapora - SP</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="rounded-xl overflow-hidden h-[300px] shadow-lg relative">
          <iframe
            src={mapLocation}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vonic Systems Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
          <motion.a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-all duration-300"
          >
            <p className="text-sm font-medium text-gray-900">R. João Pedroso da Rosa, 100</p>
            <p className="text-xs text-gray-600">Salto de Pirapora - SP</p>
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            © {currentYear} Vonic Systems. {t('all_rights_reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 