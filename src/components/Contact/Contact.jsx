import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ContactCard = ({ icon: Icon, title, content, action, actionText, actionClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-start space-x-4">
      <div className="bg-gradient-to-br from-[#CE171F]/20 to-transparent p-3 rounded-full">
        <Icon className="text-[#CE171F] text-2xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{content}</p>
        <a
          href={action}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center space-x-2 text-sm font-medium ${actionClass}`}
        >
          <span>{actionText}</span>
          <Icon className="w-4 h-4" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">{t('contact.title')}</h2>
          <p className="text-white/90">{t('contact.ready_to_serve')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon={FaEnvelope}
            title={t('contact.info.email')}
            content="marcos.moraes@vonicsystems.com.br"
            action="mailto:marcos.moraes@vonicsystems.com.br"
            actionText={t('buttons.send_email')}
            actionClass="text-[#CE171F] hover:text-[#CE171F]/80"
          />
          <ContactCard
            icon={FaWhatsapp}
            title={t('contact.info.whatsapp')}
            content="+55 15 99802-4314"
            action="https://wa.me/5515998024314"
            actionText={t('buttons.start_chat')}
            actionClass="text-green-500 hover:text-green-400"
          />
          <ContactCard
            icon={FaMapMarkerAlt}
            title={t('contact.info.address')}
            content="Salto de Pirapora - SP"
            action="https://maps.google.com"
            actionText={t('buttons.view_map')}
            actionClass="text-[#CE171F] hover:text-[#CE171F]/80"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.your_name')}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white border border-gray-700 focus:border-[#CE171F] focus:ring-1 focus:ring-[#CE171F] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.your_email')}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white border border-gray-700 focus:border-[#CE171F] focus:ring-1 focus:ring-[#CE171F] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.your_message')}
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white border border-gray-700 focus:border-[#CE171F] focus:ring-1 focus:ring-[#CE171F] transition-colors resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              {t('buttons.send_message')}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 