import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const ContactCard = ({ icon: Icon, title, content, action, actionText, actionClass }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl space-y-4"
  >
    <div className="w-12 h-12 bg-[#CE171F]/10 rounded-xl flex items-center justify-center">
      <Icon className="text-2xl text-[#CE171F]" />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-white/80">{content}</p>
    {action && (
      <a
        href={action}
        target="_blank"
        rel="noopener noreferrer"
        className={actionClass}
      >
        {actionText} <FaArrowRight className="ml-2" />
      </a>
    )}
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
    
    try {
      const response = await fetch('https://formspree.io/f/marcos.moraes@vonicsystems.com.br', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contato" className="bg-gradient-vonic-dark py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t('contact_us')}</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('ready_to_serve')}</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ContactCard
              icon={FaEnvelope}
              title={t('email')}
              content="marcos.moraes@vonicsystems.com.br"
              action="mailto:marcos.moraes@vonicsystems.com.br"
              actionText="Enviar email"
              actionClass="inline-flex items-center text-[#CE171F] hover:text-white transition-colors"
            />
            <ContactCard
              icon={FaWhatsapp}
              title="WhatsApp"
              content="+55 15 99802-4314"
              action="https://wa.me/5515998024314"
              actionText="Iniciar conversa"
              actionClass="inline-flex items-center text-[#25D366] hover:text-white transition-colors"
            />
            <ContactCard
              icon={FaMapMarkerAlt}
              title={t('address')}
              content="Salto de Pirapora - SP"
              action="https://maps.google.com/?q=Vonic+Systems"
              actionText="Ver no mapa"
              actionClass="inline-flex items-center text-[#CE171F] hover:text-white transition-colors"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white mb-2" htmlFor="name">{t('name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#CE171F] transition-colors"
                    placeholder={t('your_name')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2" htmlFor="email">{t('email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#CE171F] transition-colors"
                    placeholder={t('your_email')}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="message">{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#CE171F] transition-colors"
                  placeholder={t('your_message')}
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative bg-gradient-vonic text-white font-bold py-4 px-8 rounded-xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-vonic-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center">
                  {t('send_message')} <FaArrowRight className="ml-2" />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 