import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
          <p className="text-xl text-white/80">{t('ready_to_serve')}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2" htmlFor="name">{t('name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
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
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder={t('your_message')}
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('send_message')}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 bg-white/5 backdrop-blur-sm p-8 rounded-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('email')}</h3>
                  <p className="text-white/80">marcos.moraes@vonicsystems.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('address')}</h3>
                  <p className="text-white/80">Salto de Pirapora - SP</p>
                </div>
              </div>

              <a
                href="https://wa.me/5515998024314"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                <FaWhatsapp className="text-2xl" />
                <span>WhatsApp Business</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 