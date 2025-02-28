import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaCertificate, FaHandshake, FaBullseye, FaQuoteRight } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaIndustry className="text-[#CE171F]" />,
      title: t('sections.about.features.headquarters.title'),
      description: t('sections.about.features.headquarters.description')
    },
    {
      icon: <FaCertificate className="text-[#CE171F]" />,
      title: t('sections.about.features.certified.title'),
      description: t('sections.about.features.certified.description')
    },
    {
      icon: <FaHandshake className="text-[#CE171F]" />,
      title: t('sections.about.features.commitment.title'),
      description: t('sections.about.features.commitment.description')
    },
    {
      icon: <FaBullseye className="text-[#CE171F]" />,
      title: t('sections.about.features.smart.title'),
      description: t('sections.about.features.smart.description')
    }
  ];

  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CE171F]/5 rounded-full filter blur-[100px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CE171F]/5 rounded-full filter blur-[80px] opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full border border-[#CE171F]/20"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-[#CE171F]/20"></div>
      
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-5 bg-[#CE171F]/5 backdrop-blur-sm px-4 py-2 rounded-full border border-[#CE171F]/10">
            <HiOutlineLightBulb className="text-[#CE171F] text-lg mr-2" />
            <span className="text-gray-700 text-sm font-medium">Nossa História</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('sections.about.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#CE171F] to-[#CE171F]/30 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 text-xl leading-relaxed">
            {t('sections.about.description')}
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content with Gradient Background */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#CE171F]/5 via-transparent to-[#CE171F]/5 z-0"></div>
          
          {/* Quote Decoration */}
          <div className="absolute top-10 right-10 opacity-10">
            <FaQuoteRight className="text-[#CE171F] text-9xl" />
          </div>
          
          <div className="relative z-10 p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="flex items-center">
                  <div className="w-12 h-0.5 bg-[#CE171F]"></div>
                  <h3 className="text-xl text-[#CE171F] font-medium ml-4">
                    Excelência em Sistemas de Câmara Quente
                  </h3>
                </div>
                
                <h4 className="text-3xl font-bold text-gray-900 leading-tight">
                  Comprometida com inovações que aprimoram os processos de injeção plástica
                </h4>
                
                <div className="text-gray-700 space-y-6">
                  <p className="leading-relaxed text-lg">
                    {t('sections.about.text')}
                  </p>
                  
                  <div className="pl-5 border-l-4 border-[#CE171F]/20 italic text-gray-600">
                    Nossa missão é fornecer soluções que garantam a mais alta qualidade, 
                    eficiência e confiabilidade para todos os nossos clientes.
                  </div>
                </div>
                
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="bg-[#CE171F]/5 rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                      <FaCertificate className="text-lg text-[#CE171F]" />
                    </div>
                    <span className="font-medium text-gray-900">Empresa certificada</span>
                  </div>
                  <div className="bg-[#CE171F]/5 rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                      <FaIndustry className="text-lg text-[#CE171F]" />
                    </div>
                    <span className="font-medium text-gray-900">+15 anos no mercado</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Features Grid */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="bg-gradient-to-br from-[#CE171F]/10 to-white/80 p-0.5 rounded-xl">
                  <div className="bg-white rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Nossos diferenciais
                    </h3>
                    
                    <div className="space-y-6">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-4 group"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center group-hover:border-[#CE171F]/20 transition-colors">
                            <div className="text-xl">{feature.icon}</div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#CE171F] transition-colors mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="text-4xl font-bold text-[#CE171F] mb-2">+500</div>
            <div className="text-gray-600 text-sm">Projetos Realizados</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="text-4xl font-bold text-[#CE171F] mb-2">+70</div>
            <div className="text-gray-600 text-sm">Clientes Satisfeitos</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="text-4xl font-bold text-[#CE171F] mb-2">+15</div>
            <div className="text-gray-600 text-sm">Anos de Experiência</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="text-4xl font-bold text-[#CE171F] mb-2">100%</div>
            <div className="text-gray-600 text-sm">Compromisso com Qualidade</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 