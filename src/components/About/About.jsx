import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaCertificate, FaHandshake, FaBullseye } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaIndustry className="text-4xl text-vonic-500" />,
      title: t('sections.about.features.headquarters.title'),
      description: t('sections.about.features.headquarters.description')
    },
    {
      icon: <FaCertificate className="text-4xl text-vonic-500" />,
      title: t('sections.about.features.certified.title'),
      description: t('sections.about.features.certified.description')
    },
    {
      icon: <FaHandshake className="text-4xl text-vonic-500" />,
      title: t('sections.about.features.commitment.title'),
      description: t('sections.about.features.commitment.description')
    },
    {
      icon: <FaBullseye className="text-4xl text-vonic-500" />,
      title: t('sections.about.features.smart.title'),
      description: t('sections.about.features.smart.description')
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#CE171F]">{t('sections.about.title')}</h2>
            <p className="text-xl text-black mb-8 leading-relaxed">
              {t('sections.about.description')}
            </p>
            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
                {t('sections.about.text')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-[#CE171F]/10 hover:border-[#CE171F]/30 group"
              >
                <div className="bg-gradient-to-br from-[#CE171F]/10 to-transparent p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-[#CE171F] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-black/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 