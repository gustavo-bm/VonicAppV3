import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Importando as imagens
import HotValves from '../assets/mastip/hot_halves/hot_half.png';
import Manifold from '../assets/mastip/manifolds/standard.png';
import ValveGate from '../assets/mastip/valve_gate/valve_gate.png';
import Nozzles from '../assets/mastip/nozzles/mx.png';
import Controllers from '../assets/mastip/controllers.png';
import Sequential from '../assets/mastip/sequential_controllers.png';
import CAE from '../assets/mastip/cae.png';
import Aquilo from '../assets/mastip/new_releases/aquilo.png';

const ProductCard = ({ title, description, image, link, isNew }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative">
      {isNew && (
        <div className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
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
      <h3 className="text-xl font-bold mb-2 text-[#CE171F]">{title}</h3>
      <p className="text-black/80 mb-4">{description}</p>
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

const MastipProducts = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      title: t('mastip.products_page.categories.new_releases.title'),
      description: t('mastip.products_page.categories.new_releases.description'),
      image: Aquilo,
      link: "/produtos/mastip/novidades",
      isNew: true
    },
    {
      title: t('mastip.products_page.categories.hot_halves.title'),
      description: t('mastip.products_page.categories.hot_halves.description'),
      image: HotValves,
      link: "/produtos/mastip/hot-halves",
      isNew: false
    },
    {
      title: t('mastip.products_page.categories.manifolds.title'),
      description: t('mastip.products_page.categories.manifolds.description'),
      image: Manifold,
      link: "/produtos/mastip/manifolds",
      isNew: false
    },
    {
      title: t('mastip.products_page.categories.valve_gates.title'),
      description: t('mastip.products_page.categories.valve_gates.description'),
      image: ValveGate,
      link: "/produtos/mastip/valve-gates",
      isNew: false
    },
    {
      title: t('mastip.products_page.categories.nozzles.title'),
      description: t('mastip.products_page.categories.nozzles.description'),
      image: Nozzles,
      link: "/produtos/mastip/nozzles",
      isNew: false
    },
    {
      title: t('mastip.products_page.categories.temperature_controllers.title'),
      description: t('mastip.products_page.categories.temperature_controllers.description'),
      image: Controllers,
      link: "/produtos/mastip/controllers",
      isNew: false
    },
    {
      title: t('mastip.products_page.categories.sequential_controllers.title'),
      description: t('mastip.products_page.categories.sequential_controllers.description'),
      image: Sequential,
      link: "/produtos/mastip/sequential",
      isNew: false
    },
    {
      title: t('mastip.products_page.categories.cae.title'),
      description: t('mastip.products_page.categories.cae.description'),
      image: CAE,
      link: "/produtos/mastip/cae",
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
          <h1 className="text-5xl font-bold mb-6 text-white">{t("mastip.title")}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t("mastip.products_page.description")}
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

export default MastipProducts;