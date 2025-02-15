import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
          New
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
      title: "Hot Halves",
      description: "Complete Turnkey Hot Runner Systems",
      image: "/products/mastip/hot-halves.jpg",
      link: "/produtos/mastip/hot-halves",
      isNew: false
    },
    {
      title: "Manifold Systems",
      description: "Standard & Special Systems, High Cavity & Custom Layout Solutions",
      image: "/products/mastip/manifolds.jpg",
      link: "/produtos/mastip/manifolds",
      isNew: false
    },
    {
      title: "Valve Gate Technology",
      description: "Single & Multi Valve Gate Technology",
      image: "/products/mastip/valve-gates.jpg",
      link: "/produtos/mastip/valve-gates",
      isNew: false
    },
    {
      title: "Nozzles",
      description: "MX, BX, SX and FlowLoc Nozzle Ranges",
      image: "/products/mastip/nozzles.jpg",
      link: "/produtos/mastip/nozzles",
      isNew: false
    },
    {
      title: "Temperature Controllers",
      description: "Meticom series of high quality and reliable temperature controllers",
      image: "/products/mastip/controllers.jpg",
      link: "/produtos/mastip/controllers",
      isNew: false
    },
    {
      title: "Sequential Controllers",
      description: "Valve Gate Timing Devices",
      image: "/products/mastip/sequential.jpg",
      link: "/produtos/mastip/sequential",
      isNew: false
    },
    {
      title: "CAE Services",
      description: "Computer Aided Engineering for optimal performance outcomes",
      image: "/products/mastip/cae.jpg",
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
          <h1 className="text-5xl font-bold mb-6 text-white">Mastip Products</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Advanced hot runner solutions from a global leader in injection molding technology
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