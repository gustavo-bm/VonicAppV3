import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SystemVertical from '../assets/system_vertical.jpg';
import PecasTecnicas from '../assets/pecas.jpg';
import Bicos from '../assets/bicos.jpg';
import Manifold from '../assets/manifold.jpg';
import SystemSide from '../assets/system_side_2.jpg';
import Filtro from '../assets/filtro.jpg';

const VonicProducts = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      title: t('hot_runner_systems'),
      description: t('hot_runner_systems_desc'),
      features: [
        t('hot_runner_16'),
        t('hot_runner_8')
      ],
      image: SystemVertical
    },
    {
      title: t('technical_parts'),
      description: t('technical_parts_desc'),
      features: [
        t('electrical_parts'),
        t('telecom_parts'),
        t('engineering_parts'),
        t('fiber_materials')
      ],
      image: PecasTecnicas
    },
    {
      title: t('hot_nozzles'),
      description: t('hot_nozzles_desc'),
      features: [
        t('efficient_nozzles')
      ],
      image: Bicos
    },
    {
      title: t('manifold_systems'),
      description: t('manifold_systems_desc'),
      features: [
        t('balanced_manifold')
      ],
      image: Manifold
    },
    {
      title: t('hot_half'),
      description: t('hot_half_desc'),
      features: [
        t('complete_systems'),
        t('machined_plates')
      ],
      image: SystemSide
    },
    {
      title: t('filters_equipment'),
      description: t('filters_equipment_desc'),
      features: [
        t('specific_equipment')
      ],
      image: Filtro
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
          <h1 className="text-5xl font-bold mb-6 text-white">{t('vonic_products')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('vonic_products_desc')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold mb-4 text-[#CE171F]">{product.title}</h2>
                  <p className="text-black/80 mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-black/70">
                        <span className="text-[#CE171F] mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('learn_more')}
                  </motion.button>
                </div>
                <div className="bg-gray-100 p-8 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full h-auto rounded-lg shadow-lg max-w-xs"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VonicProducts;