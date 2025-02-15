import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Importando as imagens
const HotNozzles = 'https://via.placeholder.com/300x200?text=Hot+Nozzles';
const Manifolds = 'https://via.placeholder.com/300x200?text=Manifolds';
const HotHalf = 'https://via.placeholder.com/300x200?text=Hot+Half';
const Controllers = 'https://via.placeholder.com/300x200?text=Controllers';
const Filters = 'https://via.placeholder.com/300x200?text=Filters';
const NewProducts = 'https://via.placeholder.com/300x200?text=New+Products';

const ProductCard = ({ title, description, image, link, isNew }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative">
      {isNew && (
        <div className="absolute top-4 left-4 bg-[#CE171F] text-white px-4 py-1 rounded-full text-sm font-bold z-10">
          Novo
        </div>
      )}
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
      <h3 className="text-2xl font-bold mb-3 text-[#CE171F]">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center space-x-2 bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group"
      >
        <span>Ver mais</span>
        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const VonicProducts = () => {
  const { t } = useTranslation();

  const products = [
    {
      title: t('new_releases'),
      description: t('new_releases_desc'),
      image: "/products/new-releases.jpeg",
      link: "/produtos/vonic/novidades",
      isNew: true
    },
    {
      title: t('hot_nozzles'),
      description: t('hot_nozzles_desc'),
      image: "/products/hot_nozzles.jpeg",
      link: "/produtos/vonic/bicos",
      isNew: false
    },
    {
      title: t('manifolds'),
      description: t('manifolds_desc'),
      image: "/products/manifolds.jpeg",
      link: "/produtos/vonic/manifolds",
      isNew: false
    },
    {
      title: t('hot_half'),
      description: t('hot_half_desc'),
      image: "/products/hot_half.jpeg",
      link: "/produtos/vonic/hot-half",
      isNew: false
    },
    {
      title: t('controllers'),
      description: t('controllers_desc'),
      image: "/products/controllers.jpg",
      link: "/produtos/vonic/controladores",
      isNew: false
    },
    {
      title: t('filters'),
      description: t('filters_desc'),
      image: "/products/filters.jpg",
      link: "/produtos/vonic/filtros",
      isNew: false
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VonicProducts;