import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaChevronUp } from 'react-icons/fa';
import VonicLogo from '../../assets/VONIC.png';

const SocialButton = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="w-11 h-11 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-[#CE171F] hover:text-white hover:shadow-glow-sm border border-white/10 transition-all duration-300"
    aria-label={label}
  >
    <Icon className="text-xl" />
  </motion.a>
);

const InfoItem = ({ icon: Icon, text, className = "" }) => (
  <div className={`flex items-start space-x-4 ${className}`}>
    <div className="w-10 h-10 bg-gradient-to-br from-vonics-500/30 to-vonics-600/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner border border-vonics-500/20">
      <Icon className="text-[#CE171F] text-lg" />
    </div>
    <span className="text-white/90 text-sm leading-tight mt-1">{text}</span>
  </div>
);

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-vonics-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-vonics-500/5 rounded-full filter blur-[120px] opacity-30"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gradient Bar */}
      <div className="h-1.5 bg-gradient-vonic w-full relative z-10" />
      
      {/* Back to Top Button - Ajustado para não sobrepor */}
      <div className="absolute top-6 right-8 z-20">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gradient-to-br from-[#CE171F] to-[#9E0B11] rounded-full flex items-center justify-center text-white shadow-lg border border-[#CE171F]/30"
        >
          <FaChevronUp className="text-lg" />
        </motion.button>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={VonicLogo} alt="Vonic Systems" className="h-16 mb-8 drop-shadow-glow" />
              <div className="space-y-6 max-w-xs">
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
            </motion.div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-[300px] shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vonics-500 to-vonics-600/50 z-20" />
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
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white/70 text-center md:text-left text-sm"
          >
            © {currentYear} Vonic Systems. {t('footer.rights')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <SocialButton
              href="https://www.linkedin.com/company/vonic-systems-do-brasil/posts/?feedView=all"
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
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
