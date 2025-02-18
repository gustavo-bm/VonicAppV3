import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCog, FaIndustry, FaCheckCircle, FaBox, FaWrench } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaWrench className="text-4xl mb-4 text-vonic-500" />,
      title: t('sections.services.maintenance.title'),
      description: t('sections.services.maintenance.description')
    },
    {
      icon: <FaIndustry className="text-4xl mb-4 text-vonic-500" />,
      title: t('sections.services.manufacturing.title'),
      description: t('sections.services.manufacturing.description')
    },
    {
      icon: <FaCog className="text-4xl mb-4 text-vonic-500" />,
      title: t('sections.services.optimization.title'),
      description: t('sections.services.optimization.description')
    },
    {
      icon: <FaCheckCircle className="text-4xl mb-4 text-vonic-500" />,
      title: t('sections.services.consulting.title'),
      description: t('sections.services.consulting.description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#CE171F] via-[#8B0000] to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">{t('sections.services.title')}</h2>
          <p className="text-white/90">{t('sections.services.subtitle')}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/30 group"
            >
              <div className="bg-gradient-to-br from-[#CE171F]/10 to-transparent p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#CE171F] group-hover:text-[#8B0000] transition-colors">
                {service.title}
              </h3>
              <p className="text-black/80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 