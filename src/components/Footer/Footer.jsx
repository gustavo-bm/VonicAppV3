import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import VonicLogo from '../../assets/VONIC.png';

const SocialButton = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
    aria-label={label}
  >
    <Icon className="text-xl" />
  </motion.a>
);

const InfoItem = ({ icon: Icon, text, className = "" }) => (
  <div className={`flex items-center space-x-3 ${className}`}>
    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
      <Icon className="text-[#CE171F] text-xl" />
    </div>
    <span className="text-white/80">{text}</span>
  </div>
);

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      {/* Gradient Bar */}
      <div className="h-1 bg-gradient-vonic w-full" />

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={VonicLogo} alt="Vonic Systems" className="h-16 mb-6" />
            <div className="space-y-4">
              <InfoItem
                icon={FaMapMarkerAlt}
                text={t('footer.address')}
              />
              <InfoItem
                icon={FaEnvelope}
                text={t('footer.email')}
              />
              <InfoItem
                icon={FaPhone}
                text={t('footer.phone')}
              />
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">{t('footer.quick_links')}</h3>
            <nav className="grid grid-cols-2 gap-4">
              <a href="#home" className="text-white/60 hover:text-white transition-colors">{t('nav.home')}</a>
              <a href="#sobre" className="text-white/60 hover:text-white transition-colors">{t('nav.about')}</a>
              <a href="#servicos" className="text-white/60 hover:text-white transition-colors">{t('nav.services')}</a>
              <a href="#parceiros" className="text-white/60 hover:text-white transition-colors">{t('nav.partners')}</a>
              <a href="#produtos" className="text-white/60 hover:text-white transition-colors">{t('nav.products')}</a>
              <a href="#contato" className="text-white/60 hover:text-white transition-colors">{t('nav.contact')}</a>
            </nav>
          </div> */}

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden h-[250px] shadow-lg relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-vonic z-10" />
              <iframe
                src="https://www.google.com/maps?q=Vonic+Systems&hl=pt-BR&t=m&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vonic Systems Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-center md:text-left">
            © {currentYear} Vonic Systems. {t('footer.rights')}
          </p>
          <div className="flex space-x-4">
            <SocialButton
              href="https://www.linkedin.com/company/vonic-systems"
              icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialButton
              href="https://www.instagram.com/vonicsystems"
              icon={FaInstagram}
              label="Instagram"
            />
            <SocialButton
              href="https://wa.me/5515998024314"
              icon={FaWhatsapp}
              label="WhatsApp"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
