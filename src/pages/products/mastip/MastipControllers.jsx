import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCheck, FaCog } from 'react-icons/fa';

// Importando imagens dos controladores
import TouchscreenController from '../../../assets/mastip/controllers/touchscreen.png';
import ModularController from '../../../assets/mastip/controllers/modular.jpg';
import IntegratedController from '../../../assets/mastip/controllers/integrated.jpg';

const ControllerCard = ({ title, description, image, link, features = [], specs = {} }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 mb-12"
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
          <h4 className="text-lg font-semibold mb-2 text-gray-700">{t('features')}:</h4>
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
          <h4 className="text-lg font-semibold mb-2 text-gray-700">{t('specifications')}:</h4>
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

const MastipControllers = () => {
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
      title: t('mastip.products_page.temperature_controllers.systems.touchscreen.title'),
      description: t('mastip.products_page.temperature_controllers.systems.touchscreen.description'),
      image: TouchscreenController,
      link: "https://mastip.com/products/temperature-controllers/meticom-touchscreen-temperature-controllers/",
      features: getTranslatedFeatures('mastip.products_page.temperature_controllers.systems.touchscreen.features'),
      specs: getTranslatedSpecs('mastip.products_page.temperature_controllers.systems.touchscreen.specs')
    },
    {
      title: t('mastip.products_page.temperature_controllers.systems.modular.title'),
      description: t('mastip.products_page.temperature_controllers.systems.modular.description'),
      image: ModularController,
      link: "https://mastip.com/products/temperature-controllers/meticom-modular-temperature-controllers/",
      features: getTranslatedFeatures('mastip.products_page.temperature_controllers.systems.modular.features'),
      specs: getTranslatedSpecs('mastip.products_page.temperature_controllers.systems.modular.specs')
    },
    {
      title: t('mastip.products_page.temperature_controllers.systems.integrated.title'),
      description: t('mastip.products_page.temperature_controllers.systems.integrated.description'),
      image: IntegratedController,
      link: "https://mastip.com/products/temperature-controllers/meticom-integrated-temperature-controllers/",
      features: getTranslatedFeatures('mastip.products_page.temperature_controllers.systems.integrated.features'),
      specs: getTranslatedSpecs('mastip.products_page.temperature_controllers.systems.integrated.specs')
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-[#CE171F]">{t('mastip.products_page.temperature_controllers.title')}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('mastip.products_page.temperature_controllers.description')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {controllers.map((controller, index) => (
            <ControllerCard key={index} {...controller} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MastipControllers; 