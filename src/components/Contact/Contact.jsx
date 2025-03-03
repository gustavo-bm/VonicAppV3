import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
// import { env } from '../../../env';
import { emailjsConfig } from '../../config/emailjs';
import ParticlesBackground from '../Services/ParticlesBackground';

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

const InputField = ({ label, id, type = "text", placeholder, value, onChange, required, disabled }) => (
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
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#CE171F]/70 focus:ring-1 focus:ring-[#CE171F]/50 transition-all duration-300 backdrop-blur-sm shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#CE171F]/70 focus:ring-1 focus:ring-[#CE171F]/50 transition-all duration-300 backdrop-blur-sm shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    )}
  </div>
);

// Componente de Notificação
const Notification = ({ type, message, onClose }) => {
  const variants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 }
  };

  let bgColor, icon;
  
  if (type === 'success') {
    bgColor = 'bg-gradient-to-r from-green-600 to-green-500';
    icon = <FaCheckCircle className="text-xl text-white" />;
  } else {
    bgColor = 'bg-gradient-to-r from-red-600 to-red-500';
    icon = <FaExclamationTriangle className="text-xl text-white" />;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-6 right-6 z-50 ${bgColor} text-white p-4 pr-12 rounded-lg shadow-2xl backdrop-blur-sm border border-white/20 flex items-center max-w-md`}
    >
      <div className="mr-3 flex-shrink-0">
        {icon}
      </div>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
        aria-label="Fechar notificação"
      >
        <FaTimes />
      </button>
    </motion.div>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [state, handleSubmit] = useForm("xpwqvrzn");
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  // Efeito para limpar os campos após o envio bem-sucedido
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setNotification({
        show: true,
        type: 'success',
        message: t('sections.contact.notifications.success')
      });
      
      // Envia email de confirmação para o remetente
      sendConfirmationEmail(formData.email, formData.name);
    } else if (state.errors && state.errors.length > 0) {
      setNotification({
        show: true,
        type: 'error',
        message: t('sections.contact.notifications.error')
      });
    }
  }, [state.succeeded, state.errors, t]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeNotification = () => {
    setNotification({ ...notification, show: false });
  };

  // Função para enviar email de confirmação ao remetente usando EmailJS
  const sendConfirmationEmail = (email, name) => {
    const templateParams = {
      to_email: email,
      to_name: name,
      subject: 'Confirmação de Recebimento - Vonic Systems',
      message: `Olá ${name}, recebemos sua mensagem e entraremos em contato em breve. Obrigado pelo interesse!`
    };

    emailjs.send(
      emailjsConfig.serviceId, 
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    )
    .then((result) => {
      console.log('Email de confirmação enviado com sucesso!', result.text);
    }, (error) => {
      console.log('Erro ao enviar email de confirmação:', error.text);
    });
  };

  return (
    <section id="contato" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <ParticlesBackground particleCount={160} interactionStrength={1.3} color="red" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/75 to-[#0F0F0F]/85 z-10"></div>

      {/* Sistema de Notificação */}
      <AnimatePresence>
        {notification.show && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={closeNotification}
          />
        )}
      </AnimatePresence>

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
            <span className="text-white/90 text-sm font-medium">{t('sections.contact.speak_with_us')}</span>
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
              action="https://www.google.com/maps/place/VONIC+Hot+Runner+Systems/@-23.638008,-47.577915,15z/data=!4m6!3m5!1s0x94c58faebaec5b47:0x818dcd1aab320d3b!8m2!3d-23.6380076!4d-47.5779152!16s%2Fg%2F11rfcxf25f?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
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
                      {t('sections.contact.form.description')}
                    </p>
                    <div className="w-12 h-1 bg-[#CE171F] rounded-full mt-6 mb-6"></div>
                    <div className="hidden md:block">
                      <div className="flex items-center text-white/60 text-sm mb-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
                          <span className="text-[#CE171F]">01</span>
                        </div>
                        {t('sections.contact.form.steps.1')}
                      </div>
                      <div className="flex items-center text-white/60 text-sm mb-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
                          <span className="text-[#CE171F]">02</span>
                        </div>
                        {t('sections.contact.form.steps.2')}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
                          <span className="text-[#CE171F]">03</span>
                        </div>
                        {t('sections.contact.form.steps.3')}
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
                          disabled={state.submitting}
                        />
                        <InputField
                          label={t('sections.contact.form.email.label')}
                          id="email"
                          type="email"
                          placeholder={t('sections.contact.form.email.placeholder')}
                          value={formData.email}
                          onChange={handleChange}
                          required={true}
                          disabled={state.submitting}
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
                        disabled={state.submitting}
                      />
                      
                      <motion.button
                        whileHover={{ scale: state.submitting ? 1 : 1.02, boxShadow: state.submitting ? "none" : "0 10px 25px -5px rgba(206, 23, 31, 0.3)" }}
                        whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={state.submitting}
                        className="relative bg-gradient-to-r from-[#CE171F] to-[#A30F15] text-white font-medium py-3 px-6 rounded-lg overflow-hidden group flex items-center justify-center shadow-lg disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#A30F15] to-[#CE171F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center">
                          {state.submitting ? t('sections.contact.form.submitting', 'Enviando...') : t('sections.contact.form.submit')}
                          {!state.submitting && <FaPaperPlane className="ml-2 text-sm" />}
                        </span>
                      </motion.button>
                      
                      {/* Status de validação do formulário */}
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
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