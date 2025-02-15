import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SeriesCard = ({ image, title, description, features, link }) => {
  return (
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
          <span>View Specifications</span>
          <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const NozzleSeries = () => {
  const { t } = useTranslation();
  
  const series = [
    {
      title: "MX Series",
      description: "High performance nozzles for demanding applications",
      image: "/products/mastip/mx-series.jpg",
      features: [
        "Optimized thermal profile",
        "High wear resistance",
        "Suitable for engineering materials"
      ],
      link: "/produtos/mastip/nozzles/mx"
    },
    {
      title: "BX Series",
      description: "Balanced nozzles for precision molding",
      image: "/products/mastip/bx-series.jpg",
      features: [
        "Perfect balance control",
        "Minimal pressure loss",
        "Excellent thermal stability"
      ],
      link: "/produtos/mastip/nozzles/bx"
    },
    {
      title: "SX Series",
      description: "Standard nozzles for general applications",
      image: "/products/mastip/sx-series.jpg",
      features: [
        "Cost-effective solution",
        "Reliable performance",
        "Easy maintenance"
      ],
      link: "/produtos/mastip/nozzles/sx"
    },
    {
      title: "FlowLoc Series",
      description: "Advanced flow control technology",
      image: "/products/mastip/flowloc-series.jpg",
      features: [
        "Precise flow control",
        "Reduced cycle times",
        "Superior part quality"
      ],
      link: "/produtos/mastip/nozzles/flowloc"
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
          <h1 className="text-5xl font-bold mb-6 text-white">Mastip Nozzle Series</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Advanced hot runner nozzle solutions for every application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {series.map((serie, index) => (
            <SeriesCard key={index} {...serie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NozzleSeries; 