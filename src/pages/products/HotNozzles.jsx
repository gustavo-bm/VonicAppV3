import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SeriesCard = ({ image, title, description, features, link }) => (
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

const HotNozzles = () => {
  const series = [
    {
      title: "Série VH",
      description: "Bicos de válvula para aplicações de alta performance",
      image: "/products/vh-series.jpg",
      features: [
        "Controle preciso de temperatura",
        "Design compacto",
        "Fácil manutenção"
      ],
      link: "/produtos/vonic/bicos/vh"
    },
    {
      title: "Série VT",
      description: "Bicos térmicos para aplicações gerais",
      image: "/products/vt-series.jpg",
      features: [
        "Excelente distribuição térmica",
        "Múltiplas opções de pontas",
        "Alta durabilidade"
      ],
      link: "/produtos/vonic/bicos/vt"
    },
    {
      title: "Série VP",
      description: "Bicos para peças técnicas e engenharia",
      image: "/products/vp-series.jpg",
      features: [
        "Ideal para materiais técnicos",
        "Alta resistência ao desgaste",
        "Perfil térmico otimizado"
      ],
      link: "/produtos/vonic/bicos/vp"
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
          <h1 className="text-5xl font-bold mb-6 text-white">Bicos de Injeção</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Descubra nossa linha completa de bicos de injeção, projetados para máxima eficiência e precisão em suas aplicações.
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

export default HotNozzles; 