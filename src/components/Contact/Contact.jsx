import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const ContactCard = ({ icon: Icon, title, content, action, actionText, actionClass, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
    className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 overflow-hidden relative"
  >
    {/* Decorative accent */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CE171F] to-transparent"></div>
    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#CE171F]/10 rounded-full blur-xl"></div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-gradient-to-br from-[#CE171F]/20 to-black/40 rounded-xl flex items-center justify-center border border-[#CE171F]/30 shadow-inner mb-6">
        <Icon className="text-2xl text-[#CE171F]" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70 mb-5">{content}</p>
      
      {action && (
        <a
          href={action}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionClass} inline-flex items-center py-2 group`}
        >
          <span className="relative">
            {actionText}
            <motion.div 
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              className="absolute -bottom-1 left-0 h-0.5 bg-current opacity-70"
            />
          </span>
          <motion.span 
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            className="ml-2"
          >
            <FaArrowRight className="text-sm" />
          </motion.span>
        </a>
      )}
    </div>
  </motion.div>
);

const InputField = ({ label, id, type = "text", placeholder, value, onChange, required }) => (
  <div className="space-y-2">
    <label className="block text-white text-sm font-medium" htmlFor={id}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows="5"
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#CE171F]/70 focus:ring-1 focus:ring-[#CE171F]/50 transition-all duration-300 backdrop-blur-sm shadow-sm"
        placeholder={placeholder}
        required={required}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#CE171F]/70 focus:ring-1 focus:ring-[#CE171F]/50 transition-all duration-300 backdrop-blur-sm shadow-sm"
        placeholder={placeholder}
        required={required}
      />
    )}
  </div>
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
    <section id="contato" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#CE171F]/5 rounded-full filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#CE171F]/5 rounded-full filter blur-[100px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center mb-5 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <HiOutlineLightBulb className="text-[#CE171F] text-lg mr-2" />
            <span className="text-white/90 text-sm font-medium">Fale Conosco</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('sections.contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#CE171F] to-[#CE171F]/30 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-white/70">
            {t('sections.contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            <ContactCard
              icon={FaEnvelope}
              title={t('sections.contact.info.email.title')}
              content={t('sections.contact.info.email.content')}
              action={`mailto:${t('sections.contact.info.email.content')}`}
              actionText={t('sections.contact.info.email.action')}
              actionClass="text-[#CE171F] hover:text-white transition-colors"
              delay={0.1}
            />
            <ContactCard
              icon={FaWhatsapp}
              title={t('sections.contact.info.whatsapp.title')}
              content={t('sections.contact.info.whatsapp.content')}
              action="https://wa.me/5515998024314"
              actionText={t('sections.contact.info.whatsapp.action')}
              actionClass="text-[#25D366] hover:text-white transition-colors"
              delay={0.2}
            />
            <ContactCard
              icon={FaMapMarkerAlt}
              title={t('sections.contact.info.address.title')}
              content={t('sections.contact.info.address.content')}
              action="https://maps.google.com"
              actionText={t('sections.contact.info.address.action')}
              actionClass="text-[#CE171F] hover:text-white transition-colors"
              delay={0.3}
            />
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CE171F]/20 via-transparent to-[#CE171F]/10 blur-xl opacity-50 rounded-3xl"></div>
            
            <div className="relative bg-gradient-to-b from-black/80 to-gray-900/90 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#CE171F]/10 rounded-full blur-xl opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#CE171F]/10 rounded-full blur-xl opacity-70"></div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row mb-8">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{t('sections.contact.form.title')}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Estamos ansiosos para ouvir de você e responder a quaisquer perguntas que você possa ter sobre nossos produtos e serviços. Nossa equipe está disponível para ajudá-lo.
                    </p>
                    <div className="w-12 h-1 bg-[#CE171F] rounded-full mt-6 mb-6"></div>
                    <div className="hidden md:block">
                      <div className="flex items-center text-white/60 text-sm mb-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
                          <span className="text-[#CE171F]">01</span>
                        </div>
                        Preencha o formulário
                      </div>
                      <div className="flex items-center text-white/60 text-sm mb-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
                          <span className="text-[#CE171F]">02</span>
                        </div>
                        Nossa equipe analisará seu contato
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
                          <span className="text-[#CE171F]">03</span>
                        </div>
                        Responderemos o mais breve possível
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 md:border-l border-white/10 md:pl-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                          label={t('sections.contact.form.name.label')}
                          id="name"
                          placeholder={t('sections.contact.form.name.placeholder')}
                          value={formData.name}
                          onChange={handleChange}
                          required={true}
                        />
                        <InputField
                          label={t('sections.contact.form.email.label')}
                          id="email"
                          type="email"
                          placeholder={t('sections.contact.form.email.placeholder')}
                          value={formData.email}
                          onChange={handleChange}
                          required={true}
                        />
                      </div>
                      
                      <InputField
                        label={t('sections.contact.form.message.label')}
                        id="message"
                        type="textarea"
                        placeholder={t('sections.contact.form.message.placeholder')}
                        value={formData.message}
                        onChange={handleChange}
                        required={true}
                      />
                      
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(206, 23, 31, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="relative bg-gradient-to-r from-[#CE171F] to-[#A30F15] text-white font-medium py-3 px-6 rounded-lg overflow-hidden group flex items-center justify-center shadow-lg"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#A30F15] to-[#CE171F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center">
                          {t('sections.contact.form.submit')}
                          <FaPaperPlane className="ml-2 text-sm" />
                        </span>
                      </motion.button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 