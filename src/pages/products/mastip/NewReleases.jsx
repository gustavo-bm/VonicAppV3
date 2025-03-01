import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

// Importando as imagens
import Aquilo from '../../../assets/mastip/new_releases/aquilo.png';
import GateCooling from '../../../assets/mastip/new_releases/gate_cooling.png';
import YVTipless from '../../../assets/mastip/new_releases/YV_tipless.png';

const NewProductCard = ({ title, description, image, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-[#CE171F]">{title}</h3>
      <p className="text-black/80 mb-4">{description}</p>
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

const NewReleases = () => {
  const { t } = useTranslation();

  const newProducts = [
    {
      title: "Aquilo™ Liquid Silicone Rubber",
      description: "Decks frios LSR (Liquid Silicone Rubber) customizados com tecnologia comprovada de válvula gate",
      image: Aquilo,
      link: "https://mastip.com/products/new-products/aquilo-liquid-silicone-runner/"
    },
    {
      title: "Gate Cooling Inserts",
      description: "Melhore o desempenho do gate da câmara quente através do resfriamento otimizado do gate",
      image: GateCooling,
      link: "https://mastip.com/products/new-products/gate-cooling-inserts/"
    },
    {
      title: "YV Tipless Nut",
      description: "Simplifique seus requisitos de moldagem valve gate com as porcas YV Tipless",
      image: YVTipless,
      link: "https://mastip.com/products/new-products/yv-tipless-nut/"
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
          <h1 className="text-5xl font-bold mb-6 text-white">Novos Lançamentos Mastip</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Fique por dentro das últimas inovações em tecnologia de câmara quente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product, index) => (
            <NewProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewReleases; 