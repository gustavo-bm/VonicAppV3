import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCheck, FaCog } from 'react-icons/fa';

// Importando a imagem do controlador
import SequentialController from '../../../assets/mastip/sequential_controllers.png';

const ControllerCard = ({ title, description, image, link, features = [], specs = {} }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-4 transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-[#CE171F]">{title}</h3>
        <p className="text-black/80 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Características:</h4>
          <ul className="space-y-2">
            {Array.isArray(features) && features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCheck className="text-[#CE171F] mt-1 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Especificações:</h4>
          <ul className="space-y-2">
            {Object.entries(specs).map(([key, value], index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCog className="text-[#CE171F] mt-1 flex-shrink-0" />
                <span className="text-gray-600">{key}: {value}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group"
        >
          <span>{t('buttons.view_details')}</span>
          <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const SequentialControllers = () => {
  const { t } = useTranslation();

  const getTranslatedFeatures = (path) => {
    const features = t(path, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  };

  const getTranslatedSpecs = (path) => {
    const specs = t(path, { returnObjects: true });
    return typeof specs === 'object' ? specs : {};
  };

  const controllers = [
    {
      title: t('mastip.sequential_controllers.systems.sc2.title'),
      description: t('mastip.sequential_controllers.systems.sc2.description'),
      image: SequentialController,
      link: "https://mastip.com/products/sequential-controllers/meticom-sc2/",
      features: getTranslatedFeatures('mastip.sequential_controllers.systems.sc2.features'),
      specs: getTranslatedSpecs('mastip.sequential_controllers.systems.sc2.specs')
    },
    {
      title: t('mastip.sequential_controllers.systems.sc8.title'),
      description: t('mastip.sequential_controllers.systems.sc8.description'),
      image: SequentialController,
      link: "https://mastip.com/products/sequential-controllers/meticom-sc8/",
      features: getTranslatedFeatures('mastip.sequential_controllers.systems.sc8.features'),
      specs: getTranslatedSpecs('mastip.sequential_controllers.systems.sc8.specs')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-vonic-dark pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">{t('mastip.sequential_controllers.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('mastip.sequential_controllers.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {controllers.map((controller, index) => (
            <ControllerCard key={index} {...controller} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SequentialControllers; 