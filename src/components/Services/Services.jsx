import { motion } from 'framer-motion';
import { FaWrench, FaCog, FaIndustry, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaWrench className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.maintenance.title'),
      description: t('sections.services.maintenance.description')
    },
    {
      icon: <FaIndustry className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.manufacturing.title'),
      description: t('sections.services.manufacturing.description')
    },
    {
      icon: <FaCog className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.optimization.title'),
      description: t('sections.services.optimization.description')
    },
    {
      icon: <FaCheckCircle className="text-4xl text-[#CE171F]" />,
      title: t('sections.services.consulting.title'),
      description: t('sections.services.consulting.description')
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
      {/* Background elements decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#CE171F]/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#CE171F]/5 rounded-full filter blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">{t('sections.services.title')}</h2>
          <div className="w-24 h-1 bg-[#CE171F] mx-auto mb-6 rounded-full"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{t('sections.services.subtitle')}</p>
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
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {service.description}
                </p>
                <div className="mt-8">
                  <div className="w-8 h-[2px] bg-[#CE171F]/50 group-hover:w-12 group-hover:bg-[#CE171F] transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 