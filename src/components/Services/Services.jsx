import { motion } from 'framer-motion';
import { FaWrench, FaCog, FaIndustry, FaCheckCircle, FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MovingPoints from './MovingPoints';
import Scene from './MovingPoints';
import ParticlesBackground from './ParticlesBackground';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaWrench className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.maintenance.title'),
      description: t('sections.services.maintenance.description'),
      features: [
        t('sections.services.maintenance.features.1'),
        t('sections.services.maintenance.features.2'),
        t('sections.services.maintenance.features.3'),
        t('sections.services.maintenance.features.4')
      ]
    },
    {
      icon: <FaIndustry className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.manufacturing.title'),
      description: t('sections.services.manufacturing.description'),
      features: [
        t('sections.services.manufacturing.features.1'),
        t('sections.services.manufacturing.features.2'),
        t('sections.services.manufacturing.features.3'),
        t('sections.services.manufacturing.features.4')
      ]
    },
    {
      icon: <FaCog className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.optimization.title'),
      description: t('sections.services.optimization.description'),
      features: [
        t('sections.services.optimization.features.1'),
        t('sections.services.optimization.features.2'),
        t('sections.services.optimization.features.3'),
        t('sections.services.optimization.features.4')
      ]
    },
    {
      icon: <FaCheckCircle className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.consulting.title'),
      description: t('sections.services.consulting.description'),
      features: [
        t('sections.services.consulting.features.1'),
        t('sections.services.consulting.features.2'),
        t('sections.services.consulting.features.3'),
        t('sections.services.consulting.features.4')
      ]
    }
  ];

  // Variantes para animações mais suaves
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-[#0F0F0F] relative overflow-hidden">
      {/* Background de Particulas - configuração de referência */}
      <ParticlesBackground particleCount={160} interactionStrength={1.3} color="red" />

      {/* Overlay gradient mais suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/75 to-[#0F0F0F]/85 z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-[#CE171F]/10 px-6 py-2.5 rounded-full">
            <FaRocket className="text-[#CE171F] text-xl mr-2" />
            <span className="text-white/90 text-sm font-medium">{t('sections.services.subtitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">{t('sections.services.title')}</h2>
          <div className="w-24 h-1 bg-[#CE171F] mx-auto mb-6 rounded-full"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('sections.services.description')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-[#CE171F]/30 transition-all duration-500 group"
              style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center shadow-inner mb-4 group-hover:bg-[#CE171F]/10 transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#CE171F] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                  {service.description}
                </p>

                <div className="mt-auto space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <FaCheckCircle className="text-[#CE171F] mr-2 text-xs" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="w-8 h-[2px] bg-[#CE171F]/50 group-hover:w-12 group-hover:bg-[#CE171F] transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative group inline-block">
            <motion.button
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-transparent text-white border-2 border-[#CE171F] px-8 py-4 rounded-lg font-medium shadow-lg flex items-center space-x-2 group-hover:bg-[#CE171F] transition-colors duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CE171F] to-[#A30F15] rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative z-10">{t('buttons.contact_us')}</span>
              <FaLightbulb className="relative z-10 text-xl" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services; 