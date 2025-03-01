import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ProductModel from '../../components/3D/ProductModel';

const FilterCard = ({ image, title, description, features, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-[#CE171F]">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-[#CE171F] rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="inline-flex items-center space-x-2 bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group"
      >
        <span>Ver especificações</span>
        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const Filters = () => {
  const { t } = useTranslation();

  const filters = [
    {
      title: t('mesh_filters'),
      description: t('mesh_filters_desc'),
      image: "/products/mesh-filter.jpg",
      features: [
        t('filter_features.multiple_sizes'),
        t('filter_features.high_pressure'),
        t('filter_features.easy_maintenance')
      ],
      link: "/produtos/vonic/filtros/malha"
    },
    {
      title: "Filtros de Alta Performance",
      description: "Filtros especiais para materiais técnicos e de engenharia",
      image: "/products/high-performance-filter.jpg",
      features: [
        t('filter_features.material_compatibility'),
        t('filter_features.efficient_filtration'),
        t('filter_features.temperature_resistant')
      ],
      link: "/produtos/vonic/filtros/alta-performance"
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
          <h1 className="text-5xl font-bold mb-6 text-white">{t('filter_title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('filter_description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">{t('features')}</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Filtragem eficiente de impurezas e contaminantes</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Resistência a altas pressões e temperaturas</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Sistema de troca rápida para minimizar paradas</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Compatível com diversos tipos de materiais plásticos</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <ProductModel type="filter" className="w-full h-[400px]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filters.map((filter, index) => (
            <FilterCard key={index} {...filter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters; 