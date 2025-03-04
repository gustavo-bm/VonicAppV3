import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

// Importando as imagens
import MXNozzle from '../../../assets/mastip/nozzles/mx.png';
import BXNozzle from '../../../assets/mastip/nozzles/bx.png';
import SXNozzle from '../../../assets/mastip/nozzles/sx.png';
import FlowLocNozzle from '../../../assets/mastip/nozzles/flowloc.png';
import MultiGateNozzle from '../../../assets/mastip/nozzles/multi_gate.png';

const NozzleCard = ({ t, title, description, image, link, features = [] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
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
    <div className="p-6 flex-grow">
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
    </div>
    <div className="p-6 pt-0 mt-auto">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group"
      >
        <span>{t('details')}</span>
        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </motion.div>
);

const NozzleSystems = () => {
  const { t } = useTranslation();

  const getTranslatedFeatures = (path) => {
    const features = t(path, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  };

  const nozzles = [
    {
      title: t('mastip.products_page.nozzles.series.mx.title'),
      description: t('mastip.products_page.nozzles.series.mx.description'),
      image: MXNozzle,
      link: "https://mastip.com/products/nozzles/mx/",
      features: getTranslatedFeatures('mastip.products_page.nozzles.series.mx.features')
    },
    {
      title: t('mastip.products_page.nozzles.series.bx.title'),
      description: t('mastip.products_page.nozzles.series.bx.description'),
      image: BXNozzle,
      link: "https://mastip.com/products/nozzles/bx/",
      features: getTranslatedFeatures('mastip.products_page.nozzles.series.bx.features')
    },
    {
      title: t('mastip.products_page.nozzles.series.sx.title'),
      description: t('mastip.products_page.nozzles.series.sx.description'),
      image: SXNozzle,
      link: "https://mastip.com/products/nozzles/sx/",
      features: getTranslatedFeatures('mastip.products_page.nozzles.series.sx.features')
    },
    {
      title: t('mastip.products_page.nozzles.series.flowloc.title'),
      description: t('mastip.products_page.nozzles.series.flowloc.description'),
      image: FlowLocNozzle,
      link: "https://mastip.com/products/nozzles/flowloc-technology-range/",
      features: getTranslatedFeatures('mastip.products_page.nozzles.series.flowloc.features')
    },
    {
      title: t('mastip.products_page.nozzles.series.multigate.title'),
      description: t('mastip.products_page.nozzles.series.multigate.description'),
      image: MultiGateNozzle,
      link: "https://mastip.com/products/nozzles/new-multi-gate/",
      features: getTranslatedFeatures('mastip.products_page.nozzles.series.multigate.features')
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
          <h1 className="text-5xl font-bold mb-6 text-black">{t('mastip.products_page.nozzles.title')}</h1>
          <p className="text-xl text-black/90 max-w-3xl mx-auto">
            {t('mastip.products_page.nozzles.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nozzles.map((nozzle, index) => (
            <NozzleCard t={t} key={index} {...nozzle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NozzleSystems; 